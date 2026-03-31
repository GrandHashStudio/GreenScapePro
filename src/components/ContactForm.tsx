import { useState } from 'react';
import { Send, Phone, Mail, Calendar } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Landscape Design',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert('Thank you! Our elite design team will contact you within 24 hours.');
  };

  return (
    <section id="contact" className="py-24 bg-brand-stone relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card !bg-white p-8 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-forest/5 -skew-x-12 translate-x-20 hidden lg:block"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <div className="inline-block bg-brand-forest/10 text-brand-forest px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6">Get Started</div>
              <h2 className="text-4xl md:text-6xl font-black text-brand-forest mb-8 tracking-tight">
                Request Your <br />
                <span className="text-brand-gold">Private Consultation</span>
              </h2>
              <p className="text-xl text-brand-slate mb-12 leading-relaxed font-medium">
                Ready to elevate your outdoor lifestyle? Fill out the form below and our specialists will reach out to schedule an on-site evaluation.
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-6 group">
                  <div className="bg-brand-stone p-4 rounded-2xl group-hover:bg-brand-gold transition-colors duration-500">
                    <Phone className="h-6 w-6 text-brand-forest group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-brand-slate/60 font-bold text-xs uppercase tracking-widest mb-1">Call Us Directly</p>
                    <p className="text-xl font-black text-brand-forest tracking-tight">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 group">
                  <div className="bg-brand-stone p-4 rounded-2xl group-hover:bg-brand-gold transition-colors duration-500">
                    <Mail className="h-6 w-6 text-brand-forest group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-brand-slate/60 font-bold text-xs uppercase tracking-widest mb-1">Email Inquiry</p>
                    <p className="text-xl font-black text-brand-forest tracking-tight">concierge@greenscapepro.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="bg-brand-stone p-4 rounded-2xl group-hover:bg-brand-gold transition-colors duration-500">
                    <Calendar className="h-6 w-6 text-brand-forest group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-brand-slate/60 font-bold text-xs uppercase tracking-widest mb-1">Availability</p>
                    <p className="text-xl font-black text-brand-forest tracking-tight">Mon – Sat: 8am – 6pm</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-slate uppercase tracking-wider ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-brand-stone/50 border border-brand-slate/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white transition-all font-medium"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-slate uppercase tracking-wider ml-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full bg-brand-stone/50 border border-brand-slate/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white transition-all font-medium"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-slate uppercase tracking-wider ml-1">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-brand-stone/50 border border-brand-slate/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white transition-all font-medium"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-slate uppercase tracking-wider ml-1">Service Interest</label>
                <select
                  className="w-full bg-brand-stone/50 border border-brand-slate/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white transition-all font-medium appearance-none"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option>Landscape Design</option>
                  <option>Hardscaping</option>
                  <option>Elite Lawn Care</option>
                  <option>Estate Maintenance</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-slate uppercase tracking-wider ml-1">Project Details</label>
                <textarea
                  placeholder="Tell us about your vision..."
                  rows={4}
                  className="w-full bg-brand-stone/50 border border-brand-slate/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white transition-all font-medium resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary !rounded-2xl flex items-center justify-center space-x-3 py-5 text-xl"
              >
                <span>Submit Request</span>
                <Send className="h-5 w-5" />
              </button>
              
              <p className="text-center text-brand-slate/50 text-sm font-medium">
                By submitting, you agree to our terms and privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
