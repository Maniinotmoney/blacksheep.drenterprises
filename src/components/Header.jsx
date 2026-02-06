import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap';
import { Menu, X, ChevronDown, Rocket, ArrowUpRight } from 'lucide-react';
import '../styles/Header.css';
import '../styles/MobileMenu.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // GSAP Refs
    const headerRef = useRef(null);
    const navRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const gridRef = useRef(null);

    // Initial Entry Animation
    useEffect(() => {
        // Handle Scroll Style
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        // GSAP Entry
        const header = headerRef.current;
        if (header) {
            gsap.set(header, { y: -100, opacity: 0 });
            gsap.to(header, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.2
            });
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mobile Menu Animation (Grid Flip)
    useEffect(() => {
        const menu = mobileMenuRef.current;
        const grid = gridRef.current;
        if (!menu || !grid) return;

        const blocks = grid.querySelectorAll('.mobile-grid-block');
        const items = menu.querySelectorAll('.mobile-link-item, .mobile-close-btn-grid');

        if (isMobileMenuOpen) {
            // Open Sequence
            gsap.set(menu, { display: 'flex', opacity: 1 });
            gsap.set(blocks, { opacity: 0, scale: 0 });
            gsap.set(items, { opacity: 0, y: 30 }); // Start slightly lower for list items

            const tl = gsap.timeline();

            // 1. Grid Flip In
            tl.to(blocks, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                stagger: {
                    grid: [5, 6], // Rows, Cols
                    from: "random",
                    amount: 0.8
                },
                ease: "back.out(1.7)"
            })
                // 2. Items Fade In (List)
                .to(items, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.08, // Slightly faster stagger for list
                    ease: "power2.out"
                }, "-=0.4");

        } else {
            // Close Sequence
            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.set(menu, { display: 'none' });
                }
            });

            // 1. Items Fade Out
            tl.to(items, {
                opacity: 0,
                y: 20,
                duration: 0.3,
                stagger: 0.05
            })
                // 2. Grid Flip Out
                .to(blocks, {
                    opacity: 0,
                    scale: 0,
                    duration: 0.4,
                    stagger: {
                        grid: [5, 6],
                        from: "random",
                        amount: 0.6
                    },
                    ease: "power2.in"
                }, "-=0.2");
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                ref={headerRef}
                className={`header ${isScrolled ? 'scrolled' : ''}`}
            >
                <div className="container header-container">
                    {/* Left Section */}
                    <div className="header-left">
                        <button className="search-btn"></button>
                        <nav className="desktop-nav" ref={navRef}>
                            <ul>
                                <li>
                                    <a href="#services" className="nav-link-with-icon">
                                        WHAT WE DO <ChevronDown size={14} />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Center Section (Logo) */}
                    <div className="header-center">
                        <a href="#home" className="logo">
                            <div className="logo-stack">
                                <span className="logo-top">DR ENTERPRISE LLC</span>
                                <span className="logo-bottom">TRUCKING & LOGISTICS</span>
                                <div className="logo-divider"></div>
                            </div>
                        </a>
                    </div>

                    {/* Right Section */}
                    <div className="header-right">
                        <nav className="desktop-nav">
                            <ul>
                                <li>
                                    <a href="#track-record" className="nav-link-with-icon">
                                        ABOUT US <ChevronDown size={14} />
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <a href="#contact" className="btn btn-contact">
                            CONTACT
                        </a>

                        {!isMobileMenuOpen && (
                            <button
                                className="mobile-menu-btn"
                                onClick={() => setIsMobileMenuOpen(true)}
                            >
                                <Menu size={24} />
                            </button>
                        )}
                    </div>
                </div>
            </header>

            {/* GSAP Mobile Menu Overlay - Portaled to Body */}
            {ReactDOM.createPortal(
                <div
                    ref={mobileMenuRef}
                    className="mobile-menu-overlay-gsap"
                >
                    {/* Grid Background */}
                    <div ref={gridRef} className="mobile-grid-bg">
                        {[...Array(30)].map((_, i) => (
                            <div key={i} className="mobile-grid-block"></div>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="mobile-menu-content">
                        {/* Close Button */}
                        <button
                            className="mobile-close-btn-grid"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        <div className="mobile-list-container">
                            {[
                                { name: "Home", href: "#home" },
                                { name: "About", href: "#track-record" },
                                { name: "What We Do", href: "#services" },
                                { name: "Our Work", href: "#work" },
                                { name: "Blog", href: "#blog" },
                                { name: "Contact", href: "#contact" }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="mobile-link-item"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a href="#contact" className="mobile-link-item cta-link" onClick={() => setIsMobileMenuOpen(false)}>
                                Let's Talk <ArrowUpRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default Header;
