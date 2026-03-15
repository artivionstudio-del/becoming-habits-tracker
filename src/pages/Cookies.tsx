import React from 'react';
import { motion } from 'motion/react';

export default function Cookies() {
  const sections = [
    {
      id: '01',
      title: 'What are Cookies?',
      content: 'Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.'
    },
    {
      id: '02',
      title: 'How We Use Them',
      content: 'We use cookies to enhance your experience on the BECOMING platform. This includes essential cookies required for product delivery and security, as well as functional cookies that remember your preferences and settings to provide a seamless journey.'
    },
    {
      id: '03',
      title: 'Third-Party Cookies',
      content: 'In addition to our own cookies, we may also use various third-party cookies from trusted partners. These tools, such as analytics providers and secure payment processors, help us understand how users interact with BECOMING and ensure a reliable service.'
    },
    {
      id: '04',
      title: 'Your Choices',
      content: 'You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting or amending your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas may be restricted.'
    }
  ];

  const cookieTypes = [
    {
      type: 'Essential',
      purpose: 'Strictly necessary for the website to function securely and deliver digital products.',
      duration: 'Session'
    },
    {
      type: 'Functional',
      purpose: 'Remembers your preferences and settings for a personalized experience.',
      duration: 'Persistent'
    },
    {
      type: 'Analytics',
      purpose: 'Helps us understand how visitors interact with the site to improve our offerings.',
      duration: 'Persistent'
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
            Cookie Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto"
          >
            We use cookies to enhance your journey towards becoming your best self.
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="space-y-4 mb-24">
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

        {/* Interactive List / Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-display font-bold mb-8 text-white">Types of Cookies We Use</h3>
          <div className="border border-becoming-teal/20 rounded-2xl overflow-hidden glass">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 border-b border-becoming-teal/20 bg-becoming-teal/5">
              <div className="font-semibold text-becoming-teal">Type</div>
              <div className="font-semibold text-becoming-teal md:col-span-2">Purpose</div>
              <div className="font-semibold text-becoming-teal">Duration</div>
            </div>
            <div className="divide-y divide-becoming-teal/10">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 hover:bg-white/5 transition-colors duration-300">
                  <div className="text-white font-medium">{cookie.type}</div>
                  <div className="text-white/70 font-light md:col-span-2">{cookie.purpose}</div>
                  <div className="text-white/50 font-light text-sm">{cookie.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
