import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://chiemelieokafor.com'),
  title: "Chiemelie Okafor - Technical Project Manager & Product Strategist",
  description: "Experienced Technical Project Manager specializing in Agile methodologies, product strategy, and digital transformation. View my portfolio of successful projects and leadership experience.",
  keywords: ["Technical Project Manager", "Product Strategy", "Agile", "Digital Transformation", "Portfolio", "Project Management", "Product Management"],
  authors: [{ name: "Chiemelie Okafor" }],
  creator: "Chiemelie Okafor",
  publisher: "Chiemelie Okafor",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.webp",
    apple: "/apple-touch-icon.webp",
  },
  openGraph: {
    title: "Chiemelie Okafor - Technical Project Manager & Product Strategist",
    description: "Experienced Technical Project Manager specializing in Agile methodologies, product strategy, and digital transformation. View my portfolio of successful projects and leadership experience.",
    url: "https://chiemelieokafor.com",
    siteName: "Chiemelie Okafor Portfolio",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Chiemelie Okafor Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiemelie Okafor - Technical Project Manager & Product Strategist",
    description: "Experienced Technical Project Manager specializing in Agile methodologies, product strategy, and digital transformation. View my portfolio of successful projects and leadership experience.",
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
