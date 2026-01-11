import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import { STATIC_GAMES, STATIC_CATEGORIES, Game } from '../data/games';
import { GameCard } from '../components/GameCard';
import { AdMobBanner } from '../ads/AdMobBanner';

export function CategoryScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { colors } = useTheme();
  const { slug } = route.params;

  const category = STATIC_CATEGORIES.find((c) => c.slug === slug);
  const categoryGames = category
    ? STATIC_GAMES.filter((g) => g.categoryId === category.id)
    : [];

  const handleGamePress = (game: Game) => {
    navigation.navigate('Game', { slug: game.slug });
  };

  const renderGame = ({ item, index }: { item: Game; index: number }) => (
    <View>
      <View style={styles.gameContainer}>
        <GameCard
          game={item}
          category={category}
          onPress={() => handleGamePress(item)}
        />
      </View>
      {index === 2 && <AdMobBanner position="inline" size="banner" />}
      {index === 6 && <AdMobBanner position="inline" size="mediumRectangle" />}
    </View>
  );

  if (!category) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.errorText, { color: colors.text }]}>Category not found</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={categoryGames}
        renderItem={renderGame}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View>
            <AdMobBanner position="top" size="banner" />
            <View style={styles.header}>
              <Text style={[styles.title, { color: colors.text }]}>{category.name}</Text>
              <Text style={[styles.description, { color: colors.textSecondary }]}>
                {category.description}
              </Text>
              <Text style={[styles.count, { color: colors.textMuted }]}>
                {categoryGames.length} games available
              </Text>
            </View>
          </View>
        }
        ListFooterComponent={<AdMobBanner position="bottom" size="largeBanner" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 4,
  },
  count: {
    fontSize: 13,
  },
  gameContainer: {
    marginBottom: 0,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
  },
});
