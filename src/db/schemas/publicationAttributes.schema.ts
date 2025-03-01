import { relations } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { publicationsSchema } from "../schema"

export const publicationAttributesSchema = sqliteTable("publication_attributes", {
  publicationAttributesId: int('publication_attributes_id').primaryKey({ autoIncrement: true }),
  typology: text('publication_typology', { length: 12, enum: ['APARTMENT', 'HOUSE', 'CONDOMINIUM', 'LAND', 'RETAIL_SPACE', 'FARM', 'GARAGE', 'BUSINESS', 'WAREHOUSE', 'HOTEL', 'OFFICE', 'COUNTRY_HOUSE', 'OTHER'] }).default('OTHER').notNull(),
  rooms: int('publication_rooms'),
  bedrooms: int('publication_bedrooms'),
  bathrooms: int('publication_bathrooms'),
  toilets: int('publication_toilets'),
  garages: int('publication_garages'),
  antiquity: int('publication_antiquity'),
  coveredSurface: int('publication_covered_surface'),
  groundSurface: int('publication_ground_surface'),
  totalSurface: int('publication_total_surface'),
  orientation: text('publication_orientation', { length: 2, enum: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'] }).default('N').notNull(),
  condition: text('publication_condition', { length: 12, enum: ['NEW', 'GOOD', 'REGULAR', 'TO_RENOVATE', 'TO_RECYCLE'] }),
  floor: int('publication_floor'),
  floors: int('publication_floors'),
  otherFeatures: text('publication_other_features'),
})

export const publicationAttributesRelations = relations(publicationAttributesSchema, ({ one }) => ({
  publication: one(publicationsSchema)
}))