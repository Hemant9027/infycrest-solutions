import { pgTable, serial, text, integer, date, timestamp, index } from "drizzle-orm/pg-core";

/**
 * Inquiries submitted from demo websites (booking requests + contact messages).
 * Rows are namespaced by demo `slug` so multiple demo sites can share the table.
 */
export const demoInquiries = pgTable(
  "demo_inquiries",
  {
    id: serial("id").primaryKey(),
    slug: text("slug").notNull(),
    kind: text("kind", { enum: ["booking", "message"] }).notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    checkIn: date("check_in"),
    checkOut: date("check_out"),
    guests: integer("guests"),
    roomType: text("room_type"),
    message: text("message"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("demo_inquiries_slug_idx").on(t.slug), index("demo_inquiries_created_idx").on(t.createdAt)],
);
