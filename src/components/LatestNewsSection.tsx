import Image from "next/image";
import Link from "next/link";

const news = [
  {
    title: "Imo Commissioner for Water Resources, Ogwuegbu, Commissions Ezeakpala Water Supply Scheme",
    description: "Hon. Ozo Obinna Francis Ogwuegbu, the Imo State Commissioner for Water Resources, has commissioned the Ezeakpala Water Supply Scheme, providing clean water to thousands of residents and marking a major milestone in the state's water infrastructure revitalization efforts.",
    date: "29th May 2024",
    image: "/images/water1.png",
  },
  {
    title: "Imo State House of Assembly Supports Water and Sanitation Initiatives",
    description: "The Imo State House of Assembly has pledged its support to the Ministry of Water Resources to improve water supply and sanitation services. The Assembly’s Committee on Water Resources met with ministry officials to discuss strategies for expanding access to clean water and ending open defecation.",
    date: "11th June 2024",
    image: "/images/water2.png",
  },
  {
    title: "Imo State Partners with World Bank on SURWASH Program",
    description: "The Ministry of Water Resources has entered into a strategic partnership with the World Bank to implement the Sustainable Urban/Rural Water Supply, Sanitation, and Hygiene (SURWASH) program, aiming to improve water and sanitation services across Imo State.",
    date: "11th November 2024",
    image: "/images/water3.png",
  },
];

export default function LatestNewsSection() {
  return (
    <section className="w-full py-12 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Latest News</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl justify-center mb-8">
        {news.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col w-full max-w-md p-0 overflow-hidden transition hover:shadow-md"
          >
            <div className="w-full h-64 relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-t-2xl"
                sizes="400px"
                priority={idx === 0}
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 tracking-tight uppercase">{item.title}</h3>
              <p className="text-gray-500 text-base mb-6">{item.description}</p>
              <div className="mt-auto font-bold text-black text-base">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/news">
        <button className="bg-green-700 animate-bounce hover:bg-green-800 text-white font-semibold px-12 py-3 rounded text-lg transition-colors">See More</button>
      </Link>
    </section>
  );
} 