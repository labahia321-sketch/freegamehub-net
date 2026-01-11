import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AdMobBanner } from '../ads/AdMobBanner';

const CATEGORIES = [
  { id: 'action', name: 'Action', icon: 'sword' },
  { id: 'puzzle', name: 'Puzzle', icon: 'puzzle' },
  { id: 'racing', name: 'Racing', icon: 'car' },
  { id: 'sports', name: 'Sports', icon: 'trophy' },
  { id: 'adventure', name: 'Adventure', icon: 'compass' },
];

const FEATURED_GAMES = [
  { id: '1', title: 'Ninja Warrior', category: 'Action', thumbnail: 'https://via.placeholder.com/300x200' },
  { id: '2', title: 'Block Blast', category: 'Puzzle', thumbnail: 'https://via.placeholder.com/300x200' },
  { id: '3', title: 'Street Racer', category: 'Racing', thumbnail: 'https://via.placeholder.com/300x200' },
];

export function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <AdMobBanner position="top" size="largeBanner" />
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={styles.categoryCard}
              onPress={() => navigation.navigate('Category', { slug: cat.id })}
            >
              <Text style={styles.categoryName}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Games</Text>
        {FEATURED_GAMES.map((game, index) => (
          <View key={game.id}>
            <TouchableOpacity
              style={styles.gameCard}
              onPress={() => navigation.navigate('Game', { slug: game.id })}
            >
              <Image source={{ uri: game.thumbnail }} style={styles.gameThumbnail} />
              <View style={styles.gameInfo}>
                <Text style={styles.gameTitle}>{game.title}</Text>
                <Text style={styles.gameCategory}>{game.category}</Text>
              </View>
            </TouchableOpacity>
            {index === 1 && <AdMobBanner position="inline" size="mediumRectangle" />}
          </View>
        ))}
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
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#111',
  },
  categoryCard: {
    backgroundColor: '#ff6600',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 12,
  },
  categoryName: {
    color: '#fff',
    fontWeight: '600',
  },
  gameCard: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  gameThumbnail: {
    width: 120,
    height: 80,
  },
  gameInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  gameTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  gameCategory: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});
