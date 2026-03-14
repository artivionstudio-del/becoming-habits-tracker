import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    id: 1,
    title: "The ultimate command center.",
    text: "This tracker completely changed how I approach my day. The interface is stunning and it actually makes me want to complete my habits. I've been using it for 3 months and my productivity has skyrocketed.",
    name: "David M.",
    date: "1 week ago"
  },
  {
    id: 2,
    title: "A game changer for discipline.",
    text: "I used to struggle with consistency, but the visual streaks in this system make it impossible to ignore my goals. The dark mode aesthetic is just perfect.",
    name: "Sarah L.",
    date: "2 weeks ago"
  },
  {
    id: 3,
    title: "Worth every penny.",
    text: "The combination of the ebook and the tracker is incredibly powerful. It's not just a template, it's a complete system for personal growth.",
    name: "James K.",
    date: "1 month ago"
  },
  {
    id: 4,
    title: "Minimalist and effective.",
    text: "No clutter, no unnecessary features. Just exactly what you need to get things done. The automated progress bars are a nice touch.",
    name: "Elena R.",
    date: "1 month ago"
  },
  {
    id: 5,
    title: "Finally, something that works.",
    text: "I've tried dozens of apps and planners, but this Notion system is the only one that stuck. It's flexible enough to adapt to my chaotic schedule.",
    name: "Marcus T.",
    date: "2 months ago"
  },
  {
    id: 6,
    title: "Incredible value.",
    text: "The amount of detail put into this tracker is insane. It covers everything from daily habits to yearly goals. Highly recommend the premium bundle.",
    name: "Jessica W.",
    date: "2 months ago"
  }
];

export default function Reviews() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <main className="pt-32 pb-24 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-white mb-6"
          >
            The Wall of Discipline.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#a3a3a3] font-light mb-12"
          >
            Real results from those who chose to become elite.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex flex-col items-center justify-center p-8 rounded-3xl border border-[#1a1a1a] bg-[#0a0a0a] shadow-[0_0_40px_rgba(0,255,255,0.1)]"
          >
            <div className="text-6xl font-display font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
              4.9<span className="text-3xl text-white/50">/5</span>
            </div>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-[#00FFFF] fill-[#00FFFF] drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
              ))}
            </div>
            <div className="mt-4 text-sm text-[#a3a3a3] font-medium uppercase tracking-widest">
              Based on 128 Reviews
            </div>
          </motion.div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-[#0a0a0a] rounded-[12px] p-8 border border-[#1a1a1a] hover:border-[#00FFFF]/30 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-[#00FFFF] fill-[#00FFFF]" />
                ))}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                "{review.title}"
              </h3>
              
              <p className="text-[#a3a3a3] leading-relaxed mb-8 flex-grow">
                {review.text}
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-[#1a1a1a]">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">{review.name}</span>
                  <div className="flex items-center gap-1 text-[#00FFFF] text-xs font-medium bg-[#00FFFF]/10 px-2 py-1 rounded">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Buyer
                  </div>
                </div>
                <span className="text-xs text-[#a3a3a3]">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Share Your Evolution Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 max-w-2xl mx-auto bg-[#0a0a0a] rounded-[24px] p-8 md:p-12 border border-[#1a1a1a]"
        >
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Share Your Evolution.</h2>
          
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#a3a3a3] font-medium uppercase tracking-wider">Name</label>
              <input 
                type="text" 
                className="bg-[#111111] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FFFF] focus:shadow-[0_0_8px_rgba(0,255,255,0.3)] transition-all"
                placeholder="Your name"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#a3a3a3] font-medium uppercase tracking-wider">Rating</label>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <button 
                    type="button" 
                    key={i} 
                    className={`transition-colors ${i < (hoverRating || rating) ? 'text-[#00FFFF]' : 'text-white/20'}`}
                    onMouseEnter={() => setHoverRating(i + 1)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(i + 1)}
                  >
                    <Star className={`w-8 h-8 ${i < (hoverRating || rating) ? 'fill-current drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]' : ''}`} />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#a3a3a3] font-medium uppercase tracking-wider">Your Review</label>
              <textarea 
                rows={5}
                className="bg-[#111111] border border-[#1a1a1a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FFFF] focus:shadow-[0_0_8px_rgba(0,255,255,0.3)] transition-all resize-none"
                placeholder="Share your experience..."
              />
            </div>
            
            <button 
              type="button"
              className="mt-6 group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white border border-[#00FFFF]/50 rounded-[50px] font-bold text-lg uppercase overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_60px_rgba(0,255,255,0.6)] w-full"
            >
              <span className="relative z-10 flex items-center gap-2">
                Submit Review
              </span>
              <div className="absolute inset-0 bg-[#00FFFF]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
          </form>
        </motion.div>

      </div>
    </main>
  );
}
