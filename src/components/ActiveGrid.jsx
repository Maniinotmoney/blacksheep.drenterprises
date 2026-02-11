import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom';

const ActiveGrid = ({ isOpen, onClose }) => {

    const lines = ["Mani", "x", "Flamy"];


    const emails = ["maniiiiikant@gmail.com", "flamywithyash@gmail.com"];

    const getRandomDirection = () => {
        const x = Math.random() < 0.5 ? -1000 : 1000;
        const y = Math.random() < 0.5 ? -1000 : 1000;
        return {
            x: Math.random() * x,
            y: Math.random() * y
        };
    };

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, backdropFilter: "blur(0px)", backgroundColor: 'rgba(0,0,0,0)' }}
                    animate={{ opacity: 1, backdropFilter: "blur(5px)", backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                    exit={{ opacity: 0, backdropFilter: "blur(0px)", backgroundColor: 'rgba(0,0,0,0)' }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        overflow: 'hidden'
                    }}
                >

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        style={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '1.5rem',
                            fontFamily: 'sans-serif',
                            marginBottom: '20px',
                            textTransform: 'uppercase',
                            letterSpacing: '3px'
                        }}
                    >
                        Developed By
                    </motion.div>


                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                        {lines.map((line, lineIndex) => (
                            <div key={lineIndex} style={{ display: 'flex', justifyContent: 'center' }}>
                                {line.split("").map((char, charIndex) => {
                                    const dir = getRandomDirection();
                                    return (
                                        <motion.span
                                            key={`${lineIndex}-${charIndex}`}
                                            initial={{ opacity: 0, x: dir.x, y: dir.y, scale: 0.5, rotate: Math.random() * 360 }}
                                            animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
                                            exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
                                            transition={{
                                                duration: 1.5,
                                                ease: [0.34, 1.56, 0.64, 1],
                                                delay: 0.2 + (Math.random() * 0.5)
                                            }}
                                            style={{
                                                color: char === 'x' ? '#c41212ff' : 'white',
                                                fontSize: char === 'x' ? '15rem' : '5.2rem',
                                                position: char === 'x' ? 'absolute' : 'relative',
                                                bottom: char === 'x' ? '35.5%' : 'auto',
                                                zIndex: (char.toLowerCase() === 'm' || char.toLowerCase() === 'a') ? 10 : (char === 'x' ? 5 : 1),


                                                textShadow: char === 'x' ? '0 0 20px rgba(0, 0, 0, 0.5)' : '0 0 20px rgba(0, 0, 0, 0.33)',
                                                fontWeight: '900',
                                                lineHeight: '1.5',

                                                display: 'inline-block',
                                                whiteSpace: 'pre',
                                                margin: '0 2px'
                                            }}
                                        >
                                            {char}
                                        </motion.span>
                                    );
                                })}
                            </div>
                        ))}
                    </div>


                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        style={{
                            marginTop: '40px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '10px'
                        }}
                    >
                        {emails.map((email, i) => (
                            <a
                                key={i}
                                href={`mailto:${email}`}
                                style={{
                                    color: 'rgba(255, 255, 255, 0.95)',
                                    textDecoration: 'none',
                                    fontSize: '1.2rem',
                                    fontFamily: 'sans-serif',
                                    letterSpacing: '1px',
                                    borderBottom: '1px solid rgba(54, 90, 207, 0.54)',
                                    paddingBottom: '2px'
                                }}
                            >
                                {email}
                            </a>
                        ))}
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ActiveGrid;
