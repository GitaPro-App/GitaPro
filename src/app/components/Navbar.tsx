"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-between p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        {/* GitaNow Logo/Title - Centered */}
        <div className="flex-grow text-center">
          <Link href="/" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6 text-xl">
            GitaNow
          </Link>
        </div>

        {/* Menu Button for Login/Sign Up */}
        <div className="relative">
          <button
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
            onClick={() => setShowMenu(!showMenu)}
          >
            Menu
          </button>

          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute right-0 w-40 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-700">
              <div className="py-2">
                {/* Updated Link for Login */}
                <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                  Login
                </Link>
                <Link href="/signup" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}