import FadeInSection from "./FadeInSection";

export default function ColdRoom() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">Cold-Room Systems</h2>

        {/* 1️⃣ Purpose */}
        <p className="mb-4">
          Cold-room facilities require stable temperature, controlled humidity,
          and dependable safety devices. High Trust Vigilant Systems designs and
          installs refrigeration layouts built for consistent service and
          efficient inspection, maintenance, and repair.
        </p>

        {/* 2️⃣ Evaluation */}
        <p className="mb-4">
          Each project starts with a survey of available space, necessary
          insulation values, and load expectations. Whether the facility is
          located here in McDonough, Georgia—where seasonal humidity and
          ambient heat place distinct demands on cooling systems—or in another
          region, we build the enclosure with care, confirming excellent joint
          and door seals and ensuring ample floor drainage before sizing
          compressors, condensers, and coils, and selecting controls.
        </p>

        {/* 3️⃣ Equipment and Installation */}
        <p className="mb-4">
          Units are selected for duty cycle and refrigerant compatibility with
          current code. Lines are insulated, pressure-tested, and clearly
          labeled. Condensing sets are mounted for airflow and safe service
          access. Electrical breakers and circuits are dedicated and built to
          specification.
        </p>

        {/* 4️⃣ Control and Monitoring */}
        <p className="mb-4">
          Temperature controllers, safeties, and alarms are wired per
          manufacturer standards. Sensors are placed properly for accurate
          readings and easy calibration. Manual override and test functions are
          provided, if practical, so technicians can verify performance without
          special tools.
        </p>

        {/* 5️⃣ Sanitation and Drainage */}
        <p className="mb-4">
          Condensate lines are fitted with traps and routed to code-approved
          drains. All interior surfaces are smooth and washable. We avoid
          concealed cavities that can trap moisture or bacteria, keeping
          inspections and maintenance straightforward.
        </p>

        {/* 6️⃣ Results */}
        <p>
          The completed cold-room system holds temperature, functions
          efficiently, and remains serviceable through years of operation—proof
          that sound design and quality workmanship are the best form of
          insurance.
        </p>
      </div>
    </FadeInSection>
  );
}