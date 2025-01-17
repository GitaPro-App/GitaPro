import React from "react";
import Link from "next/link";

import RotatingText from "./HeadLine";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Darker Astral Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0d0b2b] via-[#1a1a4d] to-[#2e2e6b] opacity-95"></div>
      


      {/* Enhanced White Stars */}
      <div className="fixed inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              width: Math.random() * 4 + 'px',
              height: Math.random() * 4 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              backgroundColor: '#ffffff',
              opacity: 0.8,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Body Section */}
      <main className="flex-grow relative">
        {/* Hero Section */}
        <header className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="relative z-10 pt-8 max-w-5xl mx-auto">
            <RotatingText />
            <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Discover ancient wisdom through modern technology. Experience the divine
              connection in every interaction.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/signup">
                <button className="px-8 py-4 bg-[#8cace2] text-white font-bold text-lg rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all border-2 border-white/20 relative overflow-hidden group">
                  <span className="relative z-10">Begin Your Journey</span>
                  <div className="absolute inset-0 bg-[#2e2e6b] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </Link>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section id="features" className="py-24">
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Features
              </h2>
              <p className="text-lg text-white/70">
                Everything you need to enhance your spiritual journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Meditation Tracking",
                  description: "Track your daily meditation progress and insights",
                  icon: "🧘‍♂️"
                },
                {
                  title: "Sacred Texts",
                  description: "Access ancient wisdom and sacred teachings",
                  icon: "📚"
                },
                {
                  title: "Community",
                  description: "Connect with like-minded spiritual seekers",
                  icon: "🤝"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}
