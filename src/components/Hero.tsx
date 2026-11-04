import { ShieldCheck, Clock, Award, FileText, ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: (presetService?: string) => void;
  onScrollToCalculator: () => void;
}

export default function Hero({ onOpenQuoteModal, onScrollToCalculator }: HeroProps) {
  return (
    <section id="hero" className="relative bg-slate-900 text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20">
      {/* Subtle atmospheric radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Column 1: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-4 bg-amber-950/60 border border-amber-800/40 px-3 py-1 rounded">
              Corporate · Industrial · Government · Individual
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.14] text-white text-balance mb-5">
              Jyotirling Car Leasing &amp; Mobility, <span className="text-amber-400">Car Leasing &amp; Rental Services for Everyone.</span>
            </h1>

            {/* Key Value Points */}
            <div className="space-y-3 max-w-2xl mb-8">
              <div className="flex items-start sm:items-center gap-3 text-sm sm:text-base text-slate-200">
                <span className="w-6 h-6 rounded-md bg-amber-400/20 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0 border border-amber-400/30 mt-0.5 sm:mt-0">
                  1
                </span>
                <span className="font-medium">
                  <strong className="text-white font-semibold">Mid-Term &amp; Long-Term Car Leasing</strong> | Local &amp; Outstation Trips
                </span>
              </div>

              <div className="flex items-start sm:items-center gap-3 text-sm sm:text-base text-slate-200">
                <span className="w-6 h-6 rounded-md bg-amber-400/20 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0 border border-amber-400/30 mt-0.5 sm:mt-0">
                  2
                </span>
                <span className="font-medium">
                  <strong className="text-white font-semibold">Self Drive on Rent</strong> with Instant Delivery
                </span>
              </div>

              <div className="flex items-start sm:items-center gap-3 text-sm sm:text-base text-slate-200">
                <span className="w-6 h-6 rounded-md bg-amber-400/20 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0 border border-amber-400/30 mt-0.5 sm:mt-0">
                  3
                </span>
                <span className="font-medium">
                  <strong className="text-white font-semibold">Best Services in Navi Mumbai</strong>, Koparkhairane, Raigad, Mumbai, Panvel
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                onClick={onScrollToCalculator}
                className="w-full sm:w-auto px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-lg transition-all shadow-lg shadow-amber-950/20 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Calculate Fare & Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/917038340008?text=Hello%20Jyotirling%20Mobility%2C%20I%20would%20like%20to%20enquire%20about%20car%20rental."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: 7038340008</span>
              </a>

              <a
                href="tel:7038340008"
                className="w-full sm:w-auto px-4 py-3.5 bg-transparent hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm rounded-lg transition-colors flex items-center justify-center gap-2 border border-slate-800"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Call Directly</span>
              </a>
            </div>

            {/* Quick requirement links */}
            <div className="w-full pt-6 border-t border-slate-800/80">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                Quick Selection by Requirement:
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <button
                  onClick={() => onOpenQuoteModal('Corporate Car Hiring')}
                  className="px-3 py-1.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  Corporate Fleet
                </button>
                <button
                  onClick={() => onOpenQuoteModal('Industrial Car Hiring')}
                  className="px-3 py-1.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  Industrial / MIDC Units
                </button>
                <button
                  onClick={() => onOpenQuoteModal('Monthly / Fixed Basis')}
                  className="px-3 py-1.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  Monthly Fixed Contract
                </button>
                <button
                  onClick={() => onOpenQuoteModal('Local & Outstation Rental')}
                  className="px-3 py-1.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  Outstation & Airport
                </button>
                <button
                  onClick={() => onOpenQuoteModal('Wedding & Events')}
                  className="px-3 py-1.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  Weddings & Events
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Visual Fleet Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-800/60 shadow-2xl">
              <div className="aspect-[16/10] relative overflow-hidden bg-slate-900">
                <img
                  src="/src/assets/images/hero_car_fleet_1793774878776.jpg"
                  alt="Jyotirling Mobility executive car fleet in Navi Mumbai"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                  <div className="bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-md border border-slate-700 font-medium">
                    Corporate Fleet Base · Navi Mumbai
                  </div>
                  <div className="bg-amber-400 text-slate-950 px-2.5 py-1 rounded font-bold">
                    SUV & Sedan Fleet
                  </div>
                </div>
              </div>

              {/* Instant Requirement Fast-Track Card */}
              <div className="p-5 bg-slate-900 border-t border-slate-800">
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">
                  Ready to Book?
                </div>
                <div className="text-sm font-semibold text-white mb-3">
                  Get custom pricing for your route or monthly vehicle package.
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-800/70 p-2.5 rounded-lg border border-slate-700/60">
                    <span className="text-slate-400 block text-[11px]">Direct Support</span>
                    <strong className="text-white font-mono text-xs">+91 7038340008</strong>
                  </div>
                  <div className="bg-slate-800/70 p-2.5 rounded-lg border border-slate-700/60">
                    <span className="text-slate-400 block text-[11px]">Response Time</span>
                    <strong className="text-amber-400 text-xs">Within 15 Mins</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI / Proof Strip below Hero Split (§5.13) */}
        <div className="mt-14 pt-10 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <strong className="text-xl sm:text-2xl font-bold text-white font-mono">11+ Years</strong>
            </div>
            <p className="text-xs text-slate-400">Trusted operational experience in Mumbai & Navi Mumbai</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <strong className="text-xl sm:text-2xl font-bold text-white font-mono">100% Verified</strong>
            </div>
            <p className="text-xs text-slate-400">Background & police checked professional chauffeurs</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-sky-400 shrink-0" />
              <strong className="text-xl sm:text-2xl font-bold text-white font-mono">60 Min Standby</strong>
            </div>
            <p className="text-xs text-slate-400">Immediate backup vehicle deployment guarantee</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-5 h-5 text-amber-400 shrink-0" />
              <strong className="text-xl sm:text-2xl font-bold text-white font-mono">GST Compliant</strong>
            </div>
            <p className="text-xs text-slate-400">Formal monthly billing with detailed duty logs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
