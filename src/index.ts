import 'dotenv/config'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from './db/schema'

export const db = drizzle({
  connection: {
    url: process.env.TURSO_DATABASE_URL! || 'file:test/test.db',
    authToken: process.env.TURSO_AUTH_TOKEN
  },
  schema
})

export * as schema from './db/schema'
export {
  asc,
  desc,
  eq,
  ne,
  gt,
  gte,
  lt,
  lte,
  exists,
  notExists,
  isNull,
  isNotNull,
  between,
  notBetween,
  and,
  or,
  like,
  notLike,
  not,
  aliasedRelation,
  aliasedTable,
  aliasedTableColumn
} from 'drizzle-orm'