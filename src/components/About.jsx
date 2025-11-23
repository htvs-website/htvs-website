import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">About HTVS</h2>

        <p>
          HTVS was founded on the belief that technology should serve and protect, not complicate, human life.
          Operating from McDonough, Georgia, we combine field experience in mechanical systems, electrical
          integration, and structural design with a disciplined respect for simplicity; allowing the needed
          function to dictate form.
        </p>

        <p>
          Our team designs for longevity—favoring mechanical simplicity over digital dependence, and craftsmanship
          over shortcuts. We believe a well-planned system should remain serviceable decades after installation,
          with components arranged for convenient, practical access.
        </p>

        <p>
          From secure water sourcing, storage, and supply, to backup power, climate control, and intelligent
          monitoring, HTVS brings together the disciplines needed to make modern living secure, stable,
          and sustainable.
        </p>
      </div>
    </FadeInSection>
  );
}