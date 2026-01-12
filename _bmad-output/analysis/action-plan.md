# Plan d'Action - Rationalisation Design System Ocobo

**Date:** 2026-01-12
**Projet:** Prototype Ocobo → Design System
**Statut:** Planifié

---

## Vue d'ensemble

| Métrique | Valeur |
|----------|--------|
| Décisions prises | 22 |
| Phases | 4 |
| Composants à créer | ~15-20 |
| Pages à refactorer | 15 |

---

## Contraintes Projet

| Contrainte | Statut |
|------------|--------|
| Ne pas modifier la stack (React 19 + Vite + TS) | ✅ Accepté |
| Ne pas migrer vers Panda CSS | ✅ Hors scope |
| Conserver toutes les animations | ✅ Accepté |
| Garder Tailwind inline (pas de recipes) | ✅ Accepté |
| Pas de tests automatisés | ⚠️ Validation visuelle manuelle |
| Refactoring progressif | ✅ Une étape à la fois |

---

## PHASE 1: FONDATIONS

**Objectif:** Centraliser tous les tokens dans `tailwind.config.js`

### Tâches

| # | Tâche | Priorité | Dépendance | Statut |
|---|-------|----------|------------|--------|
| 1.1 | Installer Tailwind CSS localement (`npm install -D tailwindcss postcss autoprefixer`) | 🔴 Critique | - | ⬜ |
| 1.2 | Créer `tailwind.config.js` | 🔴 Critique | 1.1 | ⬜ |
| 1.3 | Créer `postcss.config.js` | 🔴 Critique | 1.1 | ⬜ |
| 1.4 | Définir tokens couleurs (primitifs + sémantiques) | 🔴 Critique | 1.2 | ⬜ |
| 1.5 | Définir tokens radius (sm, md, lg, xl) | 🔴 Critique | 1.2 | ⬜ |
| 1.6 | Définir tokens shadows (sm, md, lg, hero) | 🔴 Critique | 1.2 | ⬜ |
| 1.7 | Définir tokens typography (12 tailles) | 🔴 Critique | 1.2 | ⬜ |
| 1.8 | Mettre à jour `index.css` avec directives Tailwind | 🔴 Critique | 1.3 | ⬜ |
| 1.9 | Supprimer CDN Tailwind de `index.html` | 🔴 Critique | 1.8 | ⬜ |
| 1.10 | Validation visuelle globale | 🟡 Important | 1.9 | ⬜ |

### Livrable Phase 1

```
/tailwind.config.js
├── theme.extend.colors
│   ├── ocobo (dark, yellow, mint, sky, coral, gray)
│   └── semantic tokens
├── theme.extend.borderRadius (sm, md, lg, xl, full)
├── theme.extend.boxShadow (sm, md, lg, hero)
├── theme.extend.fontSize (12 tailles)
└── theme.extend.fontFamily (sans, display)

/postcss.config.js
└── plugins: [tailwindcss, autoprefixer]
```

---

## PHASE 2: CORE COMPONENTS

**Objectif:** Créer les 5 composants essentiels avec architecture Park UI

### Tâches

| # | Composant | Priorité | Fichier(s) | Statut |
|---|-----------|----------|------------|--------|
| 2.1 | Container | 🔴 Critique | `components/Container.tsx` | ⬜ |
| 2.2 | Button (refacto) | 🔴 Critique | `components/Button.tsx` | ⬜ |
| 2.3 | Badge | 🟠 Haute | `components/Badge.tsx` | ⬜ |
| 2.4 | Input | 🟠 Haute | `components/Input.tsx` | ⬜ |
| 2.5 | Card (primitives) | 🔴 Critique | `components/Card/*.tsx` | ⬜ |

### Structure Card

