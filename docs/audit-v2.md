# Audit v2 de la maquette

Audit de l'export statique v2, versionné dans ce repo le 20 octobre 2026. Il sert d'entrée à trois documents : la mise à jour de l'ADR 0002 du repo `posts`, un nouvel ADR design system dans `website`, et la spec de refonte.

Périmètre : les pages listées dans le tableau du README. Les variantes (`accueil-test*.html`, `accueil-v3.html`, `a-propos-v2.html`) sont exclues. Les chemins `website/...` désignent le repo `website`.

## Synthèse

| Sujet | Verdict | Conséquence |
|---|---|---|
| Bloc DS | Bien défini, peu appliqué dans les pages | Le portage part du bloc DS. Le HTML des pages sert de référence visuelle |
| Correspondance avec Panda | La plupart des tokens existent déjà | Une dizaine de tokens et trois recipes à ajouter |
| ADR-0001 | Six règles à amender | Un nouvel ADR dans `website` |
| Pages enjeu | Le gabarit tient pour 5 pages sur 6 | L'ADR 0002 doit être revu sur quatre points |
| Revenue AI | La page sort du gabarit | Page codée à la main, à trancher |
| site.js | Plus lourd, mais portable avec deux hooks partagés | Le hero animé de la home est le seul gros lot |
| Textes à fournir | 117 champs entre crochets, contre environ 30 | Collecte de contenus à planifier côté Ocobo |

## 1. Bloc DS face à Panda et ADR-0001

### Présence du bloc

- Le bloc `/*DS:start*/ … /*DS:end*/` est identique octet pour octet dans 15 fichiers. `composants.html` n'en diffère que par une ligne vide.
- Trois pages de référence n'ont pas le bloc : `clients.html`, `clients-beev.html`, `librairie.html`. Elles embarquent le CSS Panda de production. `clients*.html` lit deux variables DS avec une valeur de secours.
- `a-propos.html` mélange le bloc DS et le CSS Panda de production.
- La variante `accueil-test-5.html` contient aussi le bloc.

### Correspondance avec le thème Panda

Le thème vit dans `website/preset/` (tokens, semantic tokens, text styles, recipes). Panda est en version 1.8.1, qui accepte des tokens de dégradé.

| Token DS | Équivalent Panda | État |
|---|---|---|
| dark, mint, sky, coral, yellow | `ocobo.*`, `mint`, `sky`, `coral`, `yellow` | identique |
| grey #767676 | `gray` | identique |
| ink-2, ink-3, ink-4 (zinc) | `gray.600`, `gray.500`, `gray.400` | identique |
| line #ECECEE | aucun (le plus proche : `gray.100`) | manquant |
| paper #F5F5F0 | `gray.light` #F5F5F5 | proche |
| dégradé IA | aucun token de dégradé | manquant |
| r-s, r-m, r-l, r-full | `lg`, `2xl`, `3xl`, `full` | identique |
| sh-1 | `soft-md` (étalement et teinte différents) | proche |
| sh-2, sh-3 | aucun | manquant |
| h2 clamp(34px, 3.6vw, 48px) | `text` `display-lg`, 36 puis 48px par paliers | proche |
| h3 24px | aucun 24px (`2xl` vaut 22px) | manquant |
| sec 112px, sec-c 80px | spacing `28` et `20` existent, mais `section()` utilise 96/64/48 | recipe à aligner |
| Container 1280, 32/24/16 | `Container` | identique |

Côté composants :

