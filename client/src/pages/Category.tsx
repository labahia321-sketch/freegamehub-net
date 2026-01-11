import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GameCard } from "@/components/GameCard";
import { StickyAdSidebar, EzoicResponsiveAd } from "@/components/AdBanner";
import { GameGridSkeleton, LoadingSpinner } from "@/components/LoadingState";
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, SortAsc } from "lucide-react";
import { useState } from "react";
import type { Game, Category as CategoryType } from "@shared/schema";

type SortOption = "popular" | "newest" | "alphabetical";

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const [sortBy, setSortBy] = useState<SortOption>("popular");

  const { data: categories = [], isLoading: categoriesLoading } = useQuery<CategoryType[]>({
    queryKey: ["/api/categories"],
  });

  const { data: games = [], isLoading: gamesLoading } = useQuery<Game[]>({
    queryKey: ["/api/games"],
  });

  const category = categories.find((c) => c.slug === slug);
  const categoryGames = games.filter((g) => g.categoryId === category?.id);

  const sortedGames = [...categoryGames].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return (b.views || 0) - (a.views || 0);
      case "newest":
        return b.id > a.id ? 1 : -1;
      case "alphabetical":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const isLoading = categoriesLoading || gamesLoading;

  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <Header categories={categories} />

      <StickyAdSidebar provider="ezoic" position="right" />

      <main className="flex-1 pt-20 pb-8">
        <div className="max-w-5xl mx-auto px-4">
          {isLoading ? (
            <div className="space-y-6">
              <LoadingSpinner />
              <GameGridSkeleton count={12} />
            </div>
          ) : category ? (
            <>
              <EzoicResponsiveAd position="leaderboard" className="mb-6" />

              <div className="mb-6">
                <h1
                  className="text-4xl font-bold mb-2"
                  data-testid="text-category-title"
                >
                  {category.name}
                </h1>
                {category.description && (
                  <p className="text-muted-foreground" data-testid="text-category-description">
                    {category.description}
                  </p>
                )}
                <p className="text-sm text-muted-foreground mt-1">
                  {sortedGames.length} games available
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-muted-foreground mr-2">Sort by:</span>
                <Button
                  variant={sortBy === "popular" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setSortBy("popular")}
                  className="gap-1"
                  data-testid="button-sort-popular"
                >
                  <TrendingUp className="h-3 w-3" />
                  Most Played
                </Button>
                <Button
                  variant={sortBy === "newest" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setSortBy("newest")}
                  className="gap-1"
                  data-testid="button-sort-newest"
                >
                  <Clock className="h-3 w-3" />
                  Newest
                </Button>
                <Button
                  variant={sortBy === "alphabetical" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setSortBy("alphabetical")}
                  className="gap-1"
                  data-testid="button-sort-alpha"
                >
                  <SortAsc className="h-3 w-3" />
                  A-Z
                </Button>
              </div>

              <div className="xl:hidden my-6">
                <EzoicResponsiveAd position="inline" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sortedGames.slice(0, Math.ceil(sortedGames.length / 2)).map((game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    category={category}
                    showCategory={false}
                  />
                ))}
              </div>

              <EzoicResponsiveAd position="leaderboard" className="my-6" />

              <div className="xl:hidden my-6">
                <EzoicResponsiveAd position="inline" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sortedGames.slice(Math.ceil(sortedGames.length / 2)).map((game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    category={category}
                    showCategory={false}
                  />
                ))}
              </div>

              {sortedGames.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No games found in this category.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold mb-2">Category Not Found</h1>
              <p className="text-muted-foreground">
                The category you're looking for doesn't exist.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer categories={categories} />
    </div>
  );
}
