"use client";

import React from 'react';
import Image from 'next/image';
import '../style.css';
import RotatingText from './HeadLine';

export default function LandingPage() {
  
  return (
    <div className="bg-gradient min-h-screen pt-10">
      <div className="text-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
            <RotatingText />
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              With just a couple of minutes a day, you can master the Bhagavad Gita. Start now for free!
            </p>
            
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium 
              transition-all duration-300 hover:bg-purple-700 hover:shadow-lg">
              Get Started
            </button>
            
            <div className="mt-24 w-full space-y-16 max-w-6xl mx-auto">
              {[
                {
                  title: "Ancient Wisdom",
                  description: "Making timeless Gita teachings accessible and applicable to contemporary challenges",
                  image: "/bg2.png",
                  icon: "🕉️"
                },
                {
                  title: "Personal Growth",
                  description: "Empowering individuals to discover inner peace and purpose through spiritual knowledge",
                  image: "/krishna.png",
                  icon: "☮️"
                },
                {
                  title: "Daily Practice",
                  description: "Transforming philosophical concepts into practical daily actions and mindful living",
                  image: "/bg3.png",
                  icon: "🌟"
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="bg-white shadow-soft hover:shadow-xl transition-shadow duration-300 rounded-xl p-6 max-w-md mx-auto">
                      <div className="flex justify-center mb-6">
                        <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 text-xl">{feature.icon}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 hover:text-purple-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-soft hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      style={{ objectFit: 'cover' }}
                      className="rounded-xl"
                      loading="lazy"
                    />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}