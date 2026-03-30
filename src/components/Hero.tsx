export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<<<<<<< HEAD
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1558905734-b8301f5a91cd?auto=format&fit=crop&q=80&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-forest/80 via-brand-forest/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl animate-slide-up">
          <div className="flex items-center space-x-2 text-brand-gold mb-6 font-bold tracking-widest uppercase text-sm">
            <span className="w-12 h-0.5 bg-brand-gold"></span>
            <span>Elite Landscaping Services</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            Elevate Your <br />
            <span className="text-brand-gold">Outdoor Living</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-xl leading-relaxed">
            From architectural garden designs to complete estate renovations. We create outdoor spaces that inspire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="btn-primary"
            >
              Get a Free Estimate
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl text-lg font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
=======
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1876826/pexels-photo-1876826.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Transform Your Outdoor Space
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Professional landscaping services that bring your vision to life. From stunning garden designs to complete outdoor renovations.
        </p>
        <button
          onClick={scrollToContact}
          className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Get a Free Estimate
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
>>>>>>> 479324f34ce12aca4cd69b5d2d012ddb1e5f5a97
    </section>
  );
}
