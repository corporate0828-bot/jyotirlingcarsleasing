import React from 'react';
import {
  Building2,
  Landmark,
  Factory,
  Hotel,
  GraduationCap,
  Users,
  KeyRound,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface SectorsServedProps {
  onSelectSector: (sectorName: string) => void;
}

export const SECTORS_DATA = [
  {
    id: 'corporate',
    title: 'Corporate Enterprises',
    tag: 'Corporate',
    icon: Building2,
    badge: 'MNCs & IT Parks',
    description: 'Executive mobility, leadership pickups, daily employee cab contracts, and client delegations across BKC, Powai, and Navi Mumbai.',
    highlights: ['Monthly consolidated GST billing', 'Standby replacement cars in 60 mins', 'Dedicated account manager'],
    sampleUse: 'Directors, Senior Executives & Client Delegations',
  },
  {
    id: 'government',
    title: 'Government & Institutional',
    tag: 'Government',
    icon: Landmark,
    badge: 'Protocol & Official Duty',
    description: 'Protocol-compliant vehicles, state guest transit, institutional meetings, official inspections, and government tender fleets.',
    highlights: ['Vetted chauffeurs with police verification', 'Spotless white Innova & Sedan fleet', 'Duty slip logbook management'],
    sampleUse: 'Official Delegations, State Guests & Public Duties',
  },
  {
    id: 'industrial',
    title: 'Industrial & MIDC Units',
    tag: 'Industrial',
    icon: Factory,
    badge: 'TTC, Taloja & Rabale',
    description: 'Heavy-duty transport for factory staff, plant engineers, shift supervisors, and management visits in Navi Mumbai and Pune industrial belts.',
    highlights: ['24/7 round-the-clock shift coverage', 'Factory gate pickup & drops', 'Punctual transit in industrial zones'],
    sampleUse: 'Plant Managers, Shift Staff & Site Engineers',
  },
  {
    id: 'hotels',
    title: 'Hotels & Hospitality',
    tag: 'Hotels',
    icon: Hotel,
    badge: 'Guest Logistics & Concierge',
    description: 'Premium guest airport transfers, conference shuttles, concierge fleet on demand, and luxury banquet mobility for 5-star & boutique hotels.',
    highlights: ['Uniformed, English & Hindi fluent chauffeurs', 'Meet & greet at Mumbai CSMIA T1/T2', 'Luggage assistance & pristine sanitization'],
    sampleUse: 'VIP Hotel Guests, Wedding Banquets & Delegates',
  },
  {
    id: 'schools',
    title: 'Schools & Educational Institutes',
    tag: 'Schools',
    icon: GraduationCap,
    badge: 'Institutions & Universities',
    description: 'Safe and dependable conveyance for teaching faculty, guest professors, academic inspectors, sports teams, and administrative staff.',
    highlights: ['Strict adherence to safety guidelines', 'Speed-governed, clean vehicles', 'Consistent fixed-time daily schedules'],
    sampleUse: 'Faculty Conveyance, Guest Lecturers & Campus Visits',
  },
  {
    id: 'individual',
    title: 'Individual & Family Travel',
    tag: 'Individual',
    icon: Users,
    badge: 'Tours & Events',
    description: 'Comfortable family vacations, wedding guest fleets, weekend trips to Lonavala or Alibaug, and divine 12 Jyotirlinga / Shirdi pilgrimages.',
    highlights: ['Spacious 7-seater MUVs with luggage carriers', 'Patient, courteous family chauffeurs', 'Transparent per-km and flat pricing'],
    sampleUse: 'Family Outstation, Jyotirlinga Darshan & Weddings',
  },
  {
    id: 'self-drive',
    title: 'Self Drive Car Rentals',
    tag: 'Self Drive',
    icon: KeyRound,
    badge: 'Independent Mobility',
    description: 'Enjoy the freedom of the open road with our well-maintained, sanitized self-drive fleet. Flexible daily, weekly, and monthly packages.',
    highlights: ['Doorstep delivery & pickup in Navi Mumbai', 'Clean documentation & insurance', 'Zero hidden charges, transparent fuel terms'],
    sampleUse: 'Business Trips, Weekend Roadtrips & Flexible City Use',
  },
];

export default function SectorsServed({ onSelectSector }: SectorsServedProps) {
  return (
    <section id="sectors" className="py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              Who We Serve
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              We Provide Dedicated Mobility Services To
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Tailored vehicle packages, dedicated fleet management, and transparent terms designed specifically for each sector’s operational requirements.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            <span>7 Specialized Verticals</span>
            <span className="mx-2 text-slate-300">·</span>
            <span className="text-amber-700 font-semibold">Chauffeur-Driven &amp; Self-Drive</span>
          </div>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SECTORS_DATA.map((sector) => {
            const Icon = sector.icon;
            const isSelfDrive = sector.id === 'self-drive';

            return (
              <article
                key={sector.id}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between group ${
                  isSelfDrive
                    ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white border-slate-800 shadow-md md:col-span-2 xl:col-span-2'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelfDrive
                          ? 'bg-amber-400 text-slate-950 shadow'
                          : 'bg-slate-100 text-slate-900 group-hover:bg-slate-900 group-hover:text-amber-400 transition-colors'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded ${
                        isSelfDrive
                          ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {sector.badge}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold tracking-tight mb-2 ${
                      isSelfDrive ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {sector.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed mb-4 ${
                      isSelfDrive ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {sector.description}
                  </p>

                  <div
                    className={`pt-3 border-t space-y-1.5 mb-4 ${
                      isSelfDrive ? 'border-slate-800' : 'border-slate-100'
                    }`}
                  >
                    {sector.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isSelfDrive ? 'text-amber-400' : 'text-emerald-600'
                          }`}
                        />
                        <span className={isSelfDrive ? 'text-slate-200' : 'text-slate-700'}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`pt-4 border-t flex items-center justify-between gap-2 ${
                    isSelfDrive ? 'border-slate-800' : 'border-slate-100'
                  }`}
                >
                  <span
                    className={`text-[11px] font-mono truncate max-w-[150px] ${
                      isSelfDrive ? 'text-amber-300' : 'text-slate-500'
                    }`}
                  >
                    {sector.sampleUse}
                  </span>

                  <button
                    type="button"
                    onClick={() => onSelectSector(`${sector.title} Requirement`)}
                    className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                      isSelfDrive
                        ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-sm'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
