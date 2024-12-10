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
            
            <div className="mt-24 w-full">
              {[
                {
                  title: "Ancient Wisdom",
                  description: "Making timeless Gita teachings accessible and applicable to contemporary challenges",
                  image: "/bg1.jpg",
                  icon: "🕉️"
                },
                {
                  title: "Personal Growth",
                  description: "Empowering individuals to discover inner peace and purpose through spiritual knowledge",
                  image: "/bg1.jpg",
                  icon: "☮️"
                },
                {
                  title: "Daily Practice",
                  description: "Transforming philosophical concepts into practical daily actions and mindful living",
                  image: "/bg1.jpg",
                  icon: "🌟"
                }
              ].map((feature, index) => (
                <div key={index} className="feature-row flex items-center mb-16 gap-8">
                  <div className={`feature-content ${index % 2 === 0 ? 'order-1' : 'order-2'} flex-1`}>
                    <div className="feature-card p-6 rounded-xl bg-white shadow-soft hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto">
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
                  <div className={`feature-image ${index % 2 === 0 ? 'order-2' : 'order-1'} flex-1`}>
                    <div className="relative h-[250px] rounded-xl overflow-hidden shadow-soft hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
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