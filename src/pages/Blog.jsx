import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Clock } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import './Blog.css'

const Blog = () => {
    const heroRef = useRef(null)
    
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    const featuredPost = {
        title: 'The Future of Enterprise Software: Trends to Watch in 2025',
        excerpt: 'Discover the key technology trends shaping enterprise software development and how businesses can prepare for the future.',
        date: 'Dec 25, 2024',
        readTime: '8 min read',
        category: 'Industry Insights',
    }

    const posts = [
        {
            title: '10 Tips for Successful Digital Transformation',
            excerpt: 'Learn how to navigate your digital transformation journey with these proven strategies.',
            date: 'Dec 20, 2024',
            category: 'Digital Transformation',
            readTime: '5 min read',
            emoji: '🚀',
        },
        {
            title: 'The Future of CRM Systems',
            excerpt: 'Exploring emerging trends in customer relationship management technology.',
            date: 'Dec 15, 2024',
            category: 'Technology',
            readTime: '6 min read',
            emoji: '💡',
        },
        {
            title: 'Building Scalable Web Applications',
            excerpt: 'Best practices for creating web apps that grow with your business.',
            date: 'Dec 10, 2024',
            category: 'Development',
            readTime: '7 min read',
            emoji: '⚡',
        },
        {
            title: 'UI/UX Design Principles for 2025',
            excerpt: 'Stay ahead with the latest design trends and user experience best practices.',
            date: 'Dec 5, 2024',
            category: 'Design',
            readTime: '4 min read',
            emoji: '🎨',
        },
        {
            title: 'Cloud Migration Strategies',
            excerpt: 'A comprehensive guide to moving your infrastructure to the cloud.',
            date: 'Nov 30, 2024',
            category: 'Cloud',
            readTime: '9 min read',
            emoji: '☁️',
        },
        {
            title: 'Agile vs Waterfall: Which is Right for You?',
            excerpt: 'Comparing project management methodologies for different scenarios.',
            date: 'Nov 25, 2024',
            category: 'Project Management',
            readTime: '5 min read',
            emoji: '📊',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
        }
    }

    return (
        <div className="blog-page">
            {/* Hero Section */}
            <section ref={heroRef} className="blog-page__hero">
                <div className="blog-page__hero-bg">
                    <div className="blog-page__hero-gradient"></div>
                    <motion.div 
                        className="blog-page__hero-orb blog-page__hero-orb--1"
                        style={{ y: heroY }}
                    />
                    <motion.div 
                        className="blog-page__hero-orb blog-page__hero-orb--2"
                        style={{ y: heroY }}
                    />
                </div>

                <motion.div className="container" style={{ opacity: heroOpacity }}>
                    <div className="blog-page__hero-content">
                        <motion.div
                            className="blog-page__badge"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <BookOpen size={16} />
                            <span>Knowledge Hub</span>
                        </motion.div>

                        <motion.h1
                            className="blog-page__title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <span className="blog-page__title-gradient">Blog</span> & Insights
                        </motion.h1>

                        <motion.p
                            className="blog-page__subtitle"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Expert insights on technology, business, and digital innovation. 
                            Stay updated with the latest trends and best practices.
                        </motion.p>
                    </div>
                </motion.div>
            </section>

            {/* Posts Section */}
            <section className="blog-page__section">
                <div className="container">
                    {/* Featured Post */}
                    <motion.div 
                        className="blog-page__featured"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="blog-page__featured-card">
                            <div className="blog-page__featured-image">
                                <div className="blog-page__featured-image-placeholder">📰</div>
                            </div>
                            <div className="blog-page__featured-content">
                                <span className="blog-page__featured-badge">Featured</span>
                                <h2 className="blog-page__featured-title">{featuredPost.title}</h2>
                                <p className="blog-page__featured-excerpt">{featuredPost.excerpt}</p>
                                <div className="blog-page__featured-meta">
                                    <span>{featuredPost.date}</span>
                                    <span>•</span>
                                    <span>{featuredPost.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <SectionTitle
                        eyebrow="Latest Articles"
                        title="Fresh Perspectives on Tech"
                        centered
                        gradient
                    />

                    {/* Posts Grid */}
                    <motion.div
                        className="blog-page__grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {posts.map((post, index) => (
                            <motion.article
                                key={index}
                                className="blog-page__card"
                                variants={itemVariants}
                            >
                                <div className="blog-page__card-image">
                                    {post.emoji}
                                </div>
                                <div className="blog-page__card-content">
                                    <span className="blog-page__card-category">{post.category}</span>
                                    <h3 className="blog-page__card-title">{post.title}</h3>
                                    <p className="blog-page__card-excerpt">{post.excerpt}</p>
                                    <div className="blog-page__card-meta">
                                        <span>{post.date}</span>
                                        <span className="blog-page__card-read-time">
                                            <Clock size={14} />
                                            {post.readTime}
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

        </div>
    )
}

export default Blog
