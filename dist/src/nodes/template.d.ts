import type { AnyRef } from '../templates/TemplateTypes';
/**
 * Resolve proxy objects to template strings using the Template Registry
 * This is the core SDK function that converts node/event/config refs to {{}} templates
 */
export declare function resolveTemplates(obj: any): any;
/**
 * Reverse operation: Convert template strings back to reference objects
 * Used for round-trip validation and code parsing
 */
export declare function parseTemplatesToRefs(template: string): AnyRef | string;
