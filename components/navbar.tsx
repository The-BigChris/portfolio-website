"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "About Me", href: "/about" },
    { name: "Work", href: "/#work" },
    { name: "Skills", href: "/#skills" },
    { name: "Testimonials", href: "/#testimonials" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-black font-serif text-3xl">
            Chiemelie Okafor  
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 leading-3 leading-7 tracking-tighter">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-oxblood-700 transition-colors text-black font-semibold font-serif"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-oxblood-600 hover:bg-oxblood-700 text-white font-serif">Contact Me</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white text-black">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg text-black hover:text-oxblood-700 transition-colors font-serif"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-oxblood-600 text-white hover:bg-oxblood-700 font-serif">Contact Me</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
