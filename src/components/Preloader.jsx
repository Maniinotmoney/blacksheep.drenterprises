import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin } from 'lucide-react';
import '../styles/Preloader.css';
import drLogo from '../assets/dr-logo-full.png';

const Preloader = ({ onComplete }) => {
    const [loading, setLoading] = useState(true);
    const [percentage, setPercentage] = useState(0);

    // Complex winding path for the truck
    const routePath = "M 10,80 C 50,80 50,20 90,20 L 140,20 C 180,20 180,80 220,80 L 260,80 C 280,80 290,50 295,50";

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        const timer = setTimeout(() => {
            setLoading(false);
            setTimeout(onComplete, 600);
        }, 3500); // Extended time for longer route

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            animate={{ opacity: loading ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={() => !loading && onComplete()}
        >
            <div className="preloader-content">
                <motion.div
                    className="preloader-logo"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={drLogo} alt="DR Enterprise" className="logo-img-preloader" />
                </motion.div>

                <div className="route-tracker-container">
                    {/* SVG Path Route */}
                    <svg className="route-svg" viewBox="0 0 300 100">
                        {/* Background Track */}
                        <path
                            d={routePath}
                            fill="none"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />

                        {/* Active Progress Path */}
                        <motion.path
                            d={routePath}
                            fill="none"
                            stroke="#ffffffff"
                            strokeWidth="4"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: percentage / 100 }}
                            transition={{ duration: 0, ease: "linear" }}
                        />
                    </svg>

                    {/* Moving Object (Truck) */}
                    <motion.div
                        className="route-marker"
                        style={{
                            offsetPath: `path("${routePath}")`,
                            offsetDistance: `${percentage}%`
                        }}
                    >
                        <div className="marker-glow"></div>
                        <Truck size={24} color="#0056D2" fill="#ffffffff" />
                    </motion.div>

                    {/* Destination Pin */}
                    <div className="destination-pin">
                        <MapPin size={24} color={percentage === 100 ? "#0056D2" : "#ffffffff"} />
                    </div>
                </div>

                {/* <div className="loading-text">
                    Calculating Route... {percentage}%
                </div> */}
            </div>
        </motion.div>
    );
};

export default Preloader;
