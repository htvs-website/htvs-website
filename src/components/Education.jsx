import FadeInSection from "./FadeInSection";

export default function Education() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">
          Master Class / Education
        </h2>
        <h3 className="text-center text-lg italic text-gray-700 mb-6">
          A Study in the Architecture of Understanding
        </h3>

        {/* 1️⃣ Purpose */}
        <p className="mb-4">
          The heart of High Trust Vigilant Systems is education—not merely in
          technique, but in comprehension.  The <strong>Master Class</strong> is
          a private window into the ontological foundations of authorship and
          understanding.  It is designed for those who wish to comprehend the
          principles that govern all sound building, design, and life itself.
        </p>

        {/* 2️⃣ Foundation */}
        <p className="mb-4">
          Each course draws from the <em>Library of Status Unitus Pax</em>,
          beginning with the triad of first comprehension:
          <strong> Comprehend Thy Creator, Thyself, and Thy Counterpart</strong>.
          From this foundation, every discussion unfolds organically—touching
          the architecture of thought, purpose, and responsibility.
        </p>

        {/* 3️⃣ Format */}
        <p className="mb-4">
          Sessions are conversational, reflective, and confidential.  They are
          offered only under private membership agreement, ensuring that what is
          shared remains protected—between teacher and student, between hearts
          intent on understanding.  No recordings are made, and no audience is
          public.  What is spoken is authored in the moment and entrusted to
          those present.
        </p>

        {/* 4️⃣ Content */}
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Understanding authorship and self-governance</li>
          <li>The nature of comprehension and the act of creation</li>
          <li>Interdependence as the framework of peace</li>
          <li>Principles of stewardship, craftsmanship, and discernment</li>
          <li>The moral geometry of structure—how understanding builds order</li>
        </ul>

        {/* 5️⃣ Distinction */}
          <p className="mb-4">
            This is not vocational training.  It is the study of being itself—the
            mastery that precedes all skill.  Students are invited to rediscover
            the discipline that makes all craftsmanship possible: a mind ordered
            by purpose and a heart governed by peace.
          </p>
{/* 6️⃣ Outcome */}
<p>
  Participants leave not with a certificate of attendance, but with
  something far more enduring: renewed clarity of purpose, lawful
  self-possession, and a sense of authorship over their own work and
  life. The measure of learning is not what one remembers, but what one
  becomes.
</p>

{/* 7️⃣ Inquiry Button */}
<div className="mt-8 text-center">
  <a
    href="#contact"
    className="inline-block bg-gray-900 text-white px-6 py-2 rounded-2xl shadow hover:bg-gray-700 transition font-[Cambria]"
  >
    Private Enrollment Inquiry
  </a>
  <p className="text-xs text-gray-600 mt-2 italic">
    Enrollment inquiries are received under Private Membership Agreement (PMA).
  </p>
</div>

</div>
</FadeInSection>
);
}