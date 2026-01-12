---
stepsCompleted: [1, 2, 3, 4]
inputDocuments:
  - _bmad-output/planning-artifacts/prd.md
  - _bmad-output/planning-artifacts/architecture.md
  - _bmad-output/analysis/design-system-spec.md
---

# prototype - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for prototype, decomposing the requirements from the PRD, Architecture, and Design System Specification into implementable stories for the Design System Rationalization project.

## Requirements Inventory

### Functional Requirements

**Token Management (FR1-5):**
- FR1: AI Agent can read all colors, radius, shadows from centralized source
- FR2: AI Agent can read all typography sizes from centralized source
- FR3: AI Agent can access all design tokens in Tailwind format
- FR4: All design tokens are defined in tailwind.config.js only
- FR5: No hardcoded color/radius/shadow/font values in page code

**Core Component Extraction (FR6-10):**
- FR6: Card component supports composition via primitives (Root, Header, Title, Description, Body, Footer, Media, Badge, Avatar)
- FR7: Button component supports variant, size, colorPalette props
- FR8: Badge component supports variant, size, colorPalette props
- FR9: Input component supports variant, size props
- FR10: Container component supports size prop for layout width

**Navbar Rationalization (FR11-13):**
- FR11: Navbar split into sub-components (navbar, navbar-menu, navbar-logo, navbar-mobile)
- FR12: Navbar maintains current visual appearance
- FR13: Navbar sub-components are reusable

**Page Composition (FR14-17):**
- FR14: All 15 pages use DS components only
- FR15: No inline JSX styling in page files (tokens via className)
- FR16: Pages compose Section components (HeroSection, CtaSection, etc.)
- FR17: Pages have consistent layout patterns

**AI Documentation (FR18-22):**
- FR18: AI Agent can read CLAUDE.md and understand navigation entry points
- FR19: AI Agent can access tokens documentation in Markdown format
- FR20: AI Agent can access components catalog with props documentation
- FR21: AI Agent can understand DS usage patterns from documentation
- FR22: Documentation structure enables efficient AI navigation

**Design System Showcase Page (FR23-27):**
- FR23: Developer can access a dedicated page showcasing all DS components (route: /design-system)
- FR24: Showcase page is NOT visible in navigation (hidden route, accessible by URL only)
- FR25: Showcase page displays all tokens (colors, radius, shadows, typography) with visual examples
- FR26: Showcase page displays all components with their variants and props
- FR27: Showcase page serves as living documentation for AI agent and developer reference

**Visual Fidelity (FR28-30):**
- FR28: Rationalized prototype renders visually similar to current prototype
- FR29: Minor adjustments (radius, shadow harmonization) are acceptable
- FR30: No functional or behavioral changes from current prototype

### NonFunctional Requirements

**Code Quality (NFR1-5):**
- NFR1: All color values derive from tailwind.config.js tokens
- NFR2: All radius values derive from tailwind.config.js tokens
- NFR3: All shadow values derive from tailwind.config.js tokens
- NFR4: All component props have TypeScript types
- NFR5: Build passes with no type errors

**AI-Readability (NFR6-10):**
- NFR6: Component patterns are predictable and consistent
- NFR7: Naming conventions are explicit and meaningful
- NFR8: CLAUDE.md provides clear navigation to DS documentation
- NFR9: DS documentation is structured for AI parsing
- NFR10: Composition patterns are documented with examples

**Maintainability (NFR11-14):**
- NFR11: New page can be created using existing DS components only
- NFR12: Token changes propagate automatically to all components
- NFR13: Component variant patterns are consistent across all components
- NFR14: Mobile-first responsive patterns are applied consistently

**Visual Fidelity (NFR15-18):**
- NFR15: All existing animations and transitions are preserved
- NFR16: No layout shifts or visual regressions
- NFR17: Color palette is visually identical
- NFR18: Typography hierarchy is visually identical

### Additional Requirements

**From Architecture Document:**
- Brownfield project - no starter template needed
- Folder-per-component structure with centralized index.ts exports
- Context Provider + Namespace pattern for composition (`Card.Root`, `Card.Header`, etc.)
- kebab-case file naming convention (e.g., `card-root.tsx`)
- Tailwind class ordering: Layout → Spacing → Appearance → States → Animation
- `ComponentNameProps` interface naming convention
- Export via named namespace only (e.g., `export const Card = { Root, Header, ... }`)

