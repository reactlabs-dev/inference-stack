import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  company: text('company'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
