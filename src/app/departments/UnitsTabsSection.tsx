"use client"

import { useState } from "react";
import Image from "next/image";

const departments = [
  {
    name: "Department of Dams and Reservoir Operations",
    image: "/images/water1.png",
    description: "Responsible for planning, constructing, and maintaining dams and reservoirs to support agriculture, water supply, and other uses."
  },
  {
    name: "Department of Finance and Accounts",
    image: "/images/water2.png",
    description: "Handles financial management, budgeting, and accounting for the ministry."
  },
  {
    name: "Department of General Services",
    image: "/images/water3.png",
    description: "Provides administrative support and maintenance services for the ministry."
  },
  {
    name: "Department of Human Resource Management",
    image: "/images/waterteam.png",
    description: "Oversees personnel management, training, and capacity building for ministry staff."
  },
  {
    name: "Department of Hydrology",
    image: "/images/water5.jpg",
    description: "Conducts hydrological studies, monitoring, and research to inform water resources management decisions."
  },
  {
    name: "Department of Internal Audit",
    image: "/images/water2.png",
    description: "Conducts internal audits to ensure financial transparency and accountability."
  },
  {
    name: "Department of Irrigation & Drainage",
    image: "/images/water3.png",
    description: "Promotes irrigation development and drainage management to support agriculture and water conservation."
  },
  {
    name: "Department of Procurement",
    image: "/images/water1.png",
    description: "Handles procurement of goods and services for the ministry."
  },
  {
    name: "Department of Reform Coordination and Service Improvement",
    image: "/images/water2.png",
    description: "Coordinates reform initiatives and service improvement programs to enhance ministry efficiency."
  },
  {
    name: "Department of River Basin Operations and Inspectorate",
    image: "/images/dam.jpeg",
    description: "Oversees river basin development authorities and ensures compliance with regulations."
  },
  {
    name: "Department of Special Duties",
    image: "/images/waterteam.png",
    description: "Handles special projects and initiatives assigned by the ministry's leadership."
  },
  {
    name: "Department of Water Quality Control & Sanitation",
    image: "/images/water2.png",
    description: "Promotes safe drinking water supply and sanitation services to protect public health."
  },
  {
    name: "Department of Water Resources Planning and Technical Support Services",
    image: "/images/water3.png",
    description: "Conducts research, planning, and technical support for water resources development and management."
  },
  {
    name: "Department of Water Supply and PPP",
    image: "/images/water2.png",
    description: "Promotes public-private partnerships to improve water supply and sanitation services."
  }
];


export default function UnitsTabsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = departments[activeIdx];

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-16 px-4">
      {/* Tabs */}
      <div className="w-full md:w-1/4 border-r pr-4">
        <ul className="space-y-2">
          {departments.map((dept, idx) => (
            <li key={dept.name}>
              <button
                className={`w-full text-left px-4 py-2 rounded font-semibold border transition cursor-pointer
                  ${activeIdx === idx
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-black border-transparent hover:bg-green-50 hover:text-green-700'}
                `}
                onClick={() => setActiveIdx(idx)}
              >
                {dept.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Content */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{active.name}</h2>
        <div className="w-full max-w-xl mb-4">
          <Image src={active.image} alt={active.name} width={600} height={300} className="rounded-xl object-cover" />
        </div>
        <p className="text-gray-700 text-sm md:text-base">{active.description}</p>
      </div>
    </section>
  );
} 