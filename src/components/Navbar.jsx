import React from 'react';

const Navbar = () => {
    return (
        <div>
          <nav className=" border-b border-gray-800 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="text-2xl font-bold tracking-tight"
            >
              Book<span className="text-emerald-400">Vibe</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <a 
              href="/" 
              className=" hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </a>
            <a 
              href="/listed-books" 
              className=" hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Listed Books
            </a>
            <a 
              href="/pages-to-read" 
              className=" hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Pages to Read
            </a>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button 
              className="px-4 py-2 text-sm font-medium  hover:text-blue-500 transition-colors"
            >
              Sign In
            </button>
            <button 
              className="px-5 py-2 text-sm font-medium bg-emerald-600  rounded-lg hover:bg-emerald-700 transition-colors shadow-sm"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-500 hover:bg-gray-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* You can toggle these icons with state in React */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu - shown/hidden with React state */}
      {/* Example structure (add useState to control visibility) */}
      {/* <div className="md:hidden border-t border-gray-800 bg-gray-900"> ... */ }
    </nav>
        </div>
    );
};

export default Navbar;