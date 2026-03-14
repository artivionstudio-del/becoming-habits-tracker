import { motion } from 'motion/react';
import { Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Solution() {
  return (
    <section id="solution" className="py-32 relative overflow-hidden bg-becoming-black">
      {/* Background Marble Texture */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <img 
          src="https://i.postimg.cc/rmdP8w5t/unnamed-2026-03-13T163423-800.jpg" 
          alt="Marble Texture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-becoming-black via-transparent to-becoming-black" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-becoming-teal/30 text-becoming-teal text-sm font-medium tracking-wide uppercase">
              The Solution
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to="/product"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-becoming-teal text-becoming-black rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,240,255,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Access <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
