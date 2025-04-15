import { ProductCard } from "@/components/product-card";
import { getProducts, getRecommendedProducts } from "@/lib/products";

export default async function Home() {
  // Fetch products from both databases
  const products = await getProducts();
  const recommendedProducts = await getRecommendedProducts();

  return (
    <div className="space-y-12">
      {recommendedProducts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">
              Recommended For You
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.parent_asin} product={product} />
            ))}
          </div>
        </section>
      )}

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
  );
}
