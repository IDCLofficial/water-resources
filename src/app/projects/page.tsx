import CTASection from "@/components/CTASection";
import DigitalAgendaSection from "@/components/DigitalNews";
import Footer from "@/components/Footer";
import SecondTopHero from "@/components/SecondTopHero";
import OngoingProjects from "@/components/projects/Projects";

export default function Projects() {
    return (
        <div>
            {/* SecondTop Hero */}  <SecondTopHero headingText="Driving Water Security and Environmental Stewardship in Imo"

 />
          
            {/* SkillUp Project */}
            <OngoingProjects />
            {/* Digital section */}
            <DigitalAgendaSection />
            <CTASection
        heading="Join Imo's Clean Water Revolution!"
        subtext="Be part of our mission for safe, sustainable, and accessible water for every community."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      {/* Footer */}
      <Footer />

        </div>
    )
}