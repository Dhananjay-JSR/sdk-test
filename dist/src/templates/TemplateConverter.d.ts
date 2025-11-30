/**
 * Template Converter - Bidirectional conversion between JSON templates and TypeScript code
 */
import { ConversionContext, RoundTripResult } from './TemplateTypes';
/**
 * Convert JSON template strings to TypeScript code
 * This is used by WorkflowCodeGenerator when generating code from JSON
 */
export declare class TemplateConverter {
    /**
     * Convert a JSON template value to TypeScript code
     * Handles strings, objects, arrays recursively
     */
    static jsonToCode(value: any, context?: ConversionContext): any;
    /**
     * Convert a single template string to TypeScript code
     * Core conversion logic
     */
    private static convertTemplateString;
    /**
     * Check if a string is a pure variable reference (no literal text)
     */
    private static isPureVariableReference;
    /**
     * Fix JavaScript syntax issues in converted templates
     */
    private static fixJavaScriptSyntax;
    /**
     * Convert TypeScript code back to JSON template strings
     * This is used for round-trip validation
     */
    static codeToJSON(code: string, context?: ConversionContext): string;
    /**
     * Validate round-trip conversion
     * JSON → Code → JSON should produce identical result
     */
    static validateRoundTrip(originalJSON: any, context?: ConversionContext): RoundTripResult;
    /**
     * Deep equality check for round-trip validation
     */
    private static deepEqual;
}
