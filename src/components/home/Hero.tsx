
import { ArrowRight } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import { useState } from 'react';
import AuthModal from '@/components/auth/AuthModal';

const Hero = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent"></div>

      <div className="container-custom px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <span className="inline-block animate-fade-in mb-4 px-3 py-1 bg-accent rounded-full text-primary text-sm font-medium">
              Your Journey to Wellness Starts Here
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight animate-slide-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Transform Your Life With Expert Nutrition Guidance
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 animate-slide-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Personalized diet plans, one-on-one coaching, and exclusive resources designed to help you achieve your health and wellness goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <CustomButton size="lg" onClick={() => setIsAuthModalOpen(true)}>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </CustomButton>
              <CustomButton variant="outline" size="lg">
                Explore Plans
              </CustomButton>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            {/* Phone mockup with app */}
            <div className="relative">
              <div className="relative z-10 w-72 md:w-80 h-[500px] md:h-[560px] rounded-[2.5rem] border-8 border-foreground/10 shadow-xl overflow-hidden glass">
                <img 
                  src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
                  alt="Healthy meal" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating UI elements */}
              <div className="absolute top-20 -left-16 glass p-4 rounded-xl shadow-lg animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    87%
                  </div>
                  <div>
                    <p className="text-sm font-medium">Goal Progress</p>
                    <p className="text-xs text-muted-foreground">Keep it up!</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-20 -right-16 glass p-4 rounded-xl shadow-lg animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary font-bold">
                    5
                  </div>
                  <div>
                    <p className="text-sm font-medium">New Recipes</p>
                    <p className="text-xs text-muted-foreground">Just for you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted by section */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-6">TRUSTED BY HEALTH ENTHUSIASTS WORLDWIDE</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60">
            {['Forbes', 'TechCrunch', 'Wired', 'CNN', 'Bloomberg'].map((brand) => (
              <div key={brand} className="text-xl md:text-2xl font-heading font-bold">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        defaultTab="signup"
      />
    </section>
  );
};

export default Hero;
