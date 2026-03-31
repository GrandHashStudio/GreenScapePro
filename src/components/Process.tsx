import { ClipboardCheck, PencilRuler, HardHat } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Precision Consultation',
    description: 'We begin with a deep dive into your vision, site analysis, and lifestyle needs to establish a solid foundation.',
    step: '01'
  },
  {
    icon: PencilRuler,
    title: 'Architectural Design',
    description: 'Our design team creates detailed 3D renderings and material boards for your approval before a single stone is moved.',
    step: '02'
  },
  {
    icon: HardHat,
    title: 'White-Glove Installation',
    description: 'Our elite craftsmen bring the design to life with meticulous attention to detail and professional project management.',
    step: '03'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-brand-stone relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-6">The GreenScape Process</h2>
          <p className="text-xl text-brand-slate max-w-2xl mx-auto">
            Our systematic approach ensures every project is executed with the highest standards of quality and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-forest/10 -translate-y-1/2 z-0"></div>
          
          {steps.map((item, index) => (
            <div key={index} className="relative z-10 group">
              <div className="glass-card p-10 h-full flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-4 right-6 text-5xl font-black text-brand-forest/5 group-hover:text-brand-forest/10 transition-colors">
                  {item.step}
                </div>
                
                <div className="bg-brand-forest text-white p-5 rounded-2xl mb-8 group-hover:rotate-6 transition-transform duration-500 shadow-xl shadow-brand-forest/20">
                  <item.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-brand-slate leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
