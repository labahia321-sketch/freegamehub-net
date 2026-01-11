import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Game, Category } from "@shared/schema";

interface FeaturedCarouselProps {
  games: Game[];
  categories: Category[];
}

export function FeaturedCarousel({ games, categories }: FeaturedCarouselProps) {
  const [current, setCurrent] = useState(0);

  const featuredGames = games.filter((g) => g.featured === 1).slice(0, 5);

  useEffect(() => {
    if (featuredGames.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredGames.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredGames.length]);

  if (featuredGames.length === 0) return null;

  const currentGame = featuredGames[current];
  const category = categories.find((c) => c.id === currentGame.categoryId);

  const goNext = () => setCurrent((prev) => (prev + 1) % featuredGames.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + featuredGames.length) % featuredGames.length);

  return (
    <section className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8" data-testid="section-featured">
      <div className="absolute inset-0">
        <img
          src={currentGame.thumbnailUrl}
          alt={currentGame.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-center px-8 md:px-12 max-w-2xl">
        {category && (
          <span className="inline-block text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded mb-3 w-fit" data-testid="badge-featured-category">
            {category.name}
          </span>
        )}
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-2" data-testid="text-featured-title">
          {currentGame.title}
        </h2>
        <p className="text-sm md:text-base text-white/80 line-clamp-2 mb-4" data-testid="text-featured-description">
          {currentGame.description}
        </p>
        <Link href={`/game/${currentGame.slug}`}>
          <Button className="gap-2 w-fit" data-testid="button-play-featured">
            <Play className="h-4 w-4 fill-current" />
            Play Now
          </Button>
        </Link>
      </div>

      {featuredGames.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
            data-testid="button-carousel-next"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {featuredGames.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current ? "bg-primary" : "bg-white/50"
                }`}
                data-testid={`button-carousel-dot-${index}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
