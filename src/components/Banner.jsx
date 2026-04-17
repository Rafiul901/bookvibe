import React from 'react';

const Banner = () => {
    return (
        <div className="w-full flex items-center justify-center py-16 bg-gradient-to-r from-indigo-600 via-blue-700 to-blue-700">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl p-10 text-center max-w-2xl">
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Build Something Amazing 🚀
        </h1>

        <p className="text-white/80 text-lg mb-6">
          Start creating modern and beautiful UI with Tailwind CSS today.
        </p>

        <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300">
          Get Started
        </button>

      </div>
    </div>
    );
};

export default Banner;