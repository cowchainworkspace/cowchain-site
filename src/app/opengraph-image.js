import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cowchain — Web3 Development Company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dynamically generated Open Graph / social card (exactly 1200x630, lightweight).
// Applies site-wide as the default OG/Twitter image.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(120% 120% at 80% 0%, #4c1d95 0%, #1a0b2e 45%, #050509 100%)",
          padding: "72px",
          color: "#ffffff",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 40, fontWeight: 700, letterSpacing: 6 }}>
          COWCHAIN
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.05, maxWidth: 1000 }}>
            Web3 Development Company
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#c4b5fd", marginTop: 24, maxWidth: 1000 }}>
            150+ blockchain projects since 2020 — DeFi, RWA, stablecoins, AI agents & smart contracts.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              background: "#ffffff",
              color: "#000000",
              fontSize: 28,
              fontWeight: 700,
              padding: "18px 36px",
              borderRadius: 999
            }}
          >
            Get a free quote
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a78bfa" }}>cowchain.io</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
