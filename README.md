# Site Dar El Jem

Site vitrine de Dar El Jem (El Jem, Tunisie), en français et en anglais.
Site statique : HTML, CSS et JavaScript, sans serveur ni base de données. Hébergement prévu sur GitHub Pages.

## Contenu du dossier

| Fichier / dossier | Rôle |
|---|---|
| `index.html` | Le site (accueil, plan, expériences, avis, réservation, infos, chroniques, agences) |
| `mentions-legales.html` | Mentions légales (FR + EN) |
| `confidentialite.html` | Politique de confidentialité (FR + EN) |
| `404.html` | Page « introuvable » affichée par GitHub Pages |
| `assets/css/` | Styles (`style.css` pour le site, `pages.css` pour les pages légales) |
| `assets/js/app.js` | Textes FR/EN, expériences, avis, articles, et tout le fonctionnement |
| `assets/img/`, `assets/icons/`, `assets/fonts/` | Photos (WebP), vidéo, icônes, polices |
| `robots.txt`, `sitemap.xml` | Référencement Google |
| `site.webmanifest`, `favicon.ico` | Icônes de l'onglet et de l'écran d'accueil mobile |
| `.nojekyll` | Indique à GitHub Pages de publier les fichiers tels quels (à garder, même s'il est vide) |
| `content/chroniques/` | Les articles du blog (un fichier par article, modifiés par le back-office) |
| `assets/data/chroniques.json` | Liste des articles lue par le site (générée automatiquement) |
| `.pages.yml` | Configuration du back-office Pages CMS |
| `.github/workflows/deploy.yml`, `scripts/build.py` | Publication automatique du site |

## Avant la mise en ligne : à compléter

Les éléments à remplir sont surlignés en jaune dans les pages et commencent par `[À compléter` (recherche possible dans les fichiers).

1. **Raison sociale** : renseignée (Société d’animation touristique et culturelle d’Eljem, SARL).
2. **Matricule fiscal / RNE** (facultatif) : peut être ajouté sous la raison sociale.
3. **Droit à l'image** : plusieurs photos montrent des visiteurs reconnaissables, dont des enfants. Garder de côté (hors du site) l'accord écrit des personnes ou des parents, ou remplacer ces photos.
4. **Police Trajan Pro** : c'est une police Adobe commerciale. L'utiliser sur un site public demande une licence web. Sans cette licence, supprimer `assets/fonts/TrajanPro-Bold.woff2` et la ligne `@font-face{font-family:"Trajan Pro"…}` au début de `assets/css/style.css` : le site bascule automatiquement sur **Cinzel**, une police libre déjà incluse et très proche.

## Mise en ligne sur GitHub Pages

1. Sur github.com, créer un dépôt (par exemple `dareljem-site`) sur le compte de Dar El Jem.
2. **Add file → Upload files** : glisser **tout le contenu** de ce dossier, y compris `.nojekyll`. Sur Mac, ce fichier commence par un point et est masqué : afficher les fichiers masqués avec `Cmd + Maj + .`.
3. **Settings → Pages** : *Source* = « Deploy from a branch », branche `main`, dossier `/ (root)`, puis **Save**.
4. Une minute plus tard, le site est en ligne à l'adresse affichée (`https://<compte>.github.io/dareljem-site/`). Le tester complètement, sur téléphone aussi.

### Brancher le domaine www.dareljem.com

Le site est préparé pour `https://www.dareljem.com` (adresse officielle, liens de partage, sitemap).

1. Chez le fournisseur du nom de domaine, créer un enregistrement **CNAME** : `www` → `<compte>.github.io`.
2. Pour l'adresse sans `www`, ajouter les 4 enregistrements **A** de GitHub : `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
3. Dans **Settings → Pages → Custom domain**, saisir `www.dareljem.com`, puis cocher **Enforce HTTPS** dès que la case est disponible (quelques minutes à 24 h).
4. Si un ancien site occupe actuellement le domaine, ces modifications le remplacent : prévenir le client avant de les faire.

Si le domaine n'est pas branché tout de suite, le site fonctionne sur l'adresse github.io. Seuls la page 404 et les aperçus de partage (WhatsApp, Facebook) attendent le domaine pour s'afficher correctement.

## Sécurité : ce qui est fait dans le site

- **Aucun serveur, aucune base de données, aucun mot de passe** sur le site : il n'y a rien à pirater côté site. Le vrai point sensible est l'accès aux comptes (voir plus bas).
- **Politique de sécurité du contenu (CSP)** dans chaque page : le navigateur refuse tout script, style ou ressource qui ne vient pas du site lui-même, ce qui bloque l'injection de code malveillant.
- **Aucune ressource externe** : polices, images et vidéo sont hébergées avec le site. Rien n'est chargé depuis Google ou un autre service, ce qui évite aussi de transmettre l'adresse IP des visiteurs à des tiers.
- **Liens externes protégés** (`rel="noopener"`) : une page ouverte dans un nouvel onglet ne peut pas prendre le contrôle du site.
- **Formulaires** : les saisies ne sont jamais réinjectées dans la page. Elles servent seulement à composer le lien WhatsApp.
- **Aucun cookie, aucun outil de statistiques, aucun traceur** : pas de bandeau cookies nécessaire.

## Sécurité : à faire de votre côté (le plus important)

1. **Compte GitHub** : activer la double authentification (Settings → Password and authentication). N'ajouter comme collaborateurs que les personnes qui doivent modifier le site.
2. **Nom de domaine** : double authentification chez le fournisseur, et verrouillage du domaine (« domain lock ») activé.
3. **Domaine vérifié sur GitHub** (Settings → Pages → *Verified domains*) : empêche qu'un autre compte GitHub récupère le domaine.
4. **WhatsApp** : activer la *Vérification en deux étapes* (Réglages → Compte) sur le téléphone qui reçoit les demandes.
5. Plus tard, si Pages CMS est branché pour les Chroniques : n'y inviter que les personnes de l'équipe concernées.

## Ce qui a été vérifié

- **Responsive** : 10 tailles d'écran testées (320, 360, 390, 414, 768, 1024, 1280, 1440 et 1920 px de large, plus un téléphone à l'horizontale). Aucun débordement horizontal, sur toutes les vues (accueil, fiches, menu mobile, chroniques, article, agences, pages légales).
- **Erreurs** : aucune erreur JavaScript, aucun fichier manquant, aucune violation de la politique de sécurité.
- **Validation HTML** : aucune erreur (html-validate).
- **Google Lighthouse** :
  - **Ordinateur** : Performance 97, Accessibilité 100, Bonnes pratiques 100, SEO 100.
  - **Mobile** : Performance 82, Accessibilité 97, Bonnes pratiques 100, SEO 100. Le poids mobile vient surtout de la vidéo d'accueil, qui ne se charge que sur mobile, après le reste de la page.
