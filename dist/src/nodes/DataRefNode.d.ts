import { BaseNode } from "./BaseNode";
import { DataRefActions } from "../constants/Actions";
export declare class DataRefNode extends BaseNode {
    constructor({ input, action, name, description, id }: {
        input: Record<string, any>;
        action: DataRefActions;
        name?: string;
        description?: string;
        id?: string;
    });
    validateInput(): void;
}
