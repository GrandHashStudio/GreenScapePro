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
        isScrolled 
          ? 'bg-white/60 dark:bg-black/40 backdrop-blur-xl border-b border-white/20 dark:border-white/5 py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-brand-forest dark:bg-brand-gold p-2 rounded-lg group-hover:rotate-12 transition-all duration-300">
              <Leaf className="h-6 w-6 text-white dark:text-brand-forest" />
            </div>
            <span className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-300 ${isScrolled ? 'text-current' : 'text-white'}`}>
              GreenScape Pro
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {['services', 'about', 'reviews'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`transition-colors font-bold capitalize tracking-wide relative group ${isScrolled ? 'text-current' : 'text-white/80 hover:text-white'}`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-xl transition-all duration-300 group shadow-inner ${isScrolled ? 'bg-black/5 dark:bg-white/5' : 'bg-white/10'}`}
              title={isDarkMode ? 'Switch to Day View' : 'Switch to Night View (Illumination)'}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-brand-gold animate-spin-slow" />
              ) : (
                <Moon className={`h-5 w-5 transition-colors ${isScrolled ? 'text-brand-forest' : 'text-white group-hover:text-brand-gold'}`} />
              )}
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-brand-forest dark:bg-brand-gold dark:text-brand-forest hover:brightness-110 text-white px-7 py-2.5 rounded-xl font-black transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get a Free Estimate
            </button>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-black/5 dark:bg-white/5"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-brand-gold" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              className={isScrolled ? 'text-current' : 'text-white'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-black/5 dark:border-white/5">
          <div className="px-4 py-6 space-y-4">
            {['services', 'about', 'reviews'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 font-bold opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-all capitalize"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-brand-forest dark:bg-brand-gold text-white dark:text-brand-forest px-6 py-3 rounded-xl font-black transition-all shadow-lg"
            >
              Get a Free Estimate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
