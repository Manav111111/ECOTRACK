import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Input Your Activities",
      description: "Enter your daily transportation, electricity, diet & waste.",
      icon: "📝",
      color: "bg-emerald-600"
    },
    {
      number: "02",
      title: "Get Your Carbon Score",
      description: "AI calculates your footprint and EcoScore.",
      icon: "🔢",
      color: "bg-blue-500"
    },
    {
      number: "03",
      title: "Track Progress",
      description: "Interactive charts show your improvements.",
      icon: "📊",
      color: "bg-purple-500"
    },
    {
      number: "04",
      title: "Reduce Emissions",
      description: "Follow suggestions to improve your impact.",
      icon: "🌱",
      color: "bg-green-500"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-charcoal py-12">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-charcoal dark:text-white mb-4">
            How EcoTrack Works
          </h1>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-green-400 transform -translate-x-1/2"></div>

          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center py-12 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>

              {/* Content */}
              <div className="lg:w-1/2 p-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}>
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-semibold text-charcoal dark:text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </div>

              {/* Icon */}
              <div className="lg:w-1/2 flex justify-center">
                <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center text-white text-4xl`}>
                  {step.icon}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default HowItWorks
