import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <span className="text-xl font-bold text-white">EcoTrack</span>
            </div>

            <p className="text-gray-400 mb-4 max-w-md">
              Track your carbon emissions and take climate-positive actions using our smart footprint tracker.
            </p>

            <div className="flex space-x-4">
              {['🐦','📘','📷','💼'].map((icon,i)=>(
                <div key={i} className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition cursor-pointer">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {['Home','Features','How It Works','Dashboard','About','Contact'].map((item)=>(
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/ /g,'-')}`} className="text-gray-300 hover:text-emerald-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2">
              {['Privacy Policy','Terms of Service','Cookie Policy'].map((item)=>(
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-emerald-500">{item}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          © 2024 EcoTrack. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer
