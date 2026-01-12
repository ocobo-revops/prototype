# Animations — Ocobo Design System

> Spécification des keyframes et classes d'animation pour PandaCSS

---

## Keyframes

```ts
// panda.config.ts
export default defineConfig({
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        slowFade: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.85' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
})
```

---

## Animation recipes

```ts
// animations.recipe.ts
import { defineRecipe } from '@pandacss/dev'

export const animateRecipe = defineRecipe({
  className: 'animate',
  base: {},
  variants: {
    type: {
      fadeInUp: {
        animation: 'fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        opacity: 0,
      },
      floatGentle: {
        animation: 'floatGentle 8s ease-in-out infinite',
      },
      floatSlow: {
        animation: 'floatSlow 12s ease-in-out infinite',
      },
      bounceSubtle: {
        animation: 'bounceSubtle 3s ease-in-out infinite',
      },
      marquee: {
        animation: 'marquee 90s linear infinite',
        display: 'flex',
        width: 'max-content',
      },
      pulse: {
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      scaleIn: {
        animation: 'scaleIn 0.3s ease-out forwards',
      },
    },
  },
})
```

---

## Usage patterns

### Staggered animations (cards grid)

```tsx
// Pattern pour animer une grille de cartes avec délai progressif
{items.map((item, idx) => (
  <Card
    key={item.id}
    className={css({
      animation: 'fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      animationDelay: `${idx * 0.05}s`,
      opacity: 0,
    })}
  />
))}
```

### Hover state animations

```ts
// Pattern pour transitions au hover
const cardStyles = css({
  transition: 'all 0.3s ease',
  _hover: {
    transform: 'translateY(-8px)',
    boxShadow: 'xl',
  },
})
```

### Scroll-triggered animations

```tsx
// Recommandation : utiliser Intersection Observer ou Framer Motion
// pour les animations déclenchées au scroll
import { useInView } from 'framer-motion'

const ref = useRef(null)
const isInView = useInView(ref, { once: true })

<div
  ref={ref}
  className={css({
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.6s ease',
  })}
/>
```

---

## Performance guidelines

1. **Préférer `transform` et `opacity`** — Ces propriétés sont optimisées GPU
2. **Utiliser `will-change` avec parcimonie** — Seulement pour les animations critiques
3. **Respecter `prefers-reduced-motion`** :

```ts
// Dans panda.config.ts, ajouter media queries
const safeAnimation = css({
  animation: 'fadeInUp 0.6s ease',
  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
    opacity: 1,
    transform: 'none',
  },
})
```
