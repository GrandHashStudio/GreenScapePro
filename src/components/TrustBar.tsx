import { Shield, Award, Star } from 'lucide-react';
import PremiumIcon from './PremiumIcon';

export default function TrustBar() {
  const indicators = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Full coverage protection',
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Trusted by thousands',
    },
    {
      icon: Star,
      title: '5-Star Rated',
      description: 'Exceptional service',
    },
  ];

  return (
    <section className="bg-transparent py-12 border-b border-green-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-6 p-6 rounded-3xl hover:bg-brand-gold/5 transition-all duration-500 group"
            >
              <div className="flex-shrink-0">
                <PremiumIcon icon={indicator.icon} size={28} />
              </div>
              <div>
                <h3 className="text-xl font-black">{indicator.title}</h3>
                <p className="text-sm font-bold opacity-60 tracking-wide uppercase">{indicator.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

