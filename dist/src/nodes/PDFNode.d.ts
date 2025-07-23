import { BaseNode } from "./BaseNode";
import { PDFActions } from "../constants/Actions";
export declare class PDFNode extends BaseNode {
    constructor({ input, action }: {
        input: Record<string, any>;
        action: PDFActions;
    });
    validateInput(): void;
}
