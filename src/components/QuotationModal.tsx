import QuoteForm from './QuoteForm';
import { InquiryRecord } from '../types';
import { X } from 'lucide-react';

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetCar?: string;
  presetService?: string;
  presetEstimatedFare?: number;
  presetNotes?: string;
  onInquirySubmitted: (record: InquiryRecord) => void;
}

export default function QuotationModal({
  isOpen,
  onClose,
  presetCar,
  presetService,
  presetEstimatedFare,
  presetNotes,
  onInquirySubmitted
}: QuotationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur z-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Jyotirling Mobility
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Request a Vehicle Quotation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <QuoteForm
            initialCar={presetCar}
            initialService={presetService}
            initialEstimatedFare={presetEstimatedFare}
            initialNotes={presetNotes}
            onSuccessSubmit={(rec) => {
              onInquirySubmitted(rec);
            }}
            isModal={true}
          />
        </div>
      </div>
    </div>
  );
}
