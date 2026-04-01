import { Phone, Mail, MapPin, Leaf } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-forest text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
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
        </div>
        
        {/* Hyper-Local Neighborhood SEO */}
        <div className="pt-16 pb-8 border-t border-white/10">
          <div className="flex flex-col items-center">
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-10 text-center opacity-80">
              Elite Neighborhood Expertise & Recent Projects
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4 w-full">
              {[
                { name: 'Highland Park', type: 'Modern Architectural', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=400' },
                { name: 'Preston Hollow', type: 'English Heritage', image: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=400' },
                { name: 'Lakewood', type: 'Zen Lush Sanctuary', image: '/images/zen_lush_sanctuary.png' },
                { name: 'Southlake Estates', type: 'Transitional Hardscape', image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=400' },
                { name: 'Westover Hills', type: 'Architectural Masterpiece', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=400' }
              ].map((loc) => (
                <div key={loc.name} className="group cursor-pointer text-center px-2 flex flex-col items-center">
                  <div className="relative w-16 h-16 mb-4 rounded-2xl overflow-hidden ring-1 ring-white/10 group-hover:ring-brand-gold/50 transition-all duration-500 shadow-lg">
                    <img 
                      src={loc.image} 
                      alt={`Project in ${loc.name}`} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-brand-forest/40 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="text-white/30 group-hover:text-brand-gold transition-colors font-bold text-[10px] uppercase tracking-tighter mb-1.5">
                    Recent Work in
                  </div>
                  <div className="text-white font-black tracking-tight text-sm group-hover:text-brand-gold transition-colors mb-1 leading-tight">
                    {loc.name}
                  </div>
                  <div className="text-[10px] text-white/20 group-hover:text-white/40 uppercase font-black tracking-widest transition-colors">
                    {loc.type}
                  </div>
                </div>
              ))}
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
