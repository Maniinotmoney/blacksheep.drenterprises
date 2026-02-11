
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../sanityClient';
import '../styles/BlogSection.css';



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
            setPosts(data);
        }).catch(err => console.error("Error fetching blog posts:", err));
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
                                                src={urlFor(post.mainImage).width(800).height(500).url()}
                                                alt={post.title}
                                                className="blog-image"
                                            />
                                        )}
                                    </div>
                                    <div className="blog-content">
                                        <p className="blog-date">{formatDate(post.publishedAt)}</p>
                                        <h3 className="blog-title">{post.title}</h3>
                                        <p className="blog-excerpt">{post.excerpt}</p>
                                        {post.postUrl && <span className="read-more">Read More →</span>}
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
