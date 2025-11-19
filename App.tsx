import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { HowItWorks } from './components/HowItWorks';
import { MapSection } from './components/MapSection';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';
import { AppShowcase } from './components/AppShowcase';

const App: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen text-slate-200 selection:bg-brand-lime selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <HowItWorks />
        <AppShowcase />
        <MapSection />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;