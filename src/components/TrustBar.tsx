import { Shield, Award, Star } from 'lucide-react';

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
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center space-x-4 p-6 rounded-lg hover:bg-brand-stone/10 transition-colors"
              >
                <div className="flex-shrink-0">
                  <Icon className="h-10 w-10 text-brand-forest dark:text-brand-gold" strokeWidth={2} />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold"
                  >
                    {indicator.title}
                  </h3>
                  <p
                    className="text-sm opacity-80"
                  >
                    {indicator.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
