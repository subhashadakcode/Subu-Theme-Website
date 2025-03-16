import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarIcon, MessageCircle } from "lucide-react"
import type { Post } from "@/lib/types"

interface PostCardProps {
  post: Post
  variant?: "default" | "horizontal"
}

export default function PostCard({ post, variant = "default" }: PostCardProps) {
  const isHorizontal = variant === "horizontal"

  return (
    <Card
      className={`overflow-hidden h-full transition-all duration-300 hover:shadow-md ${
        isHorizontal ? "flex flex-col md:flex-row" : ""
      }`}
    >
      <div className={`relative ${isHorizontal ? "md:w-2/5" : ""}`}>
        <Link href={`/blog/${post.slug}`} className="block">
          <div className={`relative ${isHorizontal ? "aspect-video md:h-full" : "aspect-video"}`}>
            <Image
              src={post.coverImage || "/placeholder.svg?height=400&width=600"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </Link>
        {post.category && (
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm hover:bg-background/90">
              {post.category}
            </Badge>
          </div>
        )}
      </div>

      <div className={`flex flex-col ${isHorizontal ? "md:w-3/5" : ""}`}>
        <CardContent className={`flex-grow ${isHorizontal ? "p-6" : "p-6"}`}>
          <div className="space-y-2 mb-3">
            <Link href={`/blog/${post.slug}`} className="block">
              <h3 className="text-xl font-bold line-clamp-2 hover:text-primary transition-colors">{post.title}</h3>
            </Link>
            <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
          </div>
        </CardContent>

        <CardFooter className="pt-0 pb-6 px-6">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium">{post.author.name}</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-muted-foreground space-x-4">
              <div className="flex items-center">
                <CalendarIcon className="mr-1 h-3 w-3" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="mr-1 h-3 w-3" />
                <span>{post.commentCount}</span>
              </div>
            </div>
          </div>
        </CardFooter>
      </div>
    </Card>
  )
}

