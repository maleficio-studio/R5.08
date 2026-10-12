function ErrorMessage({ error, onRetry }) {
  const message =
    typeof error === "string"
      ? error
      : error?.message || "Une erreur inattendue est survenue.";

  return (
    <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-800 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="text-xl leading-none select-none">⚠️</span>
        <div className="flex-1">
          <h4 className="font-semibold text-rose-900 text-sm">Erreur lors de la requête</h4>
          <p className="mt-1 text-sm text-rose-700">{message}</p>
          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-rose-700 transition active:scale-95 cursor-pointer"
            >
              🔄 Réessayer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;
