import { motion } from 'motion/react';
import { Target, CheckCircle2, LayoutDashboard, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <CheckCircle2 className="w-8 h-8 text-becoming-teal" />,
    title: "Build Better Habits",
    desc: "Visually track your streaks and build unbreakable momentum."
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-becoming-teal" />,
    title: "Organize Daily Tasks",
    desc: "A clean interface that removes friction from getting things done."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-becoming-teal" />,
    title: "Increase Productivity",
    desc: "Prioritize deep work and eliminate distractions."
  },
  {
    icon: <Target className="w-8 h-8 text-becoming-teal" />,
    title: "Achieve Long Term Goals",
    desc: "Break down massive ambitions into daily actionable steps."
  }
];

export default function ProductBenefits() {
  return (
    <section className="py-20 md:py-24 lg:py-32 relative overflow-hidden bg-becoming-dark border-y border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tighter mb-4"
          >
            Why Choose <span className="text-becoming-teal glow-text">BECOMING?</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed md:leading-relaxed">
            A system designed to transform your daily routine and accelerate your personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="glass p-8 rounded-[2rem] border border-white/10 hover:border-becoming-teal/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-becoming-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-becoming-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{benefit.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
