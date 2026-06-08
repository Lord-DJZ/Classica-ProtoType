import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Home,
  Info,
  Utensils,
  Droplets,
  BookOpen,
  Briefcase,
  HelpCircle,
  Headset,
  Mail,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ViewType } from '../types';

interface NavbarProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
  onOpenQuickInquire: () => void;
}

export default function Navbar({ activeView, onViewChange, onOpenQuickInquire }: NavbarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified key items for the premium, uncluttered top bar
  const topNavItems = [
    { label: 'Home', value: 'home' as ViewType },
    { label: 'Cookware', value: 'products' as ViewType },
    { label: 'Water Filters', value: 'water-filter' as ViewType },
    { label: 'Recipes', value: 'recipes' as ViewType },
    { label: 'Help', value: 'support' as ViewType }
  ];

  // Full complete menu structure for the slide-out Side Drawer
  const completeNavItems = [
    { label: 'Home', value: 'home' as ViewType, icon: 'Home' },
    { label: 'About Story', value: 'about' as ViewType, icon: 'Info' },
    { label: 'Cookware Sets', value: 'products' as ViewType, icon: 'Utensils' },
    { label: 'Water Filters', value: 'water-filter' as ViewType, icon: 'Droplets' },
    { label: 'Cookware Recipes', value: 'recipes' as ViewType, icon: 'BookOpen' },
    { label: 'Distributorship Business', value: 'opportunity' as ViewType, icon: 'Briefcase' },
    { label: 'Help & FAQ', value: 'support' as ViewType, icon: 'HelpCircle' },
    { label: 'Customer Support', value: 'support' as ViewType, icon: 'Headset' },
    { label: 'Contact Office', value: 'contact' as ViewType, icon: 'Mail' }
  ];

  const iconMap = {
    Home,
    Info,
    Utensils,
    Droplets,
    BookOpen,
    Briefcase,
    HelpCircle,
    Headset,
    Mail
  };

  const handleNavClick = (value: ViewType) => {
    onViewChange(value);
    setIsDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner (The Ribbon) indicating local authorized representation */}
      <div className="bg-[#0a192f] text-[#faf9f6] text-[11px] py-2.5 px-4 flex flex-col md:flex-row gap-2.5 justify-between items-center font-sans tracking-wide border-b border-[#faf9f6]/10 relative z-50">
        <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center md:justify-start">
          <span className="flex items-center gap-1.5 text-[10px] md:text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            AUTHORIZED REGAL DISTRIBUTOR BRANCH
          </span>
          <span className="hidden md:inline text-white/30">|</span>
          <span className="text-[10px] md:text-xs text-white/80">Made in USA Healthy Cooking Systems</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] md:text-xs text-[#c5a059] font-medium shrink-0">
          <span className="flex items-center gap-1">
            <ClockCircleIcon /> Mon - Sat: 9:00 AM - 6:00 PM
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          scrolled
            ? 'bg-white/95 border-b border-[#0a192f]/5 shadow-sm backdrop-blur-md py-3'
            : 'bg-white border-b border-[#0a192f]/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Left Side: Three-line Hamburger Button and Logo side-by-side */}
          <div className="flex items-center gap-3 md:gap-4 select-none">
            {/* Elegant Hamburger menu button beside the logo on the left */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 -ml-2 rounded-full text-[#0a192f] hover:bg-[#0a192f]/5 hover:text-[#c5a059] active:scale-90 transition-all focus:outline-none cursor-pointer flex items-center justify-center shrink-0"
              aria-label="Open Side Navigation Menu"
              title="Browse Entire Directory"
              id="hamburger-btn-desktop-mobile"
            >
              <Menu className="w-5.5 h-5.5" />
            </button>

            {/* Logo Brand Title */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 group text-left cursor-pointer"
              id="nav-logo-btn"
            >
              <div className="w-8.5 h-8.5 bg-[#0a192f] rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 select-none shrink-0 border border-white/5">
                <span className="text-[#faf9f6]/95 font-serif text-lg leading-none font-bold">C</span>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-sans text-sm font-extrabold tracking-widest uppercase leading-none text-[#0a192f] whitespace-nowrap">Classica</span>
                  <span className="font-mono text-[8.5px] px-1 text-emerald-600 bg-emerald-50 rounded border border-emerald-200 uppercase tracking-widest font-extrabold">Branch</span>
                </div>
                <p className="text-[9px] text-[#0a192f]/60 font-sans tracking-wider leading-none font-semibold whitespace-nowrap mt-0.5">Local Cookware & Water Advisory</p>
              </div>
            </button>
          </div>

          {/* Center: Premium Desktop Navigation Link Menu (Streamlined list of top priority actions) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 shrink">
            {topNavItems.map((item) => {
              const isActive = activeView === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`py-1 text-[11px] font-bold uppercase tracking-widest transition-all relative cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#0a192f] border-b border-[#0a192f]'
                      : 'text-[#0a192f]/60 hover:text-[#0a192f] hover:translate-y-[-1px]'
                  }`}
                  id={`nav-item-${item.value}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Side: Primary Actions */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            {/* Contact Phone (visible on LG desktop screens for extreme micro-nav responsiveness) */}
            <a
              href="tel:+15552345678"
              className="hidden lg:flex items-center gap-1.5 xl:gap-2 px-3.5 py-2 rounded-full border border-[#0a192f]/10 text-xs font-sans text-[#0a192f]/80 hover:bg-[#0a192f]/5 hover:border-[#c5a059]/30 transition-all whitespace-nowrap"
              title="Call Representative"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="font-bold font-mono text-[11px] xl:text-xs text-[#0a192f]">(555) 234-5678</span>
            </a>

            {/* Main Action Call To Action Button (shown on mobile & desktop with appropriate style adjustments) */}
            <button
              onClick={onOpenQuickInquire}
              className="px-4.5 py-2.5 bg-[#0a192f] hover:bg-opacity-95 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest rounded-full transition-all cursor-pointer shadow-sm active:scale-95 whitespace-nowrap"
              id="nav-quick-cta"
            >
              Inquire Now
            </button>
          </div>
        </div>
      </header>

      {/* Modern Slide-out Side Navigation Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Dark glass backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-[#0a192f]/40 backdrop-blur-sm z-[100] cursor-pointer"
              id="drawer-backdrop"
            />

            {/* Deluxe Sliding Side Drawer panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed top-0 left-0 bottom-0 w-[310px] sm:w-[360px] bg-[#faf9f6] shadow-2xl border-r border-[#0a192f]/10 z-[101] flex flex-col h-full overflow-hidden"
              id="side-drawer"
            >
              {/* Drawer Title Block */}
              <div className="p-5 flex items-center justify-between border-b border-[#0a192f]/5 shrink-0 bg-[#faf9f6]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-[#0a192f] rounded-full flex items-center justify-center shadow">
                    <span className="text-[#faf9f6] font-serif text-base font-extrabold">C</span>
                  </div>
                  <div>
                    <span className="font-sans text-xs font-bold tracking-widest text-[#0a192f] uppercase block leading-none">Classica</span>
                    <span className="font-sans text-[8.5px] font-semibold tracking-wider text-[#c5a059] uppercase mt-0.5 block">Branch Portal</span>
                  </div>
                </div>

                {/* Clear close button */}
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-1.5 rounded-full text-[#0a192f]/60 hover:text-[#0a192f] hover:bg-[#0a192f]/5 active:scale-90 transition-all focus:outline-none cursor-pointer"
                  aria-label="Close navigation"
                  title="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Directory Body List */}
              <div className="flex-1 overflow-y-auto px-4 py-5 scrollbar-thin space-y-6 bg-[#faf9f6]">
                
                {/* Navigation Core section */}
                <div>
                  <h4 className="px-3 mb-2.5 text-[9.5px] font-bold uppercase tracking-widest text-[#c5a059]">Explore Portal Directory</h4>
                  <div className="flex flex-col gap-1">
                    {completeNavItems.map((item) => {
                      const isActive = activeView === item.value;
                      const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Info;

                      return (
                        <button
                          key={`${item.label}-${item.value}`}
                          onClick={() => handleNavClick(item.value)}
                          className={`w-full text-left px-3.5 py-3 rounded-xl text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-between group cursor-pointer ${
                            isActive
                              ? 'bg-[#0a192f]/5 text-[#c5a059] border-l-3 border-[#c5a059] pl-3'
                              : 'text-[#0a192f]/70 hover:text-[#0a192f] hover:bg-[#0a192f]/5'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <IconComponent className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#c5a059]' : 'text-[#0a192f]/45 group-hover:text-[#0a192f]'}`} />
                            <span className="font-sans text-[11px] tracking-widest font-bold">{item.label}</span>
                          </div>
                          {isActive ? (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                          ) : (
                            <ArrowRight className="w-3 h-3 text-[#0a192f]/20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="h-[1px] bg-[#0a192f]/10 mx-2"></div>

                {/* Direct Contacts section */}
                <div>
                  <h4 className="px-3 mb-2.5 text-[9.5px] font-bold uppercase tracking-widest text-[#c5a059]">Direct Branch Advisory</h4>
                  <div className="flex flex-col gap-2">
                    
                    {/* Call Line card */}
                    <a
                      href="tel:+15552345678"
                      className="flex items-center gap-3.5 px-3.5 py-3 rounded-xl bg-white border border-[#0a192f]/5 hover:border-[#c5a059]/25 transition-all text-[#0a192f]/80 hover:text-[#0a192f] group"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#faf9f6] flex items-center justify-center border border-[#0a192f]/5 group-hover:scale-105 transition-transform shrink-0">
                        <Phone className="w-4 h-4 text-[#c5a059]" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[#0a192f]/50 block leading-tight">Phone Support</span>
                        <span className="text-xs font-bold font-mono text-[#0a192f] mt-0.5 block">(555) 234-5678</span>
                      </div>
                    </a>

                    {/* WhatsApp Line card */}
                    <a
                      href="https://wa.me/15552345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 px-3.5 py-3 rounded-xl bg-[#25D366]/5 border border-[#25D366]/20 hover:bg-[#25D366]/10 transition-all text-[#0a192f]/80 hover:text-[#0a192f] group"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white scale-100 group-hover:scale-105 transition-transform shrink-0">
                        <MessageCircle className="w-4.5 h-4.5 fill-current" />
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#128C7E] block leading-tight">Instant WhatsApp</span>
                        <span className="text-[11px] font-extrabold text-[#0a192f] mt-0.5 block">Chat with Branch Manager</span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    </a>

                  </div>
                </div>

              </div>

              {/* Apply / Inquire CTA at the very bottom */}
              <div className="p-4 border-t border-[#0a192f]/5 bg-[#faf9f6]/95 shrink-0">
                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onOpenQuickInquire();
                  }}
                  className="w-full py-3.5 px-4 bg-[#0a192f] hover:bg-[#0a192f]/90 text-white font-bold text-center text-xs uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span className="font-sans tracking-wider font-extrabold">Apply / Inquire Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function ClockCircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-3.5 h-3.5 text-[#c5a059]"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
