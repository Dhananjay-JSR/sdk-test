import { BaseNode } from "./BaseNode";
export declare class ExternalApp extends BaseNode {
    constructor({ application_slug, action, input }: {
        application_slug: string;
        action: string;
        input: any;
    });
}
