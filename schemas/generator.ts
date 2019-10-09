import axios from "axios";
import _ from "lodash";
import prettier from "prettier";
import fs from "fs";

interface SchemaProperty {
    fieldName: string;
    propertyType: string;
    constants?: string[];
    itemKlass?: string;
}

interface Schema {
    klass: string;
    properties: SchemaProperty[];
}

const getClassName = (klass: string) => klass.split(".").pop();

const getType = (type: string, constants: string[] = [], itemKlass?: string) => {
    switch (type) {
        case "REFERENCE":
            return "D2IdentifiableObject";
        case "COLLECTION":
            if (itemKlass === "java.lang.String") return "string[]";
            if (itemKlass === "java.lang.Integer") return "number[]";
            return "D2IdentifiableObject[]";
        case "TEXT":
        case "URL":
        case "PHONENUMBER":
        case "EMAIL":
        case "COLOR":
        case "PASSWORD":
            return "string";
        case "DATE":
            return "Date";
        case "IDENTIFIER":
            return "Identifier";
        case "INTEGER":
            return "number";
        case "CONSTANT":
            return constants.map(constant => `"${constant}"`).join(" | ");
        case "COMPLEX":
            return "any";
        default:
            return type.toLowerCase();
    }
};

const createType = (name: string, type: string) => `type ${name} = ${type};`;

const createProperty = ({ fieldName, propertyType, constants, itemKlass }: SchemaProperty) =>
    `${fieldName === "uid" ? "id" : fieldName}: ${getType(propertyType, constants, itemKlass)};`;

const createInterface = ({ klass, properties }: Schema, parent?: string) => `
interface D2${getClassName(klass)} ${parent ? `extends ${parent}` : ""} {
    ${properties
        .filter(({ fieldName }) => fieldName !== undefined)
        .map(createProperty)
        .join("")}
}
`;

const start = async () => {
    const { schemas } = (await axios.get("https://play.dhis2.org/2.32.2/api/schemas.json", {
        auth: { username: "admin", password: "district" },
        params: {
            fields: "klass,properties[fieldName,propertyType,constants,itemKlass]",
        },
    })).data as { schemas: Schema[] };

    const Identifier = createType("Identifier", "string");

    const IdentifiableObject = createInterface({
        klass: "IdentifiableObject",
        properties: [{ fieldName: "id", propertyType: "IDENTIFIER" }],
    });

    const Schemas = schemas.map(schema => createInterface(schema, "D2IdentifiableObject")).join("");

    const prettierConfigFile = await prettier.resolveConfigFile();
    const prettierConfig = await prettier.resolveConfig(prettierConfigFile);
    const data = prettier.format([Identifier, IdentifiableObject, Schemas].join("\n"), {
        parser: "babel",
        ...prettierConfig,
    });

    fs.writeFile("types.d.ts", data, err => {
        if (err) console.error(err);
        else console.log("Done!");
    });
};

start();