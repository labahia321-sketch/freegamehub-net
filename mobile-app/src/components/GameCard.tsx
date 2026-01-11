import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Game, Category } from '../data/games';

interface GameCardProps {
  game: Game;
  category?: Category;
  onPress: () => void;
  compact?: boolean;
}

export function GameCard({ game, category, onPress, compact = false }: GameCardProps) {
  const { colors } = useTheme();

  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  if (compact) {
    return (
      <TouchableOpacity
        style={[styles.compactCard, { backgroundColor: colors.card }]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Image source={{ uri: game.thumbnailUrl }} style={styles.compactThumbnail} />
        <Text style={[styles.compactTitle, { color: colors.text }]} numberOfLines={1}>
          {game.title}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image source={{ uri: game.thumbnailUrl }} style={styles.thumbnail} />
      <View style={styles.info}>
        <Text style={[styles.title, { color: colors.text }]} numberOfLines={1}>
          {game.title}
        </Text>
        <View style={styles.meta}>
          {category && (
            <View style={[styles.categoryBadge, { backgroundColor: colors.primary }]}>
              <Text style={styles.categoryText}>{category.name}</Text>
            </View>
          )}
          <Text style={[styles.views, { color: colors.textMuted }]}>
            {formatViews(game.views)} plays
          </Text>
          <Text style={[styles.rating, { color: colors.primary }]}>
            {(game.rating / 20).toFixed(1)}
          </Text>
        </View>
      </View>
      <View style={[styles.playButton, { backgroundColor: colors.primary }]}>
        <Text style={styles.playText}>Play</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    borderWidth: 1,
    alignItems: 'center',
  },
  thumbnail: {
    width: 100,
    height: 70,
  },
  info: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  categoryText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  views: {
    fontSize: 11,
  },
  rating: {
    fontSize: 11,
    fontWeight: '600',
  },
  playButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 12,
  },
  playText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
  compactCard: {
    width: 140,
    marginRight: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
  compactThumbnail: {
    width: 140,
    height: 90,
  },
  compactTitle: {
    padding: 8,
    fontSize: 13,
    fontWeight: '500',
  },
});