```
components/Card/
├── index.ts (exports)
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

### Props Uniformes (tous composants)

```typescript
interface CommonProps {
  variant?: 'default' | 'outlined' | 'ghost' | 'filled' | 'elevated'
  size?: 'sm' | 'md' | 'lg'
  colorPalette?: 'yellow' | 'mint' | 'sky' | 'coral' | 'dark'
}
```

---

## PHASE 3: SECTION COMPONENTS

**Objectif:** Créer les composants de section réutilisables

### Tâches

| # | Composant | Priorité | Usage (pages) | Statut |
|---|-----------|----------|---------------|--------|
| 3.1 | Section (base) | 🔴 Critique | Toutes | ⬜ |
| 3.2 | HeroSection | 🟠 Haute | 15 pages | ⬜ |
| 3.3 | CtaSection | 🟠 Haute | ~8 pages | ⬜ |
| 3.4 | FeatureSection | 🟡 Moyenne | ~10 pages | ⬜ |
| 3.5 | GridSection | 🟡 Moyenne | ~12 pages | ⬜ |
| 3.6 | TestimonialSection | 🟢 Basse | ~5 pages | ⬜ |
| 3.7 | StatsSection | 🟢 Basse | ~4 pages | ⬜ |
| 3.8 | DecorativeBlob | 🟢 Basse | ~10 pages | ⬜ |

---

## PHASE 4: PAGES REFACTORING

**Objectif:** Remplacer les patterns inline par les nouveaux composants

### Ordre de priorité

| # | Page | Taille | Priorité | Statut |
|---|------|--------|----------|--------|
| 4.1 | Home.tsx | Grande | 🔴 Critique | ⬜ |
| 4.2 | Services.tsx | Grande | 🟠 Haute | ⬜ |
| 4.3 | Stories.tsx | Grande | 🟠 Haute | ⬜ |
| 4.4 | About.tsx | Grande | 🟡 Moyenne | ⬜ |
| 4.5 | Jobs.tsx | Moyenne | 🟡 Moyenne | ⬜ |
| 4.6 | Partners.tsx | Moyenne | 🟡 Moyenne | ⬜ |
| 4.7 | Method.tsx | Moyenne | 🟡 Moyenne | ⬜ |
| 4.8 | Studio.tsx | Moyenne | 🟢 Basse | ⬜ |
| 4.9 | Contact.tsx | Petite | 🟢 Basse | ⬜ |
| 4.10 | Resources.tsx | Moyenne | 🟢 Basse | ⬜ |
| 4.11 | Podcast.tsx | Moyenne | 🟢 Basse | ⬜ |
| 4.12 | ArticleDetail.tsx | Petite | 🟢 Basse | ⬜ |
| 4.13 | JobDetail.tsx | Petite | 🟢 Basse | ⬜ |
| 4.14 | StoryDetail.tsx | Petite | 🟢 Basse | ⬜ |
| 4.15 | WebinarDetail.tsx | Petite | 🟢 Basse | ⬜ |

### Process par page

1. **Analyser** - Identifier les patterns à remplacer
2. **Remplacer** - Utiliser les composants Design System
3. **Valider** - Vérification visuelle avant/après
4. **Commit** - Un commit par page

---

## Checklist Validation Visuelle

Pour chaque étape de refactoring :

- [ ] Layout intact (spacing, alignment)
- [ ] Couleurs correctes
- [ ] Typography correcte
- [ ] Responsive fonctionne (mobile, tablet, desktop)
- [ ] Hover states fonctionnent
- [ ] Animations préservées
- [ ] Pas de régression visuelle

---

## Risques et Mitigations

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Régression visuelle | Moyenne | Élevé | Refactoring progressif + validation |
| Tokens mal mappés | Faible | Moyen | Tests sur page Home d'abord |
| Composants incomplets | Moyenne | Moyen | Itérations progressives |
| Navbar complexe (17KB) | Élevée | Moyen | Refactoring séparé en Phase 5 |

---

## Notes

- **Scope:** Rationalisation Tailwind uniquement, migration Panda CSS = projet séparé
- **Approche:** Progressive, une étape à la fois
- **Validation:** Manuelle (pas de tests automatisés)
- **Architecture:** Pattern Park UI (composition) pour faciliter migration future

---

*Plan généré automatiquement - Session brainstorming 2026-01-12*
