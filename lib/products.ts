import type { Product } from "@/types/product";

// Mock data for products
const mockProducts: Product[] = [
  {
    main_category: "All Beauty",
    title: "Howard LC0008 Leather Conditioner, 8-Ounce (4-Pack)",
    average_rating: 4.8,
    rating_number: 10,
    features: [],
    description: [],
    price: "39.99",
    images: {
      hi_res: [
        null,
        "https://m.media-amazon.com/images/I/71i77AuI9xL._SL1500_.jpg",
      ],
      large: [
        "https://m.media-amazon.com/images/I/41qfjSfqNyL.jpg",
        "https://m.media-amazon.com/images/I/41w2yznfuZL.jpg",
      ],
      thumb: [
        "https://m.media-amazon.com/images/I/41qfjSfqNyL._SS40_.jpg",
        "https://m.media-amazon.com/images/I/41w2yznfuZL._SS40_.jpg",
      ],
      variant: ["MAIN", "PT01"],
    },
    videos: { title: [], url: [], user_id: [] },
    store: "Howard Products",
    categories: [],
    details:
      '{"Package Dimensions": "7.1 x 5.5 x 3 inches; 2.38 Pounds", "UPC": "617390882781"}',
    parent_asin: "B01CUPMQZE",
    bought_together: null,
    subtitle: null,
    author: null,
  },
  {
    main_category: "Beauty & Personal Care",
    title: "Premium Hair Styling Spray",
    average_rating: 4.5,
    rating_number: 128,
    features: ["Long-lasting hold", "No sticky residue", "Pleasant scent"],
    description: [
      "Our premium hair styling spray provides all-day hold without the stiffness or stickiness of other products.",
    ],
    price: "24.99",
    images: {
      large: ["/placeholder.svg?height=300&width=300"],
      thumb: ["/placeholder.svg?height=100&width=100"],
    },
    store: "Beauty Essentials",
    parent_asin: "B00YQ6X8EO",
  },
  {
    main_category: "Electronics",
    title: "Wireless Noise-Cancelling Headphones",
    average_rating: 4.7,
    rating_number: 352,
    features: [
      "Active noise cancellation",
      "40-hour battery life",
      "Premium sound quality",
    ],
    description: [
      "Experience immersive sound with our wireless noise-cancelling headphones.",
    ],
    price: "199.99",
    images: {
      large: ["/placeholder.svg?height=300&width=300"],
      thumb: ["/placeholder.svg?height=100&width=100"],
    },
    store: "AudioTech",
    parent_asin: "B07XFJC9VR",
  },
  {
    main_category: "Home & Kitchen",
    title: "Stainless Steel Coffee Maker",
    average_rating: 4.3,
    rating_number: 89,
    features: ["Programmable timer", "Keep-warm function", "Easy to clean"],
    description: [
      "Start your day right with our premium stainless steel coffee maker.",
    ],
    price: "79.99",
    images: {
      large: ["/placeholder.svg?height=300&width=300"],
      thumb: ["/placeholder.svg?height=100&width=100"],
    },
    store: "Kitchen Essentials",
    parent_asin: "B08KFMJ91F",
  },
  {
    main_category: "Clothing",
    title: "Men's Casual Cotton T-Shirt",
    average_rating: 4.2,
    rating_number: 215,
    features: ["100% cotton", "Machine washable", "Comfortable fit"],
    description: ["Classic cotton t-shirt perfect for everyday wear."],
    price: "19.99",
    images: {
      large: ["/placeholder.svg?height=300&width=300"],
      thumb: ["/placeholder.svg?height=100&width=100"],
    },
    store: "Fashion Basics",
    parent_asin: "B09DFLK7QP",
  },
  {
    main_category: "Sports & Outdoors",
    title: "Yoga Mat with Carrying Strap",
    average_rating: 4.6,
    rating_number: 178,
    features: [
      "Non-slip surface",
      "Eco-friendly materials",
      "Extra thick padding",
    ],
    description: ["Perfect for yoga, pilates, and other floor exercises."],
    price: "34.99",
    images: {
      large: ["/placeholder.svg?height=300&width=300"],
      thumb: ["/placeholder.svg?height=100&width=100"],
    },
    store: "Fitness Gear",
    parent_asin: "B07ZRC9T8S",
  },
  {
    main_category: "Books",
    title: "The Art of Mindful Living",
    average_rating: 4.8,
    rating_number: 423,
    features: [],
    description: [
      "A comprehensive guide to incorporating mindfulness into your daily routine.",
    ],
    price: "15.99",
    images: {
      large: ["/placeholder.svg?height=300&width=300"],
      thumb: ["/placeholder.svg?height=100&width=100"],
    },
    store: "Book Haven",
    parent_asin: "B06XC9JZMR",
    author: "Sarah Johnson",
  },
  {
    main_category: "Toys & Games",
    title: "Educational Building Blocks Set",
    average_rating: 4.9,
    rating_number: 156,
    features: [
      "100 pieces",
      "Compatible with major brands",
      "Develops creativity and motor skills",
    ],
    description: [
      "Colorful building blocks perfect for children ages 3 and up.",
    ],
    price: "29.99",
    images: {
      large: ["/placeholder.svg?height=300&width=300"],
      thumb: ["/placeholder.svg?height=100&width=100"],
    },
    store: "Toy World",
    parent_asin: "B08QJNKPFR",
  },
];

