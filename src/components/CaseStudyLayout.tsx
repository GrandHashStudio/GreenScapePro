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
    <div className="fixed inset-0 z-[60] bg-white overflow-y-auto animate-fade-in">
      <nav className="sticky top-0 z-10 glass-nav py-4 px-6 flex justify-between items-center">
        <button 
          onClick={onClose}
          className="flex items-center space-x-2 text-brand-forest font-bold group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </button>
        <div className="text-brand-gold font-black uppercase tracking-widest text-sm">
          GreenScape Case Study: {project.title}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-block bg-brand-forest/10 text-brand-forest px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                {project.category}
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-brand-forest leading-[1.05] tracking-tight">
                {project.title}
              </h1>
              <p className="text-2xl text-brand-slate leading-relaxed font-medium">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {project.metrics?.map((metric, i) => (
                <div key={i} className="glass-card !bg-brand-stone/30 p-8 text-center group hover:!bg-brand-gold transition-colors duration-500">
                  <div className="text-4xl font-black text-brand-forest mb-2 group-hover:text-white">{metric.value}</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-brand-slate group-hover:text-white/80">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-8 bg-brand-stone p-12 rounded-[2.5rem]">
              <h2 className="text-3xl font-black text-brand-forest tracking-tight">The Architectural Vision</h2>
              <div className="text-lg text-brand-slate leading-relaxed font-medium space-y-6">
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
              className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-4xl" 
            />
            
            <div className="glass-card p-10 space-y-8">
              <h3 className="text-2xl font-black text-brand-forest tracking-tight">Technical Specifications</h3>
              <ul className="space-y-4">
                {[
                  { icon: Ruler, text: '2,500 sq ft hardscape installation' },
                  { icon: Clock, text: 'Project duration: 12 weeks' },
                  { icon: MapPin, text: 'Site analysis & topographic survey complete' },
                  { icon: CheckCircle, text: 'Custom material sourcing & procurement' }
                ].map((spec, i) => (
                  <li key={i} className="flex items-center space-x-4 text-brand-slate font-bold">
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
