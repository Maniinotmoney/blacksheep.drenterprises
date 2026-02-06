
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../sanityClient';
import '../styles/BlogSection.css'; // We will create this next

const BlogSection = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const query = `*[_type == "blog"] | order(publishedAt desc)[0...3] {
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

    // Helper to format date
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

                <div className="blog-grid">
                    {posts.map((post, index) => (
                        <motion.a
                            href={post.postUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={post._id}
                            className="blog-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            style={{ textDecoration: 'none', color: 'inherit', cursor: post.postUrl ? 'pointer' : 'default' }}
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
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
