import { Scissors, Hammer, Palette, Calendar } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: 'Lawn Care',
      image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800',
      description: 'Professional mowing, edging, and fertilization to keep your lawn lush and healthy year-round.',
    },
    {
      icon: Hammer,
      title: 'Hardscaping',
      image: 'https://images.unsplash.com/photo-1558905734-b8301f5a91cd?auto=format&fit=crop&q=80&w=800',
      description: 'Custom patios, walkways, retaining walls, and outdoor living spaces built with premium materials.',
    },
    {
      icon: Palette,
      title: 'Landscape Design',
      image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800',
      description: 'Creative design solutions that blend aesthetics with functionality for your unique property.',
    },
    {
      icon: Calendar,
      title: 'Maintenance',
      image: 'https://images.unsplash.com/photo-1617103023188-fb6c08d8b8b4?auto=format&fit=crop&q=80&w=800',
      description: 'Year-round property maintenance including seasonal cleanups, mulching, and pruning.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-forest mb-6">
            Landscaping Solutions
          </h2>
          <p className="text-xl text-brand-slate max-w-2xl mx-auto font-medium">
            Meticulous attention to detail for both residential and commercial properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-forest/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg">
                    <Icon className="h-6 w-6 text-brand-forest" strokeWidth={2} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-brand-forest mb-4">
                    {service.title}
                  </h3>
                  <p className="text-brand-slate leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <button className="mt-6 flex items-center text-brand-gold font-bold group/btn">
                    Learn More
                    <span className="ml-2 transition-transform group-hover/btn:translate-x-2">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
