import { Linkedin, Mail, Twitter } from 'lucide-react';

const architects = [
  {
    name: 'Julian Vance',
    role: 'Principal Landscape Architect',
    bio: 'Julian is a visionary in residential estate design, specializing in the balance between modern architectural forms and native botanical fluidity.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    philosophy: 'Structural Sincerity'
  },
  {
    name: 'Eleanor Thorne',
    role: 'Lead Horticulturalist',
    bio: 'With over 20 years of experience, Eleanor brings biological precision to every project, ensuring seasonal vibrancy and long-term ecosystem health.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600',
    philosophy: 'Ecological Resilience'
  },
  {
    name: 'Marcus Reed',
    role: 'Hardscape Engineer',
    bio: 'Marcus oversees the structural integrity of our most complex stone and water installations, focusing on artisanal craft and legacy-grade materials.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600',
    philosophy: 'Precision Artisanship'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-transparent relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 animate-fade-in">
          <div className="max-w-2xl">
            <div className="inline-block bg-brand-gold/10 text-brand-gold px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6">The Architects</div>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Humanizing <br />
              <span className="opacity-40">Elite Project Design</span>
            </h2>
          </div>
          <p className="text-xl max-w-sm leading-relaxed mb-2 font-medium opacity-80">
            Meet the award-winning visionaries behind our most iconic outdoor spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {architects.map((member, i) => (
            <div key={i} className="group relative">
              <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl mb-8">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex space-x-4 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 hover:bg-brand-gold transition-colors cursor-pointer">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="inline-block bg-brand-gold text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 shadow-lg">
                    {member.philosophy}
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight">{member.name}</h3>
                  <p className="text-white/60 font-bold uppercase tracking-wider text-xs mb-4">{member.role}</p>
                </div>
              </div>
              
              <div className="px-6">
                <p className="leading-relaxed font-medium opacity-80">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
