# Component Specs — Quick Wins (Phase 1)

> Spécifications pour les composants à fort impact : `PageHero`, `SectionHeading`, `CTASection`, `ClientMarquee`

---

## 1. PageHero

### Description
Section hero standardisée présente sur toutes les pages principales. Structure deux colonnes sur desktop, stack sur mobile.

### Props

```ts
interface PageHeroProps {
  /** Tag/label affiché en haut (ex: "SUCCESS STORIES") */
  tag?: string
  /** Couleur du tag - utilise les couleurs thème */
  tagColor?: 'yellow' | 'mint' | 'sky' | 'coral'
  /** Titre principal - supporte JSX pour les line breaks */
  title: React.ReactNode
  /** Partie du titre en gris (optionnel) */
  titleMuted?: string
  /** Paragraphe de description */
  description?: string
  /** Texte du CTA principal */
  ctaText?: string
  /** Lien du CTA */
  ctaHref?: string
  /** Slot pour illustration custom à droite */
  illustration?: React.ReactNode
  /** Inverse le layout (illustration à gauche) */
  reverse?: boolean
}
```

### PandaCSS Recipe

```ts
// pageHero.recipe.ts
import { defineSlotRecipe } from '@pandacss/dev'

export const pageHeroRecipe = defineSlotRecipe({
  className: 'pageHero',
  slots: ['root', 'content', 'tag', 'title', 'titleMuted', 'description', 'cta', 'illustrationWrapper'],
  base: {
    root: {
      pt: '40', // pt-40 = 10rem
      pb: '24',
      maxW: '7xl',
      mx: 'auto',
      px: { base: '4', sm: '6', lg: '8' },
    },
    content: {
      display: 'flex',
      flexDirection: { base: 'column', lg: 'row' },
      alignItems: 'center',
      gap: { base: '16', lg: '24' },
    },
    tag: {
      fontFamily: 'display',
      fontWeight: 'black',
      fontSize: 'xs', // 10px
      textTransform: 'uppercase',
      letterSpacing: 'widest', // 0.3em
      px: '4',
      py: '1.5',
      mb: '10',
      display: 'inline-block',
      border: '1px solid',
    },
    title: {
      fontFamily: 'display',
      fontSize: { base: '5xl', md: '7xl' },
      fontWeight: 'bold',
      lineHeight: '0.95',
      letterSpacing: 'tight',
      mb: '10',
    },
    titleMuted: {
      color: 'gray.400',
    },
    description: {
      fontSize: 'xl',
      color: 'gray.700',
      lineHeight: 'relaxed',
      fontWeight: 'medium',
      maxW: 'xl',
      mb: '12',
    },
    illustrationWrapper: {
      w: { base: 'full', lg: '1/2' },
      display: 'flex',
      justifyContent: { base: 'center', lg: 'flex-end' },
      alignItems: 'center',
    },
  },
  variants: {
    tagColor: {
      yellow: {
        tag: {
          bg: 'ocobo.yellowLight',
          color: 'ocobo.dark',
          borderColor: 'ocobo.yellow/20',
        },
      },
      mint: {
        tag: {
          bg: 'ocobo.mintLight',
          color: 'ocobo.dark',
          borderColor: 'ocobo.mint/20',
        },
      },
      sky: {
        tag: {
          bg: 'ocobo.skyLight',
          color: 'ocobo.dark',
          borderColor: 'ocobo.sky/20',
        },
      },
      coral: {
        tag: {
          bg: 'ocobo.coralLight',
          color: 'ocobo.dark',
          borderColor: 'ocobo.coral/20',
        },
      },
    },
    reverse: {
      true: {
        content: {
          flexDirection: { lg: 'row-reverse' },
        },
      },
    },
  },
  defaultVariants: {
    tagColor: 'yellow',
    reverse: false,
  },
})
```

### Usage example

```tsx
<PageHero
  tag="SUCCESS STORIES"
  tagColor="yellow"
  title={<>Ils ont choisi<br/>l'architecture.</>}
  description="Découvrez comment nous accompagnons les plus belles scale-ups européennes."
  ctaText="Prendre RDV"
  ctaHref="/contact"
  illustration={<StoriesIllustration />}
/>
```

---

## 2. SectionHeading

### Description
Bloc de titre de section avec tag optionnel et sous-titre. Peut être centré ou aligné à gauche.

### Props

```ts
interface SectionHeadingProps {
  /** Tag/label au-dessus du titre */
  tag?: string
  tagColor?: 'yellow' | 'mint' | 'sky' | 'coral'
  /** Titre principal */
  title: React.ReactNode
  /** Sous-titre/description */
  subtitle?: string
  /** Alignement */
  align?: 'left' | 'center'
  /** Taille du titre */
  size?: 'md' | 'lg' | 'xl'
}
```

### PandaCSS Recipe

```ts
export const sectionHeadingRecipe = defineSlotRecipe({
  className: 'sectionHeading',
  slots: ['root', 'tag', 'title', 'subtitle'],
  base: {
    root: {
      mb: { base: '12', md: '16' },
    },
    tag: {
      fontFamily: 'display',
      fontWeight: 'black',
      fontSize: 'xs',
      textTransform: 'uppercase',
      letterSpacing: 'widest',
      px: '4',
      py: '1.5',
      mb: '8',
      display: 'inline-block',
      borderRadius: 'full',
    },
    title: {
      fontFamily: 'display',
      fontWeight: 'bold',
      letterSpacing: 'tight',
      mb: '6',
    },
    subtitle: {
      fontSize: 'xl',
      fontWeight: 'medium',
      color: 'gray.500',
      lineHeight: 'relaxed',
    },
  },
  variants: {
    align: {
      left: {
        root: { textAlign: 'left' },
        subtitle: { maxW: 'xl' },
      },
      center: {
        root: { textAlign: 'center', mx: 'auto' },
        subtitle: { maxW: '2xl', mx: 'auto' },
      },
    },
    size: {
      md: {
        title: { fontSize: { base: '3xl', md: '4xl' } },
      },
      lg: {
        title: { fontSize: { base: '4xl', md: '5xl' } },
      },
      xl: {
        title: { fontSize: { base: '4xl', md: '6xl' } },
      },
    },
  },
  defaultVariants: {
    align: 'center',
    size: 'lg',
  },
})
```

