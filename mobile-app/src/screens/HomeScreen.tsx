import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import { STATIC_GAMES, STATIC_CATEGORIES, Game } from '../data/games';
import { FeaturedCarousel } from '../components/FeaturedCarousel';
import { CategorySection } from '../components/CategorySection';
import { AdMobBanner } from '../ads/AdMobBanner';

export function HomeScreen() {
  const navigation = useNavigation<any>();
  const { colors } = useTheme();

  const getGamesByCategory = (categoryId: string) => {
    return STATIC_GAMES.filter((g) => g.categoryId === categoryId).slice(0, 4);
  };

  const handleGamePress = (game: Game) => {
    navigation.navigate('Game', { slug: game.slug });
  };

  const handleViewAllCategory = (categorySlug: string) => {
    navigation.navigate('Category', { slug: categorySlug });
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <AdMobBanner position="top" size="largeBanner" />

      <FeaturedCarousel
        games={STATIC_GAMES}
        categories={STATIC_CATEGORIES}
        onGamePress={handleGamePress}
      />

      <AdMobBanner position="inline" size="banner" />

      {STATIC_CATEGORIES.slice(0, 2).map((category) => (
        <CategorySection
          key={category.id}
          category={category}
          games={getGamesByCategory(category.id)}
          onGamePress={handleGamePress}
          onViewAll={() => handleViewAllCategory(category.slug)}
        />
      ))}

      <AdMobBanner position="inline" size="mediumRectangle" />

      {STATIC_CATEGORIES.slice(2).map((category) => (
        <CategorySection
          key={category.id}
          category={category}
          games={getGamesByCategory(category.id)}
          onGamePress={handleGamePress}
          onViewAll={() => handleViewAllCategory(category.slug)}
        />
      ))}

      <AdMobBanner position="bottom" size="largeBanner" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
