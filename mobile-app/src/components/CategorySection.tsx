import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Game, Category } from '../data/games';
import { GameCard } from './GameCard';

interface CategorySectionProps {
  category: Category;
  games: Game[];
  onGamePress: (game: Game) => void;
  onViewAll: () => void;
}

export function CategorySection({ category, games, onGamePress, onViewAll }: CategorySectionProps) {
  const { colors } = useTheme();

  if (games.length === 0) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: colors.text }]}>{category.name}</Text>
          <Text style={[styles.count, { color: colors.textMuted }]}>
            ({category.gameCount} games)
          </Text>
        </View>
        <TouchableOpacity onPress={onViewAll} style={styles.viewAllButton}>
          <Text style={[styles.viewAll, { color: colors.primary }]}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {games.slice(0, 4).map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onPress={() => onGamePress(game)}
            compact
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  count: {
    fontSize: 13,
  },
  viewAllButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  viewAll: {
    fontSize: 14,
    fontWeight: '500',
  },
});
