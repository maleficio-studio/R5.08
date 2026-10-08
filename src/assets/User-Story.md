# Backlog de User Stories — Todo List

## Epic 1 — Gestion des tâches

### US01 — Ajouter une tâche

**En tant qu’utilisateur,**
je veux pouvoir ajouter une nouvelle tâche,
**afin de** mémoriser une action que je dois réaliser.

**Critères d’acceptation :**

* Je peux saisir le nom de la tâche.
* Je peux valider l’ajout.
* La tâche apparaît immédiatement dans ma liste.
* Une tâche vide ne peut pas être ajoutée.

### US02 — Consulter mes tâches

**En tant qu’utilisateur,**
je veux voir toutes mes tâches,
**afin de** connaître les actions que je dois réaliser.

**Critères d’acceptation :**

* Toutes les tâches sont affichées dans une liste.
* Chaque tâche possède au minimum un intitulé.
* Les tâches sont affichées de manière claire.

### US03 — Marquer une tâche comme terminée

**En tant qu’utilisateur,**
je veux pouvoir marquer une tâche comme terminée,
**afin de** distinguer les tâches réalisées de celles qui restent à faire.

**Critères d’acceptation :**

* Je peux passer une tâche de « à faire » à « terminée ».
* Je peux également la repasser en « à faire ».
* L'état de la tâche est visible graphiquement.

### US04 — Supprimer une tâche

**En tant qu’utilisateur,**
je veux pouvoir supprimer une tâche,
**afin de** retirer de ma liste les tâches qui ne sont plus nécessaires.

**Critères d’acceptation :**

* Chaque tâche possède une action « Supprimer ».
* La tâche sélectionnée disparaît de la liste.
* Les autres tâches restent inchangées.

---

## Epic 2 — Modification des tâches

### US05 — Modifier une tâche

**En tant qu’utilisateur,**
je veux pouvoir modifier le nom d’une tâche,
**afin de** corriger ou préciser son contenu.

**Critères d’acceptation :**

* Je peux passer une tâche en mode édition.
* Le champ contient le texte actuel de la tâche.
* Je peux modifier le texte.
* Je peux valider la modification.
* Une tâche vide ne peut pas être enregistrée.

### US06 — Annuler une modification

**En tant qu’utilisateur,**
je veux pouvoir annuler une modification,
**afin de** conserver le texte initial de ma tâche.

**Critères d’acceptation :**

* Un bouton « Annuler » est disponible pendant l’édition.
* L’annulation ne modifie pas la tâche.
* Lorsque je recommence l’édition, le champ contient la valeur actuelle de la tâche.

---

## Epic 3 — Recherche et filtrage

### US07 — Filtrer les tâches

**En tant qu’utilisateur,**
je veux pouvoir filtrer mes tâches,
**afin de** voir uniquement les tâches qui m’intéressent.

**Critères d’acceptation :**

* Je peux afficher toutes les tâches.
* Je peux afficher uniquement les tâches à faire.
* Je peux afficher uniquement les tâches terminées.
* Le filtre actuellement sélectionné est identifiable.

### US08 — Voir le nombre de tâches

**En tant qu’utilisateur,**
je veux connaître le nombre de tâches correspondant à chaque catégorie,
**afin de** savoir rapidement combien de tâches restent à réaliser.

**Critères d’acceptation :**

* Le nombre total de tâches est affiché.
* Le nombre de tâches terminées est affiché.
* Le nombre de tâches restantes est affiché.
* Les compteurs sont automatiquement mis à jour lorsqu’une tâche change d’état.

---

## Epic 4 — Expérience utilisateur

### US09 — Comprendre rapidement l’état d’une tâche

**En tant qu’utilisateur,**
je veux différencier visuellement les tâches terminées des tâches à faire,
**afin de** comprendre immédiatement l’état de ma liste.

**Critères d’acceptation :**

* Une tâche terminée possède un style différent.
* Une tâche à faire reste clairement identifiable.
* Les actions disponibles sont compréhensibles.

### US10 — Utiliser l’application sur différents écrans

**En tant qu’utilisateur,**
je veux que l’application soit utilisable sur ordinateur et mobile,
**afin de** pouvoir gérer mes tâches quel que soit mon écran.

**Critères d’acceptation :**

* L'interface s'adapte aux différentes tailles d'écran.
* Les boutons restent facilement accessibles.
* Le texte reste lisible.

---

## Priorisation du backlog

| Priorité       | User Story | Fonctionnalité                    |
| -------------- | ---------- | --------------------------------- |
| 🔴 Must have   | US01       | Ajouter une tâche                 |
| 🔴 Must have   | US02       | Consulter les tâches              |
| 🔴 Must have   | US03       | Marquer une tâche comme terminée  |
| 🔴 Must have   | US04       | Supprimer une tâche               |
| 🟠 Should have | US05       | Modifier une tâche                |
| 🟠 Should have | US06       | Annuler une modification          |
| 🟠 Should have | US07       | Filtrer les tâches                |
| 🟡 Could have  | US08       | Afficher les compteurs            |
| 🟡 Could have  | US09       | Améliorer la distinction visuelle |
| 🟡 Could have  | US10       | Responsive mobile/ordinateur      |

## MVP

Pour une première version fonctionnelle, le **MVP** comprend :

1. Ajouter une tâche.
2. Afficher les tâches.
3. Marquer une tâche comme terminée.
4. Supprimer une tâche.
5. Modifier une tâche.
6. Filtrer les tâches par état.
