import { BaseNode } from './BaseNode';
export declare class HttpNode extends BaseNode {
    constructor({ input }: {
        input: {
            url: string;
            method: "GET" | "POST" | "PUT" | "DELETE";
            body?: Record<string, any>;
            query_params: Record<string, any>;
            headers: Record<string, any>;
        };
    });
}
