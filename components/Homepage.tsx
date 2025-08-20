import React, { useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import SearchAnalytics from './sections/SearchAnalytics';
import DealTypes from './sections/DealTypes';
import CrmPayments from './sections/CrmPayments';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import FinalCta from './sections/FinalCta';
import Footer from './sections/Footer';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <SearchAnalytics />
        <DealTypes />
        <CrmPayments />
        <Testimonials />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
