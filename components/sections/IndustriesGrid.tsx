'use client'

import { motion } from 'framer-motion'
import { Phone, Calendar, MessageSquare, Shield, Zap, Users } from 'lucide-react'

const industries = [
  {
    id: 'law-firms',
    name: 'Law Firms',
    description: 'Never miss client calls or consultations',
    painPoints: ['Missed client calls during court', 'After-hours emergency calls', 'Complex scheduling needs'],
    solutions: ['24/7 client intake', 'Emergency call routing', 'Integration with Clio'],
    tools: ['Clio', 'Calendly', 'Outlook']
  },
  {
    id: 'barbershops',
    name: 'Barbershops & Salons',
    description: 'Book appointments, not voicemails',
    painPoints: ['Busy hands during cuts', 'No-shows and cancellations', 'Walk-in management'],
    solutions: ['Hands-free booking', 'Automated confirmations', 'Waitlist management'],
    tools: ['Booksy', 'Square', 'Instagram']
  },
  {
    id: 'garage-door',
    name: 'Garage Door Repair',
    description: 'Handle emergency calls 24/7',
    painPoints: ['Emergency calls at odd hours', 'Service area routing', 'Parts availability'],
    solutions: ['Emergency call handling', 'Geographic routing', 'Inventory checks'],
    tools: ['Housecall Pro', 'QuickBooks', 'Google Maps']
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    description: 'Emergency calls answered instantly',
    painPoints: ['Water emergencies', 'After-hours calls', 'Service scheduling'],
    solutions: ['Emergency prioritization', '24/7 availability', 'Smart scheduling'],
    tools: ['Housecall Pro', 'ServiceTitan', 'QuickBooks']
  },
  {
    id: 'hvac',
    name: 'HVAC',
    description: 'Climate control for your business',
    painPoints: ['AC/heat emergencies', 'Seasonal call spikes', 'Maintenance scheduling'],
    solutions: ['Emergency response', 'Seasonal scaling', 'Preventive maintenance'],
    tools: ['Housecall Pro', 'ServiceTitan', 'QuickBooks']
  },
  {
    id: 'electricians',
    name: 'Electricians',
    description: 'Power up your customer service',
    painPoints: ['Electrical emergencies', 'Safety concerns', 'Code compliance'],
    solutions: ['Emergency prioritization', 'Safety protocols', 'Compliance tracking'],
    tools: ['Housecall Pro', 'ServiceTitan', 'QuickBooks']
  },
  {
    id: 'locksmiths',
    name: 'Locksmiths',
    description: 'Unlock better customer service',
    painPoints: ['Lockout emergencies', 'Mobile service calls', 'Security concerns'],
    solutions: ['Emergency response', 'Mobile routing', 'Security protocols'],
    tools: ['Housecall Pro', 'QuickBooks', 'Google Maps']
  },
  {
    id: 'medical',
    name: 'Medical Clinics',
    description: 'Patient care starts with the first call',
    painPoints: ['Patient scheduling', 'Insurance verification', 'Emergency calls'],
    solutions: ['HIPAA-compliant intake', 'Insurance checks', 'Emergency routing'],
    tools: ['Practice Fusion', 'Athenahealth', 'Epic']
  },
  {
    id: 'dental',
    name: 'Dental',
    description: 'Smile-worthy customer service',
    painPoints: ['Appointment scheduling', 'Insurance verification', 'Emergency calls'],
    solutions: ['Dental-specific intake', 'Insurance checks', 'Emergency routing'],
    tools: ['Dentrix', 'Eaglesoft', 'Open Dental']
  },
  {
    id: 'chiropractic',
    name: 'Chiropractic',
    description: 'Align your business with success',
    painPoints: ['Patient scheduling', 'Insurance verification', 'Treatment plans'],
    solutions: ['Chiropractic intake', 'Insurance checks', 'Treatment coordination'],
    tools: ['ChiroTouch', 'Practice Fusion', 'Athenahealth']
  },
  {
    id: 'veterinary',
    name: 'Veterinary',
    description: 'Care for pets and their owners',
    painPoints: ['Emergency pet calls', 'Appointment scheduling', 'Follow-up care'],
    solutions: ['Emergency triage', 'Pet scheduling', 'Care coordination'],
    tools: ['AVImark', 'Cornerstone', 'VetSuccess']
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Close deals, not miss calls',
    painPoints: ['Showings coordination', 'Client inquiries', 'After-hours calls'],
    solutions: ['Showing scheduling', 'Lead qualification', '24/7 availability'],
    tools: ['Follow Up Boss', 'Real Geeks', 'Zillow']
  },
  {
    id: 'cleaning',
    name: 'Cleaning Services',
    description: 'Clean up your call handling',
    painPoints: ['Service scheduling', 'Quote requests', 'Recurring appointments'],
    solutions: ['Service booking', 'Quote generation', 'Recurring scheduling'],
    tools: ['Jobber', 'Housecall Pro', 'QuickBooks']
  },
  {
    id: 'auto-repair',
    name: 'Auto Repair',
    description: 'Rev up your customer service',
    painPoints: ['Emergency towing', 'Service scheduling', 'Parts availability'],
    solutions: ['Emergency response', 'Service booking', 'Parts checking'],
    tools: ['Shopware', 'Mitchell 1', 'Alldata']
  },
  {
    id: 'spas',
    name: 'Spas & Massage',
    description: 'Relax, we\'ve got your calls',
    painPoints: ['Appointment scheduling', 'Package sales', 'Cancellation management'],
    solutions: ['Spa booking', 'Package promotion', 'Cancellation handling'],
    tools: ['Mindbody', 'Booker', 'SpaBooker']
  },
  {
    id: 'fitness',
    name: 'Fitness Studios',
    description: 'Build strength in customer service',
    painPoints: ['Class scheduling', 'Membership inquiries', 'Personal training'],
    solutions: ['Class booking', 'Membership sales', 'Training coordination'],
    tools: ['Mindbody', 'Booker', 'Zen Planner']
  },
  {
    id: 'pest-control',
    name: 'Pest Control',
    description: 'Eliminate missed calls',
    painPoints: ['Emergency infestations', 'Service scheduling', 'Follow-up visits'],
    solutions: ['Emergency response', 'Service booking', 'Follow-up coordination'],
    tools: ['Housecall Pro', 'ServiceTitan', 'QuickBooks']
  },
  {
    id: 'security',
    name: 'Security Systems',
    description: 'Secure your customer relationships',
    painPoints: ['Alarm responses', 'Installation scheduling', 'Service calls'],
    solutions: ['Alarm handling', 'Installation booking', 'Service coordination'],
    tools: ['Housecall Pro', 'ServiceTitan', 'QuickBooks']
  },
  {
    id: 'restaurants',
    name: 'Restaurants & Catering',
    description: 'Serve up better customer service',
    painPoints: ['Reservation management', 'Catering inquiries', 'Takeout orders'],
    solutions: ['Reservation booking', 'Catering coordination', 'Order management'],
    tools: ['OpenTable', 'Toast', 'Square']
  },
  {
    id: 'daycares',
    name: 'Daycares & Schools',
    description: 'Nurture your parent relationships',
    painPoints: ['Enrollment inquiries', 'Emergency calls', 'Parent communication'],
    solutions: ['Enrollment intake', 'Emergency handling', 'Parent updates'],
    tools: ['Procare', 'Brightwheel', 'Tadpoles']
  },
  {
    id: 'property-management',
    name: 'Property Management',
    description: 'Manage calls like you manage properties',
    painPoints: ['Maintenance requests', 'Tenant inquiries', 'Emergency calls'],
    solutions: ['Maintenance intake', 'Tenant support', 'Emergency response'],
    tools: ['AppFolio', 'Buildium', 'Rent Manager']
  },
  {
    id: 'it-msp',
    name: 'IT/MSP',
    description: 'Tech support for your business',
    painPoints: ['IT emergencies', 'Service tickets', 'Client communication'],
    solutions: ['Emergency triage', 'Ticket creation', 'Client updates'],
    tools: ['ConnectWise', 'Autotask', 'Kaseya']
  },
  {
    id: 'insurance',
    name: 'Insurance Agencies',
    description: 'Insure your success with better service',
    painPoints: ['Claims intake', 'Policy inquiries', 'Agent availability'],
    solutions: ['Claims handling', 'Policy support', 'Agent routing'],
    tools: ['Applied Systems', 'Vertafore', 'EZLynx']
  },
  {
    id: 'event-planners',
    name: 'Event Planners',
    description: 'Plan for success with better calls',
    painPoints: ['Event inquiries', 'Vendor coordination', 'Client communication'],
    solutions: ['Event intake', 'Vendor management', 'Client updates'],
    tools: ['Eventbrite', 'Cvent', 'Planning Pod']
  },
  {
    id: 'travel',
    name: 'Travel Agencies',
    description: 'Journey to better customer service',
    painPoints: ['Booking inquiries', 'Travel emergencies', 'Client support'],
    solutions: ['Booking assistance', 'Emergency support', 'Client care'],
    tools: ['Sabre', 'Amadeus', 'Travelport']
  },
  {
    id: 'nonprofits',
    name: 'Nonprofits',
    description: 'Serve your mission with better calls',
    painPoints: ['Donor inquiries', 'Volunteer coordination', 'Program support'],
    solutions: ['Donor support', 'Volunteer management', 'Program assistance'],
    tools: ['Salesforce', 'DonorPerfect', 'VolunteerMatch']
  }
]

export function IndustriesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {industries.map((industry, index) => (
        <motion.div
          key={industry.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-gray-100">
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                {industry.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {industry.description}
              </p>
            </div>

            {/* Pain Points */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Shield className="w-4 h-4 mr-2 text-red-500" />
                Common Challenges
              </h4>
              <ul className="space-y-2">
                {industry.painPoints.map((point, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Zap className="w-4 h-4 mr-2 text-teal-500" />
                How HeyKayaAI Helps
              </h4>
              <ul className="space-y-2">
                {industry.solutions.map((solution, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Users className="w-4 h-4 mr-2 text-blue-500" />
                Popular Integrations
              </h4>
              <div className="flex flex-wrap gap-2">
                {industry.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Effect */}
            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
