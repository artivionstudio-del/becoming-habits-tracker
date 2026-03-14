import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function Privacy() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = [
    {
      id: '01',
      title: 'Information We Collect',
      content: [
        'We collect email addresses for product delivery (Habits + Tasks Tracker and Ebook).',
        'We collect information for newsletter updates and important announcements.',
        'We securely process payment information during checkout.'
      ]
    },
    {
      id: '02',
      title: 'How We Use Your Data',
      content: [
        'To provide immediate access to your purchased digital tools.',
        'To process payments securely and prevent fraudulent transactions.',
        'To improve and personalize the BECOMING experience for our community.'
      ]
    },
    {
      id: '03',
      title: 'Data Security',
      content: [
        'We employ industry-standard encryption protocols to protect your personal information.',
        'All sensitive data is transmitted via secure, encrypted channels.',
        'We regularly review our security practices to ensure your data remains safe.'
      ]
    },
    {
      id: '04',
      title: 'Cookies & Tracking',
      content: [
        'We use minimal cookies strictly to enhance website performance.',
        'Cookies help us understand user behavior to improve our user experience.',
        'You can manage or disable cookies through your browser settings at any time.'
      ]
    },
    {
      id: '05',
      title: 'Third-Party Services',
      content: [
        'Your data is only shared with trusted, essential partners (such as payment processors).',
        'We only share the minimum amount of data necessary to fulfill your orders.',
        'We never sell your personal information to third-party data brokers or advertisers.'
      ]
    },
    {
      id: '06',
      title: 'Your Rights',
      content: [
        'You have the right to request access to the personal data we hold about you.',
        'You can request updates or corrections to any inaccurate information.',
        'You may request the deletion of your data at any time by contacting our support team.'
      ]
    }
  ];

  return (
    <main className="pt-40 pb-32 min-h-screen relative overflow-hidden">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-becoming-teal origin-left z-[60] shadow-[0_0_10px_rgba(0,240,255,0.5)]"
        style={{ scaleX }}
      />

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
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Your trust is our priority. Learn how we protect your data.
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="space-y-24">
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
              <ul className="space-y-4">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg text-white/70 font-light leading-[1.8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-becoming-teal/50 mt-2.5 shrink-0 group-hover:bg-becoming-teal transition-colors duration-500 shadow-[0_0_5px_rgba(0,240,255,0.3)] group-hover:shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
