import { db, schema } from "../src/index"

const {
  propertiesSchema,
  publicationsSchema
} = schema

const [newPublication] = await db.insert(publicationsSchema).values({
  publicationTitleID: 1,
  publicationDescriptionID: 1,
  realEstateId: 'medina-klisch',
  publicationOperationID: 1,
  publicationLocationID: 1,
  publicationAttributesID: 1,
  publicationStatus: 'ACTIVE',
  publicationProvider: 'argenprop',
  publicationUrl: 'https://www.argenprop.com/propiedades/medina-klisch'
}).returning()


const newProperty = await db.insert(propertiesSchema).values({
  publicationId: newPublication.publicationId,
  shortTitle: 'La casa de Cacho',
  userId: crypto.randomUUID(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
}).returning()


console.log(newProperty)

/* ------------------------------------------------- */

/*
import { db } from "../src";

const data = await db.query.propertiesSchema.findMany({
  with: {
    publication: true
  }
})
console.log(data)*/