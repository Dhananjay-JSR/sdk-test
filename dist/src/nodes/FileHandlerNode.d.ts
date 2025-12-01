import { BaseNode } from "./BaseNode";
export declare class FileHandlerNode extends BaseNode {
    constructor({ input, name, description, id, action }: {
        input: Record<string, any>;
        name?: string;
        description?: string;
        id?: string;
        action?: string;
    });
    validateInput(): void;
}
