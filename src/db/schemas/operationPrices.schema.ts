import { int, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { relations } from "drizzle-orm"
import { publicationsSchema } from "../schema"

export const operationPricesSchema = sqliteTable("operation_prices", {
  operationPriceId: int('operation_price_id').primaryKey({ autoIncrement: true }),
  amount: int('operation_price_amount').notNull(),
  currencyId: text('operation_price_currency_id', { length: 3 }).notNull(),
  priceType: text('operation_price_type', { enum: ['listing', 'maintenance', 'old'] }).notNull()
})

export const operationPricesRelations = relations(operationPricesSchema, ({ one }) => ({
  publicationOperation: one(publicationsSchema)
}))