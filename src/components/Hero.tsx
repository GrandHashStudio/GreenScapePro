export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
    </section>
  );
}
