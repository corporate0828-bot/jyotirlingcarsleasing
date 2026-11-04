import { useState, useEffect } from 'react';
import { FLEET_VEHICLES, SERVICE_ITEMS } from '../data/fleetData';
import { InquiryRecord } from '../types';
import { MessageSquare, Send, CheckCircle2, Copy, Check, Clock } from 'lucide-react';

interface QuoteFormProps {
  initialService?: string;
  initialCar?: string;
  initialEstimatedFare?: number;
  initialNotes?: string;
  onSuccessSubmit?: (record: InquiryRecord) => void;
  isModal?: boolean;
}

export default function QuoteForm({
  initialService,
  initialCar,
  initialEstimatedFare,
  initialNotes,
  onSuccessSubmit,
  isModal = false
}: QuoteFormProps) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(initialService || 'Corporate Car Hiring');
  const [car, setCar] = useState(initialCar || 'Toyota Innova Crysta');
  const [numCars, setNumCars] = useState(1);
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [pickup, setPickup] = useState('');
  const [message, setMessage] = useState(initialNotes || '');
  const [estimatedFare, setEstimatedFare] = useState<number | undefined>(initialEstimatedFare);

  const [submittedRecord, setSubmittedRecord] = useState<InquiryRecord | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  useEffect(() => {
    if (initialService) setService(initialService);
    if (initialCar) setCar(initialCar);
    if (initialNotes) setMessage(initialNotes);
    if (initialEstimatedFare) setEstimatedFare(initialEstimatedFare);
  }, [initialService, initialCar, initialNotes, initialEstimatedFare]);

  const generateInquiryRecord = (): InquiryRecord => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const id = `JM-${new Date().getFullYear()}-${randomSuffix}`;
    return {
      id,
      name,
      mobile,
      company: company || undefined,
      service,
      carName: car,
      numCars,
      date: date || undefined,
      duration: duration || undefined,
      pickup: pickup || undefined,
      notes: message || undefined,
      estimatedTotal: estimatedFare,
      createdAt: new Date().toISOString(),
      status: 'Pending'
    };
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim()) return;

    const record = generateInquiryRecord();

    // Store in localStorage
    saveToStorage(record);

    const text = `Hello Jyotirling Mobility,%0A%0A*Quotation Enquiry [${record.id}]*%0A- *Name:* ${encodeURIComponent(name)}%0A- *Mobile:* ${encodeURIComponent(mobile)}%0A- *Company:* ${encodeURIComponent(company || 'Individual / Family')}%0A- *Service Required:* ${encodeURIComponent(service)}%0A- *Car Required:* ${encodeURIComponent(car)}%0A- *Number of Cars:* ${numCars}%0A- *Date Required:* ${encodeURIComponent(date || 'Flexible')}%0A- *Duration / Basis:* ${encodeURIComponent(duration || 'As per package')}%0A- *Pickup / Route:* ${encodeURIComponent(pickup || 'Not specified')}%0A- *Notes / Details:* ${encodeURIComponent(message || 'None')}${estimatedFare ? `%0A- *Calculated Estimate:* Rs. ${estimatedFare.toLocaleString('en-IN')}` : ''}%0A%0APlease confirm availability and share final quote.`;

    window.open(`https://wa.me/917038340008?text=${text}`, '_blank');

    setSubmittedRecord(record);
    if (onSuccessSubmit) onSuccessSubmit(record);
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim()) return;

    const record = generateInquiryRecord();
    saveToStorage(record);
    setSubmittedRecord(record);
    if (onSuccessSubmit) onSuccessSubmit(record);
  };

  const saveToStorage = (record: InquiryRecord) => {
    try {
      const existing = JSON.parse(localStorage.getItem('jm_inquiries') || '[]');
      const updated = [record, ...existing];
      localStorage.setItem('jm_inquiries', JSON.stringify(updated));
    } catch {
      // ignore localStorage quota errors
    }
  };

  const copyInquiryId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  if (submittedRecord) {
    return (
      <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">
          Quotation Request Dispatched!
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6">
          Your inquiry reference has been generated. Our dispatch manager in Koparkhairane will review and confirm vehicle availability within 15 minutes.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto mb-6 text-left text-xs">
          <div className="flex justify-between items-center pb-2 border-b border-slate-200">
            <span className="text-slate-500">Inquiry Reference:</span>
            <div className="flex items-center gap-1.5 font-mono font-bold text-slate-900">
              <span>{submittedRecord.id}</span>
              <button
                type="button"
                onClick={() => copyInquiryId(submittedRecord.id)}
                className="p-1 hover:bg-slate-200 rounded text-slate-600 transition-colors"
                title="Copy Reference ID"
              >
                {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
          <div className="pt-2 space-y-1 text-slate-700">
            <div><strong>Vehicle:</strong> {submittedRecord.carName} ({submittedRecord.numCars} Car)</div>
            <div><strong>Service:</strong> {submittedRecord.service}</div>
            <div><strong>Contact:</strong> {submittedRecord.name} ({submittedRecord.mobile})</div>
            {submittedRecord.estimatedTotal && (
              <div className="text-amber-800 font-semibold pt-1">
                <strong>Estimated:</strong> ₹{submittedRecord.estimatedTotal.toLocaleString('en-IN')}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={`https://wa.me/917038340008?text=Hello%20Jyotirling%20Mobility%2C%20following%20up%20on%20my%20quotation%20reference%20${submittedRecord.id}`}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Follow-up on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setSubmittedRecord(null);
              setName('');
              setMobile('');
              setMessage('');
            }}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSendWhatsApp}>
      {estimatedFare && (
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs flex items-center justify-between">
          <span className="text-amber-900 font-medium">Applied from Fare Estimator:</span>
          <span className="font-mono font-bold text-amber-950 text-sm">
            ₹{estimatedFare.toLocaleString('en-IN')}
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Amol K. Gole"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/40"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Mobile Number / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="e.g. 98200XXXXX"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/40"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Company / Organisation <span className="text-slate-400 text-[11px] font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g. ABC Logistics / Personal"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/40"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Service Required
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/40"
          >
            <option>Corporate Car Hiring</option>
            <option>Industrial Car Hiring</option>
            <option>Monthly / Fixed Basis</option>
            <option>Government & Institutional</option>
            <option>Personal & Family Rental</option>
            <option>Local Rental (8h / 80km)</option>
            <option>Outstation Rental</option>
            <option>Wedding & Events</option>
            <option>Dedicated Driver Service</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Car Model
          </label>
          <select
            value={car}
            onChange={(e) => setCar(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/40"
          >
            {FLEET_VEHICLES.map((v) => (
              <option key={v.id} value={v.name}>
                {v.name} ({v.seats} Seater)
              </option>
            ))}
            <option value="Any Sedan">Any Available Sedan</option>
            <option value="Any 7-Seater MUV">Any Available 7-Seater MUV</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Number of Cars
          </label>
          <input
            type="number"
            min="1"
            max="25"
            value={numCars}
            onChange={(e) => setNumCars(Number(e.target.value))}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/40"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Required Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/40"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Duration / Schedule
          </label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="e.g. 1 Month / 3 Days / 8 Hours"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/40"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Pickup Location & Destination / Route
        </label>
        <input
          type="text"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          placeholder="e.g. Koparkhairane Sector 18 to Pune Hinjewadi Phase 1"
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/40"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Special Requirements or Timing Notes
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Shift timings, luggage requirement, multiple stops, GST invoice name, etc."
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400/40 resize-none"
        />
      </div>

      {/* Two submission pathways */}
      <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          type="submit"
          className="w-full py-3 bg-amber-400 hover:bg-amber-300 font-bold text-slate-950 text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          <MessageSquare className="w-4 h-4 text-slate-950" />
          <span>Send via WhatsApp (+91 7038340008)</span>
        </button>

        <button
          type="button"
          onClick={handleDirectSubmit}
          className="w-full py-3 bg-slate-900 hover:bg-slate-800 font-bold text-white text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4 text-amber-400" />
          <span>Submit Direct Inquiry Slip</span>
        </button>
      </div>

      <p className="text-[11px] text-center text-slate-500">
        Direct Dispatch: <strong>+91 7038340008</strong> · Email: <strong>amolgole970@gmail.com</strong>
      </p>
    </form>
  );
}
