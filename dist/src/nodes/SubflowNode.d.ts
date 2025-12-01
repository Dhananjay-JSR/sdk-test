import { Actions } from "src/constants/Actions";
import { BaseNode } from "./BaseNode";
export declare class SubflowNode extends BaseNode {
    constructor({ input, action, name, description, id }: {
        input: Record<string, any>;
        action: Actions.no_action;
        name?: string;
        description?: string;
        id?: string;
    });
    validateInput(): void;
}
