import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function ThankYou() {
  return (
    <main className="pt-32 pb-24 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-4 text-white"
        >
          Payment Confirmed! 🎉
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-white/70 font-light leading-relaxed mb-12"
        >
          Thank you for your purchase. Your digital product is ready to download.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-md mx-auto mb-8"
        >
          <a
            href="https://drive.google.com/file/d/1TTqR0SWeMDeRNN1wgloupj5IPHq6GOg4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-becoming-teal text-becoming-black rounded-[50px] font-bold text-lg uppercase tracking-widest overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_60px_rgba(0,240,255,0.6)] w-full"
          >
            <span className="relative z-10">
              ⬇️ Download Your Product Now
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-sm text-white/50"
        >
          Check your email for your receipt. If you have any issues, contact us.
        </motion.p>
      </div>
    </main>
  );
}
