# Story 1.3: Define Spacing, Radius, and Shadow Tokens

**Status:** ready-for-dev  
**Epic:** 1 - Design Tokens Foundation  
**Story ID:** 1.3  
**Story Key:** 1-3-define-spacing-radius-and-shadow-tokens

---

## Story

As an **AI Agent**,  
I want border-radius and box-shadow values defined as tokens in tailwind.config.js,  
so that I can use consistent `rounded-md`, `shadow-hero` classes across all components.

---

## Acceptance Criteria

**AC1:** Given the DS spec defines 5 radius tokens and 4 shadow tokens  
**When** I define these in tailwind.config.js under `theme.extend`  
**Then** `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-full` are available  
**And** `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-hero` are available  
**And** existing UI renders identically

---

## Business Context

This story is **critical** to completing the Design Tokens Foundation (Epic 1). It:
- Rationalizes the 12+ inconsistent border-radius values currently used in the codebase
- Standardizes 4 box-shadow values to replace custom inline shadow definitions
- Completes the token foundation required for Epic 2 (Core Components)
- Enables future components to reference semantic radius and shadow tokens
- Aligns with Panda CSS migration strategy

**Epic Objective:** Enable AI Agent to access all design tokens from a single source of truth (`tailwind.config.js`).

**Dependencies:**
- ✅ Story 1.1 completed - Tailwind config migrated from CDN to local
- ✅ Story 1.2 completed - Color tokens defined with nested DEFAULT pattern
- Story 1.4 blocked until this story completes (typography tokens)

---

## Technical Context

### Current State Analysis

**Current Radius Usage in Codebase:**
From codebase analysis, the following inconsistent patterns exist:
- `rounded-xl` (0.75rem/12px) - Icon containers, badges
- `rounded-2xl` (1rem/16px) - Cards, sub-menu items
- `rounded-full` (9999px) - Pills, buttons, avatars
- `rounded-[2rem]` (32px) - Custom Navbar, Newsletter widget
- `rounded-[2.5rem]` (40px) - Custom Cards, Sections
- `rounded-[3rem]` (48px) - Custom Story grids
- `rounded-[4rem]` (64px) - Custom Hero CTAs
- `rounded-lg`, `rounded-md` (Tailwind defaults) - Various components

**Current Shadow Usage in Codebase:**
Custom shadows are defined inline throughout:
- `shadow-[0_15px_40px_-10px_rgba(0,0,0,0.12)]` - Navbar
- `shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]` - Navbar dropdown
- `shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)]` - Newsletter widget
- `shadow-[0_50px_100px_-20px_rgba(241,207,37,0.3)]` - Hero sections (yellow)
- `shadow-lg`, `shadow-xl`, `shadow-2xl` (Tailwind defaults) - Various cards
- `shadow-sm` (Tailwind default) - Service card icons

**Git Context (Last Story):**
- Last commit: `e6b8cd3` - "refactor(styles): Update color palette in Tailwind config"
- Files modified in Story 1.2: 19 files (tailwind.config.js + 18 component/page files)
- Zero visual regressions achieved in Stories 1.1 and 1.2

### Target State (This Story)

**Target Radius Configuration (From Design System Spec):**
```javascript
borderRadius: {
  sm: '0.5rem',   // 8px  - Badges, small inputs
  md: '1rem',     // 16px - Standard cards, buttons
  lg: '1.5rem',   // 24px - Hero cards, sections
  xl: '2.5rem',   // 40px - Premium cards, modals
  full: '9999px'  // Pills, avatars
}
```

**Target Shadow Configuration (From Design System Spec):**
```javascript
boxShadow: {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',           // Cards at rest
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',        // Cards hover
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',      // Modals, dropdowns
  hero: '0 40px 100px -20px rgb(0 0 0 / 0.08)'  // Hero sections, major CTAs
}
```

**Rationalization Strategy:**

