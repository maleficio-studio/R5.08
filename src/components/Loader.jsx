function Loader({ message = "Chargement..." }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-3">
      <div
        className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"
        role="status"
        aria-label="loading"
      />
      <p className="text-sm font-medium text-slate-500 animate-pulse">
        {message}
      </p>
    </div>
  );
}

export default Loader;
