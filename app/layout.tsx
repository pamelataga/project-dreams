import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { EB_Garamond } from "next/font/google"

const ebGaramond = EB_Garamond({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dreams Tech - Tecnologia dos Sonhos",
  description: "Escola de robótica educacional para ensino fundamental e médio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={ebGaramond.className}>{children}</body>
    </html>
  )
}