| Current Pattern | Target Token | Rationale |
|----------------|--------------|-----------|
| `rounded-xl` (12px) | `rounded-sm` (8px) | Harmonize small radius |
| `rounded-2xl` (16px) | `rounded-md` (16px) | Exact match, use token |
| `rounded-[2rem]` (32px) | `rounded-lg` (24px) | Rationalize to DS token |
| `rounded-[2.5rem]` (40px) | `rounded-xl` (40px) | Exact match, use token |
| `rounded-[3rem]` (48px) | `rounded-xl` (40px) | Minor adjustment acceptable |
| `rounded-[4rem]` (64px) | `rounded-xl` (40px) | Major adjustment, validate visually |
| `rounded-full` | `rounded-full` | No change |
| `shadow-[custom]` (navbar/cards) | `shadow-lg` | Standardize to lg |
| `shadow-[custom]` (hero sections) | `shadow-hero` | Use new hero token |
| `shadow-xl`, `shadow-2xl` | `shadow-lg` | Rationalize Tailwind defaults |

**⚠️ Visual Impact Assessment:**
- **Low impact:** `rounded-2xl` → `rounded-md`, `rounded-[2.5rem]` → `rounded-xl` (exact matches)
- **Minor adjustment:** `rounded-xl` → `rounded-sm`, `rounded-[2rem]` → `rounded-lg` (subtle difference)
- **Moderate adjustment:** `rounded-[3rem]`, `rounded-[4rem]` → `rounded-xl` (noticeable but acceptable per PRD FR29)
- **Shadow standardization:** Custom shadows → token shadows (visual similarity maintained)

---

## Implementation Requirements

### Step 1: Update `tailwind.config.js` Token Structure

**File Location:** `/tailwind.config.js` (project root)

**Add Border Radius Configuration:**
```javascript
theme: {
  extend: {
    // ... existing colors configuration ...
    borderRadius: {
      sm: '0.5rem',   // 8px
      md: '1rem',     // 16px
      lg: '1.5rem',   // 24px
      xl: '2.5rem',   // 40px
      full: '9999px'  // Keep default
    }
  }
}
```

**Add Box Shadow Configuration:**
```javascript
theme: {
  extend: {
    // ... existing colors configuration ...
    // ... borderRadius configuration ...
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      hero: '0 40px 100px -20px rgb(0 0 0 / 0.08)'
    }
  }
}
```

**Critical Implementation Notes:**
- **Add** `borderRadius` and `boxShadow` to `theme.extend` section
- **Preserve** existing `colors` and `fontFamily` configurations from Story 1.2
- **Use exact values** from Design System Spec
- **Override Tailwind defaults** - Our tokens replace sm/md/lg/xl

### Step 2: Identify All Border Radius Class Changes

**Search Strategy:**
```bash
# Find all custom rounded classes that need rationalization
grep -r "rounded-\[" --include="*.tsx" --include="*.ts" components/ pages/ App.tsx

# Find existing rounded-xl usage (sm candidate)
grep -r "rounded-xl\|rounded-2xl" --include="*.tsx" --include="*.ts" components/ pages/
```

**Expected Files to Modify (based on codebase analysis):**
- `components/Navbar.tsx` (multiple custom radius: `rounded-[2rem]`)
- `components/NewsletterWidget.tsx` (`rounded-[2rem]`, `rounded-xl`)
- `pages/StoryDetail.tsx` (extensive custom radius: `rounded-[2rem]`, `rounded-[2.5rem]`, `rounded-[3rem]`)
- `pages/Podcast.tsx` (`rounded-[3rem]`)
- Other page/component files using custom rounded values

### Step 3: Identify All Box Shadow Class Changes

**Search Strategy:**
```bash
# Find all custom shadow classes
grep -r "shadow-\[" --include="*.tsx" --include="*.ts" components/ pages/ App.tsx

# Find Tailwind shadow defaults to rationalize
grep -r "shadow-xl\|shadow-2xl" --include="*.tsx" --include="*.ts" components/ pages/
```

**Expected Files to Modify:**
- `components/Navbar.tsx` (custom shadows: `shadow-[0_15px_40px...]`, `shadow-[0_25px_60px...]`)
- `components/NewsletterWidget.tsx` (`shadow-[0_30px_100px...]`)
- `pages/StoryDetail.tsx` (`shadow-[0_50px_100px...]` with yellow tint)
- Multiple files using `shadow-xl`, `shadow-2xl`

### Step 4: Update Border Radius Classes

**Replacement Patterns:**

**Pattern 1: Small radius (badges, icons)**
```tsx
// Current
- className="rounded-xl w-10 h-10"
+ className="rounded-sm w-10 h-10"
```

**Pattern 2: Medium radius (cards, buttons)**
```tsx
// Current
- className="rounded-2xl p-4"
+ className="rounded-md p-4"
```

