import React from 'react';
import { Phone, MessageSquare, Calculator } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/serviceData';

export const QuickActionBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 inset-x-0 z-40 sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-xs"
    >
      <div className="bg-[#10243E]/95 backdrop-blur-md text-white border-t sm:border border-slate-700/80 sm:rounded-2xl shadow-2xl p-2 sm:p-2.5 flex items-center justify-around sm:justify-end gap-2">
        {/* Direct Call Button */}
        <a
          href={`tel:${COMPANY_CONTACT.phone}`}
          className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap"
          title="Call Jyotirling Mobility"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Call</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href={COMPANY_CONTACT.whatsappUrl('Hello Jyotirling Mobility, I would like to inquire about car rental.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors whitespace-nowrap"
          title="WhatsApp Jyotirling Mobility"
        >
          <MessageSquare className="w-3.5 h-3.5 text-white" />
          <span>WhatsApp</span>
        </a>

        {/* Quick Quote Scroll */}
        <a
          href="#quote"
          className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-slate-950 bg-[#C79A3B] hover:bg-[#d6a94a] rounded-lg transition-colors whitespace-nowrap"
          title="Request a Quotation"
        >
          <Calculator className="w-3.5 h-3.5 text-slate-950" />
          <span>Quote</span>
        </a>
      </div>
    </aside>
  );
};
