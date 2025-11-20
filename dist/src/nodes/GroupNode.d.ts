import { BaseNode } from './BaseNode';
import { GroupActions } from '../constants/Actions';
export declare class GroupNode extends BaseNode {
    private _entry_node_ref;
    entry_node: string | null;
    private _group_nodes;
    private _for_loop_nodes;
    private _is_in_for_loop;
    private _callback_fn?;
    get callback_fn(): ((array_item: any) => void) | undefined;
    constructor({ input, name, description, iteration_type }: {
        input: {
            array_item?: any[];
            fixed_iteration?: number;
            callback_fn?: (array_item: any) => void;
        };
        iteration_type: GroupActions;
        name?: string;
        description?: string;
    });
    /**
     * Execute the callback function for each array item
     */
    executeCallback(): void;
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
     * Process node input to replace array_item references with templates
     */
    private processNodeInput;
    /**
     * Keep templates as {{node.id.array_item.key}} format
     */
    private keepTemplatesAsIs;
    /**
     * Replace array_item references in a string with template syntax
     */
    private replaceArrayItemInString;
    /**
     * Re-resolve templates with correct IDs
     */
    private reResolveTemplates;
    /**
     * Recursively re-resolve templates in an object
     */
    private reResolveTemplatesInObject;
    /**
     * Re-resolve templates in a string using ID mapping
     */
    private reResolveTemplatesInString;
    /**
     * Get all nodes created within this group
     */
    get groupNodes(): BaseNode[];
}
