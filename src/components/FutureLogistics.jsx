import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/FutureLogistics.css';
import bgImage from '../assets/future-logistics-bg.png';

// Placeholder avatars (using adorable avatars or colored divs if actual images aren't available, 
// using generic dicebear urls for demo)
// const avatars = [
//     "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
//     "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
//     "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark"
// ];

const FutureLogistics = () => {
    return (
        <section className="future-logistics-section">
            <div className="future-bg-wrapper">
                <img src={bgImage} alt="Future of Logistics" className="future-bg-image" />
                <div className="future-overlay-gradient"></div>
            </div>

            <div className="container future-content-container">
                {/* Left Side Vertical Text */}
                <div className="vertical-text-left">
                    <span>Trusted by global partners worldwide</span>
                </div>

                {/* Glass Card Bottom Left */}
                <motion.div
                    className="future-glass-card"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2>Explore the DR<br />of Cargo Logistics</h2>
                    <p>Real-time tracking, intelligent routing, and global freight solutions powered by advanced logistics technology.</p>

                    <a href="#contact" className="future-cta-btn">
                        <span>Get Started</span>
                        <div className="icon-circle">
                            <ArrowUpRight size={18} />
                        </div>
                    </a>
                </motion.div>

                {/* Play Button - Center Right */}
                <motion.div
                    className="future-play-wrapper"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                >
                    <a href="#work" className="play-btn-pulse">
                        <Play size={24} fill="currentColor" />
                    </a>
                    <div className="play-text">
                        <span>Discover the</span>
                        <strong>DR ENTERPRISES</strong>
                    </div>
                </motion.div>

                {/* Stats - Bottom Right */}
                <motion.div
                    className="future-stats-wrapper"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    {/* <div className="avatar-group">
                        {avatars.map((src, i) => (
                            <div key={i} className="avatar">
                                <img src={src} alt="User" />
                            </div>
                        ))}
                    </div> */}
                    <div className="stats-text">
                        <strong>20K+</strong>
                        <span>Global Shipments<br />Delivered</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FutureLogistics;
