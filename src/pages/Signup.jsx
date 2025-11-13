import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-charcoal px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-charcoal dark:text-white mb-6">
          Create Account
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 
              dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 
              dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 
              dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-gray-700 dark:text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
