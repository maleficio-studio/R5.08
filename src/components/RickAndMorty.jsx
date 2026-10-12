import { useState } from "react";
import useFetch from "../hooks/useFetch";
import CharacterCard from "./CharacterCard";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

function RickAndMorty() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);

  // Construction de l'URL avec les paramètres de recherche
  const queryParams = new URLSearchParams();
  if (searchTerm.trim()) queryParams.set("name", searchTerm.trim());
  if (statusFilter) queryParams.set("status", statusFilter);
  if (page > 1) queryParams.set("page", page.toString());

  const queryString = queryParams.toString();
  const url = `https://rickandmortyapi.com/api/character/${queryString ? `?${queryString}` : ""}`;

  const { data, error, isLoading, refetch } = useFetch(url);

  const characters = data?.results || [];
  const info = data?.info;

  // L'API Rick and Morty renvoie une erreur 404 quand une recherche ne trouve rien
  const isNotFound = error && (error.message?.includes("404") || error.toString().includes("404"));

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1); // Revenir à la page 1 lors d'une nouvelle recherche
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
    setPage(1);
  };

  return (
    <div className="space-y-6">
      {/* En-tête et barre de recherche */}
      <div className="rounded-2xl bg-white p-6 border border-slate-200/80 shadow-sm space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Exercice 2 — API Rick and Morty</h2>
          <p className="text-sm text-slate-500">
            Recherche dynamique de personnages via l'API officielle
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2 relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Rechercher par nom (ex: Rick, Morty, Summer...)"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setPage(1);
                }}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 text-sm"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={handleStatusChange}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 shadow-xs focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            >
              <option value="">Tous les états</option>
              <option value="alive">Vivant (Alive)</option>
              <option value="dead">Mort (Dead)</option>
              <option value="unknown">Inconnu (Unknown)</option>
            </select>

            <button
              type="button"
              onClick={refetch}
              disabled={isLoading}
              className="rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-900 disabled:opacity-50 transition active:scale-95 cursor-pointer whitespace-nowrap"
            >
              🔄
            </button>
          </div>
        </div>

        {/* Compteur et pagination */}
        {info && !isLoading && (
          <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
            <span>
              <strong>{info.count}</strong> personnage{info.count > 1 ? "s" : ""} trouvé{info.count > 1 ? "s" : ""} (page {page} sur {info.pages})
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1 || isLoading}
                className="rounded-lg border border-slate-200 px-2.5 py-1 text-slate-600 hover:bg-slate-50 disabled:opacity-40"
              >
                ◀ Précédent
              </button>
              <button
                type="button"
                onClick={() => setPage((p) => p + 1)}
                disabled={page >= info.pages || isLoading}
                className="rounded-lg border border-slate-200 px-2.5 py-1 text-slate-600 hover:bg-slate-50 disabled:opacity-40"
              >
                Suivant ▶
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Traitement des états */}
      {isLoading && (
        <div className="rounded-2xl border border-slate-200/80 bg-white p-12 shadow-sm">
          <Loader message="Recherche des personnages dans le multivers..." />
        </div>
      )}

      {!isLoading && isNotFound && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center text-amber-800 shadow-sm">
          <p className="text-2xl mb-2">🛸</p>
          <h4 className="font-semibold text-base text-amber-900">Aucun résultat trouvé</h4>
          <p className="text-sm text-amber-700 mt-1">
            Aucun personnage ne correspond à la recherche « {searchTerm} ».
          </p>
        </div>
      )}

      {!isLoading && !isNotFound && error && (
        <ErrorMessage error={error} onRetry={refetch} />
      )}

      {!isLoading && !error && characters.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      )}
    </div>
  );
}

export default RickAndMorty;
