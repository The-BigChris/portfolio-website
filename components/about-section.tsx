import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  const stats = [
    { icon: Users, label: "Projects Delivered", value: "50+" },
    { icon: Target, label: "Success Rate", value: "95%" },
    { icon: TrendingUp, label: "Years Experience", value: "8+" },
    { icon: Award, label: "Team Members Led", value: "100+" },
  ]

  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-serif mb-5">About Me</h2>
          <p className="text-xl text-gray-900 max-w-5xl mb-8 font-serif mx-auto text-justify">
          Hi, I'm Chiemelie Okafor,
          A Project Manager obsessed with turning ideas into action, driving efficiency, and delivering impactful results.
          </p>
          <Link href="/about">
            <Button className="bg-amber-800 hover:bg-amber-900 text-white font-serif mx-auto">Learn More About Me</Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white border-amber-200">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-amber-800 font-serif" />
                <div className="text-2xl font-bold text-black mb-2 font-serif">{stat.value}</div>
                <div className="text-sm text-gray-800 font-serif">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
