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
        <p>
          Our approach is simple: integrate water, power, climate, and security systems into a single, reliable framework that keeps you independent and at peace when others are unprepared.
        </p>
        <p>
          Whether retrofitting an existing home or developing a new property, HTVS guides every decision with the same principle—
          <em>strength through understanding</em>—so that every system serves both purpose and peace of mind.
        </p>
      </div>
    </FadeInSection>
  );
}