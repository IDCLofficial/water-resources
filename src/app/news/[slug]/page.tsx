import Image from "next/image";
import NewsHeroSection from "./NewsHeroSection";
import NewsBodySection from "./NewsBodySection";

const latestNews = [
  {
    title: "Imo State Expands Rural Water Access to 50 Communities",
    date: "MAY 15, 2025",
    img: "/images/water1.png",
  },
  {
    title: "Water Quality Testing Initiative Launched Across Imo State",
    date: "APRIL 28, 2025",
    img: "/images/waterteam.png",
  },
  {
    title: "Oguta Water Dam Project Reaches 80% Completion",
    date: "APRIL 10, 2025",
    img: "/images/dam.jpeg",
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
  <h1 className="text-2xl md:text-3xl font-bold mb-2">Imo State Achieves Major Milestone in Water Infrastructure Development</h1>
</div>

{/* Main Content */}
<div>
  <p className="text-gray-700 mb-6">
    The Imo State Ministry of Water Resources has achieved a significant breakthrough in water infrastructure development with the completion of the Oguta Water Dam project. This landmark initiative represents a major step forward in the state&apos;s commitment to providing sustainable access to clean water for all residents.
  </p>
  <p className="text-gray-700 mb-6">
    Under the leadership of Governor Hope Uzodinma, the Ministry has successfully implemented comprehensive water management strategies, including dam construction, rural water schemes, and quality testing programs. Through strategic partnerships with international organizations and community engagement, Imo State is setting new standards for water resource management in Nigeria.
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
        <li>Completion of the Oguta Water Dam project providing water to thousands of residents.</li>
        <li>Expansion of rural water access to 50 underserved communities across the state.</li>
        <li>Implementation of comprehensive water quality testing and monitoring programs.</li>
        <li>Establishment of community water management committees for sustainability.</li>
        <li>Partnership with World Bank for SURWASH program implementation.</li>
      </ul>
    </div>
    <div className="flex-1 flex items-center">
      <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-800">
        <span className="font-bold">&ldquo;Access to clean water is a fundamental right. Our administration is committed to ensuring every community in Imo State enjoys safe and sustainable water supply.&rdquo;</span>
      </blockquote>
    </div>
  </div>

  <p className="text-gray-700 mt-6">
    The Ministry continues to work closely with local and international partners to enhance water infrastructure, promote efficient water use, and safeguard water resources for future generations. Community engagement programs have been instrumental in ensuring the success of these initiatives.
  </p>
  <p className="text-gray-700 mt-2">
    With these achievements, Imo State is well on its way to becoming a model for sustainable water resource management in Nigeria, demonstrating the importance of infrastructure development, community participation, and international collaboration.
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