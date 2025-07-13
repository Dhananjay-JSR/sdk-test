import { BaseNode } from './BaseNode';
import { GroupActions } from '../constants/Actions';
export declare class GroupNode extends BaseNode {
    private _entry_node_ref;
    entry_node: string | null;
    constructor({ action, input }: {
        action: GroupActions;
        input: any;
    });
    setEntryNode(node: BaseNode): void;
    get entryNode(): BaseNode | null;
}
