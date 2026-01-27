# Plan: Partners Section - Style Components & Composition (Phase 2)

## Objectif
Améliorer le refactoring Partners avec:
1. **Style components** - Wrappers encapsulant les styles (séparation style/contenu)
2. **Composition patterns** - Compound components, children slots
3. **Style inheritance** - Remonter styles répétés aux parents via héritage CSS natif

---

## Principes clés

### 1. Séparation style/contenu à 2 niveaux

**A) Composants partagés** → dossier `atoms/`
- `Text`, `IconBox`, `FormField` - réutilisables cross-project

**B) Style wrappers à usage unique** → même fichier, au-dessus du composant principal
```tsx
// ===== STYLE WRAPPERS (haut du fichier) =====

function CardContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className={css({ bg: 'white', p: '10', rounded: 'xl', shadow: 'xl' })}>
      {children}
    </div>
  );
}

function CardIconBox({ children, hoverColor }: Props) {
  return (
    <div className={`icon-box ${center()} ${css({ w: '16', h: '16', bg: 'ocobo.dark', color: 'white', rounded: 'lg' })}`}>
      {children}
    </div>
  );
}

// ===== COMPOSANT PRINCIPAL (contenu seulement) =====

export function PhilosophyCard({ icon, title, description }: Props) {
  return (
    <CardContainer>
      <CardIconBox>{icon}</CardIconBox>
      <Text as="h3" variant="display-md">{title}</Text>
      <p>{description}</p>
    </CardContainer>
  );
}
```

**Avantages:**
- Le composant principal ne contient que la **structure/contenu**
- Les styles sont isolés et lisibles en haut du fichier
- Pas de pollution du dossier `atoms/` avec des composants non-réutilisables

### 2. Héritage CSS natif (pas child selectors)
Déclarer `color`, `fontSize`, `lineHeight` sur le parent → les enfants héritent automatiquement.
```tsx
// Parent définit les defaults
<CardBody className={css({ color: 'gray.500', fontSize: 'sm' })}>
  <p>Hérite automatiquement</p>  {/* pas besoin de className */}
</CardBody>
```

### 3. Text component pour override
Quand un enfant doit différer du parent, utiliser `<Text>` :
```tsx
<CardBody>
  <Text as="h3" variant="display-md" color="dark">Override</Text>
  <p>Hérite du parent</p>
</CardBody>
```

### 4. Compound components pour composition
Slots flexibles via pattern Object.assign (Header, Body, Footer)

---

## Analyse: Duplications identifiées

| Pattern | Occurrences | Impact |
|---------|-------------|--------|
| Container `maxW: '7xl', mx: 'auto', px: responsive` | 4+ | ~20 lignes |
| Typography H1/H2 display | 6+ | ~60 lignes |
| Subtitle paragraphs | 4+ | ~30 lignes |
| Icon boxes (10x10, 16x16) | 4+ | ~40 lignes |
| Form labels (xs, uppercase) | 4+ | ~20 lignes |
| Card hover states | 1 fichier | ~45 lignes |

---

## Phase 1: Recipes Panda CSS

### 1.1 Recipe `text` (Typography)

```typescript
// panda.config.ts
text: defineRecipe({
  variants: {
    variant: {
      'display-xl': { fontFamily: 'display', fontSize: { base: '5xl', md: '6xl' }, fontWeight: 'black', lineHeight: '0.95', letterSpacing: 'tight' },
      'display-lg': { fontFamily: 'display', fontSize: { base: '4xl', md: '5xl' }, fontWeight: 'black', letterSpacing: 'tight' },
      'display-md': { fontFamily: 'display', fontSize: '2xl', fontWeight: 'black', letterSpacing: 'tight' },
      'subtitle': { fontSize: { base: 'lg', md: 'xl' }, fontWeight: 'medium', lineHeight: 'relaxed' },
      'body': { fontSize: 'sm', lineHeight: 'relaxed', fontWeight: 'medium' },
      'label': { fontSize: 'xs', fontWeight: 'black', textTransform: 'uppercase', letterSpacing: '0.2em' },
    },
    color: { dark: {...}, muted: {...}, white: {...}, sky: {...} }
  }
})
```

### 1.2 Recipe `iconBox`

