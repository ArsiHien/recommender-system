import type { Product } from "@/types/product";
import clientPromise from "./db";
import { ObjectId } from "mongodb";

export async function getProducts(limit = 10, skip = 0): Promise<Product[]> {
  const client = await clientPromise;
  const db = client.db("ecommerce");
  const collection = db.collection("products");

  const products = await collection.find({}).skip(skip).limit(limit).toArray();

  // Properly cast the MongoDB documents to your Product type
  return products.map(
    (product) =>
      ({
        ...product,
        _id: product._id.toString(), // Convert ObjectId to string if needed
      } as unknown as Product)
  );
}

export async function getRecommendedProductsForUser(userId?: string): Promise<Product[]> {

  try {
    // Nếu không có userId, không trả về đề xuất nào
    if (!userId) {
      return []
    }

    console.log(`Fetching recommendations for user: ${userId}`)

    // Trong ứng dụng thực tế:
    // return await recommendationsConnection.query('SELECT * FROM recommendations WHERE user_id = ?', [userId])

    // Mô phỏng việc lấy đề xuất dựa trên userId
    // Trong thực tế, bạn sẽ có logic phức tạp hơn để lấy đề xuất phù hợp
    return mockRecommendedProducts
  } catch (error) {
    console.error("Error fetching recommended products:", error)
    return []
  }
}

const mockRecommendedProducts: Product[] = [
  {
    _id: "1",
    main_category: "Electronics",
    title: "Wireless Earbuds with Charging Case",
    average_rating: 4.6,
    rating_number: 287,
    features: ["Bluetooth 5.0", "Touch controls", "20-hour battery life"],
    description: ["Experience premium sound quality with our wireless earbuds."],
    price: "59.99",
    images: {
      large: ["/placeholder.svg?height=300&width=300"],
      thumb: ["/placeholder.svg?height=100&width=100"],
    },
    store: "AudioTech",
    parent_asin: "B09FGXHVDZ",
  },
  {
    _id: "2",
    main_category: "Home & Kitchen",
    title: "Smart LED Light Bulbs (4-Pack)",
    average_rating: 4.4,
    rating_number: 132,
    features: ["Voice control compatible", "Adjustable brightness", "Energy efficient"],
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
    _id: "3",
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
]


// export async function getRecommendedProducts(
//   limit = 10,
//   userId?: string
// ): Promise<Product[]> {
//   const client = await clientPromise;
//   const db = client.db("ecommerce");
//   const productsCollection = db.collection("products");

//   // If userId is provided, try to get user-specific recommendations
//   if (userId) {
//     try {
//       const recommendationsCollection = db.collection("recommendations");
//       const userRecommendation = await recommendationsCollection.findOne({
//         _id: userId,
//       });

//       if (
//         userRecommendation &&
//         userRecommendation.recommended_asins &&
//         userRecommendation.recommended_asins.length > 0
//       ) {
//         // Use user-specific recommendations if available
//         const productIds = userRecommendation.recommended_asins.slice(0, limit);

//         const recommendedProducts = await productsCollection
//           .find({ _id: { $in: productIds } })
//           .toArray();

//         return recommendedProducts.map(
//           (product) =>
//             ({
//               ...product,
//               _id: product._id.toString(),
//             } as unknown as Product)
//         );
//       }
//     } catch (error) {
//       console.error("Error fetching user-specific recommendations:", error);
//       // Fall back to default recommendations if there's an error
//     }
//   }

//   // Default to featured/recommended products if no user-specific recommendations
//   const recommendedProducts = await productsCollection
//     .find({
//       $or: [{ featured: true }, { recommended: true }],
//     })
//     .limit(limit)
//     .toArray();

//   return recommendedProducts.map(
//     (product) =>
//       ({
//         ...product,
//         _id: product._id.toString(),
//       } as unknown as Product)
//   );
// }
export async function getProductById(id: string): Promise<Product | null> {
  const client = await clientPromise;
  const db = client.db("ecommerce");
  const collection = db.collection("products");

  try {
    // Handle both ObjectId and string _id
    let query = {};
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      // If the ID looks like a valid ObjectId
      query = { _id: new ObjectId(id) };
    } else {
      // If it's a string ID like 'B01CUPMQZE'
      query = { _id: id };
    }

    const product = await collection.findOne(query);

    if (!product) {
      return null;
    }

    // Properly cast the MongoDB document to your Product type
    return {
      ...product,
      _id: product._id.toString(), // Convert ObjectId to string if needed
    } as unknown as Product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
}

// New function to get recommended products for a specific product
export async function getRecommendedProductsById(
  id: string,
  limit = 10
): Promise<Product[]> {
  const client = await clientPromise;
  const db = client.db("ecommerce");
  const recommendationsCollection = db.collection("recommendations");
  const productsCollection = db.collection("products");

  try {
    // Find recommendations for this product
    const recommendation = await recommendationsCollection.findOne({ _id: id });

    if (
      !recommendation ||
      !recommendation.recommended_asins ||
      recommendation.recommended_asins.length === 0
    ) {
      return [];
    }

    // Fetch the recommended products (limited to specified number)
    const recommendedAsins = recommendation.recommended_asins.slice(0, limit);

    const recommendedProducts = await productsCollection
      .find({ _id: { $in: recommendedAsins } })
      .toArray();

    return recommendedProducts.map(
      (product) =>
        ({
          ...product,
          _id: product._id.toString(),
        } as unknown as Product)
    );
  } catch (error) {
    console.error("Error fetching recommended products:", error);
    return [];
  }
}
