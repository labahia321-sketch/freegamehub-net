import { Link } from "wouter";
import { Play, Star, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Game, Category } from "@shared/schema";

interface GameCardProps {
  game: Game;
  category?: Category;
  showCategory?: boolean;
}

export function GameCard({ game, category, showCategory = true }: GameCardProps) {
  const formatViews = (views: number | null) => {
    if (!views) return "0";
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  return (
    <Link href={`/game/${game.slug}`}>
      <article
        className="game-card group relative rounded-lg overflow-visible cursor-pointer hover-elevate active-elevate-2"
        data-testid={`card-game-${game.slug}`}
      >
        <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
          <img
            src={game.thumbnailUrl}
            alt={`${game.title} - Play Online`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          
          <div className="game-card-overlay rounded-lg flex flex-col justify-end p-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white text-sm line-clamp-1">
                {game.title}
              </h3>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 ml-2">
                <Play className="h-4 w-4 text-primary-foreground fill-current" />
              </div>
            </div>
          </div>

          {showCategory && category && (
            <Badge
              variant="secondary"
              className="absolute top-2 left-2 text-xs"
              data-testid={`badge-category-${game.slug}`}
            >
              {category.name}
            </Badge>
          )}
        </div>

        <div className="p-2">
          <h3 className="font-medium text-sm line-clamp-1 mb-1" data-testid={`text-title-${game.slug}`}>
            {game.title}
          </h3>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {formatViews(game.views)}
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-current text-yellow-500" />
              {((game.rating || 0) / 20).toFixed(1)}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
