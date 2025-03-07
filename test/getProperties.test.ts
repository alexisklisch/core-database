import { db, schema } from "../src/index"
import 'dotenv/config'

const data = await db.query.propertiesSchema.findMany()

console.log(data)