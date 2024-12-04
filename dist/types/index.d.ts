import 'dotenv/config';
import * as schema from './schemas/schema.js';
declare const db: import("drizzle-orm/libsql/driver-core.js").LibSQLDatabase<typeof schema> & {
    $client: import("@libsql/client/.").Client;
};
export default db;
export { schema };
