/**
 * Generated "technical drawing" artwork used wherever a photo would sit.
 * Deterministic per seed, so server and client render the same SVG.
 */

type Tone = "midnight" | "cobalt" | "paper" | "sky";
type Palette = { bg: string; line: string; accent: string; hi: string };

const palettes: Record<Tone, Palette> = {
  midnight: { bg: "#0e1330", line: "rgba(185,198,255,0.32)", accent: "#2b44ff", hi: "#b9c6ff" },
  cobalt: { bg: "#2b44ff", line: "rgba(255,255,255,0.38)", accent: "#0e1330", hi: "#ffffff" },
  paper: { bg: "#f1f3f7", line: "rgba(14,19,48,0.2)", accent: "#2b44ff", hi: "#0e1330" },
  sky: { bg: "#b9c6ff", line: "rgba(14,19,48,0.28)", accent: "#2b44ff", hi: "#0e1330" },
};

const tones: Tone[] = ["midnight", "cobalt", "paper", "sky"];

function rng(seed: number) {
  let a = (seed + 1) * 2654435761;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const W = 800;
const H = 600;
type V = { seed: number; p: Palette };

function Orbit({ seed, p }: V) {
  const r = rng(seed);
  const cx = 300 + r() * 260;
  const cy = 220 + r() * 160;
  const rings = Array.from({ length: 9 }, (_, i) => 50 + i * 46);
  const nodes = rings
    .filter((_, i) => i % 2 === 1)
    .map((rad) => {
      const a = r() * Math.PI * 2;
      return { x: cx + Math.cos(a) * rad, y: cy + Math.sin(a) * rad };
    });
  return (
    <g fill="none">
      {rings.map((rad, i) => (
        <circle key={i} cx={cx} cy={cy} r={rad} stroke={p.line} strokeWidth={i === 4 ? 2 : 1} />
      ))}
      <line x1={cx - 600} y1={cy - 600} x2={cx + 600} y2={cy + 600} stroke={p.hi} strokeWidth={1.5} opacity={0.5} />
      <line x1={cx - 600} y1={cy + 600} x2={cx + 600} y2={cy - 600} stroke={p.hi} strokeWidth={1.5} opacity={0.5} />
      {nodes.map((n, i) => (
        <line key={`l${i}`} x1={cx} y1={cy} x2={n.x} y2={n.y} stroke={p.accent} strokeWidth={1.5} />
      ))}
      <circle cx={cx} cy={cy} r={22} fill={p.accent} />
      {nodes.map((n, i) => (
        <circle key={`n${i}`} cx={n.x} cy={n.y} r={7} fill={p.bg} stroke={p.hi} strokeWidth={2} />
      ))}
    </g>
  );
}

function Lattice({ seed, p }: V) {
  const r = rng(seed);
  const step = 70;
  const lines = [];
  for (let k = -H; k < W + H; k += step) {
    lines.push(<line key={`a${k}`} x1={k} y1={0} x2={k + H} y2={H} stroke={p.line} />);
    lines.push(<line key={`b${k}`} x1={k} y1={H} x2={k + H} y2={0} stroke={p.line} />);
  }
  const cells = [];
  let i = Math.floor(r() * 4) + 2;
  let j = Math.floor(r() * 3) + 3;
  for (let n = 0; n < 8; n++) {
    const x = i * step;
    const y = j * step;
    const d = `M${x} ${y - step / 2} L${x + step / 2} ${y} L${x} ${y + step / 2} L${x - step / 2} ${y} Z`;
    cells.push(<path key={n} d={d} fill={n === 4 ? p.accent : p.hi} opacity={n === 4 ? 1 : 0.1 + n * 0.05} />);
    i += 1;
    j += r() > 0.5 ? 1 : -1;
    j = Math.max(1, Math.min(7, j));
  }
  return (
    <g>
      {lines}
      {cells}
    </g>
  );
}

function Contour({ seed, p }: V) {
  const r = rng(seed);
  const f = 0.006 + r() * 0.006;
  const phase = r() * 6;
  const paths = Array.from({ length: 16 }, (_, i) => {
    const base = 40 + i * 36;
    const amp = 30 + Math.sin(i * 0.5 + phase) * 26;
    let d = "";
    for (let x = -20; x <= W + 20; x += 20) {
      const y = base + Math.sin(x * f + phase + i * 0.22) * amp + Math.sin(x * f * 2.7 + i) * 8;
      d += `${x === -20 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)} `;
    }
    return d;
  });
  const hiIdx = 5 + Math.floor(r() * 6);
  return (
    <g fill="none">
      {paths.map((d, i) => (
        <path key={i} d={d} stroke={i === hiIdx ? p.accent : p.line} strokeWidth={i === hiIdx ? 3 : 1.2} />
      ))}
    </g>
  );
}

function Blocks({ seed, p }: V) {
  const r = rng(seed);
  const g = 40;
  const boxes = Array.from({ length: 7 }, () => {
    const w = (2 + Math.floor(r() * 4)) * g;
    const h = (1 + Math.floor(r() * 3)) * g;
    const x = Math.floor(r() * ((W - w) / g)) * g;
    const y = Math.floor(r() * ((H - h) / g)) * g;
    return { x, y, w, h };
  });
  const filled = Math.floor(r() * boxes.length);
  const dots = [];
  for (let x = g; x < W; x += g) for (let y = g; y < H; y += g) dots.push(<circle key={`${x}-${y}`} cx={x} cy={y} r={1.4} fill={p.line} />);
  return (
    <g>
      {dots}
      {boxes.slice(1).map((b, i) => {
        const a = boxes[i];
        return (
          <path
            key={`c${i}`}
            d={`M${a.x + a.w / 2} ${a.y + a.h / 2} H${b.x + b.w / 2} V${b.y + b.h / 2}`}
            fill="none"
            stroke={p.hi}
            strokeWidth={1.5}
            opacity={0.6}
          />
        );
      })}
      {boxes.map((b, i) => (
        <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill={i === filled ? p.accent : p.bg} stroke={i === filled ? p.accent : p.hi} strokeWidth={1.5} />
      ))}
    </g>
  );
}

const variants = [Orbit, Lattice, Contour, Blocks];

export default function Art({
  seed,
  tone,
  className = "",
  label,
}: {
  seed: number;
  tone?: Tone;
  className?: string;
  label?: string;
}) {
  const p = palettes[tone ?? tones[seed % tones.length]];
  const Variant = variants[(seed + Math.floor(seed / 4)) % variants.length];
  return (
    <div className={`art-frame overflow-hidden ${/\b(absolute|fixed)\b/.test(className) ? "" : "relative"} ${className}`} style={{ background: p.bg }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        role={label ? "img" : undefined}
        aria-label={label}
        aria-hidden={label ? undefined : true}
      >
        <Variant seed={seed} p={p} />
      </svg>
    </div>
  );
}
