export default function HeroArtwork() {
  return (
    <svg
      className="hero-orbit-art"
      viewBox="0 0 620 720"
      role="img"
      aria-label="Abstract marine data sculpture with H.S. initials"
    >
      <defs>
        <radialGradient id="sphereFill" cx="34%" cy="23%" r="82%">
          <stop offset="0" stopColor="#d6fff1" stopOpacity=".94" />
          <stop offset=".16" stopColor="#84e9d4" stopOpacity=".62" />
          <stop offset=".55" stopColor="#286e78" stopOpacity=".5" />
          <stop offset="1" stopColor="#10182a" stopOpacity=".14" />
        </radialGradient>
        <linearGradient id="orbitStroke" x1="80" y1="140" x2="550" y2="580" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e3fff6" stopOpacity=".8" />
          <stop offset=".45" stopColor="#72ddcf" stopOpacity=".8" />
          <stop offset="1" stopColor="#7ea9ff" stopOpacity=".45" />
        </linearGradient>
        <filter id="orbGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="28" />
        </filter>
      </defs>
      <ellipse cx="317" cy="359" rx="203" ry="240" fill="#67d9ca" opacity=".19" filter="url(#orbGlow)" />
      <g fill="none" stroke="url(#orbitStroke)" strokeWidth="1.15">
        <ellipse cx="310" cy="350" rx="236" ry="116" transform="rotate(-24 310 350)" opacity=".75" />
        <ellipse cx="310" cy="350" rx="234" ry="117" transform="rotate(42 310 350)" opacity=".55" />
        <ellipse cx="310" cy="350" rx="182" ry="246" transform="rotate(12 310 350)" opacity=".3" />
      </g>
      <circle cx="310" cy="350" r="155" fill="url(#sphereFill)" stroke="#d8fff4" strokeOpacity=".68" strokeWidth="1.2" />
      <circle cx="310" cy="350" r="132" fill="none" stroke="#d8fff4" strokeOpacity=".25" />
      <g fill="none" stroke="#d8fff4" strokeOpacity=".27" strokeWidth=".8">
        <ellipse cx="310" cy="350" rx="155" ry="54" />
        <ellipse cx="310" cy="350" rx="155" ry="100" />
        <ellipse cx="310" cy="350" rx="62" ry="155" />
        <ellipse cx="310" cy="350" rx="112" ry="155" />
        <path d="M155 350h310M180 272h260M180 428h260" />
      </g>
      <path d="M192 384c46-12 58-60 104-71 38-9 52 18 81 8 27-9 31-38 65-46" fill="none" stroke="#d8fff4" strokeWidth="2" strokeDasharray="5 9" opacity=".9" />
      <g fill="#c7fff0" stroke="#11212b" strokeWidth="4">
        <circle cx="192" cy="384" r="8" />
        <circle cx="296" cy="313" r="8" />
        <circle cx="377" cy="321" r="8" />
        <circle cx="442" cy="275" r="8" />
      </g>
      <text x="310" y="371" textAnchor="middle" fill="#f0fff9" fontFamily="Georgia,serif" fontSize="70" letterSpacing="-8">HS</text>
      <text x="310" y="413" textAnchor="middle" fill="#d8fff4" fillOpacity=".72" fontFamily="monospace" fontSize="10" letterSpacing="4">SIGNAL / SYSTEM / SOFTWARE</text>
      <circle cx="96" cy="220" r="3" fill="#b0c8ff" />
      <circle cx="510" cy="487" r="3" fill="#8cebd4" />
      <circle cx="476" cy="189" r="2" fill="#f4c78d" />
    </svg>
  )
}
