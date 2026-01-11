import { type User, type InsertUser, type Game, type InsertGame, type Category, type InsertCategory } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getCategories(): Promise<Category[]>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  getGames(): Promise<Game[]>;
  getGameBySlug(slug: string): Promise<Game | undefined>;
  getGamesByCategory(categoryId: string): Promise<Game[]>;
  incrementGameViews(gameId: string): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private categories: Map<string, Category>;
  private games: Map<string, Game>;

  constructor() {
    this.users = new Map();
    this.categories = new Map();
    this.games = new Map();
    this.initializeData();
  }

  private initializeData() {
    const categoriesData: Category[] = [
      {
        id: "cat-action",
        name: "Action",
        slug: "action",
        icon: "sword",
        description: "Fast-paced action games with intense gameplay and quick reflexes required.",
        gameCount: 6,
      },
      {
        id: "cat-puzzle",
        name: "Puzzle",
        slug: "puzzle",
        icon: "puzzle",
        description: "Brain-teasing puzzle games to challenge your mind and problem-solving skills.",
        gameCount: 6,
      },
      {
        id: "cat-racing",
        name: "Racing",
        slug: "racing",
        icon: "car",
        description: "High-speed racing games with thrilling tracks and competitive gameplay.",
        gameCount: 5,
      },
      {
        id: "cat-sports",
        name: "Sports",
        slug: "sports",
        icon: "trophy",
        description: "Sports simulation games featuring your favorite sports and competitions.",
        gameCount: 4,
      },
      {
        id: "cat-adventure",
        name: "Adventure",
        slug: "adventure",
        icon: "compass",
        description: "Explore vast worlds and embark on epic adventures.",
        gameCount: 5,
      },
    ];

    categoriesData.forEach((cat) => {
      this.categories.set(cat.id, cat);
    });

    const gamesData: Game[] = [
      {
        id: "game-1",
        title: "Ninja Warrior",
        slug: "ninja-warrior",
        description: "Master the art of the ninja! Jump, slash, and fight your way through challenging levels filled with enemies and obstacles.",
        thumbnailUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/ninja-hands",
        categoryId: "cat-action",
        views: 125000,
        rating: 88,
        featured: 1,
      },
      {
        id: "game-2",
        title: "Block Blast",
        slug: "block-blast",
        description: "Match colorful blocks to clear the board! A classic puzzle game with modern twists and power-ups.",
        thumbnailUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/block-puzzle",
        categoryId: "cat-puzzle",
        views: 98000,
        rating: 92,
        featured: 1,
      },
      {
        id: "game-3",
        title: "Street Racer",
        slug: "street-racer",
        description: "Race through city streets at breakneck speeds! Customize your car and compete against players worldwide.",
        thumbnailUrl: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/city-car-stunt-3",
        categoryId: "cat-racing",
        views: 156000,
        rating: 85,
        featured: 1,
      },
      {
        id: "game-4",
        title: "Basketball Stars",
        slug: "basketball-stars",
        description: "Shoot hoops and become a basketball legend! Play against AI or challenge your friends in multiplayer mode.",
        thumbnailUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/basketball-stars",
        categoryId: "cat-sports",
        views: 89000,
        rating: 90,
        featured: 1,
      },
      {
        id: "game-5",
        title: "Dungeon Explorer",
        slug: "dungeon-explorer",
        description: "Delve into mysterious dungeons filled with treasures and dangers. Collect loot, defeat monsters, and become a hero!",
        thumbnailUrl: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/dungeon-quest-1",
        categoryId: "cat-adventure",
        views: 112000,
        rating: 87,
        featured: 1,
      },
      {
        id: "game-6",
        title: "Space Shooter",
        slug: "space-shooter",
        description: "Defend the galaxy from alien invaders! Upgrade your ship and weapons to face increasingly challenging enemies.",
        thumbnailUrl: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/space-shooter",
        categoryId: "cat-action",
        views: 145000,
        rating: 86,
        featured: 0,
      },
      {
        id: "game-7",
        title: "Sudoku Master",
        slug: "sudoku-master",
        description: "The classic number puzzle game! Test your logic skills with thousands of puzzles from easy to expert.",
        thumbnailUrl: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/sudoku",
        categoryId: "cat-puzzle",
        views: 78000,
        rating: 94,
        featured: 0,
      },
      {
        id: "game-8",
        title: "Drift King",
        slug: "drift-king",
        description: "Master the art of drifting! Slide through corners with precision and earn points for style.",
        thumbnailUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/drift-hunters",
        categoryId: "cat-racing",
        views: 134000,
        rating: 88,
        featured: 0,
      },
      {
        id: "game-9",
        title: "Soccer Champion",
        slug: "soccer-champion",
        description: "Lead your team to victory! Experience realistic soccer gameplay with intuitive controls.",
        thumbnailUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/soccer-skills-world-cup",
        categoryId: "cat-sports",
        views: 95000,
        rating: 84,
        featured: 0,
      },
      {
        id: "game-10",
        title: "Island Survival",
        slug: "island-survival",
        description: "Stranded on a mysterious island! Gather resources, build shelter, and survive against the elements.",
        thumbnailUrl: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/island-survival",
        categoryId: "cat-adventure",
        views: 102000,
        rating: 89,
        featured: 0,
      },
      {
        id: "game-11",
        title: "Zombie Slayer",
        slug: "zombie-slayer",
        description: "Fight for survival in a zombie apocalypse! Use various weapons to eliminate the undead horde.",
        thumbnailUrl: "https://images.unsplash.com/photo-1509248961895-aa4e4c4c20f2?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/zombs-royale",
        categoryId: "cat-action",
        views: 168000,
        rating: 82,
        featured: 0,
      },
      {
        id: "game-12",
        title: "Word Wizard",
        slug: "word-wizard",
        description: "Expand your vocabulary with this addictive word game! Find hidden words and compete for high scores.",
        thumbnailUrl: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/word-search",
        categoryId: "cat-puzzle",
        views: 65000,
        rating: 91,
        featured: 0,
      },
      {
        id: "game-13",
        title: "Motocross Madness",
        slug: "motocross-madness",
        description: "Race on extreme tracks with your motocross bike! Perform stunts and beat your best times.",
        thumbnailUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/moto-x3m",
        categoryId: "cat-racing",
        views: 189000,
        rating: 93,
        featured: 0,
      },
      {
        id: "game-14",
        title: "Tennis Ace",
        slug: "tennis-ace",
        description: "Serve, volley, and smash your way to victory in this exciting tennis simulation!",
        thumbnailUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/tennis-clash",
        categoryId: "cat-sports",
        views: 54000,
        rating: 83,
        featured: 0,
      },
      {
        id: "game-15",
        title: "Castle Quest",
        slug: "castle-quest",
        description: "Explore ancient castles filled with secrets and treasures. Solve puzzles and battle enemies!",
        thumbnailUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/castle-runner",
        categoryId: "cat-adventure",
        views: 87000,
        rating: 86,
        featured: 0,
      },
      {
        id: "game-16",
        title: "Combat Arena",
        slug: "combat-arena",
        description: "Enter the arena and fight! Choose your fighter and battle against opponents in intense combat.",
        thumbnailUrl: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/bullet-force",
        categoryId: "cat-action",
        views: 234000,
        rating: 89,
        featured: 0,
      },
      {
        id: "game-17",
        title: "Mahjong Classic",
        slug: "mahjong-classic",
        description: "The traditional tile-matching game with beautiful themes. Relax and enjoy matching tiles!",
        thumbnailUrl: "https://images.unsplash.com/photo-1611329857570-f02f340e7378?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/mahjong-connect",
        categoryId: "cat-puzzle",
        views: 123000,
        rating: 95,
        featured: 0,
      },
      {
        id: "game-18",
        title: "Formula Speed",
        slug: "formula-speed",
        description: "Experience the thrill of Formula 1 racing! Race on famous circuits around the world.",
        thumbnailUrl: "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/formula-rush",
        categoryId: "cat-racing",
        views: 145000,
        rating: 87,
        featured: 0,
      },
      {
        id: "game-19",
        title: "Golf Pro",
        slug: "golf-pro",
        description: "Play on beautiful courses in this relaxing golf game. Perfect your swing and aim for hole-in-ones!",
        thumbnailUrl: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/mini-golf-world",
        categoryId: "cat-sports",
        views: 67000,
        rating: 88,
        featured: 0,
      },
      {
        id: "game-20",
        title: "Treasure Hunter",
        slug: "treasure-hunter",
        description: "Search for hidden treasures in exotic locations! Solve riddles and avoid traps.",
        thumbnailUrl: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/treasure-hunt",
        categoryId: "cat-adventure",
        views: 98000,
        rating: 85,
        featured: 0,
      },
      {
        id: "game-21",
        title: "Stickman Fighter",
        slug: "stickman-fighter",
        description: "Battle as a stickman warrior! Use martial arts and weapons to defeat your enemies.",
        thumbnailUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/stickman-fighter-epic-battles",
        categoryId: "cat-action",
        views: 176000,
        rating: 84,
        featured: 0,
      },
      {
        id: "game-22",
        title: "Bubble Pop",
        slug: "bubble-pop",
        description: "Pop colorful bubbles in this relaxing puzzle game! Match three or more to clear the board.",
        thumbnailUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/bubble-shooter-pro",
        categoryId: "cat-puzzle",
        views: 156000,
        rating: 90,
        featured: 0,
      },
      {
        id: "game-23",
        title: "Parking Master",
        slug: "parking-master",
        description: "Test your parking skills! Navigate through tight spots and park perfectly without crashes.",
        thumbnailUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/real-car-parking",
        categoryId: "cat-racing",
        views: 89000,
        rating: 81,
        featured: 0,
      },
      {
        id: "game-24",
        title: "Pirate Adventure",
        slug: "pirate-adventure",
        description: "Sail the seven seas as a pirate captain! Discover treasures and battle other ships.",
        thumbnailUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=225&fit=crop",
        embedUrl: "https://www.crazygames.com/embed/pirate-kings",
        categoryId: "cat-adventure",
        views: 112000,
        rating: 88,
        featured: 0,
      },
    ];

    gamesData.forEach((game) => {
      this.games.set(game.id, game);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find((cat) => cat.slug === slug);
  }

  async getGames(): Promise<Game[]> {
    return Array.from(this.games.values());
  }

  async getGameBySlug(slug: string): Promise<Game | undefined> {
    return Array.from(this.games.values()).find((game) => game.slug === slug);
  }

  async getGamesByCategory(categoryId: string): Promise<Game[]> {
    return Array.from(this.games.values()).filter(
      (game) => game.categoryId === categoryId
    );
  }

  async incrementGameViews(gameId: string): Promise<void> {
    const game = this.games.get(gameId);
    if (game) {
      game.views = (game.views || 0) + 1;
      this.games.set(gameId, game);
    }
  }
}

export const storage = new MemStorage();
