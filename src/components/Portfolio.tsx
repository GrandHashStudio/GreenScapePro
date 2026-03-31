
const projects = [
  {
    title: 'Modern Alpine Estate',
    category: 'Estate Renovation',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'A complete transformation of a mountain-side property featuring multi-level stone terraces and native planting.'
  },
  {
    title: 'Zen Sanctuary Garden',
    category: 'Landscape Design',
    image: 'https://images.unsplash.com/photo-1558905734-b8301f5a91cd?auto=format&fit=crop&q=80&w=1200',
    description: 'An urban backyard turned into a peaceful retreat with water features and minimalist architectural elements.'
  },
  {
    title: 'The Contemporary Courtyard',
    category: 'Hardscaping',
    image: 'https://images.unsplash.com/photo-1590059132718-5eb8a27d5536?auto=format&fit=crop&q=80&w=1200',
    description: 'Bespoke entertainment hub with custom fire pit, integrated lighting, and premium Italian porcelain pavers.'
  },
  {
    title: 'Lakeside Manor Grounds',
    category: 'Estate Maintenance',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1200',
    description: 'Meticulous ongoing management of a 5-acre waterfront property, ensuring year-round visual excellence.'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-brand-stone relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block bg-brand-forest/10 text-brand-forest px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6">Our Portfolio</div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-forest mb-6 tracking-tight">Recent <span className="text-brand-slate opacity-60">Masterpieces</span></h2>
          <p className="text-xl text-brand-slate max-w-2xl mx-auto font-medium">
            Explore our curated selection of high-end outdoor living transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-2"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-forest via-brand-forest/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
              
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

        <div className="mt-20 text-center">
          <button className="btn-primary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
