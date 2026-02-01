import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import RevealSection from './components/RevealSection';
import WorkSection from './components/WorkSection';
import TrackRecord from './components/TrackRecord';
import './styles/index.css';

import StickyContact from './components/StickyContact';

import FutureLogistics from './components/FutureLogistics'; // Import new component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <div className="app">
          <Header />
          <StickyContact />
          <main>
            <FutureLogistics />
            <Hero />

            <RevealSection>
              <TrackRecord />
            </RevealSection>

            <RevealSection>
              <About />
            </RevealSection>

            <Services />

            <RevealSection>
              <WorkSection />
            </RevealSection>

            <RevealSection>
              <Testimonials />
            </RevealSection>

            <RevealSection>
              <Contact />
            </RevealSection>

          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
