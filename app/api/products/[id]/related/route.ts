// app/api/products/[id]/related/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getRelatedProducts } from "@/lib/products";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const productId = params.id;
  const searchParams = request.nextUrl.searchParams;
  const limit = parseInt(searchParams.get("limit") || "4");

  if (!productId) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    );
  }

  try {
    const relatedProducts = await getRelatedProducts(productId, limit);
    return NextResponse.json(relatedProducts);
  } catch (error) {
    console.error("Error fetching related products:", error);
    return NextResponse.json(
      { error: "Failed to fetch related products" },
      { status: 500 }
    );
  }
}
