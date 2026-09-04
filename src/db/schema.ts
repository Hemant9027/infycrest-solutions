import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const subscribers = pgTable(
  "subscribers",
  {
    id: serial("id").primaryKey(),
    email: varchar("email", { length: 320 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [uniqueIndex("subscribers_email_uidx").on(table.email)]
);

export const projectRequests = pgTable("project_requests", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  contact: varchar("contact", { length: 320 }).notNull(),
  businessType: varchar("business_type", { length: 120 }),
  requirements: text("requirements"),
  demoSlug: varchar("demo_slug", { length: 120 }).notNull(),
  demoName: varchar("demo_name", { length: 160 }).notNull(),
  customization: varchar("customization", { length: 160 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
