'use client'
import Image from "next/image";

const partners = [
  { src: "/images/unicef-water.png", alt: "unicef-water" },
  { src: "/images/worldbank.png", alt: "worldbank" },
  { src: "/images/unicef.png", alt: "unicef" },
  { src: "/images/cocacola.jpeg", alt: "cocacola" },
  { src: "/images/gwsp.jpeg", alt: "gwsp" },
  { src: "/images/unicef.png", alt: "unicef" },
  { src: "/images/usaid.png", alt: "usaid" },
];

export default function FeaturedPartners() {
  return (
    <section className="w-full py-20 bg-[#f7f9fa]">
      <h2 className="text-3xl md:text-[43px] font-medium text-center mb-10">Featured Partners</h2>

      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-scroll">
          {partners.concat(partners).map((partner, idx) => (
            <div key={idx} className="inline-block mx-8">
              <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center w-[150px] h-[80px]">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
