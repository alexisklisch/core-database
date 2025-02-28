import { or, like, and } from 'drizzle-orm';
import * as schema from './db/schema';
export declare const db: import("drizzle-orm/libsql").LibSQLDatabase<typeof schema> & {
    $client: import("@libsql/client/.").Client;
};
export * as schema from './db/schema';
export declare const utils: {
    eq: import("drizzle-orm").BinaryOperator;
    or: typeof or;
    and: typeof and;
    like: typeof like;
};
