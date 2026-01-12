# Button Component

> Composant Button existant à adapter pour PandaCSS + ArkUI

---

## Analyse du composant actuel

Le composant `Button.tsx` actuel est simple et fonctionnel. Il utilise 3 variants et une flèche optionnelle.

### Props actuelles

```ts
interface ButtonProps {
  variant?: 'primary' | 'outline' | 'white'
  showArrow?: boolean
  children: React.ReactNode
}
```

---

## Migration PandaCSS

```ts
// button.recipe.ts
import { defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
  className: 'button',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    borderRadius: 'full',
    px: '6',
    py: '3',
    fontSize: 'sm',
    fontWeight: 'semibold',
    letterSpacing: 'wide',
    transition: 'all 0.3s',
    cursor: 'pointer',
    // Group for arrow animation
    '& svg': {
      transition: 'transform 0.3s',
    },
    _hover: {
      '& svg': {
        transform: 'translateX(4px)',
      },
    },
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  variants: {
    variant: {
      primary: {
        bg: 'ocobo.dark',
        color: 'white',
        border: '1px solid transparent',
        _hover: {
          bg: 'gray.800',
        },
      },
      outline: {
        bg: 'transparent',
        color: 'ocobo.dark',
        border: '1px solid',
        borderColor: 'ocobo.dark',
        _hover: {
          bg: 'ocobo.dark',
          color: 'white',
        },
      },
      white: {
        bg: 'white',
        color: 'ocobo.dark',
        border: '1px solid transparent',
        _hover: {
          bg: 'gray.100',
        },
      },
      // Nouveau variant pour CTA sur fond jaune
      dark: {
        bg: 'ocobo.dark',
        color: 'white',
        shadow: 'xl',
        _hover: {
          bg: 'black',
          shadow: '2xl',
          transform: 'translateY(-2px)',
        },
      },
    },
    size: {
      sm: {
        px: '4',
        py: '2',
        fontSize: 'xs',
      },
      md: {
        px: '6',
        py: '3',
        fontSize: 'sm',
      },
      lg: {
        px: '10',
        py: '4',
        fontSize: 'base',
      },
      xl: {
        px: '12',
        py: '5',
        fontSize: 'lg',
        shadow: 'xl',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
```

---

## Intégration ArkUI (optionnel)

Pour les boutons dans des contextes de formulaire ou d'accessibilité avancée :

```tsx
import { Button } from '@ark-ui/react'
import { buttonRecipe } from './recipes/button.recipe'
import { ArrowRight } from 'lucide-react'

interface OcoboButtonProps {
  variant?: 'primary' | 'outline' | 'white' | 'dark'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showArrow?: boolean
  children: React.ReactNode
}

export const OcoboButton = ({
  variant = 'primary',
  size = 'md',
  showArrow = true,
  children,
  ...props
}: OcoboButtonProps) => (
  <Button.Root className={buttonRecipe({ variant, size })} {...props}>
    {children}
    {showArrow && <ArrowRight className="w-4 h-4" />}
  </Button.Root>
)
```

---

## Recommandations

1. **Ajouter le variant `size`** — Le prototype override souvent padding/font-size inline
2. **Ajouter le variant `dark`** — Pour les CTAs sur fond coloré
3. **Support du `asChild` pattern** — Pour wrapper des `<Link>` react-router
4. **Loading state** — Ajouter un variant pour état de chargement