```typescript
iconBox: defineRecipe({
  base: { display: 'flex', alignItems: 'center', justifyContent: 'center', rounded: 'xl' },
  variants: {
    size: { sm: { w: '8', h: '8' }, md: { w: '10', h: '10' }, lg: { w: '16', h: '16' } },
    variant: { solid: { bg: 'ocobo.dark', color: 'white' }, outline: { bg: 'white', borderWidth: '1px', shadow: 'sm' } },
    color: { sky: {...}, mint: {...}, yellow: {...} }
  }
})
```

### 1.3 Recipe `partnerCard` (hover states)

Extraire les ~45 lignes de hover states:
```typescript
partnerCard: defineRecipe({
  base: {
    // Base card styles
    '& .card-logo': { transition: 'all 500ms', filter: 'grayscale(100%)', opacity: 0.6 },
    '&:hover .card-logo': { filter: 'grayscale(0)', opacity: 1 },
    '& .card-badge': { transition: 'all 300ms' },
    '&:hover .card-badge': { bg: 'ocobo.dark', color: 'white' },
    // ... autres hover states
  }
})
```

---

## Phase 2: Style Components (Atoms)

### 2.1 `components/atoms/text.tsx`

```tsx
interface TextProps extends TextVariantProps {
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'label';
  children: React.ReactNode;
}

export function Text({ as: Tag = 'p', variant, color, children, className }: TextProps) {
  return <Tag className={`${text({ variant, color })} ${className}`}>{children}</Tag>;
}
```

**Usage:**
```tsx
<Text as="h1" variant="display-xl" color="dark">Un écosystème</Text>
<Text variant="subtitle" color="muted">Description...</Text>
```

### 2.2 `components/atoms/icon-box.tsx`

```tsx
export function IconBox({ size, variant, color, children }: IconBoxProps) {
  return <div className={iconBox({ size, variant, color })}>{children}</div>;
}
```

### 2.3 `components/atoms/form-field.tsx`

```tsx
export function FormField({ label, required, children }: FormFieldProps) {
  return (
    <div className={vstack({ gap: '2', alignItems: 'stretch' })}>
      <Text as="label" variant="label" color="muted">{label}{required && '*'}</Text>
      {children}
    </div>
  );
}
```

---

## Phase 3: Compound Components (Composition)

### 3.1 PartnerCard - Pattern compound

**Avant:** Composant monolithique de ~200 lignes

**Après:** Compound component avec slots

```tsx
// Contexte partagé
const CardContext = createContext<{ animate: boolean } | null>(null);

function CardRoot({ animate, children }: { animate: boolean; children: React.ReactNode }) {
  return (
    <CardContext value={{ animate }}>
      <div className={partnerCard({ animate })}>{children}</div>
    </CardContext>
  );
}

function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className={flex({ justify: 'space-between', align: 'start', mb: '8' })}>{children}</div>;
}

function CardLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <IconBox size="lg" variant="ghost">
      <img src={src} alt={alt} className="card-logo" />
    </IconBox>
  );
}

function CardBody({ children }: { children: React.ReactNode }) {
  return <div className={css({ flexGrow: 1, mb: '6' })}>{children}</div>;
}

function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className={flex({ align: 'center', justify: 'space-between', mt: 'auto' })}>{children}</div>;
}

// Export compound
export const PartnerCard = Object.assign(CardRoot, {
  Header: CardHeader,
  Logo: CardLogo,
  Body: CardBody,
  Footer: CardFooter,
});
```

**Usage (composition flexible):**
```tsx
<PartnerCard animate={animate}>
  <PartnerCard.Header>
    <PartnerCard.Logo src={partner.logo} alt={partner.name} />
    <CategoryBadges categories={partner.category} />
  </PartnerCard.Header>
  <PartnerCard.Body>
    <Text as="h3" variant="display-md">{partner.name}</Text>
    <Tags items={partner.tags} />
    <Text variant="body" color="muted">{partner.desc}</Text>
  </PartnerCard.Body>
  <Separator />
  <PartnerCard.Footer>
    <PartnerStatus status={partner.status} />
    <ExternalLink />
  </PartnerCard.Footer>
</PartnerCard>
```

