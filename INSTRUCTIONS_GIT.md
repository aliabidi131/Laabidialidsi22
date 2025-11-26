# Instructions Git pour le TP

## Commandes Git à exécuter

Voici les commandes Git que vous devez exécuter pour ce TP :

### 1. Initialiser le dépôt local (déjà fait)
```bash
cd laabididsi22
git init
```

### 2. Configurer votre identité Git
```bash
git config user.email "votre.email@exemple.com"
git config user.name "Votre Nom"
```

### 3. Ajouter les fichiers au dépôt
```bash
git add .
```

### 4. Effectuer le premier commit
```bash
git commit -m "Initial commit - Projet Angular avec Material"
```

### 5. Lier le dépôt local au dépôt distant
```bash
git remote add origin <URL_DE_VOTRE_DEPOT_DISTANT>
```

Par exemple :
```bash
git remote add origin https://github.com/votrecompte/laabididsi22.git
```

### 6. Pousser les modifications vers le dépôt distant
```bash
git branch -M main
git push -u origin main
```

## Notes
- Remplacez `<URL_DE_VOTRE_DEPOT_DISTANT>` par l'URL réelle de votre dépôt GitHub/GitLab
- Les fichiers sont déjà ajoutés avec `git add .`
- Le dépôt Git local est déjà initialisé