**Pattern 3: Large radius (sections, hero cards)**
```tsx
// Current
- className="rounded-[2rem] p-8"
+ className="rounded-lg p-8"

// Current
- className="bg-white rounded-[3rem] overflow-hidden"
+ className="bg-white rounded-xl overflow-hidden"
```

**Pattern 4: Extra large radius (modals, premium cards)**
```tsx
// Current
- className="rounded-[2.5rem] p-10"
+ className="rounded-xl p-10"

// Current
- className="rounded-[4rem] text-center"
+ className="rounded-xl text-center"
```

**Pattern 5: Full radius (pills, avatars)**
```tsx
// Current (no change)
- className="rounded-full px-6"
+ className="rounded-full px-6"
```

### Step 5: Update Box Shadow Classes

**Replacement Patterns:**

**Pattern 1: Navbar shadows → shadow-lg**
```tsx
// Current
- className="shadow-[0_15px_40px_-10px_rgba(0,0,0,0.12)]"
+ className="shadow-lg"

// Current
- className="shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]"
+ className="shadow-lg"
```

**Pattern 2: Newsletter widget shadow → shadow-lg**
```tsx
// Current
- className="shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)]"
+ className="shadow-lg"
```

**Pattern 3: Hero section shadows → shadow-hero**
```tsx
// Current
- className="shadow-[0_50px_100px_-20px_rgba(241,207,37,0.3)]"
+ className="shadow-hero"

// Note: shadow-hero is neutral (no color tint)
// Yellow tint was non-standard, hero token provides consistency
```

**Pattern 4: Rationalize Tailwind defaults**
```tsx
// Current
- className="shadow-xl"
+ className="shadow-lg"

// Current
- className="shadow-2xl"
+ className="shadow-lg"
```

**Pattern 5: Keep subtle shadows**
```tsx
// Current (no change)
- className="shadow-sm"
+ className="shadow-sm"
```

### Step 6: Visual Validation Per File

**For Each Modified File:**
1. **Before change:** Take screenshot of component/page
2. **After change:** Compare rendering
3. **Acceptable differences:** Slightly smaller/larger radius, shadow intensity variation
4. **Unacceptable:** Broken layouts, missing shadows, distorted appearance

**Key Visual Checkpoints:**
- Navbar: Smooth rounded corners, visible shadow depth
- Cards: Consistent corner radius across all card types
- Buttons: Pill shape preserved for `rounded-full`
- Hero sections: Dramatic shadow effect maintained with `shadow-hero`
- Newsletter widget: Container rounded corners harmonized

---

## Testing & Validation

### Pre-Implementation Checklist

**Before making any changes:**
1. ✅ Ensure Story 1.2 is marked "done" in sprint-status.yaml
2. ✅ Verify current build passes: `npm run build`
3. ✅ Verify dev server works: `npm run dev`
4. ✅ Take screenshots of key components:
   - Navbar (top of any page)
   - Home page hero section
   - Service cards (Services page)
   - Story detail page (extensive radius usage)
   - Newsletter widget

### Manual Testing Checklist

**After updating `tailwind.config.js` but BEFORE updating classes:**
```bash
npm run build
```
- **Expected:** Build succeeds, no config errors
- **Critical:** New tokens (`rounded-sm`, `shadow-hero`) are available

**After updating all class names:**
```bash
npm run build
npm run dev
```

1. **Build Validation:**
   - ✅ No Tailwind errors about unknown tokens
   - ✅ No PostCSS errors
   - ✅ Build completes successfully
   - ✅ No warnings about invalid shadow/radius values

2. **Visual Validation (Critical):**

   **Border Radius Testing:**
   - Open `http://localhost:3000` in browser
   - **Navbar:** Verify rounded corners are smooth (not too sharp or too round)
   - **Home page cards:** Check consistency across all card components
   - **Service page:** Verify service cards have harmonized corners
   - **Story detail page:** Check multiple radius sizes work together visually
   - **Buttons:** Verify `rounded-full` pills are unchanged
   
   **Box Shadow Testing:**
   - **Navbar:** Check shadow depth is visible but not too heavy
   - **Hero sections:** Verify dramatic shadow effect with `shadow-hero`
   - **Cards on hover:** Check shadow changes on interactive elements
   - **Newsletter widget:** Verify shadow provides depth
   - **Modals/Dropdowns:** Test if applicable (shadow-lg)
   
   **Pages to Test (Minimum):**
   - Home page (hero section with shadow-hero)
   - Services page (cards with shadows)
   - Story detail page (extensive radius and shadow usage)
   - Navbar (all pages - sticky component with custom shadows)
   - Any page with Newsletter widget

