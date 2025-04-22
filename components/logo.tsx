interface LogoProps {
  color?: string
  width?: number
  height?: number
}

export default function Logo({ color = "#6C3FA5", width = 40, height = 40 }: LogoProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill={color} />
      <path
        d="M10 20C10 14.477 14.477 10 20 10C25.523 10 30 14.477 30 20C30 25.523 25.523 30 20 30"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M15 25L10 30" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M20 20L25 15" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
