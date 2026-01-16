# Story 1.2: Define Color Tokens

**Status:** ready-for-dev  
**Epic:** 1 - Design Tokens Foundation  
**Story ID:** 1.2  
**Story Key:** 1-2-define-color-tokens

---

## Story

As an **AI Agent**,  
I want all color values defined as tokens in tailwind.config.js,  
so that I can reference colors consistently using `bg-ocobo-yellow`, `text-ocobo-dark`, etc.

---

## Acceptance Criteria

**AC1:** Given the design system specification defines color primitives and semantics  
**When** I define colors in tailwind.config.js under `theme.extend.colors.ocobo`  
**Then** all colors (dark, yellow, mint, sky, coral, gray scale) are accessible  
**And** light variants use DEFAULT pattern (e.g., `yellow: { DEFAULT: '#F1CF25', light: '#FFFCEE' }`)  
**And** classes like `bg-ocobo-yellow-light` work correctly

---

## Business Context

This story is **critical** to the Design System Rationalization project. It:
- Transforms flat color structure (Story 1.1) into nested DEFAULT pattern for Panda CSS compatibility
- Enables future stories to use semantic color references
- Provides the foundation for all component styling in Epic 2+
- Ensures AI agents can understand and map color tokens to production stack

**Epic Objective:** Enable AI Agent to access all design tokens from a single source of truth (`tailwind.config.js`).

**Dependencies:** 
- ✅ Story 1.1 completed - Tailwind config migrated from CDN to local
- Story 1.3 blocked until this story completes (radius and shadow tokens)

---

## Technical Context

### Current State Analysis (From Story 1.1)

**Current Color Structure in `tailwind.config.js`:**
```javascript
colors: {
  ocobo: {
    dark: '#212323',
    yellow: '#F1CF25',      // ❌ Flat structure
    yellowLight: '#FFFCEE', // ❌ Camel case suffix
    mint: '#9ADBBA',
    mintLight: '#EBFDF5',
    sky: '#99D1DF',
    skyLight: '#F0F9FB',
    coral: '#FE9C87',
    coralLight: '#FFF5F2',
    gray: '#F5F5F5'         // ❌ Single value, no scale
  }
}
```

**Current Usage in Codebase:**
- Classes like `bg-ocobo-yellow`, `text-ocobo-yellowLight` are used throughout
- Gray color only has single value (`#F5F5F5`)
- No gray scale for text/border variations
- Structure not compatible with Panda CSS DEFAULT pattern

**Git Context (Last Story):**
- Commit: "feat(tailwind): migrate configuration from CDN to local setup"
- Files modified: `tailwind.config.js`, `postcss.config.js`, `index.html`, `index.css`
- Zero visual regressions achieved in Story 1.1

### Target State (This Story)

**Target Color Structure (From Design System Spec):**
```javascript
colors: {
  ocobo: {
    dark: '#212323',
    yellow: {
      DEFAULT: '#F1CF25',   // ✅ Nested DEFAULT
      light: '#FFFCEE'       // ✅ lowercase suffix
    },
    mint: {
      DEFAULT: '#9ADBBA',
      light: '#EBFDF5'
    },
    sky: {
      DEFAULT: '#99D1DF',
      light: '#F0F9FB'
    },
    coral: {
      DEFAULT: '#FE9C87',
      light: '#FFF5F2'
    },
    gray: {                  // ✅ Full gray scale
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717'
    },
    white: '#FFFFFF',        // ✅ Explicit white/black
    black: '#000000'
  }
}
```

**Class Name Changes Required:**
| Current Class | New Class | Status |
|---------------|-----------|--------|
| `bg-ocobo-yellow` | `bg-ocobo-yellow` | ✅ No change (DEFAULT) |
| `bg-ocobo-yellowLight` | `bg-ocobo-yellow-light` | ⚠️ BREAKING |
| `bg-ocobo-mintLight` | `bg-ocobo-mint-light` | ⚠️ BREAKING |
| `bg-ocobo-skyLight` | `bg-ocobo-sky-light` | ⚠️ BREAKING |
| `bg-ocobo-coralLight` | `bg-ocobo-coral-light` | ⚠️ BREAKING |
| `bg-ocobo-gray` | `bg-ocobo-gray-100` | ⚠️ BREAKING |

