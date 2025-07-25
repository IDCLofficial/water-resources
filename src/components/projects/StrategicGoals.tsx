import Image from "next/image";

export default function StrategicGoals() {
  return (
    <section className="w-full py-16 bg-white flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20 border-t">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-3xl lg:text-4xl font-bold">Strategic Goals (2025–2030)</h2>
        <p className="text-gray-700">The Ministry of Water Resources is committed to ensuring clean, safe, and sustainable water supply and improved sanitation for all citizens of Imo State. Our strategic goals are designed to promote public health, support economic development, and protect the environment through effective water resources management.</p>
        <div className="space-y-4 text-gray-700">
          <div>
            <span className="font-bold">Increase Access to Clean Water:</span> Expand water supply infrastructure to reach more communities and ensure reliable, safe water for all.
          </div>
          <div>
            <span className="font-bold">Improve Sanitation Services:</span> Promote and implement sanitation and hygiene programs to protect public health and end open defecation.
          </div>
          <div>
            <span className="font-bold">Enhance Water Quality Management:</span> Regularly monitor and improve water quality to provide safe drinking water and protect freshwater ecosystems.
          </div>
          <div>
            <span className="font-bold">Promote Sustainable Water Resources Management:</span> Encourage conservation, efficient use, and protection of water resources for present and future generations.
          </div>
          <div>
            <span className="font-bold">Support Agriculture through Irrigation:</span> Develop and maintain irrigation systems to boost agricultural productivity and food security.
          </div>
          <div>
            <span className="font-bold">Strengthen Partnerships and Community Engagement:</span> Collaborate with local communities, development partners, and the private sector to achieve water and sanitation goals.
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md h-72 relative rounded-lg overflow-hidden">
          <Image src="/images/dam.jpeg" alt="Strategic Goals" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
} 