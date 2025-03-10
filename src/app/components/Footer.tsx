"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#0d0b2b] w-full py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 text-white">
          {/* Company Info */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-semibold ">GitaPro</h2>
            <p className="text-gray-200 text-sm">a DharmicVentures company</p>
            <p className="text-gray-200 text-sm">
              © 2024 GitaPro. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-semibold">Legal</h2>
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/terms" className="text-gray-200 hover:text-white transition-colors duration-200 text-sm"> Terms of Service</Link>
              <Link 
                href="/" 
                className="text-gray-200 hover:text-white transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-semibold">Support</h2>
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-200 hover:text-white transition-colors duration-200 text-sm"
              >
                Contact Us
              </Link>
              <Link 
                href="/" 
                className="text-gray-200 hover:text-white transition-colors duration-200 text-sm"
              >
                Help Center
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
