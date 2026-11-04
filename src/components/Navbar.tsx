import { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  onOpenInquiryDrawer: () => void;
  inquiryCount: number;
}

export default function Navbar({ onOpenQuoteModal, onOpenInquiryDrawer, inquiryCount }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top micro contact strip */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Koparkhairane, Navi Mumbai</span>
            </span>
            <span className="hidden sm:inline-block text-slate-600">·</span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <span>Corporate, Industrial & Outstation Fleet</span>
            </span>
          </div>

          <div className="flex items-center gap-5 ml-auto">
            <a
              href="mailto:amolgole970@gmail.com"
              className="hidden md:inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>amolgole970@gmail.com</span>
            </a>
            <a
              href="tel:7038340008"
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 7038340008</span>
            </a>
            {inquiryCount > 0 && (
              <button
                onClick={onOpenInquiryDrawer}
                className="text-xs bg-slate-800 hover:bg-slate-700 text-amber-300 px-2.5 py-0.5 rounded transition-colors"
              >
                My Inquiries ({inquiryCount})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation - Strict 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, single clean text element wordmark */}
        <a href="#hero" className="flex items-center gap-2 shrink-0 group">
          <div className="w-9 h-9 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-black text-lg tracking-wider border border-slate-800">
            JM
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
            Jyotirling Mobility
          </span>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <a href="#sectors" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            Who We Serve
          </a>
          <a href="#fleet" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            Fleet Catalog
          </a>
          <a href="#calculator" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            Fare Estimator
          </a>
          <a href="#corporate" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            Corporate & MIDC
          </a>
          <a href="#routes" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            Routes
          </a>
          <a href="#contact" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuoteModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            <span>Request a Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-xl animate-in fade-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3.5 text-base font-semibold text-slate-800">
            <a
              href="#sectors"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 transition-colors"
            >
              Who We Serve (Sectors)
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 transition-colors"
            >
              Services Overview
            </a>
            <a
              href="#fleet"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 transition-colors"
            >
              Fleet & Vehicles
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 transition-colors"
            >
              Instant Fare Estimator
            </a>
            <a
              href="#corporate"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 transition-colors"
            >
              Corporate & Industrial Hiring
            </a>
            <a
              href="#routes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 transition-colors"
            >
              Popular Outstation Routes
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 transition-colors"
            >
              Contact Office
            </a>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 bg-amber-400 hover:bg-amber-300 font-bold text-slate-950 text-center rounded-lg shadow-sm"
              >
                Request a Quote
              </button>
              <a
                href="https://wa.me/917038340008?text=Hello%20Jyotirling%20Mobility%2C%20I%20would%20like%20to%20enquire%20about%20car%20rental."
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 text-center font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 text-sm"
              >
                Chat on WhatsApp (+91 7038340008)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
