import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";

function Home() {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="flex flex-col items-center justify-center space-y-4">
  <h1 className="text-4xl font-bold">High Trust Vigilant Systems</h1>
</div>
      <p className="text-xl italic mt-2 text-gray-700">Freedom Through Resilience</p>
      <p className="text-gray-700 mt-6 max-w-2xl mx-auto leading-relaxed">
        Engineering independence for the vigilant homeowner — combining hybrid HVAC systems,
        power redundancy, and intelligent design. Explore our Bosch hybrid solutions and
        consulting services to build resilience through redundancy.
      </p>
      <Link
        to="/consulting"
        className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-2xl shadow-md hover:bg-gray-800 transition"
      >
        Schedule a Consultation
      </Link>
    </section>
  );
}

function About() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6 text-left">
      <h2 className="text-3xl font-bold mb-4">About HTVS</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        High Trust Vigilant Systems (HTVS) was founded by Stephen Joel Bovè to unite craftsmanship,
        foresight, and integrity within the fields of comfort, power, and preparedness. The emblem
        — the Trojan upon the Ox — symbolizes intelligence guiding strength.
      </p>
      <p className="text-gray-700 leading-relaxed">
        HTVS builds systems that endure disruption and empower homeowners to choose freedom through
        resilience. Born from the High Trust Business Trust, it combines Hybrid Comfort Systems,
        Power Continuity, and Resilience Consulting to provide stability in uncertain times.
      </p>
    </section>
  );
}

function FreedomSystems() {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Freedom Systems</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Hybrid HVAC Systems</h3>
          <p className="text-gray-700 text-sm">
            Bosch Furnace-Ready Coil systems integrating gas and electric comfort for
            dual-fuel flexibility and superior efficiency.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Generator Integration</h3>
          <p className="text-gray-700 text-sm">
            Seamless backup power with smart transfer technology ensuring uninterrupted comfort
            during outages and brownouts.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Continuity & Shelter Design</h3>
          <p className="text-gray-700 text-sm">
            Discreetly engineered backup systems and protective enclosures for total home
            resilience and peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
}

function Consulting() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6 text-left">
      <h2 className="text-3xl font-bold mb-4">Consulting Services</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Through <strong>High Trust Systems Consulting</strong>, clients receive personalized
        assessments and <em>Resilience Through Redundancy</em> reports. Each engagement delivers
        actionable intelligence and tailored design plans for hybrid HVAC, backup power, and
        continuity architecture.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consultation tiers range from onsite evaluations to complete system continuity design.
        Reports are professionally bound and may serve as blueprints for implementation under HTVS
        or any licensed contractor of the client’s choice.
      </p>
      <Link
        to="/contact"
        className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-2xl shadow-md hover:bg-gray-800 transition"
      >
        Request Consultation
      </Link>
    </section>
  );
}

function Contact() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6 text-left">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-6">
        To schedule a consultation or inquire about Freedom Systems, reach out using the information below. All consultations are by appointment only.
      </p>
      <div className="text-gray-800 space-y-2">
        <p><strong>Email:</strong> info@hightrustsystems.com</p>
        <p><strong>Phone:</strong> (###) ###-####</p>
        <p><strong>Mailing Address:</strong> 139 Russell Road, McDonough, GA 30252</p>
      </div>
    </section>
  );
}

function NavBar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Freedom Systems", path: "/freedom-systems" },
    { name: "Consulting", path: "/consulting" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-black">HTVS</Link>
        <div className="space-x-6">
          {links.map((l, i) => (
            <Link key={i} to={l.path} className="text-gray-700 hover:text-black transition">
              {l.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div className="font-[Cambria] text-black bg-white min-h-screen flex flex-col">
        <Link to="/" className="flex items-center space-x-3">
  <img
  src="/htvs-emblem.png"
  alt="HTVS Emblem"
  width="80"
  height="80"
  className="object-contain shrink-0 shadow-sm opacity-95"
  style={{ width: "30rem", height: "30rem", maxWidth: "30rem", maxHeight: "30rem" }}
/>
  <span className="text-xl font-bold text-black">HTVS</span>
</Link>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/freedom-systems" element={<FreedomSystems />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-black text-white text-center py-10">
          <p className="text-lg font-semibold">Vigilance is the Foundation of Freedom</p>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} High Trust Vigilant Systems – A Division of HTBT
          </p>
        </footer>
      </div>
    </Router>
  );
}