**From Design System Specification:**
- 5 core components: Container, Button, Badge, Input, Card
- 8 section components: Section, HeroSection, CtaSection, FeatureSection, GridSection, TestimonialSection, StatsSection, DecorativeBlob
- Card composition: 9 primitives (Root, Header, Title, Description, Body, Footer, Media, Badge, Avatar)
- Typography scale: 12 sizes from text-micro (10px) to text-7xl (72px)
- Border radius: 5 tokens (sm, md, lg, xl, full)
- Shadows: 4 tokens (sm, md, lg, hero)
- 7 card variant use cases to support: Article, Profile, Job, Callout, Section item, Tool, Contact form

### FR Coverage Map

| FR | Epic | Description |
|----|------|-------------|
| FR1 | Epic 1 | AI Agent can read colors, radius, shadows from centralized source |
| FR2 | Epic 1 | AI Agent can read typography sizes from centralized source |
| FR3 | Epic 1 | AI Agent can access design tokens in Tailwind format |
| FR4 | Epic 1 | All design tokens defined in tailwind.config.js only |
| FR5 | Epic 1 | No hardcoded values in page code |
| FR6 | Epic 2 | Card component supports composition via primitives |
| FR7 | Epic 2 | Button component supports variant, size, colorPalette |
| FR8 | Epic 2 | Badge component supports variant, size, colorPalette |
| FR9 | Epic 2 | Input component supports variant, size |
| FR10 | Epic 2 | Container component supports size prop |
| FR11 | Epic 4 | Navbar split into sub-components |
| FR12 | Epic 4 | Navbar maintains current visual appearance |
| FR13 | Epic 4 | Navbar sub-components are reusable |
| FR14 | Epic 5 | All 15 pages use DS components only |
| FR15 | Epic 5 | No inline JSX styling in page files |
| FR16 | Epic 5 | Pages compose Section components |
| FR17 | Epic 5 | Pages have consistent layout patterns |
| FR18 | Epic 6 | AI Agent can read CLAUDE.md |
| FR19 | Epic 6 | AI Agent can access tokens documentation |
| FR20 | Epic 6 | AI Agent can access components catalog |
| FR21 | Epic 6 | AI Agent can understand DS usage patterns |
| FR22 | Epic 6 | Documentation enables efficient AI navigation |
| FR23 | Epic 7 | Developer can access DS showcase page |
| FR24 | Epic 7 | Showcase page NOT visible in navigation |
| FR25 | Epic 7 | Showcase displays all tokens |
| FR26 | Epic 7 | Showcase displays all components |
| FR27 | Epic 7 | Showcase serves as living documentation |
| FR28 | Epic 5 | Rationalized prototype visually similar |
| FR29 | Epic 5 | Minor adjustments acceptable |
| FR30 | Epic 5 | No functional or behavioral changes |

## Epic List

### Epic 1: Design Tokens Foundation

AI Agent can access and understand all design tokens from a single source of truth (`tailwind.config.js`), enabling consistent styling across all components.

**FRs covered:** FR1, FR2, FR3, FR4, FR5
**NFRs covered:** NFR1, NFR2, NFR3

### Epic 2: Core UI Components

AI Agent can compose user interfaces using Button, Badge, Input, Container, and the Card composition system with consistent props (variant, size, colorPalette).

**FRs covered:** FR6, FR7, FR8, FR9, FR10
**NFRs covered:** NFR4, NFR5, NFR6, NFR7, NFR13

### Epic 3: Section Components

AI Agent can compose page sections using HeroSection, CtaSection, FeatureSection, GridSection, TestimonialSection, StatsSection, and DecorativeBlob components.

**FRs covered:** None explicit (required by Architecture)
**Dependencies:** Epic 1 (tokens), Epic 2 (Card, Button)

### Epic 4: Navbar Refactoring

Navbar is maintainable and composed of reusable sub-components (navbar, navbar-menu, navbar-logo, navbar-mobile) while preserving visual appearance.

**FRs covered:** FR11, FR12, FR13
**Dependencies:** Epic 1 (tokens), Epic 2 (Button)

### Epic 5: Page Refactoring

All 15 pages exclusively use DS components with consistent layout patterns, visually identical to current prototype.

**FRs covered:** FR14, FR15, FR16, FR17, FR28, FR29, FR30
**NFRs covered:** NFR11, NFR12, NFR14, NFR15, NFR16, NFR17, NFR18
**Dependencies:** Epic 1-4

