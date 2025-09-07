
import { Check } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import { useState } from 'react';
import AuthModal from '@/components/auth/AuthModal';
import { cn } from '@/lib/utils';

interface PlanFeature {
  title: string;
  included: boolean;
}

interface Plan {
  id: string;
  title: string;
  description: string;
  price: number;
  period: string;
  features: PlanFeature[];
  popular?: boolean;
  buttonText: string;
  image: string;
}

const plans: Plan[] = [
  {
    id: 'essential',
    title: 'Essential',
    description: 'Perfect for beginners looking to start their health journey.',
    price: 39,
    period: 'month',
    features: [
      { title: 'Personalized Meal Plan', included: true },
      { title: 'Recipe Collection', included: true },
      { title: 'Weekly Shopping Lists', included: true },
      { title: 'Basic Nutrition Education', included: true },
      { title: 'Email Support', included: true },
      { title: 'One-on-One Coaching', included: false },
      { title: 'Custom Workout Plans', included: false },
      { title: 'Priority Support', included: false },
    ],
    buttonText: 'Get Started',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
  },
  {
    id: 'premium',
    title: 'Premium',
    description: 'Our most popular plan with comprehensive support and resources.',
    price: 79,
    period: 'month',
    features: [
      { title: 'Personalized Meal Plan', included: true },
      { title: 'Recipe Collection', included: true },
      { title: 'Weekly Shopping Lists', included: true },
      { title: 'Advanced Nutrition Education', included: true },
      { title: 'Email & Chat Support', included: true },
      { title: 'Bi-weekly Coaching Calls', included: true },
      { title: 'Custom Workout Plans', included: true },
      { title: 'Priority Support', included: false },
    ],
    popular: true,
    buttonText: 'Choose Premium',
    image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80'
  },
  {
    id: 'ultimate',
    title: 'Ultimate',
    description: 'The complete package for those serious about transformation.',
    price: 129,
    period: 'month',
    features: [
      { title: 'Personalized Meal Plan', included: true },
      { title: 'Recipe Collection', included: true },
      { title: 'Weekly Shopping Lists', included: true },
      { title: 'Advanced Nutrition Education', included: true },
      { title: 'Unlimited Support', included: true },
      { title: 'Weekly Coaching Calls', included: true },
      { title: 'Custom Workout Plans', included: true },
      { title: 'Priority Support', included: true },
    ],
    buttonText: 'Choose Ultimate',
    image: 'https://images.unsplash.com/photo-1532947974358-e3c92c09b360?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80'
  }
];

const DietPlans = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Nutrition Plan
          </h2>
          <p className="text-lg text-muted-foreground">
            Flexible options tailored to your health goals, dietary preferences, and lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.id} 
              className={cn(
                "rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl",
                plan.popular ? "border-2 border-primary relative" : "border border-border",
                "opacity-0 animate-fade-in"
              )}
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
            >
              {plan.popular && (
                <div className="absolute top-5 right-5 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={plan.image} 
                  alt={plan.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold">{plan.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white">
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.title} className="flex items-start">
                      <span className={cn(
                        "mr-2 flex-shrink-0 rounded-full p-1",
                        feature.included ? "text-green-500 bg-green-50" : "text-muted bg-muted/50"
                      )}>
                        <Check className="h-4 w-4" />
                      </span>
                      <span className={feature.included ? "" : "text-muted-foreground"}>
                        {feature.title}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <CustomButton 
                  variant={plan.popular ? "default" : "subtle"}
                  className="w-full"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  {plan.buttonText}
                </CustomButton>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Not sure which plan is right for you?</p>
          <CustomButton variant="outline" onClick={() => setIsAuthModalOpen(true)}>
            Schedule a Free Consultation
          </CustomButton>
        </div>
      </div>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </section>
  );
};

export default DietPlans;
