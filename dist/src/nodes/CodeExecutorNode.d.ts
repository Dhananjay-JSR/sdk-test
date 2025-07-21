import { BaseNode } from './BaseNode';
export declare class CodeExecutorNode extends BaseNode {
    private _codeFunction;
    constructor({ inputs, code_string }: {
        inputs: Record<string, any>;
        code_string: (params: any) => any;
    });
    get codeFunction(): (params: any) => any;
}
