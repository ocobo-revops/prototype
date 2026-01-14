# CLAUDE.md

Concise guidance for Claude Code in this repository.

## Canonical agent entry

Start with `docs/index.md` and load only task-relevant docs it references.

## Quick commands

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run preview
pnpm test
pnpm test:watch
```

## Non-negotiables

- Use `pnpm` only.
- Do not `git commit` or `git push`. Ask before staging with `git add`.
- Prefer existing files; do not create new docs unless explicitly requested.
- Use `mgrep` for code search.

## Environment

Set `GEMINI_API_KEY` in `.env.local`.

## Pointers

- Entry flow: `index.html` → `index.tsx` → `App.tsx`
- Routes: `pages/`
- Shared UI: `components/`
- Types: `types.ts`
