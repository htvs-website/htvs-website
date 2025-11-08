import FadeInSection from "./FadeInSection";

export default function Greenhouse() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">Greenhouse Systems</h2>

        {/* 1️⃣ Purpose */}
        <p className="mb-4">
          Controlled environments depend on steady temperature, humidity, and
          air exchange.  High Trust Vigilant Systems designs greenhouse systems
          that protect crops and equipment while staying efficient and simple to
          maintain.
        </p>

        {/* 2️⃣ Evaluation */}
        <p className="mb-4">
          We begin with a survey of structure, orientation, and local weather
          data.  Load requirements for heating, cooling, and ventilation are
          calculated to size fans, vents, and thermal mass.  Each plan is drawn
          for the actual site, not copied from a catalog.
        </p>

        {/* 3️⃣ Environmental Control */}
        <p className="mb-4">
          Air and water systems are coordinated to manage both plant health and
          energy use.  Sensors for temperature, humidity, and light are mounted
          for accurate readings and easy replacement.  Manual override is built
          into every control line for reliability.
        </p>

        {/* 4️⃣ Water and Irrigation Integration */}
        <p className="mb-4">
          Irrigation and nutrient delivery systems are fitted with backflow
          protection and pressure regulation.  Piping and filtration are
          accessible for cleaning and seasonal service.  We document flow rates
          and valve locations so maintenance stays predictable.
        </p>

        {/* 5️⃣ Power and Safety */}
        <p className="mb-4">
          Electrical feeds are protected, labeled, and grounded.  Motors and
          control boxes are rated for moisture and dust.  All components can be
          locked out for maintenance in accordance with safety standards.
        </p>

        {/* 6️⃣ Results */}
        <p>
          The finished greenhouse system maintains stable growing conditions
          with minimal operator input.  It reflects clean design, lawful
          installation, and respect for the living systems it supports.
        </p>
      </div>
    </FadeInSection>
  );
}