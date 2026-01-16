# Components Reference

Design system components for the Ocobo prototype.

---

## Container

Layout wrapper with responsive padding and max-width constraints.

**File:** `components/container.tsx`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | `'sm'` \| `'md'` \| `'lg'` \| `'full'` | `'md'` | Max-width variant: sm (768px), md (1024px), lg (1280px), full (100%) |
| as | `ElementType` | `'div'` | HTML element to render |
| className | `string` | - | Additional CSS classes |
| children | `ReactNode` | required | Content |

### Usage

```tsx
import { Container } from '@/components/container'

<Container size="lg">
  <h1>Page content</h1>
</Container>

<Container size="sm" as="main">
  <article>Narrow content</article>
</Container>
```

---

## Button

Interactive button with variant, size, and optional arrow icon.

**File:** `components/button.tsx`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'solid'` \| `'inverse'` \| `'outline'` | `'solid'` | Visual style: solid (dark bg), inverse (white bg), outline (transparent border) |
| size | `'sm'` \| `'md'` \| `'lg'` | `'md'` | Button size |
| showArrow | `boolean` | `false` | Show arrow icon on the right |
| leftIcon | `ReactNode` | - | Icon to display before children |
| disabled | `boolean` | `false` | Disable button |
| children | `ReactNode` | required | Button content |

Extends `ButtonHTMLAttributes<HTMLButtonElement>`.

### Usage

```tsx
import { Button } from '@/components/button'

<Button variant="solid" showArrow>
  Contact us
</Button>

<Button variant="outline" size="lg">
  Learn more
</Button>

<Button variant="inverse" leftIcon={<Mail size={16} />}>
  Email us
</Button>
```

---

## Badge

Status indicators and labels with semantic color palettes.

**File:** `components/badge.tsx`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'solid'` \| `'outline'` \| `'subtle'` | `'subtle'` | Visual style: solid (filled), outline (border), subtle (light bg) |
| size | `'normal'` \| `'big'` | `'normal'` | Badge size |
| colorPalette | `'yellow'` \| `'mint'` \| `'sky'` \| `'coral'` \| `'dark'` | `'yellow'` | Color theme |
| children | `ReactNode` | required | Badge content |

Extends `HTMLAttributes<HTMLSpanElement>`.

### Usage

```tsx
import { Badge } from '@/components/badge'

<Badge colorPalette="mint" variant="subtle">Success</Badge>
<Badge colorPalette="coral" variant="solid">Warning</Badge>
<Badge colorPalette="dark" variant="outline" size="big">Featured</Badge>
```

---

## Input

Form input field with size variants and focus states.

**File:** `components/input.tsx`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | `'sm'` \| `'md'` \| `'lg'` | `'md'` | Input size |
| disabled | `boolean` | `false` | Disable input |

Extends `InputHTMLAttributes<HTMLInputElement>`.

### Usage

```tsx
import { Input } from '@/components/input'

<Input size="md" placeholder="Enter your email" />
<Input size="lg" type="password" />
```

---

## Card Composition System

Flexible card component using composition pattern with 10 primitives.

**File:** `components/card/index.ts`

### Import

```tsx
import { Card } from '@/components/card'
```

### Card.Root

Container providing context to all child primitives.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default'` \| `'outlined'` \| `'ghost'` \| `'filled'` \| `'elevated'` | `'default'` | Visual style |
| size | `'sm'` \| `'md'` \| `'lg'` | `'md'` | Padding and spacing scale |
| colorPalette | `'yellow'` \| `'mint'` \| `'sky'` \| `'coral'` \| `'dark'` | `'yellow'` | Color theme for outlined/filled |
| children | `ReactNode` | required | Card content |

Extends `HTMLAttributes<HTMLDivElement>`.

**Variants:**
- `default` - White bg with subtle shadow
- `outlined` - White bg with colored border
- `ghost` - Transparent bg
- `filled` - Light colored bg
- `elevated` - White bg with stronger shadow

### Card.Header

Flex column container for title and description.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | `ReactNode` | required | Header content |

Extends `HTMLAttributes<HTMLDivElement>`.

### Card.Title

Polymorphic heading with size-aware styling.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| as | `ElementType` | `'h3'` | HTML element (h2, h3, h4, p, span) |
| accent | `boolean` | `false` | Use colorPalette for accent color |
| children | `ReactNode` | required | Title content |

Extends element props based on `as` value.

### Card.Description

Muted description text with size-aware scaling.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | `ReactNode` | required | Description content |

Extends `HTMLAttributes<HTMLParagraphElement>`.

### Card.Body

Main content area with conditional top margin.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | `ReactNode` | required | Body content |

Extends `HTMLAttributes<HTMLDivElement>`.

Uses `first:mt-0` to remove margin when first child.

### Card.Footer

Action area (typically buttons) with flex layout.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | `ReactNode` | required | Footer content |

Extends `HTMLAttributes<HTMLDivElement>`.

Uses `first:mt-0` to remove margin when first child.

### Card.Media

Image container with aspect ratio and bleed support.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | `string` | required | Image source URL |
| alt | `string` | required | Image alt text |
| aspectRatio | `'video'` \| `'square'` \| `'wide'` | `'video'` | Aspect ratio (16:9, 1:1, 21:9) |
| bleed | `boolean` | `false` | Extend to card edges with negative margin |

Extends `HTMLAttributes<HTMLDivElement>` (excluding children).

### Card.Badge

Positioned badge overlay with 8 position variants.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| position | `CardBadgePosition` | `'top-right'` | Badge position |
| children | `ReactNode` | required | Badge content |

