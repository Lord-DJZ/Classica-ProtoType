import { Droplet, Check, ShieldCheck } from 'lucide-react';
import { ViewType } from '../types';

interface WaterFilterViewProps {
  onOpenQuickInquire: (prefilledProduct?: string) => void;
}

export default function WaterFilterView({ onOpenQuickInquire }: WaterFilterViewProps) {
  const compData = [
    {
      feature: 'Protective casing',
      bottled: 'PET Thin Plastic (BPA Risk)',
      tap: 'Underground metal/PVC lead pipelines',
      classica: 'Mirror Surgical Stainless T-304 (Indestructible)',
      highlight: true
    },
    {
      feature: 'Essential Healthy Minerals',
      bottled: 'Stripped or artificial chemical additives',
      tap: 'Irregular trace content',
      classica: '100% Natural Electrolytes Preserved (Calcium, Magnesium)',
      highlight: true
    },
    {
      feature: 'Wastewater Generation',
      bottled: '2-3 Gallons wasted per clean bottle during supply chain',
      tap: 'Zero waste but high toxin level',
      classica: 'Direct flow system with ZERO wastewater',
      highlight: true
    },
    {
      feature: 'Power Connection Required',
      bottled: 'High fossil fuel distribution',
      tap: 'N/A',
      classica: 'Friction-pure water flow — Requires NO electricity',
      highlight: false
    },
    {
      feature: 'Carbon Footprint',
      bottled: 'Terrible, billions of plastic hulls thrown into landfills',
      tap: 'Low environmental impact',
      classica: 'Highly eco-friendly, lasting cartridge cores',
      highlight: false
    }
  ];

  const filterFeatures = [
    {
      title: 'USA Sub-Micron Matrix',
      desc: 'Formed from premium carbon active arrays compressing pores smaller than 0.5 microns to trap volatile compounds.',
    },
    {
      title: 'Structural Steel Cap',
      desc: 'Heavy physical metal casing prevents toxic phthalates from leaching back into the drinking water line.',
    },
    {
      title: 'Microplastic Shielding',
      desc: 'Direct physical filtration barrier effectively capturing synthetic polymer sediments and rust flakes.'
    },
    {
      title: 'Mineral Balanced Flow',
      desc: 'Allows ionic mineral carbonates to bypass the density grid, maintaining the crisp natural taste of spring-fresh water.'
    }
  ];

  return (
    <div className="bg-[#faf9f6] min-h-screen">
      {/* SECTION 1: HEADER HERO */}
      <section className="bg-[#faf9f6] text-[#0a192f] py-20 border-b border-[#0a192f]/5 relative overflow-hidden">
        {/* Subtle water-like blue circle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#c5a059]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold flex justify-center items-center gap-1.5 font-sans">
            <Droplet className="w-3.5 h-3.5 fill-current text-[#c5a059]" /> Clean Water Advisory
          </span>
          <h1 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl text-[#0a192f] tracking-tight leading-tight">
            Clean, Fresh Water for Everyday Living
          </h1>
          <p className="text-[#0a192f]/70 max-w-2xl mx-auto text-sm font-light leading-relaxed">
            Eliminate chemical carcinogens, microscopic plastic grids, and lead contaminants without throwing away essential mineral carbonates. The Classica Club WaterSystem delivers natural, pure hydration right on your bar sink.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onOpenQuickInquire('Classica Club WaterSystem')}
              className="px-6 py-3 bg-[#0a192f] hover:bg-opacity-90 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              Inquire About Water Filter Installation
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: STEEL CORE ARCHITECTURE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Detailed features text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-sans text-[#c5a059] font-bold uppercase tracking-widest">Built to Last Generations</span>
            <h2 className="font-serif font-light text-2xl sm:text-3xl text-[#0a192f] tracking-tight leading-tight">
              A Filter Designed Like Elegant Cookware
            </h2>
            <p className="text-[#0a192f]/70 font-light text-sm sm:text-base leading-relaxed">
              Standard household water filters are built using cheap, thin plastic hulls that crack easily, yellow, and leach bisphenols back into your drinking stream.
            </p>
            <p className="text-[#0a192f]/70 font-light text-sm sm:text-base leading-relaxed">
              The Classica Club filter casing represents legendary west-bend craftsmanship, formed entirely of <strong className="text-[#0a192f]">thick surgical-grade stainless steel</strong>. The solid metal cap withstands high residential plumbing pressures while fitting neatly below your sink to reclaim counter space.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {filterFeatures.map((f, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#faf9f6]/80 border border-[#0a192f]/5 flex gap-3 text-left">
                  <Check className="w-5 h-5 text-[#4f772d] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-serif font-normal text-[#0a192f]">{f.title}</h4>
                    <p className="text-[11.5px] text-[#0a192f]/60 mt-1 font-light leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Faucet visual card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-sm aspect-square border border-[#0a192f]/5 bg-[#f1f0ec]">
              <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=700&q=80"
                alt="Kitchen clean plumbing setup"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/80 text-[#faf9f6] text-[9px] uppercase tracking-widest font-mono font-bold">
                ⚡ ZERO ELECTRICAL PLUGS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: COMPARISON SHOWDOWN - HIGH CRAFT TABLE */}
      <section className="py-24 bg-[#faf9f6] border-t border-b border-[#0a192f]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase font-sans text-[#c5a059] font-bold tracking-widest">The Hard Facts</span>
            <h2 className="font-serif font-light text-2xl sm:text-3xl text-[#0a192f] tracking-tight">
              Classica vs Other Filtration Methods
            </h2>
            <p className="text-sm font-light text-[#0a192f]/60 max-w-xl mx-auto">
              Examine why our physical USA sub-micron block outperforms bottled waste and raw tap contaminants.
            </p>
          </div>

          {/* Desktop/Tablet Responsive Comparison Grid Table */}
          <div className="overflow-x-auto rounded-3xl border border-[#0a192f]/10 shadow-sm bg-white">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[#0a192f] text-white font-sans text-[10px] uppercase tracking-widest">
                  <th className="p-4 sm:p-5 font-bold">HYDRATION SYSTEM</th>
                  <th className="p-4 sm:p-5 font-bold">BOTTLED WATER</th>
                  <th className="p-4 sm:p-5 font-bold">REGULAR TAP WATER</th>
                  <th className="p-4 sm:p-5 font-bold bg-[#c5a059] text-[#0a192f]">CLASSICA FILTER</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0a192f]/5 font-light text-[#0a192f]/80">
                {compData.map((row, i) => (
                  <tr key={i} className={row.highlight ? 'bg-[#faf9f6]/60' : ''}>
                    <td className="p-4 sm:p-5 font-bold text-[#0a192f] text-[10px] sm:text-xs uppercase tracking-wider">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-xs sm:text-sm">{row.bottled}</td>
                    <td className="p-4 sm:p-5 text-xs sm:text-sm">{row.tap}</td>
                    <td className="p-4 sm:p-5 font-medium text-[#0a192f] bg-[#c5a059]/10 border-l border-r border-[#c5a059]/20 text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-[#4f772d] shrink-0" />
                        {row.classica}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center text-xs text-[#0a192f]/40 font-light">
            * Comparison reflects metrics surrounding standard residential T-304 surgical-steel water filtration arrays.
          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION FOR PLUMBING BOOKING */}
      <section className="py-24 bg-[#0a192f] text-[#faf9f6] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <h2 className="font-serif font-light text-2xl sm:text-3xl text-white">
            Schedule a Plumbing Analysis
          </h2>
          <p className="text-[#faf9f6]/70 max-w-xl mx-auto text-sm font-light">
            Contact Jonathan or an authorized local representative to run a quick, free chemical/lead check on your household tap water.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <button
              onClick={() => onOpenQuickInquire('Classica Club WaterSystem Installation')}
              className="px-6 py-3 bg-[#c5a059] text-[#0a192f] hover:bg-opacity-95 font-sans font-bold tracking-widest text-[10px] uppercase rounded-full cursor-pointer shadow active:scale-95 transition-all text-center flex items-center justify-center"
            >
              Inquire General Installation Plan
            </button>
            <a
              href="mailto:branch-manager@classicaregal-dist.com?subject=Water Filter Demonstration Request"
              className="px-6 py-3 border border-white/20 hover:border-[#c5a059] hover:text-white rounded-full font-sans font-bold uppercase tracking-widest text-[10px] transition-all text-center flex items-center justify-center text-white"
            >
              Email Branch Headquarters
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
