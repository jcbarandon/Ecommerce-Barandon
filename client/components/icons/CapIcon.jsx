export default function CapIcon({ className = "w-8 h-8", ...props }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="currentColor" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        {/* Cap crown */}
        <path d="M20,60 C20,25 80,25 80,60" fill="#F8FAFC" />
        {/* Cap brim */}
        <path d="M10,60 Q40,55 90,65" fill="none" />
        {/* Top button */}
        <circle cx="50" cy="27" r="3" fill="currentColor" />
        {/* Panel lines */}
        <path d="M50,27 C50,40 40,60 40,60" fill="none" />
        <path d="M50,27 C50,40 60,60 60,60" fill="none" />

        {/* Sun and stars motif — fixed brand gold */}
        <g fill="#F59E0B" stroke="none">
          <circle cx="50" cy="45" r="4" />
          <polygon points="50,38 52,42 56,41 53,44 55,48 50,46 45,48 47,44 44,41 48,42" />
          <circle cx="42" cy="40" r="1.5" />
          <circle cx="58" cy="40" r="1.5" />
          <circle cx="50" cy="53" r="1.5" />
        </g>
      </g>
    </svg>
  );
}