### Epic 6: AI Documentation

AI Agent can efficiently navigate and understand the entire Design System via CLAUDE.md entry point and dedicated documentation in docs/design-system/.

**FRs covered:** FR18, FR19, FR20, FR21, FR22
**NFRs covered:** NFR8, NFR9, NFR10
**Dependencies:** Documents Epic 1-5

### Epic 7: Design System Showcase

Developers can preview all tokens and components on a dedicated hidden page (/design-system) that serves as living documentation.

**FRs covered:** FR23, FR24, FR25, FR26, FR27
**Dependencies:** Displays Epic 1-5

---

## Epic 1: Design Tokens Foundation

AI Agent can access and understand all design tokens from a single source of truth (`tailwind.config.js`), enabling consistent styling across all components.

### Story 1.1: Migrate Tailwind Configuration from CDN to Local

As an **AI Agent**,
I want the Tailwind configuration to be local in `tailwind.config.js`,
So that I can read and understand all design tokens from a single file.

**Acceptance Criteria:**

**Given** the project uses Tailwind via CDN in index.html
**When** I create a local tailwind.config.js with PostCSS configuration
**Then** all existing styles continue to work identically
**And** the CDN script is removed from index.html
**And** `npm run dev` and `npm run build` work without errors

### Story 1.2: Define Color Tokens

As an **AI Agent**,
I want all color values defined as tokens in tailwind.config.js,
So that I can reference colors consistently using `bg-ocobo-yellow`, `text-ocobo-dark`, etc.

**Acceptance Criteria:**

**Given** the design system specification defines color primitives and semantics
**When** I define colors in tailwind.config.js under `theme.extend.colors.ocobo`
**Then** all colors (dark, yellow, mint, sky, coral, gray scale) are accessible
**And** light variants use DEFAULT pattern (e.g., `yellow.light`)
**And** classes like `bg-ocobo-yellow-light` work correctly

### Story 1.3: Define Spacing, Radius, and Shadow Tokens

As an **AI Agent**,
I want border-radius and box-shadow values defined as tokens,
So that I can use consistent `rounded-md`, `shadow-hero` classes.

**Acceptance Criteria:**

**Given** the DS spec defines 5 radius tokens and 4 shadow tokens
**When** I define these in tailwind.config.js under `theme.extend`
**Then** `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-full` are available
**And** `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-hero` are available
**And** existing UI renders identically

### Story 1.4: Define Typography Tokens

As an **AI Agent**,
I want typography scale defined as tokens,
So that I can use consistent text sizes from `text-micro` to `text-7xl`.

**Acceptance Criteria:**

**Given** the DS spec defines 12 typography sizes
**When** I define fontSize tokens in tailwind.config.js
**Then** all sizes from `text-micro` (10px) to `text-7xl` (72px) are available
**And** font families `font-sans` (Bornia) and `font-display` (Bermia) are configured
**And** existing typography renders identically

### Story 1.5: Create Token Documentation

As an **AI Agent**,
I want tokens documented in `docs/design-system/tokens.md`,
So that I can quickly reference all available tokens.

**Acceptance Criteria:**

**Given** all tokens are defined in tailwind.config.js
**When** I create docs/design-system/tokens.md
**Then** the document lists all colors with hex values
**And** all radius tokens with pixel values
**And** all shadow tokens with CSS values
**And** all typography sizes with line heights

---

## Epic 2: Core UI Components

AI Agent can compose user interfaces using Button, Badge, Input, Container, and the Card composition system with consistent props (variant, size, colorPalette).

### Story 2.1: Create Container Component

As an **AI Agent**,
I want a Container component with size variants,
So that I can control page width consistently across all pages.

**Acceptance Criteria:**

**Given** I need to wrap page content with consistent max-width
**When** I use `<Container size="md">`
**Then** content is centered with appropriate max-width
**And** sizes `sm` (max-w-3xl), `md` (max-w-5xl), `lg` (max-w-7xl), `full` are available
**And** the component follows kebab-case file naming (`container.tsx`)
**And** exports via namespace pattern `export const Container = ...`

### Story 2.2: Create Button Component

As an **AI Agent**,
I want a Button component with variant, size, and colorPalette props,
So that I can create consistent buttons throughout the application.

**Acceptance Criteria:**

