# Component Specs — Cards System (Phase 2)

> Spécifications pour les composants cartes : `FeatureCard`, `StepCard`, `ValueCard`

---

## 1. FeatureCard

### Description
Carte avec icône, titre et description. Utilisée pour les grilles de features (ex: "Aligner, Simplifier, Fiabiliser, Piloter").

### Props

```ts
interface FeatureCardProps {
  /** Icône Lucide ou custom */
  icon: React.ReactNode
  /** Titre de la feature */
  title: string
  /** Description */
  description: string
  /** Couleur thème */
  color: 'yellow' | 'mint' | 'sky' | 'coral'
  /** Variante de layout */
  variant?: 'default' | 'compact' | 'centered'
  /** Afficher un label au-dessus du titre */
  label?: string
  /** Afficher une action au hover */
  showAction?: boolean
}
```

### PandaCSS Recipe

```ts
export const featureCardRecipe = defineSlotRecipe({
  className: 'featureCard',
  slots: ['root', 'iconWrapper', 'label', 'title', 'description', 'action'],
  base: {
    root: {
      position: 'relative',
      bg: 'white',
      border: '1px solid',
      borderColor: 'gray.100',
      p: '8',
      transition: 'all 0.3s ease',
      _hover: {
        shadow: 'xl',
        transform: 'translateY(-8px)',
      },
    },
    iconWrapper: {
      mb: '6',
      transition: 'all 0.3s ease',
    },
    label: {
      fontFamily: 'display',
      fontWeight: 'black',
      fontSize: 'xs',
      textTransform: 'uppercase',
      letterSpacing: 'ultrawide',
      color: 'gray.400',
      mb: '4',
    },
    title: {
      fontFamily: 'display',
      fontSize: '2xl',
      fontWeight: 'bold',
      color: 'ocobo.dark',
      mb: '3',
      transition: 'color 0.3s',
    },
    description: {
      fontSize: 'sm',
      color: 'gray.600',
      lineHeight: 'relaxed',
    },
    action: {
      position: 'absolute',
      bottom: '6',
      opacity: 0,
      transition: 'opacity 0.3s',
      _groupHover: {
        opacity: 0.2,
      },
    },
  },
  variants: {
    color: {
      yellow: {
        iconWrapper: { color: 'ocobo.yellow' },
        title: { _groupHover: { color: 'ocobo.yellow' } },
        root: { _hover: { borderColor: 'ocobo.yellow/30' } },
      },
      mint: {
        iconWrapper: { color: 'ocobo.mint' },
        title: { _groupHover: { color: 'ocobo.mint' } },
        root: { _hover: { borderColor: 'ocobo.mint/30' } },
      },
      sky: {
        iconWrapper: { color: 'ocobo.sky' },
        title: { _groupHover: { color: 'ocobo.sky' } },
        root: { _hover: { borderColor: 'ocobo.sky/30' } },
      },
      coral: {
        iconWrapper: { color: 'ocobo.coral' },
        title: { _groupHover: { color: 'ocobo.coral' } },
        root: { _hover: { borderColor: 'ocobo.coral/30' } },
      },
    },
    variant: {
      default: {
        root: { borderRadius: 'xl' },
      },
      compact: {
        root: { p: '6', borderRadius: 'lg' },
        title: { fontSize: 'xl' },
      },
      centered: {
        root: {
          textAlign: 'center',
          aspectRatio: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '2xl',
        },
        iconWrapper: { mb: '8' },
      },
    },
  },
  defaultVariants: {
    color: 'yellow',
    variant: 'default',
  },
})
```

### Usage patterns

```tsx
// Grid de features
<div className={grid({ columns: { base: 1, md: 2, lg: 4 }, gap: '8' })}>
  <FeatureCard
    icon={<Layout size={28} />}
    title="Aligner"
    description="les équipes"
    color="coral"
    variant="centered"
    label="Organiser ="
  />
  {/* ... autres cartes */}
</div>
```

---

## 2. StepCard

### Description
Carte numérotée pour afficher des étapes de process ou de méthode.

### Props

```ts
interface StepCardProps {
  /** Numéro de l'étape */
  step: number
  /** Titre */
  title: string
  /** Description (optionnel) */
  description?: string
  /** Livrables (optionnel) */
  deliverables?: string[]
  /** Couleur du numéro */
  color?: 'yellow' | 'mint' | 'sky' | 'coral' | 'dark'
  /** Variante de style */
  variant?: 'default' | 'minimal' | 'brutal'
}
```

### PandaCSS Recipe

