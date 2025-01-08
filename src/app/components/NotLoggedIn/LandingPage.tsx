"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RotatingText from './HeadLine';

export default function LandingPage() {
  return (
    <div className="min-h-screen mx-auto max-w-[2000px] overflow-x-hidden bg-white px-4 lg:px-8">
      <div className="min-h-screen flex flex-col justify-between">
        <div className="flex-grow flex items-center justify-center">
          <div className="container mx-auto text-center flex flex-col items-center justify-center scale-90 sm:scale-100 lg:scale-110 xl:scale-125 2xl:scale-140 transform-gpu">
            <div className="flex flex-col items-center max-w-3xl mx-auto">
              <div className="pt-4 mb-6 sm:mb-8">
                <RotatingText />
              </div>
              
              <div className="relative w-56 sm:w-64 md:w-80 lg:w-96 mb-8 sm:mb-12">
                <Image 
                  src="/krishna.png"
                  alt="GitaPro App"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b2d5c] to-transparent opacity-30 rounded-3xl"></div>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-sm sm:max-w-md">
                <Link href="/signup" className="w-full">
                  <button className="w-full bg-[#3b2d5c] text-white font-bold text-base sm:text-lg py-3 sm:py-4 rounded-2xl hover:bg-[#5a4a7d] transition-all duration-300 shadow-lg">
                    GET STARTED
                  </button>
                </Link>
                <Link href="/login" className="w-full">
                  <button className="w-full bg-[#FFB703] text-black font-bold text-base sm:text-lg py-3 sm:py-4 rounded-2xl hover:bg-[#fcb154] transition-all duration-300 shadow-lg">
                    I ALREADY HAVE AN ACCOUNT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16 md:py-24">
        <div className="space-y-24 sm:space-y-32 md:space-y-40">
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mx-auto max-w-7xl">
            <div className="text-left space-y-4 sm:space-y-6">
              <div className="text-center">
                <h2 className="text-[#FFB703] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                  Free. Fun. Effective.
                </h2>
                <p className="text-black text-lg sm:text-xl leading-relaxed">
                  Learning with GitaPro is fun, and research shows that it works! With quick, bite-sized lessons, you'll earn points and unlock new levels while gaining spiritual wisdom.
                </p>
              </div>
            </div>
            <div className="relative bg-[#FFB703] rounded-3xl p-4 sm:p-6 shadow-2xl transform hover:scale-105 transition-all overflow-hidden">
              <Image src="/bg3.png" alt="AI-Powered Learning" width={600} height={400} className="rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB703] to-transparent opacity-40"></div>
            </div>
          </div>

          <div className="pt-8 grid md:grid-cols-2 gap-8 sm:gap-12 items-center mx-auto max-w-7xl">
            <div className="text-left space-y-4 sm:space-y-6">
              <div className="text-center">
                <h2 className="text-[#3b2d5c] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                  Personalized Learning
                </h2>
                <p className="text-black text-lg sm:text-xl leading-relaxed">
                  Advanced AI technology adapts to your learning style and pace. Track your progress, receive customized recommendations, and master the Gita's teachings at your own speed.
                </p>
              </div>
            </div>
            <div className="relative bg-[#3b2d5c] rounded-3xl p-4 sm:p-6 shadow-2xl transform hover:scale-105 transition-all overflow-hidden">
              <Image src="/bg3.png" alt="Personalized Learning Path" width={600} height={400} className="rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-bl from-[#3b2d5c] to-transparent opacity-40"></div>
            </div>
          </div>

          <div className="pt-8 grid md:grid-cols-2 gap-8 sm:gap-12 items-center mx-auto max-w-7xl">
            <div className="text-left space-y-4 sm:space-y-6">
              <div className="text-center">
                <h2 className="text-[#FFB703] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                  Free. Fun. Effective.
                </h2>
                <p className="text-black text-lg sm:text-xl leading-relaxed">
                  Learning with GitaPro is fun, and research shows that it works! With quick, bite-sized lessons, you'll earn points and unlock new levels while gaining spiritual wisdom.
                </p>
              </div>
            </div>
            <div className="relative bg-[#FFB703] rounded-3xl p-4 sm:p-6 shadow-2xl transform hover:scale-105 transition-all overflow-hidden">
              <Image src="/bg3.png" alt="AI-Powered Learning" width={600} height={400} className="rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB703] to-transparent opacity-40"></div>
            </div>
          </div>

        </div>
      </div>


    </div>
  );
}
