
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent py-16">
      <div className="container-custom px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col">
            <Link to="/" className="text-2xl font-heading font-bold mb-4">
              NutrifyConnect
            </Link>
            <p className="text-muted-foreground mb-6">
              Your personalized path to wellness through nutrition and coaching.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/diet-plans" className="text-foreground/70 hover:text-primary transition-colors">
                  Diet Plans
                </Link>
              </li>
              <li>
                <Link to="/coaching" className="text-foreground/70 hover:text-primary transition-colors">
                  Coaching
                </Link>
              </li>
              <li>
                <Link to="/freebies" className="text-foreground/70 hover:text-primary transition-colors">
                  Freebies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-foreground/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-foreground/70 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-foreground/70 hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-foreground/70 hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-foreground/70">
                support@nutrify-connect.com
              </li>
              <li className="text-foreground/70">
                123 Wellness Ave, Healthy City
              </li>
              <li className="text-foreground/70">
                Mon-Fri: 9am - 5pm
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 text-center text-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} NutrifyConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
