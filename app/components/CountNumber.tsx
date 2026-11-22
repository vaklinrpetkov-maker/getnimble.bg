// Step number that starts at 1 and rolls up to `n` when the roadmap line reaches it.
// The timing lives in globals.css (nb-count-2/3/4) and matches the nb-seg-* line keyframes.
export default function CountNumber({ n, color }: { n: 2 | 3 | 4; color: string }) {
  const digits = Array.from({ length: n }, (_, i) => i + 1);
  return (
    <span className={`nb-count nb-count-${n}`} style={{ color }}>
      {/* Real number: sets the box width and is what screen readers read. */}
      <span className="nb-count-final">{n}</span>
      <span className="nb-count-strip" aria-hidden="true">
        {digits.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </span>
    </span>
  );
}
