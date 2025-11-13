import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const CarbonChart = ({ data }) => {
  const chartData = {
    labels: ['Transportation', 'Electricity', 'Diet', 'Waste'],
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: [
          '#00B894', // emerald
          '#0984E3', // soft-blue
          '#A3E635', // light-green
          '#6366F1', // indigo
        ],
        borderWidth: 2,
        borderColor: '#ffffff',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          color: '#2D3436',
        },
      },
    },
    cutout: '60%',
  }

  return (
    <div className="h-80">
      <Doughnut data={chartData} options={options} />
    </div>
  )
}

export default CarbonChart