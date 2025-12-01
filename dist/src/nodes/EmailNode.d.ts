import { BaseNode } from "./BaseNode";
export declare class EmailNode extends BaseNode {
    constructor({ input, name, description, id }: {
        input: Record<string, any>;
        name?: string;
        description?: string;
        id?: string;
    });
    validateInput(): void;
}
