import { BaseNode } from "./BaseNode";
import { DelayActions } from "../constants/Actions";
export declare class DelayNode extends BaseNode {
    constructor({ input, action }: {
        input: Record<string, any>;
        action: DelayActions;
    });
    validateInput(): void;
    private validateWaitForInput;
    private validateWaitTillInput;
}
