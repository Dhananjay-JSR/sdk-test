import { BaseNode } from './BaseNode';
export declare class CodeExecutorNode extends BaseNode {
    private _codeFunction;
    constructor({ input, name, description, id }: {
        input: {
            parameters: Record<string, any>;
            function?: string | ((params: any) => void);
        };
        name?: string;
        description?: string;
        id?: string;
    });
    get codeFunction(): string | ((params: any) => void);
}
