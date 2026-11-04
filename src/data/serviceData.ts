export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  recommendedVehicles: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'corporate-hiring',
    title: 'Corporate Car Hiring',
    category: 'B2B & Enterprise',
    tagline: 'Executive mobility with punctual, vetted chauffeurs',
    description: 'Turnkey fleet management for corporations, IT hubs in Airoli/Mahape, and executive transport across Mumbai & Pune with GST tax invoices and custom billing.',
    icon: 'Building2',
    features: ['Monthly GST Billing & MIS Reports', 'Police-Verified Chauffeurs', 'Standby Replacement Car within 45m', 'Airport Executive Meet & Greet'],
    recommendedVehicles: 'Toyota Innova Crysta, Maruti Swift Dzire',
  },
  {
    id: 'industrial-mobility',
    title: 'Industrial & Factory Transport',
    category: 'Industrial Logistics',
    tagline: 'Reliable shifts for TTC MIDC, Taloja & Rabale plants',
    description: 'Dependable daily vehicle schedules for engineering plants, pharmaceutical units, and industrial facilities with 24/7 emergency dispatch support.',
    icon: 'Factory',
    features: ['Shift-based Timely Pickup & Drop', 'Factory Site Visits & Auditor Drops', 'Clean Maintenance Records', 'Fixed Kilometre Packages'],
    recommendedVehicles: 'Maruti Suzuki Ertiga, Maruti WagonR',
  },
  {
    id: 'monthly-fixed',
    title: 'Monthly & Fixed-Basis Hiring',
    category: 'Long-Term Leases',
    tagline: 'Dedicated vehicle & driver at your disposal every day',
    description: 'Eliminate vehicle capital expense. Get dedicated brand-new or pristine cars stationed at your company office with all maintenance and fuel management handled.',
    icon: 'CalendarDays',
    features: ['Zero Fleet Maintenance Hassle', 'Dedicated Uniformed Chauffeur', '2,000 / 2,500 / 3,000 KM Slabs', 'Flexible Multi-Month Contracts'],
    recommendedVehicles: 'Innova Crysta, Maruti Dzire, Tata Sierra',
  },
  {
    id: 'government-institutional',
    title: 'Government & Institutional Fleet',
    category: 'Official Protocol',
    tagline: 'Protocol-compliant transport for official delegations',
    description: 'Compliant fleet arrangements for visiting state dignitaries, government audits, institutional committees, and official public sector projects.',
    icon: 'Landmark',
    features: ['Government Tender & PO Support', 'Professional Attire & Protocol Chauffeurs', 'Clean White Vehicles with VIP Setup', 'Strict Confidentiality'],
    recommendedVehicles: 'Innova Crysta, Tata Sierra / Harrier',
  },
  {
    id: 'outstation-pilgrimage',
    title: 'Local & Outstation Journeys',
    category: 'Intercity Travel',
    tagline: 'Hassle-free highway travel across Maharashtra & beyond',
    description: 'Smooth round-trip and one-way journeys to Pune, Nashik, Shirdi, Mahabaleshwar, Goa, and 12 Jyotirlinga shrines with expert ghat and highway drivers.',
    icon: 'Compass',
    features: ['Experienced Highway Drivers', 'Transparent Per-KM & Night Charges', 'Luggage Assistance & Route Guidance', 'Zero Hidden Fuel Surcharges'],
    recommendedVehicles: 'Toyota Innova Crysta, Maruti Ertiga',
  },
  {
    id: 'wedding-events',
    title: 'Wedding & Event Fleets',
    category: 'Celebrations',
    tagline: 'Coordinated guest transit & groom/bride luxury vehicles',
    description: 'Comprehensive transport coordination for marriage ceremonies, banquet halls, and multi-day family celebrations with synchronized arrivals.',
    icon: 'Sparkles',
    features: ['Multi-car Convoy Coordination', 'Spotless Decorated Options Available', 'Polite Chauffeurs on Standby', 'Guest Pickup from Railway & Airport'],
    recommendedVehicles: 'Innova Crysta, Tata Sierra, Swift Dzire',
  },
];

export interface PopularRoute {
  id: string;
  from: string;
  to: string;
  distanceKm: number;
  duration: string;
  startingPrice: number;
  highlight: string;
  popularCar: string;
}

