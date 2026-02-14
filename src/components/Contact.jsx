import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-wrapper">

                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="section-label">GET IN TOUCH</h4>
                        <h2 className="section-heading">Contact Us</h2>
                        <p className="contact-intro">
                            Ready to move your freight? Contact our team for quotes, logistics planning, or yard storage inquiries.
                        </p>

                        <div className="info-item">
                            <div className="info-icon">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h5>Phone</h5>
                                <a href="tel:5109094834" className="info-link">510-909-4834</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h5>Email</h5>
                                <a href="mailto:logistics@drenterprisellc.com" className="info-link">logistics@drenterprisellc.com</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h5>Business Address</h5>
                                <p>2415 San Ramon Valley Blvd Suite #4117<br />San Ramon, CA 94583</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h5>Yard Location</h5>
                                <p>500 Castro St<br />Oakland, CA 94607</p>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Send Message</h3>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="4" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
