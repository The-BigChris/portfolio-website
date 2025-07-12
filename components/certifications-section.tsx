import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Calendar } from "lucide-react"

export function CertificationsSection() {
  const certifications = [
    {
      title: "Practical Application of Generative AI for Project Managers",
      issuer: "Project Management Institute (PMI)",
      date: "2025",
      credentialId: "",
      link: "https://www.credly.com/badges/d52d6abe-f826-42d6-8f18-afd57413ea9c/linked_in_profile",
      description:
        "Learned how to implement automation into workflows for improved outcomes.",
      image: "PracticalApplicationofGenerativeAIforProjectManagers.jpg", // Certificate image
    },
    {
      title: "Generative AI Overview for Project Managers",
      issuer: "Project Management Institute (PMI)",
      date: "2024",
      credentialId: "",
      link: "https://www.credly.com/badges/24f59ee4-a273-4466-a51c-236d07f87521/linked_in_profile",
      description:
        "Covered the integration of generative AI into projects to enhance productivity.",
      image: "GenerativeAIOverviewforProjectManagers.jpg",
    },
    {
      title: "Project Management Professional Exam Prep. Course",
      issuer: "Andrew Ramdayal - Udemy",
      date: "2025",
      //credentialId: "",
      //link: "",
      description:
        "A preparation course for the PMP exam, covering the PMBOK, Traditional, Agile, and Hybrid approaches to project management.",
      image: "PMPExamPrepCourse.jpg",
    },
    {
      title: "Agile Project Management",
      issuer: "Google - Coursera.",
      date: "2023",
      credentialId: "",
      link: "https://www.coursera.org/account/accomplishments/verify/Y4KECUNWFQ39",
      description:
        "Covered the Agile PM approach, pillars of Scrum, and how to lead an Agile team.",
      image: "AgilePM.jpg",
    },
    // {
    //   title: "Lean Six Sigma Green Belt",
    //   issuer: "ASQ (American Society for Quality)",
    //   date: "2021",
    //   credentialId: "LSS-2021-321654",
    //   link: "https://asq.org/cert/six-sigma-green-belt",
    //   description:
    //     "Expertise in process improvement methodologies, statistical analysis, and quality management for operational excellence.",
    //   image: "/placeholder.svg?height=200&width=300",
    // },
    // {
    //   title: "AWS Cloud Practitioner",
    //   issuer: "Amazon Web Services",
    //   date: "2020",
    //   credentialId: "AWS-2020-654321",
    //   link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    //   description:
    //     "Foundational understanding of AWS cloud services, architecture, and best practices for cloud-based project implementations.",
    //   image: "/placeholder.svg?height=200&width=300",
    // },
  ]

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-black">Certifications & Credentials</h2>
          <p className="text-xl max-w-3xl mx-auto font-serif text-slate-800">
            Certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-xl transition-shadow group cursor-pointer bg-white border-slate-200"
            >
              {/* Certificate Image */}
              <div className="aspect-video bg-slate-100 overflow-hidden rounded-t-lg">
                <img
                  src={cert.image || "/placeholder.svg"}
                  alt={`${cert.title} Certificate`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-blue-900 transition-colors text-slate-900 font-serif">
                  {cert.title}
                </CardTitle>
                <p className="text-sm font-semibold text-slate-500">{cert.issuer}</p>
                <div className="flex items-center text-sm text-slate-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  Issued: {cert.date}
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                <p className="text-sm leading-relaxed font-serif text-slate-800">{cert.description}</p>

                {cert.link && (
                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-900 hover:text-blue-700 font-medium hover:underline font-serif"
                    >
                      Verify Credential
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
