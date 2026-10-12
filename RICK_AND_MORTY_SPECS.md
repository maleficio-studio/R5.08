# Spécifications de l'application Rick & Morty

Ce document formalise les **User Stories** et les **Wireframes** demandés en préparation du prochain TD.

---

## 1. Contexte & Objectifs

L'application **Rick & Morty Explorer** permet aux utilisateurs de naviguer au sein de l'univers de la série grâce à l'API publique `https://rickandmortyapi.com`. Elle offre des fonctionnalités de recherche, de filtrage, de consultation détaillée et de gestion de favoris.

---

## 2. User Stories

| Identifiant | En tant que... | Je veux... | Afin de... | Critères d'acceptation |
| :--- | :--- | :--- | :--- | :--- |
| **US-01** | Fan de la série | Rechercher des personnages par nom en temps réel | Retrouver immédiatement mon personnage favori | • Barre de recherche réactive<br>• Message explicite si aucun résultat (gestion HTTP 404)<br>• Indicateur de chargement (`Loader`) |
| **US-02** | Visiteur | Filtrer les résultats par statut (`Alive`, `Dead`, `unknown`) et par genre | Réduire le champ de recherche aux catégories qui m'intéressent | • Menus déroulants interactifs<br>• Réinitialisation de la pagination lors du changement de filtre |
| **US-03** | Utilisateur curieux | Consulter la fiche détaillée d'un personnage (origine, dernière position, épisodes) | Découvrir l'histoire complète du personnage | • Modale ou page dédiée accessible au clic<br>• Affichage des données enrichies |
| **US-04** | Utilisateur régulier | Ajouter des personnages à mes favoris | Retrouver ma sélection personnalisée lors de mes prochaines visites | • Icône cœur avec bascule d'état (toggle)<br>• Persistance dans le `localStorage`<br>• Vue ou filtre "Mes Favoris" |
| **US-05** | Mobinaute | Naviguer avec fluidité sur smartphone et tablette | Profiter de l'application quel que soit mon appareil | • Interface responsive (Tailwind CSS)<br>• Grille adaptative (1 à 4 colonnes) |

---

## 3. Wireframes

### Vue 1 : Accueil / Explorateur & Filtres

```plainText
+-----------------------------------------------------------------------------------+
|  [Logo Portal] RICK & MORTY EXPLORER               [⭐ Mes Favoris (3)] [Dark/Light]|
+-----------------------------------------------------------------------------------+
|  [🔍 Rechercher un perso...]   [Statut: Tous v] [Genre: Tous v] [Espèce: Toutes v] |
+-----------------------------------------------------------------------------------+
|  Résultats : 826 personnages trouvés                              Tri: [Nom A-Z v]|
|                                                                                   |
|  +-------------------+  +-------------------+  +-------------------+  +----------+|
|  | [ Image ]   [❤️]  |  | [ Image ]   [🤍]  |  | [ Image ]   [❤️]  |  | [ Image ] ||
|  | Rick Sanchez      |  | Morty Smith       |  | Summer Smith      |  | Beth ... ||
|  | 🟢 Alive - Human  |  | 🟢 Alive - Human  |  | 🟢 Alive - Human  |  | 🟢 Alive ||
|  | Origine: Earth    |  | Origine: Earth    |  | Origine: Earth    |  | ...      ||
|  | [Voir fiche ->]   |  | [Voir fiche ->]   |  | [Voir fiche ->]   |  | [Voir ->]||
|  +-------------------+  +-------------------+  +-------------------+  +----------+|
|                                                                                   |
|  Pagination :  [◀ Précédent]   Page 1 / 42   [Suivant ▶]                           |
+-----------------------------------------------------------------------------------+
```

---

### Vue 2 : Modale Fiche Détail

```plainText
+-----------------------------------------------------------------------------------+
|  [Fermer ✕]                                                                       |
|  +-----------------------+  +---------------------------------------------------+ |
|  |                       |  |  Rick Sanchez                          [❤️ Favori] | |
|  |   [ Grand Portrait ]  |  |  🟢 Alive — Human (Male)                           | |
|  |                       |  |  ------------------------------------------------ | |
|  |                       |  |  Origine       : Earth (C-137)                    | |
|  |                       |  |  Localisation  : Citadel of Ricks                 | |
|  +-----------------------+  |  Apparitions   : 51 épisodes                      | |
|                             |  Premier épisode: Pilot (S01E01)                   | |
|                             +---------------------------------------------------+ |
+-----------------------------------------------------------------------------------+
```
