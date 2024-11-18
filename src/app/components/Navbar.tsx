// Navbar.jsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const THEMES = {
  light: {
    nav: 'bg-white',
    text: 'text-gray-800',
    shadow: 'shadow',
    dropdown: 'bg-white',
    hover: 'hover:bg-gray-200'
  },
  dark: {
    nav: 'bg-gray-600',
    text: 'text-gray-200',
    shadow: 'shadow-dark',
    dropdown: 'bg-gray-700',
    hover: 'hover:bg-gray-700'
  },
  forest: {
    nav: 'bg-emerald-800',
    text: 'text-emerald-100',
    shadow: 'shadow-emerald',
    dropdown: 'bg-emerald-800',
    hover: 'hover:bg-emerald-700'
  },
  ocean: {
    nav: 'bg-blue-800',
    text: 'text-blue-100',
    shadow: 'shadow-blue',
    dropdown: 'bg-blue-800',
    hover: 'hover:bg-blue-700'
  }
};

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showThemes, setShowThemes] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setCurrentTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const changeTheme = (theme) => {
    // Remove all theme classes
    Object.keys(THEMES).forEach(themeName => {
      document.documentElement.classList.remove(themeName);
    });
    // Add new theme class
    document.documentElement.classList.add(theme);
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
    // Dispatch theme change event
    window.dispatchEvent(new CustomEvent('themeChange', { 
      detail: { theme: theme }
    }));
    setShowThemes(false);
  };

  return (
    <nav className={`${THEMES[currentTheme].nav} ${THEMES[currentTheme].shadow} transition-colors duration-300`}>
      <div className="container flex items-center justify-between p-6 mx-auto">
        <div className="flex-grow text-center">
          <Link 
            href="/" 
            className={`${THEMES[currentTheme].text} transition-colors duration-300 transform border-b-2 border-blue-500 mx-1.5 sm:mx-6 text-xl`}
          >
            GitaNow
          </Link>
        </div>

        <div className="relative mr-4">
          <button
            className={`${THEMES[currentTheme].text} focus:outline-none flex items-center`}
            onClick={() => setShowThemes(!showThemes)}
          >
            <span className="mr-2">Theme</span>
          </button>

          {showThemes && (
            <div className={`absolute right-0 w-48 mt-2 origin-top-right ${THEMES[currentTheme].dropdown} rounded-md shadow-lg`}>
              <div className="py-2">
                {Object.keys(THEMES).map((theme) => (
                  <button
                    key={theme}
                    onClick={() => changeTheme(theme)}
                    className={`w-full text-left px-4 py-2 text-sm ${THEMES[currentTheme].text} ${THEMES[currentTheme].hover} 
                      ${currentTheme === theme ? 'bg-blue-500 text-white' : ''}`}
                  >
                    {theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className={`${THEMES[currentTheme].text} focus:outline-none`}
            onClick={() => setShowMenu(!showMenu)}
          >
            Menu
          </button>

          {showMenu && (
            <div className={`absolute right-0 w-40 mt-2 origin-top-right ${THEMES[currentTheme].dropdown} rounded-md shadow-lg`}>
              <div className="py-2">
                <Link 
                  href="/login" 
                  className={`block px-4 py-2 text-sm ${THEMES[currentTheme].text} ${THEMES[currentTheme].hover}`}
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className={`block px-4 py-2 text-sm ${THEMES[currentTheme].text} ${THEMES[currentTheme].hover}`}
                >
                  Sign Up
                </Link>
                <Link 
                  href="/learn" 
                  className={`block px-4 py-2 text-sm ${THEMES[currentTheme].text} ${THEMES[currentTheme].hover}`}
                >
                  Learn
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}