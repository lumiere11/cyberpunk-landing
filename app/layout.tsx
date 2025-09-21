import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Orbitron } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/hooks/use-language"
import { Analytics } from "@vercel/analytics/next"

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
  metadataBase: new URL('https://cyberpunk-landing-delta.vercel.app'),
  openGraph: {
    title: "Jorge Eduardo Tirado - Cyberpunk Portfolio",
    description: "Full-Stack Laravel Developer specializing in modern web architectures and cyberpunk aesthetics",
    url: 'https://cyberpunk-landing-delta.vercel.app',
    siteName: 'Jorge Eduardo Tirado Portfolio',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jorge Eduardo Tirado - Cyberpunk Portfolio",
    description: "Full-Stack Laravel Developer specializing in modern web architectures and cyberpunk aesthetics",
    images: ['/logo.jpg'],
    creator: '@jorgetirado',
  },
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
          <Analytics/>
        </LanguageProvider>
      </body>
    </html>
  )
}
