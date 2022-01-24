import _ from "lodash";
import { D2ApiGeneric } from "./d2Api";
import { D2ApiResponse } from "./common";
import { fromPairs } from "../utils/misc";

/* https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/maintenance.html */

// Get the keys from a real DataAdministration->Maintenance POST to make sure the list is complete.
const keys = [
    "analyticsTableClear",
    "analyticsTableAnalyze",
    "zeroDataValueRemoval",
    "softDeletedDataValueRemoval",
    "softDeletedEventRemoval",
    "softDeletedEnrollmentRemoval",
    "softDeletedTrackedEntityInstanceRemoval",
    "periodPruning",
    "expiredInvitationsClear",
    "sqlViewsDrop",
    "sqlViewsCreate",
    "categoryOptionComboUpdate",
    "ouPathsUpdate",
    "cacheClear",
    "appReload",
] as const;

export class Maintenance {
    constructor(public d2Api: D2ApiGeneric) {}

    tasks = maintenanceTasks;

    runTasks(tasks: MaintenanceTask[]): D2ApiResponse<void> {
        const params: MaintenanceParams = fromPairs(tasks.map(task => [task, true]));
        return this.d2Api.post<void>("/maintenance/", params);
    }
}

export type MaintenanceTask = typeof keys[number];

type TasksNamespace = { [Task in MaintenanceTask]: Task };

type MaintenanceParams = Record<MaintenanceTask, boolean>;

const maintenanceTasks = _(keys)
    .map(name => [name, name])
    .fromPairs()
    .value() as TasksNamespace;
