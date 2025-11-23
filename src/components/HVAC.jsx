import FadeInSection from "./FadeInSection";

export default function HVAC() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">HVAC Systems</h2>

        {/* 1️⃣ Purpose */}
        <p className="mb-4">
          Heating, ventilation, and air conditioning safely maintain a healthy
          and comfortable environment, and minimize energy use. High Trust
          Vigilant Systems designs HVAC layouts that meet code, maintain
          balance, and are easy to access and service.
        </p>

        {/* 2️⃣ Evaluation */}
        <p className="mb-4">
          We begin with a load calculation and review of duct routes, equipment
          locations, and optimal airflow paths. Whether the structure is here in
          McDonough, Georgia—where summer humidity and seasonal temperature
          swings demand careful planning—or in a different region, each system
          is matched to the structure it serves to maximize efficiency.
        </p>

        {/* 3️⃣ Installation */}
        <p className="mb-4">
          Equipment is mounted level, supported or anchored properly, and
          connected with sealed joints and clear drain routing. Linesets and
          wiring are protected and labeled for clarity. We test airflow, static
          pressure, and temperature drop before the project is stamped
          "Complete."
        </p>

        {/* 4️⃣ Controls and Balance */}
        <p className="mb-4">
          Thermostats, sensors, and safeties are located and wired per
          manufacturer specification. Zoning and dampers, if needed, are set to
          balance comfort across the property. Manual controls, wherever
          possible, are provided for quick checks without reliance upon
          proprietary apps.
        </p>

        {/* 5️⃣ Maintenance and Documentation */}
        <p className="mb-4">
          Each installation includes service notes—filter sizes, refrigerant
          type, and test readings. Access panels remain unblocked, and critical
          components are reachable without cutting or removal. Ample
          installation space ensures accessibility.
        </p>

        {/* 6️⃣ Results */}
        <p>
          The result is an HVAC system that runs quietly, maintains target
          conditions, and can be serviced by any qualified technician. Good
          comfort starts with right design and ends with quality workmanship.
          The client not only appreciates its performance; he is proud of its
          presentation.
        </p>
      </div>
    </FadeInSection>
  );
}