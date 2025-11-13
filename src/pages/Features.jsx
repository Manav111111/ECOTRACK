import React from 'react'

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Real-time Carbon Tracker',
      description: 'Monitor your footprint in real time.',
      color: 'from-emerald-500 to-green-300'
    },
    {
      icon: '📈',
      title: 'EcoScore Dashboard',
      description: 'View insights and analytics.',
      color: 'from-blue-500 to-blue-300'
    },
    {
      icon: '💡',
      title: 'Action Tips',
      description: 'AI-powered climate suggestions.',
      color: 'from-purple-500 to-purple-300'
    },
    {
      icon: '👥',
      title: 'Community Challenges',
      description: 'Join competitions and earn badges.',
      color: 'from-orange-500 to-orange-300'
    },
    {
      icon: '🏆',
      title: 'Achievement System',
      description: 'Stay motivated with rewards.',
      color: 'from-pink-500 to-pink-300'
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Access anywhere, anytime.',
      color: 'from-indigo-500 to-indigo-300'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-charcoal py-12">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-charcoal dark:text-white mb-4">
            Powerful Features
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-xl border">
              <div className={`p-1 bg-gradient-to-r ${f.color} rounded-t-2xl`}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-2">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{f.description}</p>
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
