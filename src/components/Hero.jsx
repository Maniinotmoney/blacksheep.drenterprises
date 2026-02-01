import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import '../styles/Hero.css';

// Import local assets
import truckRoad from '../assets/truck-road.jpeg';
import shipContainer from '../assets/ship-container.jpeg';
import logistics from '../assets/logistics.jpg';

const heroImages = [
    "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Logistics/Industrial
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==",
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlaWdodHxlbnwwfHwwfHx8MA==",

];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 6000); // Change every 6 seconds to allow zoom to complete/progress
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="hero-section">
            <div className="hero-overlay"></div>

            {/* Background Carousel */}
            <div className="hero-carousel">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentImage}
                        className="hero-bg-image"
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{ scale: 1.1, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            opacity: { duration: 1.5 }, // Smooth fade
                            scale: { duration: 7, ease: "linear" } // Slow zoom exceeding slide time slightly
                        }}
                        style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
                    />
                </AnimatePresence>
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text-content"
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        EST. 2020 • 15+ Years Experience
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.05 } },
                            hidden: {}
                        }}
                    >
                        {/* Helper to split text */}
                        {[
                            "RELIABLE TRUCKING &",
                            // "TRUCKING &",
                            "CONTAINER SOLUTIONS"
                        ].map((line, i) => (
                            <div key={i} style={{ overflow: "hidden", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                                {line.split("").map((char, index) => (
                                    <motion.span
                                        key={index}
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

                    <p className="hero-subtitle">
                        Premier drayage, intermodal transport, and secure container storage in the Bay Area.
                        Serving Oakland, CA and beyond with a dedicated fleet.
                    </p>

                    {/* <div className="hero-cta-group">
                        <a href="#contact" className="btn btn-white hero-btn">
                            LET'S TALK
                        </a>
                        <a href="tel:5109094834" className="btn btn-transparent hero-btn">
                            <Phone size={20} className="icon-phone" />
                            OR CALL NOW: 510-909-4834
                        </a>
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
            </div>
        </section>
    );
};

export default Hero;