// Mock recommended products
const mockRecommendedProducts: Product[] = [
  {
    main_category: "Electronics",
    title: "Wireless Earbuds with Charging Case",
    average_rating: 4.6,
    rating_number: 287,
    features: ["Bluetooth 5.0", "Touch controls", "20-hour battery life"],
    description: [
      "Experience premium sound quality with our wireless earbuds.",
    ],
    price: "59.99",
    images: {
      large: ["/placeholder.svg?height=300&width=300"],
      thumb: ["/placeholder.svg?height=100&width=100"],
    },
    store: "AudioTech",
    parent_asin: "B09FGXHVDZ",
  },
  {
    main_category: "Home & Kitchen",
    title: "Smart LED Light Bulbs (4-Pack)",
    average_rating: 4.4,
    rating_number: 132,
    features: [
      "Voice control compatible",
      "Adjustable brightness",
      "Energy efficient",
    ],
    description: ["Transform your home lighting with our smart LED bulbs."],
    price: "39.99",
    images: {
      large: ["/placeholder.svg?height=300&width=300"],
      thumb: ["/placeholder.svg?height=100&width=100"],
    },
    store: "Smart Home Solutions",
    parent_asin: "B07WNRN9WQ",
  },
  {
    main_category: "Beauty & Personal Care",
    title: "Natural Vitamin C Serum",
    average_rating: 4.7,
    rating_number: 198,
    features: ["Anti-aging formula", "Brightens skin", "Reduces fine lines"],
    description: ["Revitalize your skin with our powerful vitamin C serum."],
    price: "24.99",
    images: {
      large: ["/placeholder.svg?height=300&width=300"],
      thumb: ["/placeholder.svg?height=100&width=100"],
    },
    store: "Natural Beauty",
    parent_asin: "B07TQNMXFR",
  },
];

// Function to get all products (simulating database connection)
export async function getProducts(): Promise<Product[]> {
  // In a real app, this would fetch from a database
  return Promise.resolve(mockProducts);
}

export async function getRecommendedProducts(): Promise<Product[]> {
  return Promise.resolve(mockRecommendedProducts);
}

export async function getProductById(id: string): Promise<Product | null> {
  const allProducts = [...mockProducts, ...mockRecommendedProducts];
  const product = allProducts.find((p) => p.parent_asin === id);
  return Promise.resolve(product || null);
}
