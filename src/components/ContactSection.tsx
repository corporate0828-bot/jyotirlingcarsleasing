import QuoteForm from './QuoteForm';
import { InquiryRecord } from '../types';
import { Phone, Mail, MapPin, Clock, ShieldCheck, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  onInquirySubmitted: (record: InquiryRecord) => void;
  presetCar?: string;
  presetService?: string;
  presetEstimatedFare?: number;
  presetNotes?: string;
}

export default function ContactSection({
  onInquirySubmitted,
  presetCar,
  presetService,
  presetEstimatedFare,
  presetNotes
}: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-slate-100/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Request an Instant Quotation
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Tell us your travel schedule, vehicle type, and location. We provide clear, transparent pricing and immediate availability confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-400 font-mono mb-1">
                Direct Dispatch Office
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Jyotirling Mobility
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Headquartered in Navi Mumbai. Fleet hubs across Koparkhairane, Vashi, Mahape, and Mumbai International Airport.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm pt-4 border-t border-slate-800">
              <a
                href="tel:7038340008"
                className="flex items-start gap-3 text-slate-200 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-slate-700 text-amber-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Phone & WhatsApp</span>
                  <strong className="text-white text-base font-mono">+91 7038340008</strong>
                  <span className="text-[11px] text-emerald-400 block mt-0.5">Available for instant calls</span>
                </div>
              </a>

              <a
                href="mailto:amolgole970@gmail.com"
                className="flex items-start gap-3 text-slate-200 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-slate-700 text-amber-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Corporate Email</span>
                  <strong className="text-white">amolgole970@gmail.com</strong>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Proposals & GST Invoices</span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-slate-200">
                <div className="p-2 rounded-lg bg-slate-800 text-amber-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Office Address</span>
                  <strong className="text-white">Koparkhairane, Sector 18</strong>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Navi Mumbai, Maharashtra - 400709</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-200">
                <div className="p-2 rounded-lg bg-slate-800 text-amber-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Operational Support</span>
                  <strong className="text-white">24 Hours / 7 Days</strong>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Day & Night Chauffeur Dispatch</span>
                </div>
              </div>
            </div>

            {/* Coverage highlights */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
              <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block mb-2">
                Primary Service Hubs
              </span>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Navi Mumbai (Koparkhairane, Vashi, Belapur, Ghansoli, Airoli, Panvel) · TTC & Taloja Industrial MIDC · Mumbai (BKC, Lower Parel, CSMIA Airport T1/T2) · Pune Express Corridors.
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div id="quote" className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                Submit Your Requirements
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill details below to open directly in WhatsApp or generate an inquiry reference ticket.
              </p>
            </div>

            <QuoteForm
              initialCar={presetCar}
              initialService={presetService}
              initialEstimatedFare={presetEstimatedFare}
              initialNotes={presetNotes}
              onSuccessSubmit={onInquirySubmitted}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
