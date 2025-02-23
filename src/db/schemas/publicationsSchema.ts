import { relations } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { propertiesSchema } from "./propertiesSchema";

export const publicationsSchema = sqliteTable("publications", {
  publicationId: int('publication_id').primaryKey({ autoIncrement: true }),
  publicationTitleID: int('publication_title_id').notNull(),
  publicationDescriptionID: int('publication_description_id').notNull(),
  realEstateId: text('real_estate_id').default('flyers'),
  publicationOperationID: int('publication_operation_id').notNull(),
  publicationLocationID: int('publication_location_id').notNull(),
  publicationAttributesID: int('publication_attributes_id').notNull(),
  publicationStatus: text('publication_status', { enum: ['ACTIVE', 'PAUSED', 'SOLD', 'RENTED', 'DELETED'] }),
  publicationProvider: text('publication_provider', { enum: ['argenprop', 'zonaprop', 'mercadolibre']}).notNull(),
  publicationUrl: text('publication_url').notNull(),
})

export const publicationsRelations = relations(publicationsSchema, ({one}) => ({
  property: one(propertiesSchema)
}))