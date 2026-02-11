import { client, urlFor } from '../sanityClient';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import '../styles/Services.css';
import service1 from '../assets/truck-road.jpeg';
import service2 from '../assets/container-boxes.jpg';
import service3 from '../assets/logistics.jpg';

const Card = ({ i, title, description, image, features }) => {

    const getImageUrl = (img) => {
        if (!img) return '';
        if (typeof img === 'string') return img;
        return urlFor(img).width(600).url();
    };

    return (
        <div className="cardContainer">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="service-card-redesign"
            >
                <div className="card-image-wrapper">
                    <div className="inner">
                        <img src={getImageUrl(image)} alt={title} />
                    </div>
                    <div className="card-overlay"></div>
                </div>

                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>

                    <div className="features-list">
                        {features && features.map((feature, j) => (
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
    const [services, setServices] = useState([]);

    const defaultServices = [
        {
            _id: 'default1',
            title: "Trucking & Carrier",
            description: "Reliable transport across California with our dedicated fleet.",
            image: service1,
            features: ["Drayage & Intermodal", "Regional & Interstate", "10 Trucks / 10 Drivers"]
        },
        {
            _id: 'default2',
            title: "Container Yard",
            description: "Secure lot services located just blocks from the Port of Oakland.",
            image: service2,
            features: ["Container Storage", "Short & Long-term", "Importer / Exporter", "24/7 Security"]
        },
        {
            _id: 'default3',
            title: "Bonded Transport",
            description: "Authorized to move goods through customs efficiently and securely.",
            image: service3,
            features: ["Customs Bonded Carrier", "Seamless Port Ops", "Regulatory Compliance", "Efficient Processing"]
        }
    ];

    useEffect(() => {
        const query = `*[_type == "services"] | order(_createdAt asc) {
            _id,
            title,
            description,
            image,
            features
        }`;

        client.fetch(query).then(data => {
            setServices(data);
        }).catch(err => console.error("Error fetching services:", err));
    }, []);

    const displayServices = services.length > 0 ? services : defaultServices;

    return (
        <section id="services" className="services-section" ref={container}>
            <div className="container">
                <div className="center-text">
                    <h2 className="section-title text-dark">Our Expertise</h2>
                    <p className="section-subtitle-text">Delivering excellence in every mile and every container.</p>
                </div>

                <div className="services-stack-wrapper">
                    {displayServices.map((service, i) => {
                        return <Card
                            key={service._id || i}
                            i={i}
                            {...service}
                        />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
