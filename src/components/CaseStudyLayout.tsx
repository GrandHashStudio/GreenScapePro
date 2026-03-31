import { ArrowLeft, CheckCircle, Clock, MapPin, Ruler } from 'lucide-react';

interface CaseStudyProps {
  onClose: () => void;
  project: {
    title: string;
    category: string;
    image: string;
    description: string;
    fullStory?: string;
    metrics?: { label: string; value: string }[];
    architect?: string;
  };
}

export default function CaseStudyLayout({ onClose, project }: CaseStudyProps) {
  return (
    <div className="fixed inset-0 z-[60] bg-brand-stone dark:bg-[#0c1a16] overflow-y-auto animate-fade-in transition-colors duration-500">
      <nav className={`sticky top-0 z-10 py-4 px-6 flex justify-between items-center transition-all duration-500 bg-white/60 dark:bg-black/40 backdrop-blur-xl border-b border-white/20 dark:border-white/5 shadow-sm`}>
        <button 
          onClick={onClose}
          className="flex items-center space-x-2 font-bold group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </button>
        <div className="text-brand-gold font-black uppercase tracking-widest text-xs md:text-sm hidden sm:block">
          GreenScape Case Study: {project.title}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-block bg-brand-forest/10 dark:bg-brand-gold/10 text-brand-forest dark:text-brand-gold px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                {project.category}
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
                {project.title}
              </h1>
              <p className="text-2xl leading-relaxed font-bold opacity-70">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {project.metrics?.map((metric, i) => (
                <div key={i} className="glass-card !bg-white/5 p-8 text-center group hover:!bg-brand-gold transition-all duration-500 border border-black/5 dark:border-white/5">
                  <div className="text-4xl font-black mb-2 group-hover:text-white">{metric.value}</div>
                  <div className="text-sm font-bold uppercase tracking-widest group-hover:text-white/80 opacity-60">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-8 bg-black/5 dark:bg-white/5 p-12 rounded-[2.5rem] border border-black/5 dark:border-white/5">
              <h2 className="text-3xl font-black tracking-tight">The Architectural Vision</h2>
              <div className="text-lg leading-relaxed font-bold space-y-6 opacity-70">
                <p>
                  Our lead architect, {project.architect || 'Julian Vance'}, envisioned a space where structural precision meets the raw fluidity of the local topography.
                </p>
                <p>
                  {project.fullStory || 'Each element was meticulously chosen to create a cohesive sensory experience, prioritizing sustainable materials and native plant integration to produce a legacy-grade outdoor living environment.'}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-4xl grayscale hover:grayscale-0 transition-all duration-700" 
            />
            
            <div className="glass-card !bg-white/5 p-10 space-y-8 border border-black/5 dark:border-white/5">
              <h3 className="text-2xl font-black tracking-tight">Technical Specifications</h3>
              <ul className="space-y-4 font-bold">
                {[
                  { icon: Ruler, text: '2,500 sq ft hardscape installation' },
                  { icon: Clock, text: 'Project duration: 12 weeks' },
                  { icon: MapPin, text: 'Site analysis & topographic survey complete' },
                  { icon: CheckCircle, text: 'Custom material sourcing & procurement' }
                ].map((spec, i) => (
                  <li key={i} className="flex items-center space-x-4 opacity-80">
                    <spec.icon className="h-6 w-6 text-brand-gold" />
                    <span>{spec.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
