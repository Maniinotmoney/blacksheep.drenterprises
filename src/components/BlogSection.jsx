import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../sanityClient';
import '../styles/BlogSection.css';


import blogImg1 from '../assets/logistics.jpg';
import blogImg2 from '../assets/red-truck.jpg';
import blogImg3 from '../assets/ship-container.jpeg';
import blogImg4 from '../assets/trucks-upperview.jpg';
import blogImg5 from '../assets/two-trucks-on-road.jpg';

const defaultPosts = [
    {
        _id: 'def-1',
        title: 'Optimizing Supply Chains in 2024',
        excerpt: 'Discover the latest strategies for streamlining your logistics and reducing costs in the modern economy.',
        mainImage: blogImg1,
        publishedAt: new Date().toISOString(),
        postUrl: '#'
    },
    {
        _id: 'def-2',
        title: 'The Future of Freight Transport',
        excerpt: 'How autonomous trucks and AI are reshaping the landscape of global freight transport.',
        mainImage: blogImg2,
        publishedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        postUrl: '#'
    },
    {
        _id: 'def-3',
        title: 'Sustainable Shipping Practices',
        excerpt: 'Implementing eco-friendly practices in your supply chain to reduce carbon footprint.',
        mainImage: blogImg3,
        publishedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
        postUrl: '#'
    },
    {
        _id: 'def-4',
        title: 'Navigating Global Trade Regulations',
        excerpt: 'Essential tips for ensuring compliance and efficiency in international shipping.',
        mainImage: blogImg4,
        publishedAt: new Date(Date.now() - 86400000 * 10).toISOString(),
        postUrl: '#'
    },
    {
        _id: 'def-5',
        title: 'Technology in Modern Trucking',
        excerpt: 'From GPS tracking to automated dispatch, see how tech drives the industry forward.',
        mainImage: blogImg5,
        publishedAt: new Date(Date.now() - 86400000 * 15).toISOString(),
        postUrl: '#'
    }
];

const BlogSection = () => {
    const [posts, setPosts] = useState([]);
    const [width, setWidth] = useState(0);
    const carouselRef = React.useRef();

    useEffect(() => {
        const query = `*[_type == "blog"] | order(publishedAt desc) {
            _id,
            title,
            slug,
            mainImage,
            publishedAt,
            excerpt,
            postUrl
        }`;

        client.fetch(query).then(data => {
            if (data && data.length > 0) {
                setPosts(data);
            } else {
                setPosts(defaultPosts);
            }
        }).catch(err => {
            console.error("Error fetching blog posts:", err);
            setPosts(defaultPosts);
        });
    }, []);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, [posts]);

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };


    const getImgSrc = (post) => {
        if (!post.mainImage) return '';
        if (typeof post.mainImage === 'string') return post.mainImage;
        return urlFor(post.mainImage).width(800).height(500).url();
    };

    if (posts.length === 0) return null;

    return (
        <section id="blog" className="blog-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h4 className="section-label">LATEST UPDATES</h4>
                    <h2 className="section-title">Industry Insights</h2>
                </motion.div>

                <motion.div
                    className="blog-carousel"
                    ref={carouselRef}
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="inner-carousel"
                    >
                        {posts.map((post) => (
                            <motion.div
                                key={post._id}
                                className="blog-card"
                            >
                                <a
                                    href={post.postUrl || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none', color: 'inherit', display: 'contents' }}
                                >
                                    <div className="blog-image-wrapper">
                                        {post.mainImage && (
                                            <img
                                                src={getImgSrc(post)}
                                                alt={post.title}
                                                className="blog-image"
                                            />
                                        )}
                                    </div>
                                    <div className="blog-content">
                                        <p className="blog-date">{formatDate(post.publishedAt)}</p>
                                        <h3 className="blog-title">{post.title}</h3>
                                        <p className="blog-excerpt">{post.excerpt}</p>
                                        <span className="read-more">Read More →</span>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogSection;
