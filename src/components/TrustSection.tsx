import React from 'react';
import { Check, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/serviceData';

export const TrustSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Share Requirement',
      desc: 'Pick your preferred car, dates, pickup location in Navi Mumbai or Mumbai, and journey basis.',
    },
    {
      num: '02',
      title: 'Get Transparent Quote',
      desc: 'Receive immediate all-inclusive tariffs or custom monthly B2B slab breakdown via WhatsApp or phone.',
    },
    {
      num: '03',
      title: 'Confirm Booking',
      desc: 'Confirm your schedule and receive driver credentials, car photos, and dispatch confirmation.',
    },
    {
      num: '04',
      title: 'Punctual Chauffeur Service',
      desc: 'Spotless vehicle and professional, uniformed driver arrives at least 15 minutes before scheduled departure.',
    },
  ];

  const whyFeatures = [
    { title: 'Police-Verified Chauffeurs', desc: 'Courteous, non-smoking, well-trained drivers with background checks.' },
    { title: 'Spotless Clean Cars', desc: 'Regularly sanitized, fully functional air-conditioning and pristine upholstery.' },
    { title: 'Guaranteed On-Time Arrival', desc: 'Drivers report 15 minutes prior to scheduled departure time.' },
    { title: 'Zero Hidden Charges', desc: 'Explicit per-km, night allowance, and extra-hour slabs with no surprise surcharges.' },
    { title: 'Flexible Contract Slabs', desc: 'Hourly packages, outstation journeys, or multi-year corporate agreements.' },
    { title: 'Immediate Replacement Fleet', desc: 'Standby backup fleet stationed across Navi Mumbai and Mumbai.' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* How It Works */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-bold tracking-widest text-[#1F5F8B] uppercase mb-2">
              Simple 4-Step Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10243E] tracking-tight">
              Booking a Car is Fast &amp; Effortless
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              No complicated paper registrations. Instant communication and transparent pricing from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm relative space-y-3"
              >
                <div className="text-xs font-extrabold font-mono text-amber-600 tracking-wider">
                  STEP {step.num}
                </div>
                <h3 className="text-base font-bold text-[#10243E]">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Jyotirling Mobility */}
        <div className="pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 bg-[#10243E] text-white rounded-2xl p-8 sm:p-10 shadow-xl space-y-4">
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                11+ Years Serving Maharashtra
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Simple Service. Clear Communication. Dependable Fleet.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Operating out of Koparkhairane, Navi Mumbai, we bridge executive business efficiency with warm, attentive hospitality. Trusted by corporate procurement leaders and families alike.
              </p>
              <div className="pt-4 border-t border-slate-800 flex items-center gap-6">
                <div>
                  <span className="text-2xl font-extrabold font-mono text-amber-300">99.4%</span>
                  <p className="text-[11px] text-slate-400">On-Time Pickup Rate</p>
                </div>
                <div className="h-8 w-px bg-slate-800" />
                <div>
                  <span className="text-2xl font-extrabold font-mono text-amber-300">100%</span>
                  <p className="text-[11px] text-slate-400">Police Verified Drivers</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xl border border-slate-200 space-y-1 shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-emerald-700" />
                      </div>
                      <strong className="text-sm font-bold text-slate-800">{feat.title}</strong>
                    </div>
                    <p className="text-xs text-slate-500 pl-7">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews & Testimonials */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold tracking-widest text-amber-700 uppercase mb-2">
              Verified Feedback
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10243E] tracking-tight">
              Trusted by Local Companies &amp; Travelers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-500 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <strong className="block text-sm font-bold text-[#10243E]">{t.name}</strong>
                  <span className="text-xs text-slate-500 block">{t.role}</span>
                  <span className="text-[11px] text-slate-400 block font-medium">{t.organization}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
