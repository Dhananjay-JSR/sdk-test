/**
 * Template Registry - Central source of truth for all template patterns
 * Defines bidirectional conversion rules between JSON templates and TypeScript code
 */
import { TemplatePattern } from './TemplateTypes';
/**
 * Central registry of all template patterns
 * Order matters: more specific patterns should come first
 */
export declare const TEMPLATE_PATTERNS: TemplatePattern[];
/**
 * Get pattern by name (for debugging)
 */
export declare function getPatternByName(name: string): TemplatePattern | undefined;
/**
 * Get pattern by proxy marker
 */
export declare function getPatternByMarker(marker: string): TemplatePattern | undefined;
