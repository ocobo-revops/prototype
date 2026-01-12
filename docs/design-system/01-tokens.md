# Design Tokens — Ocobo

> Spécification des tokens pour migration vers **PandaCSS**

---

## Colors

### Core palette

```ts
// panda.config.ts
export default defineConfig({
  theme: {
    extend: {
      tokens: {
        colors: {
          ocobo: {
            dark: { value: '#212323' },
            yellow: { value: '#F1CF25' },
            mint: { value: '#9ADBBA' },
            sky: { value: '#99D1DF' },
            coral: { value: '#FE9C87' },
          }
        }
      }
    }
  }
})
```

### Light variants (backgrounds)

```ts
tokens: {
  colors: {
    ocobo: {
      yellowLight: { value: '#FFFCEE' },
      mintLight: { value: '#EBFDF5' },
      skyLight: { value: '#F0F9FB' },
      coralLight: { value: '#FFF5F2' },
      gray: { value: '#F5F5F5' },
    }
  }
}
```

### Semantic tokens

```ts
semanticTokens: {
  colors: {
    // Backgrounds
    bg: {
      primary: { value: '{colors.white}' },
      secondary: { value: '{colors.ocobo.gray}' },
      inverse: { value: '{colors.ocobo.dark}' },
      accent: { value: '{colors.ocobo.yellow}' },
    },
    // Text
    text: {
      primary: { value: '{colors.ocobo.dark}' },
      secondary: { value: '#6B7280' }, // gray-500
      muted: { value: '#9CA3AF' }, // gray-400
      inverse: { value: '{colors.white}' },
    },
    // Borders
    border: {
      default: { value: '#E5E7EB' }, // gray-200
      subtle: { value: '#F3F4F6' }, // gray-100
    },
  }
}
```

---

## Typography

### Fonts

```ts
tokens: {
  fonts: {
    display: { value: 'Bermia, Inter, sans-serif' },
    body: { value: 'Bornia, Inter, sans-serif' },
  }
}
```

### Font sizes

```ts
tokens: {
  fontSizes: {
    xs: { value: '0.625rem' },   // 10px (tags, labels)
    sm: { value: '0.875rem' },   // 14px
    base: { value: '1rem' },     // 16px
    lg: { value: '1.125rem' },   // 18px
    xl: { value: '1.25rem' },    // 20px
    '2xl': { value: '1.5rem' },  // 24px
    '3xl': { value: '1.875rem' }, // 30px
    '4xl': { value: '2.25rem' }, // 36px
    '5xl': { value: '3rem' },    // 48px
    '6xl': { value: '3.75rem' }, // 60px
    '7xl': { value: '4.5rem' },  // 72px
  }
}
```

### Font weights

```ts
tokens: {
  fontWeights: {
    normal: { value: '400' },
    medium: { value: '500' },
    semibold: { value: '600' },
    bold: { value: '700' },
    black: { value: '900' },
  }
}
```

### Letter spacing

```ts
tokens: {
  letterSpacings: {
    tighter: { value: '-0.02em' },
    tight: { value: '-0.01em' },
    normal: { value: '0' },
    wide: { value: '0.1em' },
    wider: { value: '0.2em' },
    widest: { value: '0.3em' },
    ultrawide: { value: '0.4em' },  // pour labels uppercase
  }
}
```

---

## Spacing

```ts
tokens: {
  spacing: {
    // Standard Tailwind-like scale
    '0': { value: '0' },
    '1': { value: '0.25rem' },
    '2': { value: '0.5rem' },
    '3': { value: '0.75rem' },
    '4': { value: '1rem' },
    '5': { value: '1.25rem' },
    '6': { value: '1.5rem' },
    '8': { value: '2rem' },
    '10': { value: '2.5rem' },
    '12': { value: '3rem' },
    '16': { value: '4rem' },
    '20': { value: '5rem' },
    '24': { value: '6rem' },
    '32': { value: '8rem' },
    '40': { value: '10rem' },
    // Section-specific
    sectionY: { value: '6rem' },      // py-24 equivalent
    heroTop: { value: '10rem' },      // pt-40 equivalent
  }
}
```

---

## Radii

```ts
tokens: {
  radii: {
    none: { value: '0' },
    sm: { value: '0.125rem' },
    base: { value: '0.25rem' },
    md: { value: '0.375rem' },
    lg: { value: '0.5rem' },
    xl: { value: '0.75rem' },
    '2xl': { value: '1rem' },
    '3xl': { value: '1.5rem' },
    full: { value: '9999px' },
    // Custom
    card: { value: '2.5rem' },        // rounded-[2.5rem]
    button: { value: '9999px' },      // rounded-full
  }
}
```

---

## Shadows

```ts
tokens: {
  shadows: {
    sm: { value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
    base: { value: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' },
    md: { value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
    lg: { value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
    xl: { value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' },
    '2xl': { value: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
    // Custom Ocobo
    card: { value: '0 40px 100px -20px rgba(0,0,0,0.08)' },
    brutal: { value: '8px 8px 0px 0px rgba(33,35,35,1)' },
    brutalYellow: { value: '8px 8px 0px 0px #F1CF25' },
    brutalMint: { value: '8px 8px 0px 0px #9ADBBA' },
    brutalSky: { value: '8px 8px 0px 0px #99D1DF' },
    brutalCoral: { value: '8px 8px 0px 0px #FE9C87' },
  }
}
```

---

## Breakpoints

```ts
theme: {
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  }
}
```

---

## Z-index

```ts
tokens: {
  zIndex: {
    base: { value: '0' },
    docked: { value: '10' },
    dropdown: { value: '1000' },
    sticky: { value: '1100' },
    overlay: { value: '1200' },
    modal: { value: '1300' },
    popover: { value: '1400' },
    tooltip: { value: '1500' },
  }
}
```
