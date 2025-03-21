import { int, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { relations } from "drizzle-orm"
import { creditChargesSchema } from "./creditCharges.schema"

const now = Date.now()

export const creditsSchema = sqliteTable("credits", {
  creditId: int('credit_id').primaryKey({ autoIncrement: true }),
  quantity: int('credit_quantity').default(0).notNull(),
  userId: text('user_id').notNull().unique()
})

export const creditsRelations = relations(creditsSchema, ({ many }) => ({
  charges: many(creditChargesSchema)
}))