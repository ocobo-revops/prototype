# Maquette ocobo.co (refonte)

Export statique de la maquette du nouveau site Ocobo. Ce n'est pas du code de production : c'est la référence visuelle et comportementale (mise en page, couleurs, animations, interactions) à réintégrer dans le repo `website` (React Router v7 + Panda CSS), en respectant ses conventions (CLAUDE.md, ADR-0001, i18n FR/EN).

## Ouvrir la maquette

Les animations au scroll reposent sur un petit fichier JavaScript. Ouvrir les fichiers par double-clic peut le bloquer selon le navigateur. Lancer plutôt un serveur local depuis ce dossier :

```bash
npx serve .
# ou
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:3000` (ou `:8000`). Navigateur recommandé : Chrome (voir « Compatibilité » plus bas).

## Pages

| Fichier | Page |
|---|---|
| `index.html` / `accueil.html` | Home |
| `methode.html` | Méthode |
| `enjeux-previsibilite.html` | Enjeu Revenue Performance |
| `enjeux-organisation-commerciale.html` | Enjeu Sales Experience |
| `enjeux-remuneration-variable.html` | Enjeu Sales Compensation |
| `enjeux-clients.html` | Enjeu Customer Experience |
| `enjeux-outils.html` | Enjeu Revenue Systems |
| `enjeux-ia.html` | Enjeu Revenue AI |
| `equipe.html` | Équipe |
| `a-propos.html` | Qui sommes-nous |
| `nous-rejoindre.html` | Nous rejoindre |
| `clients.html` | Customer Stories |
| `clients-beev.html` | Détail d'une Customer Story (identique au site actuel) |
| `librairie.html` | Librairie RevOps (style du site actuel) |
| `roi.html`, `technologie.html` | Pages secondaires |
| `composants.html` | Design system : tokens et composants de référence |

Seules les pages du tableau ci-dessus font foi. Les fichiers suivants sont des variantes de travail, livrées avec l'export mais non retenues à ce jour : `accueil-test.html`, `accueil-test-2.html` à `accueil-test-5.html`, `accueil-v3.html`, `a-propos-v2.html`. Leur statut reste à confirmer par Ocobo.

## Animations et interactions, page par page

**Home**
- Hero : illustration « équipes alignées → croissance ». Les 4 équipes (Marketing, Sales, Customer Success, Finance) se rejoignent sur l'axe RevOps, puis la courbe et les jalons d'impact se dessinent (`assets/site.js`, fonction `hxAnim`). Survol d'un impact : info-bulle expliquant comment on l'obtient.
- Section IA : fenêtres d'agents qui s'animent à l'arrivée (`pwAnim`).
- Section « Six problèmes que nous réglons » : bow tie en flux dégradé, lignes dessinées à l'arrivée sur la section (CSS `animation-timeline: view()`).
- Cartes enjeux : se retournent au survol (face avant : enjeu ; dos : chantiers et outils).
- Section IA (fond sombre) : schéma en 3 couches qui se construit de bas en haut au scroll (`iaScrub`).
- Menu : se transforme en pastille au scroll.

**Méthode**
- « Notre périmètre d'action » : bow tie en flux. Survol d'une pastille enjeu (ou d'une carte « Six enjeux ») : seules les étapes couvertes par l'enjeu restent allumées, dans sa couleur. Survol d'une étape : indicateur clé (KPI) en info-bulle. Implémenté en CSS pur avec `:has()`.

**Pages enjeux**
- Bow tie par enjeu : étapes actives colorées, lignes dessinées au chargement, KPIs au survol, boucle d'expansion.
- Experts : cartes qui se retournent au survol.

**Équipe, Qui sommes-nous, pages enjeux**
- Carte Consultant unique (`.ds-flip.ds-person`) : se retourne au survol et au focus clavier. Initiales en attendant les photos.
- Équipe : bandeau de photos qui défilent en diagonale, avec fondu sur les côtés.

## Design system

Tous les tokens et composants sont définis une seule fois (bloc `/*DS:start*/ … /*DS:end*/`, identique dans chaque page) et présentés sur `composants.html`. À reprendre tels quels dans Panda CSS (tokens + recipes) :

- Rayons : `--ds-r-s` 8px, `--ds-r-m` 16px, `--ds-r-l` 24px, `--ds-r-full` 999px. Aucune autre valeur.
- Ombres : `--ds-sh-1` (repos), `--ds-sh-2` (survol), `--ds-sh-3` (fenêtres, hero).
- Typo : une seule taille de H2, `--ds-h2` = clamp(34px, 3.6vw, 48px). H3 24px.
- Sections : padding `--ds-sec` 112px (standard) ou `--ds-sec-c` 80px (compact).
- Pastilles : 3 types, `.ds-pill` (label de section), `.ds-tag` (outils, métadonnées), `.ds-pill-ai` (IA uniquement).
- Carte retournable : `.ds-flip` > `.ds-flip-in` > `.ds-face` + `.ds-face-b`. La carte Consultant (`.ds-person`) en est une déclinaison : un seul composant pour Équipe, Qui sommes-nous et les pages enjeux.

## Règles de design à respecter

- Le dégradé `linear-gradient(90deg, #FE9C87, #F1CF25)` est réservé aux sujets IA.
- Couleurs de marque : mint `#9ADBBA`, sky `#99D1DF`, coral `#FE9C87`, yellow `#F1CF25`, dark `#212323`.
- Couleur par enjeu : Sales Experience = mint, Customer Experience = sky, Revenue Performance = coral, Sales Compensation = yellow, Revenue Systems = gris `#767676`, Revenue AI = dégradé.
- Gouttières alignées sur le composant `Container` du site : max 1280 px, 32 / 24 / 16 px selon la largeur.
- Typo : Bermia (titres), Bornia (texte). Les fichiers de police présents dans `assets/` servent uniquement à la maquette : utiliser ceux déjà installés dans le repo.

## Compatibilité

Certaines animations utilisent `animation-timeline: view()` (Chrome, Edge). Sur Safari et Firefox, elles se jouent une fois au chargement ou s'affichent directement dans leur état final. C'est voulu : à reproduire avec une détection `@supports` ou un IntersectionObserver.

## Ce qui reste à fournir

- Vraies photos (équipe, experts, bureaux) : certaines images sont des visuels provisoires.
- Bios, phrase « ce qu'il ou elle apporte », outils et « Avant Ocobo » de chaque consultant (champs entre crochets).
- Répartition des experts par enjeu, à valider.
- Logos clients et partenaires définitifs.
- Version anglaise des textes.
