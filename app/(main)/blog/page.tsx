'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Star, TrendingUp, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const featuredPost = {
  title: "How to Get 40% More Google Reviews in 30 Days",
  excerpt: "Discover the proven strategies that helped local businesses increase their review volume by 40% in just one month. Learn how AI-powered review management can transform your online reputation.",
  author: "Sarah Johnson",
  date: "March 15, 2024",
  readTime: "8 min read",
  category: "Review Management",
  image: "/api/placeholder/600/400",
  slug: "how-to-get-40-percent-more-google-reviews"
}

const blogPosts = [
  {
    title: "The Complete Guide to Responding to Negative Reviews",
    excerpt: "Learn how to handle negative reviews professionally and turn unhappy customers into loyal advocates. Plus, discover how AI can help you respond faster and more effectively.",
    author: "Mike Chen",
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "Customer Service",
    image: "/api/placeholder/400/250",
    slug: "complete-guide-responding-negative-reviews"
  },
  {
    title: "Why Your Business Needs a Review Management Strategy",
    excerpt: "Online reviews are the new word-of-mouth. Learn why having a systematic approach to review management is crucial for business growth in 2024.",
    author: "Emily Rodriguez",
    date: "March 10, 2024",
    readTime: "5 min read",
    category: "Business Growth",
    image: "/api/placeholder/400/250",
    slug: "why-business-needs-review-management-strategy"
  },
  {
    title: "5 Common Review Management Mistakes (And How to Avoid Them)",
    excerpt: "From ignoring negative reviews to asking for reviews at the wrong time, discover the most common mistakes businesses make and how to avoid them.",
    author: "David Kim",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Best Practices",
    image: "/api/placeholder/400/250",
    slug: "5-common-review-management-mistakes"
  },
  {
    title: "How AI is Revolutionizing Review Management",
    excerpt: "Explore how artificial intelligence is transforming the way businesses collect, manage, and respond to customer reviews.",
    author: "Lisa Thompson",
    date: "March 5, 2024",
    readTime: "9 min read",
    category: "Technology",
    image: "/api/placeholder/400/250",
    slug: "how-ai-revolutionizing-review-management"
  },
  {
    title: "The ROI of Review Management: What the Numbers Say",
    excerpt: "See the real numbers behind review management ROI. Learn how businesses are measuring success and the impact on their bottom line.",
    author: "Alex Martinez",
    date: "March 3, 2024",
    readTime: "6 min read",
    category: "Analytics",
    image: "/api/placeholder/400/250",
    slug: "roi-review-management-numbers"
  },
  {
    title: "Industry Spotlight: How Salons Are Using Review Management",
    excerpt: "Discover how beauty salons and spas are leveraging review management to attract more clients and build their reputation.",
    author: "Jennifer Lee",
    date: "March 1, 2024",
    readTime: "5 min read",
    category: "Industry Insights",
    image: "/api/placeholder/400/250",
    slug: "industry-spotlight-salons-review-management"
  }
]

const categories = [
  { name: "All", count: 7, active: true },
  { name: "Review Management", count: 2 },
  { name: "Customer Service", count: 1 },
  { name: "Business Growth", count: 1 },
  { name: "Best Practices", count: 1 },
  { name: "Technology", count: 1 },
  { name: "Analytics", count: 1 },
  { name: "Industry Insights", count: 1 }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Review Management{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Blog
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Expert insights, tips, and strategies to help your business get more 5-star reviews 
              and build a stellar online reputation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="gradient" size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="/pricing">
                  Start Free Trial
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="/contact">
                  Subscribe to Newsletter
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
            <p className="text-gray-600">Our most popular and insightful content</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white mb-4">
                  {featuredPost.category}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-blue-100 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-blue-100 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Button className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-white/10 rounded-xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Star className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
                  <p className="text-blue-100">Featured Content</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-blue-600 font-medium">Blog Post</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <div className="flex items-center space-x-4">
                      <span>{post.date}</span>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Review Management Tips
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get weekly insights, tips, and strategies delivered to your inbox. 
              Join 2,000+ business owners who are getting more reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Subscribe
              </Button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get More 5-Star Reviews?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start implementing these strategies today with our AI-powered review management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/pricing">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/contact">
                Schedule Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
