import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, Instagram, ShieldCheck, UserCheck, Globe, Send, CheckCircle2 } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', subject: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <main className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-becoming-teal/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6"
          >
            We are here for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-becoming-teal glow-text">your growth.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-white/60 font-light leading-relaxed"
          >
            Have a question about the Habits + Tasks Tracker? Our team is ready to assist you on your journey to becoming better.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          
          {/* Contact Form (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-becoming-teal/5 to-transparent pointer-events-none" />
            
            <h2 className="text-2xl font-display font-bold mb-8 relative z-10">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-becoming-teal transition-colors peer"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-becoming-teal transition-all duration-300 peer-focus:w-full shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                  {errors.name && <p className="text-becoming-teal text-xs mt-2 absolute -bottom-5">{errors.name}</p>}
                </div>
                
                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-becoming-teal transition-colors peer"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-becoming-teal transition-all duration-300 peer-focus:w-full shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                  {errors.email && <p className="text-becoming-teal text-xs mt-2 absolute -bottom-5">{errors.email}</p>}
                </div>
              </div>

              <div className="relative">
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-becoming-teal transition-colors peer"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-becoming-teal transition-all duration-300 peer-focus:w-full shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                {errors.subject && <p className="text-becoming-teal text-xs mt-2 absolute -bottom-5">{errors.subject}</p>}
              </div>

              <div className="relative">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-becoming-teal transition-colors peer resize-none"
                />
                <div className="absolute bottom-1 left-0 w-0 h-[2px] bg-becoming-teal transition-all duration-300 peer-focus:w-full shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                {errors.message && <p className="text-becoming-teal text-xs mt-2 absolute -bottom-4">{errors.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-becoming-teal text-becoming-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,240,255,0.4)] w-full sm:w-auto disabled:opacity-70 disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent!' : 'Send Message'} 
                  {!isSubmitting && !isSuccess && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  {isSuccess && <CheckCircle2 className="w-5 h-5" />}
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </button>
            </form>
          </motion.div>

          {/* "Total Trust" Sidebar (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Response Time Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-becoming-teal/10 border border-becoming-teal/20 text-becoming-teal font-medium text-sm w-fit">
              <span>⚡</span> Typical response time: Under 12 hours
            </div>

            {/* Direct Support */}
            <div className="glass p-8 rounded-3xl border border-white/10 space-y-8">
              <h3 className="text-xl font-display font-bold">Direct Support</h3>
              
              <div className="space-y-6">
                <a href="mailto:becoming.213@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-becoming-teal/10 group-hover:border-becoming-teal/30 transition-colors shrink-0">
                    <Mail className="w-5 h-5 text-white/60 group-hover:text-becoming-teal transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">Email Us</p>
                    <p className="font-medium text-white group-hover:text-becoming-teal transition-colors">becoming.213@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/213554385620" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-becoming-teal/10 group-hover:border-becoming-teal/30 transition-colors shrink-0">
                    <MessageCircle className="w-5 h-5 text-white/60 group-hover:text-becoming-teal transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-1">WhatsApp</p>
                    <p className="font-medium text-white group-hover:text-becoming-teal transition-colors">+213 554 38 56 20</p>
                  </div>
                </a>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-white/50 mb-4">Connect with us</p>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.instagram.com/inner_becoming/?utm_source=ig_web_button_share_sheet" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-becoming-teal hover:bg-becoming-teal/10 hover:border-becoming-teal/30 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@becoming_213?is_from_webapp=1&sender_device=pc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-becoming-teal hover:bg-becoming-teal/10 hover:border-becoming-teal/30 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-300"
                  >
                    <TikTokIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Trust & Security Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              <div className="flex items-center gap-3 text-white/60">
                <ShieldCheck className="w-5 h-5 text-becoming-teal" />
                <span className="text-sm">Secure Data</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <UserCheck className="w-5 h-5 text-becoming-teal" />
                <span className="text-sm">Human Support (No Bots)</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Globe className="w-5 h-5 text-becoming-teal" />
                <span className="text-sm">Global Community</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </main>
  );
}
