import { motion } from 'motion/react';
import { Users } from 'lucide-react';

export default function Community() {
  return (
    <section className="py-32 relative overflow-hidden bg-becoming-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="glass rounded-[3rem] border border-white/10 p-12 md:p-24 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-t from-becoming-teal/10 via-transparent to-transparent opacity-50" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-20 h-20 rounded-full bg-becoming-teal/10 flex items-center justify-center mx-auto mb-8 border border-becoming-teal/30"
            >
              <Users className="w-10 h-10 text-becoming-teal" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6"
            >
              Join the <span className="text-becoming-teal glow-text">Movement.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/60 font-light leading-relaxed mb-12"
            >
              When you purchase BECOMING, you're not just buying a tracker. You're joining a private community of individuals dedicated to mental growth, time mastery, and self-improvement.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 font-medium">
                Exclusive Discord Access
              </div>
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 font-medium">
                Weekly Accountability
              </div>
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 font-medium">
                Monthly Q&A Sessions
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
