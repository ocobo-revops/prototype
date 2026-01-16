# Ocobo Design System Specification

**Date:** 2026-01-12
**Source:** Brainstorming Session - Rationalisation Prototype

---

## 1. Design Tokens

### 1.1 Couleurs

#### Primitifs

```
colors:
  ocobo:
    dark: '#212323'
    yellow:
      DEFAULT: '#F1CF25'
      light: '#FFFCEE'
    mint:
      DEFAULT: '#9ADBBA'
      light: '#EBFDF5'
    sky:
      DEFAULT: '#99D1DF'
      light: '#F0F9FB'
    coral:
      DEFAULT: '#FE9C87'
      light: '#FFF5F2'
    gray:
      50: '#FAFAFA'
      100: '#F5F5F5'
      200: '#E5E5E5'
      300: '#D4D4D4'
      400: '#A3A3A3'
      500: '#737373'
      600: '#525252'
      700: '#404040'
      800: '#262626'
      900: '#171717'
    white: '#FFFFFF'
    black: '#000000'
```

#### Sémantiques

```
semantic:
  color-primary: '{colors.ocobo.yellow.DEFAULT}'
  color-primary-light: '{colors.ocobo.yellow.light}'
  color-accent: '{colors.ocobo.coral.DEFAULT}'
  color-success: '{colors.ocobo.mint.DEFAULT}'
  color-info: '{colors.ocobo.sky.DEFAULT}'
  color-surface: '{colors.gray.50}'
  color-background: '{colors.white}'
  color-text: '{colors.ocobo.dark}'
  color-text-muted: '{colors.gray.600}'
  color-border: '{colors.gray.200}'
```

---

### 1.2 Border Radius

| Token | Valeur | Usage |
|-------|--------|-------|
| `radius-sm` | `0.5rem` (8px) | Petits éléments, badges, inputs |
| `radius-md` | `1rem` (16px) | Cards standard, boutons |
| `radius-lg` | `1.5rem` (24px) | Cards hero, sections |
| `radius-xl` | `2.5rem` (40px) | Cards premium, modals |
| `radius-full` | `9999px` | Pills, avatars |

---

### 1.3 Shadows

| Token | Valeur | Usage |
|-------|--------|-------|
| `shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Cards au repos |
| `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1)` | Cards hover |
| `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1)` | Modals, dropdowns |
| `shadow-hero` | `0 40px 100px -20px rgb(0 0 0 / 0.08)` | Hero sections, CTAs majeurs |

---

### 1.4 Typography

| Token | Taille | Line Height | Usage |
|-------|--------|-------------|-------|
| `text-micro` | 10px | 1.4 | Badges, labels uppercase |
| `text-xs` | 12px | 1.4 | Captions, metadata |
| `text-sm` | 14px | 1.5 | Body small, UI elements |
| `text-base` | 16px | 1.5 | Body default |
| `text-lg` | 18px | 1.6 | Body large, lead |
| `text-xl` | 20px | 1.5 | Subheadings |
| `text-2xl` | 24px | 1.4 | H4 |
| `text-3xl` | 30px | 1.3 | H3 |
| `text-4xl` | 36px | 1.2 | H2 |
| `text-5xl` | 48px | 1.1 | H1 |
| `text-6xl` | 60px | 1.1 | Hero mobile |
| `text-7xl` | 72px | 1.0 | Hero desktop |

#### Font Families

```
fontFamily:
  sans: ['Bornia', 'Inter', 'sans-serif']
  display: ['Bermia', 'Inter', 'sans-serif']
```

---

## 2. Architecture Composants

### 2.1 Pattern Composition (Style Park UI)

Tous les composants suivent le pattern de composition :

```tsx
<ComponentRoot variant="..." size="..." colorPalette="...">
  <ComponentHeader />
  <ComponentTitle />
  <ComponentDescription />
  <ComponentBody />
  <ComponentFooter />
</ComponentRoot>
```

### 2.2 Props Uniformes

| Prop | Valeurs | Description |
|------|---------|-------------|
| `variant` | `default`, `outlined`, `ghost`, `filled`, `elevated` | Style visuel |
| `size` | `sm`, `md`, `lg` | Dimensions (padding, fonts) |
| `colorPalette` | `yellow`, `mint`, `sky`, `coral`, `dark` | Thème couleur |

---

## 3. Composants Core (5 essentiels)

### 3.1 Container

```tsx
interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'full'
  children: React.ReactNode
}

