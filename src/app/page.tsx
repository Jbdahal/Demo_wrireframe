import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { OurStory } from "@/components/sections/OurStory";
import { ChallengeFlow } from "@/components/sections/ChallengeFlow";
import { TwoSides } from "@/components/sections/TwoSides";
import { ProvidersSection } from "@/components/sections/ProvidersSection";
import { AgenciesSection } from "@/components/sections/AgenciesSection";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { Challenges } from "@/components/sections/Challenges";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurStory />
        <ChallengeFlow />
        <TwoSides />
        <ProvidersSection />
        <AgenciesSection />
        <FeatureShowcase />
        <Testimonials />
        <Challenges />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
