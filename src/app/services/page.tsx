import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <div className="h-screen bg-white">
            
            {/* Top Hero */}
            <TopHero
                ministryName="What we do"
                titleLabel="Services"
            />
            <ServiceCard />
            
            {/* CTASection */}
            <CTASection
        heading="Join Us in Transforming the Water Sector"
        subtext="Be part of our mission to create a sustainable, accessible, and efficient water supply system for all communities in Imo State."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
            {/* Footer */}
            <Footer />
        </div>
    )
}