import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getUser } from "@/lib/auth";
import { getUserRecommendations } from "@/lib/recommendations";
import ItemCard from "@/components/item-card";
import LoadingItems from "@/components/loading-items";
import { isValidItem, castToItem } from "@/lib/items";
import type { Item } from "@/lib/items";

export default async function UserRecommendations() {
  const user = await getUser();

  if (!user) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Recommended For You</h2>
        <Link
          href="/profile"
          className="flex items-center text-primary hover:underline"
          scroll={true}
        >
          View all <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      <Suspense fallback={<LoadingItems count={4} />}>
        <RecommendationsList userIndex={user.user_index} />
      </Suspense>
    </section>
  );
}

async function RecommendationsList({ userIndex }: { userIndex: number }) {
  const recommendationsData = await getUserRecommendations(userIndex);

  // Filter to ensure only valid items are used
  const recommendations: Item[] = recommendationsData
    .filter(
      (item) =>
        isValidItem(item) ||
        (item && typeof item === "object" && "item_index" in item)
    )
    .map((item) => (isValidItem(item) ? item : castToItem(item)));

  if (recommendations.length === 0) {
    return (
      <p className="text-muted-foreground">
        No recommendations found for you yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {recommendations.map((item) => (
        <ItemCard key={item.item_index} item={item} />
      ))}
    </div>
  );
}
