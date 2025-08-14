import { BaseNode } from './BaseNode';
export declare class CodeExecutorNode extends BaseNode {
    private _codeFunction;
    constructor({ parameters, function: codeFunction }: {
        parameters: Record<string, any>;
        function: string | ((params: any) => void);
    });
    get codeFunction(): string | ((params: any) => void);
}
