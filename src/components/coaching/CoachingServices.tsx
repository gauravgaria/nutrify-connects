
import { useState } from 'react';
import { Calendar, ChevronDown, Clock, Globe, MessageSquare, Video } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import { cn } from '@/lib/utils';
import AuthModal from '@/components/auth/AuthModal';

interface Coach {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties: string[];
}

interface CoachingOption {
  title: string;
  description: string;
  price: number;
  duration: string;
  icon: React.ReactNode;
  benefits: string[];
}

const coaches: Coach[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Registered Dietitian, PhD",
    bio: "Dr. Chen specializes in plant-based nutrition and has helped hundreds of clients transition to healthier eating patterns while addressing specific health concerns.",
    image: "https://i.pravatar.cc/300?img=1",
    specialties: ["Plant-Based Nutrition", "Gut Health", "Autoimmune Conditions"]
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Sports Nutritionist",
    bio: "With over a decade of experience working with professional athletes, Michael helps clients optimize their nutrition for peak performance and recovery.",
    image: "https://i.pravatar.cc/300?img=2",
    specialties: ["Sports Performance", "Muscle Building", "Recovery Nutrition"]
  },
  {
    id: 3,
    name: "Aisha Johnson",
    title: "Holistic Nutrition Coach",
    bio: "Aisha takes a whole-person approach to nutrition, addressing not just what you eat but how lifestyle factors influence your nutritional needs and health.",
    image: "https://i.pravatar.cc/300?img=3",
    specialties: ["Weight Management", "Emotional Eating", "Nutrition for Busy Professionals"]
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    title: "Clinical Nutritionist",
    bio: "Specializing in medical nutrition therapy, Dr. Wilson works with clients managing chronic conditions through evidence-based dietary approaches.",
    image: "https://i.pravatar.cc/300?img=4",
    specialties: ["Diabetes Management", "Heart Health", "Food Allergies & Intolerances"]
  }
];

const coachingOptions: CoachingOption[] = [
  {
    title: "One-Time Consultation",
    description: "A deep dive into your nutrition needs with personalized recommendations.",
    price: 99,
    duration: "60 minutes",
    icon: <Calendar className="h-6 w-6" />,
    benefits: [
      "Comprehensive nutrition assessment",
      "Customized recommendations",
      "Written summary and action plan",
      "Recipe and meal planning suggestions"
    ]
  },
  {
    title: "Monthly Coaching",
    description: "Ongoing support and accountability as you implement your nutrition plan.",
    price: 199,
    duration: "Month",
    icon: <Clock className="h-6 w-6" />,
    benefits: [
      "Weekly check-ins",
      "Diet and habit adjustments",
      "Progress tracking",
      "Unlimited email support",
      "Priority scheduling"
    ]
  },
  {
    title: "Video Coaching",
    description: "Face-to-face virtual sessions for personalized nutrition guidance.",
    price: 85,
    duration: "45 minutes",
    icon: <Video className="h-6 w-6" />,
    benefits: [
      "Real-time feedback",
      "Visual food demonstrations",
      "Screen sharing for education",
      "Recorded session for reference"
    ]
  },
  {
    title: "Message-Based Coaching",
    description: "Convenient, ongoing nutrition support through secure messaging.",
    price: 149,
    duration: "Month",
    icon: <MessageSquare className="h-6 w-6" />,
    benefits: [
      "Daily messaging access",
      "Photo food journal review",
      "Quick questions answered",
      "Accountability check-ins"
    ]
  },
  {
    title: "Group Coaching",
    description: "Learn with others in a supportive community environment.",
    price: 79,
    duration: "Month",
    icon: <Globe className="h-6 w-6" />,
    benefits: [
      "Weekly group sessions",
      "Community support",
      "Shared resources",
      "Topic-focused education",
      "Affordable pricing"
    ]
  }
];

const FAQs = [
  {
    question: "How do I know which coach is right for me?",
    answer: "We recommend starting with a free 15-minute consultation to discuss your goals and needs. Our team can then match you with a coach who specializes in your areas of interest."
  },
  {
    question: "What happens in the first coaching session?",
    answer: "Your first session typically involves a comprehensive assessment of your current nutrition, health history, lifestyle, and goals. Your coach will then work with you to develop an initial plan and set realistic expectations."
  },
  {
    question: "How long will it take to see results?",
    answer: "Results vary depending on your goals and starting point. Many clients report improvements in energy and digestion within the first few weeks, while weight-related goals may take longer. Your coach will help set realistic timelines."
  },
  {
    question: "Can coaching be covered by insurance?",
    answer: "Some insurance plans cover nutrition counseling, especially if it's deemed medically necessary. We can provide you with documentation to submit to your insurance company for potential reimbursement."
  },
  {
    question: "How do I prepare for my coaching sessions?",
    answer: "For your first session, it helps to keep a 3-day food diary, have a list of your current supplements and medications, and think about your main health goals. For ongoing sessions, tracking your progress and noting any questions that arose during the week is beneficial."
  }
];

const CoachingServices = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div>
      {/* Coach profiles section */}
      <section className="section-padding bg-accent/20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Expert Coaches
            </h2>
            <p className="text-lg text-muted-foreground">
              Our certified nutrition professionals are dedicated to helping you achieve your health goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coaches.map((coach, index) => (
              <div 
                key={coach.id}
                className="rounded-2xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-md transition-shadow opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
              >
                <div className="h-60 overflow-hidden">
                  <img 
                    src={coach.image} 
                    alt={coach.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1">{coach.name}</h3>
                  <p className="text-primary text-sm mb-3">{coach.title}</p>
                  <p className="text-muted-foreground text-sm mb-4">{coach.bio}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.specialties.map((specialty) => (
                        <span 
                          key={specialty} 
                          className="text-xs px-2 py-1 rounded-full bg-accent text-primary"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <CustomButton 
                      variant="subtle" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setIsAuthModalOpen(true)}
                    >
                      Book a Session
                    </CustomButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Coaching options section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Coaching Options
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible coaching formats to fit your preferences, schedule, and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coachingOptions.map((option, index) => (
              <div 
                key={option.title}
                className="glass rounded-2xl p-6 hover-lift opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {option.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold">${option.price}</span>
                  <span className="text-muted-foreground ml-1">/{option.duration}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {option.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <CustomButton 
                  variant={index === 1 ? "default" : "subtle"}
                  className="w-full"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Choose Option
                </CustomButton>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs section */}
      <section className="section-padding bg-accent/30">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our coaching services.
            </p>
          </div>
          
          <div className="space-y-4">
            {FAQs.map((faq, index) => (
              <div 
                key={index}
                className="bg-background rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  className="w-full px-6 py-4 text-left font-medium flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform",
                      expandedFAQ === index && "transform rotate-180"
                    )} 
                  />
                </button>
                
                <div 
                  className={cn(
                    "px-6 overflow-hidden transition-all duration-300 max-h-0",
                    expandedFAQ === index && "max-h-96 pb-4"
                  )}
                >
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions about our coaching services?
            </p>
            <CustomButton onClick={() => setIsAuthModalOpen(true)}>
              Contact Us
            </CustomButton>
          </div>
        </div>
      </section>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
};

const Check = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default CoachingServices;
