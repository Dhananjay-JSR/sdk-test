import { NodeActions } from '../constants/Actions';
export declare class BaseNode {
    static _counter: number;
    id: string;
    slug: string;
    action: NodeActions;
    input: any;
    next_node: string[];
    private _next_refs;
    constructor(params: {
        slug: string;
        action: NodeActions;
        input: Record<string, any>;
    });
    next(node: BaseNode): BaseNode;
    get nextRefs(): BaseNode[];
    get body(): any;
}
