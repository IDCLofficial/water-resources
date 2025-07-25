import Image from "next/image";

export default function OngoingProjects() {
  return (
    <section className="w-full py-16 bg-white flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-3xl lg:text-4xl font-bold">Ongoing Projects: Ministry of Water Resources</h2>
        <p className="text-gray-700">The Ministry of Water Resources is actively implementing flagship projects and initiatives to ensure clean, safe, and sustainable water supply and improved sanitation across Imo State. These efforts are focused on expanding access to water, promoting public health, and fostering community engagement through strategic partnerships.</p>
        <div className="space-y-4 text-gray-700">
          <div>
            <span className="font-bold">Sustainable Urban/Rural Water Supply, Sanitation and Hygiene (SURWASH) Program:</span> A comprehensive initiative to improve water supply and sanitation services in both urban and rural communities, supported by the World Bank.
          </div>
          <div>
            <span className="font-bold">Water Consumer’s Association:</span> Empowering local communities to participate in water management, ensuring accountability and sustainability of water resources.
          </div>
          <div>
            <span className="font-bold">Collaboration with World Bank:</span> Strategic partnership to fund and implement large-scale water infrastructure and sanitation projects, enhancing service delivery and sector reforms.
          </div>
        </div>
        <div className="flex gap-6 mt-6">
          <Image src="/images/water1.png" alt="SURWASH Program" width={120} height={80} className="rounded" />
          <Image src="/images/water3.png" alt="World Bank Collaboration" width={120} height={80} className="rounded" />
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md h-72 relative rounded-lg overflow-hidden">
          <Image src="/images/water3.png" alt="Ongoing Projects" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
} 