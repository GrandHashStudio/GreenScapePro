import { useState } from 'react';
import { Send, Phone, Mail, Calendar, CheckCircle, X } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Landscape Design',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Landscape Design',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card !bg-white/5 dark:!bg-white/[0.02] p-8 md:p-16 shadow-2xl relative overflow-hidden backdrop-blur-md border border-black/5 dark:border-white/5">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-forest/5 dark:bg-brand-gold/5 -skew-x-12 translate-x-20 hidden lg:block"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <div className="inline-block bg-brand-forest/10 dark:bg-brand-gold/10 text-brand-forest dark:text-brand-gold px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6">Get Started</div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
                Request Your <br />
                <span className="text-brand-gold">Private Consultation</span>
              </h2>
              <p className="text-xl mb-12 leading-relaxed font-medium opacity-80">
                Ready to elevate your outdoor lifestyle? Fill out the form below and our specialists will reach out to schedule an on-site evaluation.
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-6 group">
                  <div className="bg-brand-stone/50 dark:bg-white/5 p-4 rounded-2xl group-hover:bg-brand-gold transition-colors duration-500">
                    <Phone className="h-6 w-6 text-brand-forest dark:text-brand-gold group-hover:text-white" />
                  </div>
                  <div>
                    <p className="opacity-60 font-bold text-xs uppercase tracking-widest mb-1">Call Us Directly</p>
                    <p className="text-xl font-black tracking-tight">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 group">
                  <div className="bg-brand-stone/50 dark:bg-white/5 p-4 rounded-2xl group-hover:bg-brand-gold transition-colors duration-500">
                    <Mail className="h-6 w-6 text-brand-forest dark:text-brand-gold group-hover:text-white" />
                  </div>
                  <div>
                    <p className="opacity-60 font-bold text-xs uppercase tracking-widest mb-1">Email Inquiry</p>
                    <p className="text-xl font-black tracking-tight">concierge@greenscapepro.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="bg-brand-stone/50 dark:bg-white/5 p-4 rounded-2xl group-hover:bg-brand-gold transition-colors duration-500">
                    <Calendar className="h-6 w-6 text-brand-forest dark:text-brand-gold group-hover:text-white" />
                  </div>
                  <div>
                    <p className="opacity-60 font-bold text-xs uppercase tracking-widest mb-1">Availability</p>
                    <p className="text-xl font-black tracking-tight">Mon – Sat: 8am – 6pm</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider ml-1 opacity-70">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-brand-stone/50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white dark:focus:bg-white/10 transition-all font-medium"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider ml-1 opacity-70">Phone Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full bg-brand-stone/50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white dark:focus:bg-white/10 transition-all font-medium"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider ml-1 opacity-70">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-brand-stone/50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white dark:focus:bg-white/10 transition-all font-medium"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider ml-1 opacity-70">Service Interest</label>
                <select
                  className="w-full bg-brand-stone/50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white dark:focus:bg-white/10 transition-all font-medium appearance-none"
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
                <label className="text-sm font-bold uppercase tracking-wider ml-1 opacity-70">Project Details</label>
                <textarea
                  placeholder="Tell us about your vision..."
                  rows={4}
                  className="w-full bg-brand-stone/50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white dark:focus:bg-white/10 transition-all font-medium resize-none"
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
              
              <p className="text-center opacity-50 text-sm font-medium">
                By submitting, you agree to our terms and privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsSubmitted(false)}
          />
          <div className="relative bg-white dark:bg-[#0c1a16] border border-black/10 dark:border-brand-gold/20 rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full animate-popup">
            <button 
              onClick={() => setIsSubmitted(false)}
              className="absolute top-6 right-6 text-black/40 hover:text-black dark:text-white/40 dark:hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 bg-brand-forest/10 dark:bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 premium-glow">
                <CheckCircle className="h-10 w-10 text-brand-forest dark:text-brand-gold" />
              </div>
              
              <h3 className="text-3xl font-black mb-4 tracking-tight">
                Thanks for Submitting!
              </h3>
              
              <p className="text-lg opacity-80 leading-relaxed mb-8">
                Your request for a private consultation has been received. Our elite design team will contact you shortly to schedule your on-site evaluation.
              </p>
              
              <button 
                onClick={() => setIsSubmitted(false)}
                className="w-full btn-primary !rounded-2xl py-4"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
