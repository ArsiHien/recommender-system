export interface Product {
  _id: string;
  main_category?: string;
  title: string;
  average_rating?: number;
  rating_number?: number;
  features?: string[];
  description?: string[];
  price?: string;
  images?: {
    hi_res?: (string | null)[];
    large?: string[];
    thumb?: string[];
    variant?: string[];
  };
  videos?: {
    title: string[];
    url: string[];
    user_id: string[];
  };
  store?: string;
  categories?: string[];
  details?: Record<string, string>;
  parent_asin: string;
  bought_together?: string | null;
  subtitle?: string | null;
  author?: string | null;
}
