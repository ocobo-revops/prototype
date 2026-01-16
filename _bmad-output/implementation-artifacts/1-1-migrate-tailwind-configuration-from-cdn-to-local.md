# Story 1.1: Migrate Tailwind Configuration from CDN to Local

**Status:** ready-for-dev  
**Epic:** 1 - Design Tokens Foundation  
**Story ID:** 1.1  
**Story Key:** 1-1-migrate-tailwind-configuration-from-cdn-to-local

---

## Story

As an **AI Agent**,  
I want the Tailwind configuration to be local in `tailwind.config.js`,  
so that I can read and understand all design tokens from a single file.

---

## Acceptance Criteria

**AC1:** Given the project uses Tailwind via CDN in index.html  
**When** I create a local tailwind.config.js with PostCSS configuration  
**Then** all existing styles continue to work identically  
**And** the CDN script is removed from index.html  
**And** `npm run dev` and `npm run build` work without errors

---

## Business Context

This story is the **foundation** of the entire Design System Rationalization project. It enables:
- Centralized design token management in `tailwind.config.js`
- AI agents to read and understand all tokens from a single source
- Future stories to reference tokens instead of hardcoded values
- Migration path to Panda CSS / Park UI (future project)

**Epic Objective:** Enable AI Agent to access all design tokens from a single source of truth (`tailwind.config.js`).

**Dependencies:** This is Story 1.1 - no dependencies on previous stories.

---

## Technical Context

### Current State Analysis

**Current Tailwind Setup (CDN-based):**
- Location: `index.html` lines 8-37
- CDN script: `<script src="https://cdn.tailwindcss.com"></script>`
- Inline configuration in `<script>` tag with `tailwind.config` object
- Colors already defined in CDN config (ocobo-dark, ocobo-yellow, etc.)
- Custom fonts loaded via `@font-face` from production domain

**Current Configuration Structure:**
```javascript
// index.html (inline script)
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bornia', 'Inter', 'sans-serif'], 
        display: ['Bermia', 'Inter', 'sans-serif'],
      },
      colors: {
        ocobo: {
          dark: '#212323',
          yellow: '#F1CF25',
          yellowLight: '#FFFCEE',
          mint: '#9ADBBA',
          mintLight: '#EBFDF5',
          sky: '#99D1DF',
          skyLight: '#F0F9FB',
          coral: '#FE9C87',
          coralLight: '#FFF5F2',
          gray: '#F5F5F5'
        }
      }
    }
  }
}
```

**Critical Observation:** Current color structure uses flat naming (e.g., `yellowLight`) but architecture document specifies nested DEFAULT pattern (e.g., `yellow: { DEFAULT: '#F1CF25', light: '#FFFCEE' }`). **This story migrates AS-IS** - color structure rationalization happens in Story 1.2.

### Target State (This Story)

**Files to Create:**
1. `tailwind.config.js` - Main configuration (migrate existing CDN config AS-IS)
2. `postcss.config.js` - PostCSS configuration for Tailwind processing
3. `src/index.css` - Tailwind directives (if not exists, or update existing)

**Files to Modify:**
1. `index.html` - Remove CDN script, keep custom fonts and styles
2. `package.json` - Add Tailwind and PostCSS dependencies

**Files NOT Modified in This Story:**
- All component files (no code changes yet)
- All page files (styles work identically)
- `vite.config.ts` (already configured correctly)

---

## Implementation Requirements

### Step 1: Install Dependencies

**Required packages:**
```bash
npm install -D tailwindcss@^3.4.0 postcss@^8.4.35 autoprefixer@^10.4.17
```

**Rationale:**
- Tailwind CSS 3.4.x: Latest stable with all features used in CDN version
- PostCSS: Required for Tailwind processing
- Autoprefixer: Ensures browser compatibility (best practice)

### Step 2: Create `tailwind.config.js`

**File Location:** `/tailwind.config.js` (project root)

