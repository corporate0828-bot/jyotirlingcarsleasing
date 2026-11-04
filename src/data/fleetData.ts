import { Vehicle, ServiceItem, RoutePackage } from '../types';

export const FLEET_VEHICLES: Vehicle[] = [
  {
    id: 'toyota-innova-crysta',
    name: 'Toyota Innova Crysta',
    brand: 'Toyota',
    category: 'corporate_muv',
    segmentTitle: 'Executive MUV / Corporate Fleet Standard',
    seats: 7,
    luggageBags: 4,
    transmission: 'Manual',
    fuelType: 'Diesel',
    hasAC: true,
    ratePerKm: 21,
    localPackageRate: 3600, // 8h / 80km
    extraHourRate: 250,
    extraKmRate: 20,
    driverAllowanceDay: 500,
    monthlyFixedEst: 85000,
    image: '/src/assets/images/fleet_innova_crysta_1793774879475.jpg',
    fallbackImage: '/src/assets/images/fleet_innova_crysta_1793774879475.jpg',
    description: 'The definitive benchmark in executive chauffeur travel. Superior ride comfort, captain seats, high legroom, and generous luggage capacity.',
    idealFor: [
      'Corporate leadership & client delegations',
      'Industrial plant inspection visits',
      'Long-distance outstation & pilgrimage routes',
      'Airport pick & drop with large luggage'
    ],
    features: [
      'Dual-zone Climate AC',
      'Captain Recliner Seats',
      'Ample Luggage Bay',
      'USB Rapid Chargers',
      'Highway Stability Control'
    ],
    isPopular: true
  },
  {
    id: 'maruti-ertiga',
    name: 'Maruti Suzuki Ertiga',
    brand: 'Maruti Suzuki',
    category: 'corporate_muv',
    segmentTitle: 'Smart 7-Seater / Team & Family MUV',
    seats: 7,
    luggageBags: 3,
    transmission: 'Manual',
    fuelType: 'CNG / Petrol',
    hasAC: true,
    ratePerKm: 16,
    localPackageRate: 2800, // 8h / 80km
    extraHourRate: 180,
    extraKmRate: 16,
    driverAllowanceDay: 400,
    monthlyFixedEst: 62000,
    image: '/src/assets/images/fleet_ertiga_mpv_1793774879796.jpg',
    fallbackImage: '/src/assets/images/fleet_ertiga_mpv_1793774879796.jpg',
    description: 'High-utility, fuel-efficient 7-seater designed for corporate staff shuttling, project teams, and family outstation tours across Maharashtra.',
    idealFor: [
      'Company staff daily commutes & shift transfers',
      'Family weekend getaways to Lonavala / Shirdi',
      'Mid-tier executive and client travel',
      'Event and wedding guest transport'
    ],
    features: [
      'Roof-mounted Rear AC vents',
      'Flexible 3-Row Foldable Seating',
      'Low Carbon CNG Clean Ride',
      'Quiet Suspension'
    ],
    isPopular: true
  },
  {
    id: 'maruti-swift-dzire',
    name: 'Maruti Swift Dzire',
    brand: 'Maruti Suzuki',
    category: 'sedan',
    segmentTitle: 'Executive Compact Sedan',
    seats: 4,
    luggageBags: 2,
    transmission: 'Manual',
    fuelType: 'CNG / Petrol',
    hasAC: true,
    ratePerKm: 14,
    localPackageRate: 2200, // 8h / 80km
    extraHourRate: 150,
    extraKmRate: 14,
    driverAllowanceDay: 350,
    monthlyFixedEst: 48000,
    image: '/src/assets/images/fleet_swift_dzire_1793774877941.jpg',
    fallbackImage: '/src/assets/images/fleet_swift_dzire_1793774877941.jpg',
    description: 'The preferred choice for corporate executives, Mumbai business meetings, airport drops, and cost-effective daily chauffeur service.',
    idealFor: [
      'Daily corporate office commute & local client visits',
      'Airport transfer between Navi Mumbai and Mumbai T1/T2',
      'Inter-city business runs (Mumbai - Pune Express)',
      'Doctor, consultant, and banking executive transport'
    ],
    features: [
      'Chilled Air Conditioning',
      '378 Litre Boot Luggage Space',
      'Rear AC Vents & Armrest',
      'Smooth Highway Cruiser'
    ],
    isPopular: true
  },
  {
    id: 'hyundai-aura',
    name: 'Hyundai Aura',
    brand: 'Hyundai',
    category: 'sedan',
    segmentTitle: 'Modern Business Sedan',
    seats: 4,
    luggageBags: 2,
    transmission: 'Manual',
    fuelType: 'CNG / Petrol',
    hasAC: true,
    ratePerKm: 14,
    localPackageRate: 2200,
    extraHourRate: 150,
    extraKmRate: 14,
    driverAllowanceDay: 350,
    monthlyFixedEst: 49000,
    image: '/src/assets/images/fleet_executive_sedan_1793774874280.jpg',
    fallbackImage: '/src/assets/images/fleet_executive_sedan_1793774874280.jpg',
    description: 'Sleek styling and refined cabin sound insulation. Well-suited for corporate professionals and comfortable urban business transit.',
    idealFor: [
      'Corporate duty & day-long executive city schedules',
      'Hospital visits and family town travel',
      'Business meetings across BKC, Powai, and Navi Mumbai',
      'Full-day sightseeing and shopping packages'
    ],
    features: [
      'Plush Cushioned Seating',
      'Rear Seat Charging Outlet',
      'Quiet NVH Cabin Insulation',
      'Automatic Climate Control'
    ]
  },
  {
    id: 'tata-sierra',
    name: 'Tata Sierra',
    brand: 'Tata Motors',
    category: 'suv',
    segmentTitle: 'Premium Heritage SUV',
    seats: 5,
    luggageBags: 4,
    transmission: 'Manual',
    fuelType: 'Diesel',
    hasAC: true,
    ratePerKm: 22,
    localPackageRate: 3800,
    extraHourRate: 260,
    extraKmRate: 22,
    driverAllowanceDay: 500,
    monthlyFixedEst: 92000,
    image: '/src/assets/images/hero_car_fleet_1793774878776.jpg',
    fallbackImage: '/src/assets/images/hero_car_fleet_1793774878776.jpg',
    description: 'Commanding road presence, elevated glasshouse visibility, and rugged build quality for senior directors, VIP tours, and rugged industrial routes.',
    idealFor: [
      'VIP guest reception & government protocol travel',
      'Industrial plant construction site inspections',
      'Rugged terrain & Western Ghats travel',
      'Brand photoshoots & prominent event entries'
    ],
    features: [
      'Panoramic Canopy Glass Styling',
      'High Ground Clearance (200mm+)',
      'Heavy Duty Suspension',
      'All-terrain Highway Stability'
    ]
  },
  {
    id: 'maruti-fronx',
    name: 'Maruti Suzuki Fronx',
    brand: 'Maruti Suzuki',
    category: 'suv',
    segmentTitle: 'Urban Compact Crossover / C-SUV',
    seats: 4,
    luggageBags: 2,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    hasAC: true,
    ratePerKm: 15,
    localPackageRate: 2500,
    extraHourRate: 160,
    extraKmRate: 15,
    driverAllowanceDay: 400,
    monthlyFixedEst: 54000,
    image: '/src/assets/images/hero_car_fleet_1793774878776.jpg',
    fallbackImage: '/src/assets/images/hero_car_fleet_1793774878776.jpg',
    description: 'Sporty coupe crossover with elevated stance, crisp ride quality, and easy city maneuvering across busy industrial corridors.',
    idealFor: [
      'Young corporate executives and managers',
      'Inter-hub Navi Mumbai & Mumbai travel',
      'Quick single-day industrial park visits',
      'Personal weekend airport and coastal drives'
    ],
    features: [
      'High Seating Position',
      'Smooth Automatic Transmission Option',
      'Modern LED DRLs & Cabin Styling',
      'Split Rear Folding Seats'
    ]
  },
  {
    id: 'maruti-wagonr',
    name: 'Maruti Suzuki WagonR',
    brand: 'Maruti Suzuki',
    category: 'hatchback',
    segmentTitle: 'Economical Tall-Boy City Hatchback',
    seats: 4,
    luggageBags: 2,
    transmission: 'Manual',
    fuelType: 'CNG / Petrol',
    hasAC: true,
    ratePerKm: 12,
    localPackageRate: 1900,
    extraHourRate: 130,
    extraKmRate: 12,
    driverAllowanceDay: 300,
    monthlyFixedEst: 38000,
    image: '/src/assets/images/fleet_swift_dzire_1793774877941.jpg',
    fallbackImage: '/src/assets/images/fleet_swift_dzire_1793774877941.jpg',
    description: 'Maximum head space, wide door ingress, and unmatched cost economy for daily budget transfers, local office errands, and hospital transit.',
    idealFor: [
      'Budget-conscious daily corporate errands',
      'Elderly passenger transit (easy ingress/egress)',
      'Local Navi Mumbai and Thane day packages',
      'Routine administrative field tasks'
    ],
    features: [
      'High Roof Ingress for Easy Entry',
      'Ultra Economical CNG Mileage',
      'Chilled Cabin Air Conditioning',
      'Agile City Maneuverability'
    ]
  }
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'corporate-hiring',
    number: '01',
    title: 'Corporate Car Hiring',
    tagline: 'Dedicated executive fleet for companies, HR, and directors',
    description: 'Tailored corporate fleet solutions with punctuality guarantees, professional uniformed chauffeurs, and centralized monthly GST invoicing. Serving corporate offices across Navi Mumbai, BKC, Lower Parel, and Powai.',
    targetAudience: 'Corporates, MNCs, IT firms, Consulting agencies & HR administrators',
    keyBenefits: [
      'Standardized monthly billing with transparent logsheets',
      'Immediate standby replacement car within 60 minutes',
      'Background-verified chauffeurs with corporate etiquette',
      'Comprehensive fleet liability & zero compliance headache'
    ],
    ctaLabel: 'Request Corporate Proposal'
  },
  {
    id: 'monthly-fixed',
    number: '02',
    title: 'Monthly / Fixed-Basis Contracts',
    tagline: 'Long-term dedicated vehicle & driver assigned to your company',
    description: 'Eliminate vehicle depreciation, driver hiring worries, and maintenance downtime. We assign a dedicated car and chauffeur exclusively to your management on fixed monthly contracts of 1 to 36 months.',
    targetAudience: 'Company Directors, Senior Executives, Expatriates & Project Teams',
    keyBenefits: [
      'Vehicle exclusively dedicated to your company',
      'Fixed monthly budget with capped maintenance and fuel',
      'Dedicated primary chauffeur + trained backup driver',
      'Customized mileage packages (2,000 to 3,500 km/mo)'
    ],
    ctaLabel: 'Discuss Monthly Contract'
  },
  {
    id: 'industrial-hiring',
    number: '03',
    title: 'Industrial & Factory Car Hiring',
    tagline: 'Heavy-duty reliability for manufacturing units & MIDC zones',
    description: 'Specialized mobility solutions for factories, industrial estates, and manufacturing hubs across TTC Navi Mumbai, Taloja MIDC, Rabale, Mahape, Ambernath, and Chakan-Talegaon.',
    targetAudience: 'Plant Heads, Manufacturing Units, Logistics Managers & Engineers',
    keyBenefits: [
      'Vehicles compliant with factory safety standards',
      'Shift-timing coordination (morning, general, night shifts)',
      'High ground-clearance vehicles for industrial terrain',
      'Emergency standby support for critical plant operations'
    ],
    ctaLabel: 'Get Industrial Rate Sheet'
  },
  {
    id: 'government-institutional',
    number: '04',
    title: 'Government & Institutional Mobility',
    tagline: 'Compliant transport solutions for official duties & public departments',
    description: 'Full-service vehicle support adhering to institutional protocol, government travel guidelines, and regulatory documentation for official state, municipal, and institutional requirements.',
    targetAudience: 'State boards, municipal corporations, public institutions & visiting dignitaries',
    keyBenefits: [
      'Complete documentation & verified commercial RTO permits',
      'Experienced chauffeurs familiar with secretariat & protocol routes',
      'Billing tailored to government purchase orders & tenders',
      'Immaculately maintained white fleet options'
    ],
    ctaLabel: 'Contact for Official Duty'
  },
  {
    id: 'local-outstation',
    number: '05',
    title: 'Local & Outstation Rental',
    tagline: 'Flexible 8hr/80km local packs and intercity point-to-point journeys',
    description: 'Whether you require an all-day car for back-to-back city appointments or an outstation journey to Pune, Nashik, Shirdi, Surat, or Goa, our sanitized vehicles and veteran highway drivers ensure seamless travel.',
    targetAudience: 'Business travellers, leisure tourists & intercity commuters',
    keyBenefits: [
      'Transparent distance tracking via digital odometers',
      'Experienced highway chauffeurs with night-driving mastery',
      'Zero cancellation hassle upon advance confirmation',
      'Custom stops, multi-city itineraries, and return routes'
    ],
    ctaLabel: 'Book Outstation Trip'
  },
  {
    id: 'personal-family',
    number: '06',
    title: 'Personal & Family Rentals',
    tagline: 'Spacious, hygienic, child-and-elder friendly travel',
    description: 'Enjoy comfortable family road trips, temple pilgrimages, holiday retreats, and weekend leisure without the stress of navigating highway traffic or finding parking.',
    targetAudience: 'Families, senior citizens, pilgrimage groups & vacationers',
    keyBenefits: [
      'Spacious 7-seater MUV options with high luggage capacity',
      'Courteous drivers accustomed to family travel and elderly care',
      'Clean interiors with hygienic seat upholstery and fresh AC filters',
      'Flexible halt requests for meals, photos, and rest stops'
    ],
    ctaLabel: 'Plan Family Journey'
  },
  {
    id: 'wedding-events',
    number: '07',
    title: 'Wedding & Event Fleet Logistics',
    tagline: 'End-to-end guest transit coordination for celebrations',
    description: 'Coordinated multi-vehicle fleets for marriage celebrations, corporate conferences, and VIP delegate movements. We handle guest pickups from airport/station to venues seamlessly.',
    targetAudience: 'Wedding planners, event managers, corporate hospitality teams',
    keyBenefits: [
      'Fleet coordination manager on standby for event days',
      'Decorated bridal cars & convoy synchronisation',
      'Airport & railway station guest hospitality boards',
      'Bulk car booking discounts for multi-day ceremonies'
    ],
    ctaLabel: 'Enquire for Events'
  },
  {
    id: 'dedicated-driver',
    number: '08',
    title: 'Dedicated Chauffeur Service',
    tagline: 'Police-verified, courteous chauffeurs on contract',
    description: 'Need a professional driver for your company-owned car or personal luxury vehicle? We deploy certified, experienced chauffeurs for daily, weekly, or monthly duties.',
    targetAudience: 'Luxury car owners, corporate fleets with owned assets',
    keyBenefits: [
      'Strict background checks, criminal record verification & RTO checks',
      'Professional driving etiquette, defensive driving skills',
      'Punctual reporting and uniform adherence',
      'Hassle-free replacement in case of driver leave'
    ],
    ctaLabel: 'Hire Chauffeur'
  }
];

