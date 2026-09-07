function PricingToggle({ isMonthly, onToggle }) {
  return (
    <div className="flex items-center justify-center gap-6 select-none">
      <button
        type="button"
        onClick={() => isMonthly && onToggle()}
        className={`cursor-pointer text-sm font-bold transition-colors duration-200 ${
          !isMonthly ? "text-[hsl(232,13%,33%)]" : "text-[hsl(234,14%,74%)] hover:text-[hsl(233,13%,49%)]"
        }`}
      >
        Annually
      </button>

      <button
        type="button"
        role="switch"
        aria-checked={isMonthly}
        aria-label="Toggle between annual and monthly billing"
        onClick={onToggle}
        className="group relative flex h-8 w-14 cursor-pointer items-center rounded-full bg-gradient-to-r from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)] p-1 transition-opacity duration-200 hover:opacity-85 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(237,63%,64%)] focus-visible:ring-offset-2"
      >
        <span
          className={`h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
            isMonthly ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>

      <button
        type="button"
        onClick={() => !isMonthly && onToggle()}
        className={`cursor-pointer text-sm font-bold transition-colors duration-200 ${
          isMonthly ? "text-[hsl(232,13%,33%)]" : "text-[hsl(234,14%,74%)] hover:text-[hsl(233,13%,49%)]"
        }`}
      >
        Monthly
      </button>
    </div>
  );
}

export default PricingToggle;
