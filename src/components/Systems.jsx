import FadeInSection from "./FadeInSection";

export default function Systems() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">
          Systems Design & Integration
        </h2>

        {/* 1️⃣ Purpose */}
        <p className="mb-4">
          Every property depends on systems that have to work together—water,
          power, air conditioning, and security. High Trust Vigilant Systems
          designs these networks so they function as one reliable framework
          instead of a mix of separate parts.
        </p>

        {/* 2️⃣ Assessment */}
        <p className="mb-4">
          Each project begins with a site review and load analysis. Whether the
          property is here in McDonough, Georgia, or elsewhere, we map existing
          equipment, utility feeds, and control lines to find weak links or
          single points of failure. From there, we plan how each element can be
          supported, supplied with backup or failsafe, or simplified.
        </p>

        {/* 3️⃣ Integration */}
        <p className="mb-4">
          Integration is handled with proven hardware and clear documentation.
          We avoid over-automation and keep manual control available wherever
          possible. The result is a system that can be serviced locally and kept
          running even when digital tools fail.
        </p>

        {/* 4️⃣ Standards and Coordination */}
        <p className="mb-4">
          All layouts and connections are drawn to code and labeled for
          inspection. We coordinate with licensed trades so electrical,
          plumbing, HVAC, and security systems teams share the same plan set and
          understand each other’s work.
        </p>

        {/* 5️⃣ Results */}
        <p>
          A finished HTVS design delivers efficiency with the highest practical
          degree of independence—built to last, easy to maintain, and ready for
          the unexpected.
        </p>
      </div>
    </FadeInSection>
  );
}