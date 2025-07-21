import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Badge } from './ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { 
  Search, 
  MessageCircle, 
  Mail, 
  Phone, 
  FileText, 
  Video, 
  Download,
  ExternalLink,
  HelpCircle,
  Book,
  Zap,
  Shield,
  Users,
  Send
} from 'lucide-react'

const faqData = [
  {
    question: "How do I reset my password?",
    answer: "You can reset your password by clicking the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password."
  },
  {
    question: "How do I add new users to my organization?",
    answer: "Go to the Users section in your dashboard and click the 'Add User' button. Fill in the required information and set the appropriate permissions for the new user."
  },
  {
    question: "Can I export my data?",
    answer: "Yes, you can export your data in various formats including CSV, JSON, and PDF. Go to Settings > Data Export to access these options."
  },
  {
    question: "How do I upgrade my plan?",
    answer: "Visit the Billing section in your account settings to view available plans and upgrade options. Changes take effect immediately upon confirmation."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use industry-standard encryption and security measures to protect your data. All data is encrypted in transit and at rest, and we undergo regular security audits."
  }
]

const supportResources = [
  {
    title: "Getting Started Guide",
    description: "Learn the basics of using our platform",
    icon: <Book size={20} />,
    type: "Documentation",
    link: "#"
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides for common tasks",
    icon: <Video size={20} />,
    type: "Video",
    link: "#"
  },
  {
    title: "API Documentation",
    description: "Complete reference for developers",
    icon: <FileText size={20} />,
    type: "Documentation",
    link: "#"
  },
  {
    title: "Best Practices",
    description: "Tips and tricks for optimal usage",
    icon: <Zap size={20} />,
    type: "Guide",
    link: "#"
  },
  {
    title: "Security Guide",
    description: "Understanding our security measures",
    icon: <Shield size={20} />,
    type: "Documentation",
    link: "#"
  },
  {
    title: "Community Forum",
    description: "Connect with other users and experts",
    icon: <Users size={20} />,
    type: "Community",
    link: "#"
  }
]

export const HelpScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [contactForm, setContactForm] = useState({
    subject: '',
    message: '',
    priority: 'medium'
  })

  const filteredFAQ = faqData.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Help & Support</h2>
        <p className="text-gray-600 mt-1">Get help and find answers to your questions</p>
      </div>

      {/* Search */}
      <Card className="shadow-sm border border-gray-200">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search for help articles, FAQs, or tutorials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-base h-12"
            />
          </div>
        </CardContent>
      </Card>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-sm text-gray-600 mb-4">Get instant help from our support team</p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Chat</Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="text-sm text-gray-600 mb-4">Send us a detailed message</p>
            <Button variant="outline" className="w-full">Send Email</Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Phone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
            <p className="text-sm text-gray-600 mb-4">Speak directly with our team</p>
            <Button variant="outline" className="w-full">Call Now</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* FAQ Section */}
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
              <HelpCircle size={20} />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              {filteredFAQ.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {filteredFAQ.length === 0 && (
              <p className="text-gray-500 text-center py-4">
                No FAQ items found matching your search.
              </p>
            )}
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
              <Send size={20} />
              Contact Support
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Subject</label>
              <Input
                placeholder="Describe your issue briefly"
                value={contactForm.subject}
                onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Priority</label>
              <div className="flex gap-2">
                {['low', 'medium', 'high'].map((priority) => (
                  <Button
                    key={priority}
                    variant={contactForm.priority === priority ? "default" : "outline"}
                    size="sm"
                    onClick={() => setContactForm(prev => ({ ...prev, priority }))}
                  >
                    {priority.charAt(0).toUpperCase() + priority.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <Textarea
                placeholder="Describe your issue in detail..."
                rows={4}
                value={contactForm.message}
                onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Resources */}
      <Card className="shadow-sm border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg text-gray-900">Help Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportResources.map((resource, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {resource.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900">{resource.title}</h4>
                      <ExternalLink size={14} className="text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {resource.type}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Status */}
      <Card className="shadow-sm border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg text-gray-900">System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium text-gray-900">All Systems Operational</span>
              </div>
              <span className="text-sm text-green-700">Last updated: 2 minutes ago</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="flex items-center justify-between p-2">
                <span className="text-gray-600">API Services</span>
                <span className="text-green-600 font-medium">Operational</span>
              </div>
              <div className="flex items-center justify-between p-2">
                <span className="text-gray-600">Database</span>
                <span className="text-green-600 font-medium">Operational</span>
              </div>
              <div className="flex items-center justify-between p-2">
                <span className="text-gray-600">File Storage</span>
                <span className="text-green-600 font-medium">Operational</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
