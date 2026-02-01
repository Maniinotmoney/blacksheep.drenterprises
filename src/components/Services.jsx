import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Container, ShieldCheck, ArrowRight } from 'lucide-react';
import '../styles/Services.css';
import service1 from '../assets/truck-road.jpeg';
import service2 from '../assets/container-boxes.jpg';
import service3 from '../assets/logistics.jpg';

import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Card = ({ i, title, desc, image, features, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="cardContainer">
            <motion.div
                style={{ scale, top: `calc(10% + ${i * 25}px)` }}
                className="service-card-redesign"
            >
                <div className="card-image-wrapper">
                    <div className="inner">
                        <img src={image} alt={title} />
                    </div>
                    <div className="card-overlay"></div>
                </div>

                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{desc}</p>

                    <div className="features-list">
                        {features.map((feature, j) => (
                            <div key={j} className="feature-tag">{feature}</div>
                        ))}
                    </div>

                    <button className="learn-more-btn">
                        <span>Learn More</span>
                        <ArrowRight size={16} />
                    </button>
                </div>
            </motion.div>
        </div>
    )
}

const Services = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const services = [
        {
            id: 1,
            title: "Trucking & Carrier",
            desc: "Reliable transport across California with our dedicated fleet.",
            image: service1,
            features: ["Drayage & Intermodal", "Regional & Interstate", "10 Trucks / 10 Drivers"]
        },
        {
            id: 2,
            title: "Container Yard",
            desc: "Secure lot services located just blocks from the Port of Oakland.",
            image: service2,
            features: ["Container Storage", "Short & Long-term", "Importer / Exporter", "24/7 Security"]
        },
        {
            id: 3,
            title: "Bonded Transport",
            desc: "Authorized to move goods through customs efficiently and securely.",
            image: service3,
            features: ["Customs Bonded Carrier", "Seamless Port Ops", "Regulatory Compliance", "Efficient Processing"]
        }
    ];

    return (
        <section id="services" className="services-section" ref={container}>
            <div className="container">
                <div className="center-text">
                    <h2 className="section-title text-dark">Our Expertise</h2>
                    <p className="section-subtitle-text">Delivering excellence in every mile and every container.</p>
                </div>

                <div className="services-stack-wrapper">
                    {services.map((service, i) => {
                        const targetScale = 1 - ((services.length - i) * 0.05);
                        return <Card
                            key={i}
                            i={i}
                            {...service}
                            progress={scrollYProgress}
                            range={[i * .25, 1]}
                            targetScale={targetScale}
                        />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