**Given** I need interactive buttons with different styles
**When** I use `<Button variant="primary" size="md" colorPalette="yellow">`
**Then** the button renders with correct styling from tokens
**And** variants `primary`, `secondary`, `outline`, `ghost` are available
**And** sizes `sm`, `md`, `lg` are available
**And** colorPalette `yellow`, `mint`, `sky`, `coral`, `dark` are available
**And** TypeScript types `ButtonProps` are exported

### Story 2.3: Create Badge Component

As an **AI Agent**,
I want a Badge component with variant, size, and colorPalette props,
So that I can display status indicators and labels consistently.

**Acceptance Criteria:**

**Given** I need to display tags, labels, or status indicators
**When** I use `<Badge variant="solid" colorPalette="mint">`
**Then** the badge renders with correct styling from tokens
**And** variants `solid`, `outline`, `subtle` are available
**And** sizes `sm`, `md` are available
**And** colorPalette options match Button component

### Story 2.4: Create Input Component

As an **AI Agent**,
I want an Input component with variant and size props,
So that I can create consistent form inputs.

**Acceptance Criteria:**

**Given** I need form input fields
**When** I use `<Input variant="outline" size="md">`
**Then** the input renders with correct styling from tokens
**And** variants `outline`, `filled`, `flushed` are available
**And** sizes `sm`, `md`, `lg` are available
**And** supports standard HTML input attributes (type, placeholder, etc.)

### Story 2.5: Create Card Composition System - Context and Root

As an **AI Agent**,
I want Card.Root with Context Provider for prop inheritance,
So that child components automatically inherit variant, size, colorPalette.

**Acceptance Criteria:**

**Given** I need a composable card system
**When** I use `<Card.Root variant="outlined" colorPalette="yellow">`
**Then** a CardContext is created with these values
**And** child components can access context via `useCardContext()`
**And** using Card components outside Card.Root throws explicit error
**And** file is named `card-root.tsx` with `CardRootProps` interface

### Story 2.6: Create Card Composition System - Header Primitives

As an **AI Agent**,
I want Card.Header, Card.Title, and Card.Description primitives,
So that I can compose card headers flexibly.

**Acceptance Criteria:**

**Given** Card.Root is available with context
**When** I use `<Card.Header><Card.Title>Title</Card.Title></Card.Header>`
**Then** the header section renders with inherited styling
**And** Card.Title renders as appropriate heading element
**And** Card.Description renders muted description text
**And** all primitives inherit colorPalette from context

### Story 2.7: Create Card Composition System - Body and Footer

As an **AI Agent**,
I want Card.Body and Card.Footer primitives,
So that I can compose card content and actions.

**Acceptance Criteria:**

**Given** Card.Root and Header primitives are available
**When** I use `<Card.Body>content</Card.Body><Card.Footer>actions</Card.Footer>`
**Then** body renders main content area with appropriate padding
**And** footer renders action area (typically for buttons)
**And** spacing adjusts based on size from context

### Story 2.8: Create Card Composition System - Media and Avatar

As an **AI Agent**,
I want Card.Media, Card.Badge, and Card.Avatar primitives,
So that I can compose rich cards with images and avatars.

**Acceptance Criteria:**

**Given** all Card primitives are available
**When** I compose a complete card with media and avatar
**Then** Card.Media renders images with proper aspect ratio
**And** Card.Badge positions badge overlay on card
**And** Card.Avatar renders circular avatar image
**And** all 7 existing card use cases can be recreated (Article, Profile, Job, Callout, Section item, Tool, Contact)

### Story 2.9: Create Component Documentation

As an **AI Agent**,
I want core components documented in `docs/design-system/components.md`,
So that I can reference props and usage patterns.

**Acceptance Criteria:**

**Given** all core components are created
**When** I create docs/design-system/components.md
**Then** each component has props table with types
**And** usage examples are provided
**And** Card composition pattern is documented with examples

---

## Epic 3: Section Components

AI Agent can compose page sections using HeroSection, CtaSection, FeatureSection, GridSection, TestimonialSection, StatsSection, and DecorativeBlob components.

### Story 3.1: Create Base Section Component

As an **AI Agent**,
I want a base Section component with spacing and background props,
So that I can create consistent page sections.

**Acceptance Criteria:**

**Given** I need to create page sections with consistent spacing
**When** I use `<Section spacing="lg" background="gray">`
**Then** vertical padding is applied based on spacing (`sm`=py-16, `md`=py-24, `lg`=py-32)
**And** background colors `white`, `gray`, `dark`, `yellow`, `mint`, `sky` are available
**And** follows folder structure `components/Section/section.tsx`

