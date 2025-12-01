import { BaseNode } from "./BaseNode";
import { DelayActions } from "../constants/Actions";
export declare class DelayNode extends BaseNode {
    constructor({ input, action, name, description, id }: {
        input: Record<string, any>;
        action: DelayActions;
        name?: string;
        description?: string;
        id?: string;
    });
    validateInput(): void;
    private validateWaitForInput;
    private validateWaitTillInput;
}
