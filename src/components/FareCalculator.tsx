import { useState, useMemo } from 'react';
import { FLEET_VEHICLES } from '../data/fleetData';
import { Vehicle } from '../types';
import { Calculator, CheckCircle2, MessageSquare, ArrowRight, Info, Shield } from 'lucide-react';

interface FareCalculatorProps {
  onTransferToQuote: (details: {
    service: string;
    carName: string;
    estimatedFare: number;
    notes: string;
  }) => void;
}

export default function FareCalculator({ onTransferToQuote }: FareCalculatorProps) {
  const [tripType, setTripType] = useState<'local' | 'outstation' | 'monthly' | 'airport'>('local');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('toyota-innova-crysta');

  // Local options
  const [localDuration, setLocalDuration] = useState<'8h_80k' | '12h_120k'>('8h_80k');

  // Outstation options
  const [outstationKm, setOutstationKm] = useState<number>(300);
  const [outstationDays, setOutstationDays] = useState<number>(1);
  const [outstationJourneyType, setOutstationJourneyType] = useState<'round' | 'oneway'>('round');

  // Monthly options
  const [monthlyKm, setMonthlyKm] = useState<number>(2500);

  // Airport options
  const [airportZone, setAirportZone] = useState<'csmia_navi_mumbai' | 'csmia_south_mumbai' | 'nmia_panvel' | 'mumbai_pune_airport'>('csmia_navi_mumbai');

  const selectedVehicle: Vehicle = useMemo(() => {
    return FLEET_VEHICLES.find((v) => v.id === selectedVehicleId) || FLEET_VEHICLES[0];
  }, [selectedVehicleId]);

  // Calculation logic
  const calculation = useMemo(() => {
    let baseFare = 0;
    let driverAllowance = 0;
    let extraChargesEst = 0;
    let summaryText = '';

    if (tripType === 'local') {
      if (localDuration === '8h_80k') {
        baseFare = selectedVehicle.localPackageRate;
        summaryText = `Local Package (8 Hours / 80 Kilometers) in ${selectedVehicle.name}`;
      } else {
        // 12h / 120km is roughly 1.45x
        baseFare = Math.round(selectedVehicle.localPackageRate * 1.45);
        summaryText = `Local Extended Package (12 Hours / 120 Kilometers) in ${selectedVehicle.name}`;
      }
      driverAllowance = 0; // included in local duty during daytime
    } else if (tripType === 'outstation') {
      // Outstation minimum billing is usually 250km or 300km per day
      const minKmPerDay = 300;
      const effectiveKm = Math.max(outstationKm, outstationDays * minKmPerDay);
      baseFare = effectiveKm * selectedVehicle.ratePerKm;
      driverAllowance = outstationDays * selectedVehicle.driverAllowanceDay;
      summaryText = `Outstation ${outstationJourneyType === 'round' ? 'Round Trip' : 'One Way'} (${effectiveKm} km, ${outstationDays} day${outstationDays > 1 ? 's' : ''})`;
    } else if (tripType === 'monthly') {
      // Monthly fixed calculation
      const baseMonthly = selectedVehicle.monthlyFixedEst;
      const kmDiff = monthlyKm - 2500;
      baseFare = baseMonthly + (kmDiff > 0 ? kmDiff * selectedVehicle.extraKmRate : 0);
      summaryText = `Monthly Corporate Fixed Contract (${monthlyKm} km/month, 26 days/mo, 12 hrs/day)`;
    } else if (tripType === 'airport') {
      let airportMultiplier = 1;
      if (airportZone === 'csmia_navi_mumbai') airportMultiplier = 0.55;
      else if (airportZone === 'csmia_south_mumbai') airportMultiplier = 0.65;
      else if (airportZone === 'nmia_panvel') airportMultiplier = 0.45;
      else if (airportZone === 'mumbai_pune_airport') airportMultiplier = 1.35;

      baseFare = Math.round(selectedVehicle.localPackageRate * airportMultiplier);
      summaryText = `Airport Point-to-Point Transit (${airportZone.replace(/_/g, ' ').toUpperCase()})`;
    }

    const totalEstimated = baseFare + driverAllowance + extraChargesEst;

    return {
      baseFare,
      driverAllowance,
      extraChargesEst,
      totalEstimated,
      summaryText
    };
  }, [tripType, selectedVehicle, localDuration, outstationKm, outstationDays, outstationJourneyType, monthlyKm, airportZone]);

  const handleSendWhatsAppQuote = () => {
    const text = `Hello Jyotirling Mobility,%0A%0A*Fare Estimator Enquiry*%0A- *Service / Trip Type:* ${encodeURIComponent(tripType.toUpperCase())}%0A- *Vehicle:* ${encodeURIComponent(selectedVehicle.name)}%0A- *Details:* ${encodeURIComponent(calculation.summaryText)}%0A- *Estimated Fare:* Rs. ${calculation.totalEstimated.toLocaleString('en-IN')}%0A%0APlease share availability and final confirmation.`;
    window.open(`https://wa.me/917038340008?text=${text}`, '_blank');
  };

  const handleTransfer = () => {
    onTransferToQuote({
      service: tripType === 'monthly' ? 'Monthly / Fixed Basis' : tripType === 'local' ? 'Local Rental' : 'Outstation Rental',
      carName: selectedVehicle.name,
      estimatedFare: calculation.totalEstimated,
      notes: calculation.summaryText
    });
  };

  return (
    <section id="calculator" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 tracking-wider uppercase bg-amber-100/70 border border-amber-200 px-3 py-1 rounded-full mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Rate Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Transparent Pricing Before You Book
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Select your journey requirements, choose your vehicle, and get an immediate cost estimate with no hidden costs.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Trip Type Segmented Controls (Interactive Filter Buttons) */}
          <div className="p-2 sm:p-3 bg-slate-100 border-b border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2">
            <button
              onClick={() => setTripType('local')}
              className={`py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all text-center whitespace-nowrap shrink-0 ${
                tripType === 'local'
                  ? 'bg-slate-900 text-amber-400 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Local City Package
            </button>
            <button
              onClick={() => setTripType('outstation')}
              className={`py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all text-center whitespace-nowrap shrink-0 ${
                tripType === 'outstation'
                  ? 'bg-slate-900 text-amber-400 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Outstation Travel
            </button>
            <button
              onClick={() => setTripType('airport')}
              className={`py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all text-center whitespace-nowrap shrink-0 ${
                tripType === 'airport'
                  ? 'bg-slate-900 text-amber-400 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Airport Pickup / Drop
            </button>
            <button
              onClick={() => setTripType('monthly')}
              className={`py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all text-center whitespace-nowrap shrink-0 ${
                tripType === 'monthly'
                  ? 'bg-slate-900 text-amber-400 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Monthly Corporate
            </button>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Vehicle Selection Carousel/Grid */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  1. Choose Vehicle
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {FLEET_VEHICLES.map((vehicle) => {
                    const isSelected = vehicle.id === selectedVehicleId;
                    return (
                      <button
                        key={vehicle.id}
                        type="button"
                        onClick={() => setSelectedVehicleId(vehicle.id)}
                        className={`p-3 text-left rounded-xl border transition-all ${
                          isSelected
                            ? 'border-amber-500 bg-amber-50/60 ring-2 ring-amber-400/30'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                          {vehicle.name}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {vehicle.seats} Seats · {vehicle.fuelType}
                        </div>
                        <div className="text-xs font-mono font-semibold text-slate-900 mt-1.5">
                          ₹{vehicle.ratePerKm}/km
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Conditional Journey Parameters */}
              <div className="pt-4 border-t border-slate-100">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  2. Journey Parameters
                </label>

                {/* Local Rental Options */}
                {tripType === 'local' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setLocalDuration('8h_80k')}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          localDuration === '8h_80k'
                            ? 'border-slate-900 bg-slate-900 text-white'
                            : 'border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-800'
                        }`}
                      >
                        <div className="font-bold text-sm">8 Hours / 80 Kms</div>
                        <div className={`text-xs mt-1 ${localDuration === '8h_80k' ? 'text-amber-300' : 'text-slate-500'}`}>
                          Standard Full-Day City Package
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setLocalDuration('12h_120k')}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          localDuration === '12h_120k'
                            ? 'border-slate-900 bg-slate-900 text-white'
                            : 'border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-800'
                        }`}
                      >
                        <div className="font-bold text-sm">12 Hours / 120 Kms</div>
                        <div className={`text-xs mt-1 ${localDuration === '12h_120k' ? 'text-amber-300' : 'text-slate-500'}`}>
                          Extended Day / Multi-Hub Package
                        </div>
                      </button>
                    </div>

                    <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-start gap-2">
                      <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        Additional running rate: <strong>₹{selectedVehicle.extraKmRate}/km</strong> and{' '}
                        <strong>₹{selectedVehicle.extraHourRate}/hour</strong> after standard package limits.
                      </div>
                    </div>
                  </div>
                )}

                {/* Outstation Options */}
                {tripType === 'outstation' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                          <span>Estimated Trip Distance</span>
                          <span className="font-mono text-amber-700 font-bold">{outstationKm} KM</span>
                        </div>
                        <input
                          type="range"
                          min="150"
                          max="1200"
                          step="25"
                          value={outstationKm}
                          onChange={(e) => setOutstationKm(Number(e.target.value))}
                          className="w-full accent-amber-500 cursor-pointer"
                        />
                        <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                          <span>150 km (Pune)</span>
                          <span>600 km (Shirdi-Goa)</span>
                          <span>1200 km+</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Number of Days
                        </label>
                        <select
                          value={outstationDays}
                          onChange={(e) => setOutstationDays(Number(e.target.value))}
                          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800"
                        >
                          <option value={1}>1 Day (Return same night)</option>
                          <option value={2}>2 Days (1 Night Stay)</option>
                          <option value={3}>3 Days (Weekend / Pilgrimage)</option>
                          <option value={4}>4 Days (Detailed Circuit)</option>
                          <option value={5}>5+ Days (Long Tour)</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-medium text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <span>Trip Mode:</span>
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="journeyType"
                          checked={outstationJourneyType === 'round'}
                          onChange={() => setOutstationJourneyType('round')}
                          className="accent-amber-500"
                        />
                        <span>Round Trip</span>
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="journeyType"
                          checked={outstationJourneyType === 'oneway'}
                          onChange={() => setOutstationJourneyType('oneway')}
                          className="accent-amber-500"
                        />
                        <span>One-Way Drop</span>
                      </label>
                    </div>

                    <p className="text-[11px] text-slate-500">
                      *Outstation minimum billing: 300 km/day. Driver bata of ₹{selectedVehicle.driverAllowanceDay}/day applied.
                    </p>
                  </div>
                )}

                {/* Airport Options */}
                {tripType === 'airport' && (
                  <div className="space-y-3">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Select Transfer Sector
                    </label>
                    <select
                      value={airportZone}
                      onChange={(e) => setAirportZone(e.target.value as any)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800"
                    >
                      <option value="csmia_navi_mumbai">
                        Navi Mumbai (Koparkhairane / Vashi / Panvel) ↔ Mumbai Airport CSMIA (T1/T2)
                      </option>
                      <option value="csmia_south_mumbai">
                        South Mumbai / Colaba / BKC ↔ Mumbai Airport CSMIA
                      </option>
                      <option value="nmia_panvel">
                        Navi Mumbai Hub ↔ Upcoming NMIA International Airport
                      </option>
                      <option value="mumbai_pune_airport">
                        Mumbai / Navi Mumbai ↔ Pune International Airport (Lohegaon)
                      </option>
                    </select>
                    <p className="text-xs text-slate-500">
                      Includes 45 minutes complimentary wait time after flight touchdown.
                    </p>
                  </div>
                )}

                {/* Monthly Options */}
                {tripType === 'monthly' && (
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                        <span>Monthly Kilometers Required</span>
                        <span className="font-mono text-amber-700 font-bold">{monthlyKm} KM / Month</span>
                      </div>
                      <input
                        type="range"
                        min="2000"
                        max="3500"
                        step="250"
                        value={monthlyKm}
                        onChange={(e) => setMonthlyKm(Number(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                        <span>2,000 km (Standard)</span>
                        <span>2,500 km (Industrial Commute)</span>
                        <span>3,500 km (Multi-facility)</span>
                      </div>
                    </div>

                    <div className="text-xs text-slate-600 bg-amber-50/70 p-3 rounded-lg border border-amber-200/60">
                      <strong>Corporate Monthly Inclusions:</strong> Dedicated vehicle, full-time verified chauffeur (12 hrs/day, 26 days/month), maintenance, and 60-minute backup vehicle guarantee.
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Price Output & Actions Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-6 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
                  <span>Selected Vehicle</span>
                  <span className="text-amber-400 font-semibold">{selectedVehicle.category.replace('_', ' ').toUpperCase()}</span>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <div className="w-16 h-12 rounded-lg bg-slate-800 overflow-hidden shrink-0">
                    <img
                      src={selectedVehicle.image}
                      alt={selectedVehicle.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white leading-tight">
                      {selectedVehicle.name}
                    </h3>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {selectedVehicle.seats} Seater · {selectedVehicle.transmission} · AC
                    </div>
                  </div>
                </div>

                {/* Calculation breakdown */}
                <div className="mt-6 pt-5 border-t border-slate-800 space-y-2.5 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Base Vehicle Rental:</span>
                    <span className="font-mono tabular-nums text-white">
                      ₹{calculation.baseFare.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {calculation.driverAllowance > 0 && (
                    <div className="flex justify-between text-slate-300">
                      <span>Driver Allowance (Bata):</span>
                      <span className="font-mono tabular-nums text-white">
                        ₹{calculation.driverAllowance.toLocaleString('en-IN')}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Tolls & Parking:</span>
                    <span className="text-slate-400">At actuals</span>
                  </div>

                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>GST Invoicing:</span>
                    <span className="text-emerald-400">Available on request</span>
                  </div>
                </div>

                {/* Total estimated fare */}
                <div className="mt-6 pt-5 border-t border-slate-800 bg-slate-950/60 -mx-6 -mb-6 p-6 rounded-b-xl">
                  <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                    Estimated Fare
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tabular-nums">
                      ₹{calculation.totalEstimated.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-400">
                      {tripType === 'monthly' ? '/ month' : 'approx.'}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-2">
                    {calculation.summaryText}
                  </p>

                  {/* Direct conversion actions */}
                  <div className="mt-6 space-y-2.5">
                    <button
                      type="button"
                      onClick={handleSendWhatsAppQuote}
                      className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Lock In Quote on WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleTransfer}
                      className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2 border border-slate-700"
                    >
                      <span>Transfer to Formal Quote Slip</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2 text-[11px] text-slate-400">
                    <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Instant WhatsApp dispatch to <strong>+91 7038340008</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
