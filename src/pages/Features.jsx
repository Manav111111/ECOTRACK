import React from 'react'

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Real-time Carbon Tracker',
      description: 'Monitor your carbon footprint in real-time with our advanced tracking system',
      color: 'from-emerald to-green-400'
    },
    {
      icon: '📈',
      title: 'EcoScore Dashboard',
      description: 'Visualize your environmental impact with beautiful charts and progress indicators',
      color: 'from-soft-blue to-blue-400'
    },
    {
      icon: '💡',
      title: 'Personalized Action Tips',
      description: 'Receive AI-powered suggestions tailored to your lifestyle and consumption patterns',
      color: 'from-purple-500 to-purple-400'
    },
    {
      icon: '👥',
      title: 'Community Challenges',
      description: 'Join eco-friendly challenges and compete with friends to reduce your carbon footprint',
      color: 'from-orange-500 to-orange-400'
    },
    {
      icon: '🏆',
      title: 'Achievement System',
      description: 'Earn badges and rewards for your sustainable choices and milestones',
      color: 'from-pink-500 to-pink-400'
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Access your carbon data and insights on any device, anywhere',
      color: 'from-indigo-500 to-indigo-400'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-charcoal py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-4">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how EcoTrack helps you monitor, understand, and reduce your carbon footprint
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className={`p-1 bg-gradient-to-r ${feature.color} rounded-t-2xl`}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 h-full">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features