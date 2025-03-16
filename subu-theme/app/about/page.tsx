import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Subu Theme",
  description: "Learn more about Subu Theme, our mission, and the team behind it",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 slide-up">About Subu Theme</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-up">
          A modern, responsive blog website with an Astra-inspired design. We're passionate about sharing knowledge and
          connecting people through content.
        </p>
      </section>

      {/* Our Story */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=600" alt="Our Story" fill className="object-cover" />
            </div>
          </div>
          <div className="slide-up">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Subu Theme started as a passion project in 2023, born from the desire to create a beautiful, functional
              blogging platform that prioritizes both aesthetics and user experience.
            </p>
            <p className="text-muted-foreground mb-4">
              Inspired by the clean, modern design principles of Astra, we set out to build a theme that would make
              content shine while providing a seamless experience for readers and content creators alike.
            </p>
            <p className="text-muted-foreground">
              Today, Subu Theme has evolved into a comprehensive blogging solution that combines elegant design with
              powerful functionality, helping content creators share their stories with the world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-muted/30 rounded-lg mb-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            We believe in the power of storytelling and knowledge sharing. Our mission is to provide a platform that
            empowers creators to express themselves and connect with audiences in meaningful ways.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Beautiful Design",
                description:
                  "We create visually stunning experiences that engage readers and showcase content in its best light.",
              },
              {
                title: "User Experience",
                description:
                  "We prioritize intuitive navigation and seamless interactions to make reading and content discovery a joy.",
              },
              {
                title: "Performance",
                description:
                  "We build with speed and efficiency in mind, ensuring fast load times and smooth performance across devices.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-lg shadow-sm scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind Subu Theme who work tirelessly to create the best experience for our
            users.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Alex Johnson",
              role: "Founder & Designer",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Alex brings over 10 years of design experience to Subu Theme.",
            },
            {
              name: "Sam Rivera",
              role: "Lead Developer",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Sam is a full-stack developer with a passion for clean code and performance.",
            },
            {
              name: "Taylor Kim",
              role: "Content Strategist",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Taylor helps creators optimize their content for engagement and growth.",
            },
            {
              name: "Jordan Patel",
              role: "UX Researcher",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Jordan ensures that Subu Theme meets the needs of our diverse user base.",
            },
          ].map((member, index) => (
            <div key={index} className="text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative aspect-square rounded-full overflow-hidden mb-4 mx-auto max-w-[200px]">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10 rounded-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Happy Users", value: "10,000+" },
              { label: "Blog Posts", value: "25,000+" },
              { label: "Countries", value: "120+" },
              { label: "Years of Experience", value: "5+" },
            ].map((stat, index) => (
              <div key={index} className="text-center scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

