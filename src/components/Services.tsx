import { Scissors, Hammer, Palette, Calendar } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: 'Lawn Care',
      description: 'Professional mowing, edging, and fertilization to keep your lawn lush and healthy year-round. We provide consistent maintenance schedules tailored to your property needs.',
    },
    {
      icon: Hammer,
      title: 'Hardscaping',
      description: 'Custom patios, walkways, retaining walls, and outdoor living spaces built with premium materials. Transform your yard into a functional outdoor retreat.',
    },
    {
      icon: Palette,
      title: 'Landscape Design',
      description: 'Creative design solutions that blend aesthetics with functionality. From garden beds to complete outdoor makeovers, we bring your vision to life.',
    },
    {
      icon: Calendar,
      title: 'Maintenance',
      description: 'Year-round property maintenance including seasonal cleanups, mulching, pruning, and snow removal. Keep your landscape looking pristine in every season.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Our Services
          </h2>
          <p
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Comprehensive landscaping solutions for residential and commercial properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-800/10"
              >
                <div className="mb-6">
                  <Icon className="h-12 w-12 text-green-800" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-slate-600 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
