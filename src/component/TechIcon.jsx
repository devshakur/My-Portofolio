function TechGlyph({ name, accent }) {
  const stroke = accent || "var(--accent)";
  const frame = "h-full w-full";

  if (name === "React" || name === "React Native") {
    return (
      <svg viewBox="0 0 24 24" className={frame} aria-hidden>
        <circle cx="12" cy="12" r="2" fill={stroke} />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={stroke} strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={stroke} strokeWidth="1.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={stroke} strokeWidth="1.2" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  if (name === "Next.js") {
    return <span className="text-xl font-semibold leading-none" style={{ color: stroke }}>N</span>;
  }

  if (name === "Node.js") {
    return <span className="text-sm font-bold leading-none" style={{ color: stroke }}>JS</span>;
  }

  if (name === "Express") {
    return <span className="text-xl font-semibold leading-none" style={{ color: stroke }}>ex</span>;
  }

  if (name === "Expo") {
    return (
      <svg viewBox="0 0 24 24" className={frame} aria-hidden>
        <path d="M4 15c2-6 4-8 8-8s6 2 8 8" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.4" fill={stroke} />
      </svg>
    );
  }

  if (name === "Git & GitHub") {
    return (
      <svg viewBox="0 0 24 24" className={frame} aria-hidden>
        <circle cx="6" cy="6" r="2" fill="none" stroke={stroke} strokeWidth="1.6" />
        <circle cx="6" cy="18" r="2" fill="none" stroke={stroke} strokeWidth="1.6" />
        <circle cx="18" cy="12" r="2" fill="none" stroke={stroke} strokeWidth="1.6" />
        <path d="M6 8v8M8 6c6 0 8 4 8 6" fill="none" stroke={stroke} strokeWidth="1.6" />
      </svg>
    );
  }

  if (name === "Figma") {
    return (
      <svg viewBox="0 0 24 24" className={frame} aria-hidden>
        <circle cx="9" cy="6" r="2.2" fill="#F24E1E" />
        <circle cx="15" cy="6" r="2.2" fill="#FF7262" />
        <circle cx="9" cy="12" r="2.2" fill="#A259FF" />
        <circle cx="15" cy="12" r="2.2" fill="#1ABCFE" />
        <circle cx="9" cy="18" r="2.2" fill="#0ACF83" />
      </svg>
    );
  }

  if (name === "Angular") {
    return <span className="text-xl font-bold leading-none" style={{ color: stroke }}>A</span>;
  }

  if (name === "TypeScript") {
    return <span className="rounded-md px-1.5 py-0.5 text-[11px] font-bold" style={{ background: stroke, color: "var(--badge-ink)" }}>TS</span>;
  }

  if (name === "JavaScript (ES6+)") {
    return <span className="rounded-md px-1.5 py-0.5 text-[11px] font-bold" style={{ background: stroke, color: "var(--badge-ink)" }}>JS</span>;
  }

  if (name === "HTML5") {
    return <span className="text-lg font-bold leading-none" style={{ color: stroke }}>5</span>;
  }

  if (name === "CSS3") {
    return <span className="text-lg font-bold leading-none" style={{ color: stroke }}>3</span>;
  }

  if (name === "Design System" || name === "Scalable UI Systems") {
    return (
      <svg viewBox="0 0 24 24" className={frame} aria-hidden>
        <rect x="3" y="3" width="7" height="7" rx="1.5" fill="none" stroke={stroke} strokeWidth="1.6" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" fill="none" stroke={stroke} strokeWidth="1.6" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" fill="none" stroke={stroke} strokeWidth="1.6" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" fill="none" stroke={stroke} strokeWidth="1.6" />
      </svg>
    );
  }

  if (name === "Performance Engineering") {
    return (
      <svg viewBox="0 0 24 24" className={frame} aria-hidden>
        <path d="M4 16a8 8 0 0 1 16 0" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 16l5-5" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.3" fill={stroke} />
      </svg>
    );
  }

  if (name === "Api $ State Management") {
    return (
      <svg viewBox="0 0 24 24" className={frame} aria-hidden>
        <circle cx="6" cy="16" r="2" fill={stroke} />
        <circle cx="12" cy="6" r="2" fill={stroke} />
        <circle cx="18" cy="16" r="2" fill={stroke} />
        <path d="M7.5 14.5L10.5 8M13.5 8l3 6.5M8 16h8" fill="none" stroke={stroke} strokeWidth="1.4" />
      </svg>
    );
  }

  if (name === "Accessibility (WCAG 2.1)" || name === "WCAG") {
    return (
      <svg viewBox="0 0 24 24" className={frame} aria-hidden>
        <circle cx="12" cy="12" r="9" fill="none" stroke={stroke} strokeWidth="1.6" />
        <circle cx="12" cy="8" r="1.3" fill={stroke} />
        <path d="M8 11h8M12 11v4M12 15l-2 3M12 15l2 3" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "Testing & Quality") {
    return (
      <svg viewBox="0 0 24 24" className={frame} aria-hidden>
        <circle cx="12" cy="12" r="9" fill="none" stroke={stroke} strokeWidth="1.6" />
        <path d="M8 12.5l2.5 2.5L16 9" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "Tailwind CSS") {
    return (
      <svg viewBox="0 0 32 20" className={frame} aria-hidden>
        <path d="M8 12c2-4 4-6 8-6 6 0 7 4.5 10 4.5 2 0 3.2-1 4-2-2 4-4 6-8 6-6 0-7.2-4.5-10-4.5-2 0-3.2 1-4 2z" fill={stroke} />
        <path d="M2 18c2-4 4-6 8-6 6 0 7 4.5 10 4.5 2 0 3.2-1 4-2-2 4-4 6-8 6-6 0-7.2-4.5-10-4.5-2 0-3.2 1-4 2z" fill={stroke} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="none" stroke={stroke} strokeWidth="1.6" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" fill="none" stroke={stroke} strokeWidth="1.6" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="none" stroke={stroke} strokeWidth="1.6" />
      <path d="M14 17.5h7M17.5 14v7" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function TechIcon({ name, accent, className = "h-7 w-7" }) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <TechGlyph name={name} accent={accent} />
    </span>
  );
}

export default TechIcon;
