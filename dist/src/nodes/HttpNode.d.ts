import { BaseNode } from './BaseNode';
export declare class HttpNode extends BaseNode {
    constructor({ url, method, body, query_params, headers }: {
        url: string;
        method: "GET" | "POST" | "PUT" | "DELETE";
        body?: Record<string, any>;
        query_params: Record<string, any>;
        headers: Record<string, any>;
    });
}
