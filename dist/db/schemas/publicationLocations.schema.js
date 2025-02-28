import { relations } from "drizzle-orm";
import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { publicationsSchema } from "../schema.js";
export const publicationLocationsSchema = sqliteTable("publications", {
    publicationLocationId: int('publication_location_id').primaryKey({ autoIncrement: true }),
    displayAddress: text('publication_display_address').notNull(),
    addressName: text('publication_address_name'),
    addressNumber: text('publication_address_number'),
    neighborhood: text('publication_neighborhood'),
    city: text('publication_city'),
    province: text('publication_province'),
    postalCode: text('publication_postal_code'),
    latitude: real('publication_latitude'),
    longitude: real('publication_latitude')
});
export const publicationLocationsRelations = relations(publicationLocationsSchema, ({ one }) => ({
    property: one(publicationsSchema)
}));
