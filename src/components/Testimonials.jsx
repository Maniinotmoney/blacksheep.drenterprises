import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import '../styles/Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Michael R.",
        company: "Bay Area Logistics",
        text: "DR Enterprise has been our go-to for drayage needs. Their reliability and communication are unmatched in the industry.",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah T.",
        company: "Global Imports Inc.",
        text: "The team handled our bonded cargo with zero issues. Efficient customs processing and secure storage saved us days of delay.",
        rating: 5
    },
    {
        id: 3,
        name: "James L.",
        company: "West Coast Distributors",
        text: "Professional drivers and modern fleet. We've never missed a delivery window since switching to DR Enterprise.",
        rating: 5
    },
    {
        id: 4,
        name: "Elena G.",
        company: "Oakland Trade Partners",
        text: "Their container yard is secure and accessible. It's a huge advantage having such a reliable partner near the port.",
        rating: 5
    },
    {
        id: 5,
        name: "Robert M.",
        company: "Tech Logistics",
        text: "Outstanding service. The real-time tracking updates and professional drivers make all the difference for our high-value shipments.",
        rating: 5
    }
];

const Testimonials = () => {
    // Duplicate testimonials for seamless looping
    const infiniteTestimonials = [...testimonials, ...testimonials];

    // Ref for the scrolling container
    const carouselRef = useRef(null);
    const x = useMotionValue(0);

    useEffect(() => {
        const controls = animate(x, ["0%", "-50%"], {
            ease: "linear",
            duration: 30, // Adjust speed here (slower = higher number)
            repeat: Infinity,
        });

        return () => controls.stop();
    }, [x]);

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="parallax-bg"></div>
            <div className="overlay"></div>

            <div className="container testimonials-container">
                <motion.div
                    className="section-header center-text"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h4 className="section-label">WHAT CLIENTS SAY</h4>
                    <h2 className="testimonial-section-title">Trusted Partners</h2>
                </motion.div>

                <div className="marquee-wrapper">
                    <motion.div
                        className="marquee-track"
                        style={{ x }}
                    >
                        {infiniteTestimonials.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className="testimonial-card-slide"
                            >
                                <div className="quote-icon">
                                    <Quote size={32} />
                                </div>
                                <p className="review-text">"{item.text}"</p>

                                <div className="review-footer">
                                    <div className="stars">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                                        ))}
                                    </div>
                                    <div className="reviewer-info">
                                        <strong>{item.name}</strong>
                                        <span>{item.company}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;