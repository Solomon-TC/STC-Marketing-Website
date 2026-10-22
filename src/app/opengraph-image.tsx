import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "STC Marketing — Exceptional websites for ambitious businesses.";
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
          backgroundImage:
            "radial-gradient(circle at 18% 12%, rgba(63, 91, 72, 0.45), transparent 45%), radial-gradient(circle at 88% 30%, rgba(201, 160, 106, 0.16), transparent 40%)",
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
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 76,
              fontWeight: 700,
              color: "#f5f4f1",
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Exceptional websites for&nbsp;
            <span style={{ color: "#c9a06a", fontStyle: "italic" }}>ambitious businesses.</span>
          </div>
          <div style={{ fontSize: 26, color: "#a3a3aa", maxWidth: 820 }}>
            Premium custom websites — designed, built, integrated, and managed for
            businesses nationwide.
          </div>
        </div>

        {/* bottom row */}
        <div style={{ display: "flex", gap: 64 }}>
          {[
            ["Custom", "No templates, ever"],
            ["Integrated", "With the tools you use"],
            ["Managed", "Hosting, updates, support"],
          ].map(([stat, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ color: "#f5f4f1", fontSize: 30, fontWeight: 700 }}>{stat}</span>
              <span style={{ color: "#808089", fontSize: 13, letterSpacing: 3, textTransform: "uppercase" }}>
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