- **Accessibilité** : lien « Aller au contenu » au clavier, focus visible, menu et fiches fermés non atteignables au clavier, contrastes conformes.
- **Référencement** : titre et description, balises de partage (image dédiée `og-image.jpg`), données structurées Google (lieu touristique, adresse, contacts, réseaux), sitemap, robots.txt.

## Limites connues

- **Formulaires via WhatsApp** : la demande n'arrive que si le visiteur appuie sur « Envoyer » dans WhatsApp. Ajouter Formspree en complément si vous voulez une copie par e-mail.
- **Chroniques** : les articles sont affichés par JavaScript, ce qui les rend moins bien référencés par Google que des pages séparées. C'est une évolution possible.
- **Repères du plan sur mobile** : certains repères sont proches les uns des autres. La liste juste sous le plan donne le même accès, en plus grand.

## Back-office des Chroniques (Pages CMS)

Les articles se gèrent depuis **https://app.pagescms.org**, sans toucher au code.

- Chaque article est un fichier dans `content/chroniques/`. Les photos envoyées depuis le back-office vont dans `assets/img/chroniques/`.
- À chaque enregistrement, GitHub Actions (`.github/workflows/deploy.yml`) lance `scripts/build.py`. Ce script :
  - rassemble les articles publiés dans `assets/data/chroniques.json` ;
  - allège les photos trop lourdes ;
  - publie le site.

  Compter 1 à 2 minutes.
- La configuration du back-office (champs, libellés) est dans `.pages.yml`.
- Si un article n'apparaît pas : onglet **Actions** du dépôt. La dernière exécution doit avoir une coche verte.

## Modifier un contenu

- **Articles (Chroniques)** : depuis le back-office Pages CMS.
- **Textes, prix, menus, avis** : `assets/js/app.js`. Chaque texte existe en `fr` et en `en` : modifier les deux.
- **Photos** : remplacer le fichier dans `assets/img/` en gardant le même nom, au format WebP (largeur 1400 à 1600 px).
- **WhatsApp** : numéro dans `assets/js/app.js` (`WA_NUM`) et dans `index.html` (liens `wa.me/21698277634`).
