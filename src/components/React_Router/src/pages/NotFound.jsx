import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router DOM

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-xl mx-auto text-center py-16 sm:py-24">
        
        {/* --- 404 Code --- */}
        <p className="text-base font-semibold text-indigo-600">404 Error</p>
        
        {/* --- Main Heading --- */}
        <h1 className="mt-2 text-6xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
          Page Not Found
        </h1>
        
        {/* --- Subtext and Description --- */}
        <p className="mt-4 text-lg text-gray-500">
          Oops! It looks like you've wandered off the map.
        </p>
        <p className="mt-2 text-md text-gray-500">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* --- Visual Element Placeholder --- */}
        <div className="my-10 h-64 bg-gray-100 rounded-lg flex items-center justify-center border-dashed border-2 border-gray-300">
          <p className="text-gray-400 font-medium">
            [Insert 404 Illustration here: Lost Astronaut, Broken Link, etc.]
          </p>
        </div>

        {/* --- Action Links --- */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Go Home Button */}
          <Link
            to="/" // Link back to the home route
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition duration-150 ease-in-out"
          >
            <Home className="h-5 w-5 mr-2" aria-hidden="true" />
            Go back Home
          </Link>

          {/* Contact Support Link */}
          <a
            href="mailto:support@yourcompany.com"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition duration-150 ease-in-out"
          >
            <ArrowLeft className="h-5 w-5 mr-2 transform rotate-45" aria-hidden="true" />
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;