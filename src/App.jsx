import React, { useState } from 'react';
import Header from './components/Header';

import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import RevealSection from './components/RevealSection';
import WorkSection from './components/WorkSection';
import TrackRecord from './components/TrackRecord';
import './styles/index.css';
import Activegrid from './components/ActiveGrid';

import StickyContact from './components/StickyContact';

import Hero from './components/Hero';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isActivegridActive, setIsActivegridActive] = useState(false);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <div className="app">
          <Header />
          <StickyContact />
          <main>
            <Hero onActivegridTrigger={() => setIsActivegridActive(true)} />
            {/* <RevealSection> */}
            <TrackRecord />
            {/* </RevealSection> */}

            <RevealSection>
              <About />
            </RevealSection>

            <Services />

            {/* <RevealSection> */}
            <WorkSection />
            {/* </RevealSection> */}

            <RevealSection>
              <Testimonials />
            </RevealSection>

            <BlogSection />

            <RevealSection>
              <Contact />
            </RevealSection>

          </main>
          <Footer />
          <Activegrid isOpen={isActivegridActive} onClose={() => setIsActivegridActive(false)} />
        </div>
      )}
    </>
  );
}

export default App;
