import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col font-inter">
      {/* Header */}

      <header className="bg-gray-900 p-4 shadow-lg flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          StreamChat
        </Link>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/login"
                className="text-lg text-gray-300 hover:text-white transition-colors duration-200"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signUp"
                className="text-lg text-gray-300 hover:text-white transition-colors duration-200"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to="/chat"
                className="text-lg text-gray-300 hover:text-white transition-colors duration-200"
              >
                Chat
              </Link>
            </li>
            <li>
              <Link
                to="/apply"
                className="text-lg text-gray-300 hover:text-white transitions-colors duration-200"
              >
                Apply Streamer
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6 flex flex-col items-center justify-center">
        {children} 
      </main>

      <footer className="bg-gray-900 p-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} StreamChat App. All rights reserved.
      </footer>
    </div>
  );
}

export default Layout;
