import { motion } from 'motion/react';
import { ShieldCheck, Landmark, HeartPulse, Compass, CheckCircle } from 'lucide-react';
import { ViewType } from '../types';
import { PRODUCT_CATEGORIES, PRODUCTS } from '../data';

interface HomeViewProps {
  onViewChange: (view: ViewType) => void;
  onOpenQuickInquire: () => void;
  onViewProduct: (productId: string) => void;
}

export default function HomeView({ onViewChange, onOpenQuickInquire, onViewProduct }: HomeViewProps) {
  // Select best sellers to feature
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller);

  return (
    <div className="relative bg-[#faf9f6]">
      {/* SECTION 1: HERO SECTION */}
      <section id="hero-section" className="relative bg-[#faf9f6] pt-16 pb-24 md:py-32 overflow-hidden border-b border-[#0a192f]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Heading, description, actions */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-left"
            >
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-[#0a192f]/20"></span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-60 text-[#0a192f]">Authorized Local Branch Portal</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light leading-[1.15] text-[#0a192f]">
                Premium cookware for <br />
                <span className="italic font-normal text-[#c5a059]">healthier everyday</span> eating
              </h1>
              <p className="text-[#0a192f]/80 text-base sm:text-lg font-light max-w-2xl leading-relaxed">
                Discover Classica cookware and water filter systems through your trusted local branch. Designed for waterless nutrition, chemical-free dining, and a lifetime of kitchen companionship.
              </p>
            </motion.div>

            {/* Main Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-start items-stretch sm:items-center"
            >
              <button
                onClick={() => onViewChange('products')}
                className="px-8 py-3.5 bg-[#0a192f] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-opacity-90 transition-all text-center shadow-md active:scale-98 cursor-pointer"
                id="hero-explore-btn"
              >
                Explore Products
              </button>
              <button
                onClick={onOpenQuickInquire}
                className="px-8 py-3.5 border border-[#0a192f]/20 text-[#0a192f] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#0a192f]/5 transition-all text-center active:scale-98 cursor-pointer"
                id="hero-apply-btn"
              >
                Apply / Inquire Now
              </button>
            </motion.div>

            {/* Micro Trust details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-[#0a192f]/10 text-left font-serif"
            >
              <div>
                <span className="block text-[#c5a059] text-xl md:text-2xl font-bold">100%</span>
                <span className="text-[10px] text-[#0a192f]/60 uppercase tracking-widest font-bold">Made in USA</span>
              </div>
              <div>
                <span className="block text-[#c5a059] text-xl md:text-2xl font-bold">5-PLY</span>
                <span className="text-[10px] text-[#0a192f]/60 uppercase tracking-widest font-bold">Surgical Steel</span>
              </div>
              <div>
                <span className="block text-[#c5a059] text-xl md:text-2xl font-bold">LIFETIME</span>
                <span className="text-[10px] text-[#0a192f]/60 uppercase tracking-widest font-bold">Warranty</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero interactive display */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-lg border border-[#0a192f]/5 aspect-square max-w-[450px] mx-auto bg-neutral-200 group"
            >
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=80"
                alt="Premium Cookware Lifestyle"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Glassmorphism overlays on top of Hero Image */}
              <div className="absolute top-4 left-4 p-4 rounded-xl bg-white/90 backdrop-blur-md text-[#0a192f] max-w-[170px] space-y-1.5 shadow-lg border border-[#0a192f]/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4f772d] inline-block align-middle mr-1.5 animate-pulse"></span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#4f772d] font-bold">5-Ply Body</span>
                <p className="text-[11px] font-sans font-medium text-[#0a192f]/70 leading-relaxed">Uniform heat distribution prevents hot spots.</p>
              </div>

              <div className="absolute bottom-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md text-[#0a192f] max-w-[190px] space-y-1 shadow-lg border border-[#0a192f]/10 text-left">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span className="text-[9.5px] uppercase font-bold tracking-wider text-[#0a192f]/60">Healthier Life</span>
                </div>
                <h4 className="font-serif font-bold text-sm tracking-tight text-[#0a192f]">Zero-Oil Cooking</h4>
                <p className="text-[10.5px] text-[#0a192f]/60 leading-tight">Meals cook inside their own wholesome juices.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HEALTH & WARRANTY BADGES */}
      <section className="bg-[#f1f0ec] py-12 border-b border-[#0a192f]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
            <div className="flex flex-col items-center justify-center p-4">
              <ShieldCheck className="w-8 h-8 text-[#c5a059] mb-3" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0a192f]/70">Surgical Steel T-304</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="w-8 h-8 rounded-full bg-[#4f772d]/10 flex items-center justify-center text-[#4f772d] mb-3">
                <HeartPulse className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0a192f]/70">Nutrition Vapor Lock</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="w-8 h-8 rounded-full bg-[#0a192f]/5 flex items-center justify-center text-[#0a192f] mb-3">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0a192f]/70">No Electricity Needed</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-sm font-bold text-[#c5a059] mb-3 uppercase tracking-widest font-mono">USA-MADE</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0a192f]/70">Generations Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NEIGHBORLY BRANCH STORY */}
      <section id="branch-intro" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-12">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-[#c5a059]"></span>
              <span className="text-xs uppercase tracking-widest font-bold text-[#c5a059]">Julianne Vance, Branch Manager</span>
              <span className="h-px w-6 bg-[#c5a059]"></span>
            </div>
            <h2 className="font-serif font-light text-3xl md:text-4xl text-[#0a192f] tracking-tight leading-tight">
              A Personal Invitation from <br />Your Local Branch
            </h2>
          </div>

          <p className="text-[#0a192f]/80 font-light text-lg leading-relaxed text-left md:text-center">
            Hi, welcome to our local Classica Service Distributor Branch portal. While Classica Regal systems represent international excellence, we believe choosing elite cookware and drinking water services should be personal, local, and trustworthy. We are here as your neighbors to provide individual kitchen demonstrations, arrange flexible payment options, and help you select the exact proper solutions for your loved ones.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pt-6">
            <div className="p-8 rounded-2xl bg-[#faf9f6] border border-[#0a192f]/5 space-y-4">
              <span className="text-[#c5a059] font-mono text-xs font-semibold tracking-wider uppercase">01 / Personal Advisory</span>
              <h3 className="font-serif text-lg font-normal text-[#0a192f]">Interactive Home Demonstration</h3>
              <p className="text-sm font-light text-[#0a192f]/75 leading-relaxed">
                Invite us for a friendly, no-obligation kitchen presentation. We bring our sets, cook a healthy zero-oil recipe, and demonstrate the flavor differences right in your home.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#f1f0ec] border border-[#0a192f]/5 space-y-4">
              <span className="text-[#c5a059] font-mono text-xs font-semibold tracking-wider uppercase">02 / Local Aftercare</span>
              <h3 className="font-serif text-lg font-normal text-[#0a192f]">Local Warranty & Gaskets</h3>
              <p className="text-sm font-light text-[#0a192f]/75 leading-relaxed">
                Forget dialing robotic telephone configurations. We keep local replacements, pristine knobs, and filter cartridges right in town, offering near-instant personal processing.
              </p>
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              onClick={() => onViewChange('about')}
              className="py-2.5 px-6 text-xs uppercase tracking-widest font-bold text-[#0a192f] hover:text-[#c5a059] flex items-center gap-1.5 transition-all group cursor-pointer"
            >
              Read Our Complete Story <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRODUCT CATEGORIES */}
      <section id="categories-section" className="py-24 bg-[#faf9f6] border-t border-b border-[#0a192f]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Catalog Showroom</span>
            <h2 className="font-serif font-light text-3xl md:text-5xl text-[#0a192f] tracking-tight">
              Invest in Healthy Cookware
            </h2>
            <p className="text-[#0a192f]/60 text-sm font-light max-w-2xl mx-auto">
              Our cookware and filters are investments in family vitality. Examine our handpicked catalog collections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.slice(0, 6).map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#0a192f]/5 group"
              >
                <div className="relative aspect-video bg-neutral-100 overflow-hidden">
                  <img
                    src={cat.imageUrl}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 text-[9px] font-bold uppercase tracking-widest bg-[#0a192f] text-[#faf9f6] rounded-full">
                    {cat.itemCount} OPTIONS
                  </div>
                </div>
                <div className="p-6 text-left space-y-3">
                  <h3 className="font-serif text-lg font-normal text-[#0a192f] tracking-tight">{cat.name}</h3>
                  <p className="text-[#0a192f]/70 text-xs sm:text-sm font-light leading-relaxed">{cat.description}</p>
                  
                  <div className="pt-2 flex gap-3 justify-between items-center">
                    <button
                      onClick={() => onViewChange('products')}
                      className="text-xs uppercase tracking-widest font-bold text-[#0a192f] hover:text-[#c5a059] flex items-center gap-1 cursor-pointer"
                    >
                      Browse Items <span className="text-neutral-400">({cat.itemCount})</span>
                    </button>
                    <button
                      onClick={onOpenQuickInquire}
                      className="px-4 py-1.5 rounded-full bg-[#f1f0ec] hover:bg-[#0a192f] hover:text-white transition-all text-[10px] uppercase tracking-widest font-bold text-[#0a192f]"
                    >
                      Request Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HEALTH TECHNOLOGY DEMO */}
      <section id="health-technology" className="py-24 bg-[#0a192f] text-white overflow-hidden relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left info column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Scientific Engineering</span>
            <h2 className="font-serif font-light text-3xl md:text-4xl tracking-tight text-white leading-tight">
              The 5-Ply Cooking Breakthrough
            </h2>
            <p className="text-[#faf9f6]/80 font-light text-sm sm:text-base leading-relaxed">
              Standard stainless steel pots heat purely from the bottom and scorch meals easily. Classica multi-ply construction fuses multiple layers of thermal conductive alloys right through the core, fully enclosed by surgical-grade steel bounds.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#c5a059]/10 flex items-center justify-center shrink-0 border border-[#c5a059]/30 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-[#c5a059]" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-semibold text-white">Surgical Stainless Steel Outer Bounds</h4>
                  <p className="text-xs text-[#faf9f6]/60 font-light leading-relaxed">Non-porous, corrosion-resistant, PFOA-free surface ensures absolutely clean food environment with zero chemical leaching.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#c5a059]/10 flex items-center justify-center shrink-0 border border-[#c5a059]/30 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-[#c5a059]" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-semibold text-white">Three-Layer Aluminum Heating Matrix</h4>
                  <p className="text-xs text-[#faf9f6]/60 font-light leading-relaxed">Proprietary dynamic alloy spreads temperature outwards instantly up to the rims, saving time and keeping meat juices tender.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#c5a059]/10 flex items-center justify-center shrink-0 border border-[#c5a059]/30 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-[#c5a059]" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-semibold text-white">The Self-Basting Vapor-Seal Gland</h4>
                  <p className="text-xs text-[#faf9f6]/60 font-light leading-relaxed">Traps hot steam which forms a protective liquid locking rim. Food cooks in vegetable moisture preserving up to 90% of water-soluble minerals.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right graphics column - Ply visual presentation */}
          <div className="lg:col-span-6 relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur text-left">
            <h3 className="font-serif font-normal text-lg text-white mb-6 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[#c5a059]" /> Structuring a Lifetime Pan
            </h3>

            {/* Custom Interactive Ply Visualizer */}
            <div className="space-y-3 font-mono text-[11px]">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#c5a059]"></div>
                <div className="ml-2 flex justify-between items-center">
                  <span>LAYER 1: Surgical Stainless Steel 18/8</span>
                  <span className="text-[#c5a059] font-bold">Food Contacts</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-zinc-400"></div>
                <div className="ml-2 flex justify-between items-center mr-1">
                  <span>LAYER 2: Pure Aluminum Alloy Core</span>
                  <span className="text-zinc-400 font-bold">Heat Transfer</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/20 border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-300"></div>
                <div className="ml-2 flex justify-between items-center mr-1">
                  <span>LAYER 3: Special High-Bond Alloy matrix</span>
                  <span className="text-zinc-500 font-bold">Stability Bond</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/15 border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-zinc-500"></div>
                <div className="ml-2 flex justify-between items-center mr-1">
                  <span>LAYER 4: Pure Aluminum Heat Dispenser</span>
                  <span className="text-zinc-400 font-bold">Side-Wall Rise</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/30 border border-[#c5a059]/30 relative overflow-hidden">
                <div className="absolute top-0 left-0.5 w-1.5 h-full bg-gradient-to-b from-[#c5a059] to-white"></div>
                <div className="ml-3 flex justify-between items-center mr-1">
                  <span>LAYER 5: Magnetic Stainless Steel (430)</span>
                  <span className="text-[#c5a059] font-bold">Induction Fused</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-black/40 border border-white/5 flex gap-3 text-xs text-zinc-300 font-sans leading-relaxed">
              <span className="text-[#c5a059] font-bold shrink-0">Result:</span> Use up to 70% less cooking energy on your stove while locking vegetables from dehydration.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WATER FILTER SPOTLIGHT */}
      <section id="water-spotlight" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Image of pristine water poured */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-100 shadow-lg border border-[#0a192f]/5">
              <img
                src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80"
                alt="Pristine clear water faucet drinking"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 backdrop-blur-md text-[#0a192f] border border-[#0a192f]/10 shadow text-left">
                <h4 className="font-serif font-bold text-sm">Classica Club System</h4>
                <p className="text-xs text-[#0a192f]/70 mt-1 font-light leading-relaxed">Stainless steel solid block housing protects water purity for generations without cracking risks.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Key facts and comparison */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Club WaterSystem Highlights</span>
            <h2 className="font-serif font-light text-3xl md:text-4xl text-[#0a192f] tracking-tight leading-tight">
              Pristine Water, <br />Zero Electricity Waste
            </h2>
            <p className="text-[#0a192f]/80 font-light text-sm sm:text-base leading-relaxed">
              Avoid bulky under-sink plastic filter setups that throw away 4 gallons of water for every gallon filtered. Classica Club water utilizes sub-micron USA carbon core blocking to trap chlorine and microplastics while preserving healthy minerals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl border border-[#0a192f]/5 bg-[#faf9f6] relative flex gap-3">
                <CheckCircle className="w-5 h-5 text-[#4f772d] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-serif font-semibold text-[#0a192f]">Preserves Mineral carbonates</h4>
                  <p className="text-xs text-[#0a192f]/60 font-light mt-0.5">Keeps natural Calcium and Magnesium essential for heart health.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-[#0a192f]/5 bg-[#faf9f6] relative flex gap-3">
                <CheckCircle className="w-5 h-5 text-[#4f772d] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-serif font-semibold text-[#0a192f]">Zero Bulk Tank Required</h4>
                  <p className="text-xs text-[#0a192f]/60 font-light mt-0.5">Nests compactly underneath standard counters. Elegant direct flow design.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <button
                onClick={() => onViewChange('water-filter')}
                className="px-6 py-3 rounded-full bg-[#0a192f] hover:bg-opacity-90 text-white font-sans font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
                id="water-learn-more"
              >
                Explore Filtration
              </button>
              <button
                onClick={onOpenQuickInquire}
                className="px-6 py-3 rounded-full border border-[#0a192f]/20 hover:bg-[#0a192f]/5 text-[#0a192f] font-sans font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
              >
                Inquire Installation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: DISTRIBUTORSHIP OPPORTUNITY */}
      <section className="bg-[#f1f0ec] py-24 border-t border-b border-[#0a192f]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Community & Partnership</span>
          <h2 className="font-serif font-light text-2xl md:text-3xl text-[#0a192f] leading-tight">
            Interested in Joining the Distributorship?
          </h2>
          <p className="text-[#0a192f]/70 font-light text-sm md:text-base leading-relaxed">
            Represent premium, life-lasting products that support healthy diets. Work with our local branch team to learn product guidance, cook delicious recipes, and represent an industry-leading USA manufacturing tradition.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onViewChange('opportunity')}
              className="py-3 px-8 rounded-full bg-[#0a192f] hover:bg-opacity-90 text-white font-sans font-bold text-xs uppercase tracking-widest shadow-sm cursor-pointer"
              id="join-opp-btn"
            >
              Explore Distributorship Options
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 8: HOME CALL TO ACTION (CTA) */}
      <section className="py-24 bg-[#0a192f] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
          <h2 className="font-serif font-light text-3xl sm:text-4xl tracking-tight leading-tight">
            Ready to Revolutionize Your Kitchen Health?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base font-light">
            Request information about our products, receive catalog updates, or apply for an in-person cooking demonstration at no cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={onOpenQuickInquire}
              className="px-8 py-3.5 bg-[#c5a059] hover:bg-[#e2cca0] text-white font-sans font-bold rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md"
              id="cta-inquire"
            >
              Request Pricing & Demonstration
            </button>
            <button
              onClick={() => onViewChange('contact')}
              className="px-8 py-3.5 border border-white/20 hover:border-white text-white font-sans font-bold rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer"
            >
              Speak to Branch Manager
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
