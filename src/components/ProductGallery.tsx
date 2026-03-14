import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://picsum.photos/seed/tracker1/1000/1000?blur=1",
  "https://picsum.photos/seed/tracker2/1000/1000?blur=1",
  "https://picsum.photos/seed/tracker3/1000/1000?blur=1",
  "https://picsum.photos/seed/tracker4/1000/1000?blur=1",
];

export default function ProductGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="flex flex-col gap-4 w-full sticky top-32">
      {/* Main Image */}
      <div 
        className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 glass group cursor-crosshair bg-becoming-dark"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            ref={imageRef}
            src={images[currentIndex]}
            alt={`Product image ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`w-full h-full object-cover transition-transform duration-200 ${isZoomed ? 'scale-[2]' : 'scale-100'}`}
            style={{
              transformOrigin: isZoomed ? `${mousePos.x}% ${mousePos.y}%` : 'center center',
            }}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-becoming-teal hover:border-becoming-teal/50 transition-colors pointer-events-auto"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-becoming-teal hover:border-becoming-teal/50 transition-colors pointer-events-auto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`relative aspect-square rounded-xl overflow-hidden border transition-all duration-300 ${
              currentIndex === idx 
                ? 'border-becoming-teal shadow-[0_0_15px_rgba(0,240,255,0.3)]' 
                : 'border-white/10 hover:border-white/30 opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </button>
        ))}
      </div>
    </div>
  );
}
