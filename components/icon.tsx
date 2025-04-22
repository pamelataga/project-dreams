interface IconProps {
  type:
    | "mission"
    | "vision"
    | "values"
    | "location"
    | "email"
    | "phone"
    | "facebook"
    | "instagram"
    | "linkedin"
    | "youtube"
    | "whatsapp"
  color?: string
  width?: number
  height?: number
}

export default function Icon({ type, color = "#6BBF59", width = 24, height = 24 }: IconProps) {
  const getPath = () => {
    switch (type) {
      case "mission":
        return (
          // Espada romana (gladius) com lâmina visível
          <>
            {/* Cabo da espada */}
            <rect x="11" y="15" width="2" height="5" fill="#6C3FA5" stroke="white" strokeWidth="0.5" />

            {/* Guarda da espada */}
            <rect x="8" y="14" width="8" height="1.5" fill="#6C3FA5" stroke="white" strokeWidth="0.5" />

            {/* Lâmina da espada */}
            <path d="M10.5 4L13.5 4L13 14H11L10.5 4Z" fill={color} stroke="white" strokeWidth="0.5" />

            {/* Ponta da espada */}
            <path d="M10.5 4L12 2L13.5 4" fill={color} stroke="white" strokeWidth="0.5" />

            {/* Pomo da espada (base do cabo) */}
            <circle cx="12" cy="20.5" r="1" fill="#6C3FA5" stroke="white" strokeWidth="0.5" />

            {/* Brilho na lâmina */}
            <path d="M12 4L12 13" stroke="white" strokeWidth="0.5" strokeLinecap="round" opacity="0.7" />
          </>
        )
      case "vision":
        return (
          // Capacete romano melhorado
          <>
            {/* Base do capacete */}
            <path
              d="M6 14C6 10 8.5 7 12 7C15.5 7 18 10 18 14L17.5 18H6.5L6 14Z"
              fill={color}
              stroke="white"
              strokeWidth="1"
            />

            {/* Crista do capacete (característica dos centuriões romanos) */}
            <path d="M8 7C8 7 12 3 16 7" stroke="#6C3FA5" strokeWidth="3" strokeLinecap="round" />
            <path d="M8 7C8 7 12 3 16 7" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

            {/* Protetor de pescoço */}
            <path d="M6.5 18C6.5 18 7 21 12 21C17 21 17.5 18 17.5 18" fill={color} stroke="white" strokeWidth="1" />

            {/* Protetor facial */}
            <path d="M6 14L8 14L8 16" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 14L16 14L16 16" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

            {/* Detalhes decorativos */}
            <path d="M9 10H15" stroke="white" strokeWidth="1" strokeLinecap="round" />
            <path d="M9 12H15" stroke="white" strokeWidth="1" strokeLinecap="round" />

            {/* Abertura para os olhos */}
            <path d="M10 14H14" stroke="white" strokeWidth="1" strokeLinecap="round" />
          </>
        )
      case "values":
        return (
          // Escudo romano sem o círculo interno
          <>
            <path
              d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
              fill={color}
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M12 2V22" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
            <path d="M4 5H20" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
          </>
        )
      // Manter os outros cases inalterados
      case "location":
        return (
          <>
            <path
              d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
              fill={color}
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="10" r="3" fill="white" />
          </>
        )
      case "email":
        return (
          <>
            <rect x="2" y="4" width="20" height="16" rx="2" fill={color} stroke="white" strokeWidth="1.5" />
            <path d="M22 7L12 14L2 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )
      case "phone":
        return (
          <>
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              fill={color}
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )
      case "facebook":
        return (
          <path
            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
            fill={color}
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )
      case "instagram":
        return (
          <>
            <rect x="2" y="2" width="20" height="20" rx="5" fill={color} stroke="white" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" />
            <circle cx="18" cy="6" r="1" fill="white" />
          </>
        )
      case "linkedin":
        return (
          <>
            <rect x="2" y="2" width="20" height="20" rx="2" fill={color} stroke="white" strokeWidth="1.5" />
            <path
              d="M8 10V16M8 7V7.01M16 16V11.5C16 10.12 14.88 9 13.5 9C12.12 9 11 10.12 11 11.5V16M16 16H14M11 16H9M8 7H8.01"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )
      case "youtube":
        return (
          <>
            <path
              d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
              fill={color}
              stroke="white"
              strokeWidth="1.5"
            />
            <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" fill="white" />
          </>
        )
      case "whatsapp":
        return (
          // Logo oficial do WhatsApp
          <>
            {/* Fundo circular verde */}
            <circle cx="12" cy="12" r="10" fill="#25D366" />

            {/* Balão de fala branco */}
            <path
              d="M17.6 14.25C17.4 15.9 15.9 17.1 14.25 17.25C13.2 17.4 12.15 17.1 11.25 16.5L8.25 17.4L9.15 14.4C8.55 13.5 8.25 12.45 8.4 11.4C8.55 9.75 9.75 8.25 11.4 8.1C13.8 7.8 15.75 9.75 15.45 12.15C15.45 12.9 15.15 13.65 14.7 14.25"
              fill="white"
            />

            {/* Telefone no balão de fala */}
            <path
              d="M14.7 14.25C14.4 14.7 13.95 15.15 13.35 15.3C12.15 15.6 11.1 15 10.65 14.55C10.05 13.95 9.3 13.2 9 12.15C8.7 11.25 9 10.2 9.75 9.6C10.05 9.3 10.35 9.3 10.65 9.45L11.25 10.65C11.4 10.95 11.25 11.25 11.1 11.4L10.8 11.7C10.65 11.85 10.65 12.15 10.8 12.3C11.1 12.75 11.55 13.2 12 13.5C12.3 13.8 12.6 13.8 12.9 13.65L13.35 13.35C13.5 13.2 13.8 13.2 13.95 13.35L15.15 13.95C15.3 14.1 15.3 14.4 15 14.55"
              fill="#25D366"
            />
          </>
        )
      default:
        return null
    }
  }

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {getPath()}
    </svg>
  )
}
