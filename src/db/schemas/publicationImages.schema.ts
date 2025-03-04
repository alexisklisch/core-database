import { relations } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { publicationsSchema } from "../schema"

export const publicationImagesSchema = sqliteTable("publication_images", {
  publicationImagesId: text('publication_images_id', { length: 24 }).primaryKey(),
  imageDescription: text('publication_image_description'),
  isUpgradable: int('publication_image_is_upgradabele', { mode: "boolean" }),
  priority: int('publication_image_priority').notNull(),
  publicationId: int('publication_id')
})

export const publicationImagesRelations = relations(publicationImagesSchema, ({ one }) => ({
  publication: one(publicationsSchema, { fields: [publicationImagesSchema.publicationId], references: [publicationsSchema.publicationId] })
}))