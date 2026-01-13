# Story 1.7: Review Color Token Strategy

Status: backlog

## Story

As a **Design System Architect**,
I want to review and optimize the semantic color token strategy,
so that the token system is consistent, complete, and easier to maintain.

## Context

Cette story découle des observations faites lors de la code review de la story 1-6 (migration vers semantic tokens). Plusieurs incohérences ont été identifiées dans la stratégie actuelle.

### Problèmes identifiés

1. **Tokens light incomplets**
   - Seul `semantic-primary-light` existe
   - Les autres (`semantic-success-light`, `semantic-info-light`, `semantic-accent-light`) n'existent pas
   - Force l'utilisation de primitives pour les backgrounds light non-primary

2. **Confusion sémantique**
   - `bg-semantic-text` utilisé pour les fonds sombres (nom confus)
   - Pas de token `semantic-dark` explicite pour les backgrounds sombres

3. **Incohérence dans les hover states**
   - Certains hovers utilisent des sémantiques, d'autres des primitives
   - Pas de convention claire documentée

4. **Tokens borders non sémantiques**
   - Tous les borders utilisent des primitives
   - Pas de `border-semantic-*` définis

## Acceptance Criteria

1. Analyse documentée des patterns d'utilisation actuels
2. Proposition d'une stratégie de tokens révisée
3. Decision record (ADR) pour la nouvelle stratégie
4. Si approuvé : Plan de migration incrémental

## Tasks / Subtasks

- [ ] Task 1: Analyse des patterns actuels
  - [ ] 1.1 Auditer tous les usages de tokens dans le codebase
  - [ ] 1.2 Identifier les patterns récurrents
  - [ ] 1.3 Documenter les incohérences

- [ ] Task 2: Proposer une stratégie révisée
  - [ ] 2.1 Définir les tokens light manquants (success-light, info-light, accent-light)
  - [ ] 2.2 Clarifier la sémantique de `semantic-text` vs nouveau `semantic-dark`
  - [ ] 2.3 Définir une convention pour les hover states
  - [ ] 2.4 Évaluer le besoin de tokens borders sémantiques

- [ ] Task 3: Créer l'ADR (Architecture Decision Record)
  - [ ] 3.1 Documenter les options considérées
  - [ ] 3.2 Justifier la décision retenue
  - [ ] 3.3 Lister les conséquences et trade-offs

- [ ] Task 4: Plan de migration (si approuvé)
  - [ ] 4.1 Estimer l'impact sur le codebase
  - [ ] 4.2 Proposer un plan de migration incrémental
  - [ ] 4.3 Créer les stories de migration si nécessaire

## Dev Notes

### Questions à résoudre

1. Faut-il des tokens `-light` pour toutes les couleurs sémantiques ?
2. Le token `semantic-text` doit-il être renommé ou complété par `semantic-dark` ?
3. Les borders doivent-ils avoir des équivalents sémantiques ?
4. Comment gérer les hover states de manière cohérente ?

### Options à considérer

**Option A : Extension minimale**
- Ajouter uniquement les tokens `-light` manquants
- Garder `semantic-text` tel quel
- Impact minimal sur le codebase existant

**Option B : Refonte complète**
- Créer une palette sémantique complète (light, DEFAULT, dark pour chaque couleur)
- Ajouter des tokens pour borders et hovers
- Impact significatif mais système plus cohérent

**Option C : Approche hybride**
- Ajouter les tokens `-light` manquants
- Ajouter `semantic-dark` pour clarifier l'usage
- Documenter clairement quand utiliser primitives vs sémantiques

### Références

- [Story 1-2b] Implémentation initiale des semantic tokens
- [Story 1-6] Migration vers semantic tokens (observations)
- [docs/design-system/tokens.md] Documentation actuelle

## Priority

**Optional** - Cette story est une amélioration de la dette technique, pas un blocage fonctionnel. Le système actuel fonctionne mais n'est pas optimal.

## Estimation

- Analyse : 1-2h
- Proposition : 1h
- ADR : 30min
- Migration (si approuvée) : Dépend de la décision

## Dev Agent Record

### Agent Model Used

(To be filled during implementation)

### Completion Notes List

(To be filled during implementation)

### File List

(To be filled during implementation)
