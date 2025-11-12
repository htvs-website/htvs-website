import FadeInSection from "./FadeInSection";

export default function Home() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">Home / Welcome</h2>

        <p>
          Welcome to <strong>High Trust Vigilant Systems (HTVS)</strong>, where sound design meets practical resilience.
          We help homeowners, builders, and private organizations create spaces that are efficient, secure, and built to last.
        </p>

        {/* ✅ Core Motto echo — centered and understated */}
        <p className="text-center text-gray-700 italic my-6 font-[Cambria]">
          HTVS integrates failsafe design with dependable craftsmanship and coherent systems engineering
          to deliver reliable, efficient results.
        </p>

        <p>
          Our approach is simple in concept: integrate water, power, air conditioning, security and fuel
          systems into a symbiotic, reliable, and redundant framework that keeps you independent, confident,
          and comfortable even when the outside world goes sideways.
        </p>

        <p>
          Whether retrofitting an existing home or developing a new property, HTVS guides every decision
          with the same principle—<em>resiliency through competency</em>—so that every system serves both
          purpose and peace of mind.
        </p>
      </div>
    </FadeInSection>
  );
}