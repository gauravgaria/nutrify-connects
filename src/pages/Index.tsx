
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import DietPlans from "@/components/plans/DietPlans";
import CoachingServices from "@/components/coaching/CoachingServices";
import FreebiesGrid from "@/components/freebies/FreebiesGrid";

const Index = () => {
  // Apply smooth scroll behavior
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="section-padding">
          <div className="container-custom">
            <Hero />
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="section-padding bg-accent/30">
          <div className="container-custom">
            <Features />
          </div>
        </section>
        
        {/* Diet Plans Section */}
        <section id="diet-plans" className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Personalized Diet Plans
            </h2>
            <DietPlans />
          </div>
        </section>
        
        {/* Coaching Services Section */}
        <section id="coaching" className="section-padding bg-secondary/30">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Online Coaching Services
            </h2>
            <CoachingServices />
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Success Stories
            </h2>
            <Testimonials />
          </div>
        </section>
        
        {/* Freebies Section */}
        <section id="freebies" className="section-padding bg-accent/30">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Free Resources
            </h2>
            <FreebiesGrid />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
