import {
  date,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

/**
 * Guest inquiries for "Check Availability" and general contact messages
 * sent through the Marshall's Guest House website.
 */
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  /** "stay" = check-availability request with dates, "message" = general note */
  kind: text("kind").notNull().default("stay"),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  checkIn: date("check_in", { mode: "string" }),
  checkOut: date("check_out", { mode: "string" }),
  guests: integer("guests"),
  /** "one-bedroom" | "two-bedroom" | "unsure" */
  roomType: text("room_type"),
  message: text("message"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type InsertInquiry = typeof inquiries.$inferInsert;
export type Inquiry = typeof inquiries.$inferSelect;
