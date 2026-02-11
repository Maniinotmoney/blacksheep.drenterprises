import { client, urlFor } from '../sanityClient';
import React, { useState, useEffect } from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/FutureLogistics.css';
import bgImage from '../assets/future-logistics-bg.png';
import bgImage2 from '../assets/ship-container.jpeg';
import bgImage3 from '../assets/container-boxes.jpg';

const defaultImages = [
    bgImage,
    bgImage2,
    bgImage3
];

const Hero = ({ onActivegridTrigger }) => {
    const [content, setContent] = useState(null);
    const [clickCount, setClickCount] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [backgroundImages, setBackgroundImages] = useState(defaultImages);

    useEffect(() => {
        const query = '*[_type == "hero"][0]';
        client.fetch(query).then((data) => {
            if (data) {
                setContent(data);

                let images = [];
                if (data.backgroundImages && data.backgroundImages.length > 0) {
                    images = data.backgroundImages.map(img => urlFor(img).url());
                } else if (data.backgroundImage) {
                    images = [urlFor(data.backgroundImage).url()];
                }


                if (images.length > 0) {
                    setBackgroundImages(images);
                } else {

                    setBackgroundImages(defaultImages);
                }
            } else {

                setBackgroundImages(defaultImages);
            }
        }).catch(err => {
            console.error(err);
            setBackgroundImages(defaultImages);
        });
    }, []);


    useEffect(() => {
        if (backgroundImages.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [backgroundImages]);



    useEffect(() => {
        if (clickCount === 10) {

            if (window.innerWidth < 768) {
                if (onActivegridTrigger) onActivegridTrigger();
            }
            setClickCount(0);
        }


        const timer = setTimeout(() => {
            setClickCount(0);
        }, 2000);

        return () => clearTimeout(timer);
    }, [clickCount, onActivegridTrigger]);

    const handleGlassClick = () => {
        setClickCount(prev => prev + 1);
    };

    return (
        <section id="home" className="future-logistics-section">
            <div className="future-bg-wrapper">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="future-bg-image"
                        style={{
                            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0
                        }}
                    />
                </AnimatePresence>
                <div className="future-overlay-gradient"></div>
            </div>

            <div className="container future-content-container">

                <div className="vertical-text-left">
                    <span>Trusted by global partners worldwide</span>
                </div>


                <motion.div
                    className="future-glass-card"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    onClick={handleGlassClick}
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


                <motion.div
                    className="future-stats-wrapper"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >

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
