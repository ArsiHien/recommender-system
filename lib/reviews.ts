import type { Review } from "@/types/review";
import clientPromise from "./db";
import { getProductsByIds } from "./products";

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

export async function getUserReviews(
  userId: string,
  limit = 10
): Promise<Review[]> {
  const client = await clientPromise;
  const db = client.db("ecommerce");
  const collection = db.collection("reviews");

  try {
    const reviews = await collection
      .find({ user_id: userId })
      .sort({ timestamp: -1 })
      .limit(limit)
      .toArray();

    return reviews.map((review) => ({
      ...review,
      _id: review._id.toString(),
      rating: review.rating || 0,
      text: review.text || "",
      images: review.images || [],
      asin: review.asin || "",
      parent_asin: review.parent_asin || "",
      user_id: review.user_id || "",
      timestamp: review.timestamp || Date.now(),
      helpful_vote: review.helpful_vote || 0,
      verified_purchase: review.verified_purchase || false,
    }));
  } catch (error) {
    console.error("Error fetching user reviews:", error);
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

export async function enhanceReviewsWithProductInfo(
  reviews: Review[]
): Promise<Review[]> {
  if (reviews.length === 0) return reviews;

  // Get unique product IDs
  const productIds = [...new Set(reviews.map((review) => review.parent_asin))];
  console.log("productIds", productIds);

  // Fetch all relevant products in one query
  const products = await getProductsByIds(productIds);

  console.log("products", products);

  // Create a map for quick lookup
  const productMap: Record<string, { title: string; image: string }> = products.reduce((map: Record<string, { title: string; image: string }>, product) => {
    // Get the first hi_res image or first large image or a placeholder
    const productImage =
      (product.images?.hi_res && product.images.hi_res.filter(Boolean)[0]) ||
      (product.images?.large && product.images.large[0]) ||
      "https://picsum.photos/200";

    map[product._id] = {
      title: product.title || "Unknown Product",
      image: productImage,
    };
    return map;
  }, {});

  // Enhance each review with product information
  const enhancedReviews = reviews.map((review) => {
    const productInfo = productMap[review.parent_asin];
    return {
      ...review,
      product_title: productInfo?.title || "Unknown Product",
      product_image: productInfo?.image || "https://picsum.photos/200",
    };
  });

  return enhancedReviews;
}
