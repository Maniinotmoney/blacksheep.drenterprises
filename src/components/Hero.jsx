import { client, urlFor } from '../sanityClient';
import React, { useState, useEffect } from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/FutureLogistics.css';
import bgImage from '../assets/future-logistics-bg.png';

const Hero = () => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        const query = '*[_type == "hero"][0]';
        client.fetch(query).then((data) => {
            if (data) setContent(data);
        }).catch(console.error);
    }, []);

    const backgroundImage = content?.backgroundImage ? urlFor(content.backgroundImage).url() : bgImage;

    return (
        <section id="home" className="future-logistics-section">
            <div className="future-bg-wrapper">
                <img src={backgroundImage} alt="Future of Logistics" className="future-bg-image" />
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
                    {content?.heading ? (
                        <h2>{content.heading}</h2>
                    ) : (
                        <h2><br /></h2>
                    )}

                    <p>{content?.subheading || "Real-time tracking, intelligent routing, and global freight solutions powered by advanced logistics technology."}</p>

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
                        <strong>{content?.statsCount || "20K+"}</strong>
                        <span>{content?.statsLabel || "Global Shipments Delivered"}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
