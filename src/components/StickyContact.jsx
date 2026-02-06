import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck } from 'lucide-react';
import drLogo from '../assets/dr-logo-full.png';

const StickyContact = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToContact = () => {
        // Try to find the footer or contact section
        const contactSection = document.querySelector('.footer-redesign') || document.getElementById('contact') || document.getElementById('footer');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="sticky-contact-wrapper"
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    onClick={scrollToContact}
                >
                    <div className="sticky-pulse"></div>
                    <div className="sticky-inner">
                        {/* Use logo if available, or icon */}
                        <img src={drLogo} alt="Contact" className="sticky-logo" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const styles = `
    .sticky-contact-wrapper {
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 1000;

        cursor: pointer;
        width: 70px;
        height: 70px;
    }

    .sticky-inner {
        width: 100%;
        height: 100%;
        background-color: var(--accent-color);
        border-radius: 50%;
        box-shadow: 0 10px 30px rgba(0, 86, 210, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 2;
        border: 2px solid var(--accent-color);
        overflow: visible;
        padding: 10px;
    }

    .sticky-logo {
        width: 100%;
        height: auto;
        transform: scale(5);
        object-fit: contain;
    }

    .sticky-pulse {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: var(--accent-color);
        opacity: 0.4;
        z-index: 1;
        animation: pulse-ring 2s infinite;
    }

    @keyframes pulse-ring {
        0% { transform: scale(0.9); opacity: 0.7; }
        50% { transform: scale(1.3); opacity: 0; }
        100% { transform: scale(0.9); opacity: 0; }
    }

    @media (max-width: 768px) {
        .sticky-contact-wrapper {
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
        }
    }
`;

// Inject styles directly for simplicity in this component
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

export default StickyContact;
