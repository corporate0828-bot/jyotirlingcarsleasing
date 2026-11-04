import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm tracking-wider">
                JM
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Jyotirling Mobility
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Professional chauffeur-driven car rental services for corporate enterprises, industrial plants, government duties, weddings, and family tours across Navi Mumbai, Mumbai, and Maharashtra.
            </p>
            <div className="text-slate-500 text-[11px]">
              Office: Sector 18, Koparkhairane, Navi Mumbai, Maharashtra - 400709
            </div>
          </div>

          {/* Nav Quick Links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Fleet & Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Corporate Car Hiring</a></li>
              <li><a href="#corporate" className="hover:text-amber-400 transition-colors">Industrial Plant Fleet</a></li>
              <li><a href="#corporate" className="hover:text-amber-400 transition-colors">Monthly Fixed Basis</a></li>
              <li><a href="#fleet" className="hover:text-amber-400 transition-colors">Toyota Innova Crysta</a></li>
              <li><a href="#fleet" className="hover:text-amber-400 transition-colors">Executive Sedans</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Wedding & Events</a></li>
            </ul>
          </div>

          {/* Destinations & Corridors */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Popular Routes
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#routes" className="hover:text-amber-400 transition-colors">Mumbai ↔ Pune Express</a></li>
              <li><a href="#routes" className="hover:text-amber-400 transition-colors">Trimbakeshwar Jyotirlinga</a></li>
              <li><a href="#routes" className="hover:text-amber-400 transition-colors">Bhimashankar Jyotirlinga</a></li>
              <li><a href="#routes" className="hover:text-amber-400 transition-colors">Shirdi Sai Baba Darshan</a></li>
              <li><a href="#routes" className="hover:text-amber-400 transition-colors">Lonavala & Khandala</a></li>
              <li><a href="#routes" className="hover:text-amber-400 transition-colors">CSMIA Airport Transfer</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Direct Dispatch
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-500 block text-[10px]">Call & WhatsApp:</span>
                <a href="tel:7038340008" className="text-white hover:text-amber-400 font-mono font-bold">
                  +91 7038340008
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Email:</span>
                <a href="mailto:amolgole970@gmail.com" className="text-slate-300 hover:text-amber-400 break-all">
                  amolgole970@gmail.com
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Invoicing:</span>
                <span className="text-slate-300">GST Input Tax Credit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Jyotirling Mobility. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Navi Mumbai, Maharashtra, India</span>
            <span>·</span>
            <span>24/7 Fleet Dispatch</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
