"use client";

import React from 'react';
import Image from 'next/image';
import '../style.css';
import RotatingText from './HeadLine';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen mx-auto max-w-6xl overflow-x-hidden">
      {/* Hero Section with Rotating Text */}
      <div className="container mx-auto px-4 pt-20 text-center">
        <div className="scale-125 pt-3">
          <RotatingText />
        </div>
    
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-4 pt-6">
          <Link href="/api/auth/signup">
            <button className="bg-[#43698e] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#2c4d6e] transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              START YOUR JOURNEY
            </button>
          </Link>
          <button className="border-2 border-[#43698e] text-[#43698e] px-8 py-4 rounded-lg font-medium hover:bg-[#43698e] hover:text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            EXPLORE FEATURES →
          </button>
        </div>

        <p className="text-gray-700 mt-4 mb-12 text-lg">Begin your spiritual journey for free, no commitments</p>

        {/* Main Features */}
        <div className="space-y-20">
          {/* Personalized Learning */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#fad2ad] rounded-3xl p-6 shadow-2xl order-2 md:order-1 transform hover:scale-105 transition-all">
              <Image src="/bg3.png" alt="AI-Powered Learning" width={600} height={400} className="rounded-2xl" />
            </div>
            <div className="text-left space-y-6 order-1 md:order-2">
              <h3 className="text-sm font-bold text-[#fcb154] tracking-wider">PERSONALIZED JOURNEY</h3>
              <h2 className="text-gray-900 text-3xl font-bold leading-tight">Lessons catered to your personality</h2>
              <p className="text-gray-700 text-lg">
                GitaPro understands your approach to life, spiritual interests, and goals to create a personalized path through the Gita's teachings.
              </p>
              <div className="bg-[#fad2ad] p-4 rounded-xl shadow-lg">
                <p className="text-[#fcb154] font-bold text-3xl mb-1">100+</p>
                <p className="text-gray-700">unique learning paths designed for various personality types</p>
              </div>
            </div>
          </div>
          
          {/* Progress Tracking */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <h3 className="text-sm font-bold text-[#43698e] tracking-wider">PROGRESS TRACKING</h3>
              <h2 className="text-gray-900 text-3xl font-bold leading-tight">Transform everyday learning</h2>
              <p className="text-gray-700 text-lg">
                Track your spiritual progress with interactive learning modules. Set goals, maintain streaks, and see your understanding deepen over time.
              </p>
              <div className="bg-[#c9dde8] p-4 rounded-xl shadow-lg">
                <p className="text-[#43698e] font-bold text-3xl mb-1">365</p>
                <p className="text-gray-700">daily reflections to keep you motivated throughout the year</p>
              </div>
            </div>
            <div className="bg-[#c9dde8] rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-all">
              <Image src="/bg3.png" alt="Progress Dashboard" width={600} height={400} className="rounded-2xl" />
            </div>
          </div>

          {/* Community Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#f0f0f0] rounded-3xl p-6 shadow-2xl order-2 md:order-1 transform hover:scale-105 transition-all">
              <Image src="/bg3.png" alt="Community Features" width={600} height={400} className="rounded-2xl" />
            </div>
            <div className="text-left space-y-6 order-1 md:order-2">
              <h3 className="text-sm font-bold text-[#7a7a7a] tracking-wider">SPIRITUAL COMMUNITY</h3>
              <h2 className="text-gray-900 text-3xl font-bold leading-tight">Connect and grow together</h2>
              <p className="text-gray-700 text-lg">
                Join study groups, participate in guided discussions, and share insights with fellow students on your spiritual journey.
              </p>
              <div className="bg-[#f0f0f0] p-4 rounded-xl shadow-lg">
                <p className="text-[#7a7a7a] font-bold text-3xl mb-1">24/7</p>
                <p className="text-gray-700">access to a supportive community of like-minded individuals</p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="bg-[#faf6f0] py-16 rounded-3xl">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Users Say</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#fcb154] to-[#fad2ad]"></div>
                  <p className="text-gray-600 mb-4 text-base">"The personalized approach to understanding the Gita has transformed my daily spiritual practice."</p>
                  <p className="font-bold text-base">Rahul M.</p>
                  <p className="text-sm text-gray-500">GitaPro User</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#43698e] to-[#c9dde8]"></div>
                  <p className="text-gray-600 mb-4 text-base">"I love how the app breaks down complex teachings into digestible daily lessons."</p>
                  <p className="font-bold text-base">Sarah K.</p>
                  <p className="text-sm text-gray-500">GitaPro User</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#7a7a7a] to-[#f0f0f0]"></div>
                  <p className="text-gray-600 mb-4 text-base">"The interactive features make learning ancient wisdom engaging and relevant."</p>
                  <p className="font-bold text-base">Amit P.</p>
                  <p className="text-sm text-gray-500">GitaPro User</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-4"></div>
        </div>
      </div>
    </div>
  );
}
