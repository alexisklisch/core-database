export declare const publicationsSchema: import("drizzle-orm/sqlite-core").SQLiteTableWithColumns<{
    name: "publications";
    schema: undefined;
    columns: {
        publicationId: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "publication_id";
            tableName: "publications";
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
        publicationTitle: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "publication_title";
            tableName: "publications";
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
            length: number | undefined;
        }>;
        publicationDescriptionShort: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "publication_description_short";
            tableName: "publications";
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
            length: number | undefined;
        }>;
        publicationDescriptionRich: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "publication_description_rich";
            tableName: "publications";
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
            length: number | undefined;
        }>;
        realEstateId: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "real_estate_id";
            tableName: "publications";
            dataType: "string";
            columnType: "SQLiteText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: true;
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
        publicationOperationId: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "publication_operation_id";
            tableName: "publications";
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
        publicationLocationId: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "publication_location_id";
            tableName: "publications";
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
        publicationAttributesId: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "publication_attributes_id";
            tableName: "publications";
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
        publicationStatus: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "publication_status";
            tableName: "publications";
            dataType: "string";
            columnType: "SQLiteText";
            data: "ACTIVE" | "PAUSED" | "SOLD" | "RENTED" | "DELETED";
            driverParam: string;
            notNull: false;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: ["ACTIVE", "PAUSED", "SOLD", "RENTED", "DELETED"];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        publicationProvider: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "publication_provider";
            tableName: "publications";
            dataType: "string";
            columnType: "SQLiteText";
            data: "argenprop" | "zonaprop" | "mercadolibre";
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: ["argenprop", "zonaprop", "mercadolibre"];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
        publicationUrl: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "publication_url";
            tableName: "publications";
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
            length: number | undefined;
        }>;
        updatedAt: import("drizzle-orm/sqlite-core").SQLiteColumn<{
            name: "updated_at";
            tableName: "publications";
            dataType: "string";
            columnType: "SQLiteText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: true;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            length: number | undefined;
        }>;
    };
    dialect: "sqlite";
}>;
export declare const publicationsRelations: import("drizzle-orm").Relations<"publications", {
    property: import("drizzle-orm").One<"properties", false>;
    publicationLocationRelation: import("drizzle-orm").One<"publication_locations", true>;
    publicationAttributeRelation: import("drizzle-orm").One<"publication_attributes", true>;
    publicationImagesRelation: import("drizzle-orm").Many<"publication_images">;
}>;
