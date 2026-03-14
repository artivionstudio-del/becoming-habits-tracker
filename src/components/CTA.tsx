import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-becoming-dark" id="pricing">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="glass rounded-[3rem] border border-becoming-teal/30 p-12 md:p-24 relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-b from-becoming-teal/20 via-transparent to-transparent opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-becoming-teal/10 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-becoming-teal/10 text-becoming-teal text-sm font-bold tracking-widest uppercase mb-8 border border-becoming-teal/20"
            >
              Limited Time Offer
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6"
            >
              Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-becoming-teal glow-text">Becoming.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/60 font-light leading-relaxed mb-12 max-w-2xl mx-auto"
            >
              Unlock your ultimate performance system. Get instant access to the elite Habits + Tasks Tracker and the exclusive 50-page 'Psychology of Discipline' playbook.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="flex items-end justify-center gap-2">
                <span className="text-6xl font-display font-bold text-white">€7.99</span>
                <span className="text-xl text-white/50 mb-2 font-light line-through">€29.00</span>
              </div>
              
              <Link
                to="/product"
                className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-becoming-black text-white border border-becoming-teal/50 rounded-[50px] font-bold text-xl uppercase overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_60px_rgba(0,240,255,0.6)] w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Access Now <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-becoming-teal/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-white/60 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-becoming-teal" /> Lifetime Access
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-becoming-teal" /> Free Ebook Included
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-becoming-teal" /> Plan-Specific Guarantee
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
