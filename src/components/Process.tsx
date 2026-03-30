import { ClipboardList, Palette, Shovel } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: ClipboardList,
      title: 'Consultation',
      description: 'We meet on-site to discuss your vision, budget, and lifestyle needs.',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Our architects create a custom 3D rendering of your future outdoor space.',
    },
    {
      icon: Shovel,
      title: 'Installation',
      description: 'Our expert team brings the design to life with precision and care.',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
          <p className="text-xl text-brand-slate max-w-2xl mx-auto font-medium">
            How we transform your landscape from initial concept to breathtaking reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-stone -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-brand-forest text-white rounded-2xl flex items-center justify-center mb-8 shadow-2xl transform transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                  <Icon className="w-10 h-10" />
                </div>
                <div className="bg-brand-stone p-8 rounded-3xl group-hover:bg-brand-forest group-hover:text-white transition-colors duration-500 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="leading-relaxed opacity-80">{step.description}</p>
                </div>
                <div className="mt-6 text-brand-gold font-black text-6xl opacity-10 select-none group-hover:opacity-30 transition-opacity duration-500">
                  0{index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-forest/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
    </section>
  );
}
