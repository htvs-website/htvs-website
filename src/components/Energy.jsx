import FadeInSection from "./FadeInSection";

export default function Energy() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">Energy Systems</h2>

        {/* 1️⃣ Purpose */}
        <p className="mb-4">
          Reliable power keeps every other system alive. High Trust Vigilant
          Systems designs and installs energy solutions that balance utility
          service, backup power generation, and storage for steady, dependable
          operation.
        </p>

        {/* 2️⃣ Evaluation */}
        <p className="mb-4">
          We begin with a load survey and review of existing electrical service.
          Whether the service is located here in McDonough, Georgia, or under a
          different regional utility, each circuit is mapped for capacity,
          protection, and grounding. Safety, code-worthiness, and
          serviceability come first—enhancements or improvements follow.
        </p>

        {/* 3️⃣ Generation and Supply */}
        <p className="mb-4">
          Where backup or renewable power is appropriate or advisable, we design
          systems using proven components—generators, solar arrays, battery
          banks, inverters, charge controllers, and transfer switches,
          dove-tailed for coordinated service. Each installation meets, and
          usually exceeds, NEC and local inspection standards.
        </p>

        {/* 4️⃣ Storage and Backup */}
        <p className="mb-4">
          Battery banks, standby generators, and related equipment are arranged
          for safe access and proper ventilation. Disconnects, breakers, and
          signage are installed to code and positioned for clear visibility.
          Maintenance procedures are included with every installation package.
        </p>

        {/* 5️⃣ Integration */}
        <p className="mb-4">
          Energy systems are tied into mechanical, water, and security networks
          through coordinated control panels and documented schematics. We
          ensure all trades share the same grounding and bonding plan to prevent
          interference or hazard.
        </p>

        {/* 6️⃣ Results */}
        <p>
          The result is a balanced energy system that runs quietly before and
          during grid power outages, and recovers quickly afterward—built for
          safety, resilience, and longevity.
        </p>
      </div>
    </FadeInSection>
  );
}