"use client";
import { useState } from "react";
import Image from "next/image";

const events = [
  {
    name: "Mining Stakeholders Forum",
    image: "/images/monsm-news1.jpg",
    description:
      "A forum bringing together miners, regulators, and community leaders to discuss best practices, compliance, and sustainable mining in Imo State. Includes panel discussions, Q&A, and networking opportunities."
  },
  {
    name: "Industrial Parks Launch",
    image: "/images/building.png",
    description: "Official launch event for new industrial parks across Imo State, featuring site tours, investor presentations, and government policy briefings."
  },
  {
    name: "Revenue Digitization Workshop",
    image: "/images/monsm-news2.webp",
    description: "A hands-on workshop focused on the implementation of digital revenue collection systems in the mining and industrial sectors, in partnership with the Imo State Internal Revenue Service (IIRS)."
  },
  {
    name: "Environmental Compliance Day",
    image: "/images/stock6.jpg",
    description: "A day dedicated to promoting environmental best practices in mining and industry, with training sessions on compliance, remediation, and monitoring."
  },
  {
    name: "Women in Mining & Industry Summit",
    image: "/images/heroImage.png",
    description: "A summit celebrating and empowering women in the mining and industrial sectors, featuring keynote speakers, mentorship sessions, and networking."
  },
];

export default function EventsTabsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = events[activeIdx];

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-16 px-4">
      {/* Tabs */}
      <div className="w-full md:w-1/4 border-r pr-4">
        <ul className="space-y-2">
          {events.map((event, idx) => (
            <li key={event.name}>
              <button
                className={`w-full text-left px-4 py-2 rounded font-semibold border ${activeIdx === idx ? 'bg-green-600 text-white' : 'bg-white text-black border-transparent'} transition`}
                onClick={() => setActiveIdx(idx)}
              >
                {event.name}
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