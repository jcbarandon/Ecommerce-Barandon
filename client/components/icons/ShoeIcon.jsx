export default function ShoeIcon({ className = "w-8 h-8", ...props }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" strokeLinecap="round">
        {/* Shoe outline */}
        <path
          d="M85,75 L15,75 Q10,75 10,65 C10,50 25,45 35,45 L45,35 L60,35 C70,40 80,45 85,55 Q90,65 85,75 Z"
          fill="#F8FAFC"
        />
        {/* Sole */}
        <line x1="15" y1="68" x2="86" y2="68" strokeWidth="3" />
        <line x1="15" y1="75" x2="85" y2="75" strokeWidth="4" />
        {/* Toe cap */}
        <path d="M75,68 Q75,60 83,52" />
        {/* Laces */}
        <line x1="45" y1="35" x2="52" y2="42" strokeWidth="2" />
        <line x1="40" y1="40" x2="47" y2="47" strokeWidth="2" />
        <line x1="35" y1="45" x2="42" y2="52" strokeWidth="2" />

        {/* Pintados weave pattern on side panel — fixed brand gold */}
        <g stroke="#F59E0B" strokeWidth="2">
          <polygon points="45,55 50,50 55,55 50,60" fill="#F59E0B" />
          <polygon points="55,55 60,50 65,55 60,60" fill="none" />
          <polygon points="35,55 40,50 45,55 40,60" fill="none" />
        </g>
      </g>
    </svg>
  );
}
