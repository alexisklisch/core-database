import { db, schema } from "../src/index"
import 'dotenv/config';


const {
  propertiesSchema,
  publicationsSchema
} = schema

/*const [ { publicationId } ] = await db.insert(publicationsSchema).values({
  publicationTitle: 'A donde vamos a parar',
  publicationDescriptionID: 1,
  realEstateId: 'medina-klisch',
  publicationOperationID: 1,
  publicationLocationID: 1,
  publicationAttributesID: 1,
  publicationStatus: 'ACTIVE',
  publicationProvider: 'argenprop',
  publicationUrl: 'https://www.argenprop.com/propiedades/medina-klisch'
}).returning({ publicationId: publicationsSchema.publicationId })*/


const [{ newPropertyId }] = await db.insert(propertiesSchema).values({}).returning({ newPropertyId: propertiesSchema.propertyId })

console.log(newPropertyId)


/* ------------------------------------------------- */

/*
import { db } from "../src";

const data = await db.query.propertiesSchema.findMany({
  with: {
    publication: true
  }
})
console.log(data)*/