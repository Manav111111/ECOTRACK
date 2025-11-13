import React, { useState } from 'react'

const ActivityInput = ({ onDataUpdate }) => {
  const [activities, setActivities] = useState({
    transportation: '',
    electricity: '',
    diet: '',
    waste: ''
  })

  const handleInputChange = (category, value) => {
    const newActivities = {
      ...activities,
      [category]: value
    }
    setActivities(newActivities)
    
    // Simulate carbon calculation
    const calculatedData = {
      transportation: value ? 2.4 : 0,
      electricity: value ? 1.8 : 0,
      diet: value ? 2.1 : 0,
      waste: value ? 0.7 : 0
    }
    onDataUpdate(calculatedData)
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          🚗 Transportation (km driven)
        </label>
        <input
          type="number"
          placeholder="e.g., 15 km"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald dark:bg-gray-700 dark:text-white"
          onChange={(e) => handleInputChange('transportation', e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          💡 Electricity Usage (kWh)
        </label>
        <input
          type="number"
          placeholder="e.g., 8.5 kWh"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald dark:bg-gray-700 dark:text-white"
          onChange={(e) => handleInputChange('electricity', e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          🍽️ Diet Choices
        </label>
        <select
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald dark:bg-gray-700 dark:text-white"
          onChange={(e) => handleInputChange('diet', e.target.value)}
        >
          <option value="">Select your diet type</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="meat-occasional">Meat - Occasional</option>
          <option value="meat-regular">Meat - Regular</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          🗑️ Waste Production (kg)
        </label>
        <input
          type="number"
          placeholder="e.g., 1.2 kg"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald dark:bg-gray-700 dark:text-white"
          onChange={(e) => handleInputChange('waste', e.target.value)}
        />
      </div>

      <button className="w-full bg-emerald text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
        Calculate Carbon Footprint
      </button>
    </div>
  )
}

export default ActivityInput