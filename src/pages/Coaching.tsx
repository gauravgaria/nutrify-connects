
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CoachingServices from '@/components/coaching/CoachingServices';

const Coaching = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Expert Nutrition Coaching
              </h1>
              <p className="text-lg text-muted-foreground">
                Get personalized nutrition guidance from our expert coaches to help you achieve your health and wellness goals.
              </p>
            </div>
            
            <CoachingServices />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Coaching;
