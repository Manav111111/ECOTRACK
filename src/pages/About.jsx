import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-charcoal py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-6">
            About EcoTrack
          </h1>
          <div className="w-24 h-1 bg-emerald mx-auto mb-8"></div>
        </div>

        <div className="space-y-12">
          {/* Mission Section */}
          <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">🎯</span>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-charcoal dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong className="text-emerald">"Empowering everyone to take control of their environmental impact."</strong>
                  <br /><br />
                  We believe that individual actions, when multiplied by millions, can create monumental change. 
                  EcoTrack provides the tools and insights needed to make informed decisions about your carbon footprint.
                </p>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-soft-blue rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">🔭</span>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-charcoal dark:text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong className="text-soft-blue">"A sustainable future driven by awareness and action."</strong>
                  <br /><br />
                  We envision a world where carbon tracking is as common as checking the weather, 
                  and where every individual has the power to contribute to global sustainability efforts 
                  through conscious daily choices.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section>
            <h2 className="text-3xl font-bold text-charcoal dark:text-white text-center mb-8">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: '🌱',
                  title: 'Sustainability First',
                  description: 'Every feature and decision is made with environmental impact in mind'
                },
                {
                  icon: '🔍',
                  title: 'Transparency',
                  description: 'Clear, honest data and methodologies you can trust'
                },
                {
                  icon: '🚀',
                  title: 'Innovation',
                  description: 'Leveraging technology to make sustainability accessible to all'
                },
                {
                  icon: '🤝',
                  title: 'Community',
                  description: 'Building a global network of environmentally conscious individuals'
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About