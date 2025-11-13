import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="bg-white dark:bg-charcoal shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold text-charcoal dark:text-white">EcoTrack</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-emerald font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:text-emerald'
                } transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Auth Buttons */}
            <div className="hidden md:flex space-x-2">
              <button className="px-4 py-2 text-emerald font-medium hover:bg-emerald hover:text-white rounded-lg transition-colors">
                Login
              </button>
              <button className="px-4 py-2 bg-emerald text-white font-medium rounded-lg hover:bg-green-600 transition-colors">
                Sign Up
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-charcoal border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'text-emerald bg-emerald/10'
                      : 'text-gray-600 dark:text-gray-300 hover:text-emerald hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <button className="w-full text-left px-3 py-2 text-emerald font-medium rounded-md hover:bg-emerald/10">
                  Login
                </button>
                <button className="w-full text-left px-3 py-2 bg-emerald text-white font-medium rounded-md hover:bg-green-600">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar