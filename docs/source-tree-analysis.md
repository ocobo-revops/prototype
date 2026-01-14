# Source Tree Analysis

**Project:** Ocobo Revenue Operations Agency
**Type:** Web Application (React + TypeScript)
**Generated:** 2026-01-12
**Scan Level:** Quick (pattern-based)

## Overview

This document provides an annotated directory tree showing the project structure and organization.

## Project Root Structure

```
prototype/
├── components/              # Reusable UI Components
│   ├── Button.tsx          # Generic button component
│   ├── Footer.tsx          # Site footer with links
│   ├── Navbar.tsx          # Main navigation header
│   ├── NewsletterWidget.tsx # Newsletter subscription form
│   └── ServiceCard.tsx     # Service display card component
│
├── pages/                  # Application Pages/Routes
│   ├── Home.tsx           # ⭐ Landing page (entry point)
│   ├── About.tsx          # About company page
│   ├── Contact.tsx        # Contact form page
│   ├── Services.tsx       # Services overview
│   ├── Method.tsx         # Methodology page
│   ├── Partners.tsx       # Partners information
│   ├── Studio.tsx         # Studio services page
│   ├── Resources.tsx      # Resource library
│   ├── Stories.tsx        # Case studies listing
│   ├── Jobs.tsx           # Career opportunities
│   ├── Podcast.tsx        # Podcast episodes
│   ├── ArticleDetail.tsx  # Individual article view
│   ├── JobDetail.tsx      # Job posting details
│   ├── StoryDetail.tsx    # Story/case study details
│   └── WebinarDetail.tsx  # Webinar information page
│
├── fonts/                  # Custom Typography Assets
│   ├── bermia/            # Bermia display font
│   │   └── Bermia-Black.woff
│   └── bornia/            # Bornia sans-serif font
│       ├── Bornia-Regular.otf
│       └── Bornia-Bold.otf
│
├── docs/                   # 📚 Generated Documentation
│   ├── index.md           # Master documentation index
│   ├── project-overview.md
│   ├── architecture.md
│   ├── component-inventory.md
│   ├── data-models.md
│   ├── api-architecture.md
│   ├── development-guide.md
│   ├── source-tree-analysis.md
│   └── project-scan-report.json
│
├── _bmad/                  # 🔧 BMad Method Framework
│   ├── bmm/               # BMad Method Module
│   └── core/              # Core BMad utilities
│
├── App.tsx                 # ⭐ Root Application Component
├── index.tsx               # ⭐ Application Entry Point
├── index.html              # HTML entry with Tailwind config
├── types.ts                # TypeScript type definitions
│
├── vite.config.ts          # ⚙️ Vite build configuration
├── tsconfig.json           # TypeScript compiler config
├── package.json            # Project dependencies
├── .env.local              # 🔐 Environment variables (API keys)
├── .gitignore              # Git ignore rules
├── README.md               # Project documentation
└── metadata.json           # Project metadata

```

## Critical Directories Explained

### `/components`
**Purpose:** Reusable UI components shared across pages
**Pattern:** Component-based architecture
**Key Files:**
- Navigation components (Navbar, Footer)
- UI elements (Button, ServiceCard)
- Widgets (NewsletterWidget)

**Integration:** Imported and used by page components

### `/pages`
**Purpose:** Route-based page components
**Pattern:** Each file represents a distinct route/view
**Organization:**
- Main pages (11 files): Home, About, Contact, etc.
- Detail pages (4 files): ArticleDetail, JobDetail, StoryDetail, WebinarDetail

**Routing:** Managed by React Router (v7.10.1)

### `/fonts`
**Purpose:** Custom typography assets for branding
**Contents:**
- Bermia (Display font - Black weight)
- Bornia (Sans-serif - Regular and Bold)

**Loading:** Font-face declarations in `index.html`

### `/docs`
**Purpose:** Generated project documentation
**Usage:** Reference for development and AI-assisted workflows
**Maintenance:** Auto-generated, should not be manually edited

## Entry Points

### 🎯 Primary Entry Point
**File:** `index.tsx`
**Purpose:** Application bootstrap
**Responsibilities:**
- Mount React app to DOM
- Initialize React Router
- Setup root-level providers

### 🎯 Root Component
**File:** `App.tsx`
**Purpose:** Main application component
**Responsibilities:**
- Route configuration
- Layout structure
- Top-level state management

### 🎯 HTML Entry
**File:** `index.html`
**Purpose:** HTML template and configuration
**Features:**
- Tailwind CSS CDN initialization
- Custom font loading
- Meta tags and SEO
- Root div mount point

## Configuration Files

### Build & Development
- **`vite.config.ts`**: Build tool configuration, dev server (port 3000), API key injection
- **`tsconfig.json`**: TypeScript compiler options, path aliases (`@/*`)
- **`package.json`**: Dependencies, scripts, project metadata

### Environment
- **`.env.local`**: Environment variables (GEMINI_API_KEY)

## File Organization Patterns

### Component Naming
- **Convention:** PascalCase (e.g., `Button.tsx`, `ServiceCard.tsx`)
- **Extension:** `.tsx` for components with JSX
- **Location:** `/components` for reusable, `/pages` for routes

### Type Definitions
- **File:** `types.ts` (centralized)
- **Pattern:** Interfaces and enums exported from single file
- **Usage:** Imported across components for type safety

## Asset Management

### Fonts
- **Strategy:** Self-hosted from production domain (`https://www.ocobo.co/fonts/`)
- **Formats:** WOFF (Bermia), OTF (Bornia)
- **Fallbacks:** Inter (Google Fonts), system sans-serif

### Styles
- **Primary:** Tailwind CSS (CDN)
- **Custom:** Inline configuration in `index.html`
- **Theme:** Custom Ocobo color palette

## Integration Points

### External Services
1. **Google Gemini API** - AI features
   - Config: `vite.config.ts`
   - Key: `.env.local`

2. **Tailwind CSS** - Styling framework
   - Source: CDN (`https://cdn.tailwindcss.com`)

3. **Google Fonts** - Inter font family
   - Source: Google Fonts CDN

## Notes

- **Scan Level:** Quick (structure and patterns only)
- **Total Components:** 20 (5 reusable + 15 pages)
- **Total Lines:** ~1000+ (estimated from file count)
- **Organization:** Clean separation of concerns (components vs pages)

## Architecture Highlights

✅ **Well-Structured:**
- Clear component/page separation
- Centralized type definitions
- Environment-based configuration

✅ **Modern Stack:**
- React 19 with hooks
- TypeScript for type safety
- Vite for fast development

✅ **Design System:**
- Custom branding with fonts and colors
- Tailwind for utility classes
- Responsive design ready

## Recommendations

For deeper understanding:
1. Perform a **deep scan** to analyze:
   - Component props and APIs
   - State management patterns
   - API call implementations
   - Routing configuration details

2. Review routing structure in `App.tsx`
3. Analyze component reusability patterns
4. Document state flow between components
