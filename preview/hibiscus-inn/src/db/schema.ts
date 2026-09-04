import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

/**
 * Guest enquiries sent from the contact / availability form.
 * Every message is stored so the inn can reply personally by email.
 */
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  arrivalDate: text("arrival_date"),
  departureDate: text("departure_date"),
  guests: integer("guests"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
