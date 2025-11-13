import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you! We'll get back to you soon.")
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-charcoal py-12">
      <div className="max-w-4xl mx-auto px-4">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-charcoal dark:text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-charcoal dark:text-white mb-6">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-emerald-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-emerald-500"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-emerald-500"
              ></textarea>

              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            
            {[
              { icon: "📧", title: "Email", value: "hello@ecotrack.com" },
              { icon: "📞", title: "Phone", value: "+1 555 123 4567" },
              { icon: "🏢", title: "Office", value: "123 Green Street, Eco City" }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl flex space-x-4 shadow">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div>
                  <p className="text-charcoal dark:text-white font-semibold">{item.title}</p>
                  <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
