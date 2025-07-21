import { BaseNode } from './BaseNode';
import { GroupActions } from '../constants/Actions';
export declare class GroupNode extends BaseNode {
    private _entry_node_ref;
    entry_node: string | null;
    private _array_items;
    private _group_nodes;
    private _for_loop_nodes;
    private _is_in_for_loop;
    array_item: any[];
    constructor({ action, array_item, fixed_iteration }: {
        action: GroupActions;
        array_item?: any[];
        fixed_iteration?: number;
    });
    static getAllGroupNodes(): GroupNode[];
    static clearRegistry(): void;
    setEntryNode(node: BaseNode): void;
    get entryNode(): BaseNode | null;
    /**
     * Override next() to handle sibling nodes after group ends
     */
    next(node: BaseNode): GroupNode;
    /**
     * Start for loop context - called automatically by build process
     */
    startForLoopContext(): void;
    /**
     * End for loop context - called automatically by build process
     */
    endForLoopContext(): void;
    /**
     * Track node created within for loop context
     */
    trackForLoopNode(node: BaseNode): void;
    /**
     * Add a node from the for loop to be processed during build
     */
    addForLoopNode(node: BaseNode): void;
    /**
     * Process for loop nodes during build
     * This is called when .build() is called on the workflow
     */
    processForLoopNodes(): void;
    /**
     * Add node to for loop tracking
     */
    addToForLoop(node: BaseNode): void;
    /**
     * Set the array source (previous node response)
     */
    setArraySource(arraySource: any): void;
    /**
     * Extract array from the source (previous node response)
     */
    private extractArrayFromSource;
    /**
     * Simple forEach method for array iteration
     * Always assumes the callback receives a single array_item (not an array)
     */
    forEach(callback: (array_item: any, index: number) => BaseNode[]): BaseNode[];
    /**
     * Process node input to replace array_item references with templates
     */
    private processNodeInput;
    /**
     * Replace array_item references with template strings
     */
    private replaceArrayItemReferences;
    /**
     * Keep templates as {{node.id.array_item.key}} format
     */
    private keepTemplatesAsIs;
    /**
     * Replace array_item references in a string with template syntax
     */
    private replaceArrayItemInString;
    /**
     * Resolve string templates during build
     */
    private resolveStringTemplate;
    /**
     * Get current array items for iteration
     */
    get currentArrayItems(): any[];
    /**
     * Get all nodes created within this group
     */
    get groupNodes(): BaseNode[];
    /**
     * Get array items used for templating
     */
    get arrayItems(): any[];
}
