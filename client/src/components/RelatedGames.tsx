import { GameCard } from "./GameCard";
import type { Game, Category } from "@shared/schema";

interface RelatedGamesProps {
  games: Game[];
  categories: Category[];
  currentGameId: string;
}

export function RelatedGames({ games, categories, currentGameId }: RelatedGamesProps) {
  const filteredGames = games.filter((g) => g.id !== currentGameId).slice(0, 6);

  if (filteredGames.length === 0) return null;

  const getCategoryForGame = (game: Game) => {
    return categories.find((c) => c.id === game.categoryId);
  };

  return (
    <section className="mt-12" data-testid="section-related-games">
      <h2 className="text-2xl font-semibold mb-4" data-testid="text-related-games-title">Related Games</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            category={getCategoryForGame(game)}
            showCategory={true}
          />
        ))}
      </div>
    </section>
  );
}
