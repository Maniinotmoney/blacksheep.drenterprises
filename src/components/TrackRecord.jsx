import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import '../styles/TrackRecord.css';


import history1 from '../assets/red-truck.jpg';
import history2 from '../assets/two-trucks-on-road.jpg';
import history3 from '../assets/trucks-upperview.jpg';

const TrackRecord = () => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

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
        <section id="track-record" className="track-record-section">
            <div
                className="track-container"
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >

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


                <div className="track-gallery-wrapper">
                    <motion.div
                        className="skewed-gallery"
                        style={{
                            rotateY: rotateY,
                            rotateX: rotateX,
                            transformStyle: "preserve-3d"
                        }}
                    >

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
