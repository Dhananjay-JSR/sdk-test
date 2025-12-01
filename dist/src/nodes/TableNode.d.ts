import { BaseNode } from "./BaseNode";
import { TableActions } from "../constants/Actions";
export declare class TableNode extends BaseNode {
    constructor({ input, action, name, description, id }: {
        input: Record<string, any>;
        action: TableActions;
        name?: string;
        description?: string;
        id?: string;
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
