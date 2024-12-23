"use client";

import React from 'react';
import Image from 'next/image';
import '../style.css';
import RotatingText from './HeadLine';

export default function LandingPage() {
  return (
    <div className=" min-h-screen mx-auto max-w-6xl">
      {/* Hero Section with Rotating Text */}
      <div className="container mx-auto px-4 pt-20 text-center">
        <div className="scale-125 pt-3">
          <RotatingText />
        </div>
    
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-4 pt-4"> 
          <button className="bg-purple-700 text-white px-8 py-4 rounded-lg font-medium hover:bg-purple-800 transition-all">
            START YOUR JOURNEY
          </button>
          <button className="border-2 border-purple-700 text-purple-700 px-8 py-4 rounded-lg font-medium hover:bg-purple-50 transition-all">
            EXPLORE FEATURES →
          </button>
        </div>

        <p className="text-gray-600 mt-4 mb-12">Begin your spiritual journey for free, no commitments</p>

          

          {/* Main Features */}
          <div className="space-y-20">

             {/* Personalized Learning */}
             <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-orange-100 rounded-2xl p-6 shadow-xl order-2 md:order-1">
                <Image src="/bg3.png" alt="AI-Powered Learning" width={600} height={400} className="rounded-xl" />
              </div>
              <div className="text-left space-y-6 order-1 md:order-2">
                <h3 className="text-sm font-bold text-orange-600">PERSONALIZED JOURNEY</h3>
                <h2 className="text-4xl font-bold">Lessons catered to your personality</h2>
                <p className="text-gray-600">
                  GitaPro understands your approach to life, spiritual interests, and goals to create a personalized path through the Gita's teachings.
                </p>
                <div className="bg-orange-100 p-6 rounded-xl">
                  <p className="text-orange-600 font-bold text-3xl">4X</p>
                  <p className="text-gray-600">faster comprehension compared to traditional methods</p>
                </div>
              </div>
            </div>

    
            {/* Progress Tracking */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-6">
                <h3 className="text-sm font-bold text-green-700">PROGRESS TRACKING</h3>
                <h2 className="text-4xl font-bold">Transform everday learning into</h2>
                <p className="text-gray-600">
                  Track your spiritual progress with interactive learning modules. Set goals, maintain streaks, and see your understanding deepen over time with our progress metrics.
                </p>
                <div className="bg-green-100 p-6 rounded-xl">
                  <p className="text-green-700 font-bold text-3xl">78%</p>
                  <p className="text-gray-600">of users maintain daily practice with our tracking tools</p>
                </div>
              </div>
              <div className="bg-green-100 rounded-2xl p-6 shadow-xl">
                <Image src="/bg3.png" alt="Progress Dashboard" width={600} height={400} className="rounded-xl" />
              </div>
            </div>


             {/* Spiritual Collaboration */}
             <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-6">
                <h3 className="text-sm font-bold text-purple-700">LEARNING COLLABORATION</h3>
                <h2 className="text-4xl font-bold">Connect with a classroom local to you</h2>
                <p className="text-gray-600">
                  Join study groups, participate in guided discussions, and share insights with fellow students. Experience the power of collective wisdom in your spiritual journey.
                </p>
                <div className="bg-purple-100 p-6 rounded-xl">
                  <p className="text-purple-700 font-bold text-3xl">92%</p>
                  <p className="text-gray-600">of users report deeper understanding through community discussions</p>
                </div>
              </div>
              <div className="bg-purple-100 rounded-2xl p-6 shadow-xl">
                <Image src="/bg3.png" alt="Community Features" width={600} height={400} className="rounded-xl" />
              </div> 

              <div className="space-y-32"></div>
            </div>
          </div>
        </div> 
        
    </div>
  );
}
