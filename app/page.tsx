import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { SkillsSection } from "@/components/skills-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CertificationsSection } from "@/components/certifications-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WorkSection />
        <SkillsSection />
        <TestimonialsSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  )
}
