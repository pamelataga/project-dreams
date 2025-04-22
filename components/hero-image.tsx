export default function HeroImage() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="400" rx="20" fill="#BDE8B2" />

      {/* Robot Body */}
      <rect x="250" y="150" width="100" height="150" rx="10" fill="#6BBF59" />
      <rect x="270" y="180" width="60" height="90" rx="5" fill="#F5F2ED" />

      {/* Robot Head */}
      <rect x="260" y="100" width="80" height="60" rx="10" fill="#6BBF59" />
      <circle cx="280" cy="130" r="10" fill="#6C3FA5" />
      <circle cx="320" cy="130" r="10" fill="#6C3FA5" />
      <rect x="290" y="140" width="20" height="5" rx="2" fill="#F5F2ED" />

      {/* Robot Arms */}
      <rect x="200" y="170" width="50" height="20" rx="10" fill="#6BBF59" />
      <rect x="350" y="170" width="50" height="20" rx="10" fill="#6BBF59" />

      {/* Robot Legs */}
      <rect x="260" y="300" width="30" height="50" rx="5" fill="#6BBF59" />
      <rect x="310" y="300" width="30" height="50" rx="5" fill="#6BBF59" />

      {/* Circuit Board Background */}
      <path d="M100 50 L150 50 L150 100 L200 100" stroke="#6C3FA5" strokeWidth="2" />
      <path d="M400 50 L450 50 L450 100 L500 100" stroke="#6C3FA5" strokeWidth="2" />
      <path d="M100 350 L150 350 L150 300 L200 300" stroke="#6C3FA5" strokeWidth="2" />
      <path d="M400 350 L450 350 L450 300 L500 300" stroke="#6C3FA5" strokeWidth="2" />

      <circle cx="100" cy="50" r="5" fill="#6C3FA5" />
      <circle cx="150" cy="50" r="5" fill="#6C3FA5" />
      <circle cx="150" cy="100" r="5" fill="#6C3FA5" />
      <circle cx="200" cy="100" r="5" fill="#6C3FA5" />

      <circle cx="400" cy="50" r="5" fill="#6C3FA5" />
      <circle cx="450" cy="50" r="5" fill="#6C3FA5" />
      <circle cx="450" cy="100" r="5" fill="#6C3FA5" />
      <circle cx="500" cy="100" r="5" fill="#6C3FA5" />

      <circle cx="100" cy="350" r="5" fill="#6C3FA5" />
      <circle cx="150" cy="350" r="5" fill="#6C3FA5" />
      <circle cx="150" cy="300" r="5" fill="#6C3FA5" />
      <circle cx="200" cy="300" r="5" fill="#6C3FA5" />

      <circle cx="400" cy="350" r="5" fill="#6C3FA5" />
      <circle cx="450" cy="350" r="5" fill="#6C3FA5" />
      <circle cx="450" cy="300" r="5" fill="#6C3FA5" />
      <circle cx="500" cy="300" r="5" fill="#6C3FA5" />

      {/* Gears */}
      <circle cx="150" cy="200" r="30" fill="#6C3FA5" />
      <circle cx="150" cy="200" r="20" fill="#BDE8B2" />
      <circle cx="150" cy="200" r="10" fill="#6C3FA5" />

      <circle cx="450" cy="200" r="30" fill="#6C3FA5" />
      <circle cx="450" cy="200" r="20" fill="#BDE8B2" />
      <circle cx="450" cy="200" r="10" fill="#6C3FA5" />

      {/* Text */}
      <text x="230" y="50" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#6C3FA5">
        Dreams Tech
      </text>
      <text x="200" y="80" fontFamily="Arial" fontSize="16" fill="#6C3FA5">
        Tecnologia dos Sonhos
      </text>
    </svg>
  )
}
