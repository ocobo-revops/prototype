# PRD: Partners Section - Style Components & Composition

## Problem statement

La section Partners a été refactorisée de 1,530 lignes vers ~6 fichiers composants, mais contient encore une duplication significative de styles inline (~215 lignes répétées). Cela crée:

- **Maintenance difficile** — Modifier un style typographique nécessite des changements dans 6+ fichiers
- **Inconsistance visuelle** — Les variations subtiles entre fichiers créent des incohérences
- **Composants monolithiques** — partner-card.tsx contient 200+ lignes avec 45 lignes de hover states imbriqués
- **Mauvaise séparation des préoccupations** — Styles et contenu mélangés dans les mêmes composants

## Solution

Appliquer les patterns de composition Vercel et créer des style components pour:

1. **Centraliser les styles** via des recipes Panda CSS réutilisables
2. **Séparer style et contenu à 2 niveaux:**
   - **A) Composants partagés** → dossier `atoms/` (Text, IconBox, FormField) - réutilisables cross-project
   - **B) Local style wrappers** → même fichier, déclarés au-dessus du composant principal - usage unique
3. **Améliorer la composition** via le pattern compound components pour PartnerCard
4. **Hériter les styles** en les remontant aux composants parents via CSS natif

## User stories

1. As a **developer**, I want typography styles centralised in recipes, so that I can change heading styles in one place
2. As a **developer**, I want a `<Text>` component with semantic variants, so that I don't repeat font styles inline
3. As a **developer**, I want icon containers as reusable components, so that I don't duplicate centering/sizing logic
4. As a **developer**, I want form fields with built-in labels, so that form markup is consistent
5. As a **developer**, I want PartnerCard as a compound component, so that I can compose card layouts flexibly
6. As a **developer**, I want hover states in a recipe, so that card animations are maintainable
7. As a **developer**, I want sections using Container/Section organisms, so that layout is consistent
8. As a **designer**, I want consistent typography scales, so that the design system is cohesive
9. As a **developer**, I want parent wrappers to set inherited styles (color, fontSize), so that children don't need explicit className
10. As a **developer**, I want local style wrappers at the top of files, so that style/content separation is clear without polluting atoms/

## Features

### Functional

1. [ ] Developer can use `<Text variant="display-xl">` for H1 typography — renders with display font, 5xl/6xl responsive size
2. [ ] Developer can use `<Text variant="subtitle">` for descriptions — renders with xl size, relaxed line-height
3. [ ] Developer can use `<Text variant="label">` for form labels — renders with xs, uppercase, letter-spaced
4. [ ] Developer can use `<IconBox size="lg" variant="solid">` — renders 16x16 centered dark container
5. [ ] Developer can use `<IconBox size="md" variant="outline">` — renders 10x10 white bordered container
6. [ ] Developer can use `<FormField label="Email">` — renders label + children input wrapper
7. [ ] Developer can use `<PartnerCard>` with Header/Body/Footer slots — flexible card composition
8. [ ] Developer can use `<Section>` + `<Container>` for page sections — consistent max-width and padding
9. [ ] Parent wrappers (CardBody, etc.) set inherited styles — children `<p>` elements don't need className for color/fontSize

### Validation

1. [ ] TypeScript validates `Text` variant prop — only allows defined variants
2. [ ] TypeScript validates `IconBox` size/variant/color props — only allows defined values
3. [ ] Panda CSS generates recipes on build — styled-system/recipes exports new recipes

### UI/UX

1. [ ] PartnerCard hover states work identically — logo desaturates, badges highlight, links animate
2. [ ] Typography renders identically to current state — no visual regression
3. [ ] Icon boxes render identically to current state — same sizes and colours

## Implementation decisions

### Core principles

1. **Séparation style/contenu à 2 niveaux:**
   - **Composants partagés** → `atoms/` (Text, IconBox, FormField)
   - **Local style wrappers** → même fichier, en haut, non exportés
2. **Héritage CSS natif** — Déclarer `color`, `fontSize`, `lineHeight` sur le parent, les enfants héritent automatiquement (pas de child selectors `'& h3': {...}`)
3. **Text component pour override** — Utiliser `<Text>` uniquement quand un enfant doit différer du parent
4. **Compound components** — Slots flexibles (Header, Body, Footer) via pattern Object.assign

### Local style wrappers pattern

```tsx
// ===== STYLE WRAPPERS (haut du fichier, non exportés) =====

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className={css({ bg: 'ocobo.dark', py: '32', color: 'white' })}>
      {children}
    </section>
  );
}

function CardContainer({ hoverColor, children }: Props) {
  return (
    <div className={css({
      bg: 'white', p: '10', rounded: 'xl', shadow: 'xl',
      _hover: { transform: 'translateY(-4px)' },
      '&:hover .icon-box': { bg: hoverColor },
    })}>
      {children}
    </div>
  );
}

// ===== COMPOSANT PRINCIPAL (contenu seulement) =====

export function PhilosophySection() {
  return (
    <SectionContainer>
      <Container>
        <Text as="h2" variant="display-lg">Le système avant l'outil.</Text>
        ...
      </Container>
    </SectionContainer>
  );
}
```

**Avantages:**
- Le composant principal ne contient que la structure/contenu
- Les styles sont isolés et lisibles en haut du fichier
- Pas de pollution de `atoms/` avec des composants non-réutilisables

### Technical choices

- **Panda CSS recipes** over styled-components — aligns with existing design system
- **Compound components via Object.assign** — follows existing FlexPair/HeroSplit pattern
- **Context for compound components** — enables state sharing (animate prop) across slots
- **Polymorphic `as` prop for Text** — allows h1/h2/h3/p/span/label semantic tags
- **Recipe variants over props** — `variant="display-xl"` cleaner than `size="6xl" weight="black"`

### CSS inheritance example

```tsx
// Parent définit les defaults (color, fontSize héritent)
<CardBody className={css({ color: 'gray.500', fontSize: 'sm', lineHeight: 'relaxed' })}>
  <Text as="h3" variant="display-md" color="dark">Override title</Text>
  <p>Paragraph inherits parent styles</p>
  <p>Another paragraph inherits too</p>
</CardBody>
```

**Properties that inherit:** `color`, `font-size`, `font-family`, `font-weight`, `line-height`, `letter-spacing`
**Properties that don't inherit:** `margin`, `padding`, `border`, `background`

## Definition of done

1. [ ] All 3 recipes added to panda.config.ts (text, iconBox, partnerCard)
2. [ ] All 3 atom components created (text.tsx, icon-box.tsx, form-field.tsx)
3. [ ] PartnerCard refactored to compound component
4. [ ] All 5 partner section files updated to use new components
5. [ ] `pnpm run build` passes
6. [ ] `pnpm exec tsc --noEmit` passes
7. [ ] Visual regression test — /partners page renders identically

## Out of scope

- Refactoring other pages to use new components (future work)
- Creating additional recipes (e.g., card, tag)
- Adding animation tokens to design system
- Unit tests for new components

## Further notes

This is Phase 2 of the Partners refactoring POC. Phase 1 extracted data and split into section components. Phase 2 focuses on style abstraction and composition patterns.

Recipes to create:
- `text` — 6 variants (display-xl, display-lg, display-md, subtitle, body, label) + 6 colours
- `iconBox` — 3 sizes (sm, md, lg) + 3 variants (solid, outline, ghost) + 5 colours
- `partnerCard` — base hover states + animate variant
