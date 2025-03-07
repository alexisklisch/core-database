import { int, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { createPropertyId } from "../../handlers/createPropertyId"
import { relations } from "drizzle-orm"
import { publicationsSchema } from "../schema"

const now = Date.now()

export const propertiesSchema = sqliteTable("properties", {
  propertyId: text('property_id', { length: 10 }).$defaultFn(() => createPropertyId()).primaryKey(),
  publicationId: int('publication_id'),
  userId: text('user_id').notNull(),
  shortTitle: text('short_title', { length: 64 }).default('Descripción corta para recordar la propiedad').notNull(),
  propertyCreationStatus: text('property_creation_status', { length: 12, enum: ['RUNNING', 'FINISHED', 'ERROR'] }).default('RUNNING').notNull(),
  createdAt: int('created_at').$defaultFn(() => now).notNull(),
  updatedAt: int('updated_at').$defaultFn(() => now).notNull(),
  expiresAt: int('expires_at').$defaultFn(() => now + 1000 * 60 * 60 * 24 * 30).notNull(),
})

export const propertiesRelations = relations(propertiesSchema, ({ one }) => ({
  publication: one(publicationsSchema, { fields: [propertiesSchema.publicationId], references: [publicationsSchema.publicationId] })
}))