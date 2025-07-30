"use client";

import React, { useState } from "react";
import MediaHeroSection from "./MediaHeroSection";
import MediaGalleryGrid from "./MediaGalleryGrid";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import MediaSearchBar from "./MediaSearchBar";
const mediaItems = [
  {
    image: "/images/dam.jpeg",
    title: "Commissioning of Oguta Water Dam Project",
    isVideo: false,
  },
  {
    image: "/images/water1.png",
    title: "Clean Water Supply to Rural Communities",
    isVideo: false,
  },
  {
    image: "/images/waterteam.png",
    title: "Water Quality Testing Initiative in Imo State",
    isVideo: true,
  },
  {
    image: "/images/usaid.png",
    title: "USAID Partnership for Water Infrastructure Development",
    isVideo: false,
  },
  {
    image: "/images/worldbank.png",
    title: "World Bank Supported Water Project Launch",
    isVideo: true,
  },
  {
    image: "/images/initiatives.png",
    title: "Community Water Conservation Campaign",
    isVideo: false,
  },
  {
    image: "/images/Imo-House-of-Assembly.webp",
    title: "Policy Dialogue on Water Resource Management",
    isVideo: false,
  },
  {
    image: "/images/commisioner.png",
    title: "Commissioner’s Address on Water Sustainability",
    isVideo: false,
  },
  {
    image: "/images/gwsp.jpeg",
    title: "Global Water Security Program Launch in Imo State",
    isVideo: false,
  },
];

export default function MediaPage() {
  const [search, setSearch] = useState("");

  const filteredItems = mediaItems.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen w-full bg-[#F7F9FA] flex flex-col">
      <MediaHeroSection
        title="Watch Us Transform the Water Sector"
        subtitle="Explore our gallery of photos, videos, and press releases showcasing our commitment to transforming the water sector in Imo State."
        backgroundImage="/images/waterteam.png"
        searchBar={<MediaSearchBar placeholder="Search media..." onSearch={setSearch} />}
      />
      
      <section className="w-full max-w-7xl mx-auto py-12 px-4">
        <div className="mt-8">
          {filteredItems.length === 0 ? (
            <div className="text-center text-gray-500 text-lg font-semibold py-12">
              No results found
            </div>
          ) : (
            <MediaGalleryGrid items={filteredItems} />
          )}
        </div>
      </section>
      <CTASection
        heading="Join Us in Transforming the Water Sector"
        subtext="Be part of our mission to create a sustainable, accessible, and efficient water supply system for all communities in Imo State."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer />
    </main>
  );
}