export const POPULAR_ROUTES: RoutePackage[] = [
  {
    id: 'mumbai-pune',
    from: 'Navi Mumbai / Mumbai',
    to: 'Pune (Hinjewadi / Magarpatta / Kothrud)',
    distanceKm: 150,
    approxDuration: '2.5 to 3.5 Hours',
    routeHighlights: 'Smooth transit via Mumbai-Pune Expressway with optional food court halts.',
    idealVehicle: 'Maruti Dzire / Toyota Innova Crysta',
    startingPrice: 2800,
    tags: ['Business Corridor', 'Daily Corporate', 'Airport Express']
  },
  {
    id: 'mumbai-shirdi-trimbakeshwar',
    from: 'Navi Mumbai / Mumbai',
    to: 'Shirdi Sai Baba & Trimbakeshwar Jyotirlinga',
    distanceKm: 260,
    approxDuration: '4.5 to 5.5 Hours',
    routeHighlights: 'Samruddhi Mahamarg / Igatpuri scenic ghats. Ideal for holy 12 Jyotirlinga darshan.',
    idealVehicle: 'Toyota Innova Crysta / Maruti Ertiga',
    startingPrice: 5600,
    tags: ['12 Jyotirlinga', 'Pilgrimage Special', 'Family Tour']
  },
  {
    id: 'mumbai-bhimashankar',
    from: 'Navi Mumbai / Mumbai',
    to: 'Bhimashankar Jyotirlinga',
    distanceKm: 210,
    approxDuration: '4.5 Hours',
    routeHighlights: 'Scenic Sahyadri mountain trail leading to the ancient Jyotirlinga shrine.',
    idealVehicle: 'Tata Sierra / Toyota Innova Crysta',
    startingPrice: 4800,
    tags: ['Jyotirlinga Darshan', 'Ghat Roads', 'Holy Tour']
  },
  {
    id: 'mumbai-lonavala-khandala',
    from: 'Navi Mumbai / Mumbai',
    to: 'Lonavala / Khandala / Pawna Lake',
    distanceKm: 85,
    approxDuration: '1.5 to 2 Hours',
    routeHighlights: 'The favorite weekend leisure getaway, resort visits, and hill station escapes.',
    idealVehicle: 'Maruti Fronx / Maruti Ertiga',
    startingPrice: 2400,
    tags: ['Weekend Escape', 'Hill Station', 'Resort Stay']
  },
  {
    id: 'mumbai-mahabaleshwar',
    from: 'Navi Mumbai / Mumbai',
    to: 'Mahabaleshwar & Panchgani',
    distanceKm: 240,
    approxDuration: '5 to 6 Hours',
    routeHighlights: 'Scenic Pasarni Ghat, strawberry farms, and mountain view resort drop.',
    idealVehicle: 'Toyota Innova Crysta / Tata Sierra',
    startingPrice: 5800,
    tags: ['Hill Station', 'Family Holiday', 'Ghat Scenic']
  },
  {
    id: 'csmia-airport-transfer',
    from: 'Navi Mumbai (Koparkhairane / Vashi / CBD)',
    to: 'CSMIA Airport Mumbai (T1 / T2) or NMIA',
    distanceKm: 32,
    approxDuration: '45 to 70 Mins',
    routeHighlights: 'Reliable on-time drop & pickup via Eastern Freeway / Santacruz-Chembur Link Road.',
    idealVehicle: 'Maruti Swift Dzire / Toyota Innova',
    startingPrice: 1400,
    tags: ['Flight Guarantee', 'Luggage Bay', '24x7 Pickup']
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    quote: 'Jyotirling Mobility has been handling our plant executive transport in Taloja MIDC for 3 consecutive years. Clean cars, reliable backup vehicles, and seamless monthly GST billing.',
    name: 'Rajesh K. Sharma',
    role: 'Senior GM - Plant Operations & Admin',
    company: 'Specialty Chemicals Corp, Taloja',
    vehicleUsed: 'Toyota Innova Crysta & Ertiga (Monthly Fleet)'
  },
  {
    quote: 'Booking outstation cars for visiting European auditors used to be a headache. Jyotirling provided immaculately groomed chauffeurs who understood English, arrived 15 mins prior, and knew every route.',
    name: 'Priyanka Sen',
    role: 'Corporate HR & Travel Lead',
    company: 'Fintech Solutions Ltd, Mahape',
    vehicleUsed: 'Toyota Innova Crysta Chauffeur Service'
  },
  {
    quote: 'Booked an Innova for our 4-day pilgrimage covering Trimbakeshwar and Bhimashankar Jyotirlinga. Driver Santosh was extremely polite, safe on the ghats, and guided my elderly parents patiently.',
    name: 'Mahesh Patil',
    role: 'Navi Mumbai Resident & Family Traveler',
    company: 'Sector 14, Vashi',
    vehicleUsed: 'Toyota Innova Crysta Outstation'
  }
];

