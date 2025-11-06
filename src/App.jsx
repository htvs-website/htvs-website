import { useState } from "react";
import { Menu } from "lucide-react";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-white shadow-lg transition-all duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold font-[Cambria] text-black">
            {sidebarOpen ? "HTVS" : "H"}
          </h1>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2 font-[Cambria] text-sm">
          <NavItem title="Home / Welcome" />
          <NavItem title="About HTVS" />
          <NavItem title="HTVS Policy" />
          <NavItem title="Consultation & Counsel" />
          <NavGroup title="Systems Design & Integration">
            <NavSubItem title="Water Systems" />
            <NavSubItem title="Security Systems" />
            <NavSubItem title="Energy Systems" />
            <NavSubItem title="Mechanical Systems" />
            <NavSubItem title="HVAC Systems" />
            <NavSubItem title="Greenhouse Systems" />
            <NavSubItem title="Cold-Room Systems" />
          </NavGroup>
          <NavItem title="Master Class / Education" />
          <NavItem title="Contact / Correspondence" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-between">
        <div className="flex-1 overflow-y-auto p-10 font-[Cambria] space-y-16">
          <HomeSection />
          <AboutSection />
          <PolicySection />
          <ConsultationSection />
          <SystemsSection />
          <EducationSection />
          <ContactSection />
        </div>

        {/* Footer */}
        <footer className="bg-gray-200 text-gray-700 text-xs p-6 font-[Cambria] border-t">
          <p>
            <strong>Legal Disclaimer:</strong> High Trust Vigilant Systems operates exclusively within
            frameworks of lawful right, ethical counsel, and peaceful jurisdiction. All consultation and
            design work is conducted under provisions of lawfulness, private discretion, and public
            responsibility. Privacy is the rightful reserve of conscience — safety, not secrecy. Nothing
            herein constitutes solicitation, contract, or offer for unlawful activity. HTVS upholds
            lawfulness as peace, and peace as law.
          </p>
        </footer>
      </main>
    </div>
  );
}

// Sidebar Elements
function NavItem({ title }) {
  return <div className="cursor-pointer hover:bg-gray-100 rounded px-2 py-1 transition-colors">{title}</div>;
}

function NavGroup({ title, children }) {
  return (
    <div>
      <div className="font-semibold text-gray-700 mt-4 mb-1">{title}</div>
      <div className="ml-2 space-y-1">{children}</div>
    </div>
  );
}

function NavSubItem({ title }) {
  return <div className="cursor-pointer hover:bg-gray-50 rounded px-2 py-1 text-gray-600 text-sm">{title}</div>;
}

// Content Sections
function HomeSection() {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-black">High Trust Vigilant Systems</h2>
      <h3 className="text-lg italic mb-8 text-gray-700">Lawfulness. Stewardship. Vigilance.</h3>

      <p className="mb-4">
        We live in an age where safety has been confused with control, and privacy mistaken for secrecy.
        HTVS restores the natural order: <em>lawfulness in right relationship with the state</em>, private
        life conducted in peace, and systems designed for resilience — not rebellion.
      </p>

      <p className="mb-4">
        Our mission is simple: to ensure that homes, sanctuaries, and communities are self-sufficient,
        ethically fortified, and harmoniously aligned with lawful principles.
      </p>

      <blockquote className="border-l-4 border-gray-500 pl-4 italic mb-4 text-gray-800">
        Privacy is not separation; it is discretion. Security is not weaponry; it is wisdom. Freedom is not
        absence of law; it is understanding of law.
      </blockquote>

      <p>
        Through consultation, education, and system integration, HTVS helps families, trusts, and
        communities secure the essentials — <strong>water, energy, safety, and stewardship</strong> — in a
        manner consistent with peace and right order.
      </p>

      <p className="mt-8 font-semibold">Lawfulness is our foundation; understanding is our defense.</p>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-black">About HTVS</h2>
      <p>
        High Trust Vigilant Systems was born from the conviction that vigilance is not aggression, and
        readiness is not rebellion. We exist to design, consult, and teach lawful self-reliance — in
        water, energy, and security — as acts of stewardship and peace.
      </p>
    </section>
  );
}

function PolicySection() {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-black">HTVS Policy</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>No counsel or implementation may endanger life or property.</li>
        <li>No mechanical or electrical countermeasure shall cause harm to the innocent.</li>
        <li>Privacy measures never obstruct lawful inspection when due process is observed.</li>
        <li>All systems enhance peace and prevent conflict, not invite or provoke it.</li>
      </ul>
      <p className="mt-4 italic text-gray-700">Lawfulness is not compliance; it is comprehension in right relationship.</p>
    </section>
  );
}

function ConsultationSection() {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-black">Consultation & Counsel</h2>
      <p>
        HTVS provides advisory consultation within lawful, ethical, and technical boundaries. Our counsel
        assists trustees, stewards, and builders in the lawful creation of resilient systems that protect
        life, property, and peace.
      </p>
    </section>
  );
}

function SystemsSection() {
  const systems = [
    {
      title: "Water Systems",
      subtitle: "Water is Life",
      text: "Secure water sources, redundancy, gravity-feed reservoirs, and whole-house filtration. A home must drink before it can breathe."
    },
    {
      title: "Security Systems",
      text: "Pre-perimeter surveillance, non-lethal deterrence, hardened safe rooms with discrete exits, and mechanical safeguards. Security is foresight, not fear."
    },
    {
      title: "Energy Systems",
      text: "Backup generators, automatic transfer switches, solar photovoltaics, and battery banks — energy independence as the silent foundation of peace."
    },
    {
      title: "Mechanical Systems",
      text: "Every home deserves a heart: the mechanical room. Centralized utilities, maintenance corridors, and logical structure bring order to design."
    },
    {
      title: "HVAC Systems",
      text: "Flagship Bosch systems, hydronic heating, and hybrid integration for intelligent comfort and energy balance."
    },
    {
      title: "Greenhouse Systems",
      text: "Sustainable growth environments with controlled heating, water, and ventilation — a harmony of nature and design."
    },
    {
      title: "Cold-Room Systems",
      text: "Built-in cold storage and walk-in refrigeration for preservation through foresight."
    }
  ];

  return (
    <section className="max-w-3xl mx-auto space-y-8">
      {systems.map((s, i) => (
        <div key={i}>
          <h3 className="text-xl font-bold text-black">{s.title}</h3>
          {s.subtitle && <h4 className="italic text-gray-700 mb-2">{s.subtitle}</h4>}
          <p className="text-gray-800">{s.text}</p>
        </div>
      ))}
    </section>
  );
}

function EducationSection() {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-black">Master Class / Education</h2>
      <p>
        Educational programs teaching lawful living systems — understanding the <em>why</em> before the{" "}
        <em>what</em>. Courses integrate technical design, ethics, and trust stewardship for self-reliant
        living.
      </p>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="max-w-3xl mx-auto mb-16">
      <h2 className="text-2xl font-bold mb-4 text-black">Contact / Correspondence</h2>
      <p>
        For private correspondence or consultation inquiries, communication is received under the
        presumption of privacy, discretion, and peace. Each inquiry is handled within the jurisdiction of
        understanding.
      </p>
      <div className="mt-4">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
          Initiate Correspondence
        </button>
      </div>
    </section>
  );
}