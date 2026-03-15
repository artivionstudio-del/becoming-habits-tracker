import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, ShieldCheck, Zap, RotateCcw, ChevronDown, CheckCircle2, Target, BookOpen, Infinity, Download } from 'lucide-react';

const images = [
  "https://i.postimg.cc/Hsk4F4yk/unnamed-(100).jpg",
  "https://i.postimg.cc/JndPvVgP/unnamed-2026-03-13T163330-370.jpg",
  "https://i.postimg.cc/Ss8fT26s/unnamed-2026-03-13T163406-393.jpg",
  "https://i.postimg.cc/rmdP8w5t/unnamed-2026-03-13T163423-800.jpg"
];

const purchaseOptions = [
  { 
    id: 'basic', 
    title: 'BASIC ACCESS', 
    price: 3.25, 
    features: ['Habits + Tasks Tracker', 'FREE Ebook included'],
    link: 'https://www.paypal.com/ncp/payment/FSJ8KLLYVWY3U'
  },
  { 
    id: 'momentum', 
    title: 'MOMENTUM BUNDLE', 
    price: 7.99, 
    features: ['Habits + Tasks Tracker', 'FREE Ebook', '1 Year of Dedicated Assistance', 'Exclusive Gifts'], 
    popular: true,
    badge: 'MOST POPULAR',
    link: 'https://www.paypal.com/ncp/payment/G2LY6NPH22XWG'
  },
  { 
    id: 'legacy', 
    title: 'THE BECOMING LEGACY (VIP)', 
    price: 11.39, 
    features: ['Habits + Tasks Tracker', 'FREE Ebook', '5 Year Priority Assistance', 'All Future Products & Guides', 'Exclusive Gifts', 'Access to our Private Community Group'],
    link: 'https://www.paypal.com/ncp/payment/L7J4W72YN9K96'
  }
];

const accordions = [
  {
    title: 'Product Details',
    content: 'BECOMING is a premium digital tracker designed for those who demand more from themselves. It seamlessly integrates habit tracking and task management into one minimalist, distraction-free interface.'
  },
  {
    title: 'How it works',
    content: 'After purchase, you will receive an instant digital download link. You can duplicate the template directly into your workspace and start customizing your daily habits and tasks immediately.'
  },
  {
    title: 'Benefits',
    content: (
      <ul className="space-y-2">
        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-becoming-teal" /> Build better habits</li>
        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-becoming-teal" /> Organize tasks</li>
        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-becoming-teal" /> Improve productivity</li>
        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-becoming-teal" /> Achieve long-term goals</li>
      </ul>
    )
  },
  {
    title: 'FAQ',
    content: 'Q: Is this a subscription? A: No, it is a one-time purchase. Q: Do I need paid software? A: No, it works on free platforms.'
  }
];



