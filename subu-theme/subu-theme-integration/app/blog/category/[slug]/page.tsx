import { getBlogPostsByCategory, getBlogCategories } from "@/lib/blog-service"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categories = await getBlogCategories()
  const category = categories.find((cat) => cat.slug === params.slug)

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested category could not be found.",
    }
  }

  return {
    title: `${category.name} | Vogue Vibes Sisters`,
    description: category.description || `Browse all posts in the ${category.name} category`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categories = await getBlogCategories()
  const category = categories.find((cat) => cat.slug === params.slug)

  if (!category) {
    notFound()
  }

  const posts = await getBlogPostsByCategory(category.name)

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
      {category.description && <p className="text-muted-foreground mb-6">{category.description}</p>}

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image src={post.featuredImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="text-sm text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

