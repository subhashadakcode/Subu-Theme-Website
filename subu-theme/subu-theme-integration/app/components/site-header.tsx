import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Vogue Vibes Sisters</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80">
              Home
            </Link>
            <Link href="/blog" className="transition-colors hover:text-foreground/80">
              Blog
            </Link>
            <Link href="/beauty" className="transition-colors hover:text-foreground/80">
              Beauty
            </Link>
            <Link href="/best-sellers" className="transition-colors hover:text-foreground/80">
              Best Sellers
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/admin/monitoring">
                <span className="sr-only">Monitoring</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M3 3v18h18"></path>
                  <path d="M7 12l4 4 8-8"></path>
                </svg>
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

