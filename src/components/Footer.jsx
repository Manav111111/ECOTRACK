import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-charcoal dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-emerald rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold">EcoTrack</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Monitor your daily carbon emissions, track your progress, and take climate-positive actions 
              with our smart carbon footprint tracker.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((platform) => (
                <div
                  key={platform}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald transition-colors"
                >
                  <span className="text-sm">🔗</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'How It Works', 'Dashboard', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-emerald transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-emerald transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 EcoTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer