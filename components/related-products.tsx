"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/types/product";
import Link from "next/link";

interface RelatedProductsProps {
  productId: string;
  productTitle?: string;
  limit?: number;
  showViewAllLink?: boolean;
}

export function RelatedProducts({
  productId,
  productTitle,
  limit = 4,
  showViewAllLink = true,
}: RelatedProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadRelatedProducts() {
      if (!productId) return;

      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/products/${productId}/related?limit=${limit}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const relatedProducts = await response.json();
        setProducts(relatedProducts);
      } catch (error) {
        console.error("Error fetching related products:", error);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadRelatedProducts();
  }, [productId, limit]);

  // Nếu không có sản phẩm liên quan và không đang tải, không hiển thị gì
  if (products.length === 0 && !isLoading) return null;

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold tracking-tight">
          {productTitle
            ? `Related to "${
                productTitle.length > 50
                  ? productTitle.substring(0, 50) + "..."
                  : productTitle
              }"`
            : "Related Products"}
        </h2>

        {showViewAllLink && productId && (
          <Link
            href={`/products/${productId}`}
            className="text-sm text-blue-600 hover:underline"
          >
            View Product
          </Link>
        )}
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-[300px] rounded-lg bg-gray-100 animate-pulse"
            ></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={`rel-${product.parent_asin || product._id}`}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}
