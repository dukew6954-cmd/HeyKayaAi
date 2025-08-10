'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Message {
  id: string
  text: string
  sender: 'user' | 'kaya'
  timestamp: Date
}

// ============================================================================
// CUSTOMIZE KAYA FOR YOUR BUSINESS
// ============================================================================
// Update these values to match your actual business information:

const BUSINESS_CONFIG = {
  // Your business details
  businessName: "HeyKayaAI",
  businessType: "AI receptionist service",
  location: "Phoenix, Arizona",
  
  // Contact information
  email: "hello@heykaya.ai",
  phone: "1-800-HEYKAYA",
  
  // Pricing - CORRECTED TO YOUR ACTUAL PRICING
  pricing: {
    starter: {
      price: "$29.99",
      period: "month",
      features: ["unlimited calls", "24/7 availability", "basic integrations"]
    },
    professional: {
      price: "$59.99", 
      period: "month",
      features: ["everything in starter", "advanced integrations", "priority support"]
    },
    growth: {
      price: "$149.99",
      period: "month", 
      features: ["everything in professional", "custom features", "dedicated support"]
    }
  },
  
  // Trial information
  trialPeriod: "30-day",
  trialFeatures: "no credit card required",
  
  // Setup information
  setupTime: "24 hours",
  setupProcess: "We handle everything for you",
  
  // Key features
  features: [
    "24/7 call answering",
    "Appointment booking",
    "Text confirmations", 
    "Bilingual support",
    "Integration with booking systems"
  ]
}

// ============================================================================
// KAYA'S RESPONSES - CUSTOMIZE THESE TOO
// ============================================================================

const kayaResponses = {
  greeting: [
    `Hi there! I'm Kaya, your AI assistant. How can I help you learn about ${BUSINESS_CONFIG.businessName} today?`,
    `Hello! I'm Kaya, ready to answer any questions about our ${BUSINESS_CONFIG.businessType}. What would you like to know?`,
    `Hey! I'm Kaya. I'm here to help you understand how ${BUSINESS_CONFIG.businessName} can transform your business. What's on your mind?`
  ],
  pricing: [
    `We offer three flexible pricing tiers: Starter at ${BUSINESS_CONFIG.pricing.starter.price}/${BUSINESS_CONFIG.pricing.starter.period}, Professional at ${BUSINESS_CONFIG.pricing.professional.price}/${BUSINESS_CONFIG.pricing.professional.period}, and Growth at ${BUSINESS_CONFIG.pricing.growth.price}/${BUSINESS_CONFIG.pricing.growth.period}. All plans include our ${BUSINESS_CONFIG.trialPeriod} free trial!`,
    `Our pricing starts at just ${BUSINESS_CONFIG.pricing.starter.price}/${BUSINESS_CONFIG.pricing.starter.period} for the Starter plan. We also have Professional (${BUSINESS_CONFIG.pricing.professional.price}/${BUSINESS_CONFIG.pricing.professional.period}) and Growth (${BUSINESS_CONFIG.pricing.growth.price}/${BUSINESS_CONFIG.pricing.growth.period}) options. Want to know more about any specific plan?`,
    `We have affordable plans starting at ${BUSINESS_CONFIG.pricing.starter.price}/${BUSINESS_CONFIG.pricing.starter.period}. All include ${BUSINESS_CONFIG.pricing.starter.features.join(', ')}, and our ${BUSINESS_CONFIG.trialPeriod} free trial. Which plan interests you most?`
  ],
  setup: [
    `Setup is super easy! ${BUSINESS_CONFIG.setupProcess} - just provide your phone number and preferences, and we'll have you ready in ${BUSINESS_CONFIG.setupTime}. No technical work required!`,
    `We take care of the entire setup process. You just give us your phone number and tell us about your business, and we'll have everything configured within ${BUSINESS_CONFIG.setupTime}.`,
    `Setup is completely hands-off for you! We handle all the technical work and integration. You'll be up and running in ${BUSINESS_CONFIG.setupTime} with zero effort on your end.`
  ],
  features: [
    `${BUSINESS_CONFIG.businessName} ${BUSINESS_CONFIG.features.join(', ')}. We're bilingual, friendly, and never take breaks!`,
    `Our AI can ${BUSINESS_CONFIG.features.join(', ')}, and even transfer calls when needed. We work around the clock!`,
    `We ${BUSINESS_CONFIG.features.join(', ')}, and integrate with your existing booking systems.`
  ],
  trial: [
    `Yes! We offer a ${BUSINESS_CONFIG.trialPeriod} free trial with ${BUSINESS_CONFIG.trialFeatures}. You can start using ${BUSINESS_CONFIG.businessName} immediately and cancel anytime.`,
    `Absolutely! Try ${BUSINESS_CONFIG.businessName} free for ${BUSINESS_CONFIG.trialPeriod}. ${BUSINESS_CONFIG.trialFeatures}, and you can cancel at any time. Ready to get started?`,
    `Of course! Start your ${BUSINESS_CONFIG.trialPeriod} free trial today. ${BUSINESS_CONFIG.trialFeatures}, and you can cancel anytime. Want to begin now?`
  ],
  contact: [
    `You can reach us at ${BUSINESS_CONFIG.email} or call ${BUSINESS_CONFIG.phone}. We're based in ${BUSINESS_CONFIG.location} and here to help!`,
    `Contact us at ${BUSINESS_CONFIG.email} or ${BUSINESS_CONFIG.phone}. We're located in ${BUSINESS_CONFIG.location} and available to answer all your questions!`,
    `Get in touch at ${BUSINESS_CONFIG.email} or call ${BUSINESS_CONFIG.phone}. We're in ${BUSINESS_CONFIG.location} and ready to help you get started!`
  ],
  default: [
    "That's a great question! Let me help you find the right information. Could you tell me more about what you're looking for?",
    "I'd love to help with that! Can you give me a bit more detail so I can provide the most helpful answer?",
    "Great question! I want to make sure I give you the best answer. Could you provide a bit more context?"
  ]
}

