import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Samer H. Ismail - AI and Data Lead";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Samer H. Ismail
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#94a3b8",
              textAlign: "center",
              maxWidth: 800,
            }}
          >
            AI and Data Lead
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#64748b",
              marginTop: 20,
            }}
          >
            AI Strategy • Delivery • Adoption • Responsible Implementation
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
