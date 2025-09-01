import { BaseNode } from "./BaseNode";
import { PDFActions } from "../constants/Actions";
export declare class PDFNode extends BaseNode {
    constructor({ input, action, name, description }: {
        input: Record<string, any>;
        action: PDFActions;
        name?: string;
        description?: string;
    });
    validateInput(): void;
}
