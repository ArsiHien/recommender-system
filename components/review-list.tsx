import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import type { Review } from "@/types/review";

interface ReviewListProps {
  reviews: Review[];
}

export function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          No reviews yet. Be the first to review this product!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <div key={index} className="space-y-4">
          {index > 0 && <Separator />}
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarFallback>
                {review.user_id.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="font-medium">
                  User {review.user_id.substring(0, 8)}
                </div>
                <div className="text-xs text-muted-foreground">
                  {new Date(review.timestamp).toLocaleDateString()}
                </div>
              </div>
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
            </div>
          </div>

          {review.title && <h4 className="font-medium">{review.title}</h4>}

          <p className="text-sm">{review.text}</p>

          {review.images && review.images.length > 0 && (
            <div className="flex gap-2 mt-2">
              {review.images.map((image, i) => (
                <div key={i} className="h-20 w-20 rounded-md overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Review image ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {review.verified_purchase && (
            <div className="text-xs text-green-600 font-medium">
              Verified Purchase
            </div>
          )}

          {review.helpful_vote > 0 && (
            <div className="text-xs text-muted-foreground">
              {review.helpful_vote}{" "}
              {review.helpful_vote === 1 ? "person" : "people"} found this
              helpful
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
