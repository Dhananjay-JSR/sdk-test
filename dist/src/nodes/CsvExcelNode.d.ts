import { BaseNode } from './BaseNode';
import { CsvExcelActions } from '../constants/Actions';
export declare class CsvExcelNode extends BaseNode {
    constructor({ action, input }: {
        action: CsvExcelActions;
        input: any;
    });
    validateInput(): void;
}
