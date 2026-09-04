import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

// Stay inquiries submitted from the "Plan Your Stay" form.
export const inquiries = pgTable("inquiries", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  contact: text("contact").notNull(), // email address or phone number
  arrival: text("arrival"),
  departure: text("departure"),
  guests: text("guests"),
  message: text("message"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
