import { ACCENT } from "../accent";

// Nimble mark: the letter N drawn as a workflow path, ending in an accent node.
export default function LogoMark({
  size = 28,
  ink = "#1E1B16",
  ground = "#F4F1EA",
}: {
  size?: number;
  ink?: string;
  ground?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 108 108" aria-hidden="true" focusable="false">
      <polyline points="16,92 16,16 92,92 92,16" fill="none" stroke={ink} strokeWidth="7" strokeLinejoin="miter" />
      <circle cx="16" cy="92" r="9" fill={ground} stroke={ink} strokeWidth="6" />
      <circle cx="16" cy="16" r="9" fill={ink} />
      <circle cx="92" cy="92" r="9" fill={ink} />
      <circle cx="92" cy="16" r="11" fill={ACCENT} />
    </svg>
  );
}
