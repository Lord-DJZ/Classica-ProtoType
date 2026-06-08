import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Award, HelpCircle, Key, RefreshCw, ChevronDown } from 'lucide-react';
import { ViewType } from '../types';

interface SupportViewProps {
  onViewChange: (view: ViewType) => void;
  onOpenQuickInquire: (prefilledProduct?: string, inquiryType?: string) => void;
}

export default function SupportView({ onViewChange, onOpenQuickInquire }: SupportViewProps) {
  // Store expanded FAQ indices
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const supportCards = [
    {
      title: 'How to Buy & Catalog',
      desc: 'Examine payment processes, locally approved credit terms, and catalog distributions.',
      icon: <FileText className="w-5 h-5 text-[#c5a059]" />,
      actionLabel: 'Browse Products',
      onClick: () => onViewChange('products')
    },
    {
      title: 'Product Registration',
      desc: 'Activate your T-304 surgical-grade limited lifetime warranty with our local branch books.',
      icon: <Award className="w-5 h-5 text-[#c5a059]" />,
      actionLabel: 'Register Goods',
      onClick: () => onOpenQuickInquire('', 'After-Sales Support')
    },
    {
      title: 'Use & Care Manuals',
      desc: 'Download precise guides on wash procedures, nesting storage, and valve settings.',
      icon: <Key className="w-5 h-5 text-[#c5a059]" />,
      actionLabel: 'Inquire Manuals',
      onClick: () => onOpenQuickInquire('Manuals Request', 'After-Sales Support')
    },
    {
      title: 'Replacement Parts',
      desc: 'Connect regarding brand-original handles, dome gaskets, or water purification cartridges.',
      icon: <RefreshCw className="w-5 h-5 text-[#c5a059]" />,
      actionLabel: 'Replacement Parts',
      onClick: () => onOpenQuickInquire('Gasket / Replacement query', 'Replacement Parts')
    }
  ];

  const faqs = [
    {
      id: 'faq-r-1',
      question: 'How can I inquire about products or request pricing?',
      answer: 'Since we operate as a highly focused local branch, we do not utilize impersonal automatic catalog checkout bots. Simply click the "Inquire Now" button anywhere on our portal to load our quick contact form, or send a message directly to our office. We will reach back to discuss your preferred set sizes, locally approved installment options, and arrange personal delivery.'
    },
    {
      id: 'faq-r-2',
      question: 'Can I request a culinary/healthy product demonstration?',
      answer: 'Yes, absolutely! Cooking demonstrations are our highly requested local service. An authorized consultant brings our Classica 5-ply sets directly to your home, prepares a delicious healthy recipe (such as zero-oil herb salmon or waterless vegetables) with zero chemical oils, and demonstrates dynamic valve technology inside your kitchen. It is completely free with zero purchasing obligations!'
    },
    {
      id: 'faq-r-3',
      question: 'How do I choose the right cookware set size for my family?',
      answer: 'As a rule of thumb, our compact 7-Piece Core Chef Set is perfect for single homes or couples. For active households, larger dinners, or hosting holidays, we highly recommend our flagship 15-Piece Royal Nesting Set, which includes multiple Dutch Ovens, multi-use stockpots, and specialized covers that stack compactly to optimize storage.'
    },
    {
      id: 'faq-r-4',
      question: 'Do you support water filter replacements and installation?',
      answer: 'Yes, we handle complete water filter assistance. Our team answers questions regarding tap water lead content, installs the stainless steel Club WaterSystem beneath your sink faucet, and provides annual replacement cartridges directly from local branch stock. Gasket swaps and maintenance are fully managed.'
    },
    {
      id: 'faq-r-5',
      question: 'How can I contact the branch manager directly?',
      answer: 'Our branch manager, Jonathan Harris, is available for direct consultation. You can view his telephone contacts and office coordinates under the "Contact" tab, email him at branch-manager@classicaregal-dist.com, or launch a secure chat instantly via the floating WhatsApp icon on the bottom corner of your screen.'
    }
  ];

  return (
    <div className="bg-[#faf9f6] min-h-screen">
      {/* SECTION 1: HEADER */}
      <section className="bg-[#faf9f6] text-[#0a192f] py-20 border-b border-[#0a192f]/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold font-sans">Client Support Center</span>
          <h1 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl text-[#0a192f] tracking-tight">Customer Support & Care</h1>
          <p className="text-[#0a192f]/70 max-w-xl mx-auto text-sm font-light">
            Access genuine care guides, register your cookware warranty, or find authorized parts easily with our branch.
          </p>
        </div>
      </section>

      {/* SECTION 2: ACCESS CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {supportCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-[#0a192f]/5 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-[#faf9f6]/95 border border-[#0a192f]/5 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <h3 className="font-serif font-normal text-sm sm:text-base text-[#0a192f] leading-snug">{card.title}</h3>
                <p className="text-xs text-[#0a192f]/70 leading-relaxed font-light">{card.desc}</p>
              </div>

              <div className="pt-6">
                <button
                  onClick={card.onClick}
                  className="w-full text-center py-2.5 rounded-full bg-[#0a192f] hover:bg-opacity-90 text-xs font-sans font-bold uppercase tracking-widest text-white transition-all cursor-pointer"
                >
                  {card.actionLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: FAQ ACCORDION */}
      <section className="bg-white py-24 border-t border-b border-[#0a192f]/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-left">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase font-sans text-[#c5a059] font-semibold tracking-widest">Resolved Queries</span>
            <h2 className="font-serif font-light text-2xl sm:text-3xl text-[#0a192f] tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[#0a192f]/60 text-xs sm:text-sm font-sans max-w-md mx-auto font-light">
              Read fast, honest feedback direct from our branch advisors regarding product use and warranty limits.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = expandedFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-[#0a192f]/5 bg-[#faf9f6]/40 rounded-3xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center px-6 py-5 hover:bg-[#faf9f6]/70 text-left cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                    id={`faq-btn-${faq.id}`}
                  >
                    <span className="font-serif font-normal text-sm sm:text-base text-[#0a192f] pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0a192f]/40 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#c5a059]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 text-xs sm:text-sm text-[#0a192f]/70 font-light leading-relaxed border-t border-[#0a192f]/5 pt-4 bg-white">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: INQUIRY CTA */}
      <section className="py-24 bg-[#faf9f6] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <HelpCircle className="w-12 h-12 text-[#c5a059] mx-auto" />
          <h2 className="font-serif font-light text-2xl text-[#0a192f]">Still Have Concerns?</h2>
          <p className="text-[#0a192f]/60 font-sans text-xs sm:text-sm max-w-md mx-auto font-light">
            Our local advisors can look up your catalog batch number or register replacement handle requirements instantly.
          </p>
          <div className="flex justify-center pt-2">
            <button
              onClick={() => onOpenQuickInquire('', 'After-Sales Support')}
              className="px-8 py-3.5 bg-[#0a192f] hover:bg-opacity-95 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              Contact Branch Support Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