export const FREQUENT_QUESTIONS = [
  {
    q: 'How does the WhatsApp quotation flow work?',
    a: 'Simply fill the vehicle requirements and click "Send Enquiry on WhatsApp". It pre-formats your pickup location, car choice, and date, opening directly in WhatsApp with our direct dispatch number (+91 7038340008) for immediate quote confirmation.'
  },
  {
    q: 'Do you provide GST tax invoices for corporate clients?',
    a: 'Yes, absolutely. We provide formal GST invoices with detailed duty slips, route distance logs, and agreed corporate contract terms for easy expense filing and input tax credit.'
  },
  {
    q: 'What is included in the 8 Hours / 80 Kilometers local package?',
    a: 'The local package includes the vehicle and chauffeur service for up to 8 hours of duty and 80 km of city running from the reporting time. Additional hours and kilometers are calculated transparently at standard extra rates.'
  },
  {
    q: 'How are toll taxes, parking fees, and interstate border permits handled?',
    a: 'Tolls (e.g. Atal Setu MTHL, Mumbai-Pune Expressway, Bandra-Worli Sea Link), airport parking, and state border permits are payable at actuals as incurred during the trip.'
  },
  {
    q: 'Can companies hire cars on a monthly fixed-basis?',
    a: 'Yes! We offer monthly fixed packages ranging from 2,000 km to 3,500 km per month with dedicated drivers. We also guarantee a standby replacement vehicle within 60 minutes in case of scheduled service or unexpected issues.'
  },
  {
    q: 'Where is your primary office located?',
    a: 'Our main office is located at Sector 18, Koparkhairane, Navi Mumbai - 400709. We dispatch vehicles across all nodes of Navi Mumbai, Mumbai, Thane, Pune, and the industrial MIDC zones.'
  }
];
