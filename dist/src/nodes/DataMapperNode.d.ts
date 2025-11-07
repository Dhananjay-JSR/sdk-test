import { BaseNode } from './BaseNode';
export declare class DataMapperNode extends BaseNode {
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
