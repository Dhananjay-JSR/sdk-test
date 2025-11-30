import { BaseNode } from "./BaseNode";
export declare class ExternalApp extends BaseNode {
    constructor({ application_slug, action, input, name, description, id }: {
        application_slug: string;
        action: string;
        input: any;
        name?: string;
        description?: string;
        id?: string;
    });
}
