import { CheckCircle } from 'lucide-react';

export default function About() {
  const benefits = [
    'Certified landscape professionals',
    'Free consultation and estimates',
    'Premium quality materials',
    'Satisfaction guaranteed',
    'Competitive pricing',
    'Eco-friendly practices',
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Professional landscaping team at work"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Why Choose Us
            </h2>
            <p
              className="text-lg text-slate-600 mb-6 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              With over 15 years of experience transforming outdoor spaces, we combine craftsmanship with creativity to deliver exceptional results. Our team of certified professionals is committed to exceeding your expectations on every project.
            </p>
            <p
              className="text-lg text-slate-600 mb-8 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              From initial design concepts to final installation, we handle every detail with precision and care. We pride ourselves on building lasting relationships with our clients through quality work and reliable service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-800 flex-shrink-0" />
                  <span
                    className="text-slate-700 font-medium"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-md"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get a Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
