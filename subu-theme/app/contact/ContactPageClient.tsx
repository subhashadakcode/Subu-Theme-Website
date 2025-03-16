"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { sendContactMessage } from "@/lib/actions"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPageClient() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      await sendContactMessage({
        name,
        email,
        subject,
        message,
      })

      setName("")
      setEmail("")
      setSubject("")
      setMessage("")

      toast({
        title: "Success",
        description: "Your message has been sent. We'll get back to you soon!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 slide-up">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-up">
          Have questions, feedback, or just want to say hello? We'd love to hear from you! Fill out the form below or
          use our contact information to get in touch.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <div className="bg-card rounded-lg shadow-sm p-8 fade-in">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name <span className="text-destructive">*</span>
              </label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email <span className="text-destructive">*</span>
              </label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject <span className="text-destructive">*</span>
              </label>
              <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message <span className="text-destructive">*</span>
              </label>
              <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={6} required />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="slide-up">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                <p className="text-muted-foreground">
                  123 Blog Street, Suite 101
                  <br />
                  San Francisco, CA 94103
                  <br />
                  United States
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                <p className="text-muted-foreground">
                  info@subutheme.com
                  <br />
                  support@subutheme.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                <p className="text-muted-foreground">
                  +1 (555) 123-4567
                  <br />
                  Mon-Fri, 9am-5pm PST
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-8 rounded-lg overflow-hidden border border-border h-[300px] relative">
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Map Would Go Here</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Subu Theme and our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {[
            {
              question: "How can I customize the Subu Theme?",
              answer:
                "Subu Theme is built with customization in mind. You can easily modify colors, fonts, layouts, and more through our intuitive admin panel or by editing the theme files directly.",
            },
            {
              question: "Do you offer technical support?",
              answer:
                "Yes, we provide technical support for all users. You can reach out to our support team via email or through the contact form on this page.",
            },
            {
              question: "Is Subu Theme compatible with mobile devices?",
              answer:
                "Subu Theme is fully responsive and optimized for all devices, including smartphones, tablets, and desktop computers.",
            },
            {
              question: "Can I use Subu Theme for commercial projects?",
              answer:
                "Yes, Subu Theme can be used for both personal and commercial projects. Please refer to our licensing terms for more details.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="mb-6 p-6 border border-border rounded-lg scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

