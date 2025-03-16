import { Suspense } from "react"
import type { Metadata } from "next"
import { getAllPosts } from "@/lib/posts"
import PostCard from "@/components/post-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BlogSkeleton from "@/components/blog-skeleton"

export const metadata: Metadata = {
  title: "Blog | Subu Theme",
  description: "Explore our collection of articles on various topics",
}

interface BlogPageProps {
  searchParams: {
    category?: string
    page?: string
  }
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams.page) || 1
  const selectedCategory = searchParams.category || "all"

  const { posts, totalPages } = await getAllPosts({
    page: currentPage,
    category: selectedCategory !== "all" ? selectedCategory : undefined,
    limit: 9,
  })

  const categories = [
    { name: "All", slug: "all" },
    { name: "Technology", slug: "technology" },
    { name: "Lifestyle", slug: "lifestyle" },
    { name: "Travel", slug: "travel" },
    { name: "Food", slug: "  slug: 'lifestyle" },
    { name: "Travel", slug: "travel" },
    { name: "Food", slug: "food" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of articles on various topics including technology, lifestyle, travel, and more.
        </p>
      </div>

      <Tabs defaultValue={selectedCategory} className="mb-12">
        <TabsList className="flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category.slug} value={category.slug} asChild>
              <a href={`/blog?category=${category.slug}`}>{category.name}</a>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={selectedCategory} className="mt-0">
          <Suspense fallback={<BlogSkeleton />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <div key={post._id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </Suspense>
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button key={page} variant={currentPage === page ? "default" : "outline"} size="sm" asChild>
              <a href={`/blog?category=${selectedCategory}&page=${page}`}>{page}</a>
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

