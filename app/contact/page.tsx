"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Linkedin, MessageSquare, CheckCircle, AlertCircle, Info } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@themailprovider\.com$/.test(formData.email)) {
      newErrors.email = "Email must be a '@themailprovider.com' address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || "Failed to send message")
      }

      setSubmitStatus("success")
      setFormData({ firstName: "", lastName: "", email: "", message: "" })
      setErrors({})
    } catch (error) {
      console.error("Contact form error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gray-100 md:bg-gradient-to-br md:from-amber-50 md:to-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-serif">Get In Touch</h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next project? I'm here to help you bring your ideas to life. 
              Whether you have a specific project in mind or just want to explore possibilities, 
              let's start a conversation.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-amber-50 rounded-t-lg">
                  <CardTitle className="text-2xl font-serif text-black">Send Me a Message</CardTitle>
                  <p className="text-slate-700">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-black font-medium">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleChange("firstName", e.target.value)}
                          className={`mt-2 border-gray-300 focus:border-amber-500 focus:ring-amber-500 text-black placeholder-black ${
                            errors.firstName ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                          }`}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <p className="text-red-600 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-black font-medium">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleChange("lastName", e.target.value)}
                          className={`mt-2 border-gray-300 focus:border-amber-500 focus:ring-amber-500 text-black placeholder-black ${
                            errors.lastName ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                          }`}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <p className="text-red-600 text-sm mt-1 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-black font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={`mt-2 border-gray-300 focus:border-amber-500 focus:ring-amber-500 text-black placeholder-black ${
                          errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                        }`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-black font-medium">
                        Message/Inquiry *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project, goals, or any questions you have..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        rows={6}
                        className={`mt-2 border-gray-300 focus:border-amber-500 focus:ring-amber-500 resize-none text-black placeholder-black ${
                          errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-600 text-sm mt-1 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.message}
                        </p>
                      )}
                      <p className="text-slate-500 text-sm mt-1">
                        Minimum 10 characters required
                      </p>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="text-green-800 font-medium">Message sent successfully!</p>
                          <p className="text-green-700 text-sm">I'll get back to you within 24 hours.</p>
                        </div>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        <div>
                          <p className="text-red-800 font-medium">Something went wrong.</p>
                          <p className="text-red-700 text-sm">Please try again or contact me directly via LinkedIn.</p>
                        </div>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>

                    <div className="flex items-center space-x-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <Info className="h-4 w-4 text-blue-600" />
                      <p className="text-blue-800 text-sm">
                        Your information is secure and will only be used to respond to your inquiry.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-lg border-0">
                  <CardHeader className="bg-amber-50 rounded-t-lg">
                    <CardTitle className="text-2xl font-serif text-black">Contact Information</CardTitle>
                    <p className="text-slate-700">
                      I'm always excited to discuss new opportunities and challenges.
                    </p>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                        <Mail className="h-6 w-6 text-amber-600" />
                        <div>
                          <p className="font-semibold text-black">Email Addresses</p>
                          <div className="space-y-1">
                            <a 
                              href="mailto:ok.christianc@gmail.com" 
                              className="text-slate-700 hover:text-amber-600 transition-colors block"
                            >
                              ok.christianc@gmail.com
                            </a>
                            <a 
                              href="mailto:contact@chiemelieokafor.com" 
                              className="text-slate-700 hover:text-amber-600 transition-colors block"
                            >
                              contact@chiemelieokafor.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                      <Linkedin className="h-6 w-6 text-amber-600" />
                      <div>
                        <p className="font-semibold text-black">LinkedIn</p>
                        <a 
                          href="https://linkedin.com/in/chiemelieokafor" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-700 hover:text-amber-600 transition-colors"
                        >
                          Connect on LinkedIn
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                      <MessageSquare className="h-6 w-6 text-amber-600" />
                      <div>
                        <p className="font-semibold text-black">Response Time</p>
                        <p className="text-slate-700">Within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardHeader className="bg-amber-50 rounded-t-lg">
                    <CardTitle className="text-2xl font-serif text-black">Why Work With Me?</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-black">Proven Track Record</p>
                        <p className="text-sm text-slate-700">
                        4+ years leading projects with 80% completion rate.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-black">Industry Expertise</p>
                        <p className="text-sm text-slate-700">
                          Experience in fintech, healthcare, e-commerce, and enterprise.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-black">Agile Methodology</p>
                        <p className="text-sm text-slate-700">
                        Experienced agile practitioner with iterative development expertise.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-black">Clear Communication</p>
                        <p className="text-sm text-slate-700">
                          Regular updates and transparent project management.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-black">Adaptability</p>
                        <p className="text-sm text-slate-700">
                        Quick pivot to new technologies and changing client requirements.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-black">Ownership Mindset</p>
                        <p className="text-sm text-slate-700">
                        I treat every project as my own, focusing on value delivery beyond just meeting deadlines.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardHeader className="bg-amber-50 rounded-t-lg">
                    <CardTitle className="text-2xl font-serif text-black">Availability</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      Currently accepting new projects and consultations. For urgent projects, 
                      please mention it in your message and I'll prioritize your inquiry.
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="font-medium text-black">Project Consultation</span>
                        <span className="text-green-600 font-semibold">Available</span>
                      </div>
                                             <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                         <span className="font-medium text-black">Contract Projects</span>
                         <span className="text-green-600 font-semibold">Available</span>
                       </div>
                      <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                        <span className="font-medium text-black">Full-time Projects</span>
                        <span className="text-yellow-600 font-semibold">Limited</span>
                      </div>
                      
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-black mb-12 text-center font-serif">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-lg font-serif text-black">What types of projects do you work on?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    I specialize in technical projects that deliver real value to users,
                    including web and mobile applications, enterprise software implementations,
                     digital transformation initiatives, and process optimization projects. 
                     My strength lies in quickly adapting to new tools, systems, and industry requirements, 
                     allowing me to tackle complex challenges across diverse sectors.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-lg font-serif text-black">What is your typical project timeline?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    Project timelines vary based on scope and complexity, with most projects ranging from 3-12 months 
                    and can be accelerated with AI-powered workflows. I provide detailed project plans with clear milestones
                     and deliverables during our initial consultation phase. 
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-lg font-serif text-black">Do you work with remote teams?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    Yes. I have extensive experience managing distributed teams across multiple time zones. 
                    I use modern collaboration tools and establish clear communication protocols to ensure project success.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-lg font-serif text-black">What is your approach to project management?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    I primarily use Agile/Scrum methodologies but adapt my approach based on project requirements. 
                    I focus on clear communication, regular stakeholder updates, risk management, and delivering 
                    value incrementally throughout the project lifecycle.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
