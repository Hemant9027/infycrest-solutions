import { integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

/**
 * Availability requests sent from the "Check Availability" form.
 * Nothing here implies rates, room types or confirmed bookings —
 * each row is simply a traveller asking us to reply by email.
 */
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  email: varchar("email", { length: 200 }).notNull(),
  checkIn: varchar("check_in", { length: 10 }).notNull(),
  checkOut: varchar("check_out", { length: 10 }).notNull(),
  guests: integer("guests").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});