export function KayaChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Hi! I'm Kaya, your AI assistant. How can I help you learn about ${BUSINESS_CONFIG.businessName} today?`,
      sender: 'kaya',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getKayaResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Pricing questions - expanded keywords
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('plan') || 
        lowerMessage.includes('tier') || lowerMessage.includes('how much') || lowerMessage.includes('pricing') ||
        lowerMessage.includes('monthly') || lowerMessage.includes('pay') || lowerMessage.includes('fee') ||
        lowerMessage.includes('subscription') || lowerMessage.includes('rate')) {
      return kayaResponses.pricing[Math.floor(Math.random() * kayaResponses.pricing.length)]
    }
    
    // Greeting questions
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return kayaResponses.greeting[Math.floor(Math.random() * kayaResponses.greeting.length)]
    }
    
    // Setup questions
    if (lowerMessage.includes('setup') || lowerMessage.includes('install') || lowerMessage.includes('configure') || 
        lowerMessage.includes('ready') || lowerMessage.includes('get started') || lowerMessage.includes('onboard')) {
      return kayaResponses.setup[Math.floor(Math.random() * kayaResponses.setup.length)]
    }
    
    // Feature questions
    if (lowerMessage.includes('feature') || lowerMessage.includes('do') || lowerMessage.includes('can') || 
        lowerMessage.includes('work') || lowerMessage.includes('what') || lowerMessage.includes('how does')) {
      return kayaResponses.features[Math.floor(Math.random() * kayaResponses.features.length)]
    }
    
    // Trial questions
    if (lowerMessage.includes('trial') || lowerMessage.includes('free') || lowerMessage.includes('start') ||
        lowerMessage.includes('test') || lowerMessage.includes('demo')) {
      return kayaResponses.trial[Math.floor(Math.random() * kayaResponses.trial.length)]
    }
    
    // Contact questions
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || 
        lowerMessage.includes('call') || lowerMessage.includes('reach') || lowerMessage.includes('support')) {
      return kayaResponses.contact[Math.floor(Math.random() * kayaResponses.contact.length)]
    }
    
    return kayaResponses.default[Math.floor(Math.random() * kayaResponses.default.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const kayaResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getKayaResponse(userMessage.text),
        sender: 'kaya',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, kayaResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white p-4 rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Kaya</h3>
                  <p className="text-sm text-teal-100">AI Assistant</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-teal-500' 
                        : 'bg-gradient-to-r from-teal-500 to-emerald-500'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-teal-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about HeyKayaAI..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
