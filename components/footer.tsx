import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-black font-serif">Let's Work Together</h3>
            <p className="mb-6 max-w-md font-serif text-slate-800">
              Ready to transform your next project? I'm always open to new challenges and exciting opportunities.
            </p>
            <div className="flex space-x-4 text-black">
              <a
                href="mailto:ok.christianc@gmail.com"
                className="text-muted-foreground hover:text-oxblood-700 transition-colors"
              >
                <Mail className="h-5 w-5 bg-oxblood-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/chiemelieokafor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-oxblood-700 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-oxblood-700" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-oxblood-700 transition-colors"
              >
                
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-oxblood-700 transition-colors"
              >
                
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-black font-serif">Quick Links</h4>
            <ul className="space-y-2 text-black">
              <li>
                <Link href="/about" className="hover:text-oxblood-700 transition-colors text-black font-serif">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/#work" className="hover:text-oxblood-700 transition-colors bg-transparent text-black font-serif">
                  Work/Projects
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-oxblood-700 transition-colors text-black font-serif">
                  Skills
                </Link>
              </li>
              <li className="font-serif">
                <Link href="/contact" className="hover:text-oxblood-700 transition-colors text-black">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-black">
            <h4 className="font-semibold mb-4 font-serif text-black">Services</h4>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li className="text-black font-serif">Project Management</li>
              <li className="text-black font-serif">Product Strategy</li>
              <li className="text-black font-serif">Team Leadership</li>
              <li className="text-black font-serif">Process Optimization</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p className="text-black">&copy; 2024 Chiemelie Okafor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
