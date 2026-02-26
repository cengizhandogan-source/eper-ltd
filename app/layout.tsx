import type React from "react"
import type { Metadata } from "next"
import { Lora, Exo_2 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  style: ["normal", "italic"],
})

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://eperlimited.com"),
  title: "Eper Consulting",
  description:
    "Dubai-based medical consultancy specialising in international patient coordination and premium aesthetic healthcare management for medical tourism.",
  openGraph: {
    type: "website",
    siteName: "Eper Consulting",
    locale: "en_GB",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${exo2.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
