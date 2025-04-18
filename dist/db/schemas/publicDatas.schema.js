import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
const now = Date.now();
export const publicDatasSchema = sqliteTable("public_datas", {
    publicDataId: int('public_data_id').primaryKey({ autoIncrement: true }),
    userId: text('user_id').notNull().default('cambiar-user-id'),
    firstName: text('first_name'),
    lastName: text('last_name'),
    email: text('email'),
    phone: text('phone'),
    updatedAt: int('updated_at').$defaultFn(() => now).notNull(),
});
