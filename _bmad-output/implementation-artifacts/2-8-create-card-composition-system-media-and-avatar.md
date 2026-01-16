# Story 2.8: Create Card Composition System - Media and Avatar

Status: done

## Story

As an **AI Agent**,
I want Card.Media, Card.Badge, and Card.Avatar primitives,
So that I can compose rich cards with images and avatars.

---

## Acceptance Criteria

**AC1:** Card.Media renders images with proper aspect ratio
- Supports `src`, `alt` props for image
- Supports `aspectRatio` prop: `video` (16:9), `square` (1:1), `wide` (21:9)
- Image fills container with object-cover
- Negative margin to bleed to card edges (optional `bleed` prop)

**AC2:** Card.Badge positions badge overlay on card
- Absolute positioned badge component
- Supports `position` prop: `top-left`, `top-right`, `bottom-left`, `bottom-right`
- Uses Badge component internally or renders children

**AC3:** Card.Avatar renders circular avatar image
- Circular image container
- Supports `size` prop: `sm` (32px), `md` (48px), `lg` (64px)
- Supports `src`, `alt` props
- Fallback to initials if no image

**AC4:** All primitives inherit from CardContext via `useCardContext()`

**AC5:** Using Card.Media/Badge/Avatar outside Card.Root throws explicit error

**AC6:** File structure follows architecture:
- `components/card/media.tsx` - CardMedia component
- `components/card/badge.tsx` - CardBadge component
- `components/card/avatar.tsx` - CardAvatar component
- `components/card/index.ts` - Updated namespace export

**AC7:** TypeScript interfaces exported: `CardMediaProps`, `CardBadgeProps`, `CardAvatarProps`

**AC8:** All 7 existing card use cases can be recreated:
- Article card (media + title + description)
- Profile card (avatar + name + role)
- Job card (badge + title + description)
- Callout card (filled variant + title)
- Section item card (icon + title + description)
- Tool card (badge + title)
- Contact card (form inputs)

---

## Tasks / Subtasks

- [x] Create `components/card/media.tsx` with CardMedia component
  - [x] Implement aspect ratio variants (video, square, wide)
  - [x] Implement bleed prop for edge-to-edge images
  - [x] Export CardMediaProps interface
- [x] Create `components/card/card-badge.tsx` with CardBadge component
  - [x] Implement position variants (top-left, top-right, bottom-left, bottom-right)
  - [x] Export CardBadgeProps interface
- [x] Create `components/card/avatar.tsx` with CardAvatar component
  - [x] Implement size variants (sm, md, lg)
  - [x] Implement initials fallback
  - [x] Export CardAvatarProps interface
- [x] Update `components/card/index.ts` with new exports
- [x] Add unit tests in `tests/card.test.tsx`
  - [x] Test Card.Media renders with aspect ratios
  - [x] Test Card.Badge positions correctly
  - [x] Test Card.Avatar renders with sizes and fallback
  - [x] Test error thrown when primitives used outside Card.Root
- [x] Validate build passes
- [x] Update design-system showcase page with Media/Badge/Avatar preview

---

## Dev Notes

### Architecture Requirements

**File Structure (kebab-case, lowercase):**
```
components/card/
├── context.tsx       # EXISTS
├── root.tsx          # EXISTS
├── header.tsx        # EXISTS
├── title.tsx         # EXISTS
├── description.tsx   # EXISTS
├── body.tsx          # EXISTS
├── footer.tsx        # EXISTS
├── media.tsx         # TO CREATE
├── badge.tsx         # TO CREATE
├── avatar.tsx        # TO CREATE
└── index.ts          # UPDATE
```

### Static Tailwind Class Mappings (CRITICAL)

```tsx
// media.tsx - aspect ratio classes
const aspectRatioClasses = {
  video: 'aspect-video',    // 16:9
  square: 'aspect-square',  // 1:1
  wide: 'aspect-[21/9]',    // 21:9
} as const

// media.tsx - bleed margin (negative to extend to card edges)
const bleedClasses = {
  sm: '-mx-4 -mt-4 first:-mt-4',  // matches Card.Root p-4
  md: '-mx-6 -mt-6 first:-mt-6',  // matches Card.Root p-6
  lg: '-mx-8 -mt-8 first:-mt-8',  // matches Card.Root p-8
} as const

// badge.tsx - position classes
const badgePositionClasses = {
  'top-left': 'absolute top-2 left-2',
  'top-right': 'absolute top-2 right-2',
  'bottom-left': 'absolute bottom-2 left-2',
  'bottom-right': 'absolute bottom-2 right-2',
} as const

// avatar.tsx - size classes
const avatarSizeClasses = {
  sm: 'w-8 h-8 text-xs',   // 32px
  md: 'w-12 h-12 text-sm', // 48px
  lg: 'w-16 h-16 text-base', // 64px
} as const
```

