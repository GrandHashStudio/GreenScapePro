import { useState } from 'react';
import BeforeAfter from './BeforeAfter';
import CaseStudyLayout from './CaseStudyLayout';

const projects = [
  {
    title: 'Modern Alpine Estate',
    category: 'Estate Renovation',
    image: '/images/alpine_estate_after.png',
    description: 'A complete transformation of a mountain-side property featuring multi-level stone terraces and native planting.',
    fullStory: 'Our goal was to harness the natural elevation of the site. We imported over 200 tons of local granite to build structural terraces that maximize the panoramic views while maintaining soil stability.',
    metrics: [
      { label: 'Stone Imported', value: '200 Tons' },
      { label: 'Native Species', value: '45' }
    ],
    architect: 'Julian Vance'
  },
  {
    title: 'Zen Sanctuary Garden',
    category: 'Landscape Design',
    image: '/images/zen_sanctuary.png?v=2',
    description: 'An urban backyard turned into a peaceful retreat with water features and minimalist architectural elements.',
    fullStory: 'In this dense urban environment, acoustic engineering was as important as aesthetics. The sound of the custom black-quartz water feature masks city noise, creating a true mental sanctuary.',
    metrics: [
      { label: 'Flow Rate', value: '50 GPM' },
      { label: 'Quartz Used', value: '1.5 Tons' }
    ],
    architect: 'Eleanor Thorne'
  },
  {
    title: 'The Contemporary Courtyard',
    category: 'Hardscaping',
    image: '/images/contemporary_courtyard.png?v=2',
    description: 'Bespoke entertainment hub with custom fire pit, integrated lighting, and premium Italian porcelain pavers.',
    fullStory: 'The homeowner required a four-season entertainment space. We installed a subterranean drainage system and high-efficiency gas lines for the fire features, all masked by masterfully laid porcelain.',
    metrics: [
      { label: 'Paver Precision', value: '1/16"' },
      { label: 'Light Zones', value: '12' }
    ],
    architect: 'Marcus Reed'
  },
  {
    title: 'Lakeside Manor Grounds',
    category: 'Estate Maintenance',
    image: '/images/lakeside_manor.png',
    description: 'Meticulous ongoing management of a 5-acre waterfront property, ensuring year-round visual excellence.',
    fullStory: 'Maintaining an ecosystem this large requires constant surveillance. We use moisture-sensing technology and organic horticultural practices to keep the estate at its peak seasonal potential.',
    metrics: [
      { label: 'Property Size', value: '5 Acres' },
      { label: 'Tech Sensors', value: '24' }
    ],
    architect: 'Eleanor Thorne'
  }
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-transparent relative transition-colors duration-500 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block bg-brand-forest/10 dark:bg-brand-gold/10 text-brand-forest dark:text-brand-gold px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6 transition-colors duration-500">Our Portfolio</div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Recent <span className="opacity-40">Masterpieces</span></h2>
          <p className="text-xl max-w-2xl mx-auto font-medium mb-20 opacity-70">
            Explore our curated selection of high-end outdoor living transformations.
          </p>
        </div>

        {/* Transformation Spotlight */}
        <div className="mb-32 animate-fade-in delay-200">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 w-full">
              <BeforeAfter 
                beforeImage="/images/alpine_estate_before.png"
                afterImage="/images/alpine_estate_after.png"
              />
            </div>
            <div className="lg:w-2/5 space-y-8">
              <div className="space-y-4">
                <p className="text-brand-gold font-bold uppercase tracking-widest text-sm">Case Study: 001</p>
                <h3 className="text-4xl font-black tracking-tight">The Alpine Estate Transformation</h3>
                <p className="text-xl leading-relaxed opacity-80">
                  We took a neglected, overgrown hillside and sculpted it into a multi-tiered sanctuary of leisure. 
                </p>
              </div>
              <ul className="space-y-4">
                {['Custom Italian Pavers', 'Automated Lighting', 'Native Sculptural Planting'].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 font-bold opacity-90">
                    <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setActiveProject(projects[0])}
                className="btn-primary !py-3 !px-6 text-base"
              >
                Read The Full Story
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setActiveProject(project)}
              className="group relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-2 cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="inline-block bg-brand-gold text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit shadow-lg">
                  {project.category}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight drop-shadow-md">
                  {project.title}
                </h3>
                <p className="text-white/80 max-w-md leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <CaseStudyLayout 
          project={activeProject} 
          onClose={() => setActiveProject(null)} 
        />
      )}
    </section>
  );
}
