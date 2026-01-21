# Ocobo documentation index

React 19 + TypeScript 5 SPA for Ocobo revenue ops agency website.

## Tech stack

| Tech | Version |
|------|---------|
| React | 19.2.3 |
| TypeScript | 5.8.2 |
| Vite | 6.2.0 |
| React Router | 7 |
| Tailwind CSS | CDN |
| Gemini API | AI features |

## Quick start

```bash
pnpm install
echo "GEMINI_API_KEY=your_key" > .env.local
pnpm run dev  # http://localhost:3000
```

## Documentation

| Doc | Use when |
|-----|----------|
| [Architecture](architecture.md) | System design, patterns, scalability |
| [Components](component-inventory.md) | Finding UI components, avoiding duplication |
| [Data models](data-models.md) | TypeScript interfaces, extending types |
| [API](api-architecture.md) | Gemini integration, state management |
| [Development](development-guide.md) | Setup, workflow, troubleshooting |
| [Source tree](source-tree-analysis.md) | Directory structure, file organisation |

## Project structure

```
prototype/
├── components/     # 5 reusable UI components
├── pages/          # 15 route-based pages
├── fonts/          # Custom Bermia & Bornia fonts
├── docs/           # This documentation
├── App.tsx         # Root component
├── index.tsx       # Entry point
├── index.html      # HTML bootstrap
├── types.ts        # Type definitions
└── vite.config.ts  # Build config
```

## Design system

### Colours
- Dark: #212323 (text)
- Yellow: #F1CF25 (brand)
- Mint: #9ADBBA (secondary)
- Sky: #99D1DF (tertiary)
- Coral: #FE9C87 (highlight)
- Gray: #F5F5F5 (backgrounds)

### Typography
- **Bermia** - Display headings (Black 900)
- **Bornia** - Body text (Regular 400, Bold 700)

## Task-specific doc loading

- **UI changes:** Components + Architecture
- **API work:** API + Data models
- **New pages:** Components + Source tree
- **Refactoring:** Architecture + Source tree
