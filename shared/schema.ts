import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const pizzas = pgTable("pizzas", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  asciiArt: text("ascii_art").notNull(),
  toppings: text("toppings").array().notNull().default([]),
  category: text("category").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertPizzaSchema = createInsertSchema(pizzas).pick({
  name: true,
  asciiArt: true,
  toppings: true,
  category: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertPizza = z.infer<typeof insertPizzaSchema>;
export type Pizza = typeof pizzas.$inferSelect;
