import { Actions } from "src/constants/Actions";
import { BaseNode } from "./BaseNode";
export declare class SubflowNode extends BaseNode {
    constructor({ input, action }: {
        input: Record<string, any>;
        action: Actions.no_action;
    });
    validateInput(): void;
}
