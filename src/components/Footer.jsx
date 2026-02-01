import React from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, Phone, Mail, ArrowRight, Instagram, Linkedin, Facebook } from 'lucide-react';
import '../styles/Footer.css';
import drLogo from '../assets/dr-logo-full.png';

const Footer = () => {
    return (
        <footer className="footer-redesign">
            <div className="footer-gradient-overlay"></div>
            <div className="container">
                <div className="footer-top-grid">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <motion.div
                            className="footer-logo-box"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Truck size={32} className="footer-brand-icon" />
                            <span className="footer-brand-name">DR ENTERPRISE</span>
                        </motion.div>
                        <p className="footer-tagline">
                            Redefining logistics with speed, security, and dedicated service across California.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col links-col">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#work">Our Work</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col contact-col">
                        <h3>Contact Us</h3>
                        <div className="contact-item">
                            <MapPin size={20} className="contact-icon" />
                            <span>500 Castro St, Oakland, CA 94607</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={20} className="contact-icon" />
                            <span>(510) 909-0836</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={20} className="contact-icon" />
                            <span>dispatch@drenterprise.com</span>
                        </div>
                    </div>

                    {/* Newsletter / CTA */}
                    <div className="footer-col cta-col">
                        <h3>Stay Connected</h3>
                        <p>Join our network for latest industry updates.</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">
                                <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} DR Enterprise LLC. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
