import { Scissors, Hammer, Palette, Calendar, ArrowRight } from 'lucide-react';

const services = [
  {
    lottie: 'https://lottie.host/31804f37-1422-4467-9d7a-1f81643c1682/L8vO6P8WdC.json',
    icon: Scissors,
    title: 'Elite Lawn Care',
    image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800',
    description: 'Precision manicuring and biological fertilization programs designed for estate-level aesthetics and soil health.',
  },
  {
    lottie: 'https://lottie.host/3697eef8-c64a-4d2c-806b-79013f997f8c/7k6h1212Bf.json',
    icon: Hammer,
    title: 'Architectural Hardscaping',
    image: 'https://images.unsplash.com/photo-1558905734-b8301f5a91cd?auto=format&fit=crop&q=80&w=800',
    description: 'Masterfully crafted patios, structural retaining walls, and custom stonework that stand the test of time.',
  },
  {
    lottie: 'https://lottie.host/0a539a48-5c4d-4e94-825d-27f12e847c23/sFp9Q1uH8m.json',
    icon: Palette,
    title: 'Bespoke Landscape Design',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800',
    description: 'Immersive 3D design experiences where form meets function to create your personal outdoor sanctuary.',
  },
  {
    lottie: 'https://lottie.host/7905d4b5-6807-4f6c-843c-66f916ea0584/H2Sj9Yt9hY.json',
    icon: Calendar,
    title: 'Estate Management',
    image: 'https://images.unsplash.com/photo-1617103023188-fb6c08d8b8b4?auto=format&fit=crop&q=80&w=800',
    description: 'Comprehensive year-round surveillance and maintenance of your property’s exterior architectural integrity.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-transparent relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 animate-fade-in">
          <div className="max-w-2xl">
            <div className="inline-block bg-brand-gold/10 text-brand-gold px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6">Our Expertise</div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Master-Crafted <br />
              <span className="opacity-40">Landscaping Solutions</span>
            </h2>
          </div>
          <p className="text-xl max-w-sm leading-relaxed mb-2 opacity-80">
            Elevating properties through a blend of horticultural science and architectural vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              
              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-forest via-brand-forest/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-6 transform transition-transform duration-500 group-hover:-translate-y-4">
                  <div className="inline-flex w-16 h-16 items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-6 shadow-xl relative overflow-hidden">
                    {/* @ts-ignore */}
                    <dotlottie-player
                      src={service.lottie}
                      background="transparent"
                      speed="1"
                      style={{ width: '80%', height: '80%' }}
                      loop
                      autoplay
                    />
                    <service.icon className="h-4 w-4 absolute bottom-1 right-1 opacity-20 text-brand-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {service.description}
                  </p>
                </div>
                
                <button className="flex items-center text-white font-bold gap-2 group/btn translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span className="text-sm uppercase tracking-widest">Enquire Now</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


