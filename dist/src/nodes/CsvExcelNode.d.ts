import { BaseNode } from './BaseNode';
import { CsvExcelActions } from '../constants/Actions';
export declare class CsvExcelNode extends BaseNode {
    constructor({ action, input, name, description, id }: {
        action: CsvExcelActions;
        input?: any;
        name?: string;
        description?: string;
        id?: string;
    });
    validateInput(): void;
}
