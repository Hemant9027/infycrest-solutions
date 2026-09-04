import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

/**
 * Enquiries sent from the website's "Contact Us" and
 * "Check Availability" forms.
 */
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  type: text("type").notNull().default("contact"), // "contact" | "availability"
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  checkIn: text("check_in"),
  checkOut: text("check_out"),
  guests: text("guests"),
  message: text("message"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type Inquiry = typeof inquiries.$inferSelect;
export type NewInquiry = typeof inquiries.$inferInsert;