### Story 3.2: Create HeroSection Component

As an **AI Agent**,
I want a HeroSection component with variant and background props,
So that I can create impactful hero sections for pages.

**Acceptance Criteria:**

**Given** I need a hero section for a page
**When** I use `<HeroSection variant="centered" background="white">`
**Then** hero layout is applied with appropriate typography scale
**And** variants `centered`, `split`, `animated` are available
**And** backgrounds `white`, `dark` are supported
**And** shadow-hero token is used for decorative elements

### Story 3.3: Create CtaSection Component

As an **AI Agent**,
I want a CtaSection component for call-to-action blocks,
So that I can create consistent CTA sections.

**Acceptance Criteria:**

**Given** I need a call-to-action section
**When** I use `<CtaSection colorPalette="yellow" variant="simple">`
**Then** CTA renders with appropriate background and contrast
**And** variants `simple`, `with-form` are available
**And** colorPalette `yellow`, `dark`, `mint`, `sky` are supported
**And** integrates with Button and Input components

### Story 3.4: Create FeatureSection Component

As an **AI Agent**,
I want a FeatureSection component for feature showcases,
So that I can display features with optional decorative blobs.

**Acceptance Criteria:**

**Given** I need to showcase features
**When** I use `<FeatureSection background="dark" withBlobs>`
**Then** feature content renders with appropriate layout
**And** backgrounds `dark`, `light` are supported
**And** optional decorative blobs can be enabled
**And** integrates with Card components for feature items

### Story 3.5: Create GridSection Component

As an **AI Agent**,
I want a GridSection component for grid layouts,
So that I can display content in responsive grid patterns.

**Acceptance Criteria:**

**Given** I need a grid of items (cards, features, etc.)
**When** I use `<GridSection columns={3} gap="lg">`
**Then** children are laid out in responsive grid
**And** columns 2, 3, 4 are supported
**And** gap `md`, `lg` are available
**And** grid is responsive (fewer columns on mobile)

### Story 3.6: Create TestimonialSection Component

As an **AI Agent**,
I want a TestimonialSection component for customer testimonials,
So that I can display testimonials consistently.

**Acceptance Criteria:**

**Given** I need to display testimonials
**When** I use `<TestimonialSection variant="single">`
**Then** testimonial content renders with quote styling
**And** variants `single`, `carousel` are available
**And** integrates with Card.Avatar for author display

### Story 3.7: Create StatsSection Component

As an **AI Agent**,
I want a StatsSection component for statistics display,
So that I can showcase key numbers and metrics.

**Acceptance Criteria:**

**Given** I need to display statistics
**When** I use `<StatsSection columns={4}>`
**Then** stats are displayed in responsive columns
**And** columns 3, 4 are supported
**And** typography uses display font for numbers

### Story 3.8: Create DecorativeBlob Component

As an **AI Agent**,
I want a DecorativeBlob component for visual decoration,
So that I can add branded blob shapes to sections.

**Acceptance Criteria:**

**Given** I need decorative elements for sections
**When** I use `<DecorativeBlob position="top-right" colorPalette="yellow" size="lg">`
**Then** blob renders at specified position
**And** positions `top-right`, `top-left`, `bottom-right`, `bottom-left`, `center` are available
**And** colorPalette `yellow`, `mint`, `sky`, `coral` are supported
**And** sizes `sm`, `md`, `lg` are available
**And** opacity levels 10, 20, 30 are supported

---

## Epic 4: Navbar Refactoring

Navbar is maintainable and composed of reusable sub-components (navbar, navbar-menu, navbar-logo, navbar-mobile) while preserving visual appearance.

### Story 4.1: Create Navbar Component Structure

As an **AI Agent**,
I want the Navbar split into a folder with sub-components,
So that the 17KB monolithic file becomes maintainable.

**Acceptance Criteria:**

**Given** the existing Navbar.tsx is ~17KB monolithic
**When** I create `components/Navbar/` folder structure
**Then** index.ts exports the composed Navbar
**And** folder contains navbar.tsx, navbar-menu.tsx, navbar-logo.tsx, navbar-mobile.tsx
**And** all files follow kebab-case naming convention

### Story 4.2: Extract NavbarLogo Component

