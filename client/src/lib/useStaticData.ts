import { useQuery } from "@tanstack/react-query";
import { STATIC_GAMES, STATIC_CATEGORIES } from "@/data/games";
import type { Game, Category } from "@shared/schema";

export function useCategories() {
  return useQuery<Category[]>({
    queryKey: ["/api/categories"],
    queryFn: async () => {
      try {
        const response = await fetch("/api/categories");
        if (!response.ok) throw new Error("API not available");
        return response.json();
      } catch {
        return STATIC_CATEGORIES;
      }
    },
    initialData: STATIC_CATEGORIES,
    staleTime: Infinity,
  });
}

export function useGames() {
  return useQuery<Game[]>({
    queryKey: ["/api/games"],
    queryFn: async () => {
      try {
        const response = await fetch("/api/games");
        if (!response.ok) throw new Error("API not available");
        return response.json();
      } catch {
        return STATIC_GAMES;
      }
    },
    initialData: STATIC_GAMES,
    staleTime: Infinity,
  });
}

export function useGame(slug: string) {
  const { data: games = STATIC_GAMES } = useGames();
  return games.find((g) => g.slug === slug);
}

export function useCategory(slug: string) {
  const { data: categories = STATIC_CATEGORIES } = useCategories();
  return categories.find((c) => c.slug === slug);
}
