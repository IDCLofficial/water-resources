import EventsListSection from "./EventsListSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";

export default function EventsPage() {
  return (
    <div className="bg-white">
      {/* top hero */}
      <TopHero ministryName="Accessible Water for All Imo Citizens" titleLabel="Events" />
      <EventsListSection />
      <CTASection
          heading="Join Us in Transforming the Water Sector"
          subtext="Be part of our mission to create a quality water sector."
          buttonLabel="Contact Us"
          buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}
