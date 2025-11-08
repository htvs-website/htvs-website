import FadeInSection from "./FadeInSection";

export default function Water() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">Water Systems</h2>

        {/* 1️⃣ Purpose */}
        <p className="mb-4">
          Reliable water is the backbone of any property.  High Trust Vigilant
          Systems designs and installs supply, storage, and treatment systems
          that stay clean, serviceable, and compliant with code.
        </p>

        {/* 2️⃣ Supply and Source */}
        <p className="mb-4">
          We evaluate wells, municipal feeds, and catchment systems for flow,
          pressure, and contamination risk.  Each design includes isolation
          valves, proper backflow protection, and labeled controls for
          maintenance and emergency use.
        </p>

        {/* 3️⃣ Storage and Pressure Control */}
        <p className="mb-4">
          Tanks and pumps are sized for both daily demand and reserve capacity.
          Pressure systems include gauges, relief devices, and check valves
          placed for easy inspection.  Components are selected for long service
          life, not the lowest upfront cost.
        </p>

        {/* 4️⃣ Treatment and Safety */}
        <p className="mb-4">
          Filtration and disinfection equipment are specified to meet local
          health standards.  We document filter schedules, chemical usage, and
          test points so the owner can keep quality records without guesswork.
        </p>

        {/* 5️⃣ Integration */}
        <p className="mb-4">
          Water systems are integrated with electrical and monitoring equipment
          through clean wiring and grounded controls.  Alarms, level sensors,
          and pump relays are wired in plain sight—no hidden splices or
          unmarked boxes.
        </p>

        {/* 6️⃣ Results */}
        <p>
          The finished product is simple: clear water, steady pressure, and a
          layout any qualified technician can understand years later.
        </p>
      </div>
    </FadeInSection>
  );
}