import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function Terms() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      id: '01',
      title: 'Acceptance of Terms',
      content: 'By accessing and using the BECOMING Habits + Tasks Tracker, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our products or services.'
    },
    {
      id: '02',
      title: 'Digital Products',
      content: 'The BECOMING Habits + Tasks Tracker and its accompanying 12-page Deployment Protocol are delivered as instant digital downloads. Access to the master Google Sheets templates is granted immediately upon successful payment via embedded links within your PDF guide. Please ensure you have a standard, free Google account to duplicate and execute these systems.'
    },
    {
      id: '03',
      title: 'Intellectual Property',
      content: 'The design, branding, structure, and content of BECOMING are strictly protected by intellectual property laws. All materials provided are licensed for your personal use only. You may not resell, redistribute, modify, or reproduce any part of the BECOMING system.'
    },
    {
      id: '04',
      title: 'Refund Policy',
      content: 'Due to the immediate, accessible nature of digital assets, all sales are considered final once the product has been downloaded. However, we are committed to your growth—our support team is always available to assist you if you encounter any technical issues with your purchase.'
    },
    {
      id: '05',
      title: 'Limitation of Liability',
      content: 'BECOMING is a premium tool designed to facilitate self-improvement and personal growth. Your results depend entirely on your own discipline, effort, and commitment. We provide the system, but we do not guarantee specific personal or professional outcomes.'
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
            Terms of Service
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-becoming-teal/80 font-light tracking-wide uppercase text-sm"
          >
            Last updated: March 2026
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <motion.div 
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="numbered-section group"
            >
              <div className="number">
                {section.id}.
              </div>
              <div className="content">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-white drop-shadow-[0_0_12px_rgba(0,240,255,0.15)] group-hover:drop-shadow-[0_0_16px_rgba(0,240,255,0.4)] transition-all duration-500">
                  {section.title}
                </h2>
                <p className="text-lg md:text-xl text-white/70 font-light leading-[1.8] md:leading-[2]">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 md:bottom-12 md:right-12 p-4 rounded-full glass border border-becoming-teal/50 text-becoming-teal hover:bg-becoming-teal hover:text-becoming-black hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 z-50 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
