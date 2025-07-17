import { ArrowDown, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white pt-5"
    >
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 my-4 md:my-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="order-2 lg:order-1 text-left">
            {/* Expertise tagline above main statement */}
            <div className="mb-2 sm:mb-4">
              <span className="font-bold text-xs xs:text-sm md:text-lg text-oxblood-700 tracking-wide font-serif">
                IT Project Manager | Digital Product Manager | Agile Practitioner.
              </span>
            </div>
            <h1 className="text-black block font-serif font-normal text-2xl xs:text-3xl sm:text-4xl md:text-5xl my-3 md:my-6">
              Bringing Order, Clarity &<span className="text-oxblood-700 block font-serif"> Results to Your Projects</span>
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-black font-serif mb-0">
              Need a reliable <strong>IT Project Manager</strong> to deliver your projects on time, within budget, with minimal friction and maximum value?<br />
              You are at the right place!
            </p>
            <div className="h-2 md:h-4" />
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-black font-serif mb-4 md:mb-8">
              I help businesses like yours streamline workflows, manage cross-functional teams, and bring product ideas to life with expert project execution.
            </p>
            
            <div className="flex flex-row gap-3 mb-1">
              <Link href="/#work">
                <Button size="lg" className="w-full sm:w-auto bg-oxblood-600 hover:bg-oxblood-700 text-white font-serif">
                  View My Work
                </Button>
              </Link>
              <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-oxblood-600 text-oxblood-600 hover:bg-oxblood-50 font-serif"
              >
                  More About Me
              </Button>
              </Link>
            </div>
          </div>

          {/* Profile Picture - Right Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end mb-6 lg:mb-0">
            <div className="relative">
              <div className="w-56 h-56 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[28rem] lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-oxblood-700 to-white">
                <img
                  src="/IMG_0237.webp"
                  alt="Professional headshot"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 xs:w-20 xs:h-20 bg-oxblood-700 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 xs:w-16 xs:h-16 bg-oxblood-800 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-8 md:mt-16">
          <div className="animate-bounce my-0">
            <ArrowDown className="h-6 w-6 mx-auto text-oxblood-700" />
          </div>
        </div>
      </div>
    </section>
  )
}