As an **AI Agent**,
I want the logo portion extracted to NavbarLogo,
So that it can be reused and maintained independently.

**Acceptance Criteria:**

**Given** the Navbar folder structure exists
**When** I extract logo to `navbar-logo.tsx`
**Then** NavbarLogo renders the Ocobo logo
**And** logo links to home page
**And** visual appearance is identical to current

### Story 4.3: Extract NavbarMenu Component

As an **AI Agent**,
I want the desktop menu extracted to NavbarMenu,
So that navigation items are separately maintainable.

**Acceptance Criteria:**

**Given** NavbarLogo is extracted
**When** I extract desktop menu to `navbar-menu.tsx`
**Then** NavbarMenu renders all navigation links
**And** dropdown menus work correctly
**And** active state highlighting works
**And** visual appearance is identical to current

### Story 4.4: Extract NavbarMobile Component

As an **AI Agent**,
I want the mobile menu extracted to NavbarMobile,
So that responsive behavior is separately maintainable.

**Acceptance Criteria:**

**Given** NavbarMenu is extracted
**When** I extract mobile menu to `navbar-mobile.tsx`
**Then** NavbarMobile renders hamburger button and slide-out menu
**And** menu toggle animation works correctly
**And** all navigation items are accessible on mobile
**And** visual appearance is identical to current

### Story 4.5: Compose Final Navbar

As an **AI Agent**,
I want the main Navbar to compose all sub-components,
So that the Navbar is complete and functional.

**Acceptance Criteria:**

**Given** all sub-components are extracted
**When** I compose them in `navbar.tsx`
**Then** Navbar uses NavbarLogo, NavbarMenu, NavbarMobile
**And** responsive switching between desktop/mobile works
**And** all existing functionality is preserved
**And** visual appearance is pixel-perfect identical
**And** all animations and transitions are preserved (NFR15)

---

## Epic 5: Page Refactoring

All 15 pages exclusively use DS components with consistent layout patterns, visually identical to current prototype.

### Story 5.1: Refactor Home Page

As an **AI Agent**,
I want the Home page to use only DS components,
So that it serves as the reference implementation for other pages.

**Acceptance Criteria:**

**Given** all DS components are available (Epic 1-4)
**When** I refactor Home.tsx to use DS components
**Then** page uses Container, Section, HeroSection, GridSection, Card, Button
**And** no inline hardcoded color/radius/shadow values remain
**And** visual appearance is identical to current
**And** all animations are preserved

### Story 5.2: Refactor Services Page

As an **AI Agent**,
I want the Services page to use only DS components,
So that service offerings are displayed consistently.

**Acceptance Criteria:**

**Given** Home page refactoring is complete
**When** I refactor Services.tsx to use DS components
**Then** page uses Section, GridSection, Card composition
**And** ServiceCard.tsx usage is replaced with Card primitives
**And** visual appearance is identical to current

### Story 5.3: Refactor Method Page

As an **AI Agent**,
I want the Method page to use only DS components,
So that methodology content is displayed consistently.

**Acceptance Criteria:**

**Given** DS components are available
**When** I refactor Method.tsx to use DS components
**Then** page uses Section, FeatureSection, StatsSection
**And** no inline styling remains
**And** visual appearance is identical to current

### Story 5.4: Refactor Studio Page

As an **AI Agent**,
I want the Studio page to use only DS components,
So that studio content is displayed consistently.

**Acceptance Criteria:**

**Given** DS components are available
**When** I refactor Studio.tsx to use DS components
**Then** page uses Section, HeroSection, GridSection
**And** visual appearance is identical to current

### Story 5.5: Refactor Partners Page

As an **AI Agent**,
I want the Partners page to use only DS components,
So that partner information is displayed consistently.

**Acceptance Criteria:**

**Given** DS components are available
**When** I refactor Partners.tsx to use DS components
**Then** page uses Section, GridSection, Card
**And** visual appearance is identical to current

### Story 5.6: Refactor Stories Page

As an **AI Agent**,
I want the Stories page to use only DS components,
So that customer stories are displayed consistently.

**Acceptance Criteria:**

**Given** DS components are available
**When** I refactor Stories.tsx to use DS components
**Then** page uses Section, GridSection, Card with Media
**And** visual appearance is identical to current

### Story 5.7: Refactor About Page

As an **AI Agent**,
I want the About page to use only DS components,
So that company information is displayed consistently.

**Acceptance Criteria:**

