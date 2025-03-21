import 'dotenv/config';
import * as schema from './db/schema';
export declare const db: import("drizzle-orm/libsql").LibSQLDatabase<typeof schema> & {
    $client: import("@libsql/client/.").Client;
};
export * as schema from './db/schema';
export { eq, ne, gt, gte, lt, lte, exists, notExists, isNull, isNotNull, between, notBetween, and, or, like, notLike, not, aliasedRelation, aliasedTable, aliasedTableColumn } from 'drizzle-orm';
