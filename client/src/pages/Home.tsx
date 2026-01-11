import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { CategorySection } from "@/components/CategorySection";
import { AdBanner } from "@/components/AdBanner";
import { PageLoadingState } from "@/components/LoadingState";
import type { Game, Category } from "@shared/schema";

export default function Home() {
  const { data: categories = [], isLoading: categoriesLoading } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: games = [], isLoading: gamesLoading } = useQuery<Game[]>({
    queryKey: ["/api/games"],
  });

  const isLoading = categoriesLoading || gamesLoading;

  const getGamesByCategory = (categoryId: string) => {
    return games.filter((g) => g.categoryId === categoryId).slice(0, 4);
  };

  const recentGames = [...games]
    .sort((a, b) => (b.id > a.id ? 1 : -1))
    .slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <Header categories={categories} />
      
      <main className="flex-1 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          {isLoading ? (
            <PageLoadingState />
          ) : (
            <>
              <FeaturedCarousel games={games} categories={categories} />

              <AdBanner type="leaderboard" provider="adsense" className="mb-8" />

              <div className="flex gap-8">
                <div className="flex-1 min-w-0">
                  {categories.map((category) => {
                    const categoryGames = getGamesByCategory(category.id);
                    return (
                      <CategorySection
                        key={category.id}
                        category={category}
                        games={categoryGames}
                      />
                    );
                  })}

                  {recentGames.length > 0 && (
                    <section className="mb-12" data-testid="section-recent">
                      <h2 className="text-2xl font-semibold mb-4">Recently Added</h2>
                      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                        {recentGames.map((game) => {
                          const category = categories.find((c) => c.id === game.categoryId);
                          return (
                            <div key={game.id} className="shrink-0 w-48">
                              <Link
                                href={`/game/${game.slug}`}
                                className="block group"
                                data-testid={`link-recent-${game.slug}`}
                              >
                                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                                  <img
                                    src={game.thumbnailUrl}
                                    alt={game.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                  />
                                </div>
                                <h3 className="mt-2 text-sm font-medium line-clamp-1" data-testid={`text-recent-title-${game.slug}`}>
                                  {game.title}
                                </h3>
                                {category && (
                                  <span className="text-xs text-muted-foreground" data-testid={`text-recent-category-${game.slug}`}>
                                    {category.name}
                                  </span>
                                )}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  )}
                </div>

                <aside className="hidden lg:block w-[300px] shrink-0 space-y-6">
                  <AdBanner type="sidebar" provider="adsense" />
                </aside>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer categories={categories} />
    </div>
  );
}
