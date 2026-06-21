import { CtaSection } from "@/components/CtaSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <FeatureGrid />
      <CtaSection />
    </>
  );
}
