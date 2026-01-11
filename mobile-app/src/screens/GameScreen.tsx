import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import { STATIC_GAMES, STATIC_CATEGORIES, Game } from '../data/games';
import { GameCard } from '../components/GameCard';
import { AdMobBanner } from '../ads/AdMobBanner';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export function GameScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { colors } = useTheme();
  const { slug } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const game = STATIC_GAMES.find((g) => g.slug === slug);
  const category = game ? STATIC_CATEGORIES.find((c) => c.id === game.categoryId) : undefined;
  const relatedGames = game
    ? STATIC_GAMES.filter((g) => g.categoryId === game.categoryId && g.id !== game.id).slice(0, 5)
    : [];

  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  const handleRelatedGamePress = (relatedGame: Game) => {
    navigation.push('Game', { slug: relatedGame.slug });
  };

  if (!game) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.errorText, { color: colors.text }]}>Game not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <AdMobBanner position="top" size="banner" />

      <View style={styles.gameSection}>
        {!isPlaying ? (
          <View style={styles.gamePreview}>
            <View style={[styles.thumbnailContainer, { backgroundColor: colors.surface }]}>
              <Text style={[styles.previewTitle, { color: colors.text }]}>{game.title}</Text>
              <Text style={[styles.previewNote, { color: colors.textMuted }]}>
                Tap Play to start the game
              </Text>
              <TouchableOpacity
                style={[styles.playButton, { backgroundColor: colors.primary }]}
                onPress={() => setIsPlaying(true)}
              >
                <Text style={styles.playButtonText}>Play Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.webviewContainer}>
            {isLoading && (
              <View style={[styles.loadingOverlay, { backgroundColor: colors.background }]}>
                <ActivityIndicator size="large" color={colors.primary} />
                <Text style={[styles.loadingText, { color: colors.textMuted }]}>Loading game...</Text>
              </View>
            )}
            <WebView
              source={{ uri: game.embedUrl }}
              style={styles.webview}
              onLoadEnd={() => setIsLoading(false)}
              allowsFullscreenVideo
              javaScriptEnabled
              domStorageEnabled
              mediaPlaybackRequiresUserAction={false}
              allowsInlineMediaPlayback
              scalesPageToFit
            />
          </View>
        )}
      </View>

      <View style={[styles.infoSection, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.gameTitle, { color: colors.text }]}>{game.title}</Text>
        <View style={styles.metaRow}>
          {category && (
            <View style={[styles.categoryBadge, { backgroundColor: colors.primary }]}>
              <Text style={styles.categoryText}>{category.name}</Text>
            </View>
          )}
          <Text style={[styles.metaText, { color: colors.textMuted }]}>
            {formatViews(game.views)} plays
          </Text>
          <Text style={[styles.ratingText, { color: colors.primary }]}>
            {(game.rating / 20).toFixed(1)}/5
          </Text>
        </View>
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          {game.description}
        </Text>
      </View>

      <AdMobBanner position="inline" size="mediumRectangle" />

      {relatedGames.length > 0 && (
        <View style={styles.relatedSection}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Related Games</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {relatedGames.map((relatedGame) => (
              <GameCard
                key={relatedGame.id}
                game={relatedGame}
                onPress={() => handleRelatedGamePress(relatedGame)}
                compact
              />
            ))}
          </ScrollView>
        </View>
      )}

      <AdMobBanner position="bottom" size="largeBanner" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameSection: {
    padding: 16,
  },
  gamePreview: {
    aspectRatio: 16 / 9,
    width: '100%',
  },
  thumbnailContainer: {
    flex: 1,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  previewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  previewNote: {
    fontSize: 14,
    marginBottom: 16,
  },
  playButton: {
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 8,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  webviewContainer: {
    aspectRatio: 16 / 9,
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
  },
  webview: {
    flex: 1,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
  },
  infoSection: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  gameTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  categoryText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  metaText: {
    fontSize: 13,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
  },
  relatedSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
  },
});
