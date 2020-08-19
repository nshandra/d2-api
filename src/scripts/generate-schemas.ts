import axios from "axios";
import fs from "fs";
import _ from "lodash";
import path from "path";
import prettier from "prettier";
import { D2SchemaProperties } from "../schemas";
import { joinPath } from "../utils/connection";

interface SchemaProperty {
    name: string;
    collectionName?: string;
    fieldName?: string;
    propertyType: string;
    itemPropertyType?: string;
    constants?: string[];
    klass: string;
    itemKlass?: string;
    persisted: boolean;
    owner: boolean;
}

interface Schema extends D2SchemaProperties {
    properties: SchemaProperty[];
    href: string;
}

interface Schemas {
    [className: string]: Schema;
}

const schemaProperties: Array<keyof D2SchemaProperties> = [
    "klass",
    "shareable",
    "metadata",
    "relativeApiEndpoint",
    "plural",
    "displayName",
    "collectionName",
    "nameableObject",
    "translatable",
    "identifiableObject",
    "dataShareable",
    "name",
    "persisted",
    "embeddedObject",
];

const interfaceFromClass: _.Dictionary<string> = {
    "org.hisp.dhis.security.acl.Access": "D2Access",
    "org.hisp.dhis.translation.ObjectTranslation": "D2Translation",
    "org.hisp.dhis.translation.Translation": "D2Translation",
    "org.hisp.dhis.common.ObjectStyle": "D2Style",
    "org.hisp.dhis.common.DimensionalKeywords": "D2DimensionalKeywords",
    "com.vividsolutions.jts.geom.Geometry": "D2Geometry",
    "org.hisp.dhis.expression.Expression": "D2Expression",
    "org.hisp.dhis.period.PeriodType": "string",
    "org.hisp.dhis.chart.Series": "any",
    "org.hisp.dhis.attribute.AttributeValue": "D2AttributeValueGeneric<D2Attribute>",
    "org.hisp.dhis.eventdatavalue.EventDataValue": "any",
    "org.hisp.dhis.common.DataDimensionItem": "any",
    "org.hisp.dhis.common.DimensionalObject": "any",
    "org.hisp.dhis.interpretation.Mention": "any",
    "org.hisp.dhis.message.Message": "any",
    "org.hisp.dhis.message.UserMessage": "any",
    "org.hisp.dhis.period.Period": "any",
    "org.hisp.dhis.period.RelativePeriods": "any",
    "org.hisp.dhis.programstagefilter.EventQueryCriteria": "any",
    "org.hisp.dhis.relationship.RelationshipConstraint": "any",
    "org.hisp.dhis.relationship.RelationshipItem": "any",
    "org.hisp.dhis.render.DeviceRenderTypeMap": "any",
    "org.hisp.dhis.reporttable.ReportParams": "any",
    "org.hisp.dhis.sms.command.code.SMSCode": "any",
    "org.hisp.dhis.sms.command.SMSSpecialCharacter": "any",
    "org.hisp.dhis.trackedentityattributevalue.TrackedEntityAttributeValue": "any",
    "org.hisp.dhis.trackedentitycomment.TrackedEntityComment": "any",
    "org.hisp.dhis.trackedentityfilter.EventFilter": "any",
    "org.hisp.dhis.trackedentityfilter.FilterPeriod": "any",
    "org.hisp.dhis.trackedentity.TrackedEntityAttributeDimension": "any",
    "org.hisp.dhis.trackedentity.TrackedEntityProgramOwner": "any",
    "org.hisp.dhis.common.DimensionalItemObject": "any",

    "java.lang.Object": "object",
    "java.util.Map": "object",
};

function getModelName(klass: string, suffix?: string): string {
    const className = _.last(klass.split("."));
    if (!className) {
        throw "No class name";
    } else {
        return `D2${className}${suffix || ""}`;
    }
}

const getType = (schemas: Schemas, property: SchemaProperty, suffix?: string): string => {
    const { propertyType, constants, itemPropertyType, itemKlass } = property;

    switch (propertyType) {
        case "REFERENCE":
            return getInterface(schemas, property, suffix);
        case "COLLECTION": {
            if (!itemPropertyType || !itemKlass) throw new Error("Missing item info");

            const innerType = getType(
                schemas,
                {
                    ...property,
                    propertyType: itemPropertyType,
                    klass: itemKlass,
                },
                suffix
            );
            return `${innerType}[]`;
        }
        case "TEXT":
        case "URL":
        case "PHONENUMBER":
        case "EMAIL":
        case "COLOR":
        case "PASSWORD":
        case "DATE":
            return "string";
        case "IDENTIFIER":
            return "Id";
        case "INTEGER":
            return "number";
        case "CONSTANT":
            return constants ? joinStr(constants) : "never";
        case "COMPLEX":
            return getInterface(schemas, property, suffix);
        case "BOOLEAN":
            return "boolean";
        case "NUMBER":
            return "number";
        case "GEOLOCATION":
            return "string";
        default:
            throw `Unsupported property type: ${propertyType}`;
    }
};

