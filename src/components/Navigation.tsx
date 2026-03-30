import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
<<<<<<< HEAD
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav py-2' : 'bg-transparent py-4'
=======
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
>>>>>>> 479324f34ce12aca4cd69b5d2d012ddb1e5f5a97
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
<<<<<<< HEAD
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-brand-forest p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-brand-forest tracking-tight">
=======
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Leaf className="h-8 w-8 text-green-800" />
            <span className="text-xl md:text-2xl font-bold text-green-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
>>>>>>> 479324f34ce12aca4cd69b5d2d012ddb1e5f5a97
              GreenScape Pro
            </span>
          </div>

<<<<<<< HEAD
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
              onClick={() => scrollToSection('contact')}
              className="bg-brand-forest hover:bg-green-900 text-white px-7 py-2.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-900/20"
=======
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-slate-600 hover:text-green-800 transition-colors font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-green-800 transition-colors font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-slate-600 hover:text-green-800 transition-colors font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
              style={{ fontFamily: 'Inter, sans-serif' }}
>>>>>>> 479324f34ce12aca4cd69b5d2d012ddb1e5f5a97
            >
              Get a Free Estimate
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-green-50 rounded-lg transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-green-50 rounded-lg transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-green-50 rounded-lg transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get a Free Estimate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
