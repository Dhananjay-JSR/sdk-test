import { BaseNode } from "./BaseNode";
export declare class FileHandlerNode extends BaseNode {
    constructor({ input }: {
        input: Record<string, any>;
    });
    validateInput(): void;
}
