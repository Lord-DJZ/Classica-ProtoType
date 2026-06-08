import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, ArrowUp, Calendar, ShieldCheck, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ProductsView from './components/ProductsView';
import WaterFilterView from './components/WaterFilterView';
import RecipesView from './components/RecipesView';
import OpportunityView from './components/OpportunityView';
import SupportView from './components/SupportView';
import ContactView from './components/ContactView';
import { ViewType } from './types';

export default function App() {
  const [activeView, setActiveView] = useState<ViewType>('home');
  const [prefilledProduct, setPrefilledProduct] = useState('');
  const [prefilledInquiryType, setPrefilledInquiryType] = useState('Buy Product');
  
  // Back to top scroll state
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [targetProductId, setTargetProductId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Navigates directly to inquiry form and handles data handover
  const handleOpenQuickInquire = (productName?: string, inquiryType?: string) => {
    if (productName) {
      setPrefilledProduct(productName);
    } else {
      setPrefilledProduct('');
    }

    if (inquiryType) {
      setPrefilledInquiryType(inquiryType);
    } else {
      setPrefilledInquiryType('Buy Product');
    }

    setActiveView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewProduct = (productId: string) => {
    setTargetProductId(productId);
    setActiveView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearHomeProductSelect = () => {
    setTargetProductId(undefined);
  };

  // Switch rendering views
  const renderViewContent = () => {
    switch (activeView) {
      case 'home':
        return (
          <HomeView
            onViewChange={setActiveView}
            onOpenQuickInquire={() => handleOpenQuickInquire()}
            onViewProduct={handleViewProduct}
          />
        );
      case 'about':
        return (
          <AboutView
            onViewChange={setActiveView}
            onOpenQuickInquire={() => handleOpenQuickInquire()}
          />
        );
      case 'products':
        return (
          <ProductsView
            onOpenQuickInquire={handleOpenQuickInquire}
            selectedProductIdFromHome={targetProductId}
            onClearHomeProductSelect={handleClearHomeProductSelect}
          />
        );
      case 'water-filter':
        return (
          <WaterFilterView
            onOpenQuickInquire={handleOpenQuickInquire}
          />
        );
      case 'recipes':
        return (
          <RecipesView />
        );
      case 'opportunity':
        return (
          <OpportunityView
            onOpenQuickInquire={handleOpenQuickInquire}
          />
        );
      case 'support':
        return (
          <SupportView
            onViewChange={setActiveView}
            onOpenQuickInquire={handleOpenQuickInquire}
          />
        );
      case 'contact':
        return (
          <ContactView
            prefilledProduct={prefilledProduct}
            prefilledInquiryType={prefilledInquiryType}
          />
        );
      default:
        return (
          <HomeView
            onViewChange={setActiveView}
            onOpenQuickInquire={() => handleOpenQuickInquire()}
            onViewProduct={handleViewProduct}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#faf9f6] antialiased selection:bg-[#c5a059] selection:text-white">
      {/* Dynamic Sticky Header Navbar */}
      <Navbar
        activeView={activeView}
        onViewChange={setActiveView}
        onOpenQuickInquire={() => handleOpenQuickInquire()}
      />

      {/* Primary Dynamic Main Display bounds */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderViewContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dynamic Footer Layout */}
      <Footer
        onViewChange={setActiveView}
        onOpenQuickInquire={() => handleOpenQuickInquire()}
      />

      {/* DYNAMIC FLOATING INTERACTIVE DESKTOP/MOBILE SIDEBAR BUTTONS */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        {/* Branch Phone Widget */}
        <a
          href="tel:+15552345678"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0a192f] text-white shadow-xl border border-white/5 hover:opacity-90 transition-all duration-300 scale-100 hover:scale-110 active:scale-95 text-xs font-mono"
          title="Direct Phone Call Office"
          id="floating-call-btn"
        >
          <Phone className="w-5 h-5 text-[#c5a059]" />
        </a>

        {/* WhatsApp Chat Line */}
        <a
          href="https://wa.me/15552345678"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] transition-all duration-300 scale-100 hover:scale-110 active:scale-95"
          title="Instant WhatsApp representative Line"
          id="floating-whatsapp-btn"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
      </div>

      {/* BACK TO TOP FLOATING RIGHT CORNER */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-[#0a192f] hover:bg-opacity-95 text-[#c5a059] border border-[#c5a059]/30 shadow-xl transition-all duration-300 cursor-pointer active:scale-95"
            title="Scroll back to top"
            id="back-to-top-btn"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

