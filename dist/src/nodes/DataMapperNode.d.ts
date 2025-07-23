import { BaseNode } from './BaseNode';
export declare class DataMapperNode extends BaseNode {
    constructor({ input, mapping, direction }: {
        input: string;
        mapping: Record<string, string>;
        direction: 'right' | 'left';
    });
    validateInput(): void;
}
