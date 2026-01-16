# Story 2.3: Create Badge Component

Status: done

## Story

As an **AI Agent**,
I want a Badge component with variant, size, and colorPalette props,
so that I can display status indicators and labels consistently.

---

## Acceptance Criteria

**AC1:** Variants available: `solid`, `outline`, `subtle`

**AC2:** Sizes available: `sm`, `md`

**AC3:** colorPalette available: `yellow`, `mint`, `sky`, `coral`, `dark`

**AC4:** TypeScript interface `BadgeProps` exported

**AC5:** File named `badge.tsx` (lowercase, flat in components/)

---

## Technical Context

### Variant Styling

| Variant | Background | Text | Border |
|---------|------------|------|--------|
| `solid` | `bg-ocobo-{color}` | dark/white | none |
| `outline` | transparent | `text-ocobo-{color}` | `border-ocobo-{color}` |
| `subtle` | `bg-ocobo-{color}-light` | `text-ocobo-dark` | none |

### Size Mapping

| Size | Padding | Font Size |
|------|---------|-----------|
| `sm` | `px-2 py-0.5` | `text-xs` |
| `md` | `px-2.5 py-1` | `text-sm` |

### Default Props

- variant: `subtle`
- size: `sm`
- colorPalette: `yellow`

---

## Tasks / Subtasks

- [x] Create `components/badge.tsx` with BadgeProps interface
- [x] Implement variant styling (solid, outline, subtle)
- [x] Implement size variants (sm, md)
- [x] Implement colorPalette support (yellow, mint, sky, coral, dark)
- [x] Add unit tests (17 tests)
- [x] Update design-system showcase page
- [x] Validate build passes

---

## Dev Notes

- Use static class mappings (no template literals) for Tailwind purge
- Follow button.tsx pattern for structure
- Add to design-system.tsx showcase

---

## Dev Agent Record

### Agent Model Used

Claude Code (claude-sonnet-4-20250514)

### Completion Notes

**Implementation completed:**

1. Created `components/badge.tsx` with BadgeProps interface
2. 3 variants: solid, outline, subtle
3. 2 sizes: sm, md
4. 5 colorPalettes: yellow, mint, sky, coral, dark
5. Static class mappings for Tailwind purge safety
6. 17 unit tests covering all variants, sizes, colors
7. Added Badge section to design-system showcase with full matrix

**Build:** Passes (1.25s)
**Tests:** 80 pass (35 tokens + 10 container + 18 button + 17 badge)

### File List

- `components/badge.tsx` (NEW) - Badge component
- `tests/badge.test.tsx` (NEW) - 17 unit tests
- `pages/design-system.tsx` (MODIFIED) - Added Badge showcase section