**Positions:**
- Inset (8px from edge): `top-left`, `top-right`, `bottom-left`, `bottom-right`
- Flush (at edge): `flush-top-left`, `flush-top-right`, `flush-bottom-left`, `flush-bottom-right`

Extends `HTMLAttributes<HTMLDivElement>`.

### Card.Avatar

Circular avatar with image or initials fallback.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | `string` | - | Image source URL |
| alt | `string` | - | Image alt text |
| initials | `string` | - | Fallback initials |
| size | `'sm'` \| `'md'` \| `'lg'` | `'md'` | Avatar size (32px, 48px, 64px) |
| border | `CardAvatarBorder` | `'none'` | Border style |

**Border options:** `none`, `light`, `dark`, `yellow`, `mint`, `sky`, `coral`

Extends `HTMLAttributes<HTMLDivElement>` (excluding children).

### Card.IconBox

Icon container with colored background.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | `'sm'` \| `'md'` \| `'lg'` | `'md'` | Box size (40px, 48px, 56px) |
| colorPalette | `CardColorPalette` | from context | Color theme |
| solid | `boolean` | `false` | Use solid bg (true) or light bg (false) |
| children | `ReactNode` | required | Icon content |

Extends `HTMLAttributes<HTMLDivElement>`.

---

## Card Examples

### Basic Card

```tsx
<Card.Root>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Description>A brief description.</Card.Description>
  </Card.Header>
  <Card.Body>
    <p>Card content goes here.</p>
  </Card.Body>
</Card.Root>
```

### Card with Media (Bleed)

```tsx
<Card.Root>
  <Card.Media src="/image.jpg" alt="Description" bleed />
  <Card.Header>
    <Card.Title>Featured Article</Card.Title>
    <Card.Description>Published January 2026</Card.Description>
  </Card.Header>
</Card.Root>
```

### Card with Badge

```tsx
<Card.Root>
  <Card.Badge position="top-right">
    <Badge colorPalette="coral" variant="solid">New</Badge>
  </Card.Badge>
  <Card.Header>
    <Card.Title>New Feature</Card.Title>
  </Card.Header>
</Card.Root>
```

### Card with Avatar (Image)

```tsx
<Card.Root>
  <Card.Header className="flex flex-row items-center gap-3">
    <Card.Avatar src="/avatar.jpg" alt="John Doe" size="md" border="mint" />
    <div>
      <Card.Title>John Doe</Card.Title>
      <Card.Description>CEO & Founder</Card.Description>
    </div>
  </Card.Header>
</Card.Root>
```

### Card with Avatar (Initials)

```tsx
<Card.Root>
  <Card.Header className="flex flex-row items-center gap-3">
    <Card.Avatar initials="JD" size="lg" border="yellow" />
    <Card.Title>Jane Doe</Card.Title>
  </Card.Header>
</Card.Root>
```

### Card with IconBox

```tsx
<Card.Root variant="filled" colorPalette="mint">
  <Card.IconBox colorPalette="mint">
    <Zap size={24} />
  </Card.IconBox>
  <Card.Header>
    <Card.Title>Feature Name</Card.Title>
    <Card.Description>Feature description text.</Card.Description>
  </Card.Header>
</Card.Root>
```

### Card with IconBox (Solid)

```tsx
<Card.Root>
  <Card.IconBox colorPalette="sky" solid>
    <Settings size={24} />
  </Card.IconBox>
  <Card.Header>
    <Card.Title>Configuration</Card.Title>
  </Card.Header>
</Card.Root>
```

### Complete Composition

```tsx
<Card.Root variant="outlined" colorPalette="sky" size="lg">
  <Card.Badge position="flush-top-right">
    <Badge colorPalette="sky" variant="solid">Premium</Badge>
  </Card.Badge>
  <Card.Media src="/feature.jpg" alt="Feature" aspectRatio="wide" bleed />
  <Card.Header>
    <Card.Title accent>Premium Feature</Card.Title>
    <Card.Description>Exclusive content for premium members.</Card.Description>
  </Card.Header>
  <Card.Body>
    <p>Detailed content about this premium feature.</p>
  </Card.Body>
  <Card.Footer>
    <Button variant="outline">Learn More</Button>
    <Button variant="solid" showArrow>Get Started</Button>
  </Card.Footer>
</Card.Root>
```

### Team Member Card

```tsx
<Card.Root variant="default" size="md">
  <Card.Header className="flex flex-row items-center gap-4">
    <Card.Avatar 
      src="/team/john.jpg" 
      alt="John Smith" 
      size="lg" 
      border="coral" 
    />
    <div className="flex flex-col gap-1">
      <Card.Title>John Smith</Card.Title>
      <Card.Description>Revenue Operations Lead</Card.Description>
    </div>
  </Card.Header>
  <Card.Body>
    <p>10+ years experience in RevOps transformation.</p>
  </Card.Body>
</Card.Root>
```

---

## Context API

Card primitives use React Context for size/variant/colorPalette inheritance.

```tsx
import { useCardContext } from '@/components/card'

// Inside a Card.Root
const { variant, size, colorPalette } = useCardContext()
```

All Card primitives (except Card.Root) must be used within a Card.Root.

---

## Types Export

```tsx
import type {
  CardRootProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardBodyProps,
  CardFooterProps,
  CardMediaProps,
  CardMediaAspectRatio,
  CardBadgeProps,
  CardBadgePosition,
  CardAvatarProps,
  CardAvatarSize,
  CardAvatarBorder,
  CardIconBoxProps,
  CardIconBoxSize,
  CardContextValue,
  CardVariant,
  CardSize,
  CardColorPalette,
} from '@/components/card'
```
