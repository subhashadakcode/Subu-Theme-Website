import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getFeaturedPosts } from "@/lib/posts"
import PostCard from "@/components/post-card"

export default async function Home() {
  const featuredPosts = await getFeaturedPosts(3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-background z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 slide-up">Welcome to Subu Theme</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 slide-up">
              A modern, responsive blog website with an Astra-inspired design. Share your thoughts, stories, and ideas
              with the world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 slide-up">
              <Button asChild size="lg" className="text-lg">
                <Link href="/blog">Explore Blog</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Posts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular and engaging content from various categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <div key={post._id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <PostCard post={post} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find content that matches your interests from our diverse range of topics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Technology", image: "/placeholder.svg?height=200&width=400", slug: "technology" },
              { name: "Lifestyle", image: "/placeholder.svg?height=200&width=400", slug: "lifestyle" },
              { name: "Travel", image: "/placeholder.svg?height=200&width=400", slug: "travel" },
              { name: "Food", image: "/placeholder.svg?height=200&width=400", slug: "food" },
            ].map((category, index) => (
              <Link
                key={category.slug}
                href={`/blog?category=${category.slug}`}
                className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">
              Stay updated with our latest posts and announcements. No spam, just valuable content.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