### 3.2 philosophy-section.tsx - Local style wrappers

Structure avec wrappers à usage unique en haut du fichier:

```tsx
// ===== STYLE WRAPPERS (local, non exportés) =====

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className={css({ bg: 'ocobo.dark', py: '32', color: 'white', position: 'relative', overflow: 'hidden' })}>
      {children}
    </section>
  );
}

function DotPattern() {
  return (
    <div className={css({
      position: 'absolute', inset: '0', opacity: 0.03,
      backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
      backgroundSize: '40px 40px',
    })} />
  );
}

function CardContainer({ hoverColor, children }: { hoverColor: string; children: React.ReactNode }) {
  return (
    <div className={css({
      bg: 'white', p: '10', rounded: 'xl', shadow: 'xl',
      transition: 'transform 300ms',
      _hover: { transform: 'translateY(-4px)' },
      '&:hover .icon-box': { bg: hoverColor },
    })}>
      {children}
    </div>
  );
}

function CardIconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className={`icon-box ${center()} ${css({ w: '16', h: '16', bg: 'ocobo.dark', color: 'white', rounded: 'lg', mb: '8', transition: 'colors' })}`}>
      {children}
    </div>
  );
}

// ===== COMPOSANTS DE CONTENU =====

function PhilosophyCard({ icon, title, description, hoverColor }: Props) {
  return (
    <CardContainer hoverColor={hoverColor}>
      <CardIconBox>{icon}</CardIconBox>
      <Text as="h3" variant="display-md" color="dark">{title}</Text>
      <p>{description}</p>  {/* hérite color du parent si défini */}
    </CardContainer>
  );
}

export function PhilosophySection() {
  return (
    <SectionContainer>
      <DotPattern />
      <Container>
        <Text as="h2" variant="display-lg" color="white">Le système avant l'outil.</Text>
        <Text variant="subtitle" color="muted">L'outil n'est qu'un moyen...</Text>
        <div className={grid({ columns: { base: 1, md: 3 }, gap: '10' })}>
          <PhilosophyCard icon={<Lock size={28} />} title="Agnostique" description="..." hoverColor="ocobo.sky" />
          ...
        </div>
      </Container>
    </SectionContainer>
  );
}
```

### 3.3 partner-form.tsx - Local style wrappers

```tsx
// ===== STYLE WRAPPERS (local) =====

function FormContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className={css({
      bg: 'white', p: { base: '8', md: '12' }, rounded: '3xl',
      shadow: '2xl', borderWidth: '1px', borderColor: 'gray.100',
      position: 'relative', overflow: 'hidden',
    })}>
      {children}
    </div>
  );
}

function GradientBar() {
  return (
    <div className={css({
      position: 'absolute', top: '0', left: '0', w: 'full', h: '1.5',
      background: 'linear-gradient(to right, token(colors.ocobo.yellow), token(colors.ocobo.sky), token(colors.ocobo.mint))',
    })} />
  );
}

function SubmitButton({ children }: { children: React.ReactNode }) {
  return (
    <button type="submit" className={`${center()} ${css({
      w: 'full', py: '5', bg: 'ocobo.dark', color: 'white',
      fontWeight: 'black', textTransform: 'uppercase', letterSpacing: '0.25em',
      fontSize: 'xs', shadow: 'xl', gap: '3',
      _hover: { bg: 'black' },
      '&:hover svg': { transform: 'translateX(4px) translateY(-4px)' },
    })}`}>
      {children}
    </button>
  );
}

// ===== COMPOSANTS DE CONTENU =====

function PartnerFormFields({ onSubmit }: Props) {
  return (
    <form onSubmit={handleSubmit} className={vstack({ gap: '6', alignItems: 'stretch' })}>
      <Text as="h3" variant="display-md">Devenez partenaire</Text>
      <div className={grid({ columns: { base: 1, md: 2 }, gap: '6' })}>
        <FormField label="Nom de la solution" required>
          <input type="text" placeholder="ex: HubSpot" className={input()} />
        </FormField>
        ...
      </div>
      <SubmitButton>Soumettre ma solution <Send size={16} /></SubmitButton>
    </form>
  );
}
```

---

## Phase 4: Style Inheritance (Parents)

### 4.1 Utiliser Section/Container existants

