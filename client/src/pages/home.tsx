import { Navbar } from "@/components/navbar";
import { HeroSectionDark } from "@/components/hero-section-dark";
import { HowItWorks } from "@/components/how-it-works";
import { FeaturesSection } from "@/components/features-section";
import { PosDashboard } from "@/components/pos-dashboard";
import { BillingCarousel } from "@/components/billing-carousel";
import { PricingSection } from "@/components/pricing-section";
import { AboutSection } from "@/components/about-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(220,13%,9%)]">
      <Navbar />
      <HeroSectionDark />
      <HowItWorks />
      <FeaturesSection />
      <PosDashboard />
      <BillingCarousel />
      <PricingSection />
      <AboutSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
