import { motion } from 'motion/react';
import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "The Psychology of Discipline Ebook",
    price: 29.00,
    rating: 4.8,
    reviews: 450,
    img: "https://picsum.photos/seed/ebook/600/600?blur=1"
  },
  {
    id: 2,
    title: "Deep Work Masterclass",
    price: 49.00,
    rating: 5.0,
    reviews: 820,
    img: "https://picsum.photos/seed/course/600/600?blur=1"
  },
  {
    id: 3,
    title: "Annual Goal Planner Template",
    price: 14.99,
    rating: 4.9,
    reviews: 315,
    img: "https://picsum.photos/seed/planner/600/600?blur=1"
  },
  {
    id: 4,
    title: "Focus Music Collection",
    price: 9.99,
    rating: 4.7,
    reviews: 120,
    img: "https://picsum.photos/seed/music/600/600?blur=1"
  }
];

export default function RelatedProducts() {
  return (
    <section className="py-24 relative overflow-hidden bg-becoming-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-4"
            >
              People Also Improving Their <span className="text-white/40">Lives.</span>
            </motion.h2>
            <p className="text-lg text-white/60 font-light">
              Explore our best-selling digital products to accelerate your growth.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-becoming-teal font-medium hover:underline underline-offset-4">
            View All Products
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 border border-white/10 glass">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-becoming-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="w-12 h-12 rounded-full bg-becoming-teal text-becoming-black flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex text-becoming-teal">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`w-3 h-3 ${j < Math.floor(product.rating) ? 'fill-current' : 'text-white/20'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-white/50">({product.reviews})</span>
                </div>
                <h3 className="font-medium text-white/90 group-hover:text-becoming-teal transition-colors line-clamp-1">
                  {product.title}
                </h3>
                <p className="font-display font-bold text-lg">${product.price.toFixed(2)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
