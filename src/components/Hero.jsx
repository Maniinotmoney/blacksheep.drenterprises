import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import '../styles/Hero.css';

// Import local assets
import truckRoad from '../assets/truck-road.jpeg';
import shipContainer from '../assets/ship-container.jpeg';
import logistics from '../assets/logistics.jpg';

const slides = [
    {
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1744&auto=format&fit=crop",
        text: ["RELIABLE TRUCKING &", "CONTAINER SOLUTIONS"],
        alignment: { justify: 'center', align: 'center', textAlign: 'center' }
    },
    {
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?fm=jpg&q=60&w=3000&auto=format&fit=crop",
        text: ["NATIONWIDE FLEET", "& LOGISTICS EXPERTS"],
        alignment: { justify: 'flex-start', align: 'flex-end', textAlign: 'left' }
    },
    {
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?fm=jpg&q=60&w=3000&auto=format&fit=crop",
        text: ["SECURE FREIGHT", "MANAGEMENT SYSTEM"],
        alignment: { justify: 'flex-end', align: 'flex-start', textAlign: 'right' }
    }
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000); // Change every 6 seconds to allow zoom to complete/progress
        return () => clearInterval(timer);
    }, []);

    const currentSlide = slides[currentIndex];
    const { alignment } = currentSlide;

    return (
        <section id="hero" className="hero-section">
            <div className="hero-overlay"></div>

            {/* Background Carousel */}
            <div className="hero-carousel">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        className="hero-bg-image"
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.33, 1, 0.68, 1]
                        }}
                        style={{ backgroundImage: `url(${currentSlide.image})` }}
                    />
                </AnimatePresence>
            </div>

            {/* Dynamic Content Container */}
            <motion.div
                className="container hero-content"
                animate={{
                    justifyContent: alignment.justify,
                    alignItems: alignment.align,
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }} // Slower, smoother transition
                style={{
                    display: 'flex',
                    height: '90%',
                    position: 'relative',
                    zIndex: 10
                }}
            >
                <motion.div
                    className="hero-text-content"
                    animate={{ textAlign: alignment.textAlign }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    style={{ width: '100%', maxWidth: '900px' }} // Ensure it can alignment properly
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        style={{ display: 'inline-block' }}
                    >
                        EST. 2020 • 15+ Years Experience
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        key={currentIndex} // Re-trigger text stagger on slide change
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.05 } },
                            hidden: {}
                        }}
                    >
                        {/* Helper to split text */}
                        {currentSlide.text.map((line, i) => (
                            <div key={i} style={{
                                overflow: "hidden",
                                display: "flex",
                                justifyContent: alignment.textAlign === 'center' ? 'center' : alignment.textAlign === 'right' ? 'flex-end' : 'flex-start',
                                flexWrap: "wrap"
                            }}>
                                {line.split("").map((char, index) => (
                                    <motion.span
                                        key={`${i}-${index}`}
                                        variants={{
                                            hidden: { y: "100%" },
                                            visible: {
                                                y: 0,
                                                transition: {
                                                    type: "spring",
                                                    damping: 12,
                                                    stiffness: 100
                                                }
                                            }
                                        }}
                                        style={{ display: "inline-block" }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </div>
                        ))}
                    </motion.h1>

                    <p className="hero-subtitle" style={{ marginLeft: alignment.textAlign === 'right' ? 'auto' : 0, marginRight: alignment.textAlign === 'left' ? 'auto' : 0 }}>
                        Premier drayage, intermodal transport, and secure container storage in the Bay Area.
                        Serving Oakland, CA and beyond with a dedicated fleet.
                    </p>

                    {/* <div className="hero-cta-group"> */}
                    {/* <a href="#contact" className="btn btn-white hero-btn">
                            LET'S TALK
                        </a>
                        <a href="tel:5109094834" className="btn btn-transparent hero-btn">
                            <Phone size={20} className="icon-phone" />
                            OR CALL NOW: 510-909-4834
                    </div> */}

                    {/* <div className="hero-google-review">
                        <div className="review-badge">
                            <span className="g-icon">G</span>
                            <div className="review-text">
                                <strong>5.0/5</strong> ★★★★★<br />
                                <small>Based on 175+ Reviews</small>
                            </div>
                        </div>
                    </div> */}

                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
