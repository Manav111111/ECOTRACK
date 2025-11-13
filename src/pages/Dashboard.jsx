import React, { useState, useEffect } from 'react'
import CarbonChart from '../components/CarbonChart'
import ActivityInput from '../components/ActivityInput'

const Dashboard = () => {
  const [carbonData, setCarbonData] = useState({
    transportation: 2.4,
    electricity: 1.8,
    diet: 2.1,
    waste: 0.7
  })

  const [ecoScore, setEcoScore] = useState(72)
  const [suggestions, setSuggestions] = useState([
    'Try carpooling 2 days a week to reduce transportation emissions',
    'Switch to LED bulbs to save 0.3 kg CO2 per day',
    'Consider meat-free Mondays to reduce diet footprint'
  ])

  const totalCarbon = Object.values(carbonData).reduce((a, b) => a + b, 0)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-charcoal py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-charcoal dark:text-white">Your Carbon Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Monitor and reduce your environmental impact</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Total Carbon Today</p>
                <p className="text-3xl font-bold text-charcoal dark:text-white">{totalCarbon} kg</p>
              </div>
              <div className="w-12 h-12 bg-emerald/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400">EcoScore</p>
                <p className="text-3xl font-bold text-charcoal dark:text-white">{ecoScore}/100</p>
              </div>
              <div className="w-12 h-12 bg-soft-blue/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Weekly Change</p>
                <p className="text-3xl font-bold text-green-500">-12%</p>
              </div>
              <div className="w-12 h-12 bg-light-green/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">📉</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Carbon Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-charcoal dark:text-white mb-4">
              Carbon Emissions Breakdown
            </h2>
            <CarbonChart data={carbonData} />
          </div>

          {/* Activity Input */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-charcoal dark:text-white mb-4">
              Log Your Activities
            </h2>
            <ActivityInput onDataUpdate={setCarbonData} />
          </div>

          {/* Suggestions */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-charcoal dark:text-white mb-4">
              Personalized Suggestions
            </h2>
            <div className="space-y-4">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-emerald/10 rounded-lg border border-emerald/20"
                >
                  <span className="text-emerald text-lg">💡</span>
                  <p className="text-charcoal dark:text-white">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard