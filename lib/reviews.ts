import type { Review } from "@/types/review";

// Mock data for reviews
const mockReviews: Record<string, Review[]> = {
  B00YQ6X8EO: [
    {
      rating: 5.0,
      title: "Such a lovely scent but not overpowering.",
      text: "This spray is really nice. It smells really good, goes on really fine, and does the trick. I will say it feels like you need a lot of it though to get the texture I want. I have a lot of hair, medium thickness. I am comparing to other brands with yucky chemicals so I'm gonna stick with this. Try it!",
      images: [],
      asin: "B00YQ6X8EO",
      parent_asin: "B00YQ6X8EO",
      user_id: "AGKHLEW2SOWHNMFQIJGBECAF7INQ",
      timestamp: 1588687728923,
      helpful_vote: 0,
      verified_purchase: true,
    },
    {
      rating: 4.0,
      title: "Good product, a bit pricey",
      text: "Works well for my hair type. Holds well without being too stiff. The only downside is the price for the amount you get.",
      images: [],
      asin: "B00YQ6X8EO",
      parent_asin: "B00YQ6X8EO",
      user_id: "BFKHLEW2SOWHNMFQIJGBECAF7INR",
      timestamp: 1592687728923,
      helpful_vote: 2,
      verified_purchase: true,
    },
  ],
  B01CUPMQZE: [
    {
      rating: 5.0,
      title: "Excellent leather conditioner",
      text: "This leather conditioner is amazing. It restored my old leather couch and made it look almost new again. Highly recommended!",
      images: [],
      asin: "B01CUPMQZE",
      parent_asin: "B01CUPMQZE",
      user_id: "CGKHLEW2SOWHNMFQIJGBECAF7INS",
      timestamp: 1598687728923,
      helpful_vote: 5,
      verified_purchase: true,
    },
  ],
};

export async function getProductReviews(productId: string): Promise<Review[]> {
  return Promise.resolve(mockReviews[productId] || []);
}

export async function addReview(review: Review): Promise<void> {
  if (!mockReviews[review.parent_asin]) {
    mockReviews[review.parent_asin] = [];
  }
  mockReviews[review.parent_asin].push(review);
  return Promise.resolve();
}
