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
const api = new D2ApiDefault({
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

### Analytics

#### Get

```
const analyticsData = await api.analytics
    .get({
        dimension: ["dx:fbfJHSPpUQD;cYeuwXTCPkU"],
        filter: ["pe:2014Q1;2014Q2", "ou:O6uvpzGd5pu;lc3eMKXaEfw"],
    })
    .getData();
```

#### Run analytics

```
const analyticsRunResponse = await api.analytics.run().getData();
```

### Data values

```
const response = await api.dataValues
    .postSet({
        dataSet: "Gs69Uw2Mom1",
        orgUnit: "qYIeuQe9OwF",
        period: "202001",
        attributeOptionCombo: "yi2bV1K4vl6",
        dataValues: _[
            {
                dataElement: "a4bd432446",
                categoryOptionCombo: "d1bd43245af",
                value: "1.5",
            },
            {
                dataElement: "1agd43f4q2",
                categoryOptionCombo: "aFwdq324132",
                value: "Some comment",
            }
        ],
    })
    .getData();
```

### Data store

#### Get

```
const dataStore = api.dataStore("namespace1");
const value = await dataStore.get("key1").getData();
```

#### Save

```
const dataStore = api.dataStore("namespace1");
dataStore.save("key1", {x: 1, y: 2});
```

#### Emails

Send a test email:

```
await api.email.sendTestMessage().getData();
```

Send a system notification:

```
await api.email.sendSystemNotification({
    subject: "My subject",
    text: "My message",
}).getData();
```

Send a message:

```
await api.email.sendMessage({
    recipients: ["user@server.org"],
    subject: "My subject",
    text: "My message",
}).getData();
```

## Using type helpers

_d2-api_ exposes some type helpers that you may need in your app. Some examples:

-   `SelectedPick`: Get model from a selector:

```
type PartialUser = SelectedPick<
    D2UserSchema,
    {
        id: true;
        favorite: true,
    }
>;
// type PartialUser = {id: string, favorite: boolean}
```

-   `MetadataPick`: Get indexes models from a metadata selector.

```
type Metadata = MetadataPick<{
    users: { fields: { id: true; favorite: true } };
    categories: { fields: { id: true; code: true } };
}>;
// type Metadata = {users: {id: string, favorite: boolean}, categories: {id: string, code: string}}
```

## Testing

```
import { getMockApi, D2Api, D2User } from "d2-api";

const currentUserMock = {
    id: "xE7jOejl9FI",
    displayName: "John Traore",
};

const { api, mock } = getMockApi();

describe("Project", () => {
    beforeEach(() => {
        mock.reset();
    });

    describe("getList", () => {
        it("returns list of dataSets filtered", async () => {
            mock.onGet("/me").reply(200, currentUserMock);
            const currentUser = await api.currrentUser.get().getData();
            expect(currentUser.id).toEqual("xE7jOejl9FI");
        });
    });
});
```
