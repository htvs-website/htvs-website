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
          design, upgrades, or integration.  The goal is simple—give clear,
          lawful, and cost-aware solutions that match each site’s real
          conditions.
        </p>

        {/* 2️⃣ Process */}
        <p className="mb-4">
          A consultation begins with review of the project site, mechanical and
          electrical layout, and any existing plans.  We identify the points
          where systems overlap, then outline a method to make them work
          together safely.  Advice is documented in plain language with
          follow-up options when needed.
        </p>

        {/* 3️⃣ Limits and Ethics */}
        <p className="mb-4">
          HTVS offers technical and operational guidance, not legal advice.
          When a matter falls under regulatory or permitting authority, we
          assist by preparing proper documentation and referring to licensed
          professionals as required.
        </p>

        {/* 4️⃣ Communication */}
        <p className="mb-4">
          Communication is kept professional and confidential.  Questions are
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