3. **Class Verification (Browser DevTools):**
   - Inspect element with `rounded-md` → should show `border-radius: 1rem`
   - Inspect element with `rounded-xl` → should show `border-radius: 2.5rem`
   - Inspect element with `shadow-lg` → should show box-shadow CSS
   - Inspect element with `shadow-hero` → should show `0 40px 100px...`
   - Verify NO broken custom classes remain (check console)

4. **Responsive Testing:**
   - Test radius consistency across breakpoints (mobile, tablet, desktop)
   - Verify shadows render correctly on different screen sizes
   - Check no layout shifts due to radius/shadow changes

### Success Criteria

**This story is successful when:**
1. ✅ `tailwind.config.js` defines 5 radius tokens (sm, md, lg, xl, full)
2. ✅ `tailwind.config.js` defines 4 shadow tokens (sm, md, lg, hero)
3. ✅ All custom `rounded-[...]` classes replaced with tokens
4. ✅ All custom `shadow-[...]` classes replaced with tokens
5. ✅ Tailwind default shadows (`shadow-xl`, `shadow-2xl`) rationalized
6. ✅ `npm run build` completes with no errors or warnings
7. ✅ Visual validation confirms acceptable visual similarity (per PRD FR29)
8. ✅ No console errors about missing Tailwind classes
9. ✅ Story marked as "done" in sprint-status.yaml

**Definition of Done:**
- All acceptance criteria met
- Build passes with no warnings
- Visual validation complete across 5+ pages/components
- Minor visual adjustments documented and acceptable
- Previous story patterns applied (incremental approach, clear commits)

---

## Architecture Compliance

### Design System Architecture Requirements

**From:** `_bmad-output/planning-artifacts/architecture.md`

**Token Architecture Decision (lines 170-194):**
> Hierarchical structure with DEFAULT variants

**Implementation Match:**
```javascript
// ✅ Architecture Compliant - Flat structure for radius/shadow (no variants needed)
borderRadius: {
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2.5rem',
  full: '9999px'
}

boxShadow: {
  sm: '...',
  md: '...',
  lg: '...',
  hero: '...'
}
```

**Rationale (from Architecture):**
- Flat structure for single-value tokens (unlike colors with DEFAULT variants)
- Direct Panda CSS mapping for radius and shadow tokens
- Classes like `rounded-md`, `shadow-hero` follow Tailwind conventions

### Naming Pattern Consistency

**From:** `_bmad-output/planning-artifacts/architecture.md` (lines 346-347)

**Tailwind Class Patterns - Radius and Shadow Usage:**
```
- Radius: rounded-sm, rounded-md, rounded-lg, rounded-xl
- Shadows: shadow-sm, shadow-md, shadow-lg, shadow-hero
```

**This Story Ensures:**
- ✅ All radius tokens follow `rounded-{size}` pattern
- ✅ All shadow tokens follow `shadow-{size}` pattern
- ✅ No custom arbitrary values remain (`rounded-[2rem]` eliminated)
- ✅ Consistent hyphen-separated naming

---

## Anti-Patterns to Avoid

**❌ DO NOT:**
1. **Change token values** - Use exact values from Design System Spec (8px, 16px, 24px, 40px for radius)
2. **Add new sizes** - Only use the 5 defined radius tokens and 4 shadow tokens
3. **Skip visual comparison** - Radius/shadow changes can significantly impact visual design
4. **Modify component layout** - Only class name changes, no structural changes
5. **Batch replace without context** - Each radius usage may have semantic meaning
6. **Remove `rounded-full`** - This token must remain for pills and avatars
7. **Use arbitrary values** - All radius/shadow must use tokens, no `rounded-[...]` or `shadow-[...]`

**✅ DO:**
1. **Compare before/after screenshots** - Visual validation is mandatory
2. **Test across all breakpoints** - Radius and shadows must work responsively
3. **Document visual adjustments** - Note any intentional changes (e.g., `rounded-[4rem]` → `rounded-xl`)
4. **Check hover/focus states** - Shadows often change on interaction
5. **Verify Navbar carefully** - Complex component with multiple custom shadows
6. **Test Hero sections** - `shadow-hero` is new token for dramatic effect

