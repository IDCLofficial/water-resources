import AboutMandateSection from "@/components/AboutMandateSection";
import HeroSection from "@/components/HeroSection";
import CommissionerSection from "@/components/CommissionerSection";
import QuickLinksSection from "@/components/QuickLinksSection";
import SkillUpSection from "@/components/SkillUpSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import Stats from "@/components/Stats";
import FeaturedPartners from "@/components/FeaturedPartners";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>

     
      {/* hero section */}
      <HeroSection
        backgroundVideo="/video/home.mp4"
        overlayText="Imo State Ministry of Water Resources"
        heading="Empowering Water Management. "
        subheading="Harnessing Water Resources. "
        description="Ensuring sustainable water management, advancing water infrastructure, and empowering Imo citizens — through clean water access, resource protection, and inclusive water policies."
      />
      {/* About Mandate Section */}
      <AboutMandateSection
        label="ABOUT US"
        title="Our Mandate —"
        subheading="Ministry of Water Resources"
        description="Welcome to the Imo State Ministry of Water Resources. As a key driver of public health and economic transformation, our Ministry plays a critical role in positioning Imo State as a leader in sustainable water management. In a time of climate adaptation and resource stewardship, we are committed to fostering clean water access, attracting investment in water infrastructure, and creating jobs through a robust policy framework and forward-thinking leadership.Established through the restructuring of former water, environment, and natural resource departments, this Ministry brings focus to the vast opportunities in Imo’s water landscape—rivers, lakes, groundwater, and more."
        buttonText="Discover More"
        image1="/images/water1.png"
        image2="/images/water2.png"
      />

      {/* Commissioner Section */}
      <CommissionerSection
        imageSrc="/images/commisioner.png"
        imageAlt="Hon. Ozo Obinna Francis Ogwuegbu, Commissioner of Water Resources in Imo State"
        title="About The Commissioner"
        bio="Honourable Ozo Obinna Francis Ogwuegbu serves as the Honourable Commissioner for Water Resources. He is responsible for overseeing water supply, sanitation, and hygiene initiatives across the state."
        details="Under his leadership, the Imo State Government has revitalized the Otammiri Water Headworks, providing clean water to rural areas after 28 years of neglect. Commissioner Ogwuegbu is dedicated to ensuring sustainable water management and improving public health through enhanced water infrastructure and services."
        buttonText="Our Team"
      />
      <div className="bg-white">

      {/* Skill Up Section */}
      <SkillUpSection />
      {/* Quick Links Section */}
      <QuickLinksSection />
      {/* Latest News Section */}
      <LatestNewsSection />
      </div>

      {/* Stats Section */}
      <Stats />
      {/* Featured Partners Section */}
      <FeaturedPartners />
      {/* CTASection */}
      <CTASection
        heading="Join Imo's Clean Water Revolution!"
        subtext="Be part of our mission for safe, sustainable, and accessible water for every community."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      {/* Footer */}
      <Footer />
    </>
  );
}
