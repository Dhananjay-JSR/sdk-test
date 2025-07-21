export declare enum Actions {
    no_action = "no_action",
    http_request = "httprequest"
}
export declare enum StartNodeTrigger {
    API_CALL = "api_call",
    CRON = "cron",
    EVENT = "event"
}
export declare enum GroupActions {
    ArrayIteration = "array_iteration",
    FixedIteration = "fixed_iteration"
}
export type NodeActions = Actions | GroupActions;
