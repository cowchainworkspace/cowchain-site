// Receives visit/session/form events from the client and forwards a formatted
// notification to a Telegram chat. Country is derived from Vercel geo headers.
// No-ops gracefully if the Telegram env vars aren't set.

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

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

function format(p, loc) {
  if (p.type === "enter") {
    return [
      "🟢 Новый визит",
      p.bot ? "🤖 Бот" : "👤 Человек",
      `📍 ${loc}`,
      `🔗 Вход: ${p.page || "/"}`,
      `↩️ Источник: ${p.referrer || "прямой"}`,
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
    if (Array.isArray(p.pages) && p.pages.length)
      lines.push(`🔗 Смотрел: ${p.pages.join(" → ")}`);
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

  const text = format(payload, country(request.headers));
  if (!text) return Response.json({ error: "unknown type" }, { status: 400 });

  try {
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        disable_web_page_preview: true
      })
    });
  } catch (e) {}

  return Response.json({ ok: true });
}
