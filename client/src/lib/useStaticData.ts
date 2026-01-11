import { useState, useEffect } from "react";
import { STATIC_GAMES, STATIC_CATEGORIES } from "@/data/games";
import type { Game, Category } from "@shared/schema";

export function useCategories() {
  const [data] = useState<Category[]>(STATIC_CATEGORIES);
  return { data, isLoading: false };
}

export function useGames() {
  const [data] = useState<Game[]>(STATIC_GAMES);
  return { data, isLoading: false };
}

export function useGame(slug: string) {
  return STATIC_GAMES.find((g) => g.slug === slug);
}

export function useCategory(slug: string) {
  return STATIC_CATEGORIES.find((c) => c.slug === slug);
}
