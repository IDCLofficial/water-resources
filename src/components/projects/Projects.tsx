import React from "react";
import Image from "next/image";
import AnimatedSection from "../AnimatedSection";

const projects = [
  {
    title: "Ezeakpala Water Supply Scheme",
    description: "Revitalizing water infrastructure to provide clean water to thousands of residents, improving quality of life and public health.",
    status: "active",
  },
  {
    title: "Inyinshi Water Supply Project",
    description: "Expanding water access to underserved communities, ensuring reliable and safe water for daily needs.",
    status: "active",
  },
  {
    title: "Orlu Urban Water Renewal Project",
    description: "Upgrading urban water systems and sanitation facilities to support growing populations and economic development.",
    status: "active",
  },
  {
    title: "SURWASH Program (World Bank)",
    description: "Implementing the Sustainable Urban/Rural Water Supply, Sanitation and Hygiene program in partnership with the World Bank to improve water and sanitation services statewide.",
    status: "closed",
  },
  {
    title: "Community Water Management Initiatives",
    description: "Empowering local Water Consumer’s Associations to ensure accountability, sustainability, and community participation in water management.",
    status: "active",
  },
  {
    title: "Oguta Water Dam Project",
    description: "Construction and commissioning of the Oguta Water Dam to boost water supply for domestic, agricultural, and industrial use.",
    status: "closed",
  },
];

export default function Projects() {
  const activeProjects = projects.filter(p => p.status === "active");
  const closedProjects = projects.filter(p => p.status === "closed");

  return (
    <section className="w-full py-16 flex flex-col items-center">
      <div className="w-full md:w-[90vw] flex flex-col lg:flex-row">
        {/* Text Content */}
        <div className="flex-1 bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-green-700 mb-6">Projects & Initiatives</h1>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Active Projects</h2>
            <div className="space-y-4">
              {activeProjects.map((project, idx) => (
                <div key={idx} className="p-4 bg-green-50 rounded-xl border-l-4 border-green-600 shadow-sm">
                  <AnimatedSection>
                  <h3 className="font-semibold text-lg text-green-800 mb-1">{project.title}</h3>
                  <p className="text-gray-700 text-sm">{project.description}</p>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-500">Closed Projects</h2>
            <div className="space-y-4">
              {closedProjects.map((project, idx) => (
                <div key={idx} className="p-4 bg-gray-100 rounded-xl border-l-4 border-gray-400 shadow-sm">
                  <AnimatedSection>
                  <h3 className="font-semibold text-lg text-gray-700 mb-1">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </section>
        </div>
        {/* Images Side */}
        <div className="flex-1 flex flex-col items-center justify-center lg:w-[20%] gap-6 py-4">
          <div className="w-full h-56 max-w-xs relative rounded-3xl overflow-hidden shadow-lg">
            <Image src="/images/dam.jpeg" alt="Oguta Water Dam" fill className="object-cover" />
          </div>
          <div className="w-full h-56 max-w-xs relative rounded-3xl overflow-hidden shadow-lg">
            <Image src="/images/water1.png" alt="Water Supply" fill className="object-cover" />
          </div>
          <div className="w-full h-56 max-w-xs relative rounded-3xl overflow-hidden shadow-lg">
            <Image src="/images/waterteam.png" alt="Community Engagement" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
} 