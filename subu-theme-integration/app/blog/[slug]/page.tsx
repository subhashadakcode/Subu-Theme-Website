import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-service"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Vogue Vibes Sisters`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.id)

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline">{post.category}</Badge>
              <span className="text-sm text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

            <div className="relative h-[400px] w-full mb-8">
              <Image
                src={post.featuredImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <MDXRemote source={post.content} />
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/blog/tag/${tag}`}>
                  <Badge variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="md:w-1/4">
          <div className="sticky top-20">
            <h2 className="text-xl font-bold mb-4">Related Posts</h2>
            <div className="space-y-4">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id}>
                  <div className="relative h-32 w-full">
                    <Image
                      src={relatedPost.featuredImage || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base line-clamp-2">
                      <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-xs line-clamp-2">{relatedPost.excerpt}</CardDescription>
                  </CardHeader>
                </Card>
              ))}

              {relatedPosts.length === 0 && <p className="text-muted-foreground">No related posts found.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

