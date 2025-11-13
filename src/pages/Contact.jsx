import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-charcoal py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions about EcoTrack? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-charcoal dark:text-white mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: '📧',
                    title: 'Email',
                    value: 'hello@ecotrack.com',
                    link: 'mailto:hello@ecotrack.com'
                  },
                  {
                    icon: '📞',
                    title: 'Phone',
                    value: '+1 (555) 123-4567',
                    link: 'tel:+15551234567'
                  },
                  {
                    icon: '🏢',
                    title: 'Office',
                    value: '123 Green Street, Eco City, EC 12345',
                    link: '#'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald/20 rounded-full flex items-center justify-center">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal dark:text-white">{item.title}</p>
                      <a
                        href={item.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-emerald transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-6">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {[
                  { name: 'Twitter', icon: '🐦', color: 'hover:bg-blue-400' },
                  { name: 'Facebook', icon: '📘', color: 'hover:bg-blue-600' },
                  { name: 'Instagram', icon: '📷', color: 'hover:bg-pink-500' },
                  { name: 'LinkedIn', icon: '💼', color: 'hover:bg-blue-700' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110`}
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact