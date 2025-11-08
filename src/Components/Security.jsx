import FadeInSection from "./FadeInSection";

export default function Security() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">Security Systems</h2>

        {/* 1️⃣ Purpose */}
        <p className="mb-4">
          A security system should protect people and property without adding
          confusion or constant maintenance.  High Trust Vigilant Systems
          designs protection networks that are straightforward, dependable, and
          lawful in every jurisdiction we serve.
        </p>

        {/* 2️⃣ Assessment */}
        <p className="mb-4">
          We begin by surveying the site and identifying natural access points,
          existing lighting, and structural weak areas.  From there we develop a
          layered plan—entry control, detection, and response—built around how
          the property is actually used day to day.
        </p>

        {/* 3️⃣ Equipment and Installation */}
        <p className="mb-4">
          Cameras, sensors, and control panels are chosen for durability and
          clear service documentation.  All wiring is labeled and run in
          conduit or raceway where possible.  Equipment placement avoids blind
          spots and respects privacy lines inside and outside the structure.
        </p>

        {/* 4️⃣ Monitoring and Control */}
        <p className="mb-4">
          Systems can report locally or to a trusted monitoring service.
          Interfaces are kept simple—manual override is always available.  We
          avoid proprietary lock-ins so future maintenance can be handled by any
          qualified technician.
        </p>

        {/* 5️⃣ Integration */}
        <p className="mb-4">
          Security components are coordinated with electrical, lighting, and
          network layouts.  Power supplies, surge protection, and grounding are
          detailed on the same drawings used by other trades to prevent overlap
          or interference.
        </p>

        {/* 6️⃣ Results */}
        <p>
          The finished system operates quietly in the background—steady,
          serviceable, and ready when needed.  No gimmicks, no hidden data use,
          just clear protection built to standard.
        </p>
      </div>
    </FadeInSection>
  );
}