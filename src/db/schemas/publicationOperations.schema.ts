import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import {
  publicationsSchema,
  operationPricesSchema
} from "../schema";

export const publicationOperationsSchema = sqliteTable("publication_operations", {
  publicationOperationId: int('publication_operation_id').primaryKey(),
  type: text('publication_operation_type', { length: 8, enum: ['rent', 'sell', 'temporal'] }),
  listingPriceId: int('listing_price_id'),
  maintenanceFeePriceId: int('maintenance_fee_price_id'),
  oldPriceId: int('old_price_id'),
})

export const publicationOperationsRelations = relations(publicationOperationsSchema, ({ one }) => ({
  publication: one(publicationsSchema),
  listingOperationPrice: one(operationPricesSchema, { fields: [publicationOperationsSchema.listingPriceId], references: [operationPricesSchema.operationPriceId] }),
  maintenanceFeeOperationPrice: one(operationPricesSchema, { fields: [publicationOperationsSchema.listingPriceId], references: [operationPricesSchema.operationPriceId] }),
  oldOperationPrice: one(operationPricesSchema, { fields: [publicationOperationsSchema.listingPriceId], references: [operationPricesSchema.operationPriceId] }),
}))