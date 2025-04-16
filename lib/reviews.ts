import type { Review } from "@/types/review";
import clientPromise from "./db";
import { ObjectId } from "mongodb";

export async function getProductReviews(
  productId: string,
  limit = 10
): Promise<Review[]> {
  const client = await clientPromise;
  const db = client.db("ecommerce");
  const collection = db.collection("reviews");

  try {
    const reviews = await collection
      .find({ parent_asin: productId })
      .sort({ timestamp: -1 }) // Sort by newest first
      .limit(limit)
      .toArray();

    // Properly map MongoDB documents to Review type
    return reviews.map(
      (review) =>
        ({
          ...review,
          _id: review._id.toString(), // Convert ObjectId to string if needed
        } as unknown as Review)
    );
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
}

export async function addReview(review: Omit<Review, "_id">): Promise<boolean> {
  const client = await clientPromise;
  const db = client.db("ecommerce");
  const collection = db.collection("reviews");

  try {
    const result = await collection.insertOne({
      ...review,
      timestamp: Date.now(),
      helpful_vote: 0,
      createdAt: new Date(),
    });

    return result.acknowledged;
  } catch (error) {
    console.error("Error adding review:", error);
    return false;
  }
}
