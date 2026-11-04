import { useState } from 'react';
import { InquiryRecord } from '../types';
import { X, Trash2, Download, MessageSquare, Phone, Copy, Check, Clock } from 'lucide-react';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  inquiries: InquiryRecord[];
  onClearAll: () => void;
  onDeleteOne: (id: string) => void;
}

export default function InquiryDrawer({
  isOpen,
  onClose,
  inquiries,
  onClearAll,
  onDeleteOne
}: InquiryDrawerProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const exportToCSV = () => {
    if (inquiries.length === 0) return;
    const headers = ['Inquiry ID', 'Date Created', 'Name', 'Mobile', 'Company', 'Service', 'Car', 'Quantity', 'Travel Date', 'Estimated Total'];
    const rows = inquiries.map((i) => [
      i.id,
      new Date(i.createdAt).toLocaleString(),
      `"${i.name}"`,
      `"${i.mobile}"`,
      `"${i.company || 'N/A'}"`,
      `"${i.service}"`,
      `"${i.carName}"`,
      i.numCars,
      `"${i.date || 'Flexible'}"`,
      i.estimatedTotal ? `₹${i.estimatedTotal}` : 'Custom'
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Jyotirling_Mobility_Inquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="font-bold text-base text-slate-900">
              Inquiry & Quote History
            </h3>
            <p className="text-xs text-slate-500">
              {inquiries.length} record{inquiries.length === 1 ? '' : 's'} stored on this device
            </p>
          </div>

          <div className="flex items-center gap-1">
            {inquiries.length > 0 && (
              <button
                type="button"
                onClick={exportToCSV}
                className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors"
                title="Export CSV"
              >
                <Download className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
          {inquiries.length === 0 ? (
            <div className="text-center py-16 text-slate-400 text-xs">
              <Clock className="w-8 h-8 mx-auto text-slate-300 mb-2" />
              <p className="font-semibold text-slate-700">No Inquiries Submitted Yet</p>
              <p className="mt-1 max-w-xs mx-auto">
                Any quotation requests or WhatsApp inquiries generated will be tracked here with a unique ticket ID.
              </p>
            </div>
          ) : (
            inquiries.map((inq) => (
              <div
                key={inq.id}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all text-xs space-y-2 relative"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[11px]">
                      {inq.id}
                    </span>
                    <h4 className="font-bold text-slate-900 mt-1 text-sm">{inq.carName}</h4>
                  </div>
                  <button
                    onClick={() => onDeleteOne(inq.id)}
                    className="p-1 text-slate-300 hover:text-red-500 rounded transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-1 text-slate-600 pt-1">
                  <div><strong>Customer:</strong> {inq.name} ({inq.mobile})</div>
                  {inq.company && <div><strong>Company:</strong> {inq.company}</div>}
                  <div><strong>Service:</strong> {inq.service} ({inq.numCars} Car)</div>
                  {inq.pickup && <div><strong>Route/Pickup:</strong> {inq.pickup}</div>}
                  {inq.estimatedTotal && (
                    <div className="text-amber-800 font-semibold">
                      <strong>Est. Fare:</strong> ₹{inq.estimatedTotal.toLocaleString('en-IN')}
                    </div>
                  )}
                  <div className="text-[10px] text-slate-400 pt-1">
                    Submitted: {new Date(inq.createdAt).toLocaleString()}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleCopy(inq.id)}
                    className="flex items-center gap-1 text-[11px] text-slate-600 hover:text-slate-900"
                  >
                    {copiedId === inq.id ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-400" />
                        <span>Copy ID</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/917038340008?text=Hello%20Jyotirling%20Mobility%2C%20following%20up%20on%20my%20quotation%20ID%20${inq.id}%20for%20${encodeURIComponent(inq.carName)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp Follow-up</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {inquiries.length > 0 && (
          <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs">
            <button
              onClick={onClearAll}
              className="text-red-600 hover:text-red-700 font-semibold"
            >
              Clear All Records
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
