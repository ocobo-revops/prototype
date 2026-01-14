# Architecture Document

**Project:** Ocobo Revenue Operations Agency
**Type:** Web Application (React SPA)
**Architecture Pattern:** Component-Based Single Page Application
**Generated:** 2026-01-12
**Scan Level:** Quick (pattern-based)

## Executive Summary

Ocobo is a modern single-page web application built with React 19 and TypeScript, designed to showcase revenue operations services. The application follows a component-based architecture with clear separation between reusable UI components and route-specific pages. It integrates with Google's Gemini AI API for intelligent features and uses Vite as the build tool for optimal development experience.

### Key Characteristics
- **Type:** Brownfield web application prototype
- **Architecture:** SPA with client-side routing
- **Language:** TypeScript 5.8.2
- **Framework:** React 19.2.3
- **Build Tool:** Vite 6.2.0
- **Styling:** Tailwind CSS with custom brand design system

---

## Technology Stack

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Frontend Framework** | React | 19.2.3 | UI component framework |
| **Language** | TypeScript | 5.8.2 | Type-safe JavaScript |
| **Build Tool** | Vite | 6.2.0 | Development server & bundler |
| **Routing** | React Router | 7.10.1/7.11.0 | Client-side navigation |
| **Styling** | Tailwind CSS | Latest (CDN) | Utility-first CSS |
| **Icons** | Lucide React | 0.561.0 | Icon library |
| **AI Integration** | Google Gemini API | - | AI-powered features |
| **Runtime** | Node.js | Latest LTS (recommended) | Development environment |

### Technology Decision Rationale

**React 19:**
- Latest stable release with modern hooks API
- Excellent performance and developer experience
- Large ecosystem and community support

**TypeScript:**
- Static typing for early error detection
- Better IDE support and autocomplete
- Improved code maintainability

**Vite:**
- Lightning-fast HMR (Hot Module Replacement)
- Optimized build output
- Native ESM support

**Tailwind CSS:**
- Rapid UI development
- Consistent design system
- Small production bundle (purged unused styles)

---

## Architecture Pattern

### Single Page Application (SPA)

```
┌─────────────────────────────────────────────┐
│         Browser (Single HTML Page)          │
└──────────────────┬──────────────────────────┘
                   │
        ┌──────────▼──────────┐
        │    index.html       │
        │  (Bootstrap + CDN)  │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │    index.tsx        │
        │  (Entry Point)      │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │     App.tsx         │
        │ (Router + Layout)   │
        └──────────┬──────────┘
                   │
     ┌─────────────┴─────────────┐
     │                           │
┌────▼─────┐             ┌──────▼──────┐
│  Pages   │             │ Components  │
│ (Routes) │◄────────────┤ (Reusable)  │
└──────────┘             └─────────────┘
```

### Component Architecture

**Hierarchical Structure:**
1. **Entry Point** (`index.tsx`) - Application bootstrap
2. **Root Component** (`App.tsx`) - Router configuration & layout
3. **Page Components** (`pages/*`) - Route-specific views
4. **Reusable Components** (`components/*`) - Shared UI elements

---

## Data Architecture

### Type System

**Centralized Type Definitions:** `types.ts`

**Identified Models:**
- `ThemeColor` (Enum) - Brand color enumeration
- `NavItem` (Interface) - Navigation structure
- `ServiceItem` (Interface) - Service data model
- `StatItem` (Interface) - Statistics/metrics model

### Data Flow

```
User Interaction
       ↓
  React Component
       ↓
  useState/useContext
       ↓
  State Update
       ↓
  Re-render (React)
       ↓
  Updated UI
```

### State Management Strategy

**Local State:**
- React `useState` for component-level state
- Form inputs, UI toggles, local data

**Shared State:**
- React Context API (inferred pattern)
- Navigation state, theme configuration

**No Global State Library:**
- No Redux/MobX detected
- React built-in state management sufficient for current scope

---

## API Design

### External API Integration

