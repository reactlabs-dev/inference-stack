import { pgTable, serial, text, timestamp, jsonb } from 'drizzle-orm/pg-core'

export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  company: text('company'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const chatLogs = pgTable('chat_logs', {
  id: serial('id').primaryKey(),
  userMessage: text('user_message').notNull(),
  assistantResponse: text('assistant_response').notNull(),
  fullHistory: jsonb('full_history'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
