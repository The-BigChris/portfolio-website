import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Me | Chiemelie Okafor - Technical Project Manager",
  description: "Learn about Chiemelie Okafor, an Agile project manager with 4+ years of experience turning complex ideas into impactful solutions. Discover my journey from Mechatronics Engineering to leading digital product initiatives across health, retail, blockchain, and AI industries.",
}

export default function AboutPage() {
  const timeline = [
    {
      year: "2023-Present",
      title: "Senior Project Manager",
      company: "TechCorp Inc.",
      description:
        "Leading multiple high-impact projects including mobile platform development and AI integration initiatives. Managing cross-functional teams of 15+ members.",
      achievements: [
        "Delivered 5 major projects on time",
        "Improved team productivity by 40%",
        "Reduced project costs by 25%",
      ],
    },
    {
      year: "2020-2023",
      title: "Project Manager",
      company: "HealthTech Solutions",
      description:
        "Managed healthcare technology projects focusing on patient management systems and analytics dashboards. Specialized in regulatory compliance and data security.",
      achievements: [
        "Successfully launched 3 healthcare platforms",
        "Achieved 100% compliance rate",
        "Led team of 12 developers",
      ],
    },
    {
      year: "2018-2020",
      title: "Associate Project Manager",
      company: "E-commerce Plus",
      description:
        "Supported senior project managers in e-commerce platform development and optimization projects. Gained expertise in agile methodologies and stakeholder management.",
      achievements: [
        "Contributed to 35% conversion rate increase",
        "Managed 8 concurrent projects",
        "Implemented agile processes",
      ],
    },
    {
      year: "2016-2018",
      title: "Business Analyst",
      company: "Enterprise Solutions",
      description:
        "Analyzed business requirements and translated them into technical specifications. Worked closely with development teams to ensure project alignment with business goals.",
      achievements: [
        "Analyzed 50+ business processes",
        "Improved requirement accuracy by 60%",
        "Reduced development rework by 30%",
      ],
    },
  ]

  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      school: "Stanford University",
      year: "2016",
      focus: "Technology Management & Strategy",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      year: "2014",
      focus: "Software Engineering & Project Management",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gray-100 md:bg-gradient-to-br md:from-amber-50 md:to-orange-50" data-mobile-grey="true">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-6">I am Chiemelie Christian Okafor,</h1>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            An Agile project manager with 4+ years of experience turning complex ideas into impactful
            solutions through teamwork, adaptive planning, and results-driven execution.
            </p>
          </div>
        </section>

        {/* About Me Content */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-black mb-8">My Story</h2>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-shrink-0 flex justify-center lg:justify-start items-center pt-8 lg:pt-0">
                <img
                  src="IMG_0236.webp"
                  alt="Professional headshot"
                  className="w-[350px] md:w-[400px] lg:w-[500px] h-auto max-h-[600px] object-cover mx-auto rounded-2xl shadow-2xl bg-gradient-to-br from-amber-100 to-orange-100"
                />
              </div>
              <div className="flex flex-col justify-start h-full space-y-6 text-black">
                <p className="text-lg leading-relaxed text-justify">
                  My journey into project management began unexpectedly during my final year as a Mechatronics Engineering undergraduate student. 
                  I led my research group on our final year project (the design of an automated class atendance & scheduling system),
                   coordinated tasks, checked in with members, and ensured we met a tight deadline. 
                   I didn’t know it then, but I was already stepping into the role of a project manager.
                </p>
                <p className="text-lg leading-relaxed text-justify">
                  After graduation, I took on freelance roles, collaborating remotely with teams across time zones on mobile and web app development projects. 
                  As I gained hands-on experience, I deepened my understanding of project management methodologies and transitioned into Agile Project Management. I took courses on project management, created and managed personal projects, and enroled in internship programs to gain more hands-on experience. 
                </p>
                <p className="text-lg leading-relaxed text-justify">
                  I’ve led and managed a variety of digital product initiatives across industries,
                   from health and retail to emerging technologies like blockchain and AI. 
                   My work spans project/product planning, team coordination, stakeholder management, 
                   and end-to-end project delivery. 
                </p>
                <p className="text-lg leading-relaxed text-justify">
                  My leadership style is practical and people-centered. I adopt servant-leadership principles, 
                  removing bottlenecks, fostering collaboration, and enabling teams to do their best work. 
                  I bring clarity, adaptability, and a results-driven mindset to every project and team, 
                  while keeping stakeholders informed and involved at every step.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-lg leading-relaxed text-justify text-black">
                I’m passionate about how technology can simplify everyday life. 
                I enjoy thoughtful conversations, learning from progress, and rarely turn down a good smoothie. 
                I'm currently open to opportunities in project and product management, especially with teams building 
                solutions that create meaningful impact.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
