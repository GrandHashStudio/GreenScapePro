import { Phone, Mail, MapPin, Leaf } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-forest text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-brand-gold p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-brand-forest" />
              </div>
              <span className="text-2xl font-black tracking-tight">
                GreenScape Pro
              </span>
            </div>
            <p className="text-white/60 leading-relaxed font-medium">
              Transforming outdoor spaces with award-winning design and sustainable landscaping practices since 2011.
            </p>
          </div>

          <div>
            <h3 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-8">
              Contact
            </h3>
            <div className="space-y-6">
              <a
                href="tel:555-123-4567"
                className="flex items-center space-x-4 group"
              >
                <div className="bg-white/10 p-3 rounded-xl transition-colors group-hover:bg-brand-gold">
                  <Phone className="h-5 w-5 text-brand-gold group-hover:text-white" />
                </div>
                <span className="font-bold tracking-tight">(555) 123-4567</span>
              </a>
              <a
                href="mailto:info@greenscapepro.com"
                className="flex items-center space-x-4 group"
              >
                <div className="bg-white/10 p-3 rounded-xl transition-colors group-hover:bg-brand-gold">
                  <Mail className="h-5 w-5 text-brand-gold group-hover:text-white" />
                </div>
                <span className="font-bold tracking-tight">info@greenscapepro.com</span>
              </a>
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-xl">
                  <MapPin className="h-5 w-5 text-brand-gold" />
                </div>
                <span className="font-bold tracking-tight">
                  123 Garden Lane, Greenville, ST 12345
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-8">
              Services
            </h3>
            <ul className="space-y-4 font-bold tracking-tight text-white/80">
              <li className="hover:text-brand-gold transition-colors cursor-pointer">Lawn Care</li>
              <li className="hover:text-brand-gold transition-colors cursor-pointer">Hardscaping</li>
              <li className="hover:text-brand-gold transition-colors cursor-pointer">Landscape Design</li>
              <li className="hover:text-brand-gold transition-colors cursor-pointer">Maintenance</li>
            </ul>
          </div>

          <div>
            <h3 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-8">
              Newsletter
            </h3>
            <p className="text-white/60 mb-6 font-medium">
              Get landscaping tips and seasonal offers delivered to your inbox.
            </p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white/20 transition-all font-medium"
              />
              <button className="bg-brand-gold hover:bg-amber-600 text-white py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 font-bold text-sm uppercase tracking-widest">
            © {currentYear} GreenScape Pro. All rights reserved.
          </p>
          <div className="flex space-x-8 text-white/40 font-bold text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
