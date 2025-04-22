interface CourseImageProps {
  title: string
  width?: number
  height?: number
}

export default function CourseImage({ title, width = 400, height = 200 }: CourseImageProps) {
  // Gera uma cor baseada no título
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

  const bgColor = stringToColor(title)
  const textColor = "#FFFFFF"

  // Gera um padrão baseado no título
  const generatePattern = () => {
    const patterns = [
      // Círculos
      <circle key="circle" cx={width / 4} cy={height / 2} r={height / 4} fill="#FFFFFF" opacity="0.2" />,
      // Retângulos
      <rect
        key="rect"
        x={width / 4}
        y={height / 4}
        width={width / 2}
        height={height / 2}
        fill="#FFFFFF"
        opacity="0.2"
      />,
      // Linhas
      <>
        <line key="line1" x1="0" y1="0" x2={width} y2={height} stroke="#FFFFFF" strokeWidth="2" opacity="0.2" />
        <line key="line2" x1="0" y1={height} x2={width} y2="0" stroke="#FFFFFF" strokeWidth="2" opacity="0.2" />
      </>,
      // Grade
      <>
        <line
          key="grid1"
          x1={width / 3}
          y1="0"
          x2={width / 3}
          y2={height}
          stroke="#FFFFFF"
          strokeWidth="2"
          opacity="0.2"
        />
        <line
          key="grid2"
          x1={(2 * width) / 3}
          y1="0"
          x2={(2 * width) / 3}
          y2={height}
          stroke="#FFFFFF"
          strokeWidth="2"
          opacity="0.2"
        />
        <line
          key="grid3"
          x1="0"
          y1={height / 3}
          x2={width}
          y2={height / 3}
          stroke="#FFFFFF"
          strokeWidth="2"
          opacity="0.2"
        />
        <line
          key="grid4"
          x1="0"
          y1={(2 * height) / 3}
          x2={width}
          y2={(2 * height) / 3}
          stroke="#FFFFFF"
          strokeWidth="2"
          opacity="0.2"
        />
      </>,
    ]

    const index = Math.abs(title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % patterns.length
    return patterns[index]
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill={bgColor} />
      {generatePattern()}
      <text
        x={width / 2}
        y={height / 2}
        fontFamily="Arial"
        fontSize="20"
        fill={textColor}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {title}
      </text>
    </svg>
  )
}
