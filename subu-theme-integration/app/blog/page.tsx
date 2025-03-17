import { getBlogPosts, getBlogCategories } from "@/lib/blog-service"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Blog | Vogue Vibes Sisters",
  description: "Latest beauty, fashion, and lifestyle tips from Vogue Vibes Sisters",
}

export default async function BlogPage() {
  const posts = await getBlogPosts()
  const categories = await getBlogCategories()

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.featuredImage || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
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
        </div>

        <div className="md:w-1/4">
          <div className="sticky top-20">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/blog/category/${category.slug}`}
                  className="block p-2 hover:bg-muted rounded-md transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>

            <h2 className="text-xl font-bold mt-8 mb-4">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(posts.flatMap((post) => post.tags)))
                .slice(0, 10)
                .map((tag) => (
                  <Link key={tag} href={`/blog/tag/${tag}`}>
                    <Badge variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

