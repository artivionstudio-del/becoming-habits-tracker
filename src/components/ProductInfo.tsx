import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShieldCheck, Download, Clock, ChevronDown, Plus, Minus, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const options = [
  { id: 'single', title: 'Single Access', price: 7.99, desc: 'Tracker + Free Ebook' },
  { id: 'bundle', title: 'Bundle Access', price: 14.99, desc: 'Tracker + Ebook + Video Course', popular: true },
  { id: 'premium', title: 'Premium Bundle', price: 19.99, desc: 'Everything + 1-on-1 Coaching Call' },
];

const accordions = [
  { title: 'Product Details', content: 'A comprehensive digital system built for Google Sheets. Includes daily, weekly, and monthly tracking modules, automated progress bars, and a clean, distraction-free interface.' },
  { title: 'How It Works', content: 'After purchase, you will receive an instant download link. Duplicate the template into your own Google Drive and start customizing it immediately. No coding required.' },
  { title: 'Benefits', content: 'Stop relying on willpower. Build visual streaks, organize your chaotic mind, prioritize deep work, and finally achieve the goals you set at the beginning of the year.' },
  { title: 'FAQ', content: 'Works on any free Google account. One-time payment, lifetime access. 14-day money-back guarantee if you are not completely satisfied.' },
];

