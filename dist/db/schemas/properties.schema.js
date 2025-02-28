import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createPropertyId } from "../../handlers/createPropertyId.js";
import { relations } from "drizzle-orm";
import { publicationsSchema } from "../schema.js";
export const propertiesSchema = sqliteTable("properties", {
    propertyId: text('property_id', { length: 10 }).$defaultFn(() => createPropertyId()).primaryKey(),
    publicationId: int('publication_id'),
    userId: text('user_id').$defaultFn(() => crypto.randomUUID()).notNull(),
    shortTitle: text('short_title', { length: 64 }).default('Descripción corta para recordar la propiedad').notNull(),
    propertyCreationStatus: text('property_creation_status', { length: 12, enum: ['RUNNING', 'FINISHED', 'ERROR'] }).default('RUNNING').notNull(),
    createdAt: text('created_at').$defaultFn(() => new Date().toISOString()).notNull(),
    updatedAt: text('updated_at').$defaultFn(() => new Date().toISOString()).notNull(),
    expiresAt: text('expires_at').$defaultFn(() => new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString()).notNull(),
});
export const propertiesRelations = relations(propertiesSchema, ({ one }) => ({
    publication: one(publicationsSchema, { fields: [propertiesSchema.publicationId], references: [publicationsSchema.publicationId] })
}));
