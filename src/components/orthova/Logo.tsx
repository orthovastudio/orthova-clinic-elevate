type Props = { variant?: "light" | "dark"; compact?: boolean };

export function Logo({ variant = "light", compact = false }: Props) {
  const fg = variant === "light" ? "var(--ivory)" : "var(--navy-deep)";
  const sub = variant === "light" ? "var(--slate-accent)" : "var(--muted-foreground)";
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true">
        <defs>
          <linearGradient id="qg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor={fg} stopOpacity="0.95" />
            <stop offset="100%" stopColor={fg} stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="18" fill="none" stroke="url(#qg)" strokeWidth="1.5" />
        <path
          d="M20 6 a14 14 0 1 1 -9.9 23.9"
          fill="none"
          stroke="url(#qg)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 11 a9 9 0 1 1 -6.4 15.4"
          fill="none"
          stroke={fg}
          strokeOpacity="0.85"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <line x1="26" y1="26" x2="32" y2="32" stroke={fg} strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className="font-display text-[1.35rem] tracking-[0.18em]"
          style={{ color: fg }}
        >
          ORTHOVA
        </span>
        {!compact && (
          <span
            className="mt-1 text-[0.6rem] uppercase tracking-[0.32em] italic font-display"
            style={{ color: sub }}
          >
            The Art Of Alignment
          </span>
        )}
      </div>
    </div>
  );
}
