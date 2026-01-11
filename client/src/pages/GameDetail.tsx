import { useParams, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GameEmbed } from "@/components/GameEmbed";
import { RelatedGames } from "@/components/RelatedGames";
import { EzoicResponsiveAd } from "@/components/AdBanner";
import { LoadingSpinner } from "@/components/LoadingState";
import { Badge } from "@/components/ui/badge";
import { Star, Eye, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCategories, useGames } from "@/lib/useStaticData";
import type { Game, Category } from "@shared/schema";

export default function GameDetail() {
  const { slug } = useParams<{ slug: string }>();

  const { data: categories = [], isLoading: categoriesLoading } = useCategories();
  const { data: games = [], isLoading: gamesLoading } = useGames();

  const game = games.find((g) => g.slug === slug);
  const category = game ? categories.find((c) => c.id === game.categoryId) : undefined;

  const relatedGames = game
    ? games.filter((g) => g.categoryId === game.categoryId && g.id !== game.id).slice(0, 5)
    : [];

  const isLoading = categoriesLoading || gamesLoading;

  const formatViews = (views: number | null) => {
    if (!views) return "0";
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <Header categories={categories} />

      <main className="flex-1 pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          {isLoading ? (
            <LoadingSpinner />
          ) : game ? (
            <>
              <div className="mb-4">
                <Link href={category ? `/category/${category.slug}` : "/"}>
                  <Button variant="ghost" size="sm" className="gap-1 mb-2" data-testid="button-back">
                    <ChevronLeft className="h-4 w-4" />
                    {category ? category.name : "Home"}
                  </Button>
                </Link>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1
                    className="text-3xl md:text-4xl font-bold"
                    data-testid="text-game-title"
                  >
                    {game.title}
                  </h1>
                  {category && (
                    <Badge variant="secondary" data-testid="badge-game-category">
                      {category.name}
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {formatViews(game.views)} plays
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current text-primary" />
                    {((game.rating || 0) / 20).toFixed(1)} / 5
                  </span>
                </div>
              </div>

              <EzoicResponsiveAd position="inline" className="mb-4" />

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
                <div className="space-y-6">
                  <GameEmbed embedUrl={game.embedUrl} title={game.title} />

                  {game.description && (
                    <div className="p-4 bg-card rounded-lg border border-card-border">
                      <h2 className="font-semibold mb-2">About this game</h2>
                      <p className="text-muted-foreground" data-testid="text-game-description">
                        {game.description}
                      </p>
                    </div>
                  )}

                  <div className="lg:hidden">
                    <EzoicResponsiveAd position="inline" className="my-4" />
                  </div>
                </div>

                <aside className="space-y-6">
                  <EzoicResponsiveAd position="sidebar" />
                </aside>
              </div>

              <section className="mt-8">
                <RelatedGames
                  games={relatedGames}
                  categories={categories}
                  currentGameId={game.id}
                />

                <EzoicResponsiveAd position="footer" className="mt-6" />
              </section>
            </>
          ) : (
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold mb-2">Game Not Found</h1>
              <p className="text-muted-foreground mb-4">
                The game you're looking for doesn't exist.
              </p>
              <Link href="/">
                <Button>Back to Home</Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer categories={categories} />
    </div>
  );
}
