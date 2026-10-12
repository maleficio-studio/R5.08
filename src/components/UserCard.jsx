function UserCard({ user }) {
  if (!user) return null;

  const { name, email, picture, gender, location, nat } = user;
  const fullName = `${name?.first ?? ""} ${name?.last ?? ""}`.trim();

  return (
    <article className="overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
      <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-24">
        {gender && (
          <span className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-xs px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-slate-700 shadow-xs">
            {gender === "female" ? "♀ Femme" : gender === "male" ? "♂ Homme" : gender}
          </span>
        )}
      </div>

      <div className="relative px-6 pb-6 pt-0 flex-1 flex flex-col items-center text-center -mt-12">
        <img
          src={picture?.large || "https://placehold.co/128x128"}
          alt={fullName || "Photo de l'utilisateur"}
          className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-md"
        />

        <h3 className="mt-3 text-lg font-bold text-slate-900">
          {fullName}
        </h3>

        {location?.country && (
          <p className="text-xs font-medium text-slate-500">
            📍 {location.city ? `${location.city}, ` : ""}{location.country} {nat ? `(${nat})` : ""}
          </p>
        )}

        <div className="mt-4 w-full rounded-xl bg-slate-50 p-3 text-xs text-slate-600 border border-slate-100 break-all">
          <span className="font-semibold text-slate-500 block mb-0.5">E-mail</span>
          <a
            href={`mailto:${email}`}
            className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium"
          >
            {email}
          </a>
        </div>
      </div>
    </article>
  );
}

export default UserCard;
