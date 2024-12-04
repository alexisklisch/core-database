import { sqliteTable, int, text } from "drizzle-orm/sqlite-core"

export const creditsTable = sqliteTable('credits', {
  creditId: int('credit_id').primaryKey({autoIncrement: true}),
  userId: text('user_id',{length: 36}).notNull(),
  creditType: text('credit_type', {enum: ['charge', 'gift', 'promo']}).notNull(),
  expirationDate: text('expiration_date').notNull(),
  isExpirable: int('is_expirable', {mode:"boolean"}).notNull()
})