import { joinPath } from "./../utils/connection";
import axios from "axios";
import path from "path";
import _ from "lodash";
import prettier from "prettier";
import fs from "fs";
import argparse from "argparse";

interface SchemaProperty {
    fieldName: string;
    propertyType: string;
    itemPropertyType?: string;
    constants?: string[];
    klass: string;
    itemKlass?: string;
    persisted: boolean;
    owner: boolean;
}

interface Schema {
    klass: string;
    properties: SchemaProperty[];
    plural: string;
    metadata: boolean;
}

const interfaceFromClass: _.Dictionary<string> = {
    "org.hisp.dhis.security.acl.Access": "D2Access",
    "org.hisp.dhis.attribute.AttributeValue": "D2AttributeValue",
    "org.hisp.dhis.translation.Translation": "D2Translation",
    "org.hisp.dhis.user.UserGroupAccess": "D2UserGroupAccess",
    "org.hisp.dhis.user.UserAccess": "D2UserAccess",
    "org.hisp.dhis.common.ObjectStyle": "D2Style",
    "org.hisp.dhis.common.DimensionalKeywords": "D2DimensionalKeywords",
    "com.vividsolutions.jts.geom.Geometry": "D2Geometry",
    "org.hisp.dhis.dataset.DataSetElement": "D2DataSetElement",
    "org.hisp.dhis.dataset.DataInputPeriod": "D2DataInputPeriod",
    "org.hisp.dhis.expression.Expression": "D2Expression",
    "org.hisp.dhis.period.PeriodType": "string", // TODO
    "org.hisp.dhis.category.CategoryDimension": "D2CategoryDimension",
    "java.lang.Object": "object",
    "java.util.Map": "object",
};

const getModelName = (schema: Schema): string =>
    "D2" + (_.last(schema.klass.split(".")) || "unknown");

const getType = (property: SchemaProperty): string => {
    const { propertyType, klass, constants, itemPropertyType, itemKlass } = property;

    switch (propertyType) {
        case "REFERENCE":
            return "Ref";
        case "COLLECTION":
            if (!itemPropertyType || !itemKlass) throw new Error("Missing item info");

            const innerType = getType({
                ...property,
                propertyType: itemPropertyType,
                klass: itemKlass,
            });
            return `${innerType}[]`;
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
            return "Id";
        case "INTEGER":
            return "number";
        case "CONSTANT":
            return constants ? constants.map(constant => `"${constant}"`).join(" | ") : "never";
        case "COMPLEX":
            const interfaceName = interfaceFromClass[klass];
            if (interfaceName) {
                return interfaceName;
            } else {
                console.log(`Unsupported complex type, default to any: ${property.klass}`);
                return "any";
            }
        default:
            return propertyType.toLowerCase();
    }
};

function createInterface(name: string, properties: _.Dictionary<string>, parent?: string): string {
    const interfaceString = ["interface", name, parent ? `extends ${parent}` : ""].join(" ");
    const propertiesString = _(properties)
        .toPairs()
        .sortBy()
        .map(([key, value]) => `${key}: ${value}`)
        .join(";");

    return `export ${interfaceString} {
        ${propertiesString}
    }`;
}

function createModelInterface(schema: Schema, parent?: string): string {
    const properties = _(schema.properties)
        .map(property => [
            property.fieldName === "uid" ? "id" : property.fieldName,
            getType(property),
        ])
        .fromPairs()
        .value();

    return createInterface(getModelName(schema), properties, parent);
}

function getArgsParser() {
    const parser = new argparse.ArgumentParser();
    parser.addArgument("url", {
        help: "DHIS2 instance URL: http://username:password@server:port",
    });

    return parser.parseArgs();
}

function quote(s: string): string {
    return '"' + s + '"';
}

function getPropertiesUnion(
    schema: Schema,
    predicate: (property: SchemaProperty) => boolean
): string {
    return schema.properties
        .filter(predicate)
        .map(property => quote(property.fieldName))
        .join(" | ");
}

/*
const fieldPresets = {
    identifiable: ["id", "name", "code", "created", "lastUpdated"],
    nameable: ["id", "name", "shortName", "code", "description", "created", "lastUpdated"],
};
*/

const start = async () => {
    const args = getArgsParser();
    const schemaUrl = joinPath(args.url, "/api/schemas.json");
    const { schemas } = (await axios.get(schemaUrl)).data as { schemas: Schema[] };
    const models = _(schemas)
        .filter(schema => schema.metadata)
        .value();
    const globalProperties = fs.readFileSync(path.join(__dirname, "models-globals.ts"));
    const schemasString = schemas.map(schema => createModelInterface(schema)).join("\n\n");
    const modelsDeclaration = `
        export type D2Model =
            ${models.map(model => getModelName(model)).join(" |")}

        export enum D2ModelEnum {
            ${models.map(model => `${model.plural} = "${model.plural}"`).join(",\n")}
        }

        export type D2ModelsInfoI = {
            [K in D2ModelEnum]: {
                model: D2Model;
                fieldPresets: {
                    [K in FieldPreset]: string;
                };
            }
        }

        export interface D2ModelsInfo extends D2ModelsInfoI {
            ${models.map(
                model => `${model.plural}: {
                model: ${getModelName(model)},
                fieldPresets: {
                    $all: keyof ${getModelName(model)},
                    $identifiable: FieldPresets["identifiable"]
                    $nameable: FieldPresets["nameable"]
                    $persisted: ${getPropertiesUnion(model, p => p.persisted)};
                    $owner: ${getPropertiesUnion(model, p => p.owner)};
                }
                }`
            )}
        }

        export type D2Models = {
            [K in keyof D2ModelsInfo]: D2ModelsInfo[K]["model"]
        }
    `;

    const parts = [globalProperties, schemasString, modelsDeclaration];
    const prettierConfigFile = await prettier.resolveConfigFile();
    if (!prettierConfigFile) throw new Error("Cannot find prettier config file");

    /*
    const prettierConfig = await prettier.resolveConfig(prettierConfigFile);
    const data = prettier.format(parts.join("\n\n"), {
        parser: "babel",
        ...prettierConfig,
    });
    */
    const data = parts.join("\n\n");

    const tsPath = path.join(__dirname, "models.ts");
    fs.writeFile(tsPath, data, err => {
        if (err) console.error(err);
        else console.log(`Written: ${tsPath}`);
    });
};

start();
