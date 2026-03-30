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
<<<<<<< HEAD
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-forest/10 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=1200"
              alt="Elite landscaping design result"
              className="rounded-[2rem] shadow-2xl w-full h-[600px] object-cover relative z-10 border-8 border-white"
            />
            <div className="absolute -bottom-6 -left-6 bg-brand-forest text-white p-8 rounded-2xl shadow-2xl z-20 animate-fade-in">
              <div className="text-4xl font-black mb-1 text-brand-gold">15+</div>
              <div className="text-sm font-bold uppercase tracking-widest">Years of Excellence</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4">Our Legacy</div>
            <h2 className="text-4xl md:text-5xl font-black text-brand-forest mb-8 leading-tight">
              Crafting Nature <br /> Into Art Since 2011
            </h2>
            <p className="text-lg text-brand-slate mb-8 leading-relaxed font-medium">
              We don't just plant gardens; we design living environments. Our philosophy is rooted in the perfect balance between architectural structure and natural fluidity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="bg-brand-stone p-2 rounded-lg group-hover:bg-brand-gold transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-brand-forest group-hover:text-white" />
                  </div>
                  <span className="text-brand-slate font-bold tracking-tight">
=======
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
>>>>>>> 479324f34ce12aca4cd69b5d2d012ddb1e5f5a97
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
<<<<<<< HEAD
              className="btn-primary"
=======
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-md"
              style={{ fontFamily: 'Inter, sans-serif' }}
>>>>>>> 479324f34ce12aca4cd69b5d2d012ddb1e5f5a97
            >
              Get a Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
