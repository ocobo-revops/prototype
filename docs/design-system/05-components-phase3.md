# Component Specs — Specific Components (Phase 3)

> Spécifications pour : `TeamMemberCard`, `StoryCard`, `ComparisonBlock`, `CheckList`

---

## 1. TeamMemberCard

### Description
Carte profil pour les membres de l'équipe.

### Props

```ts
interface TeamMemberCardProps {
  /** URL de la photo */
  image: string
  /** Nom complet */
  name: string
  /** Titre/rôle */
  role: string
  /** Bio courte */
  bio: string
  /** URL LinkedIn */
  linkedinUrl?: string
  /** Couleur de la bordure photo */
  color?: 'yellow' | 'mint' | 'sky' | 'coral'
}
```

### PandaCSS Recipe

```ts
export const teamMemberCardRecipe = defineSlotRecipe({
  className: 'teamMemberCard',
  slots: ['root', 'imageWrapper', 'image', 'name', 'role', 'bio', 'social'],
  base: {
    root: {
      bg: 'white',
      p: '8',
      border: '1px solid',
      borderColor: 'gray.100',
      shadow: 'sm',
      textAlign: 'center',
      transition: 'all 0.3s',
      _hover: {
        shadow: 'lg',
      },
    },
    imageWrapper: {
      w: '32',
      h: '32',
      mx: 'auto',
      mb: '6',
      borderRadius: 'full',
      overflow: 'hidden',
      borderWidth: '4px',
    },
    image: {
      w: 'full',
      h: 'full',
      objectFit: 'cover',
    },
    name: {
      fontFamily: 'display',
      fontSize: '2xl',
      fontWeight: 'bold',
      color: 'ocobo.dark',
      mb: '1',
    },
    role: {
      fontSize: 'xs',
      fontWeight: 'bold',
      color: 'gray.400',
      textTransform: 'uppercase',
      letterSpacing: 'widest',
      mb: '4',
    },
    bio: {
      fontSize: 'sm',
      color: 'gray.600',
      lineHeight: 'relaxed',
      mb: '6',
    },
    social: {
      color: 'gray.400',
      transition: 'color 0.2s',
      _hover: {
        color: 'ocobo.dark',
      },
    },
  },
  variants: {
    color: {
      yellow: { imageWrapper: { borderColor: 'ocobo.yellow' } },
      mint: { imageWrapper: { borderColor: 'ocobo.mint' } },
      sky: { imageWrapper: { borderColor: 'ocobo.sky' } },
      coral: { imageWrapper: { borderColor: 'ocobo.coral' } },
    },
  },
  defaultVariants: {
    color: 'yellow',
  },
})
```

---

## 2. StoryCard

### Description
Carte case study (success story) avec image, segment, headline, personne, ROI et stack.

### Props

```ts
interface StoryCardProps {
  /** ID pour le lien */
  id: string
  /** Nom de l'entreprise */
  company: string
  /** URL de l'image */
  image: string
  /** URL du logo */
  logo: string
  /** Segment (Série A/B, Scale-up, Enterprise) */
  segment: string
  /** Titre principal */
  headline: string
  /** Nom du contact */
  contactName: string
  /** Rôle du contact */
  contactRole: string
  /** Métrique ROI */
  roi: string
  /** URLs des logos d'outils */
  tools: string[]
  /** Couleur d'accent */
  color?: 'yellow' | 'mint' | 'sky' | 'coral'
}
```

### PandaCSS Recipe

```ts
export const storyCardRecipe = defineSlotRecipe({
  className: 'storyCard',
  slots: [
    'root', 'imageWrapper', 'image', 'logoBadge',
    'content', 'meta', 'segment', 'company', 'headline',
    'contact', 'contactName', 'contactRole',
    'roiBlock', 'roiLabel', 'roiValue',
    'toolsBlock', 'toolsLabel', 'toolsLogos'
  ],
  base: {
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      bg: 'white',
      border: '1px solid',
      borderColor: 'gray.100',
      borderRadius: 'card', // 2.5rem
      p: '6',
      transition: 'all 0.5s',
      h: 'full',
      _hover: {
        shadow: 'card',
        transform: 'translateY(-8px)',
      },
    },
    imageWrapper: {
      position: 'relative',
      aspectRatio: '16/10',
      overflow: 'hidden',
      borderRadius: '2xl',
      bg: 'gray.50',
      mb: '8',
    },
    image: {
      w: 'full',
      h: 'full',
      objectFit: 'cover',
      filter: 'grayscale(1)',
      opacity: 0.8,
      transition: 'all 0.7s',
      _groupHover: {
        filter: 'grayscale(0)',
        opacity: 1,
        transform: 'scale(1.05)',
      },
    },
    logoBadge: {
      position: 'absolute',
      bottom: '4',
      right: '4',
      bg: 'ocobo.dark',
      p: '3',
      borderRadius: 'xl',
      shadow: '2xl',
      opacity: 0,
      transform: 'translateY(8px)',
      transition: 'all 0.5s',
      _groupHover: {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
    meta: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
      mb: '4',
    },
    segment: {
      fontSize: 'xs',
      fontWeight: 'black',
      textTransform: 'uppercase',
      letterSpacing: 'wide',
      color: 'gray.400',
    },
    company: {
      fontSize: 'xs',
      fontWeight: 'black',
      textTransform: 'uppercase',
      letterSpacing: 'wide',
      color: 'ocobo.dark',
    },
    headline: {
      fontFamily: 'display',
      fontSize: '2xl',
      fontWeight: 'bold',
      color: 'ocobo.dark',
      lineHeight: 'tight',
      letterSpacing: 'tight',
      mb: '2',
      transition: 'color 0.2s',
      _groupHover: {
        color: 'black',
      },
    },
    contactName: {
      fontSize: 'xs',
      fontWeight: 'black',
      textTransform: 'uppercase',
      letterSpacing: 'widest',
      color: 'ocobo.dark',
      opacity: 0.6,
    },
    contactRole: {
      fontSize: 'xs',
      fontWeight: 'medium',
      color: 'gray.400',
    },
    roiBlock: {
      bg: 'gray.50',
      p: '5',
      borderRadius: '2xl',
      border: '1px solid',
      borderColor: 'gray.100',
      transition: 'all 0.3s',
      _groupHover: {
        bg: 'white',
      },
    },
    roiLabel: {
      fontSize: 'xs',
      fontWeight: 'black',
      textTransform: 'uppercase',
      letterSpacing: 'widest',
      color: 'gray.400',
      mb: '1',
    },
    roiValue: {
      fontFamily: 'display',
      fontSize: 'xl',
      fontWeight: 'black',
      color: 'ocobo.dark',
      display: 'flex',
      alignItems: 'center',
      gap: '3',
    },
    toolsBlock: {
      px: '5',
      py: '3',
      borderTop: '1px solid',
      borderColor: 'gray.100',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    toolsLabel: {
      fontSize: 'xs',
      fontWeight: 'black',
      textTransform: 'uppercase',
      letterSpacing: 'widest',
      color: 'gray.400',
    },
    toolsLogos: {
      display: 'flex',
      alignItems: 'center',
      gap: '3',
      filter: 'grayscale(1)',
      opacity: 0.4,
      transition: 'all 0.3s',
      _groupHover: {
        opacity: 1,
        filter: 'grayscale(0)',
      },
    },
  },
})
```

