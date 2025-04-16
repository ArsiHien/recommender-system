import { getProductReviews, addReview } from "@/lib/reviews"
import { type NextRequest, NextResponse } from "next/server"
import type { Review } from "@/types/review"

export async function GET(request: NextRequest) {
  try {
    // Lấy productId từ query params
    const productId = request.nextUrl.searchParams.get("productId")

    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 })
    }

    const reviews = await getProductReviews(productId)
    return NextResponse.json(reviews)
  } catch (error) {
    console.error("Error fetching reviews:", error)
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const review = (await request.json()) as Review

    // Validate required fields
    if (!review.rating || !review.text || !review.asin || !review.parent_asin || !review.user_id) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    await addReview(review)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error adding review:", error)
    return NextResponse.json({ error: "Failed to add review" }, { status: 500 })
  }
}