export const POPULAR_ROUTES: PopularRoute[] = [
  {
    id: 'route-pune',
    from: 'Navi Mumbai / Mumbai',
    to: 'Pune (Hinjewadi / Magarpatta / Kothrud)',
    distanceKm: 150,
    duration: '2.5 - 3 Hours (Via Expressway)',
    startingPrice: 2800,
    highlight: 'Expressway toll included in fixed corporate packages',
    popularCar: 'Maruti Swift Dzire / Ertiga',
  },
  {
    id: 'route-shirdi',
    from: 'Navi Mumbai / Mumbai',
    to: 'Shirdi Sai Baba & Shani Shingnapur',
    distanceKm: 245,
    duration: '4.5 - 5 Hours (Via Samruddhi Mahamarg)',
    startingPrice: 4800,
    highlight: 'Same-day or next-day temple darshan with waiting options',
    popularCar: 'Toyota Innova Crysta / Ertiga',
  },
  {
    id: 'route-jyotirlinga',
    from: 'Mumbai / Navi Mumbai',
    to: 'Maharashtra Jyotirlinga (Trimbakeshwar / Bhimashankar)',
    distanceKm: 320,
    duration: '1-3 Days Custom Itinerary',
    startingPrice: 6500,
    highlight: 'Special holy pilgrimage package with experienced ghat drivers',
    popularCar: 'Innova Crysta (7-Seater)',
  },
  {
    id: 'route-mahabaleshwar',
    from: 'Navi Mumbai / Mumbai',
    to: 'Lonavala / Khandala / Mahabaleshwar / Panchgani',
    distanceKm: 230,
    duration: '4.5 Hours',
    startingPrice: 4200,
    highlight: 'Hill station leisure trip with local sightseeing support',
    popularCar: 'Toyota Innova Crysta',
  },
  {
    id: 'route-airport',
    from: 'CSMIA Airport (T1 / T2)',
    to: 'Navi Mumbai (Vashi / Belapur / Kharghar / Panvel)',
    distanceKm: 35,
    duration: '45 - 60 Minutes (Via Atal Setu / Eastern Freeway)',
    startingPrice: 1500,
    highlight: 'On-time terminal pickup with flight tracking & luggage help',
    popularCar: 'Maruti Swift Dzire / Aura',
  },
];

export const FAQS = [
  {
    question: 'How do you calculate outstation car rental rates?',
    answer: 'Outstation trips are calculated based on round-trip kilometers (minimum 250 or 300 km/day depending on the route), multiplied by the per-kilometer vehicle rate. Toll taxes, state border permits, and parking charges are payable on actuals or can be bundled into a fixed corporate quote.',
  },
  {
    question: 'Are tolls, parking, and driver allowances included in the quote?',
    answer: 'For standard local packages (like 8 hours / 80 km), fuel and chauffeur services are 100% included. Tolls and parking fees are charged on actual slip presentation. For outstation trips, a transparent driver night allowance (typically ₹300-₹400/night) applies if the chauffeur stays overnight.',
  },
  {
    question: 'Do you offer monthly fixed car rental for companies and factories?',
    answer: 'Yes! We specialize in monthly corporate & industrial agreements for companies in TTC MIDC, Rabale, Mahape Millennium Business Park, Taloja, and across Navi Mumbai & Mumbai. Monthly packages include a dedicated car, vetted uniformed driver, maintenance, insurance, and fuel up to your contracted km slab.',
  },
  {
    question: 'What happens in case of an unexpected vehicle breakdown or delay?',
    answer: 'We maintain a standby reserve fleet in Navi Mumbai. In the rare event of mechanical issues, we dispatch an immediate replacement car within 30 to 45 minutes to keep your business or personal itinerary on schedule.',
  },
  {
    question: 'How quickly can I confirm a car booking?',
    answer: 'Immediate confirmation is available! Once you submit your inquiry or ping us on WhatsApp (+91 7038340008), our dispatcher shares the exact car photos, driver name, vehicle registration number, and quotation within 10 to 15 minutes.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Rajesh Kulkarni',
    role: 'Logistics & Admin Head',
    organization: 'Industrial Components Ltd., TTC Rabale',
    quote: 'Jyotirling Mobility has managed our executive plant commute and auditor site visits for over 3 years. Drivers are consistently 15 minutes early, cars are immaculate, and monthly GST invoicing is straightforward.',
  },
  {
    name: 'Pooja Shelar',
    role: 'Event & Wedding Coordinator',
    organization: 'Navi Mumbai Weddings',
    quote: 'Arranged 6 Innova Crystas and 4 Dzires for a multi-day family wedding across Vashi and Pune. Not a single delayed pickup, and every driver was polite and cooperative throughout the celebrations.',
  },
  {
    name: 'Dr. Anand Deshmukh',
    role: 'Individual Traveler',
    organization: 'Koparkhairane Resident',
    quote: 'Booked a family pilgrimage to Shirdi and Trimbakeshwar. The Innova Crysta was spotless, and the driver handled the Samruddhi expressway and night driving with utmost care and safety.',
  },
];

export const COMPANY_CONTACT = {
  name: 'Jyotirling Mobility',
  tagline: 'Corporate & Personal Car Rental Solutions',
  phone: '7038340008',
  phoneDisplay: '+91 7038340008',
  email: 'amolgole970@gmail.com',
  address: 'Koparkhairane, Sector 18, Navi Mumbai, Maharashtra - 400709',
  operatingHours: '24 Hours / 7 Days On-Call Dispatch',
  whatsappUrl: (text: string) => `https://wa.me/917038340008?text=${encodeURIComponent(text)}`,
};
