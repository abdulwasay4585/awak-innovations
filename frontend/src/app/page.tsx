import { Hero } from "@/components/home/Hero";
import { Statistics } from "@/components/home/Statistics";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <FeaturedServices />
      <PortfolioPreview />
      <CTA />
    </>
  );
}
