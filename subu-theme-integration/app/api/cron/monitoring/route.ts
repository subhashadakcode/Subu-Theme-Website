import { checkWebsiteStatus } from "@/lib/monitoring"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

  try {
    // Check the main website
    const mainResult = await checkWebsiteStatus(baseUrl)

    // Check specific pages
    const blogResult = await checkWebsiteStatus(`${baseUrl}/blog`)

    return NextResponse.json({
      success: true,
      data: {
        main: mainResult,
        blog: blogResult,
      },
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

