"use client";

import { useState, useEffect, useRef } from "react";
import { ProductCard } from "@/components/product-card";
import { fetchProducts } from "@/actions/productActions";
import { Product } from "@/types/product";

export default function ProductListClient({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Ref cho element cuối cùng để theo dõi
  const observerTarget = useRef<HTMLDivElement>(null);

  async function loadMoreProducts() {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const moreProducts = await fetchProducts(25, page * 25);
      if (moreProducts.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...moreProducts]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Failed to load more products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMoreProducts();
        }
      },
      { threshold: 0.1 } // Trigger khi 10% của element được nhìn thấy
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(observerTarget.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMore, loading, page]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.parent_asin} product={product} />
        ))}
      </div>

      {/* Observer target element - khi element này hiện ra trong viewport, sẽ tải thêm sản phẩm */}
      <div
        ref={observerTarget}
        className="h-10 flex items-center justify-center mt-4"
      >
        {loading && (
          <div className="flex justify-center items-center py-4">
            <div className="w-6 h-6 border-2 border-t-blue-600 border-r-blue-600 border-b-blue-600 border-l-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {!hasMore && products.length > 0 && (
          <div className="text-center text-gray-500">
            No more products to load
          </div>
        )}
      </div>
    </>
  );
}
