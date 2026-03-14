import { motion } from 'motion/react';

export default function Showcase() {
  const features = [
    {
      title: "Strategic Habit Architecture",
      desc: "Master your lifestyle by engineering an unshakeable foundation of consistency. Monitor your evolution and celebrate every daily victory.",
      img: "https://i.postimg.cc/3xQCFvZF/unnamed-(91).jpg"
    },
    {
      title: "Advanced Task Commander",
      desc: "Your centralized intelligence hub. Eliminate the noise and prioritize your next mission-critical move with surgical precision.",
      img: "https://i.postimg.cc/FFZ7BJm7/unnamed-(92).jpg"
    }
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 relative overflow-hidden bg-becoming-dark">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter mb-6">
            Inside the <span className="text-becoming-teal glow-text">Tracker.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed md:leading-relaxed">
            Everything you need to master your time, beautifully designed and seamlessly integrated.
          </p>
        </div>

        <div className="space-y-20 md:space-y-24 lg:space-y-32">
          {features.map((feature, i) => (
            <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-12 lg:gap-16`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-4 md:space-y-6"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-becoming-teal/10 flex items-center justify-center text-becoming-teal font-display font-bold text-lg md:text-xl mb-6 md:mb-8">
                  0{i + 1}
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">{feature.title}</h3>
                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed md:leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="flex-1 relative w-full"
              >
                <div className="absolute inset-0 bg-becoming-teal/20 blur-[80px] rounded-full mix-blend-screen opacity-50" />
                <div className="relative rounded-[20px] overflow-hidden border border-white/10 glass p-2 shadow-2xl shadow-becoming-teal/10">
                  <img 
                    src={feature.img} 
                    alt={feature.title} 
                    className="w-full aspect-square object-cover rounded-[18px] opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
