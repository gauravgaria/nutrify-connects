
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/lib/auth';
import AuthModal from '@/components/auth/AuthModal';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup'>('login');
  const location = useLocation();
  const isMobile = useIsMobile();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleOpenAuthModal = (tab: 'login' | 'signup') => {
    setAuthModalTab(tab);
    setIsAuthModalOpen(true);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Diet Plans', path: '/diet-plans' },
    { name: 'Coaching', path: '/coaching' },
    { name: 'Freebies', path: '/freebies' },
  ];

  // Only show chat link for authenticated users
  const authenticatedLinks = [
    ...navLinks,
    ...(isAuthenticated ? [{ name: 'Chat Support', path: '/chat' }] : [])
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-2 glass' : 'py-4 bg-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between px-4 md:px-6">
        <NavLink 
          to="/" 
          className="text-2xl font-heading font-bold tracking-tight"
        >
          NutrifyConnect
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {authenticatedLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => cn(
                'text-sm font-medium transition-colors hover:text-primary relative',
                isActive ? 'text-primary' : 'text-foreground/80',
                'after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-primary after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100',
                { 'after:scale-x-100': location.pathname === link.path }
              )}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <NavLink 
                to="/chat" 
                className={cn(
                  "flex items-center text-sm font-medium gap-1.5 text-primary",
                  "hover:text-primary/80 transition-colors"
                )}
              >
                <MessageCircle size={18} />
                <span>Chat</span>
              </NavLink>
              <span className="text-sm font-medium">Hi, {user?.name}</span>
              <CustomButton variant="outline" size="sm" onClick={logout}>
                Log Out
              </CustomButton>
            </>
          ) : (
            <>
              <CustomButton variant="outline" size="sm" onClick={() => handleOpenAuthModal('login')}>
                Log In
              </CustomButton>
              <CustomButton size="sm" onClick={() => handleOpenAuthModal('signup')}>
                Sign Up
              </CustomButton>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden glass animate-fade-in">
          <div className="flex flex-col px-4 pt-2 pb-6 space-y-4">
            {authenticatedLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => cn(
                  'py-2 text-lg font-medium transition-colors',
                  isActive ? 'text-primary' : 'text-foreground/80'
                )}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              {isAuthenticated ? (
                <>
                  <div className="py-2 text-lg font-medium">Hi, {user?.name}</div>
                  <CustomButton variant="outline" onClick={logout}>
                    Log Out
                  </CustomButton>
                </>
              ) : (
                <>
                  <CustomButton variant="outline" onClick={() => handleOpenAuthModal('login')}>
                    Log In
                  </CustomButton>
                  <CustomButton onClick={() => handleOpenAuthModal('signup')}>
                    Sign Up
                  </CustomButton>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab={authModalTab}
      />
    </header>
  );
};

export default Navbar;
