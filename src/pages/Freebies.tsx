
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FreebiesGrid from '@/components/freebies/FreebiesGrid';

const Freebies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Free Nutrition Resources
              </h1>
              <p className="text-lg text-muted-foreground">
                Download our collection of free nutrition guides, meal plans, and worksheets to support your health journey.
              </p>
            </div>
            
            <FreebiesGrid />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Freebies;
