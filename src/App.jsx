import { useState } from "react";
import pricingData from "./data/pricingData";
import PricingToggle from "./components/PricingToggle";
import PricingCard from "./components/PricingCard";
import bgTop from "./assets/bg-top.svg";
import bgBottom from "./assets/bg-bottom.svg";

function App() {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly((prev) => !prev);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-[hsl(240,78%,98%)] px-6 py-16 text-[hsl(232,13%,33%)]">
      {/* Background illustrations */}
      <img
        src={bgTop}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 z-0 select-none max-w-[200px] sm:max-w-[280px] lg:max-w-none"
      />
      <img
        src={bgBottom}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 select-none hidden lg:block"
      />

      {/* Main Content */}
      <main className="relative z-10 flex w-full max-w-6xl flex-col items-center">
        <h1 className="mb-8 text-3xl font-bold text-[hsl(233,13%,49%)] sm:text-4xl">
          Our Pricing
        </h1>

        <div className="mb-14 sm:mb-16">
          <PricingToggle isMonthly={isMonthly} onToggle={handleToggle} />
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:gap-0">
          {pricingData.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isMonthly={isMonthly}
              cardIndex={index}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
