export declare const operationPricesSchema: import("drizzle-orm/sqlite-core").SQLiteTableWithColumns<{
    name: "operation_prices";
    schema: undefined;
    columns: {
        operationPriceId: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "operation_price_id";
            tableName: "operation_prices";
            dataType: "number";
            columnType: "SQLiteInteger";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        amount: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "operation_price_amount";
            tableName: "operation_prices";
            dataType: "number";
            columnType: "SQLiteInteger";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        currencyId: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "operation_price_currency_id";
            tableName: "operation_prices";
            dataType: "string";
            columnType: "SQLiteText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: 3;
        }>;
        priceType: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "operation_price_type";
            tableName: "operation_prices";
            dataType: "string";
            columnType: "SQLiteText";
            data: "listing" | "maintenance" | "old";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: ["listing", "maintenance", "old"];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
    };
    dialect: "sqlite";
}>;
export declare const operationPricesRelations: import("drizzle-orm").Relations<"operation_prices", {
    publicationOperation: import("drizzle-orm").One<"publications", false>;
}>;
