import { BaseNode } from './BaseNode';
/**
 * TransformNode - Transform JSON data using JSONata expressions
 *
 * JSONata is a query and transformation language for JSON data.
 * See: https://jsonata.org/
 *
 * @example
 * // Extract specific fields
 * const transform = new TransformNode({
 *   input: "{{previousNode.body}}",
 *   query: "{ \"name\": firstName & \" \" & lastName, \"email\": email }"
 * });
 *
 * @example
 * // Filter and transform array
 * const transform = new TransformNode({
 *   input: "{{node2.body.orders}}",
 *   query: "orders[status = 'active'].{ \"id\": id, \"total\": price * quantity }"
 * });
 *
 * @example
 * // Aggregate data
 * const transform = new TransformNode({
 *   input: "{{node3.body.items}}",
 *   query: "$sum(items.price)"
 * });
 */
export declare class TransformNode extends BaseNode {
    constructor({ input, query, name, description, id }: {
        input: string | Record<string, any>;
        query: string;
        name?: string;
        description?: string;
        id?: string;
    });
    validateInput(): void;
}
