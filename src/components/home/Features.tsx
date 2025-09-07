
import { Activity, Coffee, Calendar, Heart, Salad, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard = ({ icon, title, description, className, style }: FeatureCardProps) => {
  return (
    <div className={cn(
      "glass p-6 rounded-2xl hover-lift",
      className
    )} style={style}>
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Salad className="h-6 w-6" />,
      title: "Personalized Diet Plans",
      description: "Tailored nutrition plans based on your body type, goals, and dietary preferences."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Progress Tracking",
      description: "Monitor your journey with intuitive tools to track your health and fitness milestones."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "One-on-One Coaching",
      description: "Get expert guidance and accountability from certified nutrition coaches."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Meal Planning",
      description: "Weekly meal plans with shopping lists and preparation instructions."
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Recipe Library",
      description: "Access to hundreds of delicious, healthy recipes suitable for any diet."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Wellness Resources",
      description: "Educational materials to support your journey toward optimal health."
    }
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background -z-10"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for a Healthier You
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive platform provides all the tools and support you need to transform your health and wellness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
