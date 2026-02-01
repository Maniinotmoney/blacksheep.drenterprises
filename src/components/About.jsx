import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Clock, MapPin } from 'lucide-react';
import '../styles/About.css';
import aboutImage from '../assets/team-logistic.jpg';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                {/* Image Side */}
                <motion.div
                    className="about-image-col"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="about-image-wrapper">
                        <img
                            src={aboutImage}
                            alt="DR Enterprise Truck Fleet"
                            className="about-image"
                        />
                    </div>
                    <div className="experience-badge">
                        <span className="years">15+</span>
                        <span className="label">Years of<br />Experience</span>
                    </div>
                </motion.div>

                <motion.div
                    className="about-content-col"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h4 className="about-section-label">WHO WE ARE</h4>
                    <h2 className="section-heading">DR Enterprise LLC</h2>
                    <p className="about-description">
                        Established in 2020 by David Mejia, DR Enterprise creates a new standard in the trucking industry.
                        With over 15 years of deep industry experience, we understand the complexities of logistics
                        and the importance of reliable execution. We are fully DOT (#3456789) and MC (#123456) compliant.
                    </p>

                    <p className="about-description">
                        We operate primarily in Oakland, the Bay Area, and California statewide, including Long Beach.
                        Strategically located next to the Port of Oakland, we offer seamless container storage and transport solutions.
                    </p>

                    <div className="features-grid">
                        <div className="feature-item">
                            <Shield className="feature-icon" size={24} />
                            <div>
                                <h5>Fully Insured</h5>
                                <p>Comprehensive coverage for peace of mind</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="feature-icon" size={24} />
                            <div>
                                <h5>Transportation Bonded</h5>
                                <p>Authorized for customs bonded cargo</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <Clock className="feature-icon" size={24} />
                            <div>
                                <h5>Reliable Service</h5>
                                <p>Commitment to on-time delivery</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <MapPin className="feature-icon" size={24} />
                            <div>
                                <h5>Statewide Coverage</h5>
                                <p>Serving all of California</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;