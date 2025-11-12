import FadeInSection from "./FadeInSection";

export default function Mechanical() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">Mechanical Systems</h2>

        {/* 1️⃣ Purpose */}
        <p className="mb-4">
          Mechanical systems form the internal infrastructure within every building.
          High Trust Vigilant Systems designs and installs assemblies that move
          air, water, and materials safely and efficiently, with clear access for
          service and inspection.
        </p>

        {/* 2️⃣ Evaluation */}
        <p className="mb-4">
          Each project starts with a review of existing layouts and load
          conditions.  We identify friction points, clearance issues, and optimal locations
          before recommending upgrades or replacements.  Designs are built
          to code and drawn for practical installation.
        </p>

        {/* 3️⃣ Fabrication and Installation */}
        <p className="mb-4">
          Ductwork, piping, and framing are fabricated from standard materials
          that can be sourced locally, if possible.  Connections are sealed, supported, and
          labeled.  We avoid hidden junctions and use mechanical fasteners wherever
          inspection or disassembly may be required.
        </p>

        {/* 4️⃣ Integration */}
        <p className="mb-4">
          Mechanical components are coordinated with electrical and control
          systems from the start.  Every moving part—fan, valve, pump, or
          actuator—is designed to be accessible and serviceable. Isolation and bypass valves are installed for continuity.
          This keeps maintenance simple and downtime short.
        </p>

        {/* 5️⃣ Safety and Compliance */}
        <p className="mb-4">
          Safety guards, relief devices, and pressure ratings are verified
          before commissioning.  Documentation covers torque values, test
          results, and calibration data so inspectors and future technicians can
          confirm settings and performance with confidence.
        </p>

        {/* 6️⃣ Results */}
        <p>
          The finished mechanical system runs smoothly, quietly, and predictably.
          It reflects meticulous planning, conscientious craftsmanship, and a respect for the client's
          peace of mind.
        </p>
      </div>
    </FadeInSection>
  );
}