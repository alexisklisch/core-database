import 'dotenv/config'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from './schemas/schema.js'

const db = drizzle({
  connection: {
    url: process.env.TURSO_DATABASE_URL || 'file:basecita.db',
    authToken: process.env.TURSO_AUTH_TOKEN
  },
  schema
})

export default db
export { schema }
