import FadeInSection from "./FadeInSection";

export default function Greenhouse() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">Greenhouse Systems</h2>

        {/* 1️⃣ Purpose */}
        <p className="mb-4">
          Controlled environments depend on stable temperatures, optimal humidity levels, and
          sufficient air exchange.  High Trust Vigilant Systems designs greenhouse systems
          that protect the crops and equipment while working efficiently and are simple to
          maintain.
        </p>

        {/* 2️⃣ Evaluation */}
        <p className="mb-4">
          We begin with a survey of the building site, structure to be built, proper orientation, and pertinent weather
          data.  Load requirements for heating, cooling, and ventilation are
          calculated to properly size fans, vents, and determine necessary thermal mass.  Each plan is drawn
          for the actual site, not copied from a catalog.
        </p>

        {/* 3️⃣ Environmental Control */}
        <p className="mb-4">
          Air and water systems are coordinated to manage both plant health and
          energy use.  Sensors for temperature, humidity, and light are mounted
          for accurate readings and easy replacement.  Manual overrides are built
          into every control line, where possible, for reliability.
        </p>

        {/* 4️⃣ Water and Irrigation Integration */}
        <p className="mb-4">
          Irrigation and nutrient delivery systems are fitted with backflow
          protection and pressure regulation.  Piping and filtration are
          accessible for cleaning and seasonal service.  We verify flow rates
          and optimize valve locations so maintenance stays predictable.
        </p>

        {/* 5️⃣ Power and Safety */}
        <p className="mb-4">
          Electrical feeds are protected, grounded and labeled.  Motors and
          control boxes are rated for exterior use to serve in moisture-laden and dusty conditions.  All components can be
          locked out for maintenance in accordance with safety standards.
        </p>

        {/* 6️⃣ Results */}
        <p>
          The finished greenhouse system maintains stable growing conditions
          with minimal operator input.  It reflects clean design, code-worthy
          installation standards, and respect for the living systems it supports.
        </p>
      </div>
    </FadeInSection>
  );
}