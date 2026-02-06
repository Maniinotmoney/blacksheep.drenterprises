import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const RevealSection = ({ children, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                rotateX: 10, /* Slight 3D tilt */
                rotateZ: 5,  /* Requested 5deg rotation */
                scale: 0.95,
                y: 50
            }}
            animate={isInView ? {
                opacity: 1,
                rotateX: 0,
                rotateZ: 0,
                scale: 1,
                y: 0
            } : {}}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] // Custom ease-out (cubic-bezier)
            }}
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        >
            {children}
        </motion.div>
    );
};

export default RevealSection;
