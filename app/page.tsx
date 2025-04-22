import { fetchProducts } from "@/actions/productActions";
import ProductListClient from "@/components/product-list-client";
import { RecommendedProducts } from "@/components/recommended-products";

export default async function Home() {
  const initialProducts = await fetchProducts(25);

  return (
    <div className="space-y-12">
      {/* RecommendedProducts sẽ tự tải dữ liệu khi biết userId */}
      <RecommendedProducts />

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">All Products</h2>
        </div>
        <ProductListClient initialProducts={initialProducts} />
      </section>
    </div>
  );
}
