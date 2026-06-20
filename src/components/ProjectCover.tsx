import { useId } from "react";
import type { LucideIcon } from "lucide-react";

export type CoverMotif = "risk" | "retention" | "agents" | "shield";

interface ProjectCoverProps {
  icon: LucideIcon;
  hue: number;
  hue2: number;
  motif: CoverMotif;
  className?: string;
  large?: boolean;
}

/**
 * Bespoke per-project cover art. Each motif is a hand-built SVG visualization
 * themed to the project (declining risk chart, retention-uplift curve,
 * dual-agent network, tiered shield). Renders instantly, scales crisply,
 * and reads as intentional design rather than stock imagery.
 */
const ProjectCover = ({ icon: Icon, hue, hue2, motif, className = "", large = false }: ProjectCoverProps) => {
  const uid = useId().replace(/:/g, "");
  const c1 = `hsl(${hue} 85% 62%)`;
  const c2 = `hsl(${hue2} 85% 60%)`;
  const gradId = `g-${uid}`;
  const glowId = `glow-${uid}`;
  const areaId = `area-${uid}`;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: `hsl(${hue} 30% 6%)` }}
      aria-hidden="true"
    >
      {/* ambient hue wash */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105"
        style={{
          background: `
            radial-gradient(70% 80% at 20% 15%, hsl(${hue} 80% 55% / 0.35), transparent 60%),
            radial-gradient(60% 70% at 85% 90%, hsl(${hue2} 80% 52% / 0.28), transparent 60%)
          `,
        }}
      />

      {/* fine grid */}
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100% / 0.7) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.7) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* motif */}
      <svg
        viewBox="0 0 400 240"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={c1} />
            <stop offset="100%" stopColor={c2} />
          </linearGradient>
          <linearGradient id={areaId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={c1} stopOpacity="0.45" />
            <stop offset="100%" stopColor={c1} stopOpacity="0" />
          </linearGradient>
          <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {motif === "risk" && (
          <>
            <path
              d="M0,150 L40,120 L80,135 L120,95 L160,140 L200,110 L240,165 L280,150 L320,195 L360,180 L400,215 L400,240 L0,240 Z"
              fill={`url(#${areaId})`}
            />
            <polyline
              points="0,150 40,120 80,135 120,95 160,140 200,110 240,165 280,150 320,195 360,180 400,215"
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              filter={`url(#${glowId})`}
            />
            {[[120, 95], [240, 165], [320, 195]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="3.5" fill="#fff" stroke={c1} strokeWidth="2" />
            ))}
          </>
        )}

        {motif === "retention" && (
          <>
            {/* uplift gap between baseline and treated cohort */}
            <path
              d="M0,170 C80,150 140,120 200,110 C260,100 320,80 400,60 L400,90 C320,108 260,128 200,138 C140,148 80,178 0,196 Z"
              fill={`url(#${areaId})`}
            />
            <path
              d="M0,196 C80,178 140,148 200,138 C260,128 320,108 400,90"
              fill="none"
              stroke={c2}
              strokeWidth="2"
              strokeDasharray="5 5"
              opacity="0.7"
            />
            <path
              d="M0,170 C80,150 140,120 200,110 C260,100 320,80 400,60"
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth="2.5"
              strokeLinecap="round"
              filter={`url(#${glowId})`}
            />
            <circle cx="400" cy="60" r="4" fill="#fff" stroke={c1} strokeWidth="2" />
          </>
        )}

        {motif === "agents" && (
          <>
            {[[140, 120, 220, 90], [140, 120, 230, 170], [260, 120, 320, 80], [260, 120, 330, 165], [140, 120, 260, 120]].map(
              ([x1, y1, x2, y2], i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c2} strokeWidth="1.5" opacity="0.45" />
              )
            )}
            <circle cx="140" cy="120" r="26" fill="none" stroke={`url(#${gradId})`} strokeWidth="2.5" filter={`url(#${glowId})`} />
            <circle cx="260" cy="120" r="26" fill="none" stroke={`url(#${gradId})`} strokeWidth="2.5" filter={`url(#${glowId})`} />
            <circle cx="140" cy="120" r="6" fill={c1} />
            <circle cx="260" cy="120" r="6" fill={c2} />
            {[[220, 90], [230, 170], [320, 80], [330, 165]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="4" fill="#fff" opacity="0.85" />
            ))}
          </>
        )}

        {motif === "shield" && (
          <>
            <path
              d="M200,55 L255,78 L255,128 C255,160 230,182 200,193 C170,182 145,160 145,128 L145,78 Z"
              fill={`url(#${areaId})`}
              stroke={`url(#${gradId})`}
              strokeWidth="2.5"
              strokeLinejoin="round"
              filter={`url(#${glowId})`}
            />
            <line x1="145" y1="105" x2="255" y2="105" stroke={c2} strokeWidth="1.5" opacity="0.5" />
            <line x1="147" y1="132" x2="253" y2="132" stroke={c2} strokeWidth="1.5" opacity="0.5" />
            <path d="M182,128 L196,142 L222,112" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
      </svg>

      {/* legibility gradient toward bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

      {/* glyph badge */}
      <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-black/40 border border-white/15 backdrop-blur-sm flex items-center justify-center">
        <Icon className={large ? "h-5 w-5 text-white" : "h-4 w-4 text-white"} strokeWidth={1.75} />
      </div>

      {/* top sheen */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>
  );
};

export default ProjectCover;
