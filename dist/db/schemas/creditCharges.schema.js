import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { creditsSchema } from "./credits.schema.js";
const now = Date.now();
export const creditChargesSchema = sqliteTable("credit_charges", {
    creditChargeId: int('credit_charge_id').primaryKey({ autoIncrement: true }),
    quantity: int('credit_charge_quantity').notNull(),
    unitPrice: real('unit_price').notNull(),
    chargeType: text('credit_charge_type', { enum: ['purchase', 'gift', 'promo'] }).notNull(),
    discount: real('credit_charge_discount').default(0),
    creditId: int('credit_id').notNull(),
    createdAt: int('created_at').default(+now).notNull(),
    expireAt: int('expire_at').default(+now + 1000 * 60 * 60 * 24 * 365)
});
export const creditChargesRelations = relations(creditChargesSchema, ({ one }) => ({
    credit: one(creditsSchema, { fields: [creditChargesSchema.creditId], references: [creditsSchema.creditId] })
}));
