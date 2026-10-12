import { useState } from "react";
import useFetch from "../hooks/useFetch";
import UserCard from "./UserCard";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

function UserList() {
  // Exercice 1.5 : State pour le genre ('', 'female' ou 'male')
  const [gender, setGender] = useState("");

  // Construction de l'URL dynamique (6 utilisateurs français + filtre genre)
  const url = `https://randomuser.me/api/?results=6&nat=fr&gender=${gender}`;

  const { data, error, isLoading, refetch } = useFetch(url);

  const users = data?.results || [];

  return (
    <div className="space-y-6">
      {/* Barre de contrôle : Le menu déroulant et les actions restent affichés pendant le chargement */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl bg-white p-5 border border-slate-200/80 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Exercice 1.5 — Liste d'utilisateurs</h2>
          <p className="text-sm text-slate-500">6 profils français avec filtre par genre</p>
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="gender-select" className="text-sm font-medium text-slate-600">
            Genre :
          </label>
          <select
            id="gender-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-xs focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          >
            <option value="">Tous</option>
            <option value="female">Femmes</option>
            <option value="male">Hommes</option>
          </select>

          <button
            type="button"
            onClick={refetch}
            disabled={isLoading}
            className="rounded-xl bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-900 disabled:opacity-50 transition active:scale-95 cursor-pointer"
          >
            Actualiser
          </button>
        </div>
      </div>

      {/* Traitement des états de la requête */}
      {isLoading && (
        <div className="rounded-2xl border border-slate-200/80 bg-white p-12 shadow-sm">
          <Loader message="Chargement des utilisateurs..." />
        </div>
      )}

      {!isLoading && error && (
        <ErrorMessage error={error} onRetry={refetch} />
      )}

      {/* Affichage des 6 utilisateurs avec map et clé unique user.login.uuid */}
      {!isLoading && !error && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.login.uuid} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;