**Configuration Structure:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bornia', 'Inter', 'sans-serif'], 
        display: ['Bermia', 'Inter', 'sans-serif'],
      },
      colors: {
        ocobo: {
          dark: '#212323',
          yellow: '#F1CF25',
          yellowLight: '#FFFCEE',
          mint: '#9ADBBA',
          mintLight: '#EBFDF5',
          sky: '#99D1DF',
          skyLight: '#F0F9FB',
          coral: '#FE9C87',
          coralLight: '#FFF5F2',
          gray: '#F5F5F5'
        }
      }
    }
  },
  plugins: [],
}
```

**Critical Implementation Notes:**
- **Content paths:** Must include `index.html`, `src/**`, and root-level files (for `App.tsx`, `index.tsx`)
- **Migration AS-IS:** Copy existing CDN config structure exactly (flat color naming preserved)
- **Font configuration:** Preserve existing font families exactly as-is
- **No plugins yet:** Empty array (future stories may add plugins)

### Step 3: Create `postcss.config.js`

**File Location:** `/postcss.config.js` (project root)

**Configuration:**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**Rationale:** Minimal PostCSS setup - Tailwind + Autoprefixer is standard configuration.

### Step 4: Create/Update CSS Entry Point

**Check if file exists:** `src/index.css` or `index.css`

**If file does NOT exist, create:** `/index.css`

**Content:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**If file EXISTS:**
- Add Tailwind directives at the TOP of the file
- Preserve any existing custom CSS below

**Critical:** Verify `index.html` imports this file (line 107 shows `<link rel="stylesheet" href="/index.css">`).

### Step 5: Update `index.html`

**Changes Required:**

**REMOVE:**
```html
<script src="https://cdn.tailwindcss.com"></script>
```

**REMOVE:**
```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Bornia', 'Inter', 'sans-serif'], 
          display: ['Bermia', 'Inter', 'sans-serif'],
        },
        colors: {
          ocobo: {
            dark: '#212323',
            yellow: '#F1CF25',
            yellowLight: '#FFFCEE',
            mint: '#9ADBBA',
            mintLight: '#EBFDF5',
            sky: '#99D1DF',
            skyLight: '#F0F9FB',
            coral: '#FE9C87',
            coralLight: '#FFF5F2',
            gray: '#F5F5F5'
          }
        }
      }
    }
  }
</script>
```

**PRESERVE (DO NOT MODIFY):**
- All `@font-face` declarations (lines 42-66)
- `:root` CSS variables (lines 68-71)
- `body` and heading styles (lines 73-84)
- `::selection` style (lines 90-93)
- All other `<style>` content

**Verification Point:** After changes, only the `<script src="https://cdn.tailwindcss.com"></script>` and inline `tailwind.config` script should be removed.

---

## Testing & Validation

### Manual Testing Checklist

**After implementation, verify:**

1. **Build succeeds:**
   ```bash
   npm run build
   ```
   - No Tailwind errors
   - No PostCSS errors
   - Build completes successfully

2. **Dev server works:**
   ```bash
   npm run dev
   ```
   - Server starts on port 3000
   - No console errors about Tailwind
   - Hot reload works

3. **Visual validation (Critical):**
   - Open `http://localhost:3000` in browser
   - Navigate to Home page - verify all colors render identically
   - Check Navbar - verify yellow background, dark text
   - Scroll through page - verify mint, sky, coral colors appear correctly
   - Check at least 3 other pages (About, Services, Contact)
   - Verify custom fonts (Bermia, Bornia) load correctly

4. **Class verification:**
   - Inspect element with `bg-ocobo-yellow` class - should show `#F1CF25`
   - Inspect element with `text-ocobo-dark` class - should show `#212323`
   - Verify existing Tailwind utilities work (`flex`, `grid`, `px-4`, etc.)

**Success Criteria:**
- ✅ Build passes with no errors
- ✅ Dev server runs without warnings
- ✅ All pages render visually identical to CDN version
- ✅ Custom fonts load correctly
- ✅ All Tailwind classes work as expected

---

## Architecture Compliance

### Design System Architecture Requirements

**From:** `_bmad-output/planning-artifacts/architecture.md`

**Token Architecture Decision (Section: Core Architectural Decisions > Token Architecture):**
- Target structure uses nested DEFAULT pattern (e.g., `yellow: { DEFAULT: '...', light: '...' }`)
- **This story migrates CDN config AS-IS** (flat structure preserved)
- **Story 1.2** will refactor to nested DEFAULT pattern
- Rationale: Incremental migration reduces risk of visual regression

**File Naming Convention:**
- Config files use standard naming: `tailwind.config.js`, `postcss.config.js`
- No kebab-case for config files (exception to component naming rule)

**Project Structure Boundaries:**
- Config files at project root (not in `src/`)
- CSS entry point at root or in `src/` (follow existing project convention)

---

## Anti-Patterns to Avoid

**❌ DO NOT:**
1. **Change color structure in this story** - Preserve flat naming exactly (`yellowLight` not `yellow.light`)
2. **Add custom Tailwind plugins** - Keep `plugins: []` empty for now
3. **Modify component files** - No code changes in this story
4. **Change font loading** - Preserve CDN font loading from production domain
5. **Add new tokens** - Only migrate existing tokens (radius, shadows, typography come in later stories)
6. **Modify existing CSS** - Keep all custom styles in `<style>` tag

**✅ DO:**
1. **Copy CDN config exactly** - Preserve all existing values and structure
2. **Test visually** - Compare side-by-side with CDN version before removing it
3. **Verify builds** - Ensure both dev and production builds work
4. **Keep fonts working** - Custom `@font-face` must continue loading from CDN
5. **Preserve all styles** - Zero visual changes allowed

---

## File Locations & Structure

**Files to Create:**
```
prototype/
├── tailwind.config.js          # NEW - Tailwind configuration
├── postcss.config.js           # NEW - PostCSS configuration
└── index.css                   # NEW or MODIFY - Tailwind directives
```

**Files to Modify:**
```
prototype/
├── index.html                  # MODIFY - Remove CDN script and inline config
└── package.json                # MODIFY - Add dependencies (npm install handles this)
```

**Files NOT Touched:**
```
prototype/
├── vite.config.ts             # No changes needed (already configured)
├── src/**/*                   # No component changes in this story
├── pages/**/*                 # No page changes in this story
└── components/**/*            # No component changes in this story
```

---

## Dependencies & Blockers

**No blockers:** This is the first story in Epic 1.

**Dependencies for future stories:**
- Story 1.2 (Define Color Tokens) depends on this story completing successfully
- All Epic 2 stories (Core Components) depend on tokens being local (Epic 1 complete)

**External dependencies:**
- Tailwind CSS package from npm registry
- PostCSS and Autoprefixer packages
- Internet connection for `npm install` and font CDN loading

---

## Success Metrics

**This story is successful when:**
1. ✅ `tailwind.config.js` exists at project root with migrated config
2. ✅ `postcss.config.js` exists at project root
3. ✅ `index.css` exists with Tailwind directives
4. ✅ `index.html` has CDN script removed
5. ✅ `npm run dev` starts without errors
6. ✅ `npm run build` completes without errors
7. ✅ Visual validation confirms zero visual changes
8. ✅ All Tailwind classes continue working (manual spot-check)

**Definition of Done:**
- All acceptance criteria met
- Build passes
- Visual validation complete
- No console errors
- Story marked as "done" in sprint-status.yaml

---

## Dev Notes

### Implementation Order

**Recommended sequence:**
1. Install dependencies first (`npm install -D ...`)
2. Create `postcss.config.js` (simple, no dependencies)
3. Create/update `index.css` with Tailwind directives
4. Create `tailwind.config.js` with exact CDN config copy
5. Test build (`npm run build`) - should work before HTML changes
6. Test dev server (`npm run dev`) - should work before HTML changes
7. Update `index.html` (remove CDN script and inline config)
8. Final testing - visual validation across multiple pages
9. Commit changes with clear message

### Known Considerations

**Font Loading:**
- Fonts currently load from `https://www.ocobo.co/fonts/` (production CDN)
- This is intentional and should NOT change in this story
- Font configuration in `tailwind.config.js` defines fallback stack

