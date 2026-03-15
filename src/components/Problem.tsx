import { motion } from 'motion/react';
import { AlertCircle, Clock, Brain } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-becoming-teal" />,
      title: "Time Slipping Away",
      desc: "Days blend into weeks. You're busy, but not productive. The important tasks keep getting pushed to tomorrow."
    },
    {
      icon: <Brain className="w-8 h-8 text-becoming-teal" />,
      title: "Mental Overload",
      desc: "Trying to remember everything drains your focus. The constant anxiety of forgetting something crucial."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-becoming-teal" />,
      title: "Broken Habits",
      desc: "Starting strong but failing to maintain consistency. The cycle of motivation followed by inevitable burnout."
    }
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 relative overflow-hidden bg-becoming-dark">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold tracking-tighter mb-6">
              Missing Deadlines? <br />
              <span className="text-white/40">Forgetting Tasks?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed md:leading-relaxed mb-10 md:mb-12">
              Without a system, you are relying on willpower. And willpower is a finite resource. When you don't manage your habits and tasks, they manage you.
            </p>

            <div className="space-y-6 md:space-y-8">
              {problems.map((prob, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="flex gap-4 md:gap-6 items-start"
                >
                  <div className="p-3 md:p-4 rounded-2xl bg-white/5 border border-white/10 glass shrink-0">
                    {prob.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{prob.title}</h3>
                    <p className="text-sm md:text-base text-white/50 leading-relaxed md:leading-relaxed">{prob.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-becoming-teal/10 blur-[100px] rounded-full" />
            <div className="relative w-full aspect-square rounded-[20px] overflow-hidden border border-white/10 shadow-2xl chaos-glow">
              <img 
                src="https://i.postimg.cc/1zrpk3Pz/unnamed-(89).jpg" 
                alt="Habits Tracker in Dubai" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
