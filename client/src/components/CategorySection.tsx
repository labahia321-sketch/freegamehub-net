import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GameCard } from "./GameCard";
import type { Game, Category } from "@shared/schema";

interface CategorySectionProps {
  category: Category;
  games: Game[];
  showViewAll?: boolean;
}

export function CategorySection({ category, games, showViewAll = true }: CategorySectionProps) {
  if (games.length === 0) return null;

  return (
    <section className="mb-12" data-testid={`section-category-${category.slug}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <span data-testid={`text-section-title-${category.slug}`}>{category.name}</span>
          {category.gameCount && category.gameCount > 0 && (
            <span className="text-sm font-normal text-muted-foreground">
              ({category.gameCount} games)
            </span>
          )}
        </h2>
        {showViewAll && (
          <Link href={`/category/${category.slug}`}>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1"
              data-testid={`button-view-all-${category.slug}`}
            >
              View All
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} category={category} showCategory={false} />
        ))}
      </div>
    </section>
  );
}
