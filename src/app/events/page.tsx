import SecondTopHero from "@/components/SecondTopHero";
import EventsListSection from "./EventsListSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function EventsPage() {
  return (
    <div className="bg-white">
      <SecondTopHero
      headingText="Empowering Imo Through Events & Innovation"
      />
      <EventsListSection />
      <CTASection
        heading="Ready to Experience the New Imo?"
        subtext="Discover our vision for an inclusive, empowered, and connected state."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}
