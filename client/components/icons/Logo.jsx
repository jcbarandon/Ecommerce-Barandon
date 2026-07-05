export default function Logo({ className = "w-10 h-10", showText = true, ...props }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Background shield */}
      <circle cx="100" cy="90" r="75" fill="currentColor" />

      {/* Stylized 8-rayed Philippine sun (fixed brand gold) */}
      <g fill="#F59E0B">
        <circle cx="100" cy="90" r="30" />
        <polygon points="95,50 100,25 105,50" />
        <polygon points="95,130 100,155 105,130" />
        <polygon points="50,85 25,90 50,95" />
        <polygon points="150,85 175,90 150,95" />
        <polygon points="68,58 45,45 58,68" />
        <polygon points="132,58 155,45 142,68" />
        <polygon points="68,122 45,135 58,112" />
        <polygon points="132,122 155,135 142,112" />
      </g>

      {/* Minimalist carabao head (strength & heritage) */}
      <path
        d="M70,90 Q100,130 130,90 Q140,75 160,65 Q130,55 100,75 Q70,55 40,65 Q60,75 70,90 Z"
        fill="currentColor"
        stroke="#F1F5F9"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {showText && (
        <text
          x="100"
          y="185"
          fontFamily="Arial, sans-serif"
          fontSize="20"
          fontWeight="bold"
          fill="currentColor"
          textAnchor="middle"
          letterSpacing="3"
        >
          BARANDON INC.
        </text>
      )}
    </svg>
  );
}
