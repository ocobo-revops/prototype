# Component Inventory

**Project:** Ocobo Revenue Operations Agency
**Type:** Web Application (React + TypeScript)
**Generated:** 2026-01-12
**Scan Level:** Quick (pattern-based)

## Overview

This document catalogs all UI components discovered in the project through pattern-based analysis.

## Component Categories

### Layout Components

#### Navbar
- **Path:** `components/Navbar.tsx`
- **Type:** Layout/Navigation
- **Purpose:** Main navigation header component
- **Reusable:** Yes

#### Footer
- **Path:** `components/Footer.tsx`
- **Type:** Layout
- **Purpose:** Site footer component
- **Reusable:** Yes

### UI Elements

#### Button
- **Path:** `components/Button.tsx`
- **Type:** Interactive Element
- **Purpose:** Reusable button component
- **Reusable:** Yes

#### ServiceCard
- **Path:** `components/ServiceCard.tsx`
- **Type:** Display Component
- **Purpose:** Card component for displaying services
- **Reusable:** Yes

#### NewsletterWidget
- **Path:** `components/NewsletterWidget.tsx`
- **Type:** Form Widget
- **Purpose:** Newsletter subscription widget
- **Reusable:** Yes

## Page Components

### Main Pages

| Page | Path | Purpose |
|------|------|---------|
| Home | `pages/Home.tsx` | Landing page |
| About | `pages/About.tsx` | Company information |
| Contact | `pages/Contact.tsx` | Contact form/information |
| Services | `pages/Services.tsx` | Services overview |
| Method | `pages/Method.tsx` | Methodology presentation |
| Partners | `pages/Partners.tsx` | Partnership information |
| Studio | `pages/Studio.tsx` | Studio services |
| Resources | `pages/Resources.tsx` | Resource library |
| Stories | `pages/Stories.tsx` | Case studies/stories listing |
| Jobs | `pages/Jobs.tsx` | Career opportunities |
| Podcast | `pages/Podcast.tsx` | Podcast episodes |

### Detail Pages

| Page | Path | Purpose |
|------|------|---------|
| Article Detail | `pages/ArticleDetail.tsx` | Individual article view |
| Job Detail | `pages/JobDetail.tsx` | Job posting details |
| Story Detail | `pages/StoryDetail.tsx` | Individual story/case study |
| Webinar Detail | `pages/WebinarDetail.tsx` | Webinar information |

## Design System

### Branding
- **Custom Fonts:**
  - Bermia (Display font for titles)
  - Bornia (Sans-serif for body text)

- **Color Palette (Ocobo Brand):**
  - Dark: #212323
  - Yellow: #F1CF25 (Light: #FFFCEE)
  - Mint: #9ADBBA (Light: #EBFDF5)
  - Sky: #99D1DF (Light: #F0F9FB)
  - Coral: #FE9C87 (Light: #FFF5F2)
  - Gray: #F5F5F5

### Styling Approach
- **Framework:** Tailwind CSS (via CDN)
- **Custom Configuration:** Extends Tailwind with custom colors and fonts
- **Font Strategy:** Self-hosted custom fonts with fallbacks

## Component Organization

```
components/
├── Button.tsx           # Reusable button component
├── Footer.tsx          # Site footer
├── Navbar.tsx          # Navigation header
├── NewsletterWidget.tsx # Newsletter subscription
└── ServiceCard.tsx     # Service display card

pages/
├── Home.tsx            # Landing page
├── About.tsx           # About page
├── Contact.tsx         # Contact page
├── Services.tsx        # Services listing
├── Method.tsx          # Methodology
├── Partners.tsx        # Partners page
├── Studio.tsx          # Studio page
├── Resources.tsx       # Resources library
├── Stories.tsx         # Stories listing
├── Jobs.tsx            # Jobs listing
├── Podcast.tsx         # Podcast page
├── ArticleDetail.tsx   # Article detail view
├── JobDetail.tsx       # Job detail view
├── StoryDetail.tsx     # Story detail view
└── WebinarDetail.tsx   # Webinar detail view
```

## Reusability Analysis

### Highly Reusable Components (5)
- Button
- Footer
- Navbar
- NewsletterWidget
- ServiceCard

### Page-Specific Components (15)
All page components are route-specific implementations.

## Patterns Identified

1. **Component-Based Architecture:** Clear separation between reusable components and page-specific views
2. **Routing Structure:** Dedicated pages for main sections with detail pages for content
3. **Design System:** Centralized branding with custom color palette and typography
4. **Responsive Design:** Tailwind CSS for responsive utilities

## Notes

- This is a pattern-based scan. For detailed component APIs, props, and implementation details, perform a deep scan.
- Component count: 20 total (5 reusable + 15 pages)
- All components use TypeScript for type safety
- Design system is well-defined with custom branding
