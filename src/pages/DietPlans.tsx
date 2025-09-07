
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DietPlansComponent from '@/components/plans/DietPlans';
import AuthModal from '@/components/auth/AuthModal';

const DietPlans = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Premium Diet Plans
              </h1>
              <p className="text-lg text-muted-foreground">
                Expert-crafted nutrition programs designed to help you achieve your health goals with personalized guidance and support.
              </p>
            </div>
            
            <DietPlansComponent />
          </div>
        </section>
      </main>
      
      <Footer />
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
};

export default DietPlans;
