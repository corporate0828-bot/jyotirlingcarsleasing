import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectorsServed from './components/SectorsServed';
import FareCalculator from './components/FareCalculator';
import FleetSection from './components/FleetSection';
import CorporateIndustrial from './components/CorporateIndustrial';
import ServicesSection from './components/ServicesSection';
import PopularRoutes from './components/PopularRoutes';
import TrustProof from './components/TrustProof';
import ContactSection from './components/ContactSection';
import QuotationModal from './components/QuotationModal';
import InquiryDrawer from './components/InquiryDrawer';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { InquiryRecord, RoutePackage } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isInquiryDrawerOpen, setIsInquiryDrawerOpen] = useState(false);

  // Quote form preset states
  const [quotePresetCar, setQuotePresetCar] = useState<string | undefined>();
  const [quotePresetService, setQuotePresetService] = useState<string | undefined>();
  const [quotePresetFare, setQuotePresetFare] = useState<number | undefined>();
  const [quotePresetNotes, setQuotePresetNotes] = useState<string | undefined>();

  // Stored inquiries
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('jm_inquiries');
      if (stored) {
        setInquiries(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleOpenQuoteModal = (presetService?: string, presetCar?: string) => {
    setQuotePresetService(presetService);
    setQuotePresetCar(presetCar);
    setQuotePresetFare(undefined);
    setQuotePresetNotes(undefined);
    setIsQuoteModalOpen(true);
  };

  const handleSelectCarForQuote = (carName: string) => {
    setQuotePresetCar(carName);
    setQuotePresetService(undefined);
    setQuotePresetFare(undefined);
    setQuotePresetNotes(undefined);
    setIsQuoteModalOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setQuotePresetService(serviceTitle);
    setQuotePresetCar(undefined);
    setQuotePresetFare(undefined);
    setQuotePresetNotes(undefined);
    setIsQuoteModalOpen(true);
  };

  const handleSelectRoute = (route: RoutePackage) => {
    setQuotePresetService('Local & Outstation Rental');
    setQuotePresetCar(route.idealVehicle.split(' / ')[0]);
    setQuotePresetFare(route.startingPrice);
    setQuotePresetNotes(`Route: ${route.from} to ${route.to} (${route.distanceKm} km approx). ${route.routeHighlights}`);
    setIsQuoteModalOpen(true);
  };

  const handleTransferFromCalculator = (details: {
    service: string;
    carName: string;
    estimatedFare: number;
    notes: string;
  }) => {
    setQuotePresetService(details.service);
    setQuotePresetCar(details.carName);
    setQuotePresetFare(details.estimatedFare);
    setQuotePresetNotes(details.notes);

    // Scroll to contact form or open modal
    const contactElem = document.getElementById('quote');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsQuoteModalOpen(true);
    }
  };

  const handleInquirySubmitted = (newRecord: InquiryRecord) => {
    setInquiries((prev) => [newRecord, ...prev]);
  };

  const handleClearInquiries = () => {
    localStorage.removeItem('jm_inquiries');
    setInquiries([]);
  };

  const handleDeleteOneInquiry = (id: string) => {
    const updated = inquiries.filter((item) => item.id !== id);
    setInquiries(updated);
    localStorage.setItem('jm_inquiries', JSON.stringify(updated));
  };

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Navigation adhering strictly to Top Bar Contract */}
      <Navbar
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenInquiryDrawer={() => setIsInquiryDrawerOpen(true)}
        inquiryCount={inquiries.length}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenQuoteModal={handleOpenQuoteModal}
          onScrollToCalculator={handleScrollToCalculator}
        />

        {/* Sectors We Provide Services To */}
        <SectorsServed
          onSelectSector={handleSelectService}
        />

        {/* Instant Fare Estimator & Rate Calculator */}
        <FareCalculator
          onTransferToQuote={handleTransferFromCalculator}
        />

        {/* Modern Fleet Catalog with Inspector */}
        <FleetSection
          onSelectCarForQuote={handleSelectCarForQuote}
        />

        {/* Corporate & Industrial Car Hiring Focus */}
        <CorporateIndustrial
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Services Overview */}
        <ServicesSection
          onSelectService={handleSelectService}
        />

        {/* Outstation Corridors & Pilgrimage Routes */}
        <PopularRoutes
          onSelectRoute={handleSelectRoute}
        />

        {/* Testimonials & FAQs */}
        <TrustProof />

        {/* Contact Office & Quotation Form */}
        <ContactSection
          onInquirySubmitted={handleInquirySubmitted}
          presetCar={quotePresetCar}
          presetService={quotePresetService}
          presetEstimatedFare={quotePresetFare}
          presetNotes={quotePresetNotes}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />

      {/* Quick Quote Modal */}
      <QuotationModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        presetCar={quotePresetCar}
        presetService={quotePresetService}
        presetEstimatedFare={quotePresetFare}
        presetNotes={quotePresetNotes}
        onInquirySubmitted={handleInquirySubmitted}
      />

      {/* Client/Admin Inquiries Ledger Drawer */}
      <InquiryDrawer
        isOpen={isInquiryDrawerOpen}
        onClose={() => setIsInquiryDrawerOpen(false)}
        inquiries={inquiries}
        onClearAll={handleClearInquiries}
        onDeleteOne={handleDeleteOneInquiry}
      />
    </div>
  );
}
