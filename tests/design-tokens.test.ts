/**
 * Design Tokens Test Suite
 * 
 * Validates the primitive→semantic color reference chain works correctly.
 * This test ensures that:
 * 1. All primitive CSS variables are defined
 * 2. All semantic CSS variables reference primitives
 * 3. Tailwind config references CSS variables (not hardcoded hex)
 */

import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'fs';
import path from 'path';

// Read source files
const indexCssPath = path.resolve(__dirname, '../index.css');
const tailwindConfigPath = path.resolve(__dirname, '../tailwind.config.js');

let indexCssContent: string;
let tailwindConfigContent: string;

beforeAll(() => {
  indexCssContent = fs.readFileSync(indexCssPath, 'utf-8');
  tailwindConfigContent = fs.readFileSync(tailwindConfigPath, 'utf-8');
});

describe('Design Tokens - CSS Custom Properties', () => {
  describe('Primitive Color Tokens', () => {
    const primitiveTokens = [
      '--color-ocobo-dark',
      '--color-ocobo-yellow',
      '--color-ocobo-yellow-light',
      '--color-ocobo-mint',
      '--color-ocobo-mint-light',
      '--color-ocobo-sky',
      '--color-ocobo-sky-light',
      '--color-ocobo-coral',
      '--color-ocobo-coral-light',
      '--color-ocobo-white',
      '--color-ocobo-black',
      '--color-ocobo-gray-50',
      '--color-ocobo-gray-100',
      '--color-ocobo-gray-200',
      '--color-ocobo-gray-300',
      '--color-ocobo-gray-400',
      '--color-ocobo-gray-500',
      '--color-ocobo-gray-600',
      '--color-ocobo-gray-700',
      '--color-ocobo-gray-800',
      '--color-ocobo-gray-900',
    ];

    it.each(primitiveTokens)('should define %s in index.css', (token) => {
      const regex = new RegExp(`${token}:\\s*#[0-9A-Fa-f]{6}`);
      expect(indexCssContent).toMatch(regex);
    });
  });

  describe('Semantic Color Tokens', () => {
    const semanticTokens = [
      { name: '--color-semantic-primary', ref: '--color-ocobo-yellow' },
      { name: '--color-semantic-primary-light', ref: '--color-ocobo-yellow-light' },
      { name: '--color-semantic-accent', ref: '--color-ocobo-coral' },
      { name: '--color-semantic-success', ref: '--color-ocobo-mint' },
      { name: '--color-semantic-info', ref: '--color-ocobo-sky' },
      { name: '--color-semantic-surface', ref: '--color-ocobo-gray-50' },
      { name: '--color-semantic-background', ref: '--color-ocobo-white' },
      { name: '--color-semantic-text', ref: '--color-ocobo-dark' },
      { name: '--color-semantic-text-muted', ref: '--color-ocobo-gray-600' },
      { name: '--color-semantic-border', ref: '--color-ocobo-gray-200' },
    ];

    it.each(semanticTokens)(
      'should define $name referencing $ref',
      ({ name, ref }) => {
        const regex = new RegExp(`${name}:\\s*var\\(${ref}\\)`);
        expect(indexCssContent).toMatch(regex);
      }
    );
  });
});

describe('Design Tokens - Tailwind Configuration', () => {
  describe('Primitive tokens reference CSS variables', () => {
    it('should not contain hardcoded hex values for ocobo colors', () => {
      // Extract the ocobo color section
      const ocoboMatch = tailwindConfigContent.match(/ocobo:\s*\{[\s\S]*?\n\s{8}\}/);
      expect(ocoboMatch).not.toBeNull();
      
      const ocoboSection = ocoboMatch![0];
      // Should NOT contain any hex values like #XXXXXX
      const hexPattern = /#[0-9A-Fa-f]{6}/g;
      const hexMatches = ocoboSection.match(hexPattern);
      
      expect(hexMatches).toBeNull();
    });

    it('should reference var(--color-ocobo-*) for primitive colors', () => {
      expect(tailwindConfigContent).toContain("dark: 'var(--color-ocobo-dark)'");
      expect(tailwindConfigContent).toContain("DEFAULT: 'var(--color-ocobo-yellow)'");
      expect(tailwindConfigContent).toContain("white: 'var(--color-ocobo-white)'");
    });
  });

  describe('Semantic tokens reference CSS variables', () => {
    it('should reference var(--color-semantic-*) for semantic colors', () => {
      expect(tailwindConfigContent).toContain("primary: 'var(--color-semantic-primary)'");
      expect(tailwindConfigContent).toContain("accent: 'var(--color-semantic-accent)'");
      expect(tailwindConfigContent).toContain("text: 'var(--color-semantic-text)'");
      expect(tailwindConfigContent).toContain("border: 'var(--color-semantic-border)'");
    });
  });
});

describe('Design Tokens - Reference Chain Integrity', () => {
  it('should have single source of truth (hex values only in index.css)', () => {
    // Count hex values in each file
    const cssHexCount = (indexCssContent.match(/#[0-9A-Fa-f]{6}/g) || []).length;
    
    // Tailwind config should have NO hex values in color definitions
    // (only in shadows which is acceptable)
    const tailwindColorSection = tailwindConfigContent.match(/colors:\s*\{[\s\S]*?semantic:\s*\{[\s\S]*?\}\s*\}/);
    const tailwindColorHexCount = tailwindColorSection 
      ? (tailwindColorSection[0].match(/#[0-9A-Fa-f]{6}/g) || []).length 
      : 0;

    expect(cssHexCount).toBeGreaterThan(0); // CSS should have hex values
    expect(tailwindColorHexCount).toBe(0); // Tailwind colors should NOT have hex values
  });
});
