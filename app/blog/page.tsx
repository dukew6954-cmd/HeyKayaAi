'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Clock, User, Search, Mail } from 'lucide-react'
import Link from 'next/link'

const featuredPosts = [
  {
    id: 1,
    title: 'How AI Receptionists Are Transforming Small Business Customer Service',
    excerpt: 'Discover how small businesses are leveraging AI receptionists to provide 24/7 customer support and never miss important calls.',
    author: 'Sarah Chen',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Customer Service',
    image: '/blog/ai-receptionist-small-business.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'The Complete Guide to Setting Up Your First AI Receptionist',
    excerpt: 'Step-by-step instructions for implementing an AI receptionist in your business, from initial setup to advanced customization.',
    author: 'Mike Rodriguez',
    date: '2024-01-12',
    readTime: '8 min read',
    category: 'Implementation',
    image: '/blog/setup-guide.jpg'
  },
  {
    id: 3,
    title: '10 Ways AI Receptionists Save Time and Money for Your Business',
    excerpt: 'Explore the concrete benefits and ROI that businesses are seeing from implementing AI receptionist solutions.',
    author: 'Emily Watson',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Business Tips',
    image: '/blog/save-time-money.jpg'
  }
]

const recentPosts = [
  {
    id: 4,
    title: 'Integrating Your AI Receptionist with Popular Business Tools',
    excerpt: 'Learn how to connect your AI receptionist with CRM systems, calendar apps, and other essential business tools.',
    author: 'David Kim',
    date: '2024-01-08',
    readTime: '7 min read',
    category: 'Integrations'
  },
  {
    id: 5,
    title: 'The Future of Customer Service: AI vs Human Receptionists',
    excerpt: 'A balanced look at when to use AI receptionists and when human touch is still essential for customer service.',
    author: 'Lisa Thompson',
    date: '2024-01-05',
    readTime: '4 min read',
    category: 'Industry Trends'
  },
  {
    id: 6,
    title: 'Best Practices for Training Your AI Receptionist',
    excerpt: 'Tips and strategies for customizing your AI receptionist to match your brand voice and handle specific business needs.',
    author: 'Alex Johnson',
    date: '2024-01-03',
    readTime: '6 min read',
    category: 'Implementation'
  },
  {
    id: 7,
    title: 'Case Study: How a Law Firm Increased Client Satisfaction by 40%',
    excerpt: 'Real-world example of how a legal practice improved client communication and appointment booking with AI assistance.',
    author: 'Rachel Green',
    date: '2024-01-01',
    readTime: '5 min read',
    category: 'Case Studies'
  },
  {
    id: 8,
    title: 'Understanding AI Receptionist Pricing: What to Expect',
    excerpt: 'Breakdown of AI receptionist costs, pricing models, and how to choose the right plan for your business needs.',
    author: 'Tom Wilson',
    date: '2023-12-28',
    readTime: '4 min read',
    category: 'Business Tips'
  },
  {
    id: 9,
    title: 'Security and Privacy Considerations for AI Receptionists',
    excerpt: 'Important security measures and privacy considerations when implementing AI receptionist technology.',
    author: 'Maria Garcia',
    date: '2023-12-25',
    readTime: '7 min read',
    category: 'Security'
  }
]

const categories = [
  { name: 'Customer Service', count: 12 },
  { name: 'Implementation', count: 8 },
  { name: 'Business Tips', count: 15 },
  { name: 'Integrations', count: 6 },
  { name: 'Industry Trends', count: 10 },
  { name: 'Case Studies', count: 5 },
  { name: 'Security', count: 4 }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 mb-6">
              AI Receptionist{' '}
              <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay updated with the latest trends, tips, and insights on AI-powered customer service 
              and business communication automation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-gray-600">
              Our most popular and insightful articles on AI receptionists and business communication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <Calendar className="w-8 h-8 text-teal-600" />
                    </div>
                    <p className="text-sm">Featured Image</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/blog/${post.id}`}>
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

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Categories */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}
                        className="flex items-center justify-between text-gray-600 hover:text-teal-600 transition-colors duration-200"
                      >
                        <span>{category.name}</span>
                        <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6 border border-teal-100">
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Stay Updated
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Get the latest insights delivered to your inbox.
                    </p>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent mb-3"
                    />
                    <Button size="sm" className="w-full">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Recent Posts */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold font-display text-gray-900 mb-4">
                  Recent Articles
                </h2>
              </motion.div>

              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="mt-4 lg:mt-0 lg:ml-6" asChild>
                        <Link href={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Button variant="outline" size="lg">
                  Load More Articles
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
