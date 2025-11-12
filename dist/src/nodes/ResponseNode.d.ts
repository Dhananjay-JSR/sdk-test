import { BaseNode } from './BaseNode';
export declare class ResponseNode extends BaseNode {
    constructor({ input, name, description }: {
        input?: {
            data: any;
        };
        name?: string;
        description?: string;
    });
}