**Google Gemini AI:**
- **Type:** REST API
- **Authentication:** API Key (environment variable)
- **Configuration:** `vite.config.ts`
- **Environment Variable:** `GEMINI_API_KEY`

### API Call Pattern

```typescript
// Expected pattern (quick scan inference)
const response = await fetch(geminiEndpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`
  },
  body: JSON.stringify(requestData)
});

const data = await response.json();
```

### Integration Points

1. **AI Features** - Gemini API for intelligent functionality
2. **Font Loading** - External CDN (`ocobo.co/fonts`)
3. **Styling CDN** - Tailwind CSS
4. **Font CDN** - Google Fonts (Inter fallback)

---

## Component Structure

### Component Organization

```
components/
├── Button.tsx           # Generic button
├── Footer.tsx          # Site footer
├── Navbar.tsx          # Navigation header
├── NewsletterWidget.tsx # Email subscription
└── ServiceCard.tsx     # Service display card

pages/
├── Home.tsx            # Landing page ⭐
├── About.tsx           # Company info
├── Contact.tsx         # Contact form
├── Services.tsx        # Services listing
├── Method.tsx          # Methodology
├── Partners.tsx        # Partners page
├── Studio.tsx          # Studio services
├── Resources.tsx       # Resources
├── Stories.tsx         # Case studies
├── Jobs.tsx            # Careers
├── Podcast.tsx         # Podcast
├── ArticleDetail.tsx   # Article view
├── JobDetail.tsx       # Job details
├── StoryDetail.tsx     # Story details
└── WebinarDetail.tsx   # Webinar details
```

### Component Categories

**Layout Components (2):**
- Navbar - Site navigation
- Footer - Site footer

**UI Elements (3):**
- Button - Interactive element
- ServiceCard - Content card
- NewsletterWidget - Form widget

**Page Components (15):**
- 11 main pages
- 4 detail pages

---

## Source Tree

**See:** [source-tree-analysis.md](./source-tree-analysis.md) for detailed annotated tree.

**Critical Directories:**
- `/components` - Reusable UI components
- `/pages` - Route-based page components
- `/fonts` - Custom typography (Bermia, Bornia)
- `/docs` - Generated documentation

**Entry Points:**
- `index.tsx` - Application bootstrap ⭐
- `App.tsx` - Root component ⭐
- `index.html` - HTML entry ⭐

---

## Development Workflow

### Local Development

**Start Development:**
```bash
npm install
# Set GEMINI_API_KEY in .env.local
npm run dev
```

**Dev Server:**
- URL: `http://localhost:3000`
- HMR: Enabled
- Host: `0.0.0.0` (network accessible)

### Build Process

**Production Build:**
```bash
npm run build    # Creates dist/
npm run preview  # Test production build
```

**Build Output:**
- Optimized React code
- Minified CSS
- Bundled assets
- Ready for static hosting

### Environment Configuration

**Required Variables:**
- `GEMINI_API_KEY` - AI API authentication

**Configuration Files:**
- `.env.local` - Environment variables (not in git)
- `vite.config.ts` - Build config, API key injection

---

## Testing Strategy

### Current State
- **Unit Tests:** Not configured ❌
- **Integration Tests:** Not configured ❌
- **E2E Tests:** Not configured ❌

### Recommendations
- **Framework:** Vitest (pairs with Vite)
- **Component Testing:** React Testing Library
- **E2E:** Playwright or Cypress

### Test Locations (Future)
```
__tests__/          # Unit tests
components/__tests__/  # Component tests
e2e/               # End-to-end tests
```

---

## Deployment Architecture

### Static Hosting

**Recommended Platforms:**
- Vercel (optimal for Vite/React)
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

### Deployment Flow

```
1. Code commit to main branch
2. CI/CD triggers build (npm run build)
3. dist/ uploaded to hosting platform
4. CDN distributes globally
5. Environment variables configured in platform
```

### Environment Variables for Production

```
GEMINI_API_KEY=<production-key>
```

**Security Note:** API key exposed client-side (typical for client apps). Consider API proxy for sensitive operations.

