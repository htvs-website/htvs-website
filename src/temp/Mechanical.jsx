import FadeInSection from "./FadeInSection";

export default function Mechanical() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">Mechanical Systems</h2>

        {/* 1️⃣ Purpose */}
        <p className="mb-4">
          Mechanical systems form the working structure behind every building.
          High Trust Vigilant Systems designs and installs assemblies that move
          air, water, and materials safely and efficiently, with clear access for
          service and inspection.
        </p>

        {/* 2️⃣ Evaluation */}
        <p className="mb-4">
          Each project starts with a review of existing layouts and load
          conditions.  We identify stress points, clearance issues, and wear
          areas before recommending upgrades or replacements.  Designs are built
          to code and drawn for practical installation.
        </p>

        {/* 3️⃣ Fabrication and Installation */}
        <p className="mb-4">
          Ductwork, piping, and framing are fabricated from standard materials
          that can be sourced locally.  Connections are sealed, supported, and
          labeled.  We avoid hidden joints and use mechanical fasteners wherever
          inspection or disassembly may be required.
        </p>

        {/* 4️⃣ Integration */}
        <p className="mb-4">
          Mechanical components are coordinated with electrical and control
          systems from the start.  Every moving part—fan, valve, pump, or
          actuator—is paired with accessible isolation and manual override.
          This keeps maintenance simple and downtime short.
        </p>

        {/* 5️⃣ Safety and Compliance */}
        <p className="mb-4">
          Safety guards, relief devices, and pressure ratings are verified
          before commissioning.  Documentation covers torque values, test
          results, and calibration data so inspectors and future technicians can
          confirm performance.
        </p>

        {/* 6️⃣ Results */}
        <p>
          The finished mechanical system runs smooth, quiet, and predictable.
          It reflects planning, lawful assembly, and a respect for whoever will
          service it next.
        </p>
      </div>
    </FadeInSection>
  );
}