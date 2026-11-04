import { POPULAR_ROUTES } from '../data/fleetData';
import { RoutePackage } from '../types';
import { MapPin, Navigation, Clock, ArrowRight } from 'lucide-react';

interface PopularRoutesProps {
  onSelectRoute: (route: RoutePackage) => void;
}

export default function PopularRoutes({ onSelectRoute }: PopularRoutesProps) {
  return (
    <section id="routes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            Intercity Corridors & Pilgrimage Circuits
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Popular Outstation Routes & Tour Packages
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Fixed rates, experienced highway chauffeurs with Sahyadri ghat road expertise, and transparent door-to-door transit across Maharashtra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_ROUTES.map((route) => (
            <div
              key={route.id}
              className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Route Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{route.from}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-base font-bold text-slate-900">
                      <Navigation className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{route.to}</span>
                    </div>
                  </div>
                </div>

                {/* Distance & Duration Strip */}
                <div className="flex items-center gap-4 text-xs font-mono text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-4">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-slate-900">{route.distanceKm} KM</span>
                    <span>approx.</span>
                  </div>
                  <span className="text-slate-300">|</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{route.approxDuration}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {route.routeHighlights}
                </p>

                {/* Tags without pills (§1.A Zero-Pill Discipline: clean inline text) */}
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-slate-500 mb-4">
                  {route.tags.map((t: string, i: number) => (
                    <span key={i}>
                      {i > 0 && <span className="mr-2 text-slate-300">·</span>}
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 block">Starting from</span>
                  <strong className="text-lg font-bold text-slate-900 font-mono tabular-nums">
                    ₹{route.startingPrice.toLocaleString('en-IN')}
                  </strong>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectRoute(route)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>Book Route</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
