import AnimatedSection from "@/components/AnimatedSection";
import React from "react";

const services = [
  {
    title: "Water Supply & Distribution",
    description:
      "Managing and expanding water supply networks across Imo State. Ensuring reliable access to clean, potable water for urban and rural communities through infrastructure development and maintenance of water treatment plants and distribution systems.",
  },
  {
    title: "Water Quality Management & Testing",
    description:
      "Conducting regular water quality assessments and monitoring programs. Implementing standards for safe drinking water and ensuring compliance with national and international water quality guidelines.",
    source: "who.int/water_sanitation_health",
  },
  {
    title: "Rural Water Development",
    description:
      "Providing water access to underserved rural communities through borehole construction, water schemes, and community water projects. Supporting local water committees and promoting sustainable water management practices.",
    source: "unicef.org/water_sanitation_hygiene",
  },
  {
    title: "Infrastructure Development & Maintenance",
    description:
      "Planning, constructing, and maintaining water infrastructure including dams, treatment plants, pipelines, and pumping stations. Implementing modern technologies for efficient water delivery and reducing water losses.",
  },
  {
    title: "Community Engagement & Capacity Building",
    description:
      "Educating communities on water conservation, hygiene practices, and sustainable water use. Training local water management committees and promoting community participation in water resource management.",
  },
  {
    title: "Emergency Water Services",
    description:
      "Providing emergency water supply during disasters, droughts, or infrastructure failures. Coordinating with emergency response teams and ensuring continuous water access during critical situations.",
  },
  {
    title: "International Partnerships & Funding",
    description:
      "Collaborating with international organizations like World Bank, UNICEF, and USAID for water projects. Managing grants, technical assistance, and implementing sustainable water programs with global best practices.",
  },
];

const ServiceCard = ({ title, description }: { title: string; description: string;}) => (
 <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
   <AnimatedSection>
    <h3 className="text-lg font-bold text-green-700 mb-2">{title}</h3>
    <p className="text-gray-700 text-sm flex-1 mb-3">{description}</p>
    </AnimatedSection>
  </div>
);

export default function ServicesGrid() {
  return (
    <section className="w-full py-12 bg-[#f7f9fa] flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
}