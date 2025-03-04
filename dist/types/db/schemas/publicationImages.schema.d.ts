export declare const publicationImagesSchema: import("drizzle-orm/sqlite-core").SQLiteTableWithColumns<{
    name: "publication_images";
    schema: undefined;
    columns: {
        publicationImagesId: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "publication_images_id";
            tableName: "publication_images";
            dataType: "string";
            columnType: "SQLiteText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: 24;
        }>;
        imageDescription: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "publication_image_description";
            tableName: "publication_images";
            dataType: "string";
            columnType: "SQLiteText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        isUpgradable: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "publication_image_is_upgradabele";
            tableName: "publication_images";
            dataType: "boolean";
            columnType: "SQLiteBoolean";
            data: boolean;
            driverParam: number;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        priority: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "publication_image_priority";
            tableName: "publication_images";
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
        publicationId: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "publication_id";
            tableName: "publication_images";
            dataType: "number";
            columnType: "SQLiteInteger";
            data: number;
            driverParam: number;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "sqlite";
}>;
export declare const publicationImagesRelations: import("drizzle-orm").Relations<"publication_images", {
    publication: import("drizzle-orm").One<"publications", false>;
}>;
