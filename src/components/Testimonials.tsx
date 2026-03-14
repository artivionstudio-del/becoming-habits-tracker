import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Product Designer",
      text: "I've tried every habit tracker out there. BECOMING is the only one that stuck. The interface is so clean it actually makes me want to use it.",
      rating: 5,
      img: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      name: "David Chen",
      role: "Software Engineer",
      text: "The combination of task management and habit tracking in one place is a game-changer. My productivity has doubled since I started using this.",
      rating: 5,
      img: "https://picsum.photos/seed/david/100/100"
    },
    {
      name: "Elena Rodriguez",
      role: "Entrepreneur",
      text: "The free ebook alone is worth $50. The tracker itself is a masterpiece of minimalist design. Highly recommended for anyone serious about growth.",
      rating: 5,
      img: "https://picsum.photos/seed/elena/100/100"
    }
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 relative overflow-hidden bg-becoming-black">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-6xl font-display font-bold tracking-tighter mb-4 md:mb-6"
          >
            Don't just take our <span className="text-white/40">word for it.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed md:leading-relaxed"
          >
            Join thousands of high-performers who have already transformed their daily routines.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`glass p-8 md:p-10 rounded-[2rem] border border-white/10 hover:border-becoming-teal/30 transition-colors relative overflow-hidden group ${i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-becoming-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-becoming-teal fill-becoming-teal" />
                  ))}
                </div>
                
                <p className="text-lg text-white/80 font-light leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full border border-white/20"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-white/50">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