**Given** DS components are available
**When** I refactor About.tsx to use DS components
**Then** page uses Section, HeroSection, TestimonialSection
**And** visual appearance is identical to current

### Story 5.8: Refactor Jobs Page

As an **AI Agent**,
I want the Jobs page to use only DS components,
So that job listings are displayed consistently.

**Acceptance Criteria:**

**Given** DS components are available
**When** I refactor Jobs.tsx to use DS components
**Then** page uses Section, GridSection, Card with outlined variant
**And** visual appearance is identical to current

### Story 5.9: Refactor Resources Page

As an **AI Agent**,
I want the Resources page to use only DS components,
So that resources are displayed consistently.

**Acceptance Criteria:**

**Given** DS components are available
**When** I refactor Resources.tsx to use DS components
**Then** page uses Section, GridSection, Card
**And** visual appearance is identical to current

### Story 5.10: Refactor Podcast Page

As an **AI Agent**,
I want the Podcast page to use only DS components,
So that podcast content is displayed consistently.

**Acceptance Criteria:**

**Given** DS components are available
**When** I refactor Podcast.tsx to use DS components
**Then** page uses Section, GridSection, Card with Media
**And** visual appearance is identical to current

### Story 5.11: Refactor Contact Page

As an **AI Agent**,
I want the Contact page to use only DS components,
So that contact form is displayed consistently.

**Acceptance Criteria:**

**Given** DS components are available
**When** I refactor Contact.tsx to use DS components
**Then** page uses Section, Card, Input, Button
**And** form functionality is preserved
**And** visual appearance is identical to current

### Story 5.12: Refactor Detail Pages (Article, Job, Story, Webinar)

As an **AI Agent**,
I want all detail pages to use only DS components,
So that detail views are displayed consistently.

**Acceptance Criteria:**

**Given** DS components are available
**When** I refactor ArticleDetail.tsx, JobDetail.tsx, StoryDetail.tsx, WebinarDetail.tsx
**Then** all detail pages use Section, Container, Card
**And** consistent layout pattern across all detail pages
**And** visual appearance is identical to current

### Story 5.13: Delete Deprecated Components

As an **AI Agent**,
I want deprecated components removed,
So that the codebase only contains DS components.

**Acceptance Criteria:**

**Given** all pages are refactored
**When** I clean up deprecated components
**Then** ServiceCard.tsx is deleted (replaced by Card)
**And** no unused component files remain
**And** build passes with no errors

---

## Epic 6: AI Documentation

AI Agent can efficiently navigate and understand the entire Design System via CLAUDE.md entry point and dedicated documentation in docs/design-system/.

### Story 6.1: Update CLAUDE.md as AI Navigation Entry Point

As an **AI Agent**,
I want CLAUDE.md to serve as the primary navigation entry point,
So that I can quickly understand the codebase structure and find relevant documentation.

**Acceptance Criteria:**

**Given** the Design System is rationalized
**When** I read CLAUDE.md
**Then** I find clear links to docs/design-system/ documentation
**And** component structure is explained (folder-per-component)
**And** token location is explained (tailwind.config.js)
**And** key patterns are summarized (composition, naming conventions)

### Story 6.2: Create Tokens Documentation

As an **AI Agent**,
I want docs/design-system/tokens.md to document all tokens,
So that I can reference exact values when converting to other systems.

**Acceptance Criteria:**

**Given** tailwind.config.js contains all tokens
**When** I read docs/design-system/tokens.md
**Then** all colors are listed with hex values and usage
**And** all radius tokens are listed with pixel values
**And** all shadow tokens are listed with CSS values
**And** all typography sizes are listed with line-height
**And** format is consistent and machine-parseable

### Story 6.3: Create Components Catalog

As an **AI Agent**,
I want docs/design-system/components.md to catalog all components,
So that I can understand available components and their props.

**Acceptance Criteria:**

**Given** all core and section components are created
**When** I read docs/design-system/components.md
**Then** each component has a props table with TypeScript types
**And** each component has usage examples
**And** Card composition pattern is documented with full example
**And** components are organized by category (Core, Section)

### Story 6.4: Create Patterns Documentation

As an **AI Agent**,
I want docs/design-system/patterns.md to explain DS usage patterns,
So that I can understand how to compose pages correctly.

**Acceptance Criteria:**

