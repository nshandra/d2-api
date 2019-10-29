# d2-api

Typescript library for the DHIS2 API.

## Generate schemas

```
$ yarn generate-schemas https://admin:district@play.dhis2.org/2.30
```

## Development

```
$ yarn build
$ cd build
$ yarn link
```

On your app:

```
$ yarn link d2-api
```

## Publish

```
$ yarn build
$ yarn publish [--tag beta] [--patch | --minor | --major]
```

## Usage

### Create API instance

```
const api = new D2Api({
    baseUrl: "https://play.dhis2.org/2.30",
    auth: { username: "admin", password: "district" },
});
```

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
    paging: false,
});

console.log({ cancel, data: (await response).data.objects[0].name });
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
            organisationUnits: {
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

console.log((await response).data)
```

## Testing

```
import { getMockApi, D2Api, D2User } from "d2-api";

const currentUserMock = {
    id: "xE7jOejl9FI",
    displayName: "John Traore",
};

function getCurrentUser(api: D2Api): Promise<D2User> {
    return api.currrentUser.get().getData();
}

const { api, mock } = getMockApi();

describe("Project", () => {
    beforeEach(() => {
        mock.reset();
    });

    describe("getList", () => {
        it("returns list of dataSets filtered", async () => {
            mock.onGet("/me").reply(200, currentUserMock);
            const currentUser = await getCurrentUser(api);
            expect(currentUser.id).toEqual("xE7jOejl9FI");
        });
    });
});
```
