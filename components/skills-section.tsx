import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Settings, Shield, Zap, BrainCircuit } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Project Management",
      icon: Target,
      skills: [
        "Agile Methodologies",
        "Project Planning & Scheduling", "Risk Management",
        "Sprint Planning & Execution", "Workflow Management",
        "Backlog Management", "Scope & Budget Management", "User Story Writing", 
      ],
    },
    {
      title: "Soft (Interpersonal) Skills",
      icon: Users,
      skills: [
        "Leadership", "Collaboration & Team Work",
        "Strategic Thinking", "Time Management",
        "Adaptability & Flexibility",
        "Conflict Resolution", "Problem Solving",
        "Negotiation", "Presentation", "Effective Communication",
        "Emotional Intelligence", "Attention to Detail", "People Management",
        "Critical Thinking", "Learning Agility",
      ],
    },
    {
      title: "Product Management",
      icon: Zap,
      skills: [
        "Product Roadmapping",
        "User Experience",
        "Customer-Centric Thinking", "AI-powered Prototyping",
        "Market & User Research", "Defining MVPs",
        "Product Lifecycle Understanding",
        "Feature Prioritization",
        "User Acceptance Testing",
        "Product Vision Communication",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Settings,
      skills: ["Jira", "Asana", "Notion",
         "Slack", "Google Workspace/Suite", 
         "Microsoft Office", "Figma", 
         "AI/LLM Platforms", "Cursor AI", "V0", "UX Pilot", ],
    },
    {
      title: "Quality & Compliance",
      icon: Shield,
      skills: [
        "Quality Assurance",
        "Process Improvement",
        "Compliance Management",
        "Documentation",
        "Best Practices",
        "Standards Implementation",
      ],
    },
    {
      title: "",
      icon: BrainCircuit,
      skills: [
        "Techical Writing", 
        "Userflow & Rapid Prototyping", 
        "Low-code Development", 
        "Simple (responsive) Website Design",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">Skills & Competencies</h2>
          <p className="text-xl max-w-3xl mx-auto font-serif text-slate-700">
            My comprehensive toolkit for managing complex projects and leading high-performing teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full bg-white border-slate-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-oxblood-100">
                    <category.icon className="h-6 w-6 text-oxblood-700" />
                  </div>
                  <CardTitle className="text-lg font-serif text-black">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs bg-slate-100 text-slate-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