### Component Patterns

**Card.Media:**
```tsx
export interface CardMediaProps extends HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  aspectRatio?: 'video' | 'square' | 'wide'
  bleed?: boolean
}

export function CardMedia({ src, alt, aspectRatio = 'video', bleed = false, className, ...props }: CardMediaProps) {
  const { size } = useCardContext()
  const classes = [aspectRatioClasses[aspectRatio], 'overflow-hidden', 'rounded-lg']
  if (bleed) classes.push(bleedClasses[size], 'rounded-none first:rounded-t-lg')
  if (className) classes.push(className)
  return (
    <div className={classes.join(' ')} {...props}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  )
}
```

**Card.Avatar:**
```tsx
export interface CardAvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  initials?: string
  size?: 'sm' | 'md' | 'lg'
}

export function CardAvatar({ src, alt, initials, size = 'md', className, ...props }: CardAvatarProps) {
  useCardContext() // validates within Card.Root
  const classes = [avatarSizeClasses[size], 'rounded-full overflow-hidden bg-ocobo-gray-100 flex items-center justify-center']
  if (className) classes.push(className)
  return (
    <div className={classes.join(' ')} {...props}>
      {src ? <img src={src} alt={alt} className="w-full h-full object-cover" /> : <span>{initials}</span>}
    </div>
  )
}
```

### Previous Story Learnings

1. Static class mappings continue to work well
2. `first:mt-0` pattern useful for conditional spacing
3. All primitives must call `useCardContext()` to validate context
4. Tests verify both rendering and error throwing

### Card Use Case Examples

```tsx
// Article card
<Card.Root>
  <Card.Media src="..." alt="..." bleed />
  <Card.Header>
    <Card.Title>Article Title</Card.Title>
    <Card.Description>Article excerpt...</Card.Description>
  </Card.Header>
</Card.Root>

// Profile card
<Card.Root variant="outlined">
  <Card.Header>
    <Card.Avatar src="..." alt="John Doe" />
    <Card.Title>John Doe</Card.Title>
    <Card.Description>Software Engineer</Card.Description>
  </Card.Header>
</Card.Root>

// Job card with badge
<Card.Root variant="outlined">
  <Card.Badge position="top-right">New</Card.Badge>
  <Card.Header>
    <Card.Title>Senior Developer</Card.Title>
    <Card.Description>Remote • Full-time</Card.Description>
  </Card.Header>
</Card.Root>
```

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story 2.8]
- [Source: components/card/body.tsx] - Pattern reference for first:mt-0
- [Source: _bmad-output/planning-artifacts/architecture.md#Card Use Cases]

---

## Dev Agent Record

### Agent Model Used

Claude Sonnet 4

### Debug Log References

None

### Completion Notes List

1. **badge.tsx renamed to card-badge.tsx** - Avoided conflict with existing Badge component
2. **Test selector fix** - Tests initially failed due to `div > div` selector matching Card.Root instead of inner component; fixed by using specific element queries (`getByText().parentElement`, `querySelector('img').parentElement`)
3. **88 tests pass** - All Card tests including 20 new tests for Media/Badge/Avatar
4. **Build passes** - No TypeScript errors
5. **Design system showcase updated** - Added sections demonstrating Media aspect ratios, bleed, Badge positions, Avatar sizes/borders, initials fallback, IconBox, and full composition example
6. **Card.Root now includes `relative overflow-hidden`** - All variants have relative positioning for Badge and overflow-hidden for Media bleed
7. **rounded-lg → rounded-2xl** - Updated to match prototype's larger border-radius
8. **Card.Avatar colored borders** - Added yellow/mint/sky/coral border options to match founder avatars pattern
9. **Card.IconBox created** - New component for icon containers with light/solid backgrounds
10. **Card.Badge flush positions** - Added flush-top-left/right, flush-bottom-left/right for edge-aligned badges

### File List

**Created:**
- `components/card/media.tsx` - CardMedia with aspectRatio and bleed props
- `components/card/card-badge.tsx` - CardBadge with position variants (inset + flush)
- `components/card/avatar.tsx` - CardAvatar with sizes, colored borders, initials fallback
- `components/card/icon-box.tsx` - CardIconBox with light/solid backgrounds

**Modified:**
- `components/card/context.tsx` - CardVariant type unchanged (5 variants)
- `components/card/root.tsx` - Added relative, overflow-hidden, rounded-2xl
- `components/card/index.ts` - Added Media, Badge, Avatar, IconBox exports
- `tests/card.test.tsx` - Added ~20 tests, updated rounded-lg → rounded-2xl
- `pages/design-system.tsx` - Added Media/Badge/Avatar/IconBox showcase sections

