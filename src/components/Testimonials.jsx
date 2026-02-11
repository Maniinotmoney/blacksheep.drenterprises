import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import '../styles/Testimonials.css';
import { client, urlFor } from '../sanityClient';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const query = `*[_type == "testimonials"]{
            _id,
            clientName,
            company,
            quote,
            stars
        }`;

        client.fetch(query).then((data) => {
            setTestimonials(data);
        }).catch(err => console.error("Error fetching testimonials:", err));
    }, []);

    const infiniteTestimonials = testimonials.length > 0 ? [...testimonials, ...testimonials] : [];

    const carouselRef = useRef(null);
    const x = useMotionValue(0);

    useEffect(() => {
        const controls = animate(x, ["0%", "-50%"], {
            ease: "linear",
            duration: 30,
            repeat: Infinity,
        });

        return () => controls.stop();
    }, [x]);

    if (testimonials.length === 0) return null;

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
                                key={`${item._id}-${index}`}
                                className="testimonial-card-slide"
                            >
                                <div className="quote-icon">
                                    <Quote size={32} />
                                </div>
                                <p className="review-text">"{item.quote}"</p>

                                <div className="review-footer">
                                    <div className="stars">
                                        {[...Array(item.stars || 5)].map((_, i) => (
                                            <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                                        ))}
                                    </div>
                                    <div className="reviewer-info">
                                        <strong>{item.clientName}</strong>
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