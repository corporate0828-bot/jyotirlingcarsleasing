import { SERVICE_ITEMS } from '../data/fleetData';
import { ArrowRight, Check } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            Service Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            One Mobility Partner for Diverse Transit Needs
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            From single-day corporate audits and intercity airport runs to full-year dedicated industrial fleet contracts, we structure transparent, reliable mobility solutions.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_ITEMS.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                {/* Natural Editorial Numbering (Adhering to §1.B) */}
                <div className="text-xs font-mono font-bold text-amber-600 mb-3 tracking-wider">
                  {service.number}.
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs text-amber-800/80 font-medium mt-1 mb-3">
                  {service.tagline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                    Key Advantages
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {service.keyBenefits.slice(0, 2).map((benefit: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-900 text-xs font-bold transition-colors flex items-center justify-between border border-slate-200"
                >
                  <span>{service.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
