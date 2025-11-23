import FadeInSection from "./FadeInSection";

export default function Water() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">Water Systems</h2>

        {/* 1️⃣ Purpose */}
        <p className="mb-4">
          Reliable water is the backbone of any property. High Trust Vigilant
          Systems designs and installs supply, storage, and treatment systems
          that stay clean, serviceable, and compliant with code.
        </p>

        {/* 2️⃣ Supply and Source */}
        <p className="mb-4">
          We evaluate wells, municipal feeds, and catchment systems for water
          quality, volume, pressure, and vulnerabilities. Whether the source is
          here in McDonough, Georgia, or part of a rural supply farther away,
          each design includes isolation valves, proper backflow protection, and
          labeled controls for maintenance and emergency use.
        </p>

        {/* 3️⃣ Storage and Pressure Control */}
        <p className="mb-4">
          Tanks and pumps are sized for both daily demand and reserve capacity.
          Pressure systems include gauges, relief devices, and check valves
          placed for easy inspection and maintenance. Components are selected
          for long life and serviceability, not the lowest upfront cost.
        </p>

        {/* 4️⃣ Treatment and Safety */}
        <p className="mb-4">
          Filtration devices and water treatment equipment are specified to meet
          strict health standards. We document filter schedules, chemical usage,
          and test points so the owner can keep quality records without
          guesswork.
        </p>

        {/* 5️⃣ Integration */}
        <p className="mb-4">
          Water systems are integrated with electrical and monitoring equipment
          through clean wiring and properly grounded controls. Alarms, level
          sensors, and pump relays are wired cleanly — no hidden splices or
          unmarked boxes.
        </p>

        {/* 6️⃣ Results */}
        <p>
          The finished product is simple: clean, pure water, steady pressure, and
          a layout any qualified technician can understand for on-going service.
        </p>
      </div>
    </FadeInSection>
  );
}