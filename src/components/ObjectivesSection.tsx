export const ObjectivesSection = () => {
    const objectives = [
        {
            title: "Clean Water Access",
            description: "Increase access to safe and affordable water for all communities in Imo State."
        },
        {
            title: "Improved Sanitation Services",
            description: "Promote and expand sanitation and hygiene programs to protect public health."
        },
        {
            title: "Water Quality Management",
            description: "Ensure the supply of safe drinking water through regular monitoring and quality control."
        },
        {
            title: "Sustainable Water Resources Management",
            description: "Promote the sustainable use and conservation of water resources for present and future generations."
        },
        {
            title: "Flood and Irrigation Management",
            description: "Implement effective flood control and irrigation systems to support agriculture and protect communities."
        },
        {
            title: "Public Health and Awareness",
            description: "Enhance public health through WASH (Water, Sanitation, and Hygiene) education and community engagement."
        }
    ];

    const coreValues = [
        "Accountability",
        "Sustainability",
        "Innovation",
        "Transparency",
        "Collaboration",
        "Service Excellence"
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-8">
                {/* Imo State Ministry of Industry, Mines, and Solid Minerals Objectives */}
                <div className="mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-[43px] font-medium text-center mb-12">
                    Objectives of Imo State&apos;s Ministry of Water Resources
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {objectives.map((objective, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-md text-center">
                                <h3 className="font-medium text-[22px] mb-3">
                                    {objective.title}
                                </h3>
                                <p className="text-dark-primary-body text-[1rem]">
                                    {objective.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Core Values */}
                <div>
                    <h2 className="text-[43px] font-medium text-center mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                        {coreValues.slice(0, 4).map((value, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                                <span className="font-bold text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-6">
                        {coreValues.slice(4).map((value, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center w-48">
                                <span className="font-bold text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 