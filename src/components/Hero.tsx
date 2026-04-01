import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-becoming-teal/20 rounded-full blur-[120px] opacity-50 pointer-events-none mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12 w-full relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-becoming-teal/30 text-becoming-teal text-xs md:text-sm font-medium tracking-wide uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-becoming-teal animate-pulse" />
            The Ultimate Habits + Tasks System
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1] mb-8"
          >
            Master your time.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-becoming-cream to-becoming-teal glow-text">
              Master your life.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 font-light leading-relaxed md:leading-relaxed"
          >
            A premium digital tracker designed for those who demand more from themselves. Build discipline, focus, and better habits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a
              href="#pricing"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-becoming-teal text-becoming-black rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,240,255,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Becoming Better <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
            
            <div className="flex items-center gap-4 text-sm text-white/50">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://picsum.photos/seed/user${i}/40/40`} alt="User" className="w-8 h-8 rounded-full border-2 border-becoming-black" referrerPolicy="no-referrer" />
                ))}
              </div>
              <p>Join 10,000+ others</p>
            </div>
          </motion.div>
        </div>

        {/* Architecte Section (Replaced Product Preview) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 lg:gap-16 items-center text-left max-w-6xl mx-auto"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tighter mb-6">
              Become the Architect of <span className="text-becoming-teal glow-text">Your Day.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed md:leading-relaxed">
              The chaos of modern life demands absolute structure. BECOMING operates as your personal command center—engineered to forge unbreakable habits and execute your highest-leverage tasks.
            </p>
          </div>
          <div className="relative flex justify-center w-full">
            <div className="absolute inset-0 bg-becoming-teal/10 blur-[80px] rounded-full" />
            <img 
              src="https://i.postimg.cc/CLc3ncNj/unnamed-(88).jpg" 
              alt="Professional Office" 
              className="relative w-full h-auto object-cover rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
