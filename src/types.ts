export type VehicleCategory = 'all' | 'corporate_muv' | 'sedan' | 'suv' | 'hatchback';

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: 'corporate_muv' | 'sedan' | 'suv' | 'hatchback';
  segmentTitle: string;
  seats: number;
  luggageBags: number;
  transmission: 'Manual' | 'Automatic';
  fuelType: 'Diesel' | 'Petrol' | 'CNG / Petrol' | 'Electric';
  hasAC: boolean;
  ratePerKm: number;
  localPackageRate: number; // 8 hrs / 80 kms
  extraHourRate: number;
  extraKmRate: number;
  driverAllowanceDay: number;
  monthlyFixedEst: number;
  image: string;
  fallbackImage: string;
  description: string;
  idealFor: string[];
  features: string[];
  isPopular?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  targetAudience: string;
  keyBenefits: string[];
  ctaLabel: string;
}

export interface RoutePackage {
  id: string;
  from: string;
  to: string;
  distanceKm: number;
  approxDuration: string;
  routeHighlights: string;
  idealVehicle: string;
  startingPrice: number;
  tags: string[];
}

export interface CalculationInput {
  rentalType: 'local' | 'outstation' | 'monthly' | 'airport';
  vehicleId: string;
  localPackageDuration: '8h_80k' | '12h_120k';
  outstationTripType: 'round' | 'oneway';
  outstationKm: number;
  outstationDays: number;
  airportRoute: 'csmia_t1_t2' | 'nmia_navi_mumbai' | 'pune_airport';
  monthlyKmPackage: '2000' | '2500' | '3000';
}

export interface CalculationBreakdown {
  baseFare: number;
  driverAllowance: number;
  extraChargesEst: number;
  totalEstimated: number;
  details: string[];
}

export interface InquiryRecord {
  id: string;
  name: string;
  mobile: string;
  company?: string;
  service: string;
  carName: string;
  numCars: number;
  date?: string;
  duration?: string;
  pickup?: string;
  notes?: string;
  estimatedTotal?: number;
  createdAt: string;
  status: 'Pending' | 'Contacted' | 'Confirmed';
}
