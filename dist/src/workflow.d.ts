import { StartNode } from './nodes/StartNode';
export declare class Workflow {
    private startNode?;
    /**
     * Set the start node for the workflow.
     */
    trigger(startNode: StartNode): void;
    /**
     * Traverse from the start node, following all nextRefs and RuleNode branches, and collect all nodes in order.
     * Throws an error if a cycle (infinite loop) is detected.
     */
    build(): ({
        id: string;
        slug: any;
        action: import(".").NodeActions;
        input: any;
        next_node: any;
    } | {
        true_nodes: string[];
        false_nodes: string[];
        next_node: string[];
        id: string;
        slug: any;
        action: import(".").NodeActions;
        input: any;
    } | {
        entry_node: string | null;
        group_nodes: string[];
        array_items: any[];
        id: string;
        slug: any;
        action: import(".").NodeActions;
        input: any;
        next_node: any;
    })[];
    /**
     * Process all GroupNode for loop nodes
     */
    private processAllGroupNodes;
    /**
     * Print a Mermaid flowchart representation of the workflow after build().
     */
    printMermaid(): string;
}
