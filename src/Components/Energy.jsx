import FadeInSection from "./FadeInSection";

export default function Energy() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">Energy Systems</h2>

        {/* 1️⃣ Purpose */}
        <p className="mb-4">
          Reliable power keeps every other system alive.  High Trust Vigilant
          Systems designs and installs energy solutions that balance utility
          service, generation, and storage for steady, lawful operation.
        </p>

        {/* 2️⃣ Evaluation */}
        <p className="mb-4">
          We begin with a load survey and review of existing electrical service.
          Each circuit is mapped for capacity, protection, and grounding.
          Safety and serviceability come first—before any talk of generation or
          savings.
        </p>

        {/* 3️⃣ Generation and Supply */}
        <p className="mb-4">
          Where backup or renewable power is appropriate, we design systems
          using proven components—solar arrays, generators, transfer switches,
          and charge controllers—sized to actual demand.  Each installation
          meets NEC and local inspection standards.
        </p>

        {/* 4️⃣ Storage and Backup */}
        <p className="mb-4">
          Battery banks and standby generators are arranged for safe access and
          ventilation.  Disconnects, breakers, and signage follow code and are
          positioned for clear visibility.  Maintenance procedures are included
          with every installation package.
        </p>

        {/* 5️⃣ Integration */}
        <p className="mb-4">
          Energy systems are tied into mechanical, water, and security networks
          through coordinated control panels and documented schematics.  We
          ensure all trades share the same grounding and bonding plan to prevent
          interference or hazard.
        </p>

        {/* 6️⃣ Results */}
        <p>
          The result is a balanced energy system that runs quietly and recovers
          quickly after an outage—built for safety, longevity, and lawful
          inspection from day one.
        </p>
      </div>
    </FadeInSection>
  );
}