---

## Implementation Requirements

### Step 1: Update `tailwind.config.js` Color Structure

**File Location:** `/tailwind.config.js` (project root)

**Full Color Configuration to Apply:**
```javascript
colors: {
  ocobo: {
    dark: '#212323',
    yellow: {
      DEFAULT: '#F1CF25',
      light: '#FFFCEE'
    },
    mint: {
      DEFAULT: '#9ADBBA',
      light: '#EBFDF5'
    },
    sky: {
      DEFAULT: '#99D1DF',
      light: '#F0F9FB'
    },
    coral: {
      DEFAULT: '#FE9C87',
      light: '#FFF5F2'
    },
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717'
    },
    white: '#FFFFFF',
    black: '#000000'
  }
}
```

**Critical Implementation Notes:**
- **Replace entire `colors.ocobo` section** with target structure
- **Preserve other parts** of config (fontFamily, content paths, plugins)
- **Use exact hex values** from Design System Spec (already validated)
- **DEFAULT keyword** enables classes like `bg-ocobo-yellow` (without suffix)

### Step 2: Identify All Breaking Class Changes

**Search Strategy:**
```bash
# Find all files using old camelCase color classes
grep -r "ocobo-yellowLight\|ocobo-mintLight\|ocobo-skyLight\|ocobo-coralLight" \
  --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" \
  components/ pages/ App.tsx
```

**Expected Files to Modify:**
- Any component or page using light color variants
- Likely locations: `components/Navbar/`, `pages/Home.tsx`, `components/Footer/`

### Step 3: Update All Breaking Color Classes

**For Each File Found:**

**Find and Replace Patterns:**
```typescript
// Pattern 1: yellowLight → yellow-light
- className="bg-ocobo-yellowLight"
+ className="bg-ocobo-yellow-light"

// Pattern 2: mintLight → mint-light
- className="bg-ocobo-mintLight"
+ className="bg-ocobo-mint-light"

// Pattern 3: skyLight → sky-light
- className="bg-ocobo-skyLight"
+ className="bg-ocobo-sky-light"

// Pattern 4: coralLight → coral-light
- className="bg-ocobo-coralLight"
+ className="bg-ocobo-coral-light"

// Pattern 5: gray → gray-100 (single value to scale)
- className="bg-ocobo-gray"
+ className="bg-ocobo-gray-100"
```

**All Variants to Check:**
- `bg-ocobo-{color}`
- `text-ocobo-{color}`
- `border-ocobo-{color}`
- `hover:bg-ocobo-{color}`
- `focus:border-ocobo-{color}`
- Any other utility using color tokens

### Step 4: Handle Gray Scale Migration

**Gray Color Analysis Required:**
```bash
# Find all uses of gray token
grep -r "ocobo-gray" --include="*.tsx" --include="*.ts" components/ pages/
```

**For Each Gray Usage:**
1. **Determine semantic intent:**
   - Background (light) → `gray-50` or `gray-100`
   - Border → `gray-200` or `gray-300`
   - Text muted → `gray-600`
   - Dark backgrounds → `gray-800` or `gray-900`

2. **Replace with appropriate scale value:**
```typescript
// Example: Light background
- className="bg-ocobo-gray"
+ className="bg-ocobo-gray-100"

// Example: Border
- className="border-ocobo-gray"
+ className="border-ocobo-gray-200"
```

### Step 5: Add White and Black Tokens

**New Tokens Added:**
- `ocobo.white: '#FFFFFF'`
- `ocobo.black: '#000000'`

**Usage:** These provide explicit brand color references for borders, text, backgrounds where white/black are part of the design system (not generic Tailwind white/black).

**Classes Available:**
- `bg-ocobo-white`, `text-ocobo-white`
- `bg-ocobo-black`, `text-ocobo-black`

---

## Testing & Validation

### Pre-Implementation Checklist

**Before making any changes:**
1. ✅ Ensure Story 1.1 is marked "done" in sprint-status.yaml
2. ✅ Verify current build passes: `npm run build`
3. ✅ Verify dev server works: `npm run dev`
4. ✅ Take screenshots of 2-3 key pages for visual comparison

### Manual Testing Checklist

