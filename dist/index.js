import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './db/schema.js';
export const db = drizzle({
    connection: {
        url: process.env.TURSO_DATABASE_URL || 'file:test/test.db',
        authToken: process.env.TURSO_AUTH_TOKEN
    },
    schema
});
export * as schema from './db/schema.js';
export { eq, or, and, like, aliasedRelation, aliasedTable, aliasedTableColumn } from 'drizzle-orm';
