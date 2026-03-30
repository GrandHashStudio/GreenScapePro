import { CheckCircle } from 'lucide-react';

export default function About() {
  const benefits = [
    'Certified landscape professionals',
    'Free consultation and estimates',
    'Premium quality materials',
    'Satisfaction guaranteed',
    'Competitive pricing',
    'Eco-friendly practices',
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-forest/10 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=1200"
              alt="Elite landscaping design result"
              className="rounded-[2rem] shadow-2xl w-full h-[600px] object-cover relative z-10 border-8 border-white"
            />
            <div className="absolute -bottom-6 -left-6 bg-brand-forest text-white p-8 rounded-2xl shadow-2xl z-20 animate-fade-in">
              <div className="text-4xl font-black mb-1 text-brand-gold">15+</div>
              <div className="text-sm font-bold uppercase tracking-widest">Years of Excellence</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Our Legacy</div>
            <h2 className="text-4xl md:text-5xl font-black text-brand-forest mb-8 leading-tight">
              Crafting Nature <br /> Into Art Since 2011
            </h2>
            <p className="text-lg text-brand-slate mb-8 leading-relaxed font-medium">
              We don't just plant gardens; we design living environments. Our philosophy is rooted in the perfect balance between architectural structure and natural fluidity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="bg-brand-stone p-2 rounded-lg group-hover:bg-brand-gold transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-brand-forest group-hover:text-white" />
                  </div>
                  <span className="text-brand-slate font-bold tracking-tight">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="btn-primary"
            >
              Get a Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
