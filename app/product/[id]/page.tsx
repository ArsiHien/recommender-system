import Image from "next/image";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/lib/products";
import { ReviewList } from "@/components/review-list";
import { AddReviewForm } from "@/components/add-review-form";
import { Metadata } from "next";

// Define props type
interface ProductPageProps {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Generate dynamic metadata
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.title,
    description:
      product.subtitle ||
      product.description?.[0] ||
      "View this product on our store.",
    openGraph: {
      title: product.title,
      description:
        product.subtitle ||
        product.description?.[0] ||
        "View this product on our store.",
      images: [
        {
          url:
            product.images?.hi_res?.filter(Boolean)[0] ||
            product.images?.large?.[0] ||
            "/placeholder.svg",
          width: 600,
          height: 600,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  // Get the first high-res image or fallback to large or placeholder
  const mainImage =
    product.images?.hi_res?.filter(Boolean)[0] ||
    product.images?.large?.[0] ||
    "/placeholder.svg?height=600&width=600";

  // Get additional images for the gallery
  const additionalImages = [
    ...(product.images?.large || []).slice(1),
    ...(product.images?.hi_res || []).filter(Boolean).slice(1),
  ].slice(0, 4);

  // Parse details if available
  let details = {};
  try {
    if (product.details) {
      details = product.details;
    }
  } catch (e) {
    console.error("Failed to parse product details", e);
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-background">
            <Image
              src={mainImage || "/placeholder.svg"}
              alt={product.title}
              width={600}
              height={600}
              className="h-full w-full object-contain"
              priority // Improve LCP
            />
          </div>

          {additionalImages.length > 0 && (
            <div className="grid grid-cols-4 gap-2">
              {additionalImages.map((image, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg border bg-background"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.title} - Image ${i + 2}`}
                    width={150}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {product.store && (
            <div className="text-sm text-muted-foreground">{product.store}</div>
          )}

          <h1 className="text-3xl font-bold">{product.title}</h1>

          {product.subtitle && (
            <p className="text-lg text-muted-foreground">{product.subtitle}</p>
          )}

          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(product.average_rating || 0)
                      ? "fill-primary text-primary"
                      : "fill-muted text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <div className="text-sm font-medium">
              {product.average_rating?.toFixed(1) || "N/A"}
            </div>
            {product.rating_number && (
              <div className="text-sm text-muted-foreground">
                ({product.rating_number} reviews)
              </div>
            )}
          </div>

          <div className="text-2xl font-bold">
            {product.price !== "None" ? (
              <>${product.price}</>
            ) : (
              <span className="text-muted-foreground">Price unavailable</span>
            )}
          </div>

          {product.main_category && (
            <Badge variant="secondary">{product.main_category}</Badge>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Buy Now
            </Button>
          </div>

          {product.features && product.features.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-medium">Features</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feature, i) => (
                  <li key={i} className="text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {Object.keys(details).length > 0 && (
            <div className="space-y-2">
              <h3 className="font-medium">Product Details</h3>
              <div className="text-sm">
                {Object.entries(details).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 py-1">
                    <div className="text-muted-foreground">{key}</div>
                    <div>{String(value)}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Separator />

      <Tabs defaultValue="description">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="py-4">
          {product.description && product.description.length > 0 ? (
            <div className="space-y-4">
              {product.description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              No description available for this product.
            </p>
          )}
        </TabsContent>
        <TabsContent value="reviews" className="py-4">
          <div className="space-y-8">
            <AddReviewForm productId={id} />
            <ReviewList productId={id} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
