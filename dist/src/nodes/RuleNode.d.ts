import { BaseNode } from './BaseNode';
import { Operations, Operators } from '../constants/Operators';
export declare class RuleNode extends BaseNode {
    private _true_refs;
    private _false_refs;
    true_node: string[];
    false_node: string[];
    constructor({ operation, rules }: {
        operation: Operations;
        rules: {
            variable: any;
            value: any;
            operator: Operators;
        }[];
    });
    /**
     * Override next() to prevent usage on branching nodes
     * Use trueNext() or falseNext() instead
     */
    next(node: BaseNode): never;
    trueNext(node: BaseNode): BaseNode;
    falseNext(node: BaseNode): BaseNode;
    get trueRefs(): BaseNode[];
    get falseRefs(): BaseNode[];
    validateInput(): void;
}
