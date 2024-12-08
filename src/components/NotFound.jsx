import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white from-gray-50 to-gray-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-800 animate-bounce">
            4<span className="text-orange-500">0</span>4
          </h1>
        </div>
        
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-40 h-40 bg-orange-100 rounded-full mx-auto mb-4 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.5 10a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z"/>
                  <path d="M8 7a1 1 0 100 2 1 1 0 000-2zM12 7a1 1 0 100 2 1 1 0 000-2z"/>
                  <path d="M7.5 12a.5.5 0 01.5-.5h4a.5.5 0 010 1H8a.5.5 0 01-.5-.5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Looks like this page has gone missing! Don't worry, our chefs are cooking up something special for you.
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors duration-200 transform hover:scale-105"
        >
          <span>Back to Home</span>
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </Link>

        <div className="mt-12 text-gray-500">
          <p>© {new Date().getFullYear()} BiteRight. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
