import Image from "next/image";

interface SectionHeroProps {
    aboutText: string;
    imgSrc: string;
    altText: string;
}

export const SectionHero = ({ aboutText, imgSrc, altText }: SectionHeroProps) => {
    return (
        <section className="w-full py-10 sm:py-20">
            <div className="mx-auto px-4 sm:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    {/* Left Section - Text Content */}
                    <div className="w-full lg:w-1/2 p-4 sm:p-10 rounded-xl" id="section-hero-text">
                        <h2 className="text-2xl sm:text-3xl md:text-[43px] font-medium text-black mb-4 sm:mb-8">
                            About the Ministry of Water Resources
                        </h2>
                        <p className="text-dark-primary-body text-base xl:text-[1rem] leading-7 sm:leading-8">
                            {aboutText}
                        </p>
                    </div>
                    {/* Right Section - Image */}
                    <div
                        className="relative w-full lg:w-[30%] flex items-center justify-center mt-6 lg:mt-0"
                        style={{ height: 'auto' }}
                    >
                        <Image
                            src={imgSrc}
                            alt={altText}
                            className="object-cover rounded-xl h-full"
                            width={400}
                            height={400}
                            priority
                            style={{ height: '100%', maxHeight: 'unset' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}; 