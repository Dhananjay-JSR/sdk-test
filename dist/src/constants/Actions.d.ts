export declare enum Actions {
    no_action = "no_action",
    http_request = "httprequest"
}
export declare enum GroupActions {
    ArrayIteration = "array_iteration",
    FixedIteration = "fixed_iteration"
}
export type NodeActions = Actions | GroupActions;
