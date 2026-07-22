import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Atlas Global — Research, Architecture & Platforms";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "84px",
          color: "white",
          background:
            "radial-gradient(circle at 78% 34%, rgba(59,130,246,.42), transparent 30%), radial-gradient(circle at 22% 72%, rgba(124,58,237,.35), transparent 34%), #020611",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: "0.28em", color: "#a78bfa" }}>
          ATLAS GLOBAL
        </div>
        <div style={{ marginTop: 42, maxWidth: 920, fontSize: 72, lineHeight: 1.05, fontWeight: 650 }}>
          Arquitetamos o futuro.
          <br />
          Construímos o que impulsiona o mundo.
        </div>
        <div style={{ marginTop: 40, fontSize: 24, color: "#a8b1c2" }}>
          Research • Architecture • Platforms
        </div>
      </div>
    ),
    size,
  );
}
