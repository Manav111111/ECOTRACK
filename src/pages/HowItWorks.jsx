import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Input Your Activities',
      description: 'Enter your daily transportation, electricity usage, diet choices, and waste production',
      icon: '📝',
      color: 'bg-emerald'
    },
    {
      number: '02',
      title: 'Get Your Carbon Score',
      description: 'Our AI calculates your carbon footprint and provides a comprehensive EcoScore',
      icon: '🔢',
      color: 'bg-soft-blue'
    },
    {
      number: '03',
      title: 'Track Progress',
      description: 'Monitor your improvements with interactive charts and weekly reports',
      icon: '📊',
      color: 'bg-purple-500'
    },
    {
      number: '04',
      title: 'Reduce Emissions',
      description: 'Follow personalized AI suggestions to lower your environmental impact',
      icon: '🌱',
      color: 'bg-light-green'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-charcoal py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-4">
            How EcoTrack Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Start your journey to a sustainable lifestyle in just four simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald to-light-green transform -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}>
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-semibold text-charcoal dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="lg:w-1/2 flex justify-center">
                  <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center text-white text-4xl transform hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks