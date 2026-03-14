import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12 flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-display font-bold tracking-tighter flex items-center gap-2 group">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden logo-glow transition-all duration-300 shrink-0">
            <img src="https://i.postimg.cc/QxtwppVx/Gemini-Generated-Image-rck9irrck9irrck9.png" alt="BECOMING Logo" className="w-full h-full object-cover group-hover:brightness-125 group-hover:saturate-150 transition-all duration-300" />
          </div>
          BECOMING
        </Link>

        {/* Desktop & Tablet Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-white/70">
          <Link to="/" className={`transition-colors ${isActive('/') ? 'text-becoming-teal' : 'hover:text-white'}`}>Home</Link>
          <Link to="/product" className={`transition-colors ${isActive('/product') ? 'text-becoming-teal' : 'hover:text-white'}`}>Product</Link>
          <Link to="/about" className={`transition-colors ${isActive('/about') ? 'text-becoming-teal' : 'hover:text-white'}`}>About</Link>
          <Link to="/contact" className={`transition-colors ${isActive('/contact') ? 'text-becoming-teal' : 'hover:text-white'}`}>Contact</Link>
        </div>

        <div className="hidden md:block">
          <Link
            to="/product"
            className="px-5 lg:px-6 py-2 lg:py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium transition-all hover:glow-box hover:border-becoming-teal/50"
          >
            Get Access
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          <Link to="/" className={`text-lg font-medium transition-colors ${isActive('/') ? 'text-becoming-teal' : 'text-white/80 hover:text-white'}`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/product" className={`text-lg font-medium transition-colors ${isActive('/product') ? 'text-becoming-teal' : 'text-white/80 hover:text-white'}`} onClick={() => setIsMobileMenuOpen(false)}>Product</Link>
          <Link to="/about" className={`text-lg font-medium transition-colors ${isActive('/about') ? 'text-becoming-teal' : 'text-white/80 hover:text-white'}`} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" className={`text-lg font-medium transition-colors ${isActive('/contact') ? 'text-becoming-teal' : 'text-white/80 hover:text-white'}`} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link
            to="/product"
            className="mt-4 px-6 py-3 rounded-full bg-becoming-teal text-becoming-black text-center font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Access - $7.99
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
