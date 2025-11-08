import FadeInSection from "./FadeInSection";

export default function Education() {
  return (
    <FadeInSection>
      <div>
        <h2 className="text-3xl font-bold text-black mb-4">
          Master Class / Education
        </h2>

        {/* 1️⃣ Purpose */}
        <p className="mb-4">
          Education is how craftsmanship endures.  High Trust Vigilant Systems
          provides instruction and mentoring for builders, technicians, and
          property owners who want to understand lawful design and sound
          maintenance from the inside out.
        </p>

        {/* 2️⃣ Training Approach */}
        <p className="mb-4">
          We teach through real equipment and real sites.  Each session covers
          safety standards, proper documentation, and proven field methods.
          Lessons are direct—what to do, how to do it, and why the details
          matter when inspection time comes.
        </p>

        {/* 3️⃣ Areas of Study */}
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Water, energy, and air systems design</li>
          <li>Electrical safety and code coordination</li>
          <li>Mechanical layout and service planning</li>
          <li>Site documentation and record keeping</li>
        </ul>

        {/* 4️⃣ Mentorship and Certification */}
        <p className="mb-4">
          Apprentices and seasoned tradesmen alike can join project-based
          mentorship programs.  Completion certificates are issued for hours
          worked and competencies demonstrated—not attendance alone.
        </p>

        {/* 5️⃣ Standards */}
        <p className="mb-4">
          All materials reference recognized building and safety codes.
          Instruction emphasizes responsibility, lawful cooperation, and respect
          for inspection processes.  The goal is competence that stands on its
          own record.
        </p>

        {/* 6️⃣ Results */}
        <p>
          Each graduate leaves with practical skill and professional discipline.
          Knowledge is measured by the quality of work produced—and that remains
          the truest credential.
        </p>
      </div>
    </FadeInSection>
  );
}