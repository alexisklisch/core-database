import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'
import {schema} from './dist/index.js'
console.log(schema)

export default defineConfig({
  out: './drizzle',
  schema: './src/schemas/schema.ts',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL || 'file:basecita.db',
    authToken: process.env.TURSO_AUTH_TOKEN
  },
})
