import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import OngoingProjects from "@/components/projects/Projects";

export default function Projects() {
    return (
        <div>

            <TopHero
                ministryName="Driving Water Security and Environmental Stewardship in Imo"
                titleLabel="Projects"
            />

            {/* SkillUp Project */}
            <OngoingProjects />

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