# Projet Angular TP - laabididsi22

## Description
Projet Angular avec Angular Material comprenant 3 composants principaux pour un TP d'examen.

## Composants créés

### 1. Connexion (Login)
- Formulaire avec champs Email et Mot de passe
- Bouton "Se connecter"
- Lien vers la page d'inscription

### 2. Inscription (Register)
- Formulaire avec champs Nom, Email et Mot de passe
- Bouton "S'inscrire"
- Lien vers la page de connexion

### 3. Accueil (Home)
- **Toolbar** avec bouton de déconnexion
- **Tabs** (3 onglets) avec des boutons dans chaque onglet
- **GridList** (grille de 6 items avec boutons)

## Routes configurées
- `/` - Redirige vers `/connexion`
- `/connexion` - Page de connexion
- `/inscription` - Page d'inscription
- `/accueil` - Page d'accueil (après connexion)

## Technologies utilisées
- Angular 21
- Angular Material
- Reactive Forms
- Router
- TypeScript

## Démarrer le projet

### Installation des dépendances
```bash
cd laabididsi22
npm install
```

### Démarrer le serveur de développement
```bash
ng serve
```

L'application sera accessible sur `http://localhost:4200/`

## Git - Instructions

Le projet est prêt pour être versionné avec Git. Consultez le fichier `INSTRUCTIONS_GIT.md` pour les commandes à exécuter.

### Résumé des commandes Git
1. `git init` (déjà fait)
2. Configurer votre identité Git
3. `git add .` (fichiers déjà ajoutés)
4. `git commit -m "Initial commit - Projet Angular avec Material"`
5. `git remote add origin <URL_DE_VOTRE_DEPOT>`
6. `git push -u origin main`

## Structure du projet
```
laabididsi22/
├── src/
│   ├── app/
│   │   ├── connexion/          # Composant Connexion
│   │   ├── inscription/        # Composant Inscription
│   │   ├── accueil/            # Composant Accueil
│   │   ├── app.routes.ts       # Configuration des routes
│   │   ├── app.config.ts       # Configuration de l'app
│   │   └── app.ts/html/css     # Composant principal
│   └── styles.css              # Styles globaux + Material theme
├── angular.json                # Configuration Angular
└── package.json                # Dépendances
```
