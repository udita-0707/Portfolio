import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  useEffect(() => {
    document.title = "Udita Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <div className="portfolio-container pt-8">
        <Header />
      </div>
      <HeroSection />
      <Navigation />
      <ProjectsSection />
    </div>
  );
};

export default Index;
