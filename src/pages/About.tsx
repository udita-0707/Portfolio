import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";

const About = () => {
  useEffect(() => {
    document.title = "About - Udita Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      <div className="portfolio-container pt-8">
        <Header />
      </div>
      <HeroSection />
      <Navigation />
      <section className="portfolio-container pb-16">
        <div className="glass-card p-8">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold">👋 About Me</h2>
          </div>
          <div className="flex items-center justify-center h-60">
            <p className="text-white/60 text-lg">
              About me information coming soon...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
