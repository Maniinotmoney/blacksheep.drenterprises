
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/WorkSection.css';
import workPoster from '../assets/truck-road.jpeg';
import workVideo from '../assets/work-video.mp4';

const WorkSection = () => {
    return (
        <section id="work" className="work-section">
            <div className="work-container">

                <div className="work-video-col">
                    <div className="video-wrapper">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="work-video"
                            poster={workPoster}
                        >
                            <source src={workVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="video-overlay"></div>
                    </div>
                </div>


                <div className="work-content-col">
                    <div className="grainy-bg"></div>
                    <div className="content-inner">
                        <motion.h2
                            className="work-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            AGGREGATE TRUCKING: <br />
                            <span className="highlight">SIMPLIFIED.</span>
                        </motion.h2>

                        <motion.p
                            className="work-desc"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            DR Enterprise was founded with a vision to streamline logistics.
                            We operate as one of the area’s top <strong>trucking</strong> and <strong>logistics providers</strong>.
                            Our 100% owner-operator fleet represented the best haulers in our market
                            and continually strive to exceed your expectations. Let us connect you
                            and your team to the widest supply network in California.
                        </motion.p>

                        <motion.a
                            href="#projects"
                            className="btn-work"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            WHERE WE WORK
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
