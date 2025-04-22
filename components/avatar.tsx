interface AvatarProps {
  seed: string
  size?: number
}

export default function Avatar({ seed, size = 50 }: AvatarProps) {
  // Gera uma cor baseada na seed
  const stringToColor = (str: string) => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    let color = "#"
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff
      color += ("00" + value.toString(16)).substr(-2)
    }
    return color
  }

  const bgColor = stringToColor(seed)
  const textColor = "#FFFFFF"
  const initials = seed
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="25" fill={bgColor} />
      <text
        x="25"
        y="25"
        fontFamily="Arial"
        fontSize="20"
        fill={textColor}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {initials}
      </text>
    </svg>
  )
}
