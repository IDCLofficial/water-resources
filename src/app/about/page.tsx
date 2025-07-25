import { SectionHero } from "@/components/SectionHero";
import { ObjectivesSection } from "@/components/ObjectivesSection";
import CommissionerSection from "@/components/CommissionerSection";
import { StructuresSection } from "@/components/StructuresSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import MissionVisionCard from "@/components/DigitalNews";

export default function AboutUs() {
    return (
        <div className="h-screen bg-white">
            
            {/* Top Hero */}
            <TopHero
                ministryName="Ministry of Water Resources"
                titleLabel="About Us"
            />
            {/* Section Hero */}
            <SectionHero
                aboutText="The Ministry of Water Resources in Imo State serves as a vital engine for public health and economic transformation, especially as the state seeks to ensure sustainable water access. While there's still room for growth and reform, the ministry represents a key opportunity for clean water provision and sustainable development in Imo State.\nThe Ministry of Water Resources in Imo State is a government agency responsible for promoting water infrastructure development and regulating water resources within the state. It is a strategic part of the state's development plan, especially considering Imo's water resource base.\nThe ministry was likely formed from a merger or restructuring of previous departments such as the Ministry of Water, Environment, and sections of Natural Resources or Water Management units.\nOver the years, successive governments in Imo State have recognized the importance of harnessing local water resources like rivers, lakes, and groundwater, which are abundant in the region."
                imgSrc="/images/waterteam.png"
                altText="Our Story - Imo State Ministry of Water Resources conference event"
            />
            {/* Commissioner Section */}
            <CommissionerSection
                imageSrc="/images/commisioner.png"
                imageAlt="Hon. Ozo Obinna Francis Ogwuegbu, Commissioner of Water Resources"
                title="Hon. Ozo Obinna Francis Ogwuegbu"
                bio="Hon. Ozo Obinna Francis Ogwuegbu, hailing from Ihitte Clan in Imo State, serves as the Honourable Commissioner for Water Resources. He oversees water supply, sanitation, and hygiene initiatives, working to ensure clean and sustainable water access for all citizens."
                details="Under his leadership, the Imo State Government has revitalized the Otammiri Water Headworks, providing clean water to rural areas after 28 years of neglect. Commissioner Ogwuegbu is committed to advancing public health, water infrastructure, and sustainable resource management across Imo State."
                buttonText="Learn More"
                
            />
            <MissionVisionCard />
            {/* Objectives Section */}
            <ObjectivesSection />
            {/* Structures Section */}
            <StructuresSection
                imgSrc="/images/building.png"
            />
            {/* CTASection */}
            <CTASection
                heading="Join our mission for clean and sustainable water in Imo State"
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            {/* Footer */}
            <Footer />
        </div>
    )
}