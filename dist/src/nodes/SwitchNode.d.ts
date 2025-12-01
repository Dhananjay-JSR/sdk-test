import { BaseNode } from "./BaseNode";
export declare class SwitchNode extends BaseNode {
    private _cases;
    private _caseRefs;
    private _defaultCase;
    private _defaultRefs;
    constructor({ input, name, description, id }: {
        input: {
            switch_value: any;
        };
        name?: string;
        description?: string;
        id?: string;
    });
    /**
     * Override next() to prevent usage on branching nodes
     * Use addCase() or setDefault() instead
     */
    next(node: any): never;
    /**
     * Add case branch(es) to the switch node
     * @param caseValue - The value to match against
     * @param nodeOrNodes - Single node or array of nodes to execute when this case matches
     */
    addCase(caseValue: string, nodeOrNodes: any | any[]): SwitchNode;
    /**
     * Set the default case (executed when no other case matches)
     * @param nodeOrNodes - Single node or array of nodes to execute for the default case
     */
    setDefault(nodeOrNodes: any | any[]): SwitchNode;
    /**
     * Get all case values
     */
    get cases(): string[];
    /**
     * Get all case references for traversal
     */
    get caseRefs(): Map<string, any[]>;
    /**
     * Get default case references for traversal
     */
    get defaultRefs(): any[];
    /**
     * Get cases for serialization
     */
    get casesForSerialization(): Record<string, string[]>;
    /**
     * Get default case for serialization
     */
    get defaultCase(): string[];
    validateInput(): void;
}
