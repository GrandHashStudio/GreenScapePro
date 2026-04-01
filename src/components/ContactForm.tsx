import { useState } from 'react';
import { Send, Phone, Mail, Calendar, CheckCircle, X } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    otherService: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.service) newErrors.service = 'Please select a service interest.';
    if (formData.service === 'Other' && (!formData.otherService || !formData.otherService.trim())) {
      newErrors.otherService = 'Please specify your service interest.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      otherService: '',
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

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider ml-1 opacity-70">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className={`w-full bg-brand-stone/50 dark:bg-white/5 border ${errors.name ? 'border-red-500/50 focus:ring-red-500/50 dark:border-red-500/50 dark:focus:ring-red-500/50' : 'border-black/5 dark:border-white/10 focus:ring-brand-gold'} rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:bg-white dark:focus:bg-white/10 transition-all font-medium`}
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                  />
                  {errors.name && <p className="text-red-600 dark:text-red-400 text-xs ml-2 mt-1 font-bold">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider ml-1 opacity-70">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    className={`w-full bg-brand-stone/50 dark:bg-white/5 border ${errors.phone ? 'border-red-500/50 focus:ring-red-500/50 dark:border-red-500/50 dark:focus:ring-red-500/50' : 'border-black/5 dark:border-white/10 focus:ring-brand-gold'} rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:bg-white dark:focus:bg-white/10 transition-all font-medium`}
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                  />
                  {errors.phone && <p className="text-red-600 dark:text-red-400 text-xs ml-2 mt-1 font-bold">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider ml-1 opacity-70">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full bg-brand-stone/50 dark:bg-white/5 border ${errors.email ? 'border-red-500/50 focus:ring-red-500/50 dark:border-red-500/50 dark:focus:ring-red-500/50' : 'border-black/5 dark:border-white/10 focus:ring-brand-gold'} rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:bg-white dark:focus:bg-white/10 transition-all font-medium`}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                />
                {errors.email && <p className="text-red-600 dark:text-red-400 text-xs ml-2 mt-1 font-bold">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider ml-1 opacity-70">Service Interest</label>
                <select
                  className={`w-full bg-brand-stone/50 dark:bg-white/5 border ${errors.service ? 'border-red-500/50 focus:ring-red-500/50 dark:border-red-500/50 dark:focus:ring-red-500/50' : 'border-black/5 dark:border-white/10 focus:ring-brand-gold'} rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:bg-white dark:focus:bg-white/10 transition-all font-medium appearance-none ${!formData.service ? 'text-black/50 dark:text-white/50' : ''}`}
                  value={formData.service}
                  onChange={(e) => {
                    setFormData({ ...formData, service: e.target.value });
                    if (errors.service) setErrors({ ...errors, service: '' });
                  }}
                >
                  <option value="" disabled>Choose below</option>
                  <option value="Landscape Design">Landscape Design</option>
                  <option value="Hardscaping">Hardscaping</option>
                  <option value="Elite Lawn Care">Elite Lawn Care</option>
                  <option value="Estate Maintenance">Estate Maintenance</option>
                  <option value="Other">Other</option>
                </select>
                {errors.service && <p className="text-red-600 dark:text-red-400 text-xs ml-2 mt-1 font-bold">{errors.service}</p>}
              </div>

              {formData.service === 'Other' && (
                <div className="space-y-2 animate-popup">
                  <label className="text-sm font-bold uppercase tracking-wider ml-1 opacity-70">Specify Service</label>
                  <input
                    type="text"
                    placeholder="Briefly describe the service you need..."
                    className={`w-full bg-brand-stone/50 dark:bg-white/5 border ${errors.otherService ? 'border-red-500/50 focus:ring-red-500/50 dark:border-red-500/50 dark:focus:ring-red-500/50' : 'border-black/5 dark:border-white/10 focus:ring-brand-gold'} rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:bg-white dark:focus:bg-white/10 transition-all font-medium`}
                    value={formData.otherService}
                    onChange={(e) => {
                      setFormData({ ...formData, otherService: e.target.value });
                      if (errors.otherService) setErrors({ ...errors, otherService: '' });
                    }}
                  />
                  {errors.otherService && <p className="text-red-600 dark:text-red-400 text-xs ml-2 mt-1 font-bold">{errors.otherService}</p>}
                </div>
              )}

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
