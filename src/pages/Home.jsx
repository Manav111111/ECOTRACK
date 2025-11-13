import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Smart Carbon Footprint Tracker
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Monitor your daily carbon emissions, track your progress, and take climate-positive actions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="bg-white text-emerald px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Tracking
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-white dark:bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal dark:text-white mb-12">
            Why Choose EcoTrack?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📊',
                title: 'Real-time Tracking',
                description: 'Monitor your carbon emissions in real-time across all activities'
              },
              {
                icon: '🌱',
                title: 'Personalized Insights',
                description: 'Get AI-powered suggestions to reduce your environmental impact'
              },
              {
                icon: '🏆',
                title: 'Gamified Experience',
                description: 'Earn badges and compete in eco-challenges with friends'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home