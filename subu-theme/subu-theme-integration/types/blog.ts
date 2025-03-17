export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  category: string
  tags: string[]
  publishedAt: string
  updatedAt?: string
  relatedPosts?: string[]
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description?: string
}

