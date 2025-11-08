import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">About HTVS</h2>
        <p>
          HTVS was founded on the belief that technology should protect, not complicate, human life.
          We combine field experience in mechanical systems, electrical integration, and structural design
          with a disciplined respect for lawfulness, ethics, and personal responsibility.
        </p>
        <p>
          Our team designs for longevity—favoring mechanical clarity over digital dependence, and craftsmanship over shortcuts.
          We believe a well-planned system should remain serviceable decades after installation, with components arranged for safe, direct access.
        </p>
        <p>
          From secure water supplies and backup power to climate control and intelligent monitoring,
          HTVS brings together the disciplines needed to make modern living both stable and sustainable.
        </p>
      </div>
    </FadeInSection>
  );
}