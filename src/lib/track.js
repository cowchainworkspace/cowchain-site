// Lightweight client -> /api/track helpers. All failures are swallowed so
// tracking can never break the page.

export function track(payload) {
  try {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true
    }).catch(() => {});
  } catch (e) {}
}

export function trackBeacon(payload) {
  try {
    const body = JSON.stringify(payload);
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      navigator.sendBeacon(
        "/api/track",
        new Blob([body], { type: "application/json" })
      );
    } else {
      track(payload);
    }
  } catch (e) {}
}
