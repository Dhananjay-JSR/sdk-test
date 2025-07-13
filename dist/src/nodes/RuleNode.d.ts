import { BaseNode } from './BaseNode';
import { Operators } from '../constants/Operators';
export declare class RuleNode extends BaseNode {
    private _truth_refs;
    private _falsy_refs;
    truth_node: string[];
    falsy_node: string[];
    constructor({ variable, value, operator }: {
        variable: any;
        value: any;
        operator: Operators;
    });
    truthNext(node: BaseNode): BaseNode;
    falsyNext(node: BaseNode): BaseNode;
    get truthRefs(): BaseNode[];
    get falsyRefs(): BaseNode[];
}
