import React from "react";
import "./index.css";

// Import each section component
import Home from "./components/Home";
import About from "./components/About";
import Policy from "./components/Policy";
import Consultation from "./components/Consultation";
import Systems from "./components/Systems";
import Water from "./components/Water";
import Security from "./components/Security";
import Energy from "./components/Energy";
import Mechanical from "./components/Mechanical";
import HVAC from "./components/HVAC";
import Greenhouse from "./components/Greenhouse";
import ColdRoom from "./components/ColdRoom";
import ProtectedSpaces from "./components/ProtectedSpaces";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const sections = [
    { id: "home", label: "Home / Welcome" },
    { id: "about", label: "About HTVS" },
    { id: "policy", label: "HTVS Policy" },
    { id: "consultation", label: "Consultation & Counsel" },
    { id: "systems", label: "Systems Design & Integration" },
    { id: "mechanical", label: "Mechanical Systems" },
    { id: "water", label: "Water Systems" },
    { id: "energy", label: "Energy Systems" },
    { id: "hvac", label: "HVAC Systems" },
    { id: "security", label: "Security Systems" },
    { id: "coldroom", label: "Cold-Room Systems" },
    { id: "protected", label: "Protected Spaces / Resilient Architecture" },
    { id: "greenhouse", label: "Greenhouse Systems" },
    { id: "education", label: "Master Class / Education — Architecture of Understanding" },
    { id: "contact", label: "Contact / Correspondence" },
    { id: "blog", label: "From the Director’s Desk" },
  ];

  return (
    <div className="flex bg-gray-100 text-gray-900 font-[Cambria]">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white shadow-md p-4 overflow-y-auto z-10">
        {/* Brand header with resized emblem */}
        <div className="flex flex-col items-center mb-6 text-center">
          <img
            src="/images/trojan-ox.png"
            alt="HTVS Emblem"
            className="w-28 h-28 opacity-95 drop-shadow-sm mb-2"
          />
          <h1 className="text-2xl font-bold text-black leading-tight mb-2">HTVS</h1>
          {/* ✅ Motto directly beneath logo/title */}
          <p className="text-xs text-gray-600 leading-snug px-2 italic">
            HTVS integrates failsafe design with dependable craftsmanship and coherent
            systems engineering to deliver reliable, efficient results.
          </p>
        </div>

        {/* Sidebar navigation */}
        <nav>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-gray-700 hover:text-blue-700 transition-colors"
                >
                  {section.label}
                </a>
              </li>
            ))}

            {/* --- Personal blog link --- */}
            <li className="pt-4 border-t border-gray-200 mt-4">
              <a
                href="/blog"
                className="block text-gray-800 font-semibold hover:text-blue-700 transition-colors"
              >
                From the Director’s Desk
              </a>
              <p className="text-sm text-gray-600 leading-snug mt-1 pr-2">
                Personal reflections, field notes, and original insights —
                written for those building with purpose and precision.
              </p>
            </li>
          </ul>
        </nav>
      </aside>

      {/* ✅ Content column to the right of sidebar */}
      <div className="ml-64 flex flex-col flex-1 min-h-screen">
        <main className="flex-grow p-8 space-y-20">
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="policy"><Policy /></section>
          <section id="consultation"><Consultation /></section>
          <section id="systems"><Systems /></section>
          <section id="water"><Water /></section>
          <section id="security"><Security /></section>
          <section id="energy"><Energy /></section>
          <section id="mechanical"><Mechanical /></section>
          <section id="hvac"><HVAC /></section>
          <section id="greenhouse"><Greenhouse /></section>
          <section id="coldroom"><ColdRoom /></section>
          <section id="protected"><ProtectedSpaces /></section>
          <section id="education"><Education /></section>
          <section id="contact"><Contact /></section>
        </main>

        {/* ✅ Footer now full-width below all sections */}
        <Footer />
      </div>
    </div>
  );
}