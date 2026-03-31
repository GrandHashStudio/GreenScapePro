import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Homeowner',
    summary: 'Exceeded every expectation.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    text: 'GreenScape Pro completely transformed our backyard into an entertainment paradise. The patio and fire pit area exceeded our expectations. Professional, punctual, and detail-oriented from start to finish.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    location: 'Property Manager',
    summary: 'Reliable and immaculate results.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    text: 'We have used their maintenance services for our commercial properties for three years now. Consistently reliable and the properties always look immaculate. Their team is responsive and goes above and beyond.',
    rating: 5,
  },
  {
    name: 'Jennifer & Tom Rodriguez',
    location: 'Homeowners',
    summary: 'Healthiest lawn on the block.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150',
    text: 'After years of struggling with our lawn, GreenScape Pro turned it into the healthiest on the block. Their lawn care program works wonders and the team is always friendly and knowledgeable. Highly recommend!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-32 bg-brand-forest dark:bg-[#061e18] relative overflow-hidden transition-colors duration-500">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent opacity-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-block bg-white/10 backdrop-blur-md text-brand-gold px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6">Testimonials</div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
            Voices of <span className="text-brand-gold">Excellence</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Discover why the region's most discerning homeowners trust us with their outdoor legacies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group glass-card !bg-white/5 !border-white/10 p-10 hover:!bg-white/10 transition-all duration-500 h-full flex flex-col"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex text-brand-gold">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-gold" />
                  ))}
                </div>
                <Quote className="h-10 w-10 text-white/5 group-hover:text-brand-gold/20 transition-colors" />
              </div>

              <h4 className="text-xl font-bold text-white mb-4 tracking-tight">
                "{testimonial.summary}"
              </h4>

              <p className="text-white/70 text-lg italic mb-12 leading-relaxed font-medium flex-grow">
                {testimonial.text}
              </p>

              <div className="flex items-center space-x-4 pt-8 border-t border-white/5">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-2xl object-cover ring-2 ring-brand-gold/20 group-hover:ring-brand-gold/50 transition-all duration-500" 
                />
                <div>
                  <p className="font-black text-white text-lg tracking-tight">
                    {testimonial.name}
                  </p>
                  <p className="text-brand-gold font-bold text-xs uppercase tracking-widest">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
