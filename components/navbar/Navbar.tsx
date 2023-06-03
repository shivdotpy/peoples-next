import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">Peoples App</div>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href={'/about'}
                  className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href={'/contact'}
                  className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