export default function ProductInfo() {
  const [selectedOption, setSelectedOption] = useState(options[0].id);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const currentPrice = options.find(o => o.id === selectedOption)?.price || 7.99;

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <Link to="/reviews" className="flex items-center gap-3 mb-4 hover:opacity-80 cursor-pointer transition-opacity w-fit">
          <div className="flex items-center text-becoming-teal">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
          </div>
          <span className="text-sm font-bold bg-becoming-teal text-becoming-black px-2 py-1 rounded">4.9 (128 reviews)</span>
        </Link>
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-4">
          BECOMING – Habits + Tasks Tracker
        </h1>
        <div className="flex items-end gap-3 mb-6">
          <span className="text-3xl font-display font-bold text-white">${(currentPrice * quantity).toFixed(2)}</span>
          <span className="text-lg text-white/40 line-through mb-1">${((currentPrice * 2.5) * quantity).toFixed(2)}</span>
          <span className="px-2 py-1 rounded bg-becoming-teal/20 text-becoming-teal text-xs font-bold uppercase tracking-wider mb-1 ml-2">
            Save 60%
          </span>
        </div>
      </div>

      {/* Social Proof */}
      <div className="glass rounded-xl p-4 border border-white/10 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={`https://picsum.photos/seed/user${i}/32/32`} alt="User" className="w-6 h-6 rounded-full border border-becoming-black" referrerPolicy="no-referrer" />
            ))}
          </div>
          <span className="text-sm font-medium text-white/80">
            <strong className="text-white">5000+</strong> users improving their habits
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/60">
          <Zap className="w-4 h-4 text-becoming-teal" />
          <span>150+ orders in the last 24h</span>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">Select Package</h3>
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedOption(option.id)}
            className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden ${
              selectedOption === option.id 
                ? 'border-becoming-teal bg-becoming-teal/5 shadow-[0_0_20px_rgba(0,240,255,0.1)]' 
                : 'border-white/10 hover:border-white/30 glass'
            }`}
          >
            {option.popular && (
              <div className="absolute top-0 right-0 bg-becoming-teal text-becoming-black text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Most Popular
              </div>
            )}
            <div className="flex justify-between items-center mb-1">
              <span className={`font-semibold ${selectedOption === option.id ? 'text-becoming-teal' : 'text-white'}`}>
                {option.title}
              </span>
              <span className="font-display font-bold">${option.price}</span>
            </div>
            <p className="text-sm text-white/50">{option.desc}</p>
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="space-y-4">
        <div className="flex gap-4">
          {/* Quantity */}
          <div className="flex items-center justify-between glass rounded-xl border border-white/10 p-1 w-32">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-medium">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          {/* Add to Cart */}
          <button className="flex-1 glass rounded-xl border border-white/20 font-semibold text-white hover:bg-white/5 transition-colors">
            Add to Cart
          </button>
        </div>

        {/* Primary CTA */}
        <button className="w-full relative group overflow-hidden rounded-xl bg-becoming-teal text-becoming-black font-bold text-lg py-5 transition-transform hover:scale-[1.02] shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_50px_rgba(0,240,255,0.5)]">
          <span className="relative z-10 flex items-center justify-center gap-2">
            Get Instant Access
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </button>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-2 py-6 border-y border-white/10">
        <div className="flex flex-col items-center text-center gap-2">
          <ShieldCheck className="w-6 h-6 text-becoming-teal" />
          <span className="text-[10px] uppercase tracking-wider text-white/60 font-medium">Secure Payment</span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <Download className="w-6 h-6 text-becoming-teal" />
          <span className="text-[10px] uppercase tracking-wider text-white/60 font-medium">Instant Access</span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-becoming-teal" />
          <span className="text-[10px] uppercase tracking-wider text-white/60 font-medium">Plan-Specific Guarantee</span>
        </div>
      </div>

      {/* Delivery Timeline */}
      <div className="glass rounded-xl p-6 border border-white/10">
        <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-6">Instant Delivery</h4>
        <div className="space-y-6 relative before:absolute before:inset-y-2 before:left-[11px] before:w-[2px] before:bg-white/10">
          {[
            { step: 1, title: 'Purchase', desc: 'Secure checkout process' },
            { step: 2, title: 'Instant Download', desc: 'Link sent to your email immediately' },
            { step: 3, title: 'Start Improving', desc: 'Duplicate template and begin' }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 relative z-10">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${i === 2 ? 'bg-becoming-teal text-becoming-black shadow-[0_0_15px_rgba(0,240,255,0.4)]' : 'bg-becoming-dark border border-white/20 text-white/60'}`}>
                {item.step}
              </div>
              <div>
                <h5 className={`font-medium text-sm ${i === 2 ? 'text-becoming-teal' : 'text-white/90'}`}>{item.title}</h5>
                <p className="text-xs text-white/50 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Preview */}
      <div className="glass rounded-xl p-6 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-becoming-teal/10 blur-[50px] rounded-full" />
        <div className="flex gap-1 mb-3 relative z-10">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-becoming-teal fill-becoming-teal" />)}
        </div>
        <p className="text-sm text-white/80 italic mb-4 relative z-10 leading-relaxed">
          "This tracker completely changed how I approach my day. The interface is stunning and it actually makes me want to complete my habits."
        </p>
        <div className="flex items-center gap-3 relative z-10">
          <img src="https://picsum.photos/seed/test1/40/40" alt="Reviewer" className="w-8 h-8 rounded-full border border-white/20" referrerPolicy="no-referrer" />
          <span className="text-sm font-medium text-white/90">Michael T. <span className="text-white/40 font-normal ml-1">Verified Buyer</span></span>
        </div>
      </div>

      {/* Accordions */}
      <div className="border-t border-white/10 pt-4">
        {accordions.map((acc, i) => (
          <div key={i} className="border-b border-white/10 last:border-0">
            <button
              onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
              className="w-full py-5 flex items-center justify-between text-left hover:text-becoming-teal transition-colors"
            >
              <span className="font-medium text-white/90">{acc.title}</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openAccordion === i ? 'rotate-180 text-becoming-teal' : 'text-white/40'}`} />
            </button>
            <AnimatePresence>
              {openAccordion === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm text-white/60 leading-relaxed">
                    {acc.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Leave a Review Form */}
      <div className="glass rounded-xl p-8 border border-white/10 mt-4">
        <h3 className="text-2xl font-display font-bold text-white mb-8">Share Your Evolution</h3>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/60 font-medium uppercase tracking-wider">Name</label>
            <input 
              type="text" 
              className="bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-becoming-teal focus:shadow-[0_0_8px_rgba(0,240,255,0.3)] transition-all"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/60 font-medium uppercase tracking-wider">Rating</label>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <button 
                  type="button" 
                  key={i} 
                  className={`transition-colors ${i < (hoverRating || rating) ? 'text-becoming-teal' : 'text-white/20'}`}
                  onMouseEnter={() => setHoverRating(i + 1)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(i + 1)}
                >
                  <Star className={`w-8 h-8 ${i < (hoverRating || rating) ? 'fill-current' : ''}`} />
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/60 font-medium uppercase tracking-wider">Your Review</label>
            <textarea 
              rows={4}
              className="bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-becoming-teal focus:shadow-[0_0_8px_rgba(0,240,255,0.3)] transition-all resize-none"
              placeholder="Share your experience..."
            />
          </div>
          <button 
            type="button"
            className="mt-4 group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-becoming-black text-white border border-becoming-teal/50 rounded-[50px] font-bold text-lg uppercase overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_60px_rgba(0,240,255,0.6)] w-full"
          >
            <span className="relative z-10 flex items-center gap-2">
              POST REVIEW
            </span>
            <div className="absolute inset-0 bg-becoming-teal/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </form>
      </div>
    </div>
  );
}
