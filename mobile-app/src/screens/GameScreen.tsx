import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AdMobBanner } from '../ads/AdMobBanner';

const RELATED_GAMES = [
  { id: '4', title: 'Space Shooter', thumbnail: 'https://via.placeholder.com/150x100' },
  { id: '5', title: 'Zombie Slayer', thumbnail: 'https://via.placeholder.com/150x100' },
  { id: '6', title: 'Combat Arena', thumbnail: 'https://via.placeholder.com/150x100' },
];

export function GameScreen({ route, navigation }: any) {
  const { slug } = route.params;

  return (
    <ScrollView style={styles.container}>
      <AdMobBanner position="top" size="banner" />
      
      <View style={styles.gameContainer}>
        <View style={styles.gameEmbed}>
          <Text style={styles.embedPlaceholder}>Game Embed Placeholder</Text>
          <Text style={styles.embedNote}>WebView with game URL goes here</Text>
        </View>
        
        <View style={styles.adSidebar}>
          <AdMobBanner position="inline" size="mediumRectangle" />
        </View>
      </View>

      <View style={styles.description}>
        <Text style={styles.gameTitle}>Game Title</Text>
        <Text style={styles.descriptionText}>
          This is the game description. Master the art of gaming with this exciting title!
        </Text>
      </View>

      <View style={styles.recommendations}>
        <Text style={styles.sectionTitle}>Related Games</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {RELATED_GAMES.map((game) => (
            <TouchableOpacity
              key={game.id}
              style={styles.relatedCard}
              onPress={() => navigation.push('Game', { slug: game.id })}
            >
              <Image source={{ uri: game.thumbnail }} style={styles.relatedThumbnail} />
              <Text style={styles.relatedTitle}>{game.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <AdMobBanner position="bottom" size="largeBanner" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gameContainer: {
    padding: 16,
  },
  gameEmbed: {
    aspectRatio: 16 / 9,
    backgroundColor: '#111',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  embedPlaceholder: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  embedNote: {
    color: '#888',
    fontSize: 12,
    marginTop: 8,
  },
  adSidebar: {
    marginTop: 16,
  },
  description: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    margin: 16,
    borderRadius: 12,
  },
  gameTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  recommendations: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#111',
  },
  relatedCard: {
    marginRight: 12,
    width: 150,
  },
  relatedThumbnail: {
    width: 150,
    height: 100,
    borderRadius: 8,
  },
  relatedTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    color: '#111',
  },
});
