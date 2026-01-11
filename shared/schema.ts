import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const categories = pgTable("categories", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  icon: text("icon").notNull(),
  description: text("description"),
  gameCount: integer("game_count").default(0),
});

export const insertCategorySchema = createInsertSchema(categories).omit({ gameCount: true });
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;

export const games = pgTable("games", {
  id: varchar("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  thumbnailUrl: text("thumbnail_url").notNull(),
  embedUrl: text("embed_url").notNull(),
  categoryId: varchar("category_id").notNull(),
  views: integer("views").default(0),
  rating: integer("rating").default(0),
  featured: integer("featured").default(0),
});

export const insertGameSchema = createInsertSchema(games).omit({ views: true, rating: true });
export type InsertGame = z.infer<typeof insertGameSchema>;
export type Game = typeof games.$inferSelect;
