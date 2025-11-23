import FadeInSection from "./FadeInSection";

export default function Consultation() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">
          Consultation & Counsel
        </h2>

        {/* 1️⃣ Scope */}
        <p className="mb-4">
          High Trust Vigilant Systems provides consultation for property owners,
          builders, and organizations needing practical direction on system
          design, upgrades, or integration. Operating from McDonough, Georgia,
          our goal is simple—give clear, code-worthy, and cost-aware solutions
          that match each site’s real conditions.
        </p>

        {/* 2️⃣ Process */}
        <p className="mb-4">
          A consultation begins with a client interview, followed by review of
          the project site, mechanical and electrical layouts, and any existing
          plans or ideas. We identify the points where systems may overlap, then
          outline a method to make them work together coherently. Consulting
          advice is documented in plain language with digital or printed binders,
          depending upon the client's needs.
        </p>

        {/* 3️⃣ Limits and Ethics */}
        <p className="mb-4">
          HTVS provides technical, operational, and design guidance forged
          through years of work in demanding environments, where clarity,
          simplicity, and dependability determine success. When a matter falls
          under regulatory or permitting authority, we assist by preparing proper
          documentation and referring to licensed professionals as required.
        </p>

        {/* 4️⃣ Communication */}
        <p className="mb-4">
          Communication is kept professional and confidential. Questions are
          answered directly, without jargon, and every recommendation includes
          the reasoning behind it so the client can make informed decisions.
        </p>

        {/* 5️⃣ Closing principle */}
        <p>
          A good consultation leaves no mystery—only a clear path forward and a
          client who understands exactly what will be done, why, and how it will
          hold up over time.
        </p>
      </div>
    </FadeInSection>
  );
}