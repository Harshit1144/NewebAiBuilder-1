import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import PowerfulFeatures from "@/components/PowerfulFeatures";
import Pricing from "@/components/Pricing";
import BuiltInFeatures from "@/components/BuiltInFeatures";
import AICapabilities from "@/components/AICapabilities";
import TechInfrastructure from "@/components/TechInfrastructure";
import CompetitorComparison from "@/components/CompetitorComparison";
import DemoSection from "@/components/DemoSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturesSection />
        <PowerfulFeatures />
        <HowItWorks />
        <TechInfrastructure />
        <AICapabilities />
        <DemoSection />
        <BuiltInFeatures />
        <CompetitorComparison />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
