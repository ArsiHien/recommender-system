import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Get the first image or use a placeholder
  const imageUrl = product.images?.large?.[0];

  return (
    <Link href={`/product/${product.parent_asin}`}>
      <Card className="h-full overflow-hidden transition-all hover:shadow-md">
        <div className="aspect-square overflow-hidden">
          <Image
            src={imageUrl || "https://picsum.photos/200"}
            alt={product.title}
            width={300}
            height={300}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="space-y-2">
            {product.store && (
              <p className="text-sm text-muted-foreground">{product.store}</p>
            )}
            <h3 className="font-medium line-clamp-2">{product.title}</h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm font-medium">
                {product.average_rating?.toFixed(1) || "N/A"}
              </span>
              {product.rating_number && (
                <span className="text-sm text-muted-foreground">
                  ({product.rating_number})
                </span>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex items-center justify-between w-full">
            <div>
              {product.price !== "None" ? (
                <p className="font-bold">${product.price}</p>
              ) : (
                <p className="text-muted-foreground">Price unavailable</p>
              )}
            </div>
            {product.main_category && (
              <Badge variant="secondary" className="ml-auto">
                {product.main_category}
              </Badge>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
