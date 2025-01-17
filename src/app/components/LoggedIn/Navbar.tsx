// Navbar.jsx
"use client";

import React, { useState, useEffect } from 'react';
import '../style.css'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="bg-[#3b2d5c] fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 px-1">
            <Link href = '/'>
              <button>
                <div className="flex-shrink-0 px-1">
                  <h1 className="text-3xl font-bold text-white">GitaPro</h1>
                </div>  
              </button>
            </Link>
            </div>

            {!isSmallScreen ? (
              <div className="flex items-center space-x-4">
                <ul className="flex space-x-4">
                  <li>
                    <Link href="/" className="text-white hover:text-gray-200 transition-colors">Learn</Link>
                  </li>
                  <li>
                    <Link href="/classroom" className="text-white hover:text-gray-200 transition-colors">Classrooms</Link>
                  </li>
                  <li>
                    <Link href="/settings" className="text-white hover:text-gray-200 transition-colors">Settings</Link>
                  </li>
                  <li>
                    <Link href="/api/auth/logout" className="text-white hover:text-gray-200 transition-colors">Logout</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="relative px-4">
                <button 
                  className="relative w-8 h-8 flex items-center justify-center"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Menu"
                >
                  <div className="w-6 h-6 relative">
                    <span className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                      isMenuOpen ? 'rotate-45 top-3' : 'rotate-0 top-1'
                    }`}></span>
                    <span className={`absolute h-0.5 w-6 bg-white top-3 transition-all duration-200 ${
                      isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}></span>
                    <span className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                      isMenuOpen ? '-rotate-45 top-3' : 'rotate-0 top-5'
                    }`}></span>
                  </div>
                </button>

                {isMenuOpen && (
                  <div className="absolute top-16 right-0 w-64 bg-[#1a1a4d] backdrop-blur-sm rounded-lg shadow-xl transform transition-all duration-300 ease-in-out z-40">
                    <div className="py-4">
                      <div className="space-y-6 px-4">
                        <ul className="space-y-2">
                        <li>
                          <Link href="/" className="text-white hover:text-gray-200 transition-colors">Learn</Link>
                        </li>
                        <li>
                          <Link href="/classroom" className="text-white hover:text-gray-200 transition-colors">Classrooms</Link>
                        </li>
                        <li>
                          <Link href="/settings" className="text-white hover:text-gray-200 transition-colors">Settings</Link>
                        </li>
                        <li>
                          <Link href="/api/auth/logout" className="text-white hover:text-gray-200 transition-colors">Logout</Link>
                        </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {isMenuOpen && isSmallScreen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
}