import Image from "next/image";

interface StructuresSectionProps {
    imgSrc: string;
}

export const StructuresSection = ({imgSrc}: StructuresSectionProps) => {
    const departments = {
      row1: [
  {
    title: "Department of Dams and Reservoir Operations",
    description: "Responsible for planning, constructing, and maintaining dams and reservoirs to support agriculture, water supply, and other uses."
  },
  {
    title: "Department of Finance and Accounts",
    description: "Handles financial management, budgeting, and accounting for the ministry."
  },
  {
    title: "Department of General Services",
    description: "Provides administrative support and maintenance services for the ministry."
  },
],
row2: [
  {
    title: "Department of Human Resource Management",
    description: "Oversees personnel management, training, and capacity building for ministry staff."
  },
  {
    title: "Department of Hydrology",
    description: "Conducts hydrological studies, monitoring, and research to inform water resources management decisions."
  },
  
],
    }

    return (
      <section className="w-full bg-[#1D1D1D] py-20">
      <div className="max-w-7xl mx-auto px-8 text-center flex flex-col items-center">
          {/* Header */}
          <h2 className="text-[43px] font-medium text-white">
              Our Structure
          </h2>
          <p className="text-white text-[1rem] mb-16 w-[40%] mx-auto">
              The Ministry is divided into specialized departments that collectively drive Imo&apos;s water resources management and public health agenda.
          </p>

          {/* Main Image */}
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg mb-20">
              <Image
                  src={imgSrc}
                  alt="Ministry Building"
                  fill
                  className="object-cover"
                  priority
              />
          </div>

          {/* Department Cards Grid */}
          <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-row gap-2 w-full justify-between">
                  {departments.row1.map((department, index) => (
                      <div key={index} className="flex-1 bg-white p-8 shadow-md border border-gray-200">
                          <h3 className="font-bold text-[22px] text-dark-primary mb-3">
                              {department?.title}
                          </h3>
                          <p className="text-dark-secondary-body text-[16px]">
                              {department?.description}
                          </p>
                      </div>
                  ))}
              </div>
              <div className="flex flex-row w-full gap-2">
                  {departments.row2.map((department, index) => (
                      <div key={index} className="flex-1 bg-white p-8 shadow-md border border-gray-200">
                          <h3 className="font-bold text-[22px] text-dark-primary mb-3">
                              {department?.title}
                          </h3>
                          <p className="text-dark-secondary-body text-[16px]">
                              {department?.description}
                          </p>
                      </div>
                  ))}
              </div>
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="/departments"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-12 py-3 rounded text-lg transition-colors shadow-md"
            >
              See More
            </a>
          </div>
      </div>
  </section>
    );
}; 