"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Star, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ObjectId } from "mongodb";

interface UserReview {
  _id: ObjectId;
  parent_asin: string;
  user_id: string;
  rating: number;
  title?: string;
  text: string;
  timestamp: number;
  helpful_vote: number;
  verified_purchase: boolean;
  product_title?: string;
  product_image?: string;
}

export default function MyReviewsPage() {
  const [reviews, setReviews] = useState<UserReview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setIsLoggedIn(false);
      setIsLoading(false);
      return;
    }

    setIsLoggedIn(true);

    const fetchUserReviews = async () => {
      try {
        const response = await fetch(`/api/reviews?userId=${userId}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching user reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserReviews();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">My Reviews</h1>
        <p className="text-muted-foreground mb-6">
          Please log in to view your reviews.
        </p>
        <Button onClick={() => router.push("/")}>Go to Home</Button>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">My Reviews</h1>
        <p className="text-muted-foreground mb-6">
          You haven't written any reviews yet.
        </p>
        <Button onClick={() => router.push("/")}>Browse Products</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Reviews</h1>

      <div className="space-y-6">
        {reviews.map((review) => (
          <Card key={review._id.toString()} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/4 p-4">
                <Link href={`/product/${review.parent_asin}`}>
                  <div className="aspect-square overflow-hidden rounded-md">
                    <Image
                      src={review.product_image || "https://picsum.photos/200"}
                      alt={review.product_title || "Product"}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 font-medium line-clamp-2">
                    {review.product_title}
                  </h3>
                </Link>
              </div>

              <div className="flex-1 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(review.rating)
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {new Date(review.timestamp).toLocaleDateString()}
                  </span>
                </div>

                {review.title && (
                  <h4 className="font-medium mb-2">{review.title}</h4>
                )}
                <p className="text-sm">{review.text}</p>

                {review.verified_purchase && (
                  <div className="mt-2 text-xs text-green-600 font-medium">
                    Verified Purchase
                  </div>
                )}

                {review.helpful_vote > 0 && (
                  <div className="mt-1 text-xs text-muted-foreground">
                    {review.helpful_vote}{" "}
                    {review.helpful_vote === 1 ? "person" : "people"} found this
                    helpful
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