function getInterface(schemas: Schemas, property: SchemaProperty, suffix?: string): string {
    const className = _.last(property.klass.split(".")) || "";

    if (schemas[className]) {
        return `D2${className}${suffix || ""}`;
    } else if (interfaceFromClass[property.klass]) {
        return interfaceFromClass[property.klass];
    } else {
        console.log(`Unsupported complex type, default to any: ${property.klass}`);
        return "any";
    }
}

function getPropertyName(property: SchemaProperty): string {
    const value = property.collectionName || property.name || property.fieldName;
    if (!value) throw new Error(`No name found for property: ${property}`);
    else return value;
}

function getModelProperties(schemas: Schemas, schema: Schema, suffix?: string): string {
    return _(schema.properties)
        .map(property => [getPropertyName(property), getType(schemas, property, suffix)])
        .sortBy()
        .map(([key, value]) => `${key}: ${value}`)
        .join(";");
}

function quote(s: string): string {
    return '"' + s + '"';
}

function getProperties(schema: Schema, predicate: (property: SchemaProperty) => boolean): string {
    return (
        schema.properties
            .filter(predicate)
            .map(property => quote(getPropertyName(property)))
            .join(" | ") || "never"
    );
}

function joinStr(xs: string[]): string {
    return xs.map(quote).join(" | ");
}

const instances = {
    baseUrl: "https://admin:district@play.dhis2.org/",
    versions: ["2.30", "2.31", "2.32", "2.33", "2.34"],
};

async function generateSchema(version: string) {
    const url = instances.baseUrl + version;

    const schemaUrl = joinPath(url, "/api/schemas.json?fields=:all,metadata");
    console.debug(`GET ${schemaUrl}`);
    const { schemas } = (await axios.get(schemaUrl, {
        validateStatus: (status: number) => status >= 200 && status < 300,
    })).data as { schemas: Schema[] };

    const models = _(schemas)
        .filter(schema => !!schema.href)
        .sortBy(schema => schema.name)
        .value();
    const schemasByClassName = _.keyBy(schemas, schema => _.last(schema.klass.split(".")) || "");

    const modelsDeclaration = `
        /* eslint-disable */

        import {
            Id, Preset, FieldPresets, D2SchemaProperties,
            D2Access, D2Translation, D2Geometry,  D2Style,
            D2AttributeValueGeneric, D2DimensionalKeywords, D2Expression
        } from "../schemas/base";

        ${schemas
            .map(
                schema => `
                export type ${getModelName(schema.klass)} = {
                    ${getModelProperties(schemasByClassName, schema)}
                };
            `
            )
            .join("\n\n")}

        ${schemas
            .map(schema => {
                const modelName = getModelName(schema.klass);
                const schemaName = getModelName(schema.klass, "Schema");

                return `
                    export interface ${schemaName} {
                        name: "${modelName}";
                        model: ${modelName};
                        fields: { ${getModelProperties(schemasByClassName, schema, "Schema")} };
                        fieldPresets: {
                            $all:
                                Preset<${modelName}, keyof ${modelName}>
                            $identifiable:
                                Preset<${modelName}, FieldPresets["identifiable"]>
                            $nameable:
                                Preset<${modelName}, FieldPresets["nameable"]>
                            $persisted:
                                Preset<${modelName}, ${getProperties(schema, p => p.persisted)}>
                            $owner:
                                Preset<${modelName}, ${getProperties(schema, p => p.owner)}>
                        };
                    }
                `;
            })
            .join("\n\n")}

        export type D2Model =
            ${models.map(model => getModelName(model.klass)).join(" | ")}

        export const models: Record<keyof D2ModelSchemas, D2SchemaProperties> =
            ${JSON.stringify(
                _.keyBy(models.map(model => _.pick(model, schemaProperties)), "plural")
            )}

        export type D2ModelSchemas = {
            ${models
                .map(model => `${model.plural}: ${getModelName(model.klass)}Schema`)
                .join(",\n")}
        }
    `;

    const parts = [modelsDeclaration];
    const prettierConfigFile = await prettier.resolveConfigFile();
    if (!prettierConfigFile) throw new Error("Cannot find prettier config file");

    const prettierConfig = await prettier.resolveConfig(prettierConfigFile);
    const data = prettier.format(parts.join("\n"), {
        parser: "typescript",
        ...prettierConfig,
    });

    const parentPath = path.join(__dirname, "..", version);
    fs.mkdirSync(parentPath, { recursive: true });
    const schemasPath = path.join(parentPath, "schemas.ts");
    fs.writeFileSync(schemasPath, data);
    console.log(`Written: ${schemasPath}`);
}

async function generateSchemas() {
    for (const version of instances.versions) {
        console.log(`Get schemas for ${version}`);
        await generateSchema(version);
    }
}

function logErrorAndExit(err: any) {
    console.error(err); // eslint-disable-line no-console2
    process.exit(1);
}

generateSchemas().catch(logErrorAndExit);
