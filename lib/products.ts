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

// Hàm lấy đề xuất từ recommendations collection
export async function getRecommendationsForUser(
  userId: string
): Promise<string[]> {
  if (!userId) return [];

  const client = await clientPromise;
  const db = client.db("ecommerce");

  try {
    const recommendation = await db
      .collection("recommendations")
      .findOne({ _id: new ObjectId(userId) });

    if (!recommendation || !recommendation.recommended_asins) {
      return [];
    }

    return recommendation.recommended_asins;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return [];
  }
}

// Hàm lấy sản phẩm đề xuất cho người dùng
export async function getRecommendedProductsForUser(
  userId: string,
  page = 1,
  limit = 8
): Promise<Product[]> {
  if (!userId) return [];

  const skip = (page - 1) * limit;
  const client = await clientPromise;
  const db = client.db("ecommerce");

  try {
    // 1. Lấy danh sách các ASIN đề xuất cho người dùng
    const recommendedAsins = await getRecommendationsForUser(userId);

    if (recommendedAsins.length === 0) {
      return [];
    }

    // 2. Lấy thông tin chi tiết của các sản phẩm từ danh sách ASIN
    // Chỉ lấy một phần theo page và limit
    const paginatedAsins = recommendedAsins.slice(skip, skip + limit);

    if (paginatedAsins.length === 0) {
      return [];
    }

    const objectIds = paginatedAsins
      .filter((asin) => ObjectId.isValid(asin)) // Filter out invalid ObjectIds
      .map((asin) => new ObjectId(asin));

    if (objectIds.length === 0) {
      console.warn("No valid ObjectIds provided for product query");
      return [];
    }

    const products = await db
      .collection("products")
      .find({ _id: { $in: objectIds } })
      .toArray();

    // Sắp xếp lại theo thứ tự trong recommendedAsins
    const productMap = new Map();
    products.forEach((product) => {
      productMap.set(product._id.toString(), {
        ...product,
        _id: product._id.toString(),
      });
    });

    // Lấy sản phẩm theo đúng thứ tự trong recommendedAsins
    return paginatedAsins
      .map((asin) => productMap.get(asin))
      .filter((product) => !!product); // Loại bỏ sản phẩm null/undefined
  } catch (error) {
    console.error("Error fetching recommended products:", error);
    return [];
  }
}

// Hàm lấy danh sách ID của các sản phẩm liên quan
export async function getRelatedProductIds(
  productId: string
): Promise<string[]> {
  if (!productId) return [];

  const client = await clientPromise;
  const db = client.db("ecommerce");

  try {
    const relatedEntry = await db
      .collection("related_products")
      .findOne({ _id: new ObjectId(productId) });

    if (!relatedEntry || !relatedEntry.related_asins) {
      return [];
    }

    return relatedEntry.related_asins;
  } catch (error) {
    console.error("Error fetching related product IDs:", error);
    return [];
  }
}

// Hàm lấy sản phẩm liên quan dựa trên ID sản phẩm
export async function getRelatedProducts(
  productId: string,
  limit = 4
): Promise<Product[]> {
  if (!productId) return [];

  const client = await clientPromise;
  const db = client.db("ecommerce");

  try {
    // 1. Lấy danh sách IDs các sản phẩm liên quan
    const relatedIds = await getRelatedProductIds(productId);

    if (relatedIds.length === 0) {
      return [];
    }

    // 2. Lấy thông tin chi tiết của các sản phẩm liên quan
    // Giới hạn số lượng theo limit
    const limitedIds = relatedIds.slice(0, limit);

    const objectIds = limitedIds
      .filter((id) => ObjectId.isValid(id)) // Filter out invalid ObjectIds
      .map((id) => new ObjectId(id));

    const products = await db
      .collection("products")
      .find({ _id: { $in: objectIds } })
      .toArray();

    // Sắp xếp lại theo thứ tự trong relatedIds
    const productMap = new Map();
    products.forEach((product) => {
      productMap.set(product._id.toString(), {
        ...product,
        _id: product._id.toString(),
      });
    });

    // Lấy sản phẩm theo đúng thứ tự trong relatedIds
    return limitedIds
      .map((id) => productMap.get(id))
      .filter((product) => !!product); // Loại bỏ sản phẩm null/undefined
  } catch (error) {
    console.error("Error fetching related products:", error);
    return [];
  }
}

// Hàm lấy nhiều sản phẩm theo danh sách ID
export async function getProductsByIds(
  productIds: string[]
): Promise<Product[]> {
  if (!productIds || productIds.length === 0) return [];

  const client = await clientPromise;
  const db = client.db("ecommerce");

  try {
    const objectIds = productIds
      .filter((asin) => ObjectId.isValid(asin)) // Filter out invalid ObjectIds
      .map((asin) => new ObjectId(asin));

    if (objectIds.length === 0) {
      console.warn("No valid ObjectIds provided for product query");
      return [];
    }

    const products = await db
      .collection("products")
      .find({ _id: { $in: objectIds } })
      .toArray();

    return products.map((product) => ({
      ...product,
      _id: product._id.toString(),
    })) as Product[];
  } catch (error) {
    console.error("Error fetching products by IDs:", error);
    return [];
  }
}
