import { ProductCard } from "@/components/product-card"
import { RecommendedProducts } from "@/components/recommended-products"
import { getProducts } from "@/lib/products"

export default async function Home() {
  // Chỉ tải dữ liệu sản phẩm chung
  const products = await getProducts(25)

  return (
    <div className="space-y-12">
      {/* RecommendedProducts sẽ tự tải dữ liệu khi biết userId */}
      <RecommendedProducts />

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">All Products</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.parent_asin} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
