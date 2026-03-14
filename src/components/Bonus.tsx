import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

export default function Bonus() {
  return (
    <section className="py-32 relative overflow-hidden bg-becoming-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="glass rounded-[3rem] border border-becoming-teal/30 p-12 md:p-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-becoming-teal/10 via-transparent to-transparent opacity-50" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-becoming-teal/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-becoming-teal/10 text-becoming-teal text-sm font-bold tracking-widest uppercase mb-8 border border-becoming-teal/20">
                <BookOpen className="w-4 h-4" />
                Free Bonus Included
              </div>
              
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6 leading-tight">
                The BECOMING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-becoming-teal to-white glow-text">
                  Quick-Start Guide.
                </span>
              </h2>
              
              <p className="text-xl text-white/70 font-light leading-relaxed mb-8">
                Get our exclusive 12-page guide free with your purchase. Learn to master your new system in minutes. This practical guide explains step-by-step how to set up your trackers, optimize your routine, and get the most out of every feature for immediate results.
              </p>
              
              <ul className="space-y-4 mb-12">
                {[
                  'Quick Setup: Install your tracker in under 2 minutes.', 
                  'System Maximization: Tips to ensure you never miss a habit.', 
                  'Daily Workflow: How to organize your tasks for total clarity.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 font-medium">
                    <div className="w-6 h-6 rounded-full bg-becoming-teal/20 flex items-center justify-center text-becoming-teal text-xs shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-sm text-white/50 uppercase tracking-widest font-semibold">
                The essential companion to your tracker — YOURS FREE
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
              className="relative perspective-1000"
            >
              <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-xl overflow-hidden border border-white/20 shadow-2xl shadow-becoming-teal/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="https://i.postimg.cc/sDTKsXP1/unnamed-(93).jpg" alt="The BECOMING Quick-Start Guide Cover" className="w-full h-full object-cover opacity-90" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-becoming-black/80 via-becoming-black/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-display font-bold text-white mb-2">User Guide</h3>
                  <p className="text-becoming-teal font-medium">BECOMING Series</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
