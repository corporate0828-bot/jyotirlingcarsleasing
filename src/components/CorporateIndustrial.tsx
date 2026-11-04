import { useState } from 'react';
import { Building2, Factory, FileCheck, Clock, Users, ShieldCheck, Download, ArrowRight, Check } from 'lucide-react';

interface CorporateIndustrialProps {
  onOpenQuoteModal: (servicePreset: string) => void;
}

export default function CorporateIndustrial({ onOpenQuoteModal }: CorporateIndustrialProps) {
  const [showTariffGuide, setShowTariffGuide] = useState(false);

  return (
    <section id="corporate" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Lead */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3 bg-amber-950/60 border border-amber-800/40 px-3 py-1 rounded">
            Enterprise Fleet Mobility
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance leading-tight">
            Corporate & Industrial Car Hiring for Mumbai & Navi Mumbai.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether your enterprise requires a dedicated monthly executive car for senior management or a reliable multi-shift transport fleet for plant engineers in Taloja, Rabale, Mahape, or TTC Industrial Area, Jyotirling Mobility delivers turnkey mobility.
          </p>
        </div>

        {/* 2-Column Feature & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Showcase Card */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950">
            <div className="aspect-[16/10] relative overflow-hidden">
              <img
                src="/src/assets/images/corporate_chauffeur_service_1793774874091.jpg"
                alt="Chauffeur executive service outside corporate tower"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            </div>

            <div className="p-6 bg-slate-950">
              <div className="flex items-center justify-between text-xs text-amber-400 mb-2 font-mono">
                <span>CHAUFFEUR SERVICE STANDARD</span>
                <span>NAVI MUMBAI · BKC · PUNE</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Punctual, Courteous & Protocol-Trained Chauffeurs
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Our drivers undergo background verification, defensive driving assessments, and training in corporate hospitality and city routes.
              </p>

              <div className="grid grid-cols-3 gap-2 text-center text-xs pt-4 border-t border-slate-800">
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <strong className="block text-white font-mono text-sm">60 Mins</strong>
                  <span className="text-slate-400 text-[10px]">Standby Backup</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <strong className="block text-white font-mono text-sm">100%</strong>
                  <span className="text-slate-400 text-[10px]">Police Verified</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <strong className="block text-white font-mono text-sm">Monthly</strong>
                  <span className="text-slate-400 text-[10px]">GST Billing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars & Values Bento */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">
                    Corporate Executive Mobility
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    Dedicated luxury sedans and premium MUVs (Toyota Innova Crysta, Maruti Dzire) assigned to C-suite directors, visiting clients, and daily business visits between BKC, Lower Parel, Powai, and Navi Mumbai.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-sky-400/10 text-sky-400 border border-sky-400/20 shrink-0">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">
                    Industrial & Manufacturing Plant Logistics
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    Coordinated transport for factory managers, shift supervisors, and engineers in TTC Industrial Area, Taloja MIDC, Mahape Millennium Business Park, Rabale, and Ambernath belts.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">
                    Zero-Admin Compliance & Monthly Invoicing
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    Save HR & procurement time. Every monthly contract includes verified odometer trip sheets, customized credit payment terms, and consolidated GST invoices.
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Actions */}
            <div className="pt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('Corporate Car Hiring')}
                className="px-5 py-3 bg-amber-400 hover:bg-amber-300 font-bold text-slate-950 text-sm rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-amber-950/30"
              >
                <span>Request Corporate Rate Card</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setShowTariffGuide(true)}
                className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs rounded-lg transition-colors border border-slate-700 flex items-center gap-2"
              >
                <span>View Monthly Package Summary</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal: Corporate Monthly Tariff Summary */}
        {showTariffGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white text-slate-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    Corporate Tariff Card
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Monthly Fixed Contract Reference
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Standard 26 days / month · 12 hours / day duty basis.
                  </p>
                </div>
                <button
                  onClick={() => setShowTariffGuide(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                >
                  ✕
                </button>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-xl mb-6">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                    <tr>
                      <th className="p-3">Vehicle Model</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">2000 KM Package</th>
                      <th className="p-3">2500 KM Package</th>
                      <th className="p-3">Extra / KM</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    <tr>
                      <td className="p-3 font-bold font-sans">Maruti Dzire / Aura</td>
                      <td className="p-3 text-slate-500 font-sans">Sedan</td>
                      <td className="p-3">₹45,000</td>
                      <td className="p-3">₹49,000</td>
                      <td className="p-3">₹14</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold font-sans">Maruti Ertiga</td>
                      <td className="p-3 text-slate-500 font-sans">7-Seater MUV</td>
                      <td className="p-3">₹58,000</td>
                      <td className="p-3">₹63,000</td>
                      <td className="p-3">₹16</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold font-sans">Toyota Innova Crysta</td>
                      <td className="p-3 text-slate-500 font-sans">Executive MUV</td>
                      <td className="p-3">₹82,000</td>
                      <td className="p-3">₹88,000</td>
                      <td className="p-3">₹20</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold font-sans">Tata Sierra / SUV</td>
                      <td className="p-3 text-slate-500 font-sans">Premium SUV</td>
                      <td className="p-3">₹86,000</td>
                      <td className="p-3">₹94,000</td>
                      <td className="p-3">₹22</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-2 text-xs text-slate-600 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Chauffeur Included:</strong> Professional driver salary and medical/accidental coverage covered.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Vehicle Replacement:</strong> Standby vehicle dispatched immediately if vehicle undergoes scheduled maintenance.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Tax Compliant:</strong> 5% / 12% GST invoice with clean input credit breakdown.</span>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowTariffGuide(false)}
                  className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowTariffGuide(false);
                    onOpenQuoteModal('Monthly / Fixed Basis');
                  }}
                  className="px-5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg shadow-sm"
                >
                  Proceed with Corporate Proposal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
