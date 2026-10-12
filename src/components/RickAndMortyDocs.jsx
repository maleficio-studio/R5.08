function RickAndMortyDocs() {
  const userStories = [
    {
      id: "US-01",
      title: "Exploration du multivers (Catalogue & Recherche)",
      asA: "Fan de la série ou visiteur",
      iWant: "rechercher un personnage par nom et filtrer par statut (Vivant, Mort, Inconnu) ou espèce",
      soThat: "trouver rapidement mon personnage favori sans parcourir des centaines de pages.",
      criteria: [
        "Champ de saisie en temps réel",
        "Menus déroulants pour le statut et l'espèce",
        "Indicateur de chargement et message clair si aucun résultat (404)",
      ],
    },
    {
      id: "US-02",
      title: "Fiche détaillée d'un personnage (Modal / Page dédiée)",
      asA: "Utilisateur curieux",
      iWant: "cliquer sur une carte de personnage pour afficher ses détails complets (épisodes, planète d'origine, localisation)",
      soThat: "en apprendre plus sur son histoire dans la série.",
      criteria: [
        "Ouverture d'une modale fluide ou navigation vers `/character/:id`",
        "Affichage de la liste des épisodes dans lesquels il apparaît",
        "Lien cliquable vers les détails de son lieu d'origine",
      ],
    },
    {
      id: "US-03",
      title: "Gestion des Favoris (Local Storage)",
      asA: "Utilisateur récurrent",
      iWant: "mettre des personnages en favoris via une icône cœur ❤️",
      soThat: "retrouver ma sélection même après avoir fermé ou rechargé la page.",
      criteria: [
        "Bouton toggle favori sur chaque carte",
        "Onglet ou filtre 'Mes Favoris' dédié",
        "Persistance locale avec `localStorage`",
      ],
    },
    {
      id: "US-04",
      title: "Mode Duel Multivers (Fonctionnalité ludique bonus)",
      asA: "Joueur",
      iWant: "comparer 2 personnages aléatoires côte à côte",
      soThat: "voter pour mon préféré ou tester mes connaissances.",
      criteria: [
        "Tirage de deux identifiants aléatoires via l'API",
        "Affichage comparatif des statistiques",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 p-8 text-white shadow-md">
        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
          Préparation Prochain TD
        </span>
        <h2 className="mt-3 text-2xl font-black">
          Spécifications & Wireframes : Rick & Morty Explorer Web App
        </h2>
        <p className="mt-2 text-sm text-emerald-100 max-w-2xl">
          Proposition de fonctionnalités, User Stories détaillées et maquettes filaires (wireframes) pour concevoir une application complète exploitant l'API Rick and Morty.
        </p>
      </div>

      {/* User Stories */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span>📋</span> User Stories
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userStories.map((us) => (
            <div
              key={us.id}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-700">
                  {us.id}
                </span>
                <span className="text-xs font-semibold text-slate-500">{us.title}</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>En tant que</strong> {us.asA},<br />
                <strong>Je veux</strong> {us.iWant},<br />
                <strong>Afin de</strong> {us.soThat}
              </p>
              <div className="border-t border-slate-100 pt-2">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                  Critères d'acceptation :
                </span>
                <ul className="mt-1 list-disc list-inside text-xs text-slate-600 space-y-0.5">
                  {us.criteria.map((crit, idx) => (
                    <li key={idx}>{crit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wireframe Visuel */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span>📐</span> Wireframes de l'application
        </h3>

        <div className="rounded-2xl border border-slate-300 bg-slate-900 p-6 text-slate-200 shadow-inner font-mono text-xs overflow-x-auto leading-relaxed">
          <div className="text-emerald-400 font-bold mb-3">
            // VUE 1 : Page Principale (Explorateur & Filtres)
          </div>
          <pre className="text-slate-300 whitespace-pre">
{`+-----------------------------------------------------------------------------------+
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
+-----------------------------------------------------------------------------------+`}
          </pre>

          <div className="text-emerald-400 font-bold mt-6 mb-3">
            // VUE 2 : Modale Fiche Détail Personnage
          </div>
          <pre className="text-slate-300 whitespace-pre">
{`+-----------------------------------------------------------------------------------+
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
+-----------------------------------------------------------------------------------+`}
          </pre>
        </div>
      </section>
    </div>
  );
}

export default RickAndMortyDocs;
