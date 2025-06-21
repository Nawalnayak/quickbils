import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { FeaturesSection } from "@/components/features-section";
import { PosDashboard } from "@/components/pos-dashboard";
import { BillingCarousel } from "@/components/billing-carousel";
import { AboutSection } from "@/components/about-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <PosDashboard />
      <BillingCarousel />
      <AboutSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
