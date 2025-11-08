import FadeInSection from "./FadeInSection";

export default function Contact() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">
          Contact / Correspondence
        </h2>

        {/* 1️⃣ Introduction */}
        <p className="mb-4">
          High Trust Vigilant Systems welcomes correspondence regarding design,
          consultation, or project coordination.  Inquiries are answered in the
          order received and documented for follow-up.  Communication is kept
          professional and confidential at all times.
        </p>

        {/* 2️⃣ Contact Information */}
        <div className="text-sm text-gray-800 mb-4">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@HighTrustVigilant.Systems"
              className="text-blue-700 hover:underline"
            >
              info@HighTrustVigilant.Systems
            </a>
          </p>
          <p>
            <strong>Office:</strong> McDonough, Georgia
          </p>
          <p>
            <strong>Hours:</strong> By appointment
          </p>
        </div>

        {/* 3️⃣ Optional Note */}
        <p className="text-gray-700">
          Site visits and consultations are scheduled after an initial review of
          project details.  Written documentation is provided for every formal
          engagement.
        </p>
      </div>
    </FadeInSection>
  );
}