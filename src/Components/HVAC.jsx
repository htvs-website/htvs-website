import FadeInSection from "./FadeInSection";

export default function HVAC() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">HVAC Systems</h2>

        {/* 1️⃣ Purpose */}
        <p className="mb-4">
          Heating, ventilation, and air conditioning determine comfort, safety,
          and energy use.  High Trust Vigilant Systems designs HVAC layouts that
          meet code, maintain balance, and stay easy to service through the life
          of the building.
        </p>

        {/* 2️⃣ Evaluation */}
        <p className="mb-4">
          We begin with a load calculation and review of duct routes, equipment
          locations, and airflow paths.  Each system is matched to the structure
          rather than forcing standard equipment into a poor fit.
        </p>

        {/* 3️⃣ Installation */}
        <p className="mb-4">
          Equipment is mounted level, supported properly, and connected with
          sealed joints and clear drain routing.  Linesets and wiring are
          labeled and protected.  We test airflow, static pressure, and
          temperature drop before leaving the site.
        </p>

        {/* 4️⃣ Controls and Balance */}
        <p className="mb-4">
          Thermostats, relays, and safeties are wired per manufacturer
          specification.  Zoning and dampers are set to balance comfort across
          the property.  Manual controls are provided for quick checks without
          relying on proprietary apps.
        </p>

        {/* 5️⃣ Maintenance and Documentation */}
        <p className="mb-4">
          Each installation includes service notes—filter sizes, refrigerant
          type, and test readings.  Access panels remain unblocked, and critical
          components are reachable without cutting or removal.
        </p>

        {/* 6️⃣ Results */}
        <p>
          The result is an HVAC system that runs quiet, maintains target
          conditions, and can be serviced by any qualified technician.  Good
          comfort starts with lawful design and ends with clean workmanship.
        </p>
      </div>
    </FadeInSection>
  );
}