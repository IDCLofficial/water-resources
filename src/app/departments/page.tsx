import UnitsTabsSection from "./UnitsTabsSection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import CTASection from "@/components/CTASection";

export default function UnitsPage() {
  return (
    <div className="bg-white">
     {/* Top Hero */}
     <TopHero
                ministryName="Departments Driving Our Digital Vision"
                titleLabel="Departments"
            />
      <UnitsTabsSection />
    
     <CTASection
      heading="Join Imo's Clean Water Revolution!"
      subtext="Be part of our mission for safe, sustainable, and accessible water for every community."
      buttonLabel="Contact Us"
      buttonHref="/contact-us"
     />
      <Footer />
    </div>
  );
}