```ts
export const stepCardRecipe = defineSlotRecipe({
  className: 'stepCard',
  slots: ['root', 'stepNumber', 'content', 'title', 'description', 'deliverables', 'deliverableItem'],
  base: {
    root: {
      bg: 'white',
      border: '1px solid',
      borderColor: 'gray.100',
      transition: 'all 0.3s',
      _hover: {
        shadow: 'lg',
      },
    },
    stepNumber: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'display',
      fontWeight: 'bold',
      mb: '6',
    },
    title: {
      fontFamily: 'display',
      fontSize: 'xl',
      fontWeight: 'bold',
      color: 'ocobo.dark',
      mb: '3',
    },
    description: {
      fontSize: 'sm',
      color: 'gray.600',
    },
    deliverables: {
      pt: '4',
      borderTop: '1px solid',
      borderColor: 'gray.50',
    },
    deliverableItem: {
      fontSize: 'xs',
      fontWeight: 'bold',
      color: 'ocobo.dark',
    },
  },
  variants: {
    color: {
      yellow: {
        stepNumber: { bg: 'ocobo.yellow', color: 'ocobo.dark' },
      },
      mint: {
        stepNumber: { bg: 'ocobo.mint', color: 'ocobo.dark' },
      },
      sky: {
        stepNumber: { bg: 'ocobo.sky', color: 'ocobo.dark' },
      },
      coral: {
        stepNumber: { bg: 'ocobo.coral', color: 'ocobo.dark' },
      },
      dark: {
        stepNumber: { bg: 'ocobo.dark', color: 'white' },
      },
    },
    variant: {
      default: {
        root: { p: '8', borderRadius: 'none' },
        stepNumber: { w: '10', h: '10', fontSize: 'sm' },
      },
      minimal: {
        root: { p: '6', borderRadius: 'lg' },
        stepNumber: { w: '8', h: '8', fontSize: 'xs' },
      },
      brutal: {
        root: {
          p: '8',
          borderWidth: '2px',
          borderColor: 'ocobo.dark',
          shadow: 'brutal',
        },
        stepNumber: {
          w: '16',
          h: '16',
          fontSize: '2xl',
          borderWidth: '1px',
          borderColor: 'ocobo.dark',
        },
      },
    },
  },
  defaultVariants: {
    color: 'dark',
    variant: 'default',
  },
})
```

---

## 3. ValueCard

### Description
Carte pour afficher une valeur/USP avec titre coloré et description.

### Props

```ts
interface ValueCardProps {
  /** Titre de la valeur */
  title: string
  /** Description principale */
  description: string
  /** Citation/explication additionnelle (italique) */
  quote?: string
  /** Couleur du titre */
  color?: 'yellow' | 'mint' | 'sky' | 'coral' | 'white'
  /** Variante de fond */
  variant?: 'transparent' | 'card'
}
```

### PandaCSS Recipe

```ts
export const valueCardRecipe = defineSlotRecipe({
  className: 'valueCard',
  slots: ['root', 'title', 'description', 'quote'],
  base: {
    title: {
      fontFamily: 'display',
      fontSize: '2xl',
      fontWeight: 'bold',
      mb: '4',
    },
    description: {
      lineHeight: 'relaxed',
    },
    quote: {
      fontSize: 'sm',
      fontStyle: 'italic',
      mt: '2',
    },
  },
  variants: {
    color: {
      yellow: { title: { color: 'ocobo.yellow' } },
      mint: { title: { color: 'ocobo.mint' } },
      sky: { title: { color: 'ocobo.sky' } },
      coral: { title: { color: 'ocobo.coral' } },
      white: { title: { color: 'white' } },
    },
    variant: {
      transparent: {
        root: {},
        description: { color: 'gray.300' },
        quote: { color: 'gray.500' },
      },
      card: {
        root: {
          bg: 'white',
          p: '8',
          borderRadius: 'xl',
          border: '1px solid',
          borderColor: 'gray.100',
        },
        description: { color: 'gray.600' },
        quote: { color: 'gray.400' },
      },
    },
  },
  defaultVariants: {
    color: 'yellow',
    variant: 'transparent',
  },
})
```

---

## Patterns d'utilisation ArkUI

Pour les composants interactifs (accordéons, tabs, etc.), utiliser ArkUI comme base :

```tsx
import { Accordion } from '@ark-ui/react'
import { accordionRecipe } from './recipes/accordion.recipe'
import { css } from '../styled-system/css'

// Exemple : FAQ ou sections collapsibles
<Accordion.Root>
  <Accordion.Item value="item-1">
    <Accordion.ItemTrigger className={css(accordionRecipe.trigger)}>
      Question 1
    </Accordion.ItemTrigger>
    <Accordion.ItemContent className={css(accordionRecipe.content)}>
      Réponse 1
    </Accordion.ItemContent>
  </Accordion.Item>
</Accordion.Root>
```

Les composants ArkUI à considérer pour le site :
- `Accordion` — FAQ, sections collapsibles
- `Tabs` — Navigation ressources (Blog, Podcast, Webinars)
- `Dialog` — Modales contact/newsletter
- `Tooltip` — Explications termes techniques
- `Menu` — Navigation mobile
