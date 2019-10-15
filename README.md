# d2-api

Typescript library for DHIS2 api

## Generate schesmas

```
$ yarn generate-schemas http://admin:district@localhost:8080
```

## Usage

### Metadata models

#### GET (list)

```
const { cancel, response } = api.models.dataSets.get({
    fields: {
        id: true,
        name: true,
        categoryOptions: {
            id: true,
            name: true,
        },
    },
    filter: {
        name: { ilike: "health", "!in": ["Child Health"] },
        code: { $like: "DS_" },
    },
    order: "name:asc",
});

console.log({ cancel, data: (await response).data });
```

#### POST (create)

```
const { cancel, response } = api.models.dataSets.post({
    name: "My DataSet",
    periodType: "Monthly",
});
```

#### PUT (update)

```
const { cancel, response } = api.models.dataSets.put({
    id: "Ew82BhPZkpa",
    name: "My DataSet",
    periodType: "Daily",
});
```

#### DELETE (delete)

```
const { cancel, response } = api.models.dataSets.delete({
    id: "Ew82BhPZkpa",
});
```

### Metadata

#### GET

```
const { cancel, response } = api.metadata.get({
    dataSets: {
        fields: {
            id: true,
            name: true,
            categoryOptions: {
                id: true,
                name: true,
            },
        },
        filter: {
            name: { ilike: "health", "!in": ["Child Health"] },
            code: { $like: "DS_" },
        },
    },
    categories: {
        fields: {
            $owner: true,
        }
    }
});

const { dataSets, categories } = (await response).data;
```

#### POST

```
const { cancel, response } = api.metadata.post({
    dataSets: [{
        name: "My DataSet",
        periodType: "Monthly",
    }],
});
```
