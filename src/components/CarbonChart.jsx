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
          '#059669', // emerald-600
          '#3B82F6', // blue-500
          '#84CC16', // green-500
          '#6366F1', // indigo-500
        ],
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#374151',
          padding: 16,
          usePointStyle: true
        }
      }
    },
    cutout: '60%'
  }

  return (
    <div className="h-80">
      <Doughnut data={chartData} options={options} />
    </div>
  )
}

export default CarbonChart