---

## 3. CTASection

### Description
Section call-to-action full-width en fin de page. 3 variantes de couleur principales.

### Props

```ts
interface CTASectionProps {
  /** Titre principal */
  title: React.ReactNode
  /** Sous-titre(s) */
  subtitle?: string | string[]
  /** Texte du bouton */
  ctaText: string
  /** Lien du bouton */
  ctaHref: string
  /** Variante de couleur */
  variant?: 'yellow' | 'dark' | 'light'
  /** Afficher des éléments décoratifs */
  showDecorations?: boolean
}
```

### PandaCSS Recipe

```ts
export const ctaSectionRecipe = defineSlotRecipe({
  className: 'ctaSection',
  slots: ['root', 'container', 'title', 'subtitle', 'button'],
  base: {
    root: {
      py: '24',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    container: {
      maxW: '4xl',
      mx: 'auto',
      px: '4',
      position: 'relative',
      zIndex: 10,
    },
    title: {
      fontFamily: 'display',
      fontSize: { base: '4xl', md: '5xl' },
      fontWeight: 'bold',
      mb: '8',
      letterSpacing: 'tighter',
    },
    subtitle: {
      fontSize: { base: 'lg', md: 'xl' },
      fontWeight: 'medium',
      mb: '10',
    },
  },
  variants: {
    variant: {
      yellow: {
        root: { bg: 'ocobo.yellow' },
        title: { color: 'ocobo.dark' },
        subtitle: { color: 'ocobo.dark', opacity: 0.9 },
      },
      dark: {
        root: { bg: 'ocobo.dark' },
        title: { color: 'white' },
        subtitle: { color: 'gray.300' },
      },
      light: {
        root: { bg: 'ocobo.skyLight' },
        title: { color: 'ocobo.dark' },
        subtitle: { color: 'gray.600' },
      },
    },
  },
  defaultVariants: {
    variant: 'yellow',
  },
})
```

### Usage patterns

```tsx
// Variant Yellow (le plus courant)
<CTASection
  variant="yellow"
  title={<>Prenez le contrôle<br/>de votre croissance.</>}
  subtitle={["30 minutes pour analyser votre machine revenue.", "Clarité garantie."]}
  ctaText="Prendre RDV"
  ctaHref="/contact"
/>

// Variant Dark
<CTASection
  variant="dark"
  title="Découvrez le RevOps Studio"
  ctaText="En savoir plus"
  ctaHref="/studio"
/>
```

---

## 4. ClientMarquee

### Description
Bandeau défilant avec les noms des clients. Animation infinie, edge fading.

### Props

```ts
interface ClientMarqueeProps {
  /** Liste des noms de clients */
  clients: string[]
  /** Variante de couleur du fond */
  variant?: 'dark' | 'light'
  /** Vitesse (durée en secondes) */
  speed?: number
}
```

### PandaCSS Recipe

```ts
export const clientMarqueeRecipe = defineSlotRecipe({
  className: 'clientMarquee',
  slots: ['root', 'fadeLeft', 'fadeRight', 'track', 'item'],
  base: {
    root: {
      position: 'relative',
      w: 'full',
      overflow: 'hidden',
      py: '8',
    },
    fadeLeft: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      w: { base: '32', md: '64' },
      zIndex: 10,
      pointerEvents: 'none',
    },
    fadeRight: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      w: { base: '32', md: '64' },
      zIndex: 10,
      pointerEvents: 'none',
    },
    track: {
      display: 'flex',
      animation: 'marquee 90s linear infinite',
      whiteSpace: 'nowrap',
      width: 'max-content',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      px: { base: '10', md: '14' },
      fontFamily: 'display',
      fontWeight: 'black',
      fontSize: { base: 'base', md: 'xl' },
      letterSpacing: 'wider',
      textTransform: 'uppercase',
      userSelect: 'none',
      cursor: 'default',
      transition: 'color 0.2s',
    },
  },
  variants: {
    variant: {
      dark: {
        root: { bg: 'ocobo.dark' },
        fadeLeft: { bgGradient: 'to-r', gradientFrom: 'ocobo.dark', gradientTo: 'transparent' },
        fadeRight: { bgGradient: 'to-l', gradientFrom: 'ocobo.dark', gradientTo: 'transparent' },
        item: {
          color: 'white/30',
          _hover: { color: 'ocobo.yellow' },
        },
      },
      light: {
        root: { bg: 'white', borderY: '1px solid', borderColor: 'gray.100' },
        fadeLeft: { bgGradient: 'to-r', gradientFrom: 'white', gradientTo: 'transparent' },
        fadeRight: { bgGradient: 'to-l', gradientFrom: 'white', gradientTo: 'transparent' },
        item: {
          color: 'gray.300',
          _hover: { color: 'ocobo.dark' },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'dark',
  },
})
```

### Implementation notes

- Le track doit tripler les items pour un loop seamless
- Utiliser `will-change: transform` pour performance
- Respecter `prefers-reduced-motion`

```tsx
// Usage
const clients = ["TheFork", "Qonto", "PayFit", "Spendesk", "Qobra", "Tomorro"]

<ClientMarquee clients={clients} variant="dark" />
```
