# Data Models

**Project:** Ocobo Revenue Operations Agency
**Type:** Web Application (React + TypeScript)
**Generated:** 2026-01-12
**Scan Level:** Quick (pattern-based)

## Overview

This document catalogs the data models and TypeScript interfaces discovered in the project.

## Type Definitions Location

**Primary Types File:** `types.ts`

## Identified Data Models

### ThemeColor (Enum)
- **Location:** `types.ts:1`
- **Type:** Enumeration
- **Purpose:** Theme color definitions for the application
- **Usage:** Likely used for branding and UI theming

### NavItem (Interface)
- **Location:** `types.ts:9`
- **Type:** Interface
- **Purpose:** Navigation item structure
- **Usage:** Defines navigation menu items for Navbar component
- **Related Components:** Navbar

### ServiceItem (Interface)
- **Location:** `types.ts:14`
- **Type:** Interface
- **Purpose:** Service data structure
- **Usage:** Represents individual services displayed in the application
- **Related Components:** ServiceCard, Services page

### StatItem (Interface)
- **Location:** `types.ts:21`
- **Type:** Interface
- **Purpose:** Statistics/metrics data structure
- **Usage:** Likely for displaying company statistics or metrics

## Data Architecture

### Frontend Data Management
- **Type System:** TypeScript for compile-time type safety
- **Data Structures:** Interface-based definitions
- **Enumerations:** Used for fixed value sets (ThemeColor)

### Integration Points
- **API Integration:** Google Gemini API
  - Configured via environment variable: `GEMINI_API_KEY`
  - Defined in: `vite.config.ts`

## Type Safety Approach

1. **Centralized Types:** All shared types defined in `types.ts`
2. **Component Props:** TypeScript interfaces for component properties
3. **API Responses:** Typed interfaces for external API responses

## Data Flow Patterns

```
User Input → Components → Type-Safe Props → API Calls → Typed Responses
```

## External Data Sources

### Google Gemini API
- **Purpose:** AI integration
- **Configuration:** Environment-based API key
- **Integration Type:** REST API calls

## Notes

- This is a pattern-based quick scan
- For detailed field definitions and relationships, perform a deep scan
- Type definitions follow TypeScript best practices
- Centralized type management in single file for maintainability

## Recommendations for Deep Scan

When performing a deep scan, analyze:
1. Complete field definitions for each interface
2. Optional vs required fields
3. Nested object structures
4. Array types and collections
5. Type unions and intersections
6. Generic types usage
7. API response type mapping
8. Data validation patterns
