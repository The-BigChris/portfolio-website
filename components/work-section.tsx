import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

export function WorkSection() {
  const projects = [
    {
      id: "POS-Padi",
      slug: "pos-padi",
      role: "Product Manager",
      title: "POS-Padi.",
      description: "A POS management tool for POS agents and business owners.",
      duration: "March 2025 - May 2025",
      technologies: ["Agile", "Figma", "Slack", "Linear", "Google Workspace"],
      image: "/pos-padi-1.webp",
    },
    {
      id: "TaskRival",
      slug: "taskrival",
      role: "Project Manager",
      title: "TaskRival.",
      description: "A personal productivity tracking tool that helps users to create and track tasks, and rewards them for completing them.",
      duration: "June 2025",
      technologies: ["React", "Next.js", "Supabase", "Agile", "Generative AI Tools", "v0", "openAI API"],
      image: "/TaskRival.webp",
    },
    {
      id: "Pawndex",
      slug: "pawndex",
      role: "Technical Project Manager",
      title: "PawnDex - Trade Simulator",
      description: "A blockchain solution that allows users to trade memecoins with paper funds, to gain knowledge and experience before trading with real funds.",
      duration: "July 2025",
      technologies: ["Low-code development", "Vercel", "Figma", "AI/LLM Integration", "Dexscerener API"],
      image: "/Tradesimulator.webp",
    },
    {
      id: "Pawndora",
      slug: "pawndora",
      role: "Project Manager",
      title: "Pawndora",
      description: "A blockchain project featuring token deployment and development of the project's website..",
      duration: "Dec 2024 - Jan 2025",
      technologies: ["Web3", "OpenAI API", "Notion", "Agile", "G-Suite", "Figma", "Generative AI Tools"],
      image: "/pawndora.webp",
    },
    {
      id: "PRD: FlashCare App",
      slug: "flashcare-app",
      role: "Product Manager",
      title: "FlashCare",
      description: "PRD for a telemedicine app for rural communities to access healthcare services and quick response to emergencies digitally.",
      duration: "April 2025",
      technologies: ["Google Docs", "Competitor Research and Analysis"],
      image: "/Flashcare.webp",
    },
    {
      id: "StepGain",
      slug: "stepgain",
      role: "Product Manager",
      title: "StepGain",
      description: "A fitness tracking mobile app design that traacks users' daily steps and rewards them for staying active.",
      duration: "2022 - 2023",
      technologies: ["Asana", "Figma", "Google Maps API", "G-Suite", "Agile"],
      image: "/stepgain.webp",
    },
  ]

  return (
    <section id="work" className="py-20" style={{ backgroundColor: '#FEFEFE' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-black mb-5">My Work/Projects</h2>
          <p className="text-xl max-w-3xl mx-auto font-serif text-slate-800">
            A showcase of few of the projects I've managed and delivered successfully.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-video bg-gray-100 md:bg-oxblood-100 rounded-t-lg overflow-hidden flex items-center justify-center">
                  {project.image ? (
                  <img
                      src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  ) : (
                    <img
                      src="/placeholder.svg"
                      alt="Placeholder"
                      className="w-1/2 h-1/2 object-contain opacity-80"
                    />
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-oxblood-700 transition-colors text-black font-serif">{project.title}</CardTitle>
                  {project.role && (
                    <div className="text-sm text-oxblood-700 font-serif font-semibold mb-1">{project.role}</div>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="mb-4 line-clamp-3 text-slate-700 font-serif">{project.description}</p>
                  <div className="flex items-center text-sm mb-4 text-black">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.duration}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs text-slate-950 font-serif">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
