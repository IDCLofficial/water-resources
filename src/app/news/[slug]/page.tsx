import Image from "next/image";
import NewsHeroSection from "./NewsHeroSection";
import NewsBodySection from "./NewsBodySection";

const latestNews = [
  {
   
  title: "The Honourable Commissioner for Water Resources, Imo State, has officially commissioned the Oguta Water Dam project, marking a significant milestone in the state's water infrastructure development. The dam will provide clean water to thousands of residents and support agricultural activities.",
  date: "30th May 2025",
  img: "/images/dam.jpeg"
},
];

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      {/* Section 1: Hero + Body */}
      <section className="relative w-full pb-[180px]">
        <NewsHeroSection />
        <NewsBodySection>
          {/* Title & Meta */}
          <div className="relative z-10 w-full flex justify-center pb-2">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/dam.jpeg"
                alt="Oguta Dam Commissioned"
                width={900}
                height={400}
                className="object-cover w-full h-[260px] md:h-[320px]"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Honourable Commissioner Commissions Oguta Water Dam Project
            </h1>
            <p className="text-gray-500 text-sm">30th May 2025 • Latest Updates</p>
          </div>

          {/* Main Content */}
          <div>
            <p className="text-gray-700 mb-6">
              The Honourable Commissioner for Water Resources, Imo State, has officially commissioned the Oguta Water Dam project, marking a significant milestone in the state&apos;s water infrastructure development. The dam will provide clean water to thousands of residents and support agricultural activities across the region.
            </p>
            <p className="text-gray-700 mb-6">
              This achievement is part of the state government&apos;s broader strategy to ensure sustainable water access and improved sanitation. The dam is designed not only to serve residential needs but also to boost irrigation and support farming communities in Imo State.
            </p>

            <div className="w-full flex justify-center my-8">
              <div className="w-full max-w-md rounded-xl overflow-hidden">
                <Image
                  src="/images/water1.png"
                  alt="Water Infrastructure"
                  width={600}
                  height={300}
                  className="object-cover w-full h-64"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="font-semibold mb-2">Key Highlights:</h2>
                <ul className="list-disc ml-6 text-gray-700 mb-6">
                  <li>Official commissioning of the Oguta Water Dam by the Honourable Commissioner.</li>
                  <li>Access to clean water for thousands of residents in Oguta and neighboring areas.</li>
                  <li>Support for agricultural irrigation and enhanced food production.</li>
                  <li>Strengthening of the state&apos;s long-term water sustainability strategy.</li>
                  <li>Boost to public health through clean water supply and improved hygiene.</li>
                </ul>
              </div>
              <div className="flex-1 flex items-center">
                <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-800">
                  <span className="font-bold">
                    &ldquo;The commissioning of this dam is more than an infrastructure win—it&apos;s a victory for every Imo citizen who deserves safe, accessible water.&rdquo;
                  </span>
                </blockquote>
              </div>
            </div>

            <p className="text-gray-700 mt-6">
              The Ministry of Water Resources reaffirmed its commitment to expanding water access through innovation, public-private partnerships, and active community engagement. Residents expressed gratitude, emphasizing the positive impact on health, farming, and economic development.
            </p>
            <p className="text-gray-700 mt-2">
              With projects like the Oguta Dam, Imo State is positioning itself as a model for effective water resource management in Nigeria.
            </p>
          </div>
        </NewsBodySection>
      </section>

      {/* Section 2: Latest News */}
      <div className="w-full bg-[#181c23] py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-xl font-semibold mb-6">LATEST NEWS</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {latestNews.map((item, idx) => (
              <div key={idx} className="bg-[#232323] rounded-xl overflow-hidden flex-1 min-w-[220px] max-w-xs">
                <div className="relative w-full h-28">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-white text-xs font-semibold mb-2 line-clamp-2">{item.title}</div>
                  <div className="text-gray-400 text-[10px]">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Footer (if needed) */}
    </div>
  );
}