// Sizes
sm: max-w-3xl
md: max-w-5xl
lg: max-w-7xl
full: max-w-full
```

### 3.2 Button

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  colorPalette?: 'yellow' | 'mint' | 'sky' | 'coral' | 'dark'
}
```

### 3.3 Badge

```tsx
interface BadgeProps {
  variant?: 'solid' | 'outline' | 'subtle'
  size?: 'sm' | 'md'
  colorPalette?: 'yellow' | 'mint' | 'sky' | 'coral' | 'dark'
}
```

### 3.4 Input / Form

```tsx
interface InputProps {
  variant?: 'outline' | 'filled' | 'flushed'
  size?: 'sm' | 'md' | 'lg'
}
```

### 3.5 Card (Primitives)

```
components/Card/
├── index.ts
├── CardRoot.tsx
├── CardHeader.tsx
├── CardTitle.tsx
├── CardDescription.tsx
├── CardBody.tsx
├── CardFooter.tsx
├── CardMedia.tsx
├── CardBadge.tsx
└── CardAvatar.tsx
```

```tsx
interface CardRootProps {
  variant?: 'default' | 'outlined' | 'ghost' | 'filled' | 'elevated'
  size?: 'sm' | 'md' | 'lg'
  colorPalette?: 'yellow' | 'mint' | 'sky' | 'coral' | 'dark'
}
```

---

## 4. Composants Section

### 4.1 Section (Base)

```tsx
interface SectionProps {
  spacing?: 'sm' | 'md' | 'lg'  // py-16, py-24, py-32
  background?: 'white' | 'gray' | 'dark' | 'yellow' | 'mint' | 'sky'
}
```

### 4.2 HeroSection

```tsx
interface HeroSectionProps {
  variant?: 'centered' | 'split' | 'animated'
  background?: 'white' | 'dark'
}
```

### 4.3 CtaSection

```tsx
interface CtaSectionProps {
  colorPalette?: 'yellow' | 'dark' | 'mint' | 'sky'
  variant?: 'simple' | 'with-form'
}
```

### 4.4 FeatureSection

```tsx
interface FeatureSectionProps {
  background?: 'dark' | 'light'
  withBlobs?: boolean
}
```

### 4.5 GridSection

```tsx
interface GridSectionProps {
  columns?: 2 | 3 | 4
  gap?: 'md' | 'lg'
}
```

### 4.6 TestimonialSection

```tsx
interface TestimonialSectionProps {
  variant?: 'single' | 'carousel'
}
```

### 4.7 StatsSection

```tsx
interface StatsSectionProps {
  columns?: 3 | 4
}
```

### 4.8 DecorativeBlob

```tsx
interface DecorativeBlobProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center'
  colorPalette?: 'yellow' | 'mint' | 'sky' | 'coral'
  size?: 'sm' | 'md' | 'lg'
  opacity?: 10 | 20 | 30
}
```

---

## 5. Inventaire Cards Existantes

| Type | Usage | Composant cible |
|------|-------|-----------------|
| Article cards | Blog, Podcast, Stories | `CardRoot variant="default"` + `CardMedia` |
| Profile cards | Team, Authors | `CardRoot` + `CardAvatar` |
| Job cards | Offres emploi | `CardRoot variant="outlined"` |
| Callouts | Mise en valeur | `CardRoot variant="filled"` |
| Section items | Grilles 3-4 cols | `CardRoot variant="ghost"` |
| Tool cards | Outils/Features | `CardRoot variant="elevated"` |
| Contact form | Formulaires | `CardRoot` + Form components |

---

## 6. Migration Notes (Panda CSS / Park UI)

### Compatibilité confirmée
- React 19 ✅
- TypeScript ✅
- Nomenclature Park UI adoptée ✅
- Props système aligné ✅

### À faire lors migration
- Mapping tokens Tailwind → Panda CSS
- Conversion classes inline → CSS-in-JS
- Adoption recipes `cva()`

---

*Document généré automatiquement - Session brainstorming 2026-01-12*
