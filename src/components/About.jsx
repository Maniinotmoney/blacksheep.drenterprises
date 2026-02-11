import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Clock, MapPin } from 'lucide-react';
import { client, urlFor } from '../sanityClient';
import '../styles/About.css';
import aboutImageDefault from '../assets/team-logistic.jpg';

const iconMap = {
    Shield: Shield,
    CheckCircle: CheckCircle,
    Clock: Clock,
    MapPin: MapPin
};

const About = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const query = `*[_type == "about"][0]`;
        client.fetch(query).then(fetchedData => {
            if (fetchedData) setData(fetchedData);
        }).catch(console.error);
    }, []);


    const defaults = {
        heading: "DR Enterprise LLC",
        description: "Established in 2020 by David Mejia, DR Enterprise creates a new standard in the trucking industry. With over 15 years of deep industry experience, we understand the complexities of logistics and the importance of reliable execution. We are fully DOT (#3456789) and MC (#123456) compliant.",
        description2: "We operate primarily in Oakland, the Bay Area, and California statewide, including Long Beach. Strategically located next to the Port of Oakland, we offer seamless container storage and transport solutions.",
        experienceYears: "15+",
        experienceLabel: "Years of\nExperience",
        features: [
            { title: "Fully Insured", description: "Comprehensive coverage for peace of mind", icon: "Shield" },
            { title: "Transportation Bonded", description: "Authorized for customs bonded cargo", icon: "CheckCircle" },
            { title: "Reliable Service", description: "Commitment to on-time delivery", icon: "Clock" },
            { title: "Statewide Coverage", description: "Serving all of California", icon: "MapPin" }
        ]
    };


    const content = data ? { ...defaults, ...data } : defaults;

    const imageUrl = data?.image ? urlFor(data.image).width(800).url() : aboutImageDefault;

    return (
        <section id="about" className="about-section">
            <div className="container about-container">

                <motion.div
                    className="about-image-col"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="about-image-wrapper">
                        <img
                            src={imageUrl}
                            alt="About DR Enterprise"
                            className="about-image"
                        />
                    </div>
                    <div className="experience-badge">
                        <span className="years">{content.experienceYears}</span>
                        <span className="label" style={{ whiteSpace: 'pre-line' }}>{content.experienceLabel}</span>
                    </div>
                </motion.div>

                <motion.div
                    className="about-content-col"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h4 className="about-section-label">WHO WE ARE</h4>
                    <h2 className="section-heading">{content.heading}</h2>
                    <p className="about-description">
                        {content.description}
                    </p>

                    {content.description2 && (
                        <p className="about-description">
                            {content.description2}
                        </p>
                    )}

                    <div className="features-grid">
                        {content.features && content.features.map((feature, i) => {
                            const IconComponent = iconMap[feature.icon] || Shield;
                            return (
                                <div className="feature-item" key={i}>
                                    <IconComponent className="feature-icon" size={24} />
                                    <div>
                                        <h5>{feature.title}</h5>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;