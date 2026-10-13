import DiscordLogo from "./DiscordLogo.jsx";

function AppHeader() {
  return (
    <header className="relative mb-8 overflow-hidden rounded-[28px] border border-[#2d357d] bg-[#161a46]/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
      {/* Decorative Blurple/Magenta glow inside header */}
      <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#ec48bd]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#5865f2]/30 blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-[#5865f2] text-white shadow-lg shadow-[#5865f2]/40 transition-transform duration-200 hover:scale-105 sm:h-14 sm:w-14">
            <DiscordLogo className="h-7 w-7 sm:h-8 sm:w-8" />
          </div>
          <div>
            <span className="inline-block text-xs font-black tracking-widest text-[#ec48bd] uppercase">
              Discord Quests
            </span>
            <h1 className="font-display text-2xl font-extrabold tracking-tight text-white uppercase sm:text-4xl md:text-5xl">
              LISTE DE TÂCHES
            </h1>
          </div>
        </div>

        <p className="mt-3.5 max-w-xl text-base font-medium text-[#9da9e2] sm:text-lg">
          Domine tes objectifs quotidiens, synchronise tes priorités et nettoie
          ton journal de quêtes.
        </p>
      </div>
    </header>
  );
}

export default AppHeader;
