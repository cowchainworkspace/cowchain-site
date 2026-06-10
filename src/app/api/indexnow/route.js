import sitemap from "@/app/sitemap";

// IndexNow: instantly notify Bing, Yandex, Seznam (and ChatGPT Search via Bing)
// when content changes. Key is also served as a static file in /public.
const KEY = "8f3c1a9e7b2d4f6a0c5e8d1b3a7f9c2e";
const HOST = "cowchain.io";

export const dynamic = "force-dynamic";

export async function GET(request) {
  // Light guard so the endpoint isn't trivially hammered. It can only ever
  // submit cowchain.io's own URLs, so the blast radius is tiny regardless.
  const { searchParams } = new URL(request.url);
  if (searchParams.get("key") !== KEY) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  let urls = [];
  try {
    const entries = await sitemap();
    urls = entries.map((e) => e.url);
  } catch (err) {
    return Response.json(
      { error: "could not build url list", detail: String(err) },
      { status: 500 }
    );
  }

  if (!urls.length) {
    return Response.json({ error: "no urls" }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `https://${HOST}/${KEY}.txt`,
        urlList: urls
      })
    });
    return Response.json({ submitted: urls.length, indexnowStatus: res.status });
  } catch (err) {
    return Response.json(
      { error: "indexnow request failed", detail: String(err) },
      { status: 502 }
    );
  }
}
