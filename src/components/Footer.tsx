import { motion } from 'motion/react';
import { Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="py-24 relative overflow-hidden bg-becoming-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <Link to="/" className="text-3xl font-display font-bold tracking-tighter flex items-center gap-3 mb-8 group">
              <div className="w-11 h-11 rounded-full overflow-hidden logo-glow transition-all duration-300 shrink-0">
                <img src="https://i.postimg.cc/QxtwppVx/Gemini-Generated-Image-rck9irrck9irrck9.png" alt="BECOMING Logo" className="w-full h-full object-cover group-hover:brightness-125 group-hover:saturate-150 transition-all duration-300" />
              </div>
              BECOMING
            </Link>
            <p className="text-white/60 font-light leading-relaxed max-w-sm mb-8">
              A premium digital product brand dedicated to mental growth, time mastery, and self-improvement.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://www.instagram.com/inner_becoming/?utm_source=ig_web_button_share_sheet" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-becoming-teal hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://wa.me/213554385620" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-becoming-teal hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-300"
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@becoming_213?is_from_webapp=1&sender_device=pc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-becoming-teal hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-300"
              >
                <TikTokIcon className="w-6 h-6" />
              </a>
              <a 
                href="mailto:becoming.213@gmail.com" 
                className="text-white/60 hover:text-becoming-teal hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-8 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-8 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/40 text-sm font-light">
            &copy; {new Date().getFullYear()} BECOMING. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-sm font-light">Subscribe to our newsletter</span>
            <div className="flex items-center glass rounded-full p-1 border border-white/10">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none text-white px-4 py-2 w-48 text-sm placeholder:text-white/30"
              />
              <button className="w-10 h-10 rounded-full bg-becoming-teal flex items-center justify-center text-becoming-black hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
