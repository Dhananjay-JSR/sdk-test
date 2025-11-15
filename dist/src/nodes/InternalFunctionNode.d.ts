import { Actions } from "src/constants/Actions";
import { BaseNode } from "./BaseNode";
export declare class InternalFunctionNode extends BaseNode {
    constructor({ input, action, name, description }: {
        input: Record<string, any>;
        action: Actions.no_action;
        name?: string;
        description?: string;
    });
}
