# Ocobo prototype

React 19 SPA for Ocobo revenue ops agency website.

## Commands

```bash
pnpm install
pnpm run dev      # localhost:3000
pnpm run build
pnpm test
```

### Code conventions

- **No barrel files** — avoid `index.ts` files that re-export from other files
- **Named exports only** — use `export function Foo` or `export const Foo`, never `export default`
- **Kebab-case filenames** — use `my-component.tsx` not `MyComponent.tsx`

## Skills

- Apply `vercel-react-best-practices` during React refactoring

## Ralph loop

When running via `ralph-once.sh` or `afk-ralph.sh`:
- Commit after each completed story without asking
- Use conventional commit format
- Update progress.txt after committing

## Codebase pointers

| Path | Purpose |
|------|---------|
| `index.html` → `index.tsx` → `App.tsx` | Entry flow |
| `pages/` | Route components |
| `components/` | Shared UI |
| `types.ts` | Type definitions |

## Detailed docs

Load only when task-relevant:

- [Architecture](docs/architecture.md) - system design, patterns
- [Components](docs/component-inventory.md) - UI catalogue
- [Data models](docs/data-models.md) - TypeScript interfaces
- [API](docs/api-architecture.md) - Gemini integration, state
- [Development](docs/development-guide.md) - setup, workflow
