import { BaseNode } from "./BaseNode";
export declare class EmailNode extends BaseNode {
    constructor({ input, name, description }: {
        input: Record<string, any>;
        name?: string;
        description?: string;
    });
    validateInput(): void;
}