| Composant DS | Équivalent Panda | Action |
|---|---|---|
| `.ds-pill` | `badge` sm yellow | identique |
| `.ds-pill-ai`, `.ds-p-label` | `badge` | ajouter une variante `ai` et une taille `xs` |
| `.ds-tag`, `.ds-eyebrow` | aucun | nouvelle recipe `tag` ou variantes de `text` |
| `.ds-card` | `card` | aligner bordure et ombre, ajouter un état survol |
| `.ds-flip` | aucun (rien ne tourne en 3D dans l'app) | nouvelle slot recipe `flipCard` |
| `.ds-person` | aucun | slot recipe `personCard` ou variante de `flipCard` |
| Boutons de `composants.html` | `button` primary | ajouter `secondary` (bordure claire) et `link` |

### Tokens et recipes à prévoir

- Tokens à ajouter : `colors.line`, `gradients.ai`, trois ombres (repos, survol, fenêtre), tailles 24, 17, 13, 11 et 10px, H2 fluide, espacements de lettres .3em, .16em, .08em, courbe d'animation `cubic-bezier(.2,.8,.2,1)`.
- Couleurs d'enjeu en semantic tokens, avec leurs teintes claires. Les pages utilisent beaucoup ces teintes, absentes du bloc DS.
- `paper` peut être remplacé par `gray.light`. L'écart de teinte est invisible.

### Points de l'ADR-0001 à amender

1. **Typographie.** Le H2 unique et fluide et le H3 Bornia 700 en 24px n'existent pas dans `text()`. `textStyles.heading2` (18 à 32px, graisse 400) contredit le H2 du DS (Bermia 900).
2. **Sections.** L'exemple de l'ADR donne 96px, le DS 112 et 80px. La maquette réduit les paddings sur mobile par des sélecteurs d'attribut qui ne visent pas les sections DS. La recipe doit porter elle-même les valeurs responsives.
3. **Cartes.** Les valeurs par défaut de `card()` diffèrent de `.ds-card`. La face avant de `.ds-person` reproduit la combinaison bordure, rayon et ombre en ligne que l'ADR interdit.
4. **Styles hérités.** Le bouton « Lien texte » recrée la recipe `link` supprimée. Il faut l'autoriser comme variante de `button`.
5. **Inventaire.** La phrase « six recipes actives » ne tient plus.
6. **Gris.** `text({color:'muted'})` vaut #767676, le texte secondaire du DS vaut #71717A. L'échelle `gray` du site mélange zinc et le gris Tailwind par défaut.

À ajouter dans le nouvel ADR : dégradé IA réservé aux sujets IA, table des couleurs d'enjeu, 4 rayons et 3 ombres seulement, aucun hexadécimal brut. La question d'une règle de lint se pose de nouveau vu le volume de valeurs brutes.

### Application du DS dans les pages

Le bloc est propre, les pages l'appliquent peu.

| Mesure (18 pages de référence) | Valeur |
|---|---|
| Attributs `style=""` en ligne | 4 961 |
| Couleurs brutes en ligne | 4 663 |
| Tailles de police brutes en ligne | 1 910 |
| Rayons bruts en ligne | 910 |
| Références `var(--ds-*)` en ligne | 699 |

- Tailles de police : environ 3 % passent par un token. `--ds-h2` sert 96 fois, `--ds-h3` jamais. Les H3 utilisent 19, 22, 24, 26, 27, 28, 30 et 36px.
- Rayons : environ 26 % passent par un token. Environ 280 valeurs sont hors échelle (3, 14, 9, 18, 12, 20px…). La phrase du README « Aucune autre valeur » ne tient pas.
- Ombres : environ 50 % passent par un token.
- Pages les plus chargées : `index.html`, `equipe.html`, `enjeux-ia.html`. `methode.html` compte le plus d'ombres brutes.
- Les classes du bloc sont souvent recopiées en ligne. `.ds-pill` est recopiée 12 fois sur la home. `.ds-p-ring` n'est jamais utilisée : l'anneau est reconstruit en ligne.
- Deux cartes retournables contournent `.ds-flip` : `.ej-flip` (cartes enjeu de la home) et `.flip` (10 cartes outils de `technologie.html`).

Beaucoup de valeurs brutes égalent un token (999px, 16px). Le recalage sur l'échelle est donc mécanique pour une bonne part.

### Dégradé IA

- Le dégradé officiel coral vers yellow est écrit en dur 75 fois. `var(--ds-ai)` ne sert qu'environ 5 fois hors du bloc.
- 14 variantes coexistent, contre 8 dans l'export précédent : angles 135, 110 et 180deg, versions assombries (#F2785C vers #D9A800, 22 usages), teintes transparentes, spinner conique, halo radial.
- L'ancien dégradé IA mint, sky, coral a disparu. Seuls restent les traits de liaison du schéma IA en 3 couches.

### Gris zinc

Ils sont toujours là. Trois sont devenus des tokens (`--ds-ink-2/3/4`). #F4F4F5 (402 usages), #E4E4E7 (198), #D4D4D8 (64) et #3F3F46 (111) n'ont aucun token. `composants.html` lui-même utilise du zinc brut.

## 2. Squelette des 6 pages enjeu

### Sections par page

Abréviations : RP Revenue Performance (`enjeux-previsibilite`), SE Sales Experience (`enjeux-organisation-commerciale`), SC Sales Compensation (`enjeux-remuneration-variable`), CX Customer Experience (`enjeux-clients`), SY Revenue Systems (`enjeux-outils`), AI Revenue AI (`enjeux-ia`).

| Section | RP | SE | SC | CX | SY | AI |
|---|---|---|---|---|---|---|
| Hero avec bow tie | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| « Vous vous reconnaissez » (symptômes) | 5 | 6 | 5 | 5 | 5 | 5 |
| Pour qui (4 cartes) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Thèse IA en 3 couches | | | | | | ✓ |
| « Une journée de commercial » (onglets) | | | | | | ✓ |
| Chantiers (cartes retournables) | 4 | 6 | 5 | 6 | 5 | 6 cas d'usage |
| Bloc partenaire Qobra | | | ✓ | | | |
| Schéma de stack | | | | | ✓ | |
| Pont IA avec fenêtre d'agent | ✓ | ✓ | ✓ | ✓ | ✓ | « Notre point de vue », sans fenêtre |
| Méthode en 3 étapes et outils | ✓ | ✓ | ✓ | ✓ | ✓ | « Le Revenue AI Sprint » |
| Cas client (2 métriques) | ✓ | ✓ | ✓ | ✓ | ✓ | cas interne Ocobo |
| Experts | 2 | 2 | 2 | 2 | 2 | 2 |
| Diagnostic (CTA final) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| « Les autres enjeux » | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

### Ce qui change pour l'ADR 0002

L'ADR 0002 a été écrit sur l'export précédent. Quatre de ses hypothèses ne tiennent plus.

1. **La section « Comment nous travaillons » n'est plus commune.** Seuls le H2 et les trois titres d'étape restent identiques. Le sous-titre, les textes d'étape, les outils et la note varient d'une page à l'autre. `method` devient un champ de contenu sur chaque page.
2. **Le pont IA est devenu une section entière.** Il a un titre, 3 puces et une fenêtre d'agent animée propre à chaque page. Une fenêtre contient titre, agent, heure, prompt, KPIs, lignes de statut, boutons et pied. En contenu, cela demande un schéma profond.
3. **Quatre blocs propres à une page** : stack (SY), thèse (AI), journée de commercial (AI), Qobra (SC). L'ADR prévoit d'être revu au-delà de trois. Le compte retombe à trois si le bloc partenaire devient un champ optionnel générique.
4. **Revenue AI sort du gabarit.** 7 de ses 13 sections sont reformulées, déplacées ou remplacées.

Nouveautés sur toutes les pages : la section symptômes, « Les autres enjeux », et un hero enrichi (citation de douleur, chapô en deux parties, deux CTA).

### Bow tie

- Les étapes actives correspondent à `methode.html`. SY et AI couvrent les 7 étapes.
- Chaque étape porte six champs : identifiant, libellé d'étape, jalon, titre du KPI, libellé court du KPI (nouveau, pages enjeu seulement), description.
- Les textes des tooltips sont identiques sur les 6 pages et sur `methode.html`. Ils restent dans le code, comme l'ADR le prévoit.
- Le filtre au survol de `methode.html` est en CSS pur avec `:has()`. Les attributs de cellule et les règles d'atténuation se déduisent de `activeStages`.
- **Conflit de couleur sur SY.** `methode.html` trace SY en gris #767676. `enjeux-outils.html` colore son bow tie par position dans le cycle (mint, yellow, sky).

### Cartes experts

- Un seul composant partout : `.ds-flip.ds-person`.
- Face avant : initiales, nom, rôle, libellé d'enjeu. Dos : prénom, « Ce qu'il ou elle apporte », outils, « Avant Ocobo ».
- **Aucune page n'a de citation.** Le champ `quote` de l'ADR 0002 peut être retiré.
- **Affectation incohérente.** `equipe.html` place Jeanne et Hugo sur Sales Experience, Domitille et Corentin sur Revenue Performance. Les pages enjeu font l'inverse. Les textes de contribution suivent `equipe.html`.
- Les outils d'un expert diffèrent entre sa page enjeu et `equipe.html`. Benjamin a Claude et Dust sur `enjeux-ia.html` seulement.
- Ce désaccord conforte le choix de l'ADR : déclarer l'enjeu sur la fiche Team member, à un seul endroit.

### Couleurs d'enjeu

Le README est confirmé pour les pastilles, les dos de chantier et les libellés d'experts. Écarts constatés :

- Bow tie SY en couleurs de marque, anneau d'expert SY en #A1A1AA, carte SY de la home en #A1A1AA.
- Puces de symptômes en coral sur toutes les pages.
- Fond du diagnostic en yellow sur 5 pages, quelle que soit la couleur de l'enjeu.

### Reprise sur la home et les autres pages

Les cartes enjeu de `index.html` recopient mot pour mot la citation du hero, l'intro des chantiers et leurs titres. Les listes d'outils de la home diffèrent des pages pour SE, SY et AI. La home devra lire le fichier enjeu au lieu de dupliquer.

### Champs d'un fichier enjeu

- `key` (pilote la couleur dans le code), `number`, `name`, `tagline`, `badge` optionnel.
- `hero` : titre en deux parties, citation, chapô et partie surlignée, libellé du CTA.
- `bowtie` : `activeStages`, légende, libellé de périmètre.
- `symptoms` : titre en deux parties, 5 ou 6 items.
- `audience` : 4 items {équipe, rôles, bénéfice}.
- `workstreams` : intro, 4 à 6 items {catégorie, étape optionnelle, titre, description, livrable, note optionnelle}.
- `aiBridge` : titre, 3 puces, démo optionnelle (fenêtre d'agent).
- `method` : sous-titre, 3 étapes, outils (slugs Tool), note.
- `case` : slug de Story, titre, résumé, 2 métriques.
- `diagnostic` : question, sous-titre.
- Blocs nommés : `stack`, `thesis`, `production`, `partner`.

## 3. Comportements de site.js

`assets/site.js` fait 320 lignes, contre 6,9 Ko dans l'export précédent. Le contenu est visible par défaut. Le JS le masque puis le révèle, et s'arrête avant sous `prefers-reduced-motion`.

| Comportement | Pages | Portage | Taille |
|---|---|---|---|
| Menu burger, sous-menus | toutes | existe déjà (Ark Dialog et Menu) | S |
| Navbar en pastille au scroll | toutes | existe déjà (`use-navbar-scroll.ts`) | S |
| Révélations à l'apparition (maturité, mission, stack, fenêtres d'agent) | home, méthode, enjeux, technologie | hook partagé `useInView` | M |
| Progression au scroll (`iaScrub`, `gapScrub`, `rcScrub`) | home, enjeu IA, nous-rejoindre | hook partagé (framer-motion déjà installé) | M |
| Hero animé (`hxAnim`, 4 équipes vers RevOps) | home | composant dédié | L |
| Journée de commercial (`dayAnim`) | enjeu IA | Ark Tabs | M |
| Curseur avant/après (`baSlide`) | clients | input range contrôlé | M |
| Filtre des stories (`csFilter`) | clients | état local, modèle existant | S |
| Filtre au survol du bow tie | méthode | garder le CSS `:has()` | S |
| Tooltips KPI du bow tie | méthode, enjeux | Ark Tooltip | M |
| Cartes retournables | équipe, à propos, enjeux, home, technologie | composant flip | M |
| Bandeaux défilants | home, équipe, clients | `client-marquee.tsx` existe | S |
| Tracé des bow ties | home, méthode, enjeux | étendre `unified-bowtie.tsx` | M |
| Calculateur ROI (script en ligne) | roi | fonction de calcul et formulaire | M |

- **Nouveautés depuis l'export précédent** : `hxAnim`, `pwAnim`, `dayAnim`, `clampPanels`, `rcScrub`, `baSlide`, `csFilter`, et le calculateur ROI.
- **Code mort à ne pas porter** : `hzScrub` et `hwAnim` visent des éléments absents de toutes les pages. Une partie du CSS n'a pas de balisage correspondant.
- **Safari et Firefox.** La navbar en pastille utilise `animation-timeline: scroll()` sans `@supports` : ces navigateurs affichent l'état final, ce qui reste acceptable. Les bow ties de la home et de `methode.html` ont un repli statique sous `@supports`.
- **À créer dans `website`** : un hook `useInView`, un hook de progression au scroll, et les composants tooltip, flip et onglets.

### Accessibilité

- Le README affirme que la carte Consultant se retourne au focus clavier. C'est faux : `.ds-person` n'a aucun élément focusable. Même problème sur les 10 cartes de `technologie.html`.
- Les tooltips KPI du bow tie sont sur des `div` non focusables. Ils ne s'ouvrent qu'au survol.
- Le filtre au survol de `methode.html` n'a pas d'équivalent au focus.
- Les cartes enjeu de la home sont des liens : au toucher, on navigue sans voir le dos. Le texte « Survolez » suppose une souris.
- L'autoplay de la journée de commercial n'a pas de bouton pause, et les onglets n'ont pas de rôle ARIA.

## 4. Textes et données à fournir

### Champs entre crochets

117 au total, 110 uniques. L'export précédent en comptait environ 30.

| Type | Nombre | Où |
|---|---|---|
| « Avant Ocobo : [entreprise] » | 30 | équipe (18), 2 par page enjeu |
| « [Une phrase, à recueillir] » | 18 | équipe |
| Valeurs KPI « [X] » et leurs libellés | 28 | 2 paires par page enjeu, équipe |
| Bloc cas client (nom, phrase, contexte) | 16 | pages enjeu |
| « [À compléter] » (outils) | 10 | équipe (7), à propos (3) |
| Témoignages | 5 | home, équipe |
| Notes de validation | 2 | Qobra (SC), badges partenaires (SY) |
| Description du club | 1 | équipe |

Par page : équipe 50, chaque page enjeu 7 à 10, home 3, à propos 3.

Sans crochets mais à remplacer : initiales à la place des photos (équipe, à propos, experts, 17 stories), texte « Survolez ».

### Noms et chiffres à confirmer avant publication

- **Logos clients** : 8 sur la home, 21 dans le bandeau de `clients.html`. Sept logos n'ont pas de story. Trois stories n'ont pas de logo.
- **Stories** : 17 personnes nommées avec leur poste. La story Beev cite une durée et une date.
- **Partenaires** : `technologie.html` annonce 7 partenariats officiels mais en liste 10. Il annonce aussi 46 certifications HubSpot et des niveaux (HubSpot Platinum, Modjo Gold, Aircall Gold).
- **Chiffres tiers** : Doctolib et Pennylane, « source : Qobra », sur `enjeux-remuneration-variable.html`. Ils attendent la validation de Qobra.
- **Chiffres Ocobo** : « +60 équipes Revenue », « 20 personnes », « 12+ ans », « ± 10 % » de prévision.
- **Anciens employeurs** cités sur équipe, à propos et nous-rejoindre.
- **ROI** : « Hypothèses prudentes, observées chez nos clients » est une affirmation à étayer.
- **Comptes fictifs** dans les fenêtres d'agent (Northwind, Brightlane, Kestrel). Seule `clients.html` précise qu'ils sont fictifs.

## 5. Écarts avec l'audit précédent

Mesures sur les mêmes 12 pages, bloc DS compris :

| Propriété | Export v1 | Export v2 |
|---|---|---|
| Couleurs | 404 | 439 |
| Paddings | 136 | 150 |
| Dégradés | 42 | 70 |
| Tailles de police | 77 | 70 |
| Rayons | 30 | 39 |
| Ombres | 75 | 57 |
| Espacements de lettres | 40 | 46 |
| Transitions | 67 | 82 |
| Gaps | 42 | 46 |

- **Ce qui progresse** : un bloc DS existe et nomme les tokens. Les ombres sont moins variées. La carte Consultant est unifiée.
- **Ce qui ne progresse pas** : la variété des valeurs brutes reste la même. Les dégradés ont presque doublé, surtout des halos et trames de points sur les pages enjeu.
- **Ce qui change de sens** : le dégradé IA passe de mint, sky, coral à coral vers yellow. Le one-pager de projection doit être corrigé sur ce point.
- **Ce qui s'ajoute au périmètre** : calculateur ROI, journée de commercial, curseur avant/après, filtre des stories, bandeau photo en diagonale.

Conséquence pour le chiffrage : le recalage des valeurs brutes reste un poste à part entière. Le bloc DS fixe la cible. Le recalage de chaque page reste à faire.

## 6. Questions à trancher

Ces questions alimentent la séance de grilling, avant toute mise à jour d'ADR.

1. **Revenue AI** : page codée à la main, ou sixième fichier de contenu avec ses blocs propres ?
2. **Fenêtres d'agent** : données structurées dans le fichier enjeu, ou un composant par enjeu dans le code ?
3. **Bloc Qobra** : bloc nommé, ou champ partenaire générique ouvert à toutes les pages ?
4. **Outils d'un expert** : une liste par personne, ou une liste par couple expert et enjeu ?
5. **Affectation des experts RP et SE** : quelle version fait foi, `equipe.html` ou les pages enjeu ?
6. **Couleur du bow tie SY** : gris comme sur `methode.html`, ou couleurs par position comme sur `enjeux-outils.html` ?
7. **Pages sans bloc DS** (`clients.html`, `clients-beev.html`, `librairie.html`) : refonte au DS, ou maintien du style actuel ?
8. **Accessibilité** : corriger les cartes retournables et les tooltips dans la refonte, ou plus tard ?
