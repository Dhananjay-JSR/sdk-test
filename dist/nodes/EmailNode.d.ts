import { BaseNode } from "./BaseNode";
export declare class EmailNode extends BaseNode {
    constructor({ input }: {
        input: Record<string, any>;
    });
    validateInput(): void;
}
