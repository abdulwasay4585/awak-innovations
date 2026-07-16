import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* 
        Other sections to be built:
        <Statistics />
        <FeaturedServices />
        <PortfolioPreview />
        <Technologies />
      */}
      
      {/* Temporary spacer for scrolling to see sticky navbar */}
      <div className="h-[1000px] w-full bg-background" />
    </>
  );
}
