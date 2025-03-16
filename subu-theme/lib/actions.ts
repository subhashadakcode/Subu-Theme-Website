"use server"

import { revalidatePath } from "next/cache"
import type { Comment, ContactMessage } from "./types"

// Add a new comment to a post
export async function addComment({
  postId,
  name,
  email,
  content,
}: {
  postId: string
  name: string
  email: string
  content: string
}): Promise<Comment> {
  // Simulate server delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real application, this would save to a database
  const newComment: Comment = {
    _id: `comment${Date.now()}`,
    postId,
    name,
    email,
    content,
    createdAt: new Date().toISOString(),
  }

  // Revalidate the post page to show the new comment
  revalidatePath(`/blog/[slug]`)

  return newComment
}

// Send a contact message
export async function sendContactMessage({
  name,
  email,
  subject,
  message,
}: ContactMessage): Promise<{ success: boolean }> {
  // Simulate server delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // In a real application, this would send an email or save to a database
  console.log("Contact message received:", { name, email, subject, message })

  return { success: true }
}

