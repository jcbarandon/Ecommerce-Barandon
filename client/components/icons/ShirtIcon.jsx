export default function ShirtIcon({ className = "w-8 h-8", ...props }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" strokeLinecap="round">
        {/* Shirt outline */}
        <path
          d="M30,20 L40,15 L60,15 L70,20 L90,40 L75,50 L70,40 L70,90 L30,90 L30,40 L25,50 L10,40 Z"
          fill="#F8FAFC"
        />
        {/* Collar */}
        <path d="M40,15 L50,25 L60,15" />
        {/* Barong embroidery (pechera) — fixed brand gold */}
        <path d="M42,25 V60 Q50,65 58,60 V25" stroke="#F59E0B" strokeWidth="2" strokeDasharray="2 2" />
        <line x1="50" y1="25" x2="50" y2="60" stroke="currentColor" strokeWidth="2" />
        {/* Buttons */}
        <circle cx="50" cy="35" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="50" cy="45" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="50" cy="55" r="1.5" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}
