// Receives visit/session/form events from the client and forwards a formatted
// notification to a Telegram chat. Country is derived from Vercel geo headers
// for high-volume events; submissions (form/job) additionally do an accurate
// external geo lookup, since Vercel occasionally mislabels regional IP blocks.
// No-ops gracefully if the Telegram env vars aren't set.

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
// Job applications go to a separate group; falls back to the main chat if unset.
const JOBS_CHAT_ID = process.env.TELEGRAM_JOBS_CHAT_ID || CHAT_ID;

export const dynamic = "force-dynamic";

const BOT_RE =
  /bot|crawl|spider|spyder|slurp|headless|puppeteer|playwright|selenium|phantom|lighthouse|monitor|scrap|facebookexternalhit|gptbot|claudebot|perplexity|bingbot|googlebot|yandex|ahrefs|semrush/i;

function country(headers) {
  const code = (headers.get("x-vercel-ip-country") || "").toUpperCase();
  if (!code || code.length !== 2) return "Unknown";
  let name = code;
  try {
    name = new Intl.DisplayNames(["en"], { type: "region" }).of(code) || code;
  } catch (e) {}
  const flag = String.fromCodePoint(
    ...[...code].map((c) => 127397 + c.charCodeAt(0))
  );
  return `${flag} ${name}`;
}

// Normalise a Telegram handle: prefix "@" when the user omitted it. Links
// (t.me/..., https://...) are left untouched.
function tgHandle(v) {
  const s = String(v || "").trim();
  if (!s || s.startsWith("@") || /^(https?:\/\/|t\.me\/)/i.test(s)) return s;
  return `@${s}`;
}

// Real client IP as seen by Vercel's edge (first hop in x-forwarded-for).
function clientIp(headers) {
  const xff = headers.get("x-forwarded-for") || "";
  return xff.split(",")[0].trim() || headers.get("x-real-ip") || "";
}

// Accurate geo via an external lookup. Used only for submissions, where the
// extra latency is fine and the correct country actually matters. Returns a
// "flag Country (City, Region)" string, or null on any failure/timeout.
async function accurateGeo(ip) {
  if (!ip) return null;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 2500);
    const res = await fetch(`https://ipwho.is/${ip}`, { signal: ctrl.signal });
    clearTimeout(timer);
    const d = await res.json();
    if (!d || d.success === false || !d.country) return null;
    const flag = d.flag && d.flag.emoji ? d.flag.emoji : "";
    const place = [d.city, d.region].filter(Boolean).join(", ");
    const isp = d.connection && d.connection.isp ? d.connection.isp : "";
    return {
      loc: `${flag} ${d.country}${place ? ` (${place})` : ""}`.trim(),
      isp
    };
  } catch (e) {
    return null;
  }
}

// Render UTM tags (source/medium/campaign/term/content) as a compact line,
// e.g. "🏷 utm: source=clutch.co · medium=referral_profile". Null if none.
function utmLine(utm) {
  if (!utm || typeof utm !== "object") return null;
  const ORDER = ["source", "medium", "campaign", "term", "content"];
  const keys = Object.keys(utm);
  const ordered = [
    ...ORDER.filter((k) => k in utm),
    ...keys.filter((k) => !ORDER.includes(k))
  ];
  const parts = ordered
    .filter((k) => utm[k])
    .map((k) => `${k}=${utm[k]}`);
  return parts.length ? `🏷 utm: ${parts.join(" · ")}` : null;
}

function format(p, loc) {
  if (p.type === "enter") {
    return [
      "🟢 Новый визит",
      p.bot ? "🤖 Бот" : "👤 Человек",
      `📍 ${loc}`,
      `🔗 Вход: ${p.page || "/"}`,
      `↩️ Источник: ${p.referrer || "прямой"}`,
      utmLine(p.utm),
      p.device ? `💻 ${p.device}` : null
    ]
      .filter(Boolean)
      .join("\n");
  }
  if (p.type === "session") {
    const d = Number(p.durationSec) || 0;
    const m = Math.floor(d / 60);
    const s = d % 60;
    const pages = Array.isArray(p.pages) ? p.pages.join(" → ") : "";
    return [
      "📊 Сессия завершена",
      `📍 ${loc} · ⏱ ${m}м ${s}с`,
      pages ? `👁 ${pages}` : null
    ]
      .filter(Boolean)
      .join("\n");
  }
  if (p.type === "form") {
    const lines = ["📝 Форма отправлена!", `📍 ${loc}`];
    if (p.fullName) lines.push(`👤 ${p.fullName}`);
    if (p.email) lines.push(`✉️ ${p.email}`);
    if (p.company) lines.push(`🏢 ${p.company}`);
    if (p.projectType) lines.push(`🧩 ${p.projectType}`);
    if (p.projectPrice) lines.push(`💰 ${p.projectPrice}`);
    if (p.details) lines.push(`💬 ${p.details}`);
    if (p._isp) lines.push(`🌐 ${p._isp}`);
    if (Array.isArray(p.pages) && p.pages.length)
      lines.push(`🔗 Смотрел: ${p.pages.join(" → ")}`);
    return lines.join("\n");
  }
  if (p.type === "job") {
    const lines = ["💼 Заявка на роботу!", `📍 ${loc}`];
    if (p.fullName) lines.push(`👤 ${p.fullName}`);
    if (p.telegram) lines.push(`✈️ ${tgHandle(p.telegram)}`);
    if (p.position) lines.push(`🧩 Позиція: ${p.position}`);
    if (p.skills) lines.push(`🛠 Вміє: ${p.skills}`);
    if (p._isp) lines.push(`🌐 ${p._isp}`);
    return lines.join("\n");
  }
  return null;
}

export async function POST(request) {
  if (!TOKEN || !CHAT_ID) {
    return Response.json({ skipped: "telegram env not set" });
  }

  let payload;
  try {
    payload = JSON.parse(await request.text());
  } catch (e) {
    return Response.json({ error: "bad json" }, { status: 400 });
  }

  // Combine the client-side hint with a server-side User-Agent check.
  const ua = request.headers.get("user-agent") || "";
  payload.bot = payload.bot === true || BOT_RE.test(ua);

  // Fast Vercel header by default; accurate external lookup for submissions.
  let loc = country(request.headers);
  if (payload.type === "form" || payload.type === "job") {
    const geo = await accurateGeo(clientIp(request.headers));
    if (geo) {
      loc = geo.loc;
      payload._isp = geo.isp;
    }
  }

  const text = format(payload, loc);
  if (!text) return Response.json({ error: "unknown type" }, { status: 400 });

  const chatId = payload.type === "job" ? JOBS_CHAT_ID : CHAT_ID;

  try {
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true
      })
    });
  } catch (e) {}

  return Response.json({ ok: true });
}
