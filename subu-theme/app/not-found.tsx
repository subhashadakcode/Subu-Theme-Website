import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold mb-6 slide-up">404</h1>
      <h2 className="text-3xl font-semibold mb-4 slide-up">Page Not Found</h2>
      <p className="text-xl text-muted-foreground mb-8 max-w-md slide-up">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button asChild size="lg" className="slide-up">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}

