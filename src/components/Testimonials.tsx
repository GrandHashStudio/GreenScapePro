import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Homeowner',
      text: 'GreenScape Pro completely transformed our backyard into an entertainment paradise. The patio and fire pit area exceeded our expectations. Professional, punctual, and detail-oriented from start to finish.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      location: 'Property Manager',
      text: 'We have used their maintenance services for our commercial properties for three years now. Consistently reliable and the properties always look immaculate. Their team is responsive and goes above and beyond.',
      rating: 5,
    },
    {
      name: 'Jennifer & Tom Rodriguez',
      location: 'Homeowners',
      text: 'After years of struggling with our lawn, GreenScape Pro turned it into the healthiest on the block. Their lawn care program works wonders and the team is always friendly and knowledgeable. Highly recommend!',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            What Our Clients Say
          </h2>
          <p
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Trusted by hundreds of satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-green-800/10"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <p
                className="text-slate-700 mb-6 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}
              >
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p
                  className="font-bold text-gray-900"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {testimonial.name}
                </p>
                <p
                  className="text-sm text-slate-600"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
