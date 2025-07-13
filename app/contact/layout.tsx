import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Me | Chiemelie Okafor - Technical Project Manager",
  description: "Get in touch with Chiemelie Okafor for project management opportunities, collaboration, or to discuss your next digital product initiative. Available for freelance and full-time roles.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 