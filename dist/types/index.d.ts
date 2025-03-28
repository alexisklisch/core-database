import 'dotenv/config';
import * as schema from './db/schema';
export declare const db: import("drizzle-orm/libsql").LibSQLDatabase<typeof schema> & {
    $client: import("@libsql/client/.").Client;
};
export * as schema from './db/schema';
export * from 'drizzle-orm';
