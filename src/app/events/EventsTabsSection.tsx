"use client";
import { useState } from "react";
import Image from "next/image";

const events = [
  {
    name: "Oguta Water Dam Commissioning Ceremony",
    image: "/images/dam.jpeg",
    description:
      "A landmark event marking the official commissioning of the Oguta Water Dam project. This ceremony celebrates the completion of infrastructure that will provide clean water to thousands of residents and support agricultural activities in Imo State."
  },
  {
    name: "Community Water Conservation Workshop",
    image: "/images/waterteam.png",
    description: "An educational workshop held in collaboration with local communities to promote water conservation practices, sustainable water management, and the importance of protecting water resources for future generations."
  },
  {
    name: "Rural Water Access Initiative Launch",
    image: "/images/water1.png",
    description: "The official launch of a comprehensive initiative to expand clean water access to underserved rural communities across Imo State, featuring borehole construction and community water management training."
  },
  {
    name: "Water Quality Testing Awareness Campaign",
    image: "/images/water2.png",
    description: "A statewide campaign to raise awareness about water quality standards, testing procedures, and the importance of safe drinking water. Includes demonstrations and community engagement activities."
  },
  {
    name: "World Water Day Celebration",
    image: "/images/water3.png",
    description: "Annual celebration of World Water Day featuring educational programs, community outreach, and policy discussions focused on sustainable water management and universal access to clean water in Imo State."
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