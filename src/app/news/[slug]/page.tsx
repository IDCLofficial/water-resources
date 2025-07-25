import Image from "next/image";
import NewsHeroSection from "./NewsHeroSection";
import NewsBodySection from "./NewsBodySection";

const latestNews = [
  {
    title: "Imo State Expands Access to Clean Water in Rural Communities",
    date: "JUNE 10, 2025",
    img: "/images/water1.png",
  },
  {
    title: "Commissioning of Oguta Water Dam Project",
    date: "MAY 28, 2025",
    img: "/images/dam.jpeg",
  },
  {
    title: "Imo State Launches Water Quality Testing Initiative",
    date: "MAY 15, 2025",
    img: "/images/waterteam.png",
  },
];

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      {/* Section 1: Hero + Body */}
      <section className="relative w-full pb-[180px]"> {/* pb-[180px] ensures body does not overlap next section */}
        <NewsHeroSection/>
        <NewsBodySection>
          {/* Title & Meta */}
          <div className="relative z-10 w-full flex justify-center pb-2">
  <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
    <Image src={'/images/dam.jpeg'} alt="News Hero" width={900} height={400} className="object-cover w-full h-[260px] md:h-[320px]" />
  </div>
</div>
<div className="text-center">
  <h1 className="text-2xl md:text-3xl font-bold mb-2">Imo State Commissions Oguta Water Dam to Boost Water Supply</h1>
</div>

{/* Main Content */}
<div>
  <p className="text-gray-700 mb-6">
    The Imo State Ministry of Water Resources has successfully commissioned the Oguta Water Dam, a landmark project aimed at improving access to clean and reliable water for thousands of residents. This initiative is part of the state government's commitment to sustainable water management and community well-being.
  </p>
  <p className="text-gray-700 mb-6">
    The new dam will not only provide potable water to rural and urban communities but also support agricultural activities and local industries. The Ministry, under the leadership of the Honourable Commissioner, has prioritized water infrastructure upgrades, water quality testing, and the expansion of water supply networks across Imo State.
  </p>
  
  <div className="w-full flex justify-center my-8">
    <div className="w-full max-w-md rounded-xl overflow-hidden">
      <Image src="/images/water1.png" alt="News Detail" width={600} height={300} className="object-cover w-full h-64" />
    </div>
  </div>

  <div className="flex flex-col md:flex-row gap-8">
    <div className="flex-1">
      <h2 className="font-semibold mb-2">Key Achievements and Focus Areas:</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-6">
        <li>Commissioning of the Oguta Water Dam to increase water supply capacity.</li>
        <li>Expansion of clean water access to rural and underserved communities.</li>
        <li>Implementation of regular water quality testing and monitoring programs.</li>
        <li>Community sensitization on water conservation and hygiene practices.</li>
        <li>Collaboration with international partners for sustainable water projects.</li>
      </ul>
    </div>
    <div className="flex-1 flex items-center">
      <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-800">
        <span className="font-bold">“Access to clean water is a fundamental right. Our administration is dedicated to ensuring every community in Imo State enjoys safe and sustainable water supply.”</span>
      </blockquote>
    </div>
  </div>

  <p className="text-gray-700 mt-6">
    The Ministry continues to work closely with local and international organizations to enhance water infrastructure, promote efficient water use, and safeguard water resources for future generations. Residents are encouraged to support these efforts by adopting water-saving habits and participating in community water management programs.
  </p>
  <p className="text-gray-700 mt-2">
    For more updates on water projects and initiatives, follow the Imo State Ministry of Water Resources on official channels.
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
      {/* Section 3: Footer */}
    </div>
  );
} 