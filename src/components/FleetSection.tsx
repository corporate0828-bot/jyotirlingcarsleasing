import { useState } from 'react';
import { FLEET_VEHICLES } from '../data/fleetData';
import { Vehicle, VehicleCategory } from '../types';
import { Users, Briefcase, Fuel, Shield, CheckCircle, ArrowRight, X, Phone } from 'lucide-react';

interface FleetSectionProps {
  onSelectCarForQuote: (carName: string) => void;
}

export default function FleetSection({ onSelectCarForQuote }: FleetSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory>('all');
  const [activeModalVehicle, setActiveModalVehicle] = useState<Vehicle | null>(null);

  const filteredVehicles = FLEET_VEHICLES.filter((car) => {
    if (selectedCategory === 'all') return true;
    return car.category === selectedCategory;
  });

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              Our Modern Fleet
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Vehicles Engineered for Every Requirement
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              From executive 7-seater MUVs for corporate delegations to economical sedans for city errands, each car is sanitized, insured, and handled by an experienced chauffeur.
            </p>
          </div>

          {/* Category Filter Buttons (Functional Tabs per §1.A) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Vehicles ({FLEET_VEHICLES.length})
            </button>
            <button
              onClick={() => setSelectedCategory('corporate_muv')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'corporate_muv'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Corporate MUVs
            </button>
            <button
              onClick={() => setSelectedCategory('sedan')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'sedan'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Executive Sedans
            </button>
            <button
              onClick={() => setSelectedCategory('suv')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'suv'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              SUVs & Crossovers
            </button>
            <button
              onClick={() => setSelectedCategory('hatchback')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'hatchback'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hatchback
            </button>
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((car) => (
            <article
              key={car.id}
              className="group rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Photo container */}
                <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden border-b border-slate-100">
                  <img
                    src={car.image}
                    alt={car.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {car.isPopular && (
                    <div className="absolute top-3 left-3 bg-slate-900 text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded shadow">
                      Most Requested
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-semibold px-2.5 py-1 rounded border border-slate-200">
                    {car.brand}
                  </div>
                </div>

                {/* Car Content */}
                <div className="p-5">
                  <div className="text-xs text-amber-700 font-semibold mb-1">
                    {car.segmentTitle}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {car.name}
                  </h3>

                  {/* Clean unboxed metadata with separators (§1.A Zero-Pill Discipline) */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-2 mb-3">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>{car.seats} Passengers</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      <span>{car.luggageBags} Bags</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Fuel className="w-3.5 h-3.5 text-slate-400" />
                      <span>{car.fuelType}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {car.description}
                  </p>

                  {/* Pricing strip */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-2 gap-2 text-xs mb-2">
                    <div>
                      <span className="text-slate-500 block text-[11px]">8h / 80km City:</span>
                      <strong className="text-slate-900 font-mono text-sm font-bold">
                        ₹{car.localPackageRate.toLocaleString('en-IN')}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[11px]">Outstation Rate:</span>
                      <strong className="text-slate-900 font-mono text-sm font-bold">
                        ₹{car.ratePerKm}/km
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="px-5 pb-5 pt-2 grid grid-cols-2 gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setActiveModalVehicle(car)}
                  className="py-2.5 px-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors text-center"
                >
                  View Details & Specs
                </button>
                <button
                  type="button"
                  onClick={() => onSelectCarForQuote(car.name)}
                  className="py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 text-center"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for Vehicle Inspection */}
        {activeModalVehicle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
              <div className="relative aspect-[16/10] bg-slate-900">
                <img
                  src={activeModalVehicle.image}
                  alt={activeModalVehicle.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveModalVehicle(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-colors"
                  aria-label="Close vehicle details"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-slate-700 text-white">
                  <div className="text-xs text-amber-400 font-semibold">
                    {activeModalVehicle.segmentTitle}
                  </div>
                  <h3 className="text-xl font-bold">{activeModalVehicle.name}</h3>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Overview & Fleet Role
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {activeModalVehicle.description}
                  </p>
                </div>

                {/* Key specs */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Technical & Seating Specifications
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-400 block text-[11px]">Seating</span>
                      <strong className="text-slate-800 text-sm">{activeModalVehicle.seats} Persons</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-400 block text-[11px]">Luggage</span>
                      <strong className="text-slate-800 text-sm">{activeModalVehicle.luggageBags} Suitcases</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-400 block text-[11px]">Transmission</span>
                      <strong className="text-slate-800 text-sm">{activeModalVehicle.transmission}</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-400 block text-[11px]">Fuel System</span>
                      <strong className="text-slate-800 text-sm">{activeModalVehicle.fuelType}</strong>
                    </div>
                  </div>
                </div>

                {/* Tariff sheet */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Commercial Tariff Guide
                  </h4>
                  <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden text-xs">
                    <div className="flex justify-between p-3 bg-slate-50/70">
                      <span className="text-slate-600">Local Day Pack (8h / 80km)</span>
                      <strong className="font-mono text-slate-900">₹{activeModalVehicle.localPackageRate}</strong>
                    </div>
                    <div className="flex justify-between p-3">
                      <span className="text-slate-600">Extra Km Rate</span>
                      <strong className="font-mono text-slate-900">₹{activeModalVehicle.extraKmRate}/km</strong>
                    </div>
                    <div className="flex justify-between p-3 bg-slate-50/70">
                      <span className="text-slate-600">Extra Hour Rate</span>
                      <strong className="font-mono text-slate-900">₹{activeModalVehicle.extraHourRate}/hr</strong>
                    </div>
                    <div className="flex justify-between p-3">
                      <span className="text-slate-600">Outstation Distance Tariff</span>
                      <strong className="font-mono text-slate-900">₹{activeModalVehicle.ratePerKm}/km (Min. 300 km/day)</strong>
                    </div>
                    <div className="flex justify-between p-3 bg-slate-50/70">
                      <span className="text-slate-600">Driver Day Allowance (Outstation)</span>
                      <strong className="font-mono text-slate-900">₹{activeModalVehicle.driverAllowanceDay}/day</strong>
                    </div>
                    <div className="flex justify-between p-3">
                      <span className="text-slate-600">Monthly Contract Starting From</span>
                      <strong className="font-mono text-amber-700 font-bold">₹{activeModalVehicle.monthlyFixedEst.toLocaleString('en-IN')}/mo</strong>
                    </div>
                  </div>
                </div>

                {/* Ideal for list */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Recommended Applications
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {activeModalVehicle.idealFor.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal actions */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      const carName = activeModalVehicle.name;
                      setActiveModalVehicle(null);
                      onSelectCarForQuote(carName);
                    }}
                    className="flex-1 py-3 bg-amber-400 hover:bg-amber-300 font-bold text-slate-950 text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Request Quotation for {activeModalVehicle.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/917038340008?text=Hello%20Jyotirling%20Mobility%2C%20I%20would%20like%20to%20enquire%20about%20the%20${encodeURIComponent(activeModalVehicle.name)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-lg transition-colors text-center"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
