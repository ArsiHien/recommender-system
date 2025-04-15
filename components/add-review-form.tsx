"use client";

import type React from "react";

import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { addReview } from "@/lib/reviews";

interface AddReviewFormProps {
  productId: string;
}

export function AddReviewForm({ productId }: AddReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if user is logged in
    const userId = localStorage.getItem("userId");
    if (!userId) {
      toast({
        title: "Authentication required",
        description: "Please log in to submit a review",
        variant: "destructive",
      });
      return;
    }

    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a rating before submitting",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await addReview({
        rating,
        title,
        text,
        asin: productId,
        parent_asin: productId,
        user_id: userId,
        timestamp: Date.now(),
        helpful_vote: 0,
        verified_purchase: true,
        images: [],
      });

      toast({
        title: "Review submitted",
        description: "Thank you for your feedback!",
      });

      // Reset form
      setRating(0);
      setTitle("");
      setText("");

      // Reload the page to show the new review
      window.location.reload();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if user is logged in
  const userId = localStorage.getItem("userId");
  const isLoggedIn = !!userId;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Write a Review</h3>
      {!isLoggedIn && (
        <div className="p-4 mb-4 text-sm text-amber-800 bg-amber-100 rounded-md">
          Please log in to submit a review.
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Rating</label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                onMouseEnter={() => setHoverRating(value)}
                onMouseLeave={() => setHoverRating(0)}
                className="p-1"
              >
                <Star
                  className={`h-6 w-6 ${
                    (hoverRating || rating) >= value
                      ? "fill-primary text-primary"
                      : "fill-muted text-muted-foreground"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="review-title" className="text-sm font-medium">
            Title
          </label>
          <Input
            id="review-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Summarize your experience"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="review-text" className="text-sm font-medium">
            Review
          </label>
          <Textarea
            id="review-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share your experience with this product"
            rows={4}
            required
          />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </Button>
      </form>
    </div>
  );
}
