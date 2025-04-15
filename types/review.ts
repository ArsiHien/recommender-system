export interface Review {
  rating: number;
  title?: string;
  text: string;
  images: string[];
  asin: string;
  parent_asin: string;
  user_id: string;
  timestamp: number;
  helpful_vote: number;
  verified_purchase: boolean;
}
