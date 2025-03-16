export interface Author {
  _id: string
  name: string
  avatar: string
  bio: string
  socialLinks?: {
    platform: string
    url: string
  }[]
}

export interface Comment {
  _id: string
  postId: string
  name: string
  email: string
  content: string
  createdAt: string
}

export interface Post {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  publishedAt: string
  updatedAt?: string
  author: Author
  category: string
  tags?: string[]
  readingTime: number
  commentCount: number
  comments: Comment[]
  featured?: boolean
}

export interface ContactMessage {
  name: string
  email: string
  subject: string
  message: string
}

