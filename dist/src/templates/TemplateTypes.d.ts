/**
 * Template Types - Type definitions for the template system
 * Shared between SDK and CodeGenerator for type safety
 */
/**
 * Proxy marker types used to identify template references
 */
export type ProxyMarker = '__isNodeRef' | '__isEventRef' | '__isConfigRef' | '__isEnvRef' | '__isInstanceRef' | '__isTemplateRef';
/**
 * Reference object created by SDK proxies
 */
export interface NodeRef {
    __isNodeRef: true;
    nodeId: string;
    path: string[];
}
export interface EventRef {
    __isEventRef: true;
    path: string[];
}
export interface ConfigRef {
    __isConfigRef: true;
    configType: 'application' | 'workflow';
    path: string[];
}
export interface EnvRef {
    __isEnvRef: true;
    envType: 'config_store' | 'workflow_store' | 'linked_account' | 'global_store';
    path: string[];
}
export interface InstanceRef {
    __isInstanceRef: true;
    path: string[];
}
export interface TemplateRef {
    __isTemplateRef: true;
    template: string;
}
export type AnyRef = NodeRef | EventRef | ConfigRef | EnvRef | InstanceRef | TemplateRef;
/**
 * Conversion result format
 */
export type ConversionFormat = 'variable' | 'literal' | 'string';
export interface ConversionResult {
    format: ConversionFormat;
    value: string;
}
/**
 * Template Pattern definition
 */
export interface TemplatePattern {
    /** Pattern name for debugging */
    name: string;
    /** Description of what this pattern handles */
    description: string;
    /** Proxy marker type */
    proxyMarker: ProxyMarker;
    /** Convert SDK ref object to JSON template string */
    toJSON: (ref: AnyRef) => string;
    /** RegExp to match JSON templates */
    jsonPattern: RegExp;
    /** Convert JSON template to TypeScript code */
    toCode: (match: RegExpMatchArray, context?: ConversionContext) => ConversionResult;
    /** RegExp to match TypeScript code */
    codePattern: RegExp;
    /** Convert TypeScript code back to JSON template */
    fromCode: (match: RegExpMatchArray, context?: ConversionContext) => string;
}
/**
 * Conversion context for handling edge cases
 */
export interface ConversionContext {
    /** Map of all nodes in the workflow */
    allNodes?: Map<string, any>;
    /** Whether we're inside a GroupNode callback */
    inGroupCallback?: boolean;
    /** Current GroupNode ID if in callback */
    groupNodeId?: string;
    /** Whether to preserve unresolvable templates */
    preserveUnresolved?: boolean;
}
/**
 * Round-trip validation result
 */
export interface RoundTripResult {
    success: boolean;
    errors: string[];
    original: any;
    generated: string;
    compiled: any;
}
