import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Chiemelie Okafor",
  description: "Technical Projcet Manager",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Chiemelie Okafor",
    description: "Technical Projcet Manager",
    url: "https://chiemelieokafor.com",
    siteName: "Chiemelie Okafor",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chiemelie Okafor Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiemelie Okafor",
    description: "Technical Projcet Manager",
    images: ["/og-image.png"],
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
