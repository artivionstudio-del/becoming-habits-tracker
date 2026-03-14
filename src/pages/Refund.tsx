import React from 'react';
import { motion } from 'motion/react';
import { Download, Star, HeadphonesIcon } from 'lucide-react';

export default function Refund() {
  const sections = [
    {
      id: '01',
      title: 'Digital Nature of Product',
      content: 'The BECOMING Habits + Tasks Tracker and the accompanying Psychology of Discipline Ebook are digital products delivered instantly upon purchase. Because of this immediate access and the inability to "return" a digital file, we generally do not offer traditional refunds or returns.'
    },
    {
      id: '02',
      title: 'Satisfaction Guarantee',
      content: 'Our primary goal is your personal growth and satisfaction. If you encounter any technical issues, such as a corrupted file or difficulty accessing the tracker, we are committed to providing an immediate replacement or dedicated technical support to resolve the issue.'
    },
    {
      id: '03',
      title: 'Refund Eligibility',
      content: 'Refund requests will only be considered under exceptional circumstances, such as a verifiable technical failure that prevents access to the product, and must be made within 14 days of the original purchase date. Change of mind or lack of use does not qualify for a refund.'
    },
    {
      id: '04',
      title: 'How to Request Support',
      content: 'If you need assistance or believe you qualify for a refund under our eligibility terms, please contact our support team directly at becoming.213@gmail.com. For priority assistance, you may also reach out to us via our official WhatsApp channel.'
    }
  ];

  const trustCards = [
    {
      icon: <Download className="w-6 h-6 text-becoming-teal" />,
      title: 'Instant Access',
      description: 'Immediate digital delivery upon purchase.'
    },
    {
      icon: <Star className="w-6 h-6 text-becoming-teal" />,
      title: 'High Quality',
      description: 'Premium, meticulously crafted design.'
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-becoming-teal" />,
      title: 'Dedicated Support',
      description: 'Real human assistance when you need it.'
    }
  ];

  return (
    <main className="pt-40 pb-32 min-h-screen relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-becoming-teal/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-becoming-teal glow-text pb-2"
          >
            Refund Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Our commitment to your satisfaction and transparency.
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="space-y-24 mb-32">
          {sections.map((section, index) => (
            <motion.div 
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative pl-16 md:pl-24 group"
            >
              <span className="absolute left-0 top-[-8px] text-5xl md:text-6xl font-display font-bold text-becoming-teal/20 select-none transition-colors duration-500 group-hover:text-becoming-teal/40">
                {section.id}.
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-white drop-shadow-[0_0_12px_rgba(0,240,255,0.15)] group-hover:drop-shadow-[0_0_16px_rgba(0,240,255,0.4)] transition-all duration-500">
                {section.title}
              </h2>
              <p className="text-lg md:text-xl text-white/70 font-light leading-[1.8] md:leading-[2]">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {trustCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-becoming-teal/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-becoming-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                {card.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
