import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jessica Olotu",
      role: "Product Manager & Colleague.",
      company: "",
      image: "/JessicaOlotu.webp",
      content:
        "Chris is an excellent Product Manager with strong leadership qualities and a clear ability to deliver under pressure. We worked together as team leads, and what stood out most was his dedication, problem-solving approach, and consistent drive to get things done the right way. He's a valuable asset to any team or product environmen",
      rating: 5,
      screenshot: "",
    },
    {
      name: "Victor Bassey",
      role: "Founder & Lead Developer",
      company: "Xyntera Consulting.",
      image: "/Vic.webp",
      content:
        "I had the privilege of working alongside Chris on over five technical projects, and each time, his leadership stood out. He approaches every project as if it's his own business, always shifting our mindset from working to meet the deadline to working to provide value.",
      rating: 5,
      screenshot: "",
    },
    {
      name: "Sally Asemota",
      role: "Product Manager & Colleague.",
      company: "",
      image: "Sally.webp",
      content:
        "Chris fostered a culture of open communication and collaboration, empowering each team member to contribute meaningfully while driving the product vision forward. Under his leadership, we successfully delivered key product milestones, including several feature rollouts that directly improved user engagement and platform performance.",
      rating: 5,
      screenshot: "",
    },
    {
      name: "Ikhajiagbe Grace",
      role: "Project Manager & Colleague.",
      company: "",
      image: "grace.webp",
      content:
        "Chris has a unique talent for managing complex product decisions without losing focus on team morale and long-term goals. A reliable professional who always delivers",
      rating: 5,
      screenshot: "",
    },
    {
      name: "Reuben Edosa",
      role: "Product Manager & Colleague.",
      company: "",
      image: "Reuben.webp",
      content:
        "",
      rating: 5,
      screenshot: "ScreenshotReview1.webp",
    },
    {
      name: "Joey",
      role: "Markerting Lead at a Blockchain Project.",
      company: "",
      image: "",
      content:
        "",
      rating: 5,
      screenshot: "ScreenshotReview2.webp",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-100d:bg-oxblood-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-serif">Testimonials</h2>
          <p className="text-xl max-w-3xl mx-auto font-serif text-black">
            Testimonials from people I've worked with.
          </p>
        </div>

        {/* 2x3 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`bg-white border-oxblood-200 shadow-lg ${!testimonial.content && !testimonial.name ? 'h-auto' : 'h-full'}`}>
              <CardContent className={`${!testimonial.content && !testimonial.name ? 'p-4 md:p-6' : 'p-4 md:p-6'} text-black`}>
                {/* Testimonial Screenshot - Only show if screenshot exists */}
                {testimonial.screenshot && (
                  <div className={`rounded-lg bg-oxblood-100 flex justify-center ${testimonial.content ? 'mb-6 overflow-hidden' : 'mb-4'}`}>
                  <img
                      src={testimonial.screenshot}
                      alt="Client testimonial"
                      className={`${!testimonial.content ? 'w-full h-auto object-contain max-h-96' : 'w-full h-48 object-cover'}`}
                  />
                </div>
                )}

                {/* Rating - Show for all testimonials */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4l-oxblood-600 text-oxblood-600" />
                  ))}
                </div>

                {/* Testimonial Text - Only show if content exists */}
                {testimonial.content && (
                  <p className="text-black mb-6 italic font-serif text-sm xs:text-base md:text-lg">"{testimonial.content}"</p>
                )}

                {/* Author Info - Only show if there's a name */}
                {testimonial.name && (
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-oxblood-100ext-oxblood-700">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-black font-serif">{testimonial.name}</div>
                      <div className="text-sm font-serif text-black">
                        {testimonial.role} {testimonial.company && `at ${testimonial.company}`}
                      </div>
                    </div>
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