**Existing CSS:**
- `index.html` contains custom styles in `<style>` tag
- These styles must be preserved exactly
- `:root` variables, body styles, heading styles, selection styles - all preserved

**Vite Configuration:**
- Already configured with path alias `@` → project root
- No changes needed to `vite.config.ts`
- Vite automatically processes CSS through PostCSS

### Potential Issues & Solutions

**Issue:** Build fails with "Cannot find module 'tailwindcss'"  
**Solution:** Ensure `npm install` completed successfully, check `node_modules/tailwindcss` exists

**Issue:** Styles don't apply after removing CDN  
**Solution:** Verify `index.css` is imported in `index.html`, check Tailwind directives are at top of file

**Issue:** "Class not found" warnings in console  
**Solution:** Check `content` paths in `tailwind.config.js` include all files using Tailwind classes

**Issue:** Custom fonts don't load  
**Solution:** Verify `@font-face` declarations preserved in `index.html`, check network tab for font requests

**Issue:** Colors look different after migration  
**Solution:** Compare hex values in `tailwind.config.js` with original CDN config, ensure exact match

---

## References

**Source Documents:**
- [Epics] `_bmad-output/planning-artifacts/epics.md` - Epic 1, Story 1.1 (lines 205-217)
- [Architecture] `_bmad-output/planning-artifacts/architecture.md` - Token Architecture (lines 170-194)
- [PRD] `_bmad-output/planning-artifacts/prd.md` - FR1-5, NFR1-3

**Technical Documentation:**
- Tailwind CSS Docs: https://tailwindcss.com/docs/installation/using-postcss
- Vite + Tailwind: https://tailwindcss.com/docs/guides/vite

**Existing Code References:**
- Current CDN config: `index.html` lines 13-37
- Custom fonts: `index.html` lines 42-66
- Vite config: `vite.config.ts` lines 1-24

---

## Dev Agent Record

### Implementation Status

**Story Status:** ready-for-dev

**Next Actions:**
1. Developer: Implement following this story file
2. Developer: Test thoroughly using manual validation checklist
3. Developer: Mark story as "in-progress" in sprint-status.yaml when starting
4. Developer: Mark story as "review" when complete
5. Run code-review workflow for validation
6. SM: Create Story 1.2 after this story is marked "done"

### Agent Model Used

_To be filled by dev agent during implementation_

### Completion Notes

_To be filled by dev agent during implementation_

### Files Modified

_To be filled by dev agent during implementation_

---

**Story created:** 2026-01-13  
**Created by:** BMad Method - create-story workflow  
**Story file:** `_bmad-output/implementation-artifacts/1-1-migrate-tailwind-configuration-from-cdn-to-local.md`
