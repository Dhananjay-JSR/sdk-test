declare module "nodes/template" {
    export function resolveTemplates(obj: any): any;
}
declare module "constants/Actions" {
    export enum Actions {
        no_action = "no_action",
        http_request = "httprequest"
    }
    export enum DelayActions {
        WAIT_FOR = "wait_for",
        WAIT_TILL = "wait_till"
    }
    export enum FileHandlerActions {
        UPLOAD_FILE_TO_BUCKET_FROM_URL = "upload_file_to_bucket_from_url"
    }
    export enum TableActions {
        CREATE_TABLE = "create_table",
        DELETE_TABLE = "delete_table",
        GET_TABLES = "get_tables",
        ADD_TABLE_RECORD = "add_table_record",
        SEARCH_TABLE_RECORDS = "search_table_records",
        GET_TABLE_RECORDS = "get_table_records",
        UPDATE_TABLE_RECORD = "update_table_record",
        DELETE_TABLE_RECORD = "delete_table_record"
    }
    export enum PDFActions {
        CREATE_PDF_FROM_HTML = "create_pdf_from_html",
        MERGE_PDFS = "merge_pdfs"
    }
    export enum DataRefActions {
        CREATE_REF = "create_ref",
        CREATE_BULK_REF = "create_bulk_ref",
        GET_REF_BY_RECORD_ID = "get_ref_by_record_id",
        GET_REF_BY_EXTERNAL_ID = "get_ref_by_external_id",
        DELETE_REF_BY_RECORD_ID = "delete_ref_by_record_id"
    }
    export enum CsvExcelActions {
        CSV_TO_JSON = "csv_to_json",
        JSON_TO_CSV = "json_to_csv",
        PARSE_CSV_TO_ARRAY = "parse_csv_to_array",
        ARRAY_OF_ROWS_TO_CSV = "array_of_rows_to_csv",
        JSON_TO_EXCEL = "json_to_excel",
        JSON_DATA_TO_EXCEL = "json_data_to_excel",
        CSV_TO_EXCEL = "csv_to_excel",
        MERGE_EXCEL_FILES = "merge_excel_files",
        WRITE_DATA_TO_FILE = "write_data_to_file"
    }
    export enum StartNodeTrigger {
        API_CALL = "api_call",
        CRON = "cron",
        EVENT = "event"
    }
    export enum GroupActions {
        ArrayIteration = "array_iteration",
        FixedIteration = "fixed_iteration"
    }
    export type NodeActions = Actions | GroupActions;
}
declare module "nodes/GroupNode" {
    import { BaseNode } from "nodes/BaseNode";
    import { GroupActions } from "constants/Actions";
    export class GroupNode extends BaseNode {
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
}
declare module "nodes/BaseNode" {
    import { GroupNode } from "nodes/GroupNode";
    export class BaseNode {
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
}
declare module "constants/Operators" {
    export enum Operators {
        eq = "eq",
        neq = "neq",
        gt = "gt",
        gte = "gte",
        lt = "lt",
        lte = "lte",
        in = "in",
        nin = "nin",
        contains = "contains",
        not_contains = "not_contains",
        exist = "exist"
    }
    export enum Operations {
        AND = "and",
        OR = "or"
    }
}
declare module "nodes/RuleNode" {
    import { BaseNode } from "nodes/BaseNode";
    import { Operations, Operators } from "constants/Operators";
    export class RuleNode extends BaseNode {
        private _true_refs;
        private _false_refs;
        true_node: string[];
        false_node: string[];
        constructor({ input, name, description }: {
            input: {
                operation: Operations;
                rules: {
                    variable: any;
                    value: any;
                    operator: Operators;
                }[];
            };
            name?: string;
            description?: string;
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
}
declare module "nodes/StartNode" {
    import { BaseNode } from "nodes/BaseNode";
    import { StartNodeTrigger } from "constants/Actions";
    export class StartNode extends BaseNode {
        constructor({ trigger_type, event, cron_expression, api_call_payload }: {
            trigger_type: StartNodeTrigger;
            event?: {
                application_slug: string;
                event_id: string;
            };
            cron_expression?: string;
            api_call_payload?: Record<string, any>;
        });
        get event(): any;
    }
}
declare module "nodes/SwitchNode" {
    import { BaseNode } from "nodes/BaseNode";
    export class SwitchNode extends BaseNode {
        private _cases;
        private _caseRefs;
        private _defaultCase;
        private _defaultRefs;
        constructor({ input, name, description }: {
            input: {
                switch_value: any;
            };
            name?: string;
            description?: string;
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
}
declare module "nodes/ExternalNode" {
    import { BaseNode } from "nodes/BaseNode";
    export class ExternalApp extends BaseNode {
        constructor({ application_slug, action, input, name, description }: {
            application_slug: string;
            action: string;
            input: any;
            name?: string;
            description?: string;
        });
    }
}
declare module "workflow" {
    import { StartNode } from "nodes/StartNode";
    export class Workflow {
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
            name: string | undefined;
            description: string | undefined;
            slug: any;
            action: string;
            input: any;
            next_node: any;
            parent_node: any;
        } | {
            true_nodes: string[];
            false_nodes: string[];
            next_node: string[];
            id: string;
            name: string | undefined;
            description: string | undefined;
            slug: any;
            action: string;
            input: any;
            parent_node: any;
        } | {
            cases: Record<string, string[]>;
            default_case: string[];
            next_node: string[];
            id: string;
            name: string | undefined;
            description: string | undefined;
            slug: any;
            action: string;
            input: any;
            parent_node: any;
        } | {
            entry_node: string | null;
            group_nodes: string[];
            id: string;
            name: string | undefined;
            description: string | undefined;
            slug: any;
            action: string;
            input: any;
            next_node: any;
            parent_node: any;
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
}
declare module "nodes/HttpNode" {
    import { BaseNode } from "nodes/BaseNode";
    export class HttpNode extends BaseNode {
        constructor({ input, name, description }: {
            input: {
                url: string;
                method: "GET" | "POST" | "PUT" | "DELETE";
                body?: Record<string, any>;
                query_params: Record<string, any>;
                headers: Record<string, any>;
            };
            name?: string;
            description?: string;
        });
    }
}
declare module "nodes/ResponseNode" {
    import { BaseNode } from "nodes/BaseNode";
    export class ResponseNode extends BaseNode {
        constructor({ input, name, description }: {
            input?: {
                data: any;
            };
            name?: string;
            description?: string;
        });
    }
}
declare module "nodes/CodeExecutorNode" {
    import { BaseNode } from "nodes/BaseNode";
    export class CodeExecutorNode extends BaseNode {
        private _codeFunction;
        constructor({ input, name, description }: {
            input: {
                parameters: Record<string, any>;
                function?: string | ((params: any) => void);
            };
            name?: string;
            description?: string;
        });
        get codeFunction(): string | ((params: any) => void);
    }
}
declare module "nodes/DelayNode" {
    import { BaseNode } from "nodes/BaseNode";
    import { DelayActions } from "constants/Actions";
    export class DelayNode extends BaseNode {
        constructor({ input, action, name, description }: {
            input: Record<string, any>;
            action: DelayActions;
            name?: string;
            description?: string;
        });
        validateInput(): void;
        private validateWaitForInput;
        private validateWaitTillInput;
    }
}
declare module "nodes/EmailNode" {
    import { BaseNode } from "nodes/BaseNode";
    export class EmailNode extends BaseNode {
        constructor({ input, name, description }: {
            input: Record<string, any>;
            name?: string;
            description?: string;
        });
        validateInput(): void;
    }
}
declare module "nodes/FileHandlerNode" {
    import { BaseNode } from "nodes/BaseNode";
    export class FileHandlerNode extends BaseNode {
        constructor({ input, name, description }: {
            input: Record<string, any>;
            name?: string;
            description?: string;
        });
        validateInput(): void;
    }
}
declare module "nodes/PDFNode" {
    import { BaseNode } from "nodes/BaseNode";
    import { PDFActions } from "constants/Actions";
    export class PDFNode extends BaseNode {
        constructor({ input, action, name, description }: {
            input: Record<string, any>;
            action: PDFActions;
            name?: string;
            description?: string;
        });
        validateInput(): void;
    }
}
declare module "nodes/DataMapperNode" {
    import { BaseNode } from "nodes/BaseNode";
    export class DataMapperNode extends BaseNode {
        constructor({ input, name, description }: {
            input: {
                input: string;
                mapping: Record<string, string>;
                direction: 'right' | 'left';
            };
            name?: string;
            description?: string;
        });
        validateInput(): void;
    }
}
declare module "nodes/DataRefNode" {
    import { BaseNode } from "nodes/BaseNode";
    import { DataRefActions } from "constants/Actions";
    export class DataRefNode extends BaseNode {
        constructor({ input, action, name, description }: {
            input: Record<string, any>;
            action: DataRefActions;
            name?: string;
            description?: string;
        });
        validateInput(): void;
    }
}
declare module "nodes/TableNode" {
    import { BaseNode } from "nodes/BaseNode";
    import { TableActions } from "constants/Actions";
    export class TableNode extends BaseNode {
        constructor({ input, action, name, description }: {
            input: Record<string, any>;
            action: TableActions;
            name?: string;
            description?: string;
        });
        validateInput(): void;
        private validateCreateTableInput;
        private validateDeleteTableInput;
        private validateGetTablesInput;
        private validateAddTableRecordInput;
        private validateSearchTableRecordsInput;
        private validateGetTableRecordsInput;
        private validateUpdateTableRecordInput;
        private validateDeleteTableRecordInput;
    }
}
declare module "nodes/CsvExcelNode" {
    import { BaseNode } from "nodes/BaseNode";
    import { CsvExcelActions } from "constants/Actions";
    export class CsvExcelNode extends BaseNode {
        constructor({ action, input, name, description }: {
            action: CsvExcelActions;
            input?: any;
            name?: string;
            description?: string;
        });
        validateInput(): void;
    }
}
declare module "nodes/SubflowNode" {
    import { Actions } from "constants/Actions";
    import { BaseNode } from "nodes/BaseNode";
    export class SubflowNode extends BaseNode {
        constructor({ input, action, name, description }: {
            input: Record<string, any>;
            action: Actions.no_action;
            name?: string;
            description?: string;
        });
        validateInput(): void;
    }
}
declare module "nodes/InternalFunctionNode" {
    import { Actions } from "constants/Actions";
    import { BaseNode } from "nodes/BaseNode";
    export class InternalFunctionNode extends BaseNode {
        constructor({ input, action, name, description }: {
            input: Record<string, any>;
            action: Actions.no_action;
            name?: string;
            description?: string;
        });
    }
}
declare module "cobalt-workflow-sdk" {
    import { Workflow } from "workflow";
    import { StartNode } from "nodes/StartNode";
    import { HttpNode } from "nodes/HttpNode";
    import { ResponseNode } from "nodes/ResponseNode";
    import { RuleNode } from "nodes/RuleNode";
    import { CodeExecutorNode } from "nodes/CodeExecutorNode";
    import { ExternalApp } from "nodes/ExternalNode";
    import { GroupNode } from "nodes/GroupNode";
    import { SwitchNode } from "nodes/SwitchNode";
    import { Operators, Operations } from "constants/Operators";
    import { Actions, StartNodeTrigger, GroupActions, CsvExcelActions, DataRefActions, FileHandlerActions, PDFActions, DelayActions, TableActions } from "constants/Actions";
    import { DelayNode } from "nodes/DelayNode";
    import { EmailNode } from "nodes/EmailNode";
    import { FileHandlerNode } from "nodes/FileHandlerNode";
    import { PDFNode } from "nodes/PDFNode";
    import { DataMapperNode } from "nodes/DataMapperNode";
    import { DataRefNode } from "nodes/DataRefNode";
    import { TableNode } from "nodes/TableNode";
    import { CsvExcelNode } from "nodes/CsvExcelNode";
    import { SubflowNode } from "nodes/SubflowNode";
    import { InternalFunctionNode } from "nodes/InternalFunctionNode";
    export { Workflow, StartNode, HttpNode, ResponseNode, RuleNode, CodeExecutorNode, ExternalApp, GroupNode, SwitchNode, Operators, Operations, Actions, StartNodeTrigger, GroupActions, CsvExcelActions, DataRefActions, DelayNode, EmailNode, FileHandlerNode, PDFNode, DataMapperNode, DataRefNode, TableNode, FileHandlerActions, PDFActions, DelayActions, CsvExcelNode, SubflowNode, TableActions, InternalFunctionNode };
}
