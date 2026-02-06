import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import '../styles/Hero.css';

import { client, urlFor } from '../sanityClient';


const defaultSlides = [
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

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slides, setSlides] = useState(defaultSlides);

    useEffect(() => {
        const query = '*[_type == "heroCarousel"] | order(_createdAt asc)';
        client.fetch(query).then((data) => {
            if (data && data.length > 0) {
                const mappedSlides = data.map(slide => ({
                    image: slide.image ? urlFor(slide.image).width(1920).url() : defaultSlides[0].image,
                    text: slide.heading || ["Welcome"],
                    alignment: {
                        justify: slide.alignment === 'left' ? 'flex-start' : slide.alignment === 'right' ? 'flex-end' : 'center',
                        align: slide.alignment === 'left' ? 'flex-end' : slide.alignment === 'right' ? 'flex-start' : 'center', // Mapping loosely based on original design
                        textAlign: slide.alignment || 'center'
                    }
                }));
                // If data is fetched, verify it has content, else stick to default
                if (mappedSlides.length > 0) {
                    setSlides(mappedSlides);
                }
            }
        }).catch(console.error);
    }, []);

    useEffect(() => {
        if (slides.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000); // Change every 6 seconds to allow zoom to complete/progress
        return () => clearInterval(timer);
    }, [slides.length]);

    const currentSlide = slides[currentIndex] || defaultSlides[0];
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

                    {/* <p className="hero-subtitle" style={{ marginLeft: alignment.textAlign === 'right' ? 'auto' : 0, marginRight: alignment.textAlign === 'left' ? 'auto' : 0 }}>
                        Premier drayage, intermodal transport, and secure container storage in the Bay Area.
                        Serving Oakland, CA and beyond with a dedicated fleet.
                    </p> */}

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

export default Carousel;
