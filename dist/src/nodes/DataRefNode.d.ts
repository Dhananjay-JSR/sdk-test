import { BaseNode } from "./BaseNode";
import { DataRefActions } from "../constants/Actions";
export declare class DataRefNode extends BaseNode {
    constructor({ input, action }: {
        input: Record<string, any>;
        action: DataRefActions;
    });
    validateInput(): void;
}
