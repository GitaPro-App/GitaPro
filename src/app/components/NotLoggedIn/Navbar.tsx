"use client";

import React, { useState, useEffect } from 'react';
import '../style.css'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="bg-purple-600 fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href = '/'>
              <button>
                <div className="flex-shrink-0 px-1">
                  <h1 className="text-3xl font-bold text-white">GitaPro</h1>
                </div>  
              </button>
            </Link>

            

            {/* Menu Items */}
            {!isSmallScreen ? (
              <div className="flex items-center space-x-4">
                
                <Link href="/about" className="text-white hover:text-gray-200 transition-colors">About Us</Link>
                <Link href="/#" className="text-white hover:text-gray-200 transition-colors">Features</Link>
                <Link href="/api/auth/login" className="text-white hover:text-gray-200 transition-colors">Login</Link>
                <Link href="/api/auth/signup" className="text-white hover:text-gray-200 transition-colors">Get Started</Link>
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

                {/* Dropdown Menu - Positioned relative to button */}
                {isMenuOpen && (
                  <div className="absolute top-16 right-0 w-64 bg-purple-900/95 backdrop-blur-sm rounded-lg shadow-xl transform transition-all duration-300 ease-in-out z-40">
                    <div className="py-4">
                      <div className="space-y-6 px-4">
                        <div className="space-y-3">
                          <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors block py-1">About Us</Link></li>
                            <li><Link href="/#" className="text-gray-300 hover:text-white transition-colors block py-1">Features</Link></li>
                            <li><Link href="/api/auth/login" className="text-gray-300 hover:text-white transition-colors block py-1">Login</Link></li>
                            <Link href="/api/auth/signup" className="text-gray-300 hover:text-white transition-colors block py-1">Get Started</Link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && isSmallScreen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
}