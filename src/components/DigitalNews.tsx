import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function MissionVisionCard() {
  return (
    <section className="w-full flex justify-center py-16 bg-[#f7f9fa]">
      <AnimatedSection>
      <div className="bg-white rounded-3xl shadow-xl p-10 w-[80vw] flex flex-col gap-8 items-center">
        <h2 className="text-3xl font-bold text-green-700 mb-2 text-center">Ministry of Water Resources, Imo State</h2>
        <div className="w-full flex flex-col md:flex-row gap-6">
          <div className="bg-green-50 rounded-xl p-6 shadow-sm w-full">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Mission Statement</h3>
            <p className="text-gray-700 text-base">
              To ensure sustainable access to safe and clean water for all residents of Imo State through effective management of water resources, infrastructure development, and community engagement, thereby enhancing public health, economic growth, and environmental sustainability.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 shadow-sm w-full">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Vision Statement</h3>
            <p className="text-gray-700 text-base">
              To be a leading institution in the sustainable management of water resources, ensuring universal access to potable water, promoting water conservation, and fostering resilient communities for present and future generations in Imo State.
            </p>
          </div>
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
} 