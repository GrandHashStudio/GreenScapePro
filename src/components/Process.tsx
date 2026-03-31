import { ClipboardCheck, PencilRuler, HardHat } from 'lucide-react';
import PremiumIcon from './PremiumIcon';

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
    <section id="process" className="py-24 bg-transparent relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in text-shadow-sm">
          <div className="inline-block bg-brand-gold/10 text-brand-gold px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6">Execution Excellence</div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">The GreenScape Process</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-70">
            Our systematic approach ensures every project is executed with the highest standards of quality and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-forest/10 dark:bg-white/10 -translate-y-1/2 z-0"></div>
          
          {steps.map((item, index) => (
            <div key={index} className="relative z-10 group">
              <div className="glass-card !bg-white/5 dark:!bg-white/[0.02] p-10 h-full flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm border border-black/5 dark:border-white/5">
                <div className="absolute top-4 right-6 text-5xl font-black text-brand-forest/5 dark:text-white/5 group-hover:text-brand-forest/10 dark:group-hover:text-white/10 transition-colors">
                  {item.step}
                </div>
                
                <div className="mb-8 group">
                  <PremiumIcon icon={item.icon} size={32} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="opacity-70 leading-relaxed font-medium">
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


