export default function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-charcoal to-ink grain ${className}`}
    >
      <svg
        aria-hidden
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        className="text-mist"
      >
        <path
          d="M4 8a2 2 0 0 1 2-2h1.2a1 1 0 0 0 .86-.49l.68-1.13A1 1 0 0 1 9.6 4h4.8a1 1 0 0 1 .86.38l.68 1.13a1 1 0 0 0 .86.49H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.3" />
      </svg>
      <span className="text-xs uppercase tracking-widest text-mist text-center px-6">
        {label}
      </span>
    </div>
  );
}
