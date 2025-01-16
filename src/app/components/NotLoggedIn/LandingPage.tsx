import React from "react";
import Image from "next/image";
import Link from "next/link";

import RotatingText from "./HeadLine";

export default function LandingPage() {


  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Cosmic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3A41C6] via-[#4C2C96] to-[#512888] opacity-90"></div>
      
      {/* Hand-drawn Cosmic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cosmic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B0D3EE" />
              <stop offset="50%" stopColor="#A5B0E3" />
              <stop offset="100%" stopColor="#BEAFDD" />
            </linearGradient>
          </defs>
          <path 
            d="M0,0 C30,40 70,40 100,0 V100 H0 Z" 
            fill="url(#cosmic-gradient)"
            className="opacity-20"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-8 max-w-5xl mx-auto">
        <RotatingText />
        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
          Discover the teachings of the Gita like never before. Personalize
          your experience, track your progress, and enjoy gamified learning
          designed just for you.
        </p>
        
        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/signup">
            <button className="px-8 py-4 bg-[#FFB703] text-black font-bold text-lg rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all border-2 border-white/20">
              Get Started Now
            </button>
          </Link>
        </div>

        {/* Hand-drawn Cosmic Illustration */}
        <div className="relative mt-12 max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
          <Image
            src="/krishna.png"
            alt="Interactive Learning"
            width={600}
            height={400}
            className="relative z-10 rounded-3xl shadow-lg transform hover:scale-105 transition-all"
          />
        </div>
      </div>
    </header>

  );
}
