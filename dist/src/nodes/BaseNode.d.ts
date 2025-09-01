import { GroupNode } from './GroupNode';
export declare class BaseNode {
    static _counter: number;
    id: string;
    slug: string;
    action: string;
    input: any;
    next_node: string[];
    private _next_refs;
    protected _parent_node: GroupNode | null;
    name?: string;
    description?: string;
    constructor(params: {
        slug: string;
        action: string;
        input: Record<string, any>;
        name?: string;
        description?: string;
    });
    next(node: BaseNode): BaseNode;
    get nextRefs(): BaseNode[];
    /**
     * Set the parent GroupNode
     */
    setParentNode(parent: GroupNode): void;
    /**
     * Get the parent GroupNode
     */
    get parentNode(): GroupNode | null;
    /**
     * Get the parent node ID for serialization
     */
    get parent_node(): string | null;
    get body(): any;
    static pushForLoopContext(group: any): void;
    static popForLoopContext(): any;
    static getCurrentForLoopContext(): any;
    static clearForLoopContext(): void;
    /**
     * Virtual function to validate node-specific input requirements
     * Should be overridden by subclasses to implement their specific validation logic
     */
    validateInput(): void;
}
