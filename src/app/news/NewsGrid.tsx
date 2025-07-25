import Image from "next/image";
import Link from "next/link";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const newsList = [
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

export default function NewsGrid() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {newsList.map((item, idx) => (
        <Link
          key={idx}
          href={`/news/${slugify(item.title)}`}
          className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition cursor-pointer"
        >
          <div className="relative w-full h-48">
            <Image src={item.image} alt={item.title} fill className="object-cover" />
            <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded font-semibold">Top News</span>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{item.title}</h3>
            <p className="text-gray-700 text-sm mb-4 line-clamp-2">{item.description}</p>
            <span className="text-gray-500 text-xs mt-auto">{item.date}</span>
          </div>
        </Link>
      ))}
    </div>
  );
} 