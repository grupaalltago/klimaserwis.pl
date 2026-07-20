import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/content/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default Open Graph / social share image. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 18,
            background: "#1a81f5",
            color: "white",
            fontSize: 36,
            fontWeight: 700,
          }}
        >
          K
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#0f1c2e",
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 28, color: "#5b6b7c", lineHeight: 1.35 }}>
            {siteConfig.tagline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
