"use client";

import React, { useState } from 'react';
import './style.css'
import Link from 'next/link'


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-purple-600 fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Menu Button Container */}
            <div className="relative">
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
                <div className="absolute top-16 left-0 w-64 bg-purple-900/95 backdrop-blur-sm rounded-lg shadow-xl transform transition-all duration-300 ease-in-out z-40">
                  <div className="py-4">
                    <div className="space-y-6 px-4">
                      <div className="space-y-3">
                        <ul className="space-y-2">
                          <li>< Link href="#" className="text-gray-300 hover:text-white transition-colors block py-1">About Us</ Link></li>
                          <li>< Link href="/api/auth/login" className="text-gray-300 hover:text-white transition-colors block py-1">Login</ Link></li>
                          <li>< Link href="/api/auth/logout" className="text-gray-300 hover:text-white transition-colors block py-1">Logout</ Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="text-2xl font-bold text-white">GitaPro</h1>
            </div>

            <div className="w-10"></div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      
    </>
  );
}