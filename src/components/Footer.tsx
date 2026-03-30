import { Phone, Mail, MapPin, Leaf } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-8 w-8 text-green-400" />
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                GreenScape Pro
              </span>
            </div>
            <p
              className="text-slate-300 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Transforming outdoor spaces with professional landscaping services for over 15 years.
            </p>
          </div>

          <div>
            <h3
              className="text-lg font-bold mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="tel:555-123-4567"
                className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5 text-green-400" />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>(555) 123-4567</span>
              </a>
              <a
                href="mailto:info@greenscapepro.com"
                className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 text-green-400" />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>info@greenscapepro.com</span>
              </a>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>
                  123 Garden Lane, Greenville, ST 12345
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3
              className="text-lg font-bold mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Services
            </h3>
            <ul className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li className="text-slate-300">Lawn Care</li>
              <li className="text-slate-300">Hardscaping</li>
              <li className="text-slate-300">Landscape Design</li>
              <li className="text-slate-300">Maintenance</li>
            </ul>
          </div>

          <div>
            <h3
              className="text-lg font-bold mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Get Started
            </h3>
            <p
              className="text-slate-300 mb-4 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Ready to transform your outdoor space? Contact us today for a free consultation.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-md"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get a Free Estimate
            </button>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p
            className="text-center text-slate-400"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © {currentYear} GreenScape Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
