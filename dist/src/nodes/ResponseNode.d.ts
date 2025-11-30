import { BaseNode } from './BaseNode';
export declare class ResponseNode extends BaseNode {
    constructor({ input, name, description, id }: {
        input?: {
            data: any;
        };
        name?: string;
        description?: string;
        id?: string;
    });
}
