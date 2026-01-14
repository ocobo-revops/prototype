# Development Guide

**Project:** Ocobo Revenue Operations Agency
**Type:** Web Application (React + TypeScript)
**Generated:** 2026-01-12

## Overview

This guide provides instructions for setting up, developing, and building the Ocobo application.

## Prerequisites

### Required Software
- **Node.js** - JavaScript runtime (version not specified, recommend latest LTS)
- **npm** - Package manager (comes with Node.js)

### Required Accounts/Keys
- **Google Gemini API Key** - For AI features integration
  - Obtain from: Google AI Studio
  - Required for: AI-powered functionality

## Installation

### 1. Clone Repository
```bash
git clone <repository-url>
cd prototype
```

### 2. Install Dependencies
```bash
npm install
```

**Installed Packages:**
- `react@19.2.3` - Frontend framework
- `react-dom@19.2.3` - React DOM rendering
- `react-router@7.11.0` - Routing library
- `react-router-dom@7.10.1` - React Router DOM bindings
- `lucide-react@0.561.0` - Icon library
- `typescript@5.8.2` - TypeScript compiler
- `vite@6.2.0` - Build tool
- `@vitejs/plugin-react@5.0.0` - Vite React plugin
- `@types/node@22.14.0` - Node.js type definitions

### 3. Environment Setup

Create a `.env.local` file in the project root:

```bash
GEMINI_API_KEY=your_api_key_here
```

**Environment Variables:**
- `GEMINI_API_KEY` - Google Gemini API authentication key

**Security Note:** Never commit `.env.local` to version control (already in `.gitignore`)

## Development Workflow

### Start Development Server

```bash
npm run dev
```

**Dev Server Configuration:**
- **URL:** `http://localhost:3000`
- **Host:** `0.0.0.0` (accessible from network)
- **Hot Module Replacement (HMR):** Enabled
- **Fast Refresh:** React Fast Refresh enabled

**What happens:**
- Vite dev server starts on port 3000
- Application auto-reloads on file changes
- TypeScript compilation happens in real-time
- Source maps enabled for debugging

### Build for Production

```bash
npm run build
```

**Build Process:**
- TypeScript compilation
- React optimization and minification
- Asset bundling and optimization
- Output: `dist/` directory

### Preview Production Build

```bash
npm run preview
```

**Purpose:** Test production build locally before deployment

## Project Structure

### Source Code Organization

```
src/
├── components/     # Reusable UI components
├── pages/         # Route-based page components
├── types.ts       # TypeScript type definitions
├── App.tsx        # Root application component
└── index.tsx      # Application entry point
```

### Development Files
- `vite.config.ts` - Build configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

## Development Commands

### Available Scripts

| Command | Purpose | Usage |
|---------|---------|-------|
| `npm run dev` | Start dev server | Development |
| `npm run build` | Build for production | Deployment prep |
| `npm run preview` | Preview production build | Testing |

## TypeScript Configuration

### Compiler Options
- **Target:** ES2022
- **Module:** ESNext
- **JSX:** react-jsx (React 17+ transform)
- **Module Resolution:** bundler
- **Experimental Decorators:** Enabled
- **Path Aliases:** `@/*` → project root

### Type Checking
```bash
# TypeScript will check types during:
- Development (Vite dev server)
- Build process (npm run build)
```

## Code Organization Guidelines

### Component Structure
```typescript
// Pattern for functional components
import { FC } from 'react';
import { ComponentProps } from './types';

export const ComponentName: FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Component logic
  return (
    // JSX
  );
};
```

### Type Definitions
- Define shared types in `types.ts`
- Use interfaces for component props
- Export types for reusability

### Styling Approach
- **Primary:** Tailwind CSS utility classes
- **Custom Theme:** Configured in `index.html`
- **Colors:** Ocobo brand palette (dark, yellow, mint, sky, coral)
- **Fonts:** Bermia (display), Bornia (body)

## API Integration

### Environment-Based Configuration
```typescript
// Access API key in code:
const apiKey = process.env.GEMINI_API_KEY;
```

### API Client Pattern
- HTTP client: Fetch API (browser native)
- Request/Response typing via TypeScript interfaces
- Error handling with try-catch blocks

## Common Development Tasks

### Adding a New Page
1. Create component file in `/pages`
   ```typescript
   // pages/NewPage.tsx
   export const NewPage = () => {
     return <div>New Page Content</div>;
   };
   ```

2. Add route in `App.tsx` (React Router configuration)

### Creating a Reusable Component
1. Create component file in `/components`
2. Define TypeScript interface for props
3. Export component for use in pages

### Adding New Types
1. Open `types.ts`
2. Add interface or enum
3. Export for use across application

### Working with Environment Variables
1. Add variable to `.env.local`
2. Reference in `vite.config.ts` if needed
3. Access via `process.env.VARIABLE_NAME`

## Debugging

### Browser DevTools
- React DevTools extension recommended
- Source maps enabled in development
- Console logging for debugging

### TypeScript Errors
- Check terminal output during `npm run dev`
- IDE integration (VS Code recommended)
- Type errors shown in editor

## Performance Tips

### Development
- Vite provides fast HMR
- React Fast Refresh preserves component state
- TypeScript compilation is incremental

### Production
- Code splitting via React Router
- Asset optimization by Vite
- Tree shaking eliminates unused code

## Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
# Change port in vite.config.ts:
server: { port: 3001 }
```

**API key not working:**
- Verify `.env.local` exists
- Check variable name matches config
- Restart dev server after changing `.env.local`

**TypeScript errors:**
- Run `npm install` to ensure all types are installed
- Check `tsconfig.json` for correct configuration
- Clear cache and restart: `rm -rf node_modules && npm install`

## IDE Setup

### Recommended: Visual Studio Code

**Extensions:**
- ESLint
- Prettier
- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense
- React Developer Tools

**Settings:**
```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.formatOnSave": true
}
```

## Testing Strategy

### Current State
- No test framework configured (quick scan finding)
- Recommended: Vitest (pairs well with Vite)

### Future Implementation
Consider adding:
- Unit tests for components
- Integration tests for pages
- E2E tests for critical flows

## Deployment Preparation

### Pre-Deployment Checklist
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`
- [ ] Verify environment variables for production
- [ ] Check API keys are configured for production environment
- [ ] Review build output in `dist/`

### Build Output
- **Directory:** `dist/`
- **Contents:** Optimized HTML, CSS, JS, and assets
- **Ready for:** Static hosting (Vercel, Netlify, etc.)

## External Resources

### Documentation Links
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com/docs)

### API Documentation
- [Google Gemini API](https://ai.google.dev/docs)

## Getting Help

- Check project README.md
- Review generated documentation in `/docs`
- Consult official framework documentation

## Notes

- This guide is generated from pattern analysis (quick scan)
- For detailed workflow specifics, consult team documentation
- Update this guide as development practices evolve
