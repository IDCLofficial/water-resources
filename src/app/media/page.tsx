"use client";

import React, { useState, useEffect } from "react";
import MediaHeroSection from "./MediaHeroSection";
import MediaGalleryGrid from "./MediaGalleryGrid";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import MediaSearchBar from "./MediaSearchBar";
import { fetchMediaData } from "./mediaData";

interface MediaItem {
  image: string;
  title: string;
  isVideo: boolean;
}

export default function MediaPage() {
  const [search, setSearch] = useState("");
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMedia = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMediaData(process.env.NEXT_PUBLIC_MINISTRY_ID);
        setMediaItems(data);
      } catch (err) {
        console.error('Failed to load media:', err);
        setError('Failed to load media. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadMedia();
  }, []);

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
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 text-lg font-semibold py-12">
              {error}
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center text-gray-500 text-lg font-semibold py-12">
              {search ? 'No results found' : 'No media available'}
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
