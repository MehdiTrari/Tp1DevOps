# TP DevOps - Gestion de Thés

## Description

Ce projet est un exercice de développement et de test de code en Node.js, avec pour objectif la création de fonctions de gestion de données sur des thés (ajout, récupération, sauvegarde) et la mise en place de tests unitaires pour assurer la fiabilité du code. Le projet utilise **Vitest** pour les tests unitaires et la couverture de code.

## Structure du Projet

- **`index.js`** : Fichier principal qui contient la logique de gestion d’ajout de thés en utilisant les fonctions définies dans `saver.js`.
- **`saver.js`** : Contient les fonctions de manipulation des données sur les thés, y compris :
  - `getTeaByName` : Récupère un thé par son nom.
  - `saveTea` : Sauvegarde un thé tout en vérifiant l’unicité de l’ID et du nom.
  - `generateNewTeaId` : Génère un nouvel ID unique basé sur le timestamp actuel.
- **Dossier `tests`** : Contient les fichiers de tests (`.spec.js`) pour chaque fonction et module.

## Installation

1. Assurez-vous d’avoir **Node.js** (>= v18.17.0) et **npm** d’installés.
2. Clonez le dépôt GitHub :
   ```bash
   git clone git@github.com:MehdiTrari/Tp1DevOps.git
   cd Tp1DevOps
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```

## Scripts

### Lancer les Tests

Pour exécuter les tests unitaires avec Vitest :
```bash
npm run test
```

### Vérifier la Couverture de Code

Pour exécuter les tests avec un rapport de couverture de code :
```bash
npm run test:coverage
```

Un fichier `json-summary` sera généré dans le dossier `coverage` pour évaluer la couverture du code.

## Détails des Fonctions et des Tests

### Fonctions

- **`getTeaByName(teaName)`** : Récupère le thé ayant le nom spécifié.
- **`saveTea(newTea)`** : Enregistre un nouveau thé. Lève une erreur si le nom ou l'ID est en conflit avec un thé existant.
- **`generateNewTeaId()`** : Génère un identifiant unique basé sur le timestamp.

### Cas de Test

Chaque fonction est testée selon plusieurs cas :
- **Conditions d’entrée** (paramètres valides et invalides).
- **Gestion des erreurs** (en cas de conflits de nom ou d’ID).
- **Résultats attendus** (vérification des retours et des valeurs stockées).
- **Utilisation de `mock`** pour isoler les fonctions et simuler les dépendances.

## Couverture de Code

Le rapport de couverture affiche :
- **Statements** : 96.19 %
- **Branches** : 90 %
- **Fonctions** : 100 %

Le projet atteint **13/15 points** pour la couverture et peut potentiellement obtenir jusqu'à **5/5 points** pour la qualité des tests.

## Contributeurs

- **Mehdi Trari** - Développement et tests

---