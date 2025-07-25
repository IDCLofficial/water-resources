import NewsSidebar from "./NewsSidebar";
import NewsSearchBar from "./NewsSearchBar";
import NewsGrid from "./NewsGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SecondTopHero from "@/components/SecondTopHero";

export default function NewsPage() {
  return (
    <div className="bg-white">
      <SecondTopHero
      headingText="Empowering Imo’s Water Resources"
      />
      <NewsSearchBar />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 pb-16">
        <NewsSidebar />
        <div className="flex-1">
          <NewsGrid />
        </div>
      </div>
          
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
