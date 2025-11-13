import React, { useState } from 'react'

const ActivityInput = ({ onDataUpdate }) => {
  const [activities, setActivities] = useState({
    transportation: '',
    electricity: '',
    diet: '',
    waste: ''
  })

  const handleInputChange = (category, value) => {
    const newActivities = { ...activities, [category]: value }
    setActivities(newActivities)

    const calculatedData = {
      transportation: activities.transportation ? 2.4 : 0,
      electricity: activities.electricity ? 1.8 : 0,
      diet: activities.diet ? 2.1 : 0,
      waste: activities.waste ? 0.7 : 0
    }

    onDataUpdate(calculatedData)
  }

  return (
    <div className="space-y-6">

      {/* Transportation */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          🚗 Transportation (km driven)
        </label>
        <input
          type="number"
          placeholder="e.g., 15 km"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
          bg-gray-50 dark:bg-gray-700 dark:text-white 
          focus:ring-2 focus:ring-emerald-500"
          onChange={(e) => handleInputChange('transportation', e.target.value)}
        />
      </div>

      {/* Electricity */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          💡 Electricity Usage (kWh)
        </label>
        <input
          type="number"
          placeholder="e.g., 8.5 kWh"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
          bg-gray-50 dark:bg-gray-700 dark:text-white 
          focus:ring-2 focus:ring-emerald-500"
          onChange={(e) => handleInputChange('electricity', e.target.value)}
        />
      </div>

      {/* Diet */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          🍽️ Diet Choices
        </label>
        <select
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
          bg-gray-50 dark:bg-gray-700 dark:text-white 
          focus:ring-2 focus:ring-emerald-500"
          onChange={(e) => handleInputChange('diet', e.target.value)}
        >
          <option value="">Select your diet</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="meat-occasional">Meat – Occasional</option>
          <option value="meat-regular">Meat – Regular</option>
        </select>
      </div>

      {/* Waste */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          🗑️ Waste Production (kg)
        </label>
        <input
          type="number"
          placeholder="e.g., 1.2 kg"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
          bg-gray-50 dark:bg-gray-700 dark:text-white 
          focus:ring-2 focus:ring-emerald-500"
          onChange={(e) => handleInputChange('waste', e.target.value)}
        />
      </div>

      {/* Button */}
      <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
        Calculate Carbon Footprint
      </button>

    </div>
  )
}

export default ActivityInput