**Given** pages are refactored to use DS components
**When** I read docs/design-system/patterns.md
**Then** page composition pattern is explained
**And** Section → Content → Card hierarchy is documented
**And** common layout patterns are listed with examples
**And** prop inheritance via Context is explained

### Story 6.5: Create AI Migration Guide

As an **AI Agent**,
I want docs/design-system/migration-guide.md for prod stack migration,
So that I can convert components to Panda CSS / Park UI.

**Acceptance Criteria:**

**Given** the DS is documented
**When** I read docs/design-system/migration-guide.md
**Then** token mapping to Panda CSS is suggested
**And** component mapping to Park UI is outlined
**And** key conversion patterns are documented
**And** potential challenges are noted

---

## Epic 7: Design System Showcase

Developers can preview all tokens and components on a dedicated hidden page (/design-system) that serves as living documentation.

### Story 7.1: Create Showcase Page Route

As a **Developer**,
I want a hidden route at `/design-system` for the showcase page,
So that I can access it directly without cluttering navigation.

**Acceptance Criteria:**

**Given** the application uses HashRouter
**When** I navigate to `/#/design-system`
**Then** the DesignSystemShowcase page renders
**And** the route is NOT visible in Navbar navigation
**And** the route is NOT visible in Footer links

### Story 7.2: Create Token Showcase Sections

As a **Developer**,
I want all design tokens displayed visually on the showcase page,
So that I can see the complete token palette at a glance.

**Acceptance Criteria:**

**Given** tokens are defined in tailwind.config.js
**When** I view the Tokens section of the showcase
**Then** all colors are displayed as swatches with names and hex values
**And** all border-radius values are displayed with visual examples
**And** all shadow values are displayed with visual examples
**And** all typography sizes are displayed with sample text

### Story 7.3: Create Core Components Showcase

As a **Developer**,
I want all core components displayed with their variants,
So that I can preview Button, Badge, Input, Container variations.

**Acceptance Criteria:**

**Given** core components are created (Epic 2)
**When** I view the Core Components section
**Then** Button displays all variant × size × colorPalette combinations
**And** Badge displays all variant × colorPalette combinations
**And** Input displays all variant × size combinations
**And** Container displays all size options

### Story 7.4: Create Card Composition Showcase

As a **Developer**,
I want the Card composition system showcased with all primitives,
So that I can see all card patterns and use cases.

**Acceptance Criteria:**

**Given** Card composition system is created (Epic 2)
**When** I view the Card section
**Then** all 7 card use cases are displayed (Article, Profile, Job, Callout, Section item, Tool, Contact)
**And** each card shows the composition pattern used
**And** variant and colorPalette variations are shown

### Story 7.5: Create Section Components Showcase

As a **Developer**,
I want all section components displayed with examples,
So that I can preview HeroSection, CtaSection, etc.

**Acceptance Criteria:**

**Given** section components are created (Epic 3)
**When** I view the Section Components section
**Then** HeroSection displays variant examples
**And** CtaSection displays colorPalette examples
**And** GridSection displays column variations
**And** DecorativeBlob displays position and color variations

---

## Summary

### Story Count by Epic

| Epic | Name | Stories |
|------|------|---------|
| Epic 1 | Design Tokens Foundation | 5 |
| Epic 2 | Core UI Components | 9 |
| Epic 3 | Section Components | 8 |
| Epic 4 | Navbar Refactoring | 5 |
| Epic 5 | Page Refactoring | 13 |
| Epic 6 | AI Documentation | 5 |
| Epic 7 | Design System Showcase | 5 |
| **Total** | | **50 stories** |

### FR/NFR Coverage

- **30 Functional Requirements** covered across 7 epics
- **18 Non-Functional Requirements** covered
- All requirements from PRD are traceable to stories

### Dependencies

```
Epic 1 (Tokens) ──┬──> Epic 2 (Core Components) ──┬──> Epic 3 (Section Components)
                  │                               │
                  └──> Epic 4 (Navbar) ───────────┴──> Epic 5 (Pages)
                                                       │
                  Epic 6 (Documentation) <─────────────┤
                                                       │
                  Epic 7 (Showcase) <──────────────────┘
```

### Validation Checklist

- [x] All 30 FRs mapped to stories
- [x] All 18 NFRs addressed in acceptance criteria
- [x] Dependencies clearly defined
- [x] Stories follow user story format
- [x] Acceptance criteria use Given/When/Then
- [x] Architecture decisions reflected in stories
