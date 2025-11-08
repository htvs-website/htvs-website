import FadeInSection from "./FadeInSection";

export default function ColdRoom() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">Cold-Room Systems</h2>

        {/* 1️⃣ Purpose */}
        <p className="mb-4">
          Cold-room facilities require stable temperature, controlled humidity,
          and dependable safety devices.  High Trust Vigilant Systems designs
          and installs refrigeration layouts built for constant service and
          lawful inspection.
        </p>

        {/* 2️⃣ Evaluation */}
        <p className="mb-4">
          Each project starts with a survey of room size, insulation value, and
          load expectations.  We confirm door seals, vapor barriers, and floor
          drainage before sizing compressors, coils, and controls.
        </p>

        {/* 3️⃣ Equipment and Installation */}
        <p className="mb-4">
          Units are selected for duty cycle and refrigerant compatibility with
          current code.  Lines are pressure-tested, insulated, and clearly
          labeled.  Condensing sets are mounted for airflow and safe service
          access.  Electrical circuits are dedicated and fused to specification.
        </p>

        {/* 4️⃣ Control and Monitoring */}
        <p className="mb-4">
          Temperature controllers, safeties, and alarms are wired per
          manufacturer standards.  Sensors are placed for accurate readings and
          easy calibration.  Manual override and test functions are provided so
          technicians can verify performance without special tools.
        </p>

        {/* 5️⃣ Sanitation and Drainage */}
        <p className="mb-4">
          Condensate lines are trapped and routed to code-approved drains.  All
          interior surfaces are smooth and washable.  We avoid concealed cavities
          that can trap moisture or bacteria, keeping inspection straightforward.
        </p>

        {/* 6️⃣ Results */}
        <p>
          The completed cold-room system holds temperature, passes inspection,
          and remains serviceable through years of operation—proof that lawful
          design and sound workmanship are the best form of insurance.
        </p>
      </div>
    </FadeInSection>
  );
}