---

## File Locations & Structure

**Files to Modify:**

**1. Configuration File:**
```
prototype/
└── tailwind.config.js          # MODIFY - Add borderRadius and boxShadow tokens
```

**2. Component Files (Based on Search Results):**
```
prototype/
├── components/
│   ├── Navbar.tsx              # MODIFY - Multiple custom radius and shadows
│   ├── NewsletterWidget.tsx    # MODIFY - Custom radius and shadows
│   ├── ServiceCard.tsx         # MODIFY - shadow-lg hover
│   ├── Footer.tsx              # MODIFY - rounded-full buttons
│   └── Button.tsx              # MODIFY - rounded-full base style
```

**3. Page Files (Based on Search Results):**
```
prototype/
└── pages/
    ├── StoryDetail.tsx         # MODIFY - Extensive custom radius usage
    ├── Podcast.tsx             # MODIFY - rounded-[3rem] usage
    └── [Other pages using shadow-xl, shadow-2xl]
```

**Estimated File Count:** 10-15 files (radius and shadow are widely used)

**Files NOT Modified:**
```
prototype/
├── postcss.config.js           # No changes
├── index.html                  # No changes
├── index.css                   # No changes
└── vite.config.ts             # No changes
```

---

## Dependencies & Blockers

**Prerequisites:**
- ✅ Story 1.1 (Migrate Tailwind from CDN) completed and marked "done"
- ✅ Story 1.2 (Define Color Tokens) completed and marked "done"
- ✅ Local `tailwind.config.js` exists with color structure from Story 1.2
- ✅ Build and dev server working correctly

**Blocks:**
- Story 1.4 (Define Typography Tokens) waits for this story
- All Epic 2 stories (Core Components) depend on Epic 1 completion

**No External Blockers:** All changes are local to the codebase.

---

## Success Metrics

**Technical Metrics:**
- 0 custom `rounded-[...]` arbitrary values remaining
- 0 custom `shadow-[...]` arbitrary values remaining
- 5 radius tokens defined in tailwind.config.js
- 4 shadow tokens defined in tailwind.config.js
- 0 Tailwind warnings in build output

**Quality Metrics:**
- Acceptable visual similarity maintained (per PRD FR29)
- No broken layouts due to radius changes
- Shadow depth consistency across components
- No console errors about missing classes

**Developer Experience Metrics:**
- AI agent can understand radius token semantics (sm = small elements, xl = premium)
- Shadow tokens have clear semantic meaning (hero = dramatic)
- Token structure aligns with Panda CSS patterns

---

## Dev Notes

### Implementation Order

**Recommended sequence:**
1. **Search and document** current radius and shadow usage
   ```bash
   grep -r "rounded-\[" --include="*.tsx" components/ pages/ > radius-usage.txt
   grep -r "shadow-\[" --include="*.tsx" components/ pages/ > shadow-usage.txt
   ```
2. **Analyze semantic intent** - Determine which token best fits each usage
3. **Update `tailwind.config.js`** with borderRadius and boxShadow configurations
4. **Test build** - Verify config is valid before updating classes
5. **Update radius classes** in priority order: Navbar → Pages → Other components
6. **Test radius changes** visually after each major file
7. **Update shadow classes** using same priority order
8. **Test shadow changes** visually after each major file
9. **Final visual validation** - Compare with Story 1.2 state
10. **Commit changes** with clear message

### Previous Story Learnings (Stories 1.1 and 1.2)

**From Story 1.1 Dev Notes:**
- Incremental approach (config first, then components) reduced risk
- Visual validation before/after prevented regressions
- Clear documentation prevented confusion

**From Story 1.2 Dev Notes:**
- Search-first strategy helped identify all affected files
- Semantic analysis prevented wrong replacements (especially gray scale)
- Browser DevTools verification caught class name typos
- Multiple test pages caught edge cases

**Patterns Established to Apply Here:**
- Config → build test → update classes → visual test (proven effective)
- Keep git history clean with focused commits
- Document rationale for ambiguous decisions (especially radius size choices)
- Use screenshots for visual comparison
- Test hover/focus states (shadows often used here)

### Known Considerations

**Border Radius Semantic Mapping:**
| Use Case | Token | Value | Components |
|----------|-------|-------|------------|
| Badges, small UI | `rounded-sm` | 8px | Icons, badges, small inputs |
| Cards, buttons | `rounded-md` | 16px | Standard cards, buttons |
| Hero cards, sections | `rounded-lg` | 24px | Large cards, section containers |
| Premium cards, modals | `rounded-xl` | 40px | Hero cards, modal overlays |
| Pills, avatars | `rounded-full` | 9999px | Buttons, avatar images |

**Box Shadow Semantic Mapping:**
| Use Case | Token | Components |
|----------|-------|------------|
| Subtle depth | `shadow-sm` | Cards at rest, service icons |
| Hover elevation | `shadow-md` | Card hover states |
| Modals, dropdowns | `shadow-lg` | Navbar, newsletter widget, popups |
| Dramatic hero effect | `shadow-hero` | Hero sections, major CTAs |

**Radius Change Impact Assessment:**
```
rounded-xl (12px) → rounded-sm (8px)        : Minor visual change
rounded-2xl (16px) → rounded-md (16px)      : No visual change
rounded-[2rem] (32px) → rounded-lg (24px)   : Noticeable but acceptable
rounded-[2.5rem] (40px) → rounded-xl (40px) : No visual change
rounded-[3rem] (48px) → rounded-xl (40px)   : Moderate change, validate
rounded-[4rem] (64px) → rounded-xl (40px)   : Significant change, validate carefully
```

**Shadow Change Impact Assessment:**
```
Custom navbar shadows → shadow-lg        : Standardized depth
Custom widget shadow → shadow-lg         : Standardized depth
Custom hero shadow → shadow-hero         : Purpose-specific, dramatic effect
shadow-xl → shadow-lg                    : Rationalized to DS token
shadow-2xl → shadow-lg                   : Rationalized to DS token
```

### Potential Issues & Solutions

**Issue:** Radius looks too sharp/round after token replacement  
**Solution:** Verify correct token chosen for semantic intent, compare with DS spec values

**Issue:** Shadow appears too heavy/light after replacement  
**Solution:** Check if correct shadow token used (sm/md/lg/hero), compare browser DevTools values

**Issue:** `rounded-[4rem]` → `rounded-xl` change is too noticeable  
**Solution:** Per PRD FR29, minor adjustments acceptable; document in commit message

**Issue:** Hero section shadow lost yellow tint after replacing with `shadow-hero`  
**Solution:** Intentional standardization; `shadow-hero` provides neutral dramatic effect per DS spec

**Issue:** Navbar dropdown shadow looks different  
**Solution:** Custom shadow was non-standard; `shadow-lg` provides consistent depth

**Issue:** Some pages look slightly different after changes  
**Solution:** Document intentional visual adjustments; verify they meet PRD FR29 acceptability

### Debugging Checklist

**If radius doesn't render correctly:**
1. Check `tailwind.config.js` syntax (commas, quotes, rem units)
2. Verify PostCSS is processing correctly (`npm run build` logs)
3. Inspect element in DevTools - see actual border-radius value
4. Check if class name typos exist (`rounded-sm` vs `rounded-small`)
5. Clear browser cache and rebuild
6. Compare generated CSS with Story 1.2 CSS

**If shadow doesn't render correctly:**
1. Check `tailwind.config.js` boxShadow syntax (commas, rgb values)
2. Verify shadow is visible (check background color contrast)
3. Inspect element in DevTools - see box-shadow CSS value
4. Check if multiple shadows are stacked (combine if needed)
5. Test on different backgrounds (shadows appear differently)
6. Compare with custom shadow values in codebase

---

## References

**Source Documents:**
- [Epics] `_bmad-output/planning-artifacts/epics.md` - Epic 1, Story 1.3 (lines 233-246)
- [Design System Spec] `_bmad-output/analysis/design-system-spec.md` - Border Radius (lines 63-71), Shadows (lines 75-83)
- [Architecture] `_bmad-output/planning-artifacts/architecture.md` - Token Architecture (lines 170-194)
- [PRD] `_bmad-output/planning-artifacts/prd.md` - FR1-5, NFR1-3, FR29 (minor adjustments acceptable)

