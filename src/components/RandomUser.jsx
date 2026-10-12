import useFetch from "../hooks/useFetch";
import UserCard from "./UserCard";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

function RandomUser() {
  // Exercice 1.1 & 1.4 : Récupération des états et de la fonction refetch
  const { data, error, isLoading, refetch } = useFetch("https://randomuser.me/api/");

  // Exercice 1.1 : Afficher data, error et isLoading dans la console
  console.log("RandomUser state:", { data, error, isLoading });

  // Récupération de l'utilisateur (le premier du tableau results)
  const user = data?.results?.[0];

  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Exercice 1 — Random User</h2>
          <p className="text-sm text-slate-500">Profil individuel aléatoire</p>
        </div>
        <button
          type="button"
          onClick={refetch}
          disabled={isLoading}
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 disabled:opacity-60 transition active:scale-95 cursor-pointer"
        >
          <span>🎲</span>
          <span>{isLoading ? "Chargement…" : "Nouvel utilisateur"}</span>
        </button>
      </div>

      {/* Exercice 1.2 : Traiter isLoading et error AVANT de lire data */}
      {isLoading && (
        <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
          <Loader message="Chargement du profil…" />
        </div>
      )}

      {!isLoading && error && (
        <ErrorMessage error={error} onRetry={refetch} />
      )}

      {/* Exercice 1.3 : Afficher l'utilisateur via le composant UserCard */}
      {!isLoading && !error && user && (
        <UserCard user={user} />
      )}
    </div>
  );
}

export default RandomUser;
