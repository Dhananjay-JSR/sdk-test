import { BaseNode } from './BaseNode';
export declare class CodeExecutorNode extends BaseNode {
    private _codeFunction;
    constructor({ parameters, function: codeFunction }: {
        parameters: Record<string, any>;
        function: (params: any) => any;
    });
    get codeFunction(): (params: any) => any;
}
