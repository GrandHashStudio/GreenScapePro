import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Homeowner',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
      text: 'GreenScape Pro completely transformed our backyard into an entertainment paradise. The patio and fire pit area exceeded our expectations. Professional, punctual, and detail-oriented from start to finish.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      location: 'Property Manager',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
      text: 'We have used their maintenance services for our commercial properties for three years now. Consistently reliable and the properties always look immaculate. Their team is responsive and goes above and beyond.',
      rating: 5,
    },
    {
      name: 'Jennifer & Tom Rodriguez',
      location: 'Homeowners',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150',
      text: 'After years of struggling with our lawn, GreenScape Pro turned it into the healthiest on the block. Their lawn care program works wonders and the team is always friendly and knowledgeable. Highly recommend!',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-forest relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-brand-stone to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Social Proof</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
            Trusted by homeowners and property managers across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] p-10 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex mb-6 text-brand-gold">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current"
                  />
                ))}
              </div>
              <p className="text-white text-lg italic mb-10 leading-relaxed font-medium">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-2xl object-cover ring-2 ring-brand-gold/50" />
                <div>
                  <p className="font-black text-white text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-white/50 font-bold text-sm uppercase tracking-wider">
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
