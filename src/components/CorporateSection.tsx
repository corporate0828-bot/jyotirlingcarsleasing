import React, { useState } from 'react';
import { Building2, ShieldCheck, Clock, FileCheck, CheckCircle, ArrowRight, MessageSquare, Download } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/serviceData';

interface CorporateSectionProps {
  onRequestCorporateQuote: () => void;
}

export const CorporateSection: React.FC<CorporateSectionProps> = ({ onRequestCorporateQuote }) => {
  const [downloadNotice, setDownloadNotice] = useState(false);

  const corporatePillars = [
    {
      title: 'Dedicated Monthly Leases',
      desc: 'Cars stationed right at your corporate office or factory with fuel and chauffeur maintenance fully managed.',
      icon: Clock,
    },
    {
      title: '100% Verified Chauffeurs',
      desc: 'Police verification, background checks, defensive driving habits, and formal etiquette training.',
      icon: ShieldCheck,
    },
    {
      title: '45-Min Standby Guarantee',
      desc: 'In case of maintenance or breakdown, an equivalent standby vehicle is immediately dispatched in Navi Mumbai/Mumbai.',
      icon: CheckCircle,
    },
    {
      title: 'GST Compliant MIS Reports',
      desc: 'Itemized log sheets, digital trip tracking, and consolidated monthly invoices for seamless finance approval.',
      icon: FileCheck,
    },
  ];

  const handleDownloadTariff = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 4000);

    // Generate a clean text file or summary printout of corporate tariff
    const tariffContent = `JYOTIRLING MOBILITY - CORPORATE & INDUSTRIAL TARIFF CARD (2026)
Hub: Koparkhairane, Navi Mumbai | Dispatch: +91 7038340008 | Email: amolgole970@gmail.com

CORPORATE MONTHLY FIXED BASIS SLABS (26 Working Days / 10 Hours Daily):
1. Maruti Swift Dzire / Hyundai Aura (Sedan):
   - 2,000 KM Slab: ₹41,000 / month
   - 2,500 KM Slab: ₹45,000 / month
   - 3,000 KM Slab: ₹49,000 / month
   - Extra KM: ₹12/km | Extra Hour: ₹150/hr

2. Maruti Suzuki Ertiga (6+1 MUV):
   - 2,000 KM Slab: ₹52,000 / month
   - 2,500 KM Slab: ₹58,000 / month
   - 3,000 KM Slab: ₹64,000 / month
   - Extra KM: ₹15/km | Extra Hour: ₹200/hr

3. Toyota Innova Crysta (7-Seater Premium):
   - 2,000 KM Slab: ₹68,000 / month
   - 2,500 KM Slab: ₹75,000 / month
   - 3,000 KM Slab: ₹82,000 / month
   - Extra KM: ₹18/km | Extra Hour: ₹250/hr

INCLUSIONS:
- Dedicated uniformed chauffeur
- Fuel up to contracted slab
- Comprehensive insurance & road tax
- Standby replacement car guarantee within 45 mins
- Full monthly logsheet & GST invoice

CONTACT FOR TAILORED AGREEMENTS:
Amol Gole - Director of Mobility Operations
Phone/WhatsApp: +91 7038340008 | Email: amolgole970@gmail.com
Address: Koparkhairane, Sector 18, Navi Mumbai`;

    const blob = new Blob([tariffContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Jyotirling_Mobility_Corporate_Tariff_2026.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="corporate" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-900">
              <img
                src="/src/assets/images/corporate_chauffeur_1793774881187.jpg"
                alt="Executive Chauffeur Service by Jyotirling Mobility"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-1">
                  Executive Transport Standard
                </span>
                <p className="text-sm font-semibold text-slate-100">
                  Serving Industrial Belts of TTC Rabale, Mahape MBP, Taloja &amp; Airoli
                </p>
              </div>
            </div>

            {/* Quick Tariff Download Banner */}
            <div className="bg-white rounded-xl p-4 border border-slate-200 flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-amber-50 rounded-lg text-amber-700">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Official Rate Card (2026)</div>
                  <div className="text-[11px] text-slate-500">Corporate &amp; monthly lease tariff details</div>
                </div>
              </div>
              <button
                type="button"
                onClick={handleDownloadTariff}
                className="text-xs font-bold text-[#10243E] hover:text-[#C79A3B] px-3 py-1.5 rounded-lg border border-slate-300 hover:border-[#C79A3B] transition-colors whitespace-nowrap cursor-pointer"
              >
                Download (.txt)
              </button>
            </div>

            {downloadNotice && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg animate-fadeIn">
                Corporate Tariff Card downloaded successfully.
              </div>
            )}
          </div>

          {/* Corporate Explanatory Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-amber-700 uppercase">
                <Building2 className="w-4 h-4" />
                <span>Enterprise &amp; Factory Mobility</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10243E] tracking-tight">
                Corporate &amp; Industrial Car Hiring Solutions
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you need a single dedicated executive sedan for your Managing Director or a coordinated fleet of 10+ vehicles for factory shift logistics, Jyotirling Mobility delivers institutional reliability with predictable budgets.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corporatePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-4 h-4 text-amber-600" />
                      <strong className="text-sm font-bold text-slate-900">{pillar.title}</strong>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onRequestCorporateQuote}
                className="py-3.5 px-6 text-sm font-bold text-slate-950 bg-[#C79A3B] hover:bg-[#d6a94a] rounded-xl shadow transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Corporate Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={COMPANY_CONTACT.whatsappUrl(
                  'Hello Jyotirling Mobility, we are interested in discussing a Corporate / Monthly car hiring agreement for our organization.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat with Corporate Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
