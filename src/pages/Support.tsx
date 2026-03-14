import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Download, HelpCircle, Monitor, ChevronDown, Mail, MessageCircle } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const helpCards = [
    {
      icon: <Download className="w-8 h-8 text-becoming-teal" />,
      title: 'Getting Started',
      description: 'How to download and set up your tracker.'
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-becoming-teal" />,
      title: 'General FAQ',
      description: 'Answers to the most common productivity questions.'
    },
    {
      icon: <Monitor className="w-8 h-8 text-becoming-teal" />,
      title: 'Technical Help',
      description: 'Troubleshooting for digital files and access.'
    }
  ];

  const faqs = [
    {
      question: 'How do I receive my tracker after purchase?',
      answer: 'Instant email delivery. As soon as your payment is confirmed, you will receive an email with a secure download link to access your files immediately.'
    },
    {
      question: 'Is the tracker compatible with my device?',
      answer: 'Yes, it works seamlessly on Notion, PDF annotation apps (like GoodNotes or Notability), and Google Sheets, depending on the specific version you choose to use.'
    },
    {
      question: 'Can I get help setting up my habits?',
      answer: 'Absolutely. Please refer to the included Free Ebook, "The Psychology of Discipline," which provides a step-by-step framework for choosing and setting up the right habits for your goals.'
    }
  ];

  return (
    <main className="pt-40 pb-32 min-h-screen relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-becoming-teal/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-becoming-teal glow-text pb-2"
          >
            How can we help you grow?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Find answers, learn how to master your tracker, or get in touch with our team.
          </motion.p>

          {/* Decorative Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="max-w-2xl mx-auto relative group"
          >
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-white/40 group-focus-within:text-becoming-teal transition-colors duration-300" />
            </div>
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-5 pl-16 pr-6 text-white placeholder:text-white/30 outline-none focus:border-becoming-teal focus:bg-white/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] focus:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
            />
          </motion.div>
        </div>

        {/* Quick Help Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {helpCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-becoming-teal/40 transition-all duration-500 group relative overflow-hidden cursor-pointer hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-becoming-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(0,240,255,0.1)_inset] pointer-events-none rounded-3xl" />
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                {card.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-becoming-teal transition-colors duration-300">{card.title}</h3>
              <p className="text-white/60 font-light leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Top FAQs */}
        <div className="max-w-3xl mx-auto mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-white"
          >
            Top Questions
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-becoming-teal/50 shadow-[0_0_20px_rgba(0,240,255,0.1)]' : 'border-white/10 hover:border-white/20'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-becoming-teal' : 'text-white'}`}>
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 shrink-0 ${isOpen ? 'text-becoming-teal rotate-180' : 'text-white/40'}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-6 text-white/60 font-light leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Direct Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass rounded-3xl border border-white/10 p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-becoming-teal/5 to-transparent pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 mb-8">
            <span className="text-becoming-teal">⚡</span> Average response time: 4 hours
          </div>
          
          <h2 className="text-4xl font-display font-bold mb-10 text-white">Still need help?</h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/213554385620" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-becoming-teal text-becoming-black font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <a 
              href="mailto:becoming.213@gmail.com" 
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full glass border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
