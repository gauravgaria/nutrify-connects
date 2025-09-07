
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Lost 28 lbs in 6 months",
    content: "The personalized diet plan was exactly what I needed. It took into account my dietary restrictions and preferences, making it easy to follow. The coaching support kept me accountable and I've never felt better!",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Athlete & Fitness Enthusiast",
    content: "As someone who's tried many nutrition programs, this platform stands out for its science-backed approach and attention to detail. The meal plans are varied and delicious, and the app makes tracking progress so simple.",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Busy Professional",
    content: "I never thought I could maintain a healthy diet with my hectic schedule, but the meal prep guides and time-saving recipes have been game-changers. Within weeks I noticed more energy and better sleep.",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 4
  },
  {
    id: 4,
    name: "James Rodriguez",
    role: "Transformed lifestyle",
    content: "The coaches on this platform don't just tell you what to eat—they teach you why it matters. The educational resources changed my relationship with food, and the results speak for themselves.",
    avatar: "https://i.pravatar.cc/150?img=4",
    rating: 5
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Mother of two",
    content: "Finding family-friendly recipes that everyone enjoys has always been a challenge. This program provided options that my kids love too, making mealtime enjoyable instead of a battle. The whole family is healthier now!",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5
  }
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const cardWidth = scrollRef.current.querySelector('div')?.offsetWidth || 0;
    const newIndex = direction === 'left' 
      ? Math.max(0, activeIndex - 1) 
      : Math.min(testimonials.length - 1, activeIndex + 1);
    
    if (newIndex !== activeIndex) {
      scrollRef.current.scrollTo({
        left: cardWidth * newIndex,
        behavior: 'smooth'
      });
      setActiveIndex(newIndex);
    }
  };

  const handleDotClick = (index: number) => {
    if (!scrollRef.current) return;
    
    const cardWidth = scrollRef.current.querySelector('div')?.offsetWidth || 0;
    scrollRef.current.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  return (
    <section className="section-padding bg-accent/40">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from real people who transformed their health with our nutrition guidance and coaching.
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation buttons */}
          <button 
            onClick={() => handleScroll('left')}
            disabled={activeIndex === 0}
            className={cn(
              "absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-md hover:bg-white transition-colors",
              "hidden md:flex items-center justify-center",
              activeIndex === 0 && "opacity-50 cursor-not-allowed"
            )}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={() => handleScroll('right')}
            disabled={activeIndex === testimonials.length - 1}
            className={cn(
              "absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-md hover:bg-white transition-colors",
              "hidden md:flex items-center justify-center",
              activeIndex === testimonials.length - 1 && "opacity-50 cursor-not-allowed"
            )}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          {/* Testimonial cards */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
            onScroll={(e) => {
              if (!scrollRef.current) return;
              const cardWidth = scrollRef.current.querySelector('div')?.offsetWidth || 0;
              const index = Math.round(e.currentTarget.scrollLeft / cardWidth);
              if (index !== activeIndex) {
                setActiveIndex(index);
              }
            }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="min-w-full sm:min-w-[calc(100%-40px)] md:min-w-[calc(100%-40px)] lg:min-w-[calc(50%-20px)] xl:min-w-[calc(33.333%-20px)] p-4 snap-center"
              >
                <div className="glass p-8 rounded-2xl h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-white"
                    />
                    <div className="ml-4">
                      <h4 className="font-medium text-lg">{testimonial.name}</h4>
                      <p className="text-primary text-sm">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i}
                            className={cn(
                              "w-4 h-4",
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 flex-grow">{testimonial.content}</p>
                  
                  <div className="text-2xl text-primary/20 font-serif">"</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "bg-primary w-6" 
                    : "bg-primary/30 hover:bg-primary/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
