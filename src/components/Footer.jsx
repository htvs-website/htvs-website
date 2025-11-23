export default function Footer() {
  const schema = [
    /* --------------------------------------------------------
       1. Primary Business Schema — Home & Construction Business
    -------------------------------------------------------- */
    {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": "High Trust Vigilant Systems",
      "slogan": "HTVS integrates failsafe design with dependable craftsmanship and coherent systems engineering to deliver reliable, efficient results.",
      "image": "https://hightrustvigilant.systems/images/trojan-ox.png",
      "url": "https://hightrustvigilant.systems",
      "description": "High Trust Vigilant Systems (HTVS) designs and integrates mechanical, water, energy, HVAC, security, and resilient architectural systems built for longevity, serviceability, and real-world performance.",
      "hasMap": "https://www.google.com/maps/place/139+Russell+Road,+McDonough,+GA+30252",

      "address": {
        "@type": "PostalAddress",
        "streetAddress": "139 Russell Road",
        "addressLocality": "McDonough",
        "addressRegion": "GA",
        "postalCode": "30252",
        "addressCountry": "US"
      },

      "email": "info@HighTrustVigilant.Systems",
      "telephone": "+1-404-368-7991",
      "areaServed": "Georgia",
      "founder": "Stephen Joel Bové",
      "foundingLocation": "McDonough, Georgia",
      "foundingDate": "2025",
      "logo": "https://hightrustvigilant.systems/images/trojan-ox.png",

      /* Business hours */
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],

      /* Optimization keywords */
      "keywords": [
        "mechanical systems",
        "water systems",
        "energy systems",
        "HVAC systems",
        "security systems",
        "cold-room systems",
        "resilient architecture",
        "greenhouse systems",
        "systems design",
        "systems integration",
        "High Trust Vigilant Systems",
        "HTVS"
      ],

      /* Domain specialties for rank & relevance */
      "knowsAbout": [
        "mechanical systems design",
        "water supply engineering",
        "energy redundancy planning",
        "electrical load analysis",
        "HVAC system balancing",
        "security systems engineering",
        "resilient protective architecture",
        "cold-room design",
        "greenhouse climate control",
        "systems integration",
        "backup power systems",
        "redundant system planning",
        "mission-critical infrastructure"
      ],

      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.458,
        "longitude": -84.129
      },

      "sameAs": [
        "https://www.google.com/search?q=High+Trust+Vigilant+Systems"
      ]
    },

    /* --------------------------------------------------------
       2. Organization Schema
    -------------------------------------------------------- */
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "High Trust Vigilant Systems",
      "url": "https://hightrustvigilant.systems",
      "logo": "https://hightrustvigilant.systems/images/trojan-ox.png",
      "description": "HTVS integrates failsafe design with dependable craftsmanship and coherent systems engineering to deliver reliable, efficient results.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "info@HighTrustVigilant.Systems",
        "telephone": "+1-404-368-7991",
        "availableLanguage": ["English"],
        "areaServed": "US"
      }
    },

    /* --------------------------------------------------------
       3. Website Schema
    -------------------------------------------------------- */
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "High Trust Vigilant Systems",
      "url": "https://hightrustvigilant.systems",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://hightrustvigilant.systems/?q={search_term}",
        "query-input": "required name=search_term"
      },
      "publisher": {
        "@type": "Organization",
        "name": "High Trust Vigilant Systems",
        "logo": {
          "@type": "ImageObject",
          "url": "https://hightrustvigilant.systems/images/trojan-ox.png"
        }
      }
    },

    /* --------------------------------------------------------
       4. Full Service Catalog
    -------------------------------------------------------- */
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Systems Design & Integration",
      "description": "Integrated mechanical, water, energy, HVAC, and security systems designed for resilience and reliability.",
      "provider": { "@type": "HomeAndConstructionBusiness", "name": "High Trust Vigilant Systems" }
    },

    { "@context": "https://schema.org", "@type": "Service",
      "serviceType": "Mechanical Systems",
      "provider": { "@type": "HomeAndConstructionBusiness", "name": "High Trust Vigilant Systems" }
    },

    { "@context": "https://schema.org", "@type": "Service",
      "serviceType": "Water Systems",
      "provider": { "@type": "HomeAndConstructionBusiness", "name": "High Trust Vigilant Systems" }
    },

    { "@context": "https://schema.org", "@type": "Service",
      "serviceType": "Energy Systems",
      "provider": { "@type": "HomeAndConstructionBusiness", "name": "High Trust Vigilant Systems" }
    },

    { "@context": "https://schema.org", "@type": "Service",
      "serviceType": "HVAC Systems",
      "provider": { "@type": "HomeAndConstructionBusiness", "name": "High Trust Vigilant Systems" }
    },

    { "@context": "https://schema.org", "@type": "Service",
      "serviceType": "Security Systems",
      "provider": { "@type": "HomeAndConstructionBusiness", "name": "High Trust Vigilant Systems" }
    },

    { "@context": "https://schema.org", "@type": "Service",
      "serviceType": "Cold-Room Systems",
      "provider": { "@type": "HomeAndConstructionBusiness", "name": "High Trust Vigilant Systems" }
    },

    { "@context": "https://schema.org", "@type": "Service",
      "serviceType": "Greenhouse Systems",
      "provider": { "@type": "HomeAndConstructionBusiness", "name": "High Trust Vigilant Systems" }
    },

    { "@context": "https://schema.org", "@type": "Service",
      "serviceType": "Protected Spaces / Resilient Architecture",
      "provider": { "@type": "HomeAndConstructionBusiness", "name": "High Trust Vigilant Systems" }
    }
  ];

  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-300 py-6 text-center mt-20">

      {/* ⭐ Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <p className="text-sm font-[Cambria]">
        © {new Date().getFullYear()} High Trust Vigilant Systems — All rights reserved.
      </p>
      <p className="text-xs text-gray-600 mt-1 font-[Cambria] italic">
        Designed and built with integrity and precision.
      </p>
    </footer>
  );
}