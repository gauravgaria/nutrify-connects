import { useEffect, useState } from 'react';
import { Download, Lock } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import AuthModal from '@/components/auth/AuthModal';
import { useAuth, hasAccessToFreebies } from '@/lib/auth';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface Freebie {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  downloadLink: string;
}

const freebies: Freebie[] = [
  {
    id: 'meal-planning-guide',
    title: 'Meal Planning Guide',
    description: 'A comprehensive guide to planning nutritious meals for the entire week.',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80',
    downloadLink: '/downloads/meal-planning-guide.pdf'
  },
  {
    id: 'smoothie-recipes',
    title: '15 Nutritious Smoothie Recipes',
    description: 'Delicious and healthy smoothie recipes for breakfast, snacks, or post-workout.',
    category: 'Recipes',
    image: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    downloadLink: '/downloads/smoothie-recipes.pdf'
  },
  {
    id: 'nutrition-myths',
    title: 'Common Nutrition Myths Debunked',
    description: 'Evidence-based explanations of popular nutrition misconceptions.',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1505253668822-42074d58a7c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80',
    downloadLink: '/downloads/nutrition-myths.pdf'
  },
  {
    id: 'grocery-shopping',
    title: 'Healthy Grocery Shopping List',
    description: 'A printable shopping list template with nutritious staples for your pantry.',
    category: 'Tool',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80',
    downloadLink: '/downloads/grocery-list.pdf'
  },
  {
    id: 'portion-guide',
    title: 'Portion Size Guide',
    description: 'Visual guide to understanding correct portion sizes for different food groups.',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    downloadLink: '/downloads/portion-guide.pdf'
  },
  {
    id: 'meal-prep-recipes',
    title: 'Easy Meal Prep Recipes',
    description: '10 time-saving recipes perfect for weekly meal preparation.',
    category: 'Recipes',
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
    downloadLink: '/downloads/meal-prep-recipes.pdf'
  },
  {
    id: 'mindful-eating',
    title: 'Mindful Eating Workbook',
    description: 'Exercises and prompts to develop a healthier relationship with food.',
    category: 'Workbook',
    image: 'https://images.unsplash.com/photo-1627483262769-04d0a1401487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    downloadLink: '/downloads/mindful-eating.pdf'
  },
  {
    id: 'nutrition-trackers',
    title: 'Printable Nutrition Trackers',
    description: 'Daily and weekly trackers for monitoring nutrition, water intake, and more.',
    category: 'Tool',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    downloadLink: '/downloads/nutrition-trackers.pdf'
  }
];

const categories = Array.from(new Set(freebies.map(freebie => freebie.category)));

const FreebiesGrid = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredFreebies, setFilteredFreebies] = useState(freebies);
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    if (selectedCategory) {
      setFilteredFreebies(freebies.filter(freebie => freebie.category === selectedCategory));
    } else {
      setFilteredFreebies(freebies);
    }
  }, [selectedCategory]);
  
  const handleDownload = (freebie: Freebie) => {
    if (hasAccessToFreebies()) {
      // In a real app, this would trigger the actual download
      toast.success(`Downloading ${freebie.title}`, {
        description: "Your download will begin automatically."
      });
    } else {
      setIsAuthModalOpen(true);
    }
  };
  
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Free Resources
          </h2>
          <p className="text-lg text-muted-foreground">
            Download these helpful resources to support your nutrition journey. 
            {!isAuthenticated && " Create an account to access all freebies."}
          </p>
        </div>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              selectedCategory === null 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                selectedCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Freebies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFreebies.map((freebie, index) => (
            <div 
              key={freebie.id}
              className="rounded-xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.05 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={freebie.image} 
                  alt={freebie.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-accent text-primary text-xs font-medium px-2 py-1 rounded-full">
                    {freebie.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-medium mb-2">{freebie.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{freebie.description}</p>
                
                <CustomButton 
                  variant={isAuthenticated ? "default" : "outline"}
                  size="sm"
                  className="w-full"
                  onClick={() => handleDownload(freebie)}
                >
                  {isAuthenticated ? (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </>
                  ) : (
                    <>
                      <Lock className="mr-2 h-4 w-4" />
                      Sign In to Download
                    </>
                  )}
                </CustomButton>
              </div>
            </div>
          ))}
        </div>
        
        {/* No results message */}
        {filteredFreebies.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No resources found for this category.</p>
            <CustomButton 
              variant="subtle" 
              className="mt-4"
              onClick={() => setSelectedCategory(null)}
            >
              Show All Resources
            </CustomButton>
          </div>
        )}
        
        {/* CTA section */}
        {!isAuthenticated && (
          <div className="mt-16 text-center p-8 glass rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want Access to All Resources?</h3>
            <p className="text-muted-foreground mb-6">
              Create a free account to download all our nutrition resources and access exclusive content.
            </p>
            <CustomButton onClick={() => setIsAuthModalOpen(true)}>
              Sign Up – It's Free
            </CustomButton>
          </div>
        )}
      </div>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        defaultTab="signup"
      />
    </section>
  );
};

export default FreebiesGrid;
