import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function FloatingActions() {
  return (
    <aside
      aria-label="Direct Contact Actions"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-2.5 sm:gap-3"
    >
      {/* 1. Call Button - Round shape with Phone Logo */}
      <div className="relative group">
        <a
          href="tel:7038340008"
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-700/80 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          title="Call: +91 7038340008"
          aria-label="Call Jyotirling Mobility at +91 7038340008"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        {/* Hover Tooltip */}
        <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 text-white text-[11px] font-semibold px-2 py-1 opacity-0 shadow-lg group-hover:opacity-100 transition-opacity duration-200 border border-slate-700">
          Call Now
        </span>
      </div>

      {/* 2. WhatsApp Button - Round shape with WhatsApp Logo */}
      <div className="relative group">
        <a
          href="https://wa.me/917038340008?text=Hello%20Jyotirling%20Mobility%2C%20I%20would%20like%20to%20enquire%20about%20car%20rental%20and%20leasing%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
          title="WhatsApp: +91 7038340008"
          aria-label="Chat with Jyotirling Mobility on WhatsApp"
        >
          {/* Authentic WhatsApp SVG Icon */}
          <svg
            className="w-6 h-6 sm:w-6.5 sm:h-6.5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 2C6.495 2 2 6.493 2 12.029c0 1.97.57 3.882 1.649 5.518L2 22l4.614-1.615A9.97 9.97 0 0 0 12.031 22C17.568 22 22 17.507 22 12.029 22 6.493 17.568 2 12.031 2zm5.83 14.18c-.244.686-1.42 1.32-1.956 1.378-.49.052-1.12.074-3.626-.957-3.208-1.322-5.263-4.57-5.424-4.786-.157-.215-1.296-1.724-1.296-3.288 0-1.564.819-2.333 1.112-2.65.292-.317.638-.396.85-.396.213 0 .426.002.612.012.198.01.464-.075.727.558.27.65.918 2.247.998 2.411.08.164.133.356.026.57-.106.214-.16.347-.318.533-.16.186-.336.416-.48.558-.16.16-.327.333-.14.654.186.32 1.01 1.664 2.164 2.692 1.488 1.324 2.742 1.734 3.13 1.928.388.194.615.163.844-.1.229-.262.984-1.144 1.25-1.536.265-.392.53-.327.89-.194.36.133 2.28 1.077 2.673 1.273.393.196.654.293.75.457.096.164.096.953-.148 1.639z" />
          </svg>
        </a>
        {/* Hover Tooltip */}
        <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 text-white text-[11px] font-semibold px-2 py-1 opacity-0 shadow-lg group-hover:opacity-100 transition-opacity duration-200 border border-slate-700">
          WhatsApp
        </span>
      </div>

      {/* 3. Mail Button - Round shape with Mail Logo */}
      <div className="relative group">
        <a
          href="mailto:amolgole970@gmail.com?subject=Car%20Rental%20%26%20Leasing%20Inquiry%20-%20Jyotirling%20Mobility&body=Hello%20Jyotirling%20Mobility%20Team%2C%0A%0AI%20would%20like%20to%20enquire%20about%20car%20rental%20%2F%20leasing%20services.%0A%0AMy%20Requirements%3A%0A-%20Vehicle%20Model%3A%0A-%20Service%20Type%20(Local%20%2F%20Outstation%20%2F%20Monthly%20Lease%20%2F%20Self-Drive)%3A%0A-%20Pickup%20Date%20%26%20Duration%3A%0A-%20Pickup%20Location%3A%0A%0AThank%20you!"
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
          title="Email: amolgole970@gmail.com"
          aria-label="Email Jyotirling Mobility at amolgole970@gmail.com"
        >
          <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        {/* Hover Tooltip */}
        <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 text-white text-[11px] font-semibold px-2 py-1 opacity-0 shadow-lg group-hover:opacity-100 transition-opacity duration-200 border border-slate-700">
          Email Us
        </span>
      </div>
    </aside>
  );
}
