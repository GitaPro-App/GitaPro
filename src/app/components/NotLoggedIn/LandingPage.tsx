"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import RotatingText from "./HeadLine";

export default function LandingPage() {


  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 "></div>
        <div className="max-w-5xl mx-auto">
          <RotatingText />
          <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the teachings of the Gita like never before. Personalize
            your experience, track your progress, and enjoy gamified learning
            designed just for you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <button className="px-8 py-4 bg-[#3b2d5c] text-white font-bold text-lg rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all">
                Get Started for Free
              </button>
            </Link>
            <Link href="/login">
              <button className="px-8 py-4 bg-[#FFB703] text-black font-bold text-lg rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all">
                I Have an Account
              </button>
            </Link>
          </div>

          <div className=" flex justify-center pt-4">
            <Image
              src="/krishna.png"
              alt="Interactive Learning"
              width={600}
              height={400}
              className="rounded-3xl shadow-lg transform hover:scale-105 transition-all"
            />
          </div>

        
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Feature 1 */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-12">
            <div className="relative w-full md:w-1/2">
              <Image
                src="/bg1.jpg"
                alt="Interactive Learning"
                width={600}
                height={400}
                className="rounded-3xl shadow-lg transform hover:scale-105 transition-all"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#FFB703]">
                Gamified Learning
              </h2>
              <p className="mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed">
                With bite-sized lessons and engaging challenges, you'll
                transform your spiritual journey while having fun.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-12">
            <div className="w-full md:w-1/2 order-last md:order-first">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#3b2d5c]">
                Personalized Learning
              </h2>
              <p className="mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed">
                GitaPro adapts to your learning style and pace. Receive
                customized recommendations and track your progress like never
                before.
              </p>
            </div>
            <div className="relative w-full md:w-1/2">
              <Image
                src="/bg3.png"
                alt="Personalized Progress Tracking"
                width={600}
                height={400}
                className="rounded-3xl shadow-lg transform hover:scale-105 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3b2d5c]">
            Hear From Our Users
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Priya", feedback: "This app changed my mornings!" },
              { name: "Ravi", feedback: "Learning made easy and fun." },
              { name: "Ananya", feedback: "Perfect for spiritual growth!" },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <p className="text-gray-600 mb-4">"{testimonial.feedback}"</p>
                <p className="font-bold text-[#3b2d5c]">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
