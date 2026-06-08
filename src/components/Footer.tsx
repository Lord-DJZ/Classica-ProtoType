import { ShieldCheck, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { ViewType } from '../types';

interface FooterProps {
  onViewChange: (view: ViewType) => void;
  onOpenQuickInquire: () => void;
}

export default function Footer({ onViewChange, onOpenQuickInquire }: FooterProps) {
  const handleNavClick = (view: ViewType) => {
    onViewChange(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a192f] border-t border-white/5 text-[#faf9f6]/80 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Local Representation Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#faf9f6] flex items-center justify-center border border-white/10">
                <span className="text-sm font-serif font-bold text-[#0a192f]">C</span>
              </div>
              <span className="font-serif font-light text-lg text-white tracking-wide">Classica Local Branch</span>
            </div>
            <p className="text-xs sm:text-sm text-[#faf9f6]/60 font-light leading-relaxed">
              We are an authorized local branch representation representing Classica Regal Cookware and Water Filter equipment. Our focus is helping local families discover chemical-free cooking systems, and providing lifelong personalized guidance.
            </p>
            <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden group">
              <div className="flex gap-3 items-center">
                <ShieldCheck className="w-8 h-8 text-[#c5a059] shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-sans">Lifetime Warranty</h4>
                  <p className="text-[11px] text-[#faf9f6]/50 font-light">Classica products are engineered for generations under absolute guarantee.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Cookware & Water Categories */}
          <div>
            <h3 className="text-white font-serif font-light text-sm tracking-wider uppercase mb-6 border-l pl-3 border-[#c5a059]">
              Elite Cookware & Filter
            </h3>
            <ul className="space-y-3.5 text-xs uppercase tracking-wider font-bold text-[#faf9f6]/70">
              <li>
                <button
                  onClick={() => handleNavClick('products')}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Cookware Sets
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('products')}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Dutch Ovens & Stock Pots
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('products')}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Sauce Pans & specialty pans
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('water-filter')}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Classica Club WaterSystem
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('products')}
                  className="hover:text-[#c5a059] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Replacement Parts
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Advisory & Growth */}
          <div>
            <h3 className="text-white font-serif font-light text-sm tracking-wider uppercase mb-6 border-l pl-3 border-[#c5a059]">
              Lifestyle & Distributorship
            </h3>
            <ul className="space-y-3.5 text-xs uppercase tracking-wider font-bold text-[#faf9f6]/70">
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-[#c5a059] transition-colors text-left cursor-pointer"
                >
                  Branch Story & Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('recipes')}
                  className="hover:text-[#c5a059] transition-colors text-left cursor-pointer"
                >
                  Healthy Recipes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('opportunity')}
                  className="hover:text-[#c5a059] transition-colors text-left cursor-pointer"
                >
                  Distributorship Business
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('support')}
                  className="hover:text-[#c5a059] transition-colors text-left cursor-pointer"
                >
                  Customer Support Hub
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuickInquire}
                  className="text-[#c5a059] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Book Demonstration
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Local Contact Hub */}
          <div className="space-y-6">
            <h3 className="text-white font-serif font-light text-sm tracking-wider uppercase mb-6 border-l pl-3 border-[#c5a059]">
              Branch Headquarters
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-serif font-normal">Classica Local HQ</strong>
                  1200 Elite Kitchen Way, Suite 400<br />
                  Chicago, IL 60611
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#c5a059] shrink-0" />
                <a href="tel:+15552345678" className="hover:text-[#c5a059] transition-colors font-mono">
                  (555) 234-5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#c5a059] shrink-0" />
                <a href="mailto:branch-manager@classicaregal-dist.com" className="hover:text-[#c5a059] transition-colors">
                  branch-manager@classicaregal-dist.com
                </a>
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                href="https://wa.me/15552345678"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] rounded-full transition-all"
                title="WhatsApp Representative"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </a>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center py-2.5 bg-white/5 border border-white/10 hover:border-[#c5a059]/50 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-white transition-all cursor-pointer"
              >
                Office Map
              </button>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-white/10 my-12" />

        {/* Footer Base Info Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/50">
          <div className="space-y-2 text-center md:text-left">
            <p className="font-light">
              © 2026 Classica Regal authorized distributor branch. All rights reserved. Let’s healthier cook every day.
            </p>
            <p className="text-[10px] text-white/40 leading-relaxed font-light">
              Disclaimer: This website represents a local distributor branch and service portal. Genuine Classica cookware and water filter systems are proud products manufactured by Regal Ware.
            </p>
          </div>
          <div className="flex gap-6 shrink-0 font-bold uppercase tracking-wider text-[10px] text-white/70">
            <button onClick={() => handleNavClick('support')} className="hover:text-[#c5a059]">
              Privacy Policy
            </button>
            <button onClick={() => handleNavClick('support')} className="hover:text-[#c5a059]">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
