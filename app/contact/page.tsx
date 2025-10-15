'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaClock, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app, this would send to an API
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-gradient text-white py-28 px-4 relative overflow-hidden">
        {/* Animated decorative blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
          <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 right-1/3 w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold mb-6 shadow-lg animate-scale-in">
            <FaEnvelope />
            We're Here to Help
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl font-display">Get in Touch</h1>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-gray-100 font-light max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4 font-display">Send us a Message</h2>
                <p className="text-lg text-gray-600 font-light">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              
              {submitted && (
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl mb-8 animate-scale-in shadow-2xl border-2 border-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <span className="text-2xl text-green-600">✓</span>
                    </div>
                    <span className="font-bold text-lg">Thank you! We'll get back to you soon.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
                <div className="group">
                  <label className="block text-sm font-bold mb-2 text-gray-700 group-focus-within:text-primary-600 transition-colors">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all duration-200 hover:border-gray-300 text-gray-900 placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-bold mb-2 text-gray-700 group-focus-within:text-primary-600 transition-colors">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all duration-200 hover:border-gray-300 text-gray-900 placeholder:text-gray-400"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-bold mb-2 text-gray-700 group-focus-within:text-primary-600 transition-colors">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all duration-200 hover:border-gray-300 text-gray-900 bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="courses">Course Information</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold mb-2 text-gray-700 group-focus-within:text-primary-600 transition-colors">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all duration-200 hover:border-gray-300 text-gray-900 placeholder:text-gray-400 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-pink-600 hover:from-primary-700 hover:to-pink-700 text-white font-bold py-5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 text-lg group"
                >
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right space-y-6">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4 font-display">Contact Information</h2>
                <p className="text-lg text-gray-600 font-light">Reach out through any of these channels.</p>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-5 bg-white/90 backdrop-blur-sm p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Email Us</h3>
                    <p className="text-primary-600 font-semibold hover:underline cursor-pointer">info@klauros.com</p>
                    <p className="text-primary-600 font-semibold hover:underline cursor-pointer">support@klauros.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-white/90 backdrop-blur-sm p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Call Us</h3>
                    <p className="text-gray-700 font-semibold text-lg">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500 font-medium flex items-center gap-2 mt-1">
                      <FaClock className="text-xs" />
                      Mon-Fri, 9am-6pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-white/90 backdrop-blur-sm p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">Visit Us</h3>
                    <p className="text-gray-700 font-medium">123 Dance Street</p>
                    <p className="text-gray-700 font-medium">Miami, FL 33101</p>
                    <p className="text-gray-700 font-medium">United States</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-primary-600 via-red-600 to-pink-600 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full opacity-10 transform translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full opacity-10 transform -translate-x-10 translate-y-10"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 font-display">Follow Us on Social Media</h3>
                  <p className="mb-6 text-gray-100 font-light">Stay connected and follow our dance journey!</p>
                  <div className="flex gap-4">
                    <a href="#" className="w-14 h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                      <FaInstagram className="text-2xl" />
                    </a>
                    <a href="#" className="w-14 h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                      <FaFacebook className="text-2xl" />
                    </a>
                    <a href="#" className="w-14 h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                      <FaYoutube className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-gradient-to-br from-primary-50 via-pink-50 to-purple-50 rounded-3xl p-8 border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200 rounded-full filter blur-2xl opacity-30"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold gradient-text mb-3 font-display">Frequently Asked Questions</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed font-light">
                    Check out our FAQ page for quick answers to common questions about courses, 
                    payments, and technical issues.
                  </p>
                  <a href="/faq" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-pink-600 hover:from-primary-700 hover:to-pink-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg group">
                    Visit FAQ 
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

