import { BaseNode } from "./BaseNode";
import { TableActions } from "../constants/Actions";
export declare class TableNode extends BaseNode {
    constructor({ input, action }: {
        input: Record<string, any>;
        action: TableActions;
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