**After updating `tailwind.config.js` but BEFORE updating classes:**
```bash
npm run build
```
- **Expected:** Build may show warnings about unused classes (old camelCase)
- **Critical:** Build must NOT fail with config errors

**After updating all class names:**
```bash
npm run build
npm run dev
```

1. **Build Validation:**
   - ✅ No Tailwind errors about unknown colors
   - ✅ No PostCSS errors
   - ✅ Build completes successfully
   - ✅ Generated CSS includes new class patterns

2. **Visual Validation (Critical):**
   
   **Primary Colors (Yellow, Mint, Sky, Coral):**
   - Open `http://localhost:3000` in browser
   - Verify Home page renders with correct colors
   - Check Navbar: yellow background should be identical
   - Scroll through page: mint, sky, coral colors should be unchanged
   
   **Light Variants:**
   - Find components using light colors (likely callouts, backgrounds)
   - Verify `bg-ocobo-yellow-light` renders as pale yellow (#FFFCEE)
   - Check hover states if light colors used for interactions
   
   **Gray Scale:**
   - Verify text readability (gray-600 for muted text)
   - Check borders render correctly (gray-200/300)
   - Ensure backgrounds are subtle (gray-50/100)
   
   **Pages to Test (Minimum):**
   - Home page (most components)
   - About page
   - Services page
   - Contact page (form elements may use gray)

3. **Class Verification (Browser DevTools):**
   - Inspect element with `bg-ocobo-yellow` → should show `#F1CF25`
   - Inspect element with `bg-ocobo-yellow-light` → should show `#FFFCEE`
   - Inspect element with `bg-ocobo-gray-100` → should show `#F5F5F5`
   - Verify NO elements have broken classes (check console warnings)

4. **Responsive Testing:**
   - Test on mobile viewport (320px, 375px, 414px)
   - Test on tablet viewport (768px, 1024px)
   - Test on desktop viewport (1280px, 1440px, 1920px)
   - Ensure color tokens work across all breakpoints

### Success Criteria

**This story is successful when:**
1. ✅ `tailwind.config.js` uses nested DEFAULT pattern for all colors
2. ✅ All light color classes use hyphen syntax (`yellow-light` not `yellowLight`)
3. ✅ Gray scale includes all 10 values (50-900)
4. ✅ White and black tokens added
5. ✅ All component/page files updated with new class names
6. ✅ `npm run build` completes with no errors
7. ✅ Visual validation confirms zero visual changes
8. ✅ No console warnings about missing Tailwind classes

**Definition of Done:**
- All acceptance criteria met
- Build passes
- Visual validation complete across 4+ pages
- No breaking changes to color rendering
- Story marked as "done" in sprint-status.yaml

---

## Architecture Compliance

### Design System Architecture Requirements

**From:** `_bmad-output/planning-artifacts/architecture.md`

**Token Architecture Decision (lines 170-194):**
> Hierarchical structure with DEFAULT variants

**Implementation Match:**
```javascript
// ✅ Architecture Compliant
yellow: { DEFAULT: '#F1CF25', light: '#FFFCEE' }

// ❌ NOT Compliant (old structure)
yellow: '#F1CF25', yellowLight: '#FFFCEE'
```

**Rationale (from Architecture):**
- Direct Panda CSS mapping
- Classes like `bg-ocobo-yellow`, `bg-ocobo-yellow-light` are standard
- DEFAULT keyword enables shorthand `bg-ocobo-yellow` instead of `bg-ocobo-yellow-DEFAULT`

### Naming Pattern Consistency

**From:** `_bmad-output/planning-artifacts/architecture.md` (lines 346-347)

**Tailwind Class Patterns - Color Usage:**
```
- Colors: bg-ocobo-yellow, text-ocobo-dark, border-ocobo-mint
```

**This Story Ensures:**
- ✅ All color tokens follow `ocobo-{color}` or `ocobo-{color}-{variant}` pattern
- ✅ No camelCase in class names (`yellowLight` → `yellow-light`)
- ✅ Consistent hyphen-separated naming

---

## Anti-Patterns to Avoid

**❌ DO NOT:**
1. **Change hex values** - Use exact values from Design System Spec
2. **Add new colors** - Only rationalize existing colors (white/black are specified additions)
3. **Skip visual testing** - Colors are critical, must be pixel-perfect
4. **Modify other tokens yet** - Radius and shadows come in Story 1.3
5. **Update component logic** - Only class name changes, no behavior changes
6. **Batch replace without checking** - Each color usage may have different semantic intent (especially gray)

**✅ DO:**
1. **Use find-and-replace carefully** - Verify each change in context
2. **Test across all breakpoints** - Colors must work responsively
3. **Check hover/focus states** - Color tokens used in interactive states
4. **Verify dark mode if exists** - Ensure color structure supports it
5. **Document any ambiguous gray choices** - Add comment if gray scale value selection is non-obvious

---

## File Locations & Structure

**Files to Modify:**

**1. Configuration File:**
```
prototype/
└── tailwind.config.js          # MODIFY - Update colors.ocobo structure
```

**2. Component/Page Files (Determined by Search):**
```
prototype/
├── components/
│   └── [Any files using light color variants or gray]
├── pages/
│   └── [Any pages using light color variants or gray]
└── App.tsx                     # Check if colors used here
```

**Estimated File Count:** 5-15 files (based on typical usage patterns)

**Files NOT Modified:**
```
prototype/
├── postcss.config.js          # No changes
├── index.html                 # No changes (inline styles preserved)
├── index.css                  # No changes
└── vite.config.ts            # No changes
```

---

## Dependencies & Blockers

**Prerequisites:**
- ✅ Story 1.1 (Migrate Tailwind from CDN) completed and marked "done"
- ✅ Local `tailwind.config.js` exists with current color structure
- ✅ Build and dev server working correctly

**Blocks:**
- Story 1.3 (Define Spacing, Radius, Shadow Tokens) waits for this story
- All Epic 2 stories (Core Components) depend on Epic 1 completion

**No External Blockers:** All changes are local to the codebase.

---

## Success Metrics

**Technical Metrics:**
- 0 visual regressions detected
- 0 Tailwind class warnings in build
- 100% of light color classes migrated to hyphen syntax
- Gray scale expanded from 1 → 10 values

**Quality Metrics:**
- All 4+ test pages render identically
- Color contrast ratios maintained (accessibility)
- No broken hover/focus states

**Developer Experience Metrics:**
- AI agent can map colors to Panda CSS without ambiguity
- Class names follow standard Tailwind convention
- Token structure aligns with Park UI patterns

---

## Dev Notes

### Implementation Order

**Recommended sequence:**
1. **Search and document** current color class usage
   ```bash
   grep -r "ocobo-yellowLight\|ocobo-mintLight\|ocobo-skyLight\|ocobo-coralLight\|ocobo-gray" \
     --include="*.tsx" --include="*.ts" components/ pages/ App.tsx > color-usage.txt
   ```
2. **Analyze gray usage** - Determine semantic intent for each gray usage
3. **Update `tailwind.config.js`** with target color structure
4. **Test build** - Verify config is valid before updating classes
5. **Update class names** in found files (use find-and-replace with verification)
6. **Test build again** - Should pass with no warnings
7. **Visual validation** - Compare with Story 1.1 screenshots
8. **Commit changes** with clear message

### Previous Story Learnings (Story 1.1)

**From `1-1-migrate-tailwind-configuration-from-cdn-to-local.md` Dev Notes:**

**What Worked Well:**
- Incremental approach (config first, then HTML) reduced risk
- Visual validation before/after prevented regressions
- Clear documentation prevented confusion

**Patterns Established:**
- Always test build before making component changes
- Use browser DevTools to verify exact color values
- Screenshot comparison is crucial for visual validation

**To Apply Here:**
- Use same incremental approach: config → build test → update classes → visual test
- Keep git history clean with focused commits
- Document any ambiguous decisions (especially gray scale choices)

### Known Considerations

**Gray Scale Semantic Mapping:**
| Use Case | Recommended Value | Rationale |
|----------|------------------|-----------|
| Lightest background | `gray-50` | Subtle, almost white |
| Card backgrounds | `gray-100` | Current `#F5F5F5` equivalent |
| Borders (light) | `gray-200` | Visible but subtle |
| Borders (default) | `gray-300` | Standard border |
| Disabled state | `gray-400` | Medium gray |
| Placeholder text | `gray-500` | Balanced contrast |
| Secondary text | `gray-600` | Good readability |
| Primary text | `gray-700` or `dark` | Strong contrast |
| Dark backgrounds | `gray-800`, `gray-900` | Near-black |

**Color Class Migration Patterns:**
```typescript
// Pattern: Light backgrounds
bg-ocobo-yellowLight  → bg-ocobo-yellow-light
bg-ocobo-mintLight    → bg-ocobo-mint-light
bg-ocobo-skyLight     → bg-ocobo-sky-light
bg-ocobo-coralLight   → bg-ocobo-coral-light

// Pattern: Text colors
text-ocobo-yellowLight → text-ocobo-yellow-light
text-ocobo-gray       → text-ocobo-gray-600 (or appropriate scale)

// Pattern: Borders
border-ocobo-gray     → border-ocobo-gray-200 (or 300)
```

### Potential Issues & Solutions

**Issue:** Build shows "class not found" warnings after config update  
**Solution:** Classes are now different - update component files with new class names

**Issue:** Light colors render too bright/dark after migration  
**Solution:** Verify hex values match Design System Spec exactly, check browser DevTools

**Issue:** Gray scale looks different after migration  
**Solution:** Ensure correct gray scale value chosen for semantic intent (review mapping table)

**Issue:** Hover states broken after color update  
**Solution:** Check if hover classes also need updating (e.g., `hover:bg-ocobo-yellowLight` → `hover:bg-ocobo-yellow-light`)

**Issue:** Some pages look different after changes  
**Solution:** Compare hex values in DevTools with original - may indicate wrong class replacement

### Debugging Checklist

**If colors don't render correctly:**
1. Check `tailwind.config.js` syntax (commas, quotes, structure)
2. Verify PostCSS is processing correctly (`npm run build` logs)
3. Inspect element in DevTools - see what CSS is actually applied
4. Check if class name typos exist (`ocobo-yelow-light` vs `ocobo-yellow-light`)
5. Clear browser cache and rebuild
6. Compare generated CSS file with previous Story 1.1 CSS

---

## References

**Source Documents:**
- [Epics] `_bmad-output/planning-artifacts/epics.md` - Epic 1, Story 1.2 (lines 219-231)
- [Design System Spec] `_bmad-output/analysis/design-system-spec.md` - Colors (lines 10-59)
- [Architecture] `_bmad-output/planning-artifacts/architecture.md` - Token Architecture (lines 170-194)
- [PRD] `_bmad-output/planning-artifacts/prd.md` - FR1-5, NFR1-3

**Previous Story:**
- [Story 1.1] `_bmad-output/implementation-artifacts/1-1-migrate-tailwind-configuration-from-cdn-to-local.md`
- Git commit: "feat(tailwind): migrate configuration from CDN to local setup"

**Technical Documentation:**
- Tailwind Custom Colors: https://tailwindcss.com/docs/customizing-colors
- Tailwind DEFAULT Variant: https://tailwindcss.com/docs/theme#extending-the-default-theme
- Color Contrast: https://webaim.org/resources/contrastchecker/ (if accessibility needed)

**Existing Code References:**
- Current config: `tailwind.config.js` lines 15-28
- Font configuration preserved: `tailwind.config.js` lines 11-14

---

## Dev Agent Record

### Implementation Status

**Story Status:** ready-for-dev

**Next Actions:**
1. Developer: Read this story file completely
2. Developer: Search codebase for color class usage
3. Developer: Update `tailwind.config.js` with target structure
4. Developer: Update all breaking class references
5. Developer: Test thoroughly using manual validation checklist
6. Developer: Mark story as "in-progress" when starting
7. Developer: Mark story as "review" when complete
8. Run code-review workflow for validation
9. SM: Create Story 1.3 after this story marked "done"

### Agent Model Used

_To be filled by dev agent during implementation_

### Completion Notes

_To be filled by dev agent during implementation_

### Files Modified

_To be filled by dev agent during implementation_

---

**Story created:** 2026-01-13  
**Created by:** BMad Method - create-story workflow  
**Story file:** `_bmad-output/implementation-artifacts/1-2-define-color-tokens.md`
