"use server";

import { getProducts } from "@/lib/products";

export async function fetchProducts(limit = 25, skip = 0) {
  return await getProducts(limit, skip);
}