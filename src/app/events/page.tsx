import EventsListSection from "./EventsListSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";

export default function EventsPage() {
  return (
    <div className="bg-white">
      {/* top hero */}
      <TopHero ministryName="Empowering Women, Children, and Communities for a Just and Inclusive Imo" titleLabel="Events" />
      <EventsListSection />
      <CTASection
          heading="Join Us in Empowering Women and Promoting Social Justice"
          subtext="Be part of our mission to create an inclusive, equitable, and supportive Imo State for all women, children, and vulnerable groups."
          buttonLabel="Contact Us"
          buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}
