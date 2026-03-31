import { useState, useEffect } from 'react';
import { Menu, X, Leaf, Moon, Sun } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-brand-forest p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-brand-forest tracking-tight">
              GreenScape Pro
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {['services', 'about', 'reviews'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-brand-slate hover:text-brand-forest transition-colors font-semibold capitalize tracking-wide relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-xl bg-brand-stone/50 hover:bg-brand-stone transition-all duration-300 group shadow-inner"
              title={isDarkMode ? 'Switch to Day View' : 'Switch to Night View (Illumination)'}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-brand-gold animate-spin-slow" />
              ) : (
                <Moon className="h-5 w-5 text-brand-forest group-hover:text-brand-gold transition-colors" />
              )}
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-brand-forest hover:bg-green-900 text-white px-7 py-2.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-900/20"
            >
              Get a Free Estimate
            </button>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-brand-stone/50"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-brand-gold" /> : <Moon className="h-5 w-5 text-brand-forest" />}
            </button>
            <button
              className="text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-brand-stone/50">
          <div className="px-4 py-6 space-y-4">
            {['services', 'about', 'reviews'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-brand-slate hover:text-brand-forest hover:bg-brand-stone/50 rounded-lg transition-colors capitalize font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-brand-forest hover:bg-green-900 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-green-900/10"
            >
              Get a Free Estimate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
