import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Orbitron } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/hooks/use-language"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Jorge Eduardo Tirado Sandoval - Laravel Developer",
  description: "Full-Stack Laravel Developer specializing in modern web architectures and cyberpunk aesthetics",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${orbitron.variable} antialiased`}>
      <body className="font-mono">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
