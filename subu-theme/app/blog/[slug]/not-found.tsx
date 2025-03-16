import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PostNotFound() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-6 slide-up">Post Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md slide-up">
        The blog post you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 slide-up">
        <Button asChild size="lg">
          <Link href="/blog">Browse All Posts</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}

