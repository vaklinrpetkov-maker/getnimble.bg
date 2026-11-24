import { ImageResponse } from "next/og";
import { ACCENT } from "./accent";

// Social preview image (1200x630), generated once at build time.
export const dynamic = "force-static";
export const alt = "Nimble: автоматизация на бизнес процеси и AI решения за бизнеса";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#1E1B16";
const GROUND = "#F4F1EA";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: GROUND,
          color: INK,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg width="96" height="96" viewBox="0 0 108 108">
            <polyline points="16,92 16,16 92,92 92,16" fill="none" stroke={INK} strokeWidth="7" />
            <circle cx="16" cy="92" r="9" fill={GROUND} stroke={INK} strokeWidth="6" />
            <circle cx="16" cy="16" r="9" fill={INK} />
            <circle cx="92" cy="92" r="9" fill={INK} />
            <circle cx="92" cy="16" r="11" fill={ACCENT} />
          </svg>
          <div style={{ fontSize: 72, letterSpacing: -2 }}>Nimble</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 58, lineHeight: 1.1 }}>Автоматизация на бизнес процеси</div>
          <div style={{ fontSize: 58, lineHeight: 1.1, color: ACCENT }}>с изкуствен интелект</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "#55504A", borderTop: `2px solid ${INK}`, paddingTop: 24 }}>
          <div>AI асистенти · CRM и ERP системи · Обучение</div>
          <div>getnimble.bg</div>
        </div>
      </div>
    ),
    size
  );
}
