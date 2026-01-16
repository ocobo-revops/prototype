# Story 2.4: Create Input Component

Status: done

## Story

As an **AI Agent**,
I want an Input component with size props,
so that I can create consistent form inputs.

---

## Acceptance Criteria

**AC1:** Single variant: outline (border, transparent bg)

**AC2:** Sizes available: `sm`, `md`, `lg`

**AC3:** Supports standard HTML input attributes (type, placeholder, disabled, etc.)

**AC4:** TypeScript interface `InputProps` exported

**AC5:** File named `input.tsx` (lowercase, flat in components/)

---

## Tasks / Subtasks

- [x] Create `components/input.tsx` with InputProps interface
- [x] Implement size variants (sm, md, lg)
- [x] Add focus states with ocobo-yellow ring
- [x] Add unit tests (12 tests)
- [x] Update design-system showcase page
- [x] Validate build passes

---

## Dev Agent Record

### Agent Model Used

Claude Code (claude-sonnet-4-20250514)

### Completion Notes

**Implementation completed:**

1. Created `components/input.tsx` with InputProps interface
2. Single outline variant (simplified from epic spec)
3. 3 sizes: sm, md, lg
4. Focus state: yellow ring (`focus:ring-ocobo-yellow`)
5. Disabled state with opacity and bg change
6. 12 unit tests
7. Added Input section to design-system showcase

**Build:** Passes (1.32s)
**Tests:** 92 pass (35 tokens + 10 container + 18 button + 17 badge + 12 input)

### File List

- `components/input.tsx` (NEW) - Input component
- `tests/input.test.tsx` (NEW) - 12 unit tests
- `pages/design-system.tsx` (MODIFIED) - Added Input showcase section