export default function Product() {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedOption, setSelectedOption] = useState('momentum');
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <main className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-white/50 mb-6 md:mb-8">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span className="text-white">Product</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[4.5fr_5.5fr] lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 mb-20 md:mb-24 lg:mb-32">
          
          {/* LEFT SIDE: Image Gallery */}
          <div className="space-y-6">
            {/* Main Image */}
            <div 
              className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 glass cursor-crosshair group"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <img 
                src={images[currentImage]} 
                alt="Product Main" 
                className={`w-full h-full object-cover transition-all duration-300 ${isZoomed ? 'opacity-0' : 'opacity-100'}`}
                referrerPolicy="no-referrer"
              />
              
              {/* Zoom Effect */}
              {isZoomed && (
                <div 
                  className="absolute inset-0 bg-no-repeat pointer-events-none"
                  style={{
                    backgroundImage: `url(${images[currentImage]})`,
                    backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
                    backgroundSize: '200%'
                  }}
                />
              )}

              {/* Arrows */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`relative w-20 h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${currentImage === idx ? 'border-becoming-teal' : 'border-white/10 hover:border-white/30'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  {currentImage !== idx && <div className="absolute inset-0 bg-black/40" />}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Product Info */}
          <div className="flex flex-col w-full">
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-becoming-teal fill-becoming-teal" />)}
                </div>
                <Link to="/reviews" className="text-xs md:text-sm font-bold bg-becoming-teal text-becoming-black px-2 py-1 rounded hover:opacity-80 transition-opacity cursor-pointer">4.9 (128 reviews)</Link>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tighter mb-4">
                BECOMING – Habits + Tasks Tracker
              </h1>
              
              <div className="flex flex-wrap items-end gap-3 mb-6">
                <span className="text-3xl md:text-4xl font-display font-bold text-white">€{purchaseOptions.find(o => o.id === selectedOption)?.price}</span>
                {selectedOption === 'momentum' && <span className="text-lg md:text-xl text-white/40 line-through mb-1">€29.99</span>}
                {selectedOption === 'legacy' && <span className="text-lg md:text-xl text-white/40 line-through mb-1">€49.99</span>}
                <span className="text-sm md:text-base font-medium text-becoming-teal bg-becoming-teal/10 px-2 py-1 rounded mb-1 border border-becoming-teal/20">Save up to 80%</span>
              </div>

              <p className="text-white/70 font-light leading-relaxed md:leading-relaxed mb-6">
                A premium digital tracker designed for those who demand more from themselves. Build discipline, focus, and better habits. <strong className="text-white">Bonus: Free Ebook included.</strong>
              </p>

              {/* Highlighted Testimonial */}
              <div className="glass p-4 rounded-xl border border-white/10 mb-8 flex items-start gap-4">
                <img src="https://picsum.photos/seed/user5/40/40" alt="User" className="w-10 h-10 rounded-full border border-white/20 shrink-0" referrerPolicy="no-referrer" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">Michael T.</span>
                    <span className="text-xs text-becoming-teal flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Verified</span>
                  </div>
                  <p className="text-sm text-white/60 italic">"The cleanest tracker I've ever used. The bundle with the ebook is an absolute steal."</p>
                </div>
              </div>
            </div>

            {/* Purchase Options */}
            <div className="space-y-3 md:space-y-4 mb-8">
              <h3 className="text-xs md:text-sm font-semibold uppercase tracking-widest text-white/80 mb-4">Select Access Level</h3>
              {purchaseOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`w-full text-left p-4 md:p-5 rounded-2xl border transition-all duration-500 relative overflow-hidden group ${
                    selectedOption === option.id 
                      ? 'border-becoming-teal bg-becoming-teal/15 shadow-[0_0_40px_rgba(0,240,255,0.25)] scale-[1.03] z-10' 
                      : 'border-white/10 bg-white/5 opacity-60 hover:opacity-100 hover:border-white/30'
                  }`}
                >
                  {option.popular && (
                    <div className="absolute top-0 right-0 bg-becoming-teal text-becoming-black text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-3 md:px-4 py-1 md:py-1.5 rounded-bl-xl shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                      {option.badge}
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <span className={`font-semibold tracking-wide pr-2 ${option.popular ? 'text-base md:text-lg text-white' : 'text-sm md:text-base text-white'} ${option.id === 'legacy' ? 'text-becoming-teal' : ''}`}>{option.title}</span>
                    <div className="flex flex-col items-end shrink-0 ml-2 md:ml-4">
                      <span className={`font-display font-bold ${selectedOption === option.id ? 'text-lg md:text-xl text-becoming-teal' : 'text-base md:text-lg text-white'}`}>€{option.price}</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5 md:space-y-2">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 md:w-4 md:h-4 shrink-0 mt-0.5 transition-colors ${selectedOption === option.id ? 'text-becoming-teal' : 'text-white/40'}`} />
                        <span className={`text-xs md:text-sm ${selectedOption === option.id ? 'text-white/90' : 'text-white/50'} leading-relaxed`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>

            {/* Master Checkout Button */}
            <div className="mb-12 pt-4 w-full">
              <a
                href={purchaseOptions.find(o => o.id === selectedOption)?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 px-12 py-6 bg-becoming-black text-white border border-becoming-teal/50 rounded-[50px] font-bold text-xl uppercase overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_60px_rgba(0,240,255,0.6)] w-full"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Access Now <Zap className="w-6 h-6 text-becoming-teal group-hover:scale-110 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-becoming-teal/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </a>
              <p className="text-center mt-4 text-xs text-white/40 font-medium uppercase tracking-widest">Secure Checkout via PayPal</p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 py-6 border-y border-white/10 mb-8">
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="w-6 h-6 text-white/60" />
                <span className="text-xs text-white/60">Secure<br className="hidden sm:block"/>Payment</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Zap className="w-6 h-6 text-white/60" />
                <span className="text-xs text-white/60">Instant<br className="hidden sm:block"/>Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw className="w-6 h-6 text-white/60" />
                <span className="text-xs text-white/60">Plan-Specific<br className="hidden sm:block"/>Guarantee</span>
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-2">
              {accordions.map((acc, i) => (
                <div key={i} className="border-b border-white/10 last:border-0">
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    className="w-full py-4 flex items-center justify-between text-left hover:text-becoming-teal transition-colors"
                  >
                    <span className="font-medium">{acc.title}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openAccordion === i ? 'rotate-180 text-becoming-teal' : 'text-white/50'}`} />
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
                        <div className="pb-4 text-white/60 font-light text-sm leading-relaxed">
                          {acc.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: The Ultimate Performance Bundle */}
        <div className="pt-16 md:pt-24 border-t border-white/10">
          <h2 className="text-2xl md:text-5xl font-display font-bold tracking-tighter mb-10 md:mb-16 text-center text-white">
            Everything you need to master your growth.
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Target className="w-8 h-8 text-becoming-teal" />,
                title: "The Core Tracker",
                desc: "Advanced Habits + Tasks System to organize your life with surgical precision."
              },
              {
                icon: <BookOpen className="w-8 h-8 text-becoming-teal" />,
                title: "Exclusive Ebook",
                desc: "The 'Becoming Better' Guide: A step-by-step manual for discipline and focus (Free Bonus)."
              },
              {
                icon: <Infinity className="w-8 h-8 text-becoming-teal" />,
                title: "Lifetime Access",
                desc: "Pay once, grow forever. You get all future updates of the system for $0."
              },
              {
                icon: <Download className="w-8 h-8 text-becoming-teal" />,
                title: "Instant Delivery",
                desc: "No waiting. Get your download link immediately in your inbox after checkout."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border border-becoming-teal/20 bg-black/40 hover:scale-105 hover:border-becoming-teal/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-becoming-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                  {card.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-white">{card.title}</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
