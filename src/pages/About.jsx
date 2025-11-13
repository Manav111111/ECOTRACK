import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-charcoal py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-6">
            About EcoTrack
          </h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
        </div>

        {/* Mission */}
        <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-12">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🎯</span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-charcoal dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                <strong className="text-emerald-600">"Empowering everyone to take control of their environmental impact."</strong>
                <br /><br />
                We believe that individual actions, when multiplied by millions, can create monumental change.
              </p>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-12">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🔭</span>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-charcoal dark:text-white mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                <strong className="text-blue-500">"A sustainable future driven by awareness and action."</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-3xl font-bold text-charcoal dark:text-white text-center mb-8">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '🌱', title: 'Sustainability First', desc: 'Every feature is designed with the planet in mind.' },
              { icon: '🔍', title: 'Transparency', desc: 'Clear, honest data that you can trust.' },
              { icon: '🚀', title: 'Innovation', desc: 'Using technology to simplify sustainability.' },
              { icon: '🤝', title: 'Community', desc: 'Building a global eco-conscious movement.' }
            ].map((val, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg">
                <div className="text-3xl mb-4">{val.icon}</div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-2">{val.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

export default About