---

## 3. ComparisonBlock

### Description
Bloc comparatif "Ocobo vs Others" avec deux colonnes.

### Props

```ts
interface ComparisonBlockProps {
  /** Titre colonne gauche (Ocobo) */
  leftTitle: string
  /** Items colonne gauche (positifs) */
  leftItems: string[]
  /** Titre colonne droite (Others) */
  rightTitle: string
  /** Items colonne droite (négatifs) */
  rightItems: string[]
}
```

### PandaCSS Recipe

```ts
export const comparisonBlockRecipe = defineSlotRecipe({
  className: 'comparisonBlock',
  slots: ['root', 'grid', 'leftCard', 'rightCard', 'badge', 'title', 'list', 'listItem', 'icon'],
  base: {
    root: {
      maxW: '5xl',
      mx: 'auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: { base: '1fr', md: '1fr 1fr' },
      gap: '8',
    },
    leftCard: {
      bg: 'white',
      color: 'ocobo.dark',
      p: '10',
      position: 'relative',
    },
    rightCard: {
      bg: 'white/5',
      border: '1px solid',
      borderColor: 'white/10',
      p: '10',
      color: 'gray.300',
    },
    badge: {
      position: 'absolute',
      top: 0,
      left: 0,
      bg: 'ocobo.yellow',
      color: 'ocobo.dark',
      px: '4',
      py: '1',
      fontWeight: 'bold',
      fontSize: 'xs',
      textTransform: 'uppercase',
      letterSpacing: 'widest',
    },
    title: {
      fontFamily: 'display',
      fontSize: '2xl',
      fontWeight: 'bold',
      mb: '8',
      mt: '4',
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4',
    },
    listItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '3',
    },
    icon: {
      flexShrink: 0,
      mt: '1',
    },
  },
})
```

---

## 4. CheckList

### Description
Liste avec icônes check colorées. Composant utilitaire très réutilisé.

### Props

```ts
interface CheckListProps {
  /** Items de la liste */
  items: string[]
  /** Couleur des checks */
  color?: 'yellow' | 'mint' | 'sky' | 'coral' | 'dark'
  /** Taille des icônes */
  size?: 'sm' | 'md' | 'lg'
  /** Variante de style */
  variant?: 'default' | 'card' | 'inline'
}
```

### PandaCSS Recipe

```ts
export const checkListRecipe = defineSlotRecipe({
  className: 'checkList',
  slots: ['root', 'item', 'icon', 'text'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    item: {
      display: 'flex',
      alignItems: 'flex-start',
    },
    icon: {
      flexShrink: 0,
    },
    text: {
      fontWeight: 'medium',
    },
  },
  variants: {
    color: {
      yellow: { icon: { color: 'ocobo.yellow' } },
      mint: { icon: { color: 'ocobo.mint' } },
      sky: { icon: { color: 'ocobo.sky' } },
      coral: { icon: { color: 'ocobo.coral' } },
      dark: { icon: { color: 'ocobo.dark' } },
    },
    size: {
      sm: {
        root: { gap: '2' },
        item: { gap: '2' },
        icon: { w: '4', h: '4', mt: '0.5' },
        text: { fontSize: 'sm' },
      },
      md: {
        root: { gap: '3' },
        item: { gap: '3' },
        icon: { w: '5', h: '5', mt: '0.5' },
        text: { fontSize: 'base' },
      },
      lg: {
        root: { gap: '4' },
        item: { gap: '4' },
        icon: { w: '6', h: '6', mt: '1' },
        text: { fontSize: 'lg' },
      },
    },
    variant: {
      default: {},
      card: {
        item: {
          bg: 'gray.50',
          p: '4',
          borderRadius: 'lg',
        },
      },
      inline: {
        root: {
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
      },
    },
  },
  defaultVariants: {
    color: 'mint',
    size: 'md',
    variant: 'default',
  },
})
```

### Usage

```tsx
<CheckList
  items={[
    "Commence par la stratégie, pas par l'outil",
    "Conçoit l'architecture complète de votre croissance",
    "Travaille en immersion, en sprints courts",
  ]}
  color="mint"
  size="md"
/>
```
