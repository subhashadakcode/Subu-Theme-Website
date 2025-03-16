import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { formatDate } from "@/lib/utils"
import { getPostBySlug, getRelatedPosts } from "@/lib/posts"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarIcon, Clock, MessageCircle } from "lucide-react"
import PostCard from "@/components/post-card"
import CommentSection from "@/components/comment-section"

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Subu Theme",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Subu Theme`,
    description: post.excerpt,
    openGraph: {
      images: [post.coverImage || "/placeholder.svg?height=600&width=1200"],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post._id, post.category)

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-4xl mx-auto">
        {/* Post Header */}
        <header className="mb-8 text-center">
          {post.category && (
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
          )}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 slide-up">{post.title}</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-6 slide-up">
            <div className="flex items-center">
              <CalendarIcon className="mr-1 h-4 w-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="mr-1 h-4 w-4" />
              <span>{post.commentCount} comments</span>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 slide-up">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.author.name}</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video mb-10 rounded-lg overflow-hidden shadow-lg fade-in">
          <Image
            src={post.coverImage || "/placeholder.svg?height=600&width=1200"}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Post Content */}
        <div className="blog-content slide-up" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/blog?tag=${tag}`}>
                <Badge variant="outline" className="hover:bg-secondary transition-colors">
                  #{tag}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </article>

      {/* Author Bio */}
      <div className="max-w-4xl mx-auto mt-12 p-6 bg-muted/40 rounded-lg">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <Avatar className="h-20 w-20">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback className="text-2xl">{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-bold mb-2">{post.author.name}</h3>
            <p className="text-muted-foreground mb-4">{post.author.bio}</p>
            <div className="flex space-x-4">
              {post.author.socialLinks?.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.platform}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <CommentSection postId={post._id} comments={post.comments} />
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Related Posts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <div key={relatedPost._id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <PostCard post={relatedPost} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

