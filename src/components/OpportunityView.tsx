import { Award, TrendingUp, Briefcase, Users, Globe, Compass } from 'lucide-react';

interface OpportunityViewProps {
  onOpenQuickInquire: (prefilledProduct?: string, inquiryType?: string) => void;
}

export default function OpportunityView({ onOpenQuickInquire }: OpportunityViewProps) {
  const offerings = [
    {
      icon: <Award className="w-5 h-5 text-[#c5a059]" />,
      title: 'Premium Product Representation',
      desc: 'Connect families with lifetime warrantied, surgical 5-ply stainless steel cookware built proudly in Wisconsin, USA.'
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#c5a059]" />,
      title: 'Excellent Profitability & Comms',
      desc: 'Build high-margin streams representing the luxury culinary sector. Generous, reliable local branch processing structures.'
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#c5a059]" />,
      title: 'Structured Marketing & Materials',
      desc: 'Get full access to pristine catalogues, demonstration cases, digital visual sets, and local branch marketing guidelines.'
    },
    {
      icon: <Users className="w-5 h-5 text-[#c5a059]" />,
      title: 'Healthy Cooking Education',
      desc: 'Form connections based on nutritional longevity and kitchen wellness. Help communities reduce carcinogenic plastic ingestion.'
    },
    {
      icon: <Globe className="w-5 h-5 text-[#c5a059]" />,
      title: 'Travel Incentive Programs',
      desc: 'Qualify for regional seminars, national conventions, and international destination retreats sponsored by corporate Ware alliances.'
    },
    {
      icon: <Compass className="w-5 h-5 text-[#c5a059]" />,
      title: 'Branch Mentorship',
      desc: 'Work under the direct daily advisory of Jonathan Harris. We handle product stock, packing logistics, and support.'
    }
  ];

  return (
    <div className="bg-[#faf9f6] min-h-screen">
      {/* SECTION 1: HEADER BANNER */}
      <section className="bg-[#faf9f6] text-[#0a192f] py-20 border-b border-[#0a192f]/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Partner with the culinary leader</span>
          <h1 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl text-[#0a192f] tracking-tight">The Classica Business Distributorship</h1>
          <p className="text-[#0a192f]/70 max-w-xl mx-auto text-sm font-light">
            Become a part of a dynamic, growing team and explore the possibility of representing Classica products in your area.
          </p>
        </div>
      </section>

      {/* SECTION 2: OFFICE TEAM INTRO HERO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          {/* Cover graphics */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#faf9f6] shadow-sm border border-[#0a192f]/5">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80"
                alt="Business professional representation team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Core pitch text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-sans font-bold text-[#c5a059] uppercase tracking-widest">A Modern Growth Path</span>
            <h2 className="font-serif font-light text-2xl sm:text-3xl text-[#0a192f] tracking-tight leading-tight">
              Grow Your Career, Safeguard Community Health
            </h2>
            <p className="text-[#0a192f]/70 font-light text-sm sm:text-base leading-relaxed">
              True professional fulfillment comes from representing products that genuinely improve lives. When you serve as an authorized Classica culinary advisor, you do not simply close sales; you introduce families to a lifetime of chemical-free nourishment.
            </p>
            <p className="text-[#0a192f]/70 font-light text-sm sm:text-base leading-relaxed">
              Through local branch alignment, we offer hands-on coaching, demonstration kit provisions, and help you schedule your initial wellness demonstrations. No prior kitchen sales history is required. We focus on drive, integrity, and warmth.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY OFFERS GRID */}
      <section className="py-24 bg-[#faf9f6] border-t border-b border-[#0a192f]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase font-sans text-[#c5a059] font-bold tracking-widest">Offerings & Benefits</span>
            <h2 className="font-serif font-light text-2xl sm:text-3xl text-[#0a192f] leading-tight tracking-tight">
              The Distributor Program Offers
            </h2>
            <p className="text-[#0a192f]/60 text-xs sm:text-sm font-sans max-w-xl mx-auto">
              How our branch supports and rewards independent business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((o, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-[#0a192f]/5 hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#faf9f6] border border-[#0a192f]/5 flex items-center justify-center shrink-0">
                    {o.icon}
                  </div>
                  <h3 className="font-serif font-normal text-base text-[#0a192f]">{o.title}</h3>
                  <p className="text-[#0a192f]/70 text-xs sm:text-sm leading-relaxed font-light">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION */}
      <section className="py-24 bg-[#0a192f] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <span className="text-xs uppercase font-sans tracking-widest text-[#c5a059] font-bold">Take control of your future</span>
          <h2 className="font-serif font-light text-2xl sm:text-3xl text-white">
            Apply for representative distributorship
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm font-light">
            Schedule a short online or in-person talk with our branch director. We will assess fit and introduce you to our kitchen demonstration workflows.
          </p>
          <div className="flex justify-center pt-2">
            <button
              onClick={() => onOpenQuickInquire('', 'Business Opportunity')}
              className="px-8 py-3.5 bg-[#c5a059] text-[#0a192f] hover:bg-opacity-95 font-sans font-bold text-xs uppercase tracking-widest rounded-full cursor-pointer shadow active:scale-95 transition-all text-center flex items-center justify-center"
              id="opp-apply-btn"
            >
              Apply for Business Opportunity
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
