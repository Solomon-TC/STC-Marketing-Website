import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "STC Marketing — Local advertising that gets seen.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b0b0c",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        {/* top row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "2px solid #6b8a72",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f5f4f1",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <span style={{ color: "#f5f4f1", fontSize: 22, letterSpacing: 2 }}>
            STC{" "}
            <span style={{ color: "#6b8a72" }}>Marketing</span>
          </span>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#f5f4f1",
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Be the business{" "}
            <span style={{ color: "#c9a06a", fontStyle: "italic" }}>everyone</span>{" "}
            in town knows.
          </div>
          <div style={{ fontSize: 24, color: "#a3a3aa", maxWidth: 700 }}>
            Oversized direct mail postcards &amp; high-end websites for local businesses.
          </div>
        </div>

        {/* bottom row — stats */}
        <div style={{ display: "flex", gap: 64 }}>
          {[
            ["9×12″", "Oversized format"],
            ["5,000", "Households per drop"],
            ["1 per", "Industry on each card"],
          ].map(([stat, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ color: "#f5f4f1", fontSize: 32, fontWeight: 700 }}>{stat}</span>
              <span style={{ color: "#6b6b72", fontSize: 13, letterSpacing: 3, textTransform: "uppercase" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
