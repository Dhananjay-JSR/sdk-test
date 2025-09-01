import { BaseNode } from './BaseNode';
export declare class CodeExecutorNode extends BaseNode {
    private _codeFunction;
    constructor({ parameters, function: codeFunction, name, description }: {
        parameters: Record<string, any>;
        function: string | ((params: any) => void);
        name?: string;
        description?: string;
    });
    get codeFunction(): string | ((params: any) => void);
}
