import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import '../styles/TrackRecord.css';

// Import local assets
import history1 from '../assets/red-truck.jpg';
import history2 from '../assets/two-trucks-on-road.jpg';
import history3 from '../assets/trucks-upperview.jpg';

const TrackRecord = () => {
    const ref = useRef(null);

    // Mouse motion values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for the tilt
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    // Map mouse position to rotation degrees
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        // Calculate normalized mouse position (-0.5 to 0.5) from center
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        const xPct = (mouseXPos / width) - 0.5;
        const yPct = (mouseYPos / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="track-record-section">
            <div
                className="track-container"
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* Header Content */}
                <div className="track-header">
                    <motion.div
                        className="track-label-line"
                        initial={{ width: 0 }}
                        whileInView={{ width: 60 }}
                        transition={{ duration: 0.8 }}
                    ></motion.div>
                    <motion.h4
                        className="track-subtitle"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        OUR TRACK RECORD
                    </motion.h4>
                    <motion.h2
                        className="track-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        A history of unparalleled service<br />
                        and relentless innovation
                    </motion.h2>
                </div>

                {/* 3D Interactive Gallery */}
                <div className="track-gallery-wrapper">
                    <motion.div
                        className="skewed-gallery"
                        style={{
                            rotateY: rotateY,
                            rotateX: rotateX,
                            transformStyle: "preserve-3d" // Critical for 3D effect
                        }}
                    >
                        {/* Image 1 - Far Left */}
                        <motion.div
                            className="skew-image-card"
                            style={{ zIndex: 1, transform: "translateZ(20px)" }}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <div className="card-shine"></div>
                            <img src={history1} alt="History 1" />
                        </motion.div>

                        {/* Image 2 - Center (Popped Out) */}
                        <motion.div
                            className="skew-image-card center-card"
                            style={{ zIndex: 2, transform: "translateZ(60px)" }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="card-shine"></div>
                            <img src={history2} alt="History 2" />
                        </motion.div>

                        {/* Image 3 - Far Right */}
                        <motion.div
                            className="skew-image-card"
                            style={{ zIndex: 1, transform: "translateZ(20px)" }}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <div className="card-shine"></div>
                            <img src={history3} alt="History 3" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Date / Description */}
                <div className="track-footer">
                    <motion.div
                        className="since-block"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <span className="since-text">Since</span>
                        <span className="year-text">2020</span>
                        <div className="year-glow"></div>
                    </motion.div>

                    <motion.div
                        className="track-desc-block"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <p>
                            We've strived to deliver the highest standard of service to every customer.
                            Today, our leadership team is proud to continue DR Enterprise's tradition
                            of innovation and excellence in the Oakland logistics market.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default TrackRecord;
