import { useState, useMemo } from 'react';
import { Search, Star, X, Check, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductItem } from '../types';
import { PRODUCTS } from '../data';

interface ProductsViewProps {
  onOpenQuickInquire: (prefilledProduct?: string) => void;
  selectedProductIdFromHome?: string;
  onClearHomeProductSelect?: () => void;
}

export default function ProductsView({
  onOpenQuickInquire,
  selectedProductIdFromHome,
  onClearHomeProductSelect
}: ProductsViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<ProductItem | null>(
    selectedProductIdFromHome ? (PRODUCTS.find(p => p.id === selectedProductIdFromHome) || null) : null
  );
  
  // Modal tabs
  const [modalTab, setModalTab] = useState<'overview' | 'features' | 'care'>('overview');

  const filterTabs = [
    { label: 'All Premium Products', value: 'all' },
    { label: 'Cookware Sets', value: 'cookware-sets' },
    { label: 'Sauce Pans', value: 'sauce-pans' },
    { label: 'Dutch Ovens & Pots', value: 'dutch-ovens' },
    { label: 'Sauté & Specialties', value: 'specialties' },
    { label: 'Water Filtration', value: 'water-filters' },
    { label: 'Accessories', value: 'accessories' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesCategory = true;
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'specialties') {
          matchesCategory = product.categorySlug === 'specialties' || product.categorySlug === 'skillets';
        } else {
          matchesCategory = product.categorySlug === selectedCategory;
        }
      }

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleOpenItemDetails = (item: ProductItem) => {
    setActiveItem(item);
    setModalTab('overview');
  };

  const handleCloseItemDetails = () => {
    setActiveItem(null);
    if (onClearHomeProductSelect) {
      onClearHomeProductSelect();
    }
  };

  const handleModalInquire = () => {
    if (activeItem) {
      const productName = activeItem.name;
      handleCloseItemDetails();
      onOpenQuickInquire(productName);
    }
  };

  return (
    <div className="bg-[#faf9f6] min-h-screen">
      {/* Search & Top Title Banner */}
      <section className="bg-[#faf9f6] text-[#0a192f] py-20 border-b border-[#0a192f]/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Showroom Catalog</span>
            <h1 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl text-[#0a192f] tracking-tight">Invest in Kitchen Health</h1>
            <p className="text-[#0a192f]/70 max-w-xl mx-auto text-sm font-light">
              Discover products backed by custom 5-ply heat dispersion and lifetime stainless warranties.
            </p>
          </div>

          {/* Styled search search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-[#0a192f]/40 absolute left-4.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search product, size or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white text-[#0a192f] border border-[#0a192f]/10 focus:border-[#0a192f] focus:ring-2 focus:ring-[#0a192f]/5 outline-none font-sans text-sm shadow-sm text-left transition-all"
            />
          </div>
        </div>
      </section>

      {/* Main product catalog grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Horizontal Category Pill Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-zinc-300 text-left border-b border-[#0a192f]/5">
          {filterTabs.map((f) => (
            <button
              key={f.value}
              onClick={() => setSelectedCategory(f.value)}
              className={`px-5 py-2.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest transition-all whitespace-nowrap shrink-0 border cursor-pointer ${
                selectedCategory === f.value
                  ? 'bg-[#0a192f] text-white border-[#0a192f]'
                  : 'bg-white text-[#0a192f]/70 border-[#0a192f]/10 hover:border-[#c5a059] hover:text-[#0a192f]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Selected Products Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <motion.div
                layout
                key={p.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#0a192f]/5 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video bg-[#f1f0ec] overflow-hidden">
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    {p.isBestSeller && (
                      <div className="absolute top-4 left-4 bg-[#c5a059] text-white text-[8px] font-mono tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1 uppercase font-bold">
                        <Star className="w-3 h-3 fill-current" /> Best Seller
                      </div>
                    )}
                  </div>
                  <div className="p-6 space-y-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#c5a059] uppercase tracking-wider">
                        {p.categorySlug.replace('-', ' ')}
                      </span>
                    </div>
                    <h3 className="font-serif font-normal text-lg text-[#0a192f] leading-tight tracking-tight group-hover:text-[#c5a059] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0a192f]/70 leading-relaxed font-light">
                      {p.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#0a192f]/5 mt-auto flex justify-between gap-4 items-center">
                  <button
                    onClick={() => handleOpenItemDetails(p)}
                    className="text-xs font-sans font-bold uppercase tracking-widest text-[#0a192f]/70 hover:text-[#0a192f] relative py-2 cursor-pointer flex items-center gap-1"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onOpenQuickInquire(p.name)}
                    className="px-5 py-2.5 bg-[#0a192f] hover:bg-opacity-90 text-white rounded-full text-[10px] font-sans font-bold uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Inquire
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center space-y-4">
              <span className="text-4xl">🍲</span>
              <h3 className="font-serif text-xl font-normal text-[#0a192f]">No products match filter parameters</h3>
              <p className="text-[#0a192f]/60 text-sm font-light max-w-sm mx-auto">
                Try modifying your search text or select another premium category tab.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-2.5 bg-[#0a192f] text-white hover:bg-opacity-90 font-sans font-bold tracking-widest text-[10px] uppercase rounded-full cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* DETAILED MODAL OVERLAY */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
            {/* Backdrop blur clickoff */}
            <div className="fixed inset-0 bg-[#0a192f]/40 backdrop-blur-md" onClick={handleCloseItemDetails}></div>

            <div className="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#0a192f]/5 overflow-hidden relative z-10 flex flex-col md:flex-row text-left"
              >
                {/* Close Button absolute inside modal */}
                <button
                  onClick={handleCloseItemDetails}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#0a192f] shadow border border-[#0a192f]/5 hover:text-[#c5a059] transition-colors cursor-pointer"
                  aria-label="Close Product Overlay"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left image and core properties */}
                <div className="md:w-1/2 bg-[#faf9f6] p-6 md:p-8 flex flex-col justify-between border-r border-[#0a192f]/5">
                  <div className="space-y-6">
                    <div className="relative rounded-2xl overflow-hidden aspect-video bg-white border border-[#0a192f]/5 shadow-sm">
                      <img
                        src={activeItem.imageUrl}
                        alt={activeItem.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="space-y-3">
                      <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold">
                        {activeItem.categorySlug}
                      </span>
                      <h2 className="font-serif text-2xl font-normal text-[#0a192f] leading-tight">
                        {activeItem.name}
                      </h2>
                      <p className="text-[#0a192f]/70 text-xs sm:text-sm font-light leading-relaxed">
                        {activeItem.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#0a192f]/10 space-y-2">
                    <span className="text-[10px] uppercase font-mono font-bold text-[#0a192f]/40">Suitable For:</span>
                    <div className="flex gap-1.5 flex-wrap">
                      {activeItem.suitableFor.map((st, i) => (
                        <span key={i} className="px-3 py-1 bg-[#0a192f]/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#0a192f]">
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right specs and dynamic helper tabs */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between h-[550px] md:h-auto overflow-y-auto">
                  <div>
                    {/* Secondary Navigation Inside Modal */}
                    <div className="flex border-b border-[#0a192f]/5 gap-1 overflow-x-auto">
                      {(['overview', 'features', 'care'] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setModalTab(tab)}
                          className={`px-3.5 py-2.5 text-[10px] font-sans font-bold uppercase tracking-widest relative whitespace-nowrap cursor-pointer ${
                            modalTab === tab ? 'text-[#c5a059]' : 'text-[#0a192f]/50 hover:text-[#0a192f]'
                          }`}
                        >
                          {tab}
                          {modalTab === tab && (
                            <motion.div
                              layoutId="innerModalNav"
                              className="absolute bottom-0 inset-x-0 h-[2px] bg-[#c5a059]"
                            />
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Tab dynamic views selection */}
                    <div className="mt-6 space-y-6">
                      {modalTab === 'overview' && (
                        <div className="space-y-6">
                          <div className="space-y-3">
                            <h4 className="text-[10px] uppercase font-sans text-[#0a192f]/50 font-bold tracking-widest">Valuable Health Benefits</h4>
                            <div className="space-y-2 text-xs sm:text-sm">
                              {activeItem.benefits.map((b, i) => (
                                <div key={i} className="flex gap-2.5 items-start">
                                  <div className="w-5 h-5 rounded-full bg-[#4f772d]/10 text-[#4f772d] flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3" />
                                  </div>
                                  <span className="text-[#0a192f]/70 font-light leading-tight">{b}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-3">
                            <h4 className="text-[10px] uppercase font-sans text-[#0a192f]/50 font-bold tracking-widest">Detailed Specifications</h4>
                            <div className="border border-[#0a192f]/5 rounded-2xl overflow-hidden text-xs">
                              {Object.entries(activeItem.specifications).map(([key, val], idx) => (
                                <div key={idx} className={`grid grid-cols-2 p-3 ${idx % 2 === 0 ? 'bg-[#faf9f6]' : 'bg-white'}`}>
                                  <span className="font-bold text-[#0a192f]/70">{key}</span>
                                  <span className="text-[#0a192f]/65 font-light">{val}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {modalTab === 'features' && (
                        <div className="space-y-4">
                          <h4 className="text-[10px] uppercase font-sans text-[#0a192f]/50 font-bold tracking-widest mb-3">Key Features Built Into Cookware</h4>
                          <div className="grid grid-cols-1 gap-3">
                            {activeItem.features.map((f, i) => (
                              <div key={i} className="p-4 rounded-2xl bg-[#faf9f6] border border-[#0a192f]/5">
                                <div className="flex gap-3">
                                  <Award className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                                  <div>
                                    <h5 className="text-xs sm:text-sm font-bold text-[#0a192f] leading-tight">{f}</h5>
                                    <p className="text-[11px] text-[#0a192f]/60 mt-1 font-light leading-relaxed">Surgical construction designed to lock hygiene and retain original vitamins during steam exposure.</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {modalTab === 'care' && (
                        <div className="space-y-4 text-xs sm:text-sm text-[#0a192f]/70 leading-relaxed font-light">
                          <h4 className="text-[10px] uppercase font-sans text-[#0a192f]/50 font-bold tracking-widest mb-3 animate-none">Care & Maintenance Guide</h4>
                          <p>
                            Classica cookware warrants a lifetime performance if maintained properly. Follow these fundamental recommendations:
                          </p>
                          <ul className="space-y-2.5 list-disc pl-5">
                            <li>
                              <strong className="text-[#0a192f] font-bold">Initial Wash:</strong> Prior to your first healthy stew, wash each pan in warm water with general dish soap + half cup of vinegar to dissolve manufacturer satin packing oils.
                            </li>
                            <li>
                              <strong className="text-[#0a192f] font-bold">Heat Management:</strong> Never high heat! Put burner on <strong className="font-bold">Medium-Low</strong>. Classica’s core matrix acts as an oven block, retaining high temperature grids without burning inputs.
                            </li>
                            <li>
                              <strong className="text-[#0a192f] font-bold">Lid Whistle Care:</strong> When checking vapor, if the indicator clicks or whistles, instantly turn the dial to closed bounds and reduce temperature to low.
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions inside modal footer */}
                  <div className="pt-8 border-t border-[#0a192f]/5 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleModalInquire}
                      className="px-6 py-3.5 bg-[#0a192f] hover:bg-opacity-90 rounded-full text-xs text-white font-bold uppercase tracking-widest text-center transition-all flex-1 cursor-pointer"
                    >
                      Inquire About Product
                    </button>
                    <button
                      onClick={handleCloseItemDetails}
                      className="px-6 py-3.5 border border-[#0a192f]/10 text-[#0a192f] hover:bg-[#faf9f6]/40 text-xs font-bold uppercase tracking-widest rounded-full text-center cursor-pointer transition-colors"
                    >
                      Back to Catalog
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
