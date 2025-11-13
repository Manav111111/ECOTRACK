import React, { useState } from 'react'
import CarbonChart from '../components/CarbonChart'
import ActivityInput from '../components/ActivityInput'

const Dashboard = () => {
  const [carbonData, setCarbonData] = useState({
    transportation: 2.4,
    electricity: 1.8,
    diet: 2.1,
    waste: 0.7
  })

  const ecoScore = 72
  const totalCarbon = Object.values(carbonData).reduce((a, b) => a + b, 0)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-charcoal py-8">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-3xl font-bold text-charcoal dark:text-white mb-2">Your Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Track and reduce your impact</p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <p className="text-gray-500 dark:text-gray-400">Total Carbon Today</p>
            <p className="text-4xl font-bold text-charcoal dark:text-white">{totalCarbon} kg</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <p className="text-gray-500 dark:text-gray-400">EcoScore</p>
            <p className="text-4xl font-bold text-blue-500">{ecoScore}/100</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <p className="text-gray-500 dark:text-gray-400">Weekly Change</p>
            <p className="text-4xl font-bold text-green-500">-12%</p>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold text-charcoal dark:text-white mb-4">
              Carbon Breakdown
            </h2>
            <CarbonChart data={carbonData} />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold text-charcoal dark:text-white mb-4">
              Log Activities
            </h2>
            <ActivityInput onDataUpdate={setCarbonData} />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Dashboard
