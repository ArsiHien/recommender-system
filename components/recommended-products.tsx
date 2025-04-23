"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/types/product";

export function RecommendedProducts() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userId, setUserId] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Hàm để tải dữ liệu đề xuất từ API
  const loadRecommendations = async (uid: string) => {
    if (!uid) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/recommendations?userId=${uid}`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const recommendedProducts = await response.json();
      setProducts(recommendedProducts);
    } catch (error) {
      console.error("Error fetching recommended products:", error);
      setProducts([]); // Đảm bảo products rỗng nếu có lỗi
    } finally {
      setIsLoading(false);
    }
  };

  // Hàm kiểm tra trạng thái đăng nhập và cập nhật state
  const checkLoginStatus = () => {
    const storedUserId = localStorage.getItem("userId");
    const newIsLoggedIn = !!storedUserId;

    setIsLoggedIn(newIsLoggedIn);
    setUserId(storedUserId);

    if (!newIsLoggedIn) {
      // Nếu không đăng nhập, xóa ngay lập tức danh sách sản phẩm đề xuất
      setProducts([]);
      setIsLoading(false);
    } else if (storedUserId) {
      // Nếu đăng nhập, tải sản phẩm đề xuất
      loadRecommendations(storedUserId);
    }
  };

  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập ban đầu
    checkLoginStatus();

    // Lắng nghe sự kiện đăng nhập/đăng xuất
    const handleLoginStatusChange = () => {
      checkLoginStatus();
    };

    window.addEventListener("loginStatusChanged", handleLoginStatusChange);

    return () => {
      window.removeEventListener("loginStatusChanged", handleLoginStatusChange);
    };
  }, []);

  // Nếu không đăng nhập hoặc không có sản phẩm đề xuất và không đang tải, không hiển thị gì
  if (!isLoggedIn || (products.length === 0 && !isLoading)) return null;

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight">
          Recommended For You
        </h2>
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
            <ProductCard key={product.parent_asin} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
