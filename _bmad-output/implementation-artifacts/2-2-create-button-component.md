# Story 2.2: Create Button Component

Status: done

## Story

As an **AI Agent**,
I want a Button component with variant, size, and showArrow props,
so that I can create consistent buttons throughout the application.

---

## Acceptance Criteria

**AC1:** Variants available: `solid` (dark bg), `inverse` (white bg), `outline`

**AC2:** Sizes available: `sm`, `md`, `lg`

**AC3:** `showArrow` prop displays ArrowRight icon with hover animation

**AC4:** TypeScript interface `ButtonProps` exported

**AC5:** File named `button.tsx` (lowercase, flat in components/)

**AC6:** Supports standard HTML button attributes (type, disabled, onClick, etc.)

**AC7:** Hover animations: button lifts (`-translate-y-0.5`), arrow slides right (`translate-x-1`)

---

## Technical Context

### Final Implementation

**Variants:**
| Variant | Background | Text | Border |
|---------|------------|------|--------|
| `solid` | `bg-ocobo-dark` | white | none |
| `inverse` | `bg-white` | dark | none |
| `outline` | transparent | dark | `border-ocobo-dark` |

**Sizes:**
| Size | Padding | Font Size |
|------|---------|-----------|
| `sm` | `px-4 py-2` | `text-sm` |
| `md` | `px-6 py-3` | `text-sm` |
| `lg` | `px-8 py-4` | `text-base` |

**Hover Animations:**
- Button: `hover:-translate-y-0.5` (lifts slightly)
- Arrow icon: `group-hover:translate-x-1` (slides right)

---

## Tasks / Subtasks

- [x] Create `components/button.tsx` with ButtonProps interface
- [x] Implement variant styling (solid, inverse, outline)
- [x] Implement size variants (sm, md, lg)
- [x] Add showArrow prop with ArrowRight icon
- [x] Add hover animations (lift button, slide arrow)
- [x] Add unit tests (18 tests)
- [x] Validate build passes
- [x] Update design-system showcase page

---

## Dev Agent Record

### Agent Model Used

Claude Code (claude-sonnet-4-20250514)

### Completion Notes

**Implementation completed (REVISED after user feedback):**

Initial implementation had too many color variants. Simplified to match legacy button:

1. 3 variants: `solid`, `inverse`, `outline` (removed colorPalette system)
2. 3 sizes: `sm`, `md`, `lg`
3. `showArrow` prop with ArrowRight icon from lucide-react
4. Hover animations:
   - Button lifts: `hover:-translate-y-0.5`
   - Arrow slides: `group-hover:translate-x-1`
5. Transition: `duration-300` for smooth animations

**Build:** Passes (1.30s)
**Tests:** 63 pass (35 tokens + 10 container + 18 button)

### File List

- `components/button.tsx` (REVISED) - Simplified Button with solid/inverse/outline variants
- `components/button-legacy.tsx` - Legacy button kept for migration
- `tests/button.test.tsx` (REVISED) - 18 tests updated for new API
- `pages/design-system.tsx` (REVISED) - Updated showcase for new button variants
