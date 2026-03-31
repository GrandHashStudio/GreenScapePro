import { Star, ShieldCheck, Trophy } from 'lucide-react';

export default function Hero() {
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
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1590059132718-5eb8a27d5536?auto=format&fit=crop&q=80&w=1920"
        >
          <source 
            src="https://cdn.pixabay.com/video/2017/06/09/9734-221163205_large.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[var(--bg-color)]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-forest/60 via-brand-forest/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl pt-20">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white mb-8 animate-fade-in floating">
            <Trophy className="h-4 w-4 text-brand-gold fill-brand-gold" />
            <span className="text-xs md:text-sm font-bold tracking-wider uppercase">Voted #1 Landscaping Firm 2025</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tight animate-slide-up">
            From Dream to Reality: <br />
            <span className="text-brand-gold drop-shadow-sm">Elite Outdoor Living</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed animate-slide-up delay-100">
            We don't just plant gardens; we craft architectural masterworks that redefine your home's luxury and value.
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
            <div className="flex items-center space-x-3">
              <ShieldCheck className="h-10 w-10 text-brand-gold" />
              <div>
                <p className="text-white font-bold text-lg">25 Years</p>
                <p className="text-white/60 text-sm">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block">
        <div 
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center p-2 cursor-pointer hover:border-brand-gold/50 transition-colors"
        >
          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

