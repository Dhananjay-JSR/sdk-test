import { BaseNode } from './BaseNode';
import { Operation, Operators } from '../constants/Operators';
export declare class RuleNode extends BaseNode {
    private _true_refs;
    private _false_refs;
    true_node: string[];
    false_node: string[];
    constructor({ operation, rules }: {
        operation: Operation;
        rules: {
            variable: any;
            value: any;
            operator: Operators;
        }[];
    });
    trueNext(node: BaseNode): BaseNode;
    falseNext(node: BaseNode): BaseNode;
    get trueRefs(): BaseNode[];
    get falseRefs(): BaseNode[];
}