**Avant:**
```tsx
<section className={css({ pt: '40', pb: '24', maxW: '7xl', mx: 'auto', px: {...} })}>
```

**Après:**
```tsx
<Section bg="white" padding="lg">
  <Container>
    ...
  </Container>
</Section>
```

### 4.2 Étendre SectionHeader

Ajouter support JSX pour titres avec spans colorés:

```tsx
<SectionHeader
  badge="TECHNOLOGIE"
  badgeVariant="sky"
  subtitle="Description..."
>
  Un écosystème de solutions <Text as="span" color="sky">connectées.</Text>
</SectionHeader>
```

### 4.3 Héritage CSS natif (pas child selectors)

Utiliser l'héritage CSS naturel: `color`, `fontSize`, `fontFamily`, `lineHeight`, `fontWeight`, `letterSpacing` se propagent automatiquement aux enfants.

**Avant (répétition sur chaque élément):**
```tsx
<div>
  <h3 className={css({ color: 'ocobo.dark', fontSize: '2xl' })}>Title</h3>
  <p className={css({ color: 'gray.500', fontSize: 'sm' })}>Description</p>
  <p className={css({ color: 'gray.500', fontSize: 'sm' })}>More text</p>
</div>
```

**Après (héritage du parent):**
```tsx
// CardBody définit les styles par défaut qui héritent
function CardBody({ children }: Props) {
  return (
    <div className={css({
      color: 'gray.500',      // hérité par tous les enfants
      fontSize: 'sm',         // hérité par tous les enfants
      lineHeight: 'relaxed',  // hérité par tous les enfants
    })}>
      {children}
    </div>
  );
}

// Usage - les enfants héritent, seul h3 override via Text
<CardBody>
  <Text as="h3" variant="display-md" color="dark">Title</Text>
  <p>Description hérite color/fontSize du parent</p>
  <p>More text hérite aussi</p>
</CardBody>
```

**Propriétés qui héritent (à déclarer sur parent):**
- `color`, `font-size`, `font-family`, `font-weight`
- `line-height`, `letter-spacing`, `text-align`

**Propriétés qui n'héritent pas (à garder sur enfants):**
- `margin`, `padding`, `border`, `background`

---

## Fichiers à créer

```
panda.config.ts                    # Ajouter recipes text, iconBox, partnerCard

components/atoms/
  text.tsx                         # Typography component
  icon-box.tsx                     # Icon container
  form-field.tsx                   # Form field wrapper

components/sections/partners/
  partner-card.tsx                 # Refactor → compound component
```

## Fichiers à modifier

```
components/organisms/SectionHeader.tsx  # Support children JSX
components/sections/partners/
  hero-section.tsx                      # Utiliser Text, Section, Container
  philosophy-section.tsx                # Utiliser IconBox, Text
  ecosystem-section.tsx                 # Utiliser Container
  partner-form.tsx                      # Utiliser FormField, Text
  cta-section.tsx                       # Utiliser Section, Text
```

---

## Ordre d'implémentation

### A) Fondations partagées (atoms/)

| Étape | Tâche | Fichier |
|-------|-------|---------|
| 1 | Recipe `text` + `Text` component | panda.config.ts, atoms/text.tsx |
| 2 | Recipe `iconBox` + `IconBox` component | panda.config.ts, atoms/icon-box.tsx |
| 3 | `FormField` component (utilise Text) | atoms/form-field.tsx |

### B) Refactor avec local style wrappers

| Étape | Fichier | Pattern appliqué |
|-------|---------|------------------|
| 4 | partner-card.tsx | Recipe `partnerCard` hover states + compound component |
| 5 | philosophy-section.tsx | Local wrappers: SectionContainer, CardContainer, CardIconBox |
| 6 | partner-form.tsx | Local wrappers: FormContainer, GradientBar, SubmitButton + FormField atom |
| 7 | hero-section.tsx | Text atoms + héritage CSS |
| 8 | cta-section.tsx | Text atoms + héritage CSS |

---

## Vérification

```bash
pnpm run build      # Compilation OK
pnpm run dev        # Naviguer /partners
pnpm exec tsc       # Type check
```

Test visuel: vérifier rendu identique après chaque étape
