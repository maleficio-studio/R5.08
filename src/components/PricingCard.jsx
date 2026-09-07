function PricingCard({ plan, isMonthly, cardIndex }) {
  const { name, monthlyPrice, annualPrice, features, isFeatured } = plan;
  const currentPrice = isMonthly ? monthlyPrice : annualPrice;

  const desktopCornerClass =
    cardIndex === 0
      ? "lg:rounded-r-none"
      : cardIndex === 2
        ? "lg:rounded-l-none"
        : "lg:z-10";

  return (
    <article
      className={`relative flex w-full max-w-[340px] flex-col items-center justify-between rounded-xl px-7 text-center transition-all duration-300 ${desktopCornerClass} ${
        isFeatured
          ? "bg-gradient-to-br from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)] py-12 text-white shadow-2xl shadow-[hsl(237,63%,64%)]/30 lg:py-14"
          : "bg-white py-8 text-[hsl(232,13%,33%)] shadow-xl shadow-[hsl(237,63%,64%)]/10"
      }`}
    >
      <h2
        className={`text-lg font-bold ${
          isFeatured ? "text-white" : "text-[hsl(233,13%,49%)]"
        }`}
      >
        {name}
      </h2>

      <div className="my-6 flex items-center justify-center">
        <span className="mr-1 text-3xl font-bold sm:text-4xl">$</span>
        <span className="text-6xl font-bold tracking-tight">
          {currentPrice}
        </span>
      </div>

      <ul
        className={`w-full border-t border-b text-sm font-bold ${
          isFeatured ? "border-white/20" : "border-[hsl(234,14%,74%)]/30"
        }`}
      >
        {features.map((feature, index) => (
          <li
            key={index}
            className={`py-4 ${
              index < features.length - 1
                ? isFeatured
                  ? "border-b border-white/20"
                  : "border-b border-[hsl(234,14%,74%)]/30"
                : ""
            } ${isFeatured ? "text-white" : "text-[hsl(233,13%,49%)]"}`}
          >
            {feature}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`mt-8 w-full cursor-pointer rounded-md py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
          isFeatured
            ? "border border-white bg-white text-[hsl(237,63%,64%)] hover:bg-transparent hover:text-white"
            : "border border-transparent bg-gradient-to-r from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)] text-white hover:border-[hsl(237,63%,64%)] hover:bg-white hover:bg-none hover:text-[hsl(237,63%,64%)]"
        }`}
      >
        Learn More
      </button>
    </article>
  );
}

export default PricingCard;
