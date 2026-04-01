import { useState, useEffect } from 'react';
import { Star, ShieldCheck, Trophy } from 'lucide-react';

export default function Hero() {
  const [heroContent, setHeroContent] = useState({
    title: (
      <>
        From Dream to Reality: <br />
        <span className="text-brand-gold drop-shadow-sm">Elite Outdoor Living</span>
      </>
    ),
    subtitle: "We don't just plant gardens; we craft architectural masterworks that redefine your home's luxury and value."
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const campaign = params.get('utm_campaign')?.toLowerCase();

    if (campaign === 'hardscaping') {
      setHeroContent({
        title: (
          <>
            Precision Hardscaping: <br />
            <span className="text-brand-gold drop-shadow-sm">Architectural Elegance</span>
          </>
        ),
        subtitle: "Specialized stone masonry and structural design for the discerning homeowner. Transform your estate with our expert hardscape solutions."
      });
    } else if (campaign === 'maintenance') {
      setHeroContent({
        title: (
          <>
            Perpetual Perfection: <br />
            <span className="text-brand-gold drop-shadow-sm">White-Glove Estate Care</span>
          </>
        ),
        subtitle: "Horticultural excellence and precision maintenance programs designed for estate-level aesthetics and long-term vitality."
      });
    }
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/hero-cinematic-pool.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover bg-black"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[var(--bg-color)]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-forest/60 via-brand-forest/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl pt-20">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white mb-8 animate-fade-in floating group cursor-default">
            <Trophy className="h-4 w-4 text-brand-gold fill-brand-gold group-hover:scale-125 transition-transform" />
            <span className="text-xs md:text-sm font-bold tracking-wider uppercase">Voted #1 Landscaping Firm 2025</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tight animate-slide-up">
            {heroContent.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed animate-slide-up delay-100">
            {heroContent.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mb-16 animate-slide-up delay-200">
            <button
              onClick={scrollToContact}
              className="btn-primary"
            >
              Start Your Transformation
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-2xl text-lg font-bold text-white border-2 border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
            >
              Explore Our Portfolio
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 max-w-2xl animate-fade-in delay-500">
            <div className="space-y-1">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <p className="text-white font-bold text-lg">500+ Verified Reviews</p>
            </div>
            <div className="flex items-center space-x-3 group">
              <ShieldCheck className="h-10 w-10 text-brand-gold group-hover:rotate-12 transition-transform" />
              <div>
                <p className="text-white font-bold text-lg">25 Years</p>
                <p className="text-white/60 text-sm">of Excellence</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}


