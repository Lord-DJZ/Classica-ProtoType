import { motion } from 'motion/react';
import { ChefHat, ShieldCheck, HeartPulse, Sparkles, BookOpen, UserCheck, MessageSquare, PhoneCall } from 'lucide-react';
import { ViewType } from '../types';

interface AboutViewProps {
  onViewChange: (view: ViewType) => void;
  onOpenQuickInquire: () => void;
}

export default function AboutView({ onViewChange, onOpenQuickInquire }: AboutViewProps) {
  const values = [
    {
      icon: <UserCheck className="w-6 h-6 text-[#c5a059]" />,
      title: 'Personalized Guidance',
      desc: 'We map cookware selections to your family size, health goals, and stove type, ensuring you buy exactly what adds nutritional value.'
    },
    {
      icon: <ChefHat className="w-6 h-6 text-[#c5a059]" />,
      title: 'Healthy Cooking Education',
      desc: 'We are culinary educators. We teach low-temperature steaming, starch-reduction, oil-free sautéing, and flavor preservation.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#c5a059]" />,
      title: 'Genuine After-Sales Help',
      desc: 'No automated call centers. Call our local branch directly for simple gasket swaps, warranty claims, or use tips.'
    }
  ];

  const steps = [
    {
      number: 'STEP 1',
      title: 'Consultation & Discovery',
      desc: 'Connect with our local branch. We explain the difference of 5-ply construction vs standard nickel-leaching pans.'
    },
    {
      number: 'STEP 2',
      title: 'Live Healthy Cooking Demo',
      desc: 'We host a direct cooking demonstration at your home using our pans to show how food retains vibrant colors and natural sugars.'
    },
    {
      number: 'STEP 3',
      title: 'Tailored Suite Selection',
      desc: 'Choose from a single daily sauce pan or a full royal 15-piece set. We explain local financing options that match your budget.'
    },
    {
      number: 'STEP 4',
      title: 'Pristine Hand Delivery & Integration',
      desc: 'We deliver your set, inspect the finishes, explain wash and handle care, and walk through your first healthy recipe.'
    },
    {
      number: 'STEP 5',
      title: 'Lifelong Kitchen Advisory',
      desc: 'Your Classica pieces carry a Lifetime Limited Warranty. We remain your direct point of contact for replacement filters, parts, and tips.'
    }
  ];

  return (
    <div className="bg-[#faf9f6] min-h-screen">
      {/* Mini Title Jumbotron */}
      <section className="bg-[#faf9f6] text-[#0a192f] py-20 border-b border-[#0a192f]/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Who We Are</span>
          <h1 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl text-[#0a192f] tracking-tight">Our Local Trust Story</h1>
          <p className="text-[#0a192f]/70 max-w-xl mx-auto text-sm font-light">
            Bridging international premium manufacturing with absolute local warmth and care.
          </p>
        </div>
      </section>

      {/* Main Core Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#f1f0ec] border border-[#0a192f]/5 text-xs text-[#0a192f] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" /> AUTHENTIC CULINARY REPRESENTATION
            </div>
            <h2 className="font-serif font-light text-2xl sm:text-3xl text-[#0a192f] tracking-tight">
              Why We Represent Classica Locally
            </h2>
            <p className="text-[#0a192f]/70 font-light text-sm sm:text-base leading-relaxed">
              We started representing Classica Regal cookware out of a basic personal realization: most kitchens cook in scratched, chemically coated aluminum teflon pans that transfer toxic residues. We wanted a permanent solution for ourselves and our neighbors.
            </p>
            <p className="text-[#0a192f]/70 font-light text-sm sm:text-base leading-relaxed">
              As your local Classica branch, we serve as your culinary educators, guides, and lifelong kitchen armor. We guide families toward healthy, low-fat boiling and clean, heavy-metal-free drinking water.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenQuickInquire}
                className="px-6 py-3 bg-[#0a192f] hover:bg-opacity-90 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-sm active:scale-95 cursor-pointer"
                id="about-consult-cta"
              >
                Inquire For Presentation
              </button>
            </div>
          </div>

          {/* Core Values Cards */}
          <div className="space-y-6">
            <h3 className="font-sans font-bold text-xs text-[#0a192f]/50 uppercase tracking-widest text-left">The Branch Creed</h3>
            <div className="space-y-4 text-left">
              {values.map((v, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#faf9f6] border border-[#0a192f]/5 flex gap-4">
                  <div className="shrink-0 p-3 bg-white rounded-xl border border-[#0a192f]/5 shadow-sm self-start">
                    {v.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-normal text-base text-[#0a192f]">{v.title}</h4>
                    <p className="text-xs sm:text-sm font-light text-[#0a192f]/70 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Horizontal/Vertical Steps Connection Board */}
      <section className="py-24 bg-[#faf9f6] border-t border-b border-[#0a192f]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold font-sans">The Journey</span>
            <h2 className="font-serif font-light text-2xl sm:text-3xl text-[#0a192f]">
              How We Guide You to Kitchen Lifetime Success
            </h2>
            <p className="text-sm font-light text-[#0a192f]/60 max-w-xl mx-auto">
              We make choosing premium cookware simple, honest, and educational.
            </p>
          </div>

          {/* Stepper Timeline UI */}
          <div className="max-w-3xl mx-auto space-y-8 relative">
            <div className="absolute left-6 top-4 bottom-4 w-[1px] bg-[#c5a059]/30 hidden md:block"></div>
            
            {steps.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row gap-6 text-left relative"
              >
                {/* Stepper Circle */}
                <div className="w-12 h-12 rounded-full bg-white border border-[#c5a059] flex items-center justify-center font-mono text-xs font-bold text-[#0a192f] shrink-0 shadow-sm relative z-10 mx-auto md:mx-0">
                  {idx + 1}
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-sm border border-[#0a192f]/5 space-y-2 flex-1">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#c5a059]">{s.number}</span>
                  <h4 className="font-serif text-lg font-normal text-[#0a192f]">{s.title}</h4>
                  <p className="text-[#0a192f]/70 text-xs sm:text-sm font-light leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Small Team/Manager Greeting Bio Profile */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#faf9f6] p-8 rounded-3xl border border-[#0a192f]/5">
          <div className="md:col-span-4 shrink-0 mx-auto">
            <div className="relative w-36 h-36 rounded-2xl overflow-hidden border border-[#c5a059] shadow">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
                alt="Cookware Branch Distribute Manager Profile"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold">Your Local Representative</span>
            <h3 className="font-serif text-xl font-normal text-[#0a192f]">Jonathan Harris, Branch Director</h3>
            <p className="text-[#0a192f]/75 font-light text-xs sm:text-sm leading-relaxed italic">
              "We understand that cookware is a permanent medical investment in your household health rather than simple utensils. Together with my kitchen advisory staff, we strive to make testing, ordering, and servicing your Classica set as flawless as humanly possible."
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2 text-xs">
              <a
                href="mailto:jonathan.harris@classicaregal-dist.com"
                className="px-4 py-2 bg-[#0a192f] text-white rounded-full hover:bg-opacity-90 transition-all font-mono"
              >
                jonathan.harris@classicaregal-dist.com
              </a>
              <a
                href="tel:+15552345678"
                className="px-4 py-2 border border-[#0a192f]/20 text-[#0a192f] rounded-full hover:bg-[#0a192f]/5 transition-all font-mono"
              >
                Office: (555) 234-5678
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