---

## Design System

### Custom Brand: Ocobo

**Color Palette:**
- **Dark:** #212323 (primary text)
- **Yellow:** #F1CF25 (accent)
- **Mint:** #9ADBBA (secondary)
- **Sky:** #99D1DF (tertiary)
- **Coral:** #FE9C87 (highlight)
- **Gray:** #F5F5F5 (backgrounds)

**Typography:**
- **Display Font:** Bermia (Black 900) - Headings
- **Body Font:** Bornia (Regular 400, Bold 700) - Content
- **Fallback:** Inter (Google Fonts), system sans-serif

**Styling Framework:**
- Tailwind CSS with custom theme
- Configured inline in `index.html`
- Utility-first approach

---

## Security Considerations

### Current Implementation

✅ **Good Practices:**
- Environment variables for secrets
- `.env.local` in `.gitignore`
- API keys not hardcoded

⚠️ **Considerations:**
- Client-side API key exposure
- No authentication layer detected
- No rate limiting visible

### Recommendations

1. **API Proxy:** Consider backend proxy for sensitive API calls
2. **Rate Limiting:** Implement on API endpoints
3. **CORS Configuration:** Ensure proper CORS headers
4. **Content Security Policy:** Add CSP headers for XSS protection

---

## Performance Optimizations

### Current Optimizations

**Development:**
- ✅ Fast HMR via Vite
- ✅ TypeScript incremental compilation
- ✅ React Fast Refresh

**Production:**
- ✅ Code minification (Vite)
- ✅ Tree shaking
- ✅ Asset optimization
- ✅ Font preloading

### Future Optimizations

**Potential Improvements:**
- Lazy loading routes (`React.lazy()`)
- Image optimization (WebP, lazy load)
- Code splitting strategies
- Service worker for offline support

---

## Scalability Considerations

### Current Architecture Assessment

**Strengths:**
- Component-based design allows easy additions
- Type-safe codebase reduces errors
- Modern build tool scales well

**Limitations:**
- No state management library (may need Redux/Zustand if complexity grows)
- No test coverage (critical for scaling)
- Client-side API calls (may need backend as user base grows)

### Scaling Recommendations

**Short-term (< 50 components):**
- Current architecture sufficient
- Add testing framework
- Implement code splitting

**Medium-term (50-200 components):**
- Consider state management library (Zustand/Redux Toolkit)
- Implement comprehensive testing
- Add monitoring (Sentry, LogRocket)

**Long-term (> 200 components):**
- Evaluate monorepo structure
- Consider Next.js migration for SSR/SSG
- Implement backend API layer

---

## Maintenance & Operations

### Code Quality

**Current Tools:**
- TypeScript for type checking
- ESLint (likely configured, not visible in quick scan)
- Prettier (recommended)

### Monitoring

**Recommended:**
- Error tracking (Sentry)
- Analytics (Google Analytics, Plausible)
- Performance monitoring (Web Vitals)

### Documentation

**Generated Docs (this scan):**
- Architecture overview (this file)
- Component inventory
- Data models
- API architecture
- Development guide
- Source tree analysis

---

## Appendices

### Related Documentation

- [Component Inventory](./component-inventory.md) - All UI components
- [Data Models](./data-models.md) - TypeScript interfaces
- [API Architecture](./api-architecture.md) - API integration details
- [Development Guide](./development-guide.md) - Setup and workflow
- [Source Tree](./source-tree-analysis.md) - Directory structure

### External References

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://typescriptlang.org/docs)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Google Gemini API](https://ai.google.dev)

---

## Document Metadata

- **Document Version:** 1.0
- **Generated By:** BMad Document Project Workflow
- **Scan Type:** Quick (pattern-based, no deep file analysis)
- **Last Updated:** 2026-01-12
- **Next Review:** Perform deep scan for detailed implementation analysis

---

*This architecture document was auto-generated from codebase analysis. For implementation details, perform a deep scan or consult source code directly.*
