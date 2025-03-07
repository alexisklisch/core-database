import { relations } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import {
  propertiesSchema,
  publicationLocationsSchema,
  publicationAttributesSchema,
  publicationImagesSchema,
  publicationOperationsSchema
} from "../schema"

export const publicationsSchema = sqliteTable("publications", {
  publicationId: int('publication_id').primaryKey({ autoIncrement: true }),
  publicationTitle: text('publication_title').notNull(),
  publicationDescriptionShort: text('publication_description_short').notNull(),
  publicationDescriptionRich: text('publication_description_rich').notNull(),
  realEstateId: text('real_estate_id').default('flyers'),
  publicationOperationId: int('publication_operation_id').notNull(),
  publicationLocationId: int('publication_location_id').notNull(),
  publicationAttributesId: int('publication_attributes_id').notNull(),
  publicationStatus: text('publication_status', { enum: ['ACTIVE', 'PAUSED', 'SOLD', 'RENTED', 'DELETED'] }),
  publicationProvider: text('publication_provider', { enum: ['argenprop', 'zonaprop', 'mercadolibre'] }).notNull(),
  publicationUrl: text('publication_url').notNull(),
  updatedAt: int('updated_at').$defaultFn(() => Date.now()).notNull()
})

export const publicationsRelations = relations(publicationsSchema, ({ one, many }) => ({
  property: one(propertiesSchema),
  publicationLocationRelation: one(publicationLocationsSchema, { fields: [publicationsSchema.publicationLocationId], references: [publicationLocationsSchema.publicationLocationId] }),
  publicationAttributeRelation: one(publicationAttributesSchema, { fields: [publicationsSchema.publicationAttributesId], references: [publicationAttributesSchema.publicationAttributesId] }),
  publicationImagesRelation: many(publicationImagesSchema),
  publicationOperationRelation: one(publicationOperationsSchema, { fields: [publicationsSchema.publicationOperationId], references: [publicationOperationsSchema.publicationOperationId] })
}))