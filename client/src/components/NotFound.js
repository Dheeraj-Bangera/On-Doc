// NotFound.js

import React from 'react';
import dog from '../assets/404.png'

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#FEFAE0]">
      <div className="text-center">
        <h1 className="text-4xl font-[Knewave] font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg  text-gray-600 mb-8">Oops! Page not found.</p>
        <button
          className="bg-[#7AB2B2] hover:bg-[#7AB2B2]/50 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
        <img src={dog} alt='image'/>
      </div>
    </div>
  );
};

export default NotFound;