**Previous Stories:**
- [Story 1.1] `_bmad-output/implementation-artifacts/1-1-migrate-tailwind-configuration-from-cdn-to-local.md`
- [Story 1.2] `_bmad-output/implementation-artifacts/1-2-define-color-tokens.md`
- Git commits:
  - `9455f42` - Story 1.1: "feat(tailwind): migrate configuration from CDN to local setup"
  - `e6b8cd3` - Story 1.2: "refactor(styles): Update color palette in Tailwind config"

**Technical Documentation:**
- Tailwind Border Radius: https://tailwindcss.com/docs/border-radius
- Tailwind Box Shadow: https://tailwindcss.com/docs/box-shadow
- Tailwind Custom Values: https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values

**Existing Code References:**
- Current config: `tailwind.config.js` lines 9-52 (colors and fontFamily from Stories 1.1-1.2)
- Navbar component: `components/Navbar.tsx` (extensive custom radius and shadow usage)
- Story detail page: `pages/StoryDetail.tsx` (multiple custom radius examples)

---

## Previous Story Intelligence

### Key Learnings from Story 1.2

**Implementation Approach:**
- **Search-first strategy** worked well - identified all 19 affected files before making changes
- **Semantic analysis** critical for gray scale mapping (background vs border vs text)
- **Incremental testing** caught issues early (config → build → components → visual)

**Technical Patterns Established:**
- Config structure uses `theme.extend` to preserve Tailwind defaults
- Nested objects with DEFAULT pattern for color variants (not applicable to radius/shadow)
- Hyphen-separated class names (`yellow-light` not `yellowLight`)

**Visual Validation Approach:**
- Screenshot comparison before/after changes
- Browser DevTools to verify exact CSS values applied
- Test across 4+ pages minimum (Home, About, Services, Contact)
- Check hover/focus states explicitly

**Git Workflow:**
- Clear commit message describing the change
- Single focused commit per story
- Story file creation included in commit

**What Worked Well:**
- Zero visual regressions achieved through careful validation
- Build passed on first attempt after config changes
- Clear documentation prevented confusion during implementation

**Challenges Encountered:**
- Gray scale semantic mapping required analysis (resolved by using mapping table)
- Multiple files needed updates (18 files) - systematic approach helped
- Some light color usage was ambiguous - resolved by context analysis

**To Apply to Story 1.3:**
- Use same search-first, semantic-analysis approach for radius/shadow
- Radius choices may require visual judgment (8px vs 16px vs 40px semantic meaning)
- Shadow replacements are more straightforward (depth levels)
- Expect 10-15 files to modify (similar scope to Story 1.2)
- Extra attention to Navbar and StoryDetail (heavy custom usage)

### Git Intelligence Summary

**Recent Commits Context:**
```
e6b8cd3 - Story 1.2: refactor(styles): Update color palette in Tailwind config
  - 19 files changed (1 config + 18 components/pages)
  - Color token migration successful
  - Pattern: config first, then components

9455f42 - Story 1.1: feat(tailwind): migrate configuration from CDN to local setup
  - 5 files changed (config files + index.html)
  - CDN to local migration successful
  - Pattern: infrastructure first, then usage
```

**Patterns to Follow:**
- Config changes always precede component changes
- Build validation between config and component updates
- Focused commits with clear conventional commit messages
- Story markdown file included in commit

---

## Dev Agent Record

### Implementation Status

**Story Status:** ready-for-dev

**Next Actions:**
1. Developer: Read this story file completely
2. Developer: Search codebase for radius and shadow usage
3. Developer: Update `tailwind.config.js` with borderRadius and boxShadow tokens
4. Developer: Test build to validate configuration
5. Developer: Update all radius classes (priority: Navbar → Pages → Components)
6. Developer: Visual validation after radius changes
7. Developer: Update all shadow classes using same priority
8. Developer: Visual validation after shadow changes
9. Developer: Final comprehensive testing across 5+ pages
10. Developer: Mark story as "in-progress" when starting
11. Developer: Mark story as "review" when complete
12. Run code-review workflow for validation
13. SM: Create Story 1.4 after this story marked "done"

### Agent Model Used

_To be filled by dev agent during implementation_

### Completion Notes

_To be filled by dev agent during implementation_

### Files Modified

_To be filled by dev agent during implementation_

---

**Story created:** 2026-01-13  
**Created by:** BMad Method - create-story workflow v2.0  
**Story file:** `_bmad-output/implementation-artifacts/1-3-define-spacing-radius-and-shadow-tokens.md`
