import Image from "next/image";

export default function SkillUpSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-8 px-4">
      {/* Left: Green Card */}
     <div className="w-[90%] md:w-[40%]">
        <img src="/images/waterteam.png" alt="SkillUp Imo " />
     </div>
      {/* Right: Text and Buttons */}
      <div className="w-[90%] md:w-[55%] flex-1 flex flex-col justify-center items-start max-w-2xl px-2">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">Strategic Objectives
        </h2>
        <p className="text-gray-500 text-lg mb-8 max-w-[700px]">
          The Ministry of Water Resources, Imo State, is dedicated to increasing access to clean water, improving sanitation services, developing water infrastructure, managing water quality, supporting agriculture through irrigation, and building capacity for sustainable water management. Our strategic goals focus on ensuring safe, sufficient, and affordable water for all citizens, promoting public health, and fostering partnerships for effective water resources development.
        </p>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <button style={{paddingTop: '.5rem', paddingBottom: '.5rem'}} className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-2 rounded text-lg transition-colors min-w-[150px]">See More</button>
          <button style={{paddingTop: '.5rem', paddingBottom: '.5rem'}} className="border border-green-700 text-green-700 font-semibold px-8 py-2 rounded text-lg hover:bg-green-50 transition-colors min-w-[180px]">Contact Us</button>
        </div>
      </div>
    </section>
  );
} 