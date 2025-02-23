import { db, schema } from "."
import { createPropertyId } from './handlers/createPropertyId'

const { propertiesSchema } = schema

const newProperty = await db.insert(propertiesSchema).values({
  publicationId: 1,
  shortTitle: 'New Property',
  userId: crypto.randomUUID(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
}).returning()

console.log(newProperty)