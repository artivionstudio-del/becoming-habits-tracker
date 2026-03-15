import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Target, Clock, TrendingUp, UserCheck, Repeat, Focus, Shield, ArrowUpRight, Star } from 'lucide-react';

const missions = [
  { icon: Repeat, title: 'Build Better Habits', desc: 'Rewire your daily routines for long-term success.' },
  { icon: Clock, title: 'Organize Your Time', desc: 'Take back control of your schedule and focus on what matters.' },
  { icon: Target, title: 'Achieve Meaningful Goals', desc: 'Turn vague ambitions into actionable, step-by-step plans.' },
  { icon: UserCheck, title: 'Become Your Best Self', desc: 'Unlock your potential through consistent daily action.' }
];

const philosophies = [
  { icon: Repeat, title: 'Consistency', desc: 'Small daily actions compound into massive results over time.' },
  { icon: Focus, title: 'Focus', desc: 'Eliminate distractions and channel your energy into deep work.' },
  { icon: Shield, title: 'Discipline', desc: 'Doing what needs to be done, even when you don\'t feel like it.' },
  { icon: TrendingUp, title: 'Growth', desc: 'Continuous improvement in every area of your life.' }
];

const testimonials = [
  { name: 'Sarah J.', role: 'Entrepreneur', text: '"BECOMING completely changed how I approach my day. The philosophy behind it is just as powerful as the tool itself."', img: 'https://picsum.photos/seed/user1/100/100' },
  { name: 'David M.', role: 'Designer', text: '"Finally, a system that understands that productivity is about mindset, not just checking boxes. Beautifully designed."', img: 'https://picsum.photos/seed/user2/100/100' },
  { name: 'Elena R.', role: 'Writer', text: '"The focus on consistency over intensity has helped me write every single day. I cannot recommend this enough."', img: 'https://picsum.photos/seed/user3/100/100' }
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section ref={containerRef} className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-24">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] bg-becoming-teal/10 rounded-full blur-[120px]" />
        </motion.div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 glass text-sm font-medium tracking-wide text-white/80"
          >
            OUR STORY
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8 leading-tight"
          >
            The Journey of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Becoming Better</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto"
          >
            BECOMING was created to help people take control of their time, habits, and personal growth.
          </motion.p>
        </div>
      </section>

      {/* 2. BRAND STORY */}
      <section className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter">The Origin of BECOMING</h2>
              <div className="space-y-6 text-white/60 font-light leading-relaxed text-lg">
                <p>
                  We looked around and saw a world overwhelmed by distraction. People struggle with discipline, habits, and productivity not because they lack ambition, but because they lack a clear, actionable system.
                </p>
                <p>
                  Most tools are either too complex, requiring hours of setup, or too simple, failing to address the psychology of habit formation.
                </p>
                <p>
                  BECOMING was created to bridge this gap. We wanted to provide a simple, elegant system that helps people improve their lives daily—focusing on the vital few actions that actually move the needle.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[24px] overflow-hidden border border-white/10 glass p-2 flex items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-becoming-teal/20 to-transparent opacity-50" />
              <img 
                src="https://i.postimg.cc/Y0DLdhcF/unnamed-(98).jpg" 
                alt="Brand Story" 
                className="w-full h-full opacity-80 mix-blend-luminosity"
                style={{ borderRadius: '20px', aspectRatio: '4/3', objectFit: 'cover' }}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MISSION SECTION */}
      <section className="py-24 relative bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-6"
            >
              Our Mission
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 font-light max-w-2xl mx-auto"
            >
              We exist to equip you with the tools and mindset required to:
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((mission, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8 rounded-2xl border border-white/10 hover:border-becoming-teal/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-becoming-teal/10 group-hover:text-becoming-teal transition-all">
                  <mission.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{mission.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{mission.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PHILOSOPHY SECTION */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-32"
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-6">The Philosophy of Becoming</h2>
                <p className="text-white/60 font-light leading-relaxed text-lg mb-8">
                  Personal growth isn't about massive, overnight transformations. It happens through small, intentional daily actions that compound over time.
                </p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {philosophies.map((phil, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
                >
                  <phil.icon className="w-8 h-8 text-becoming-teal mb-6" />
                  <h3 className="text-xl font-semibold mb-3">{phil.title}</h3>
                  <p className="text-white/50 leading-relaxed">{phil.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMUNITY SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-becoming-teal/5" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-6"
            >
              A Community of People Improving Their Lives
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/60 font-light"
            >
              BECOMING is more than a product; it is a movement of individuals dedicated to elevating their habits, mindset, and daily execution.
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 hover:border-becoming-teal transition-colors"
              >
                <img src={`https://picsum.photos/seed/avatar${i}/100/100`} alt="Community Member" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIAL SECTION */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border border-white/10 flex flex-col h-full"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-becoming-teal fill-becoming-teal" />
                  ))}
                </div>
                <p className="text-white/80 font-light leading-relaxed mb-8 flex-grow">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full border border-white/20" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-white/50">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-32 relative border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8"
          >
            Start Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Becoming Journey</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="/product"
              className="inline-flex items-center gap-3 bg-white text-becoming-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Get the Habits + Tasks Tracker
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
