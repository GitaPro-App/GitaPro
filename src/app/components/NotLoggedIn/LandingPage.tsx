import React from "react";
import Link from "next/link";
import RotatingText from "./HeadLine";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0d0b2b] via-[#1a1a4d] to-[#2e2e6b] opacity-95"></div>

      {/* Enhanced White Stars */}
      <div className="fixed inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              width: Math.random() * 4 + "px",
              height: Math.random() * 4 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              backgroundColor: "#ffffff",
              opacity: 0.8,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <main className="flex-grow relative">
        {/* Hero Section */}
        <header className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="relative z-10 pt-8 max-w-5xl mx-auto">
            <RotatingText />
            <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Discover ancient wisdom through modern technology. Experience the divine connection in every interaction.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/api/auth/signup">
                <button className="px-8 py-4 bg-[#8cace2] text-white font-bold text-lg rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all border-2 border-white/20 relative overflow-hidden group">
                  <span className="relative z-10">Begin Your Journey</span>
                  <div className="absolute inset-0 bg-[#2e2e6b] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </Link>
            </div>
          </div>
        </header>

        {/* Value Proposition Section */}
        <section className="py-24  ">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Social Proof",
                  description: "Join thousands of satisfied users on their spiritual journey",
                  icon: "🌟"
                },
                {
                  title: "Expert Guidance",
                  description: "Learn from certified spiritual teachers and mentors",
                  icon: "🎯"
                },
                {
                  title: "Community Support",
                  description: "Connect with like-minded individuals worldwide",
                  icon: "🤝"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="py-24 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Platform Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Meditation Timer",
                  description: "Customizable timer with ambient sounds and interval bells",
                  icon: "⏱️"
                },
                {
                  title: "Progress Analytics",
                  description: "Track your meditation streaks and mindfulness journey",
                  icon: "📊"
                },
                {
                  title: "Guided Sessions",
                  description: "Access to hundreds of guided meditation sessions",
                  icon: "🎧"
                },
                {
                  title: "Community Forums",
                  description: "Engage in meaningful discussions with fellow practitioners",
                  icon: "💭"
                },
                {
                  title: "Resource Library",
                  description: "Extensive collection of spiritual texts and teachings",
                  icon: "📚"
                },
                {
                  title: "Event Calendar",
                  description: "Never miss important spiritual events and workshops",
                  icon: "📅"
                },
                {
                  title: "Personal Journal",
                  description: "Document your spiritual experiences and insights",
                  icon: "📝"
                },
                {
                  title: "Achievement System",
                  description: "Earn badges and track your spiritual milestones",
                  icon: "🏆"
                },
                {
                  title: "Live Sessions",
                  description: "Join live meditation sessions with teachers",
                  icon: "🎥"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 ">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">User Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "This platform transformed my spiritual practice completely.",
                  author: "Sarah M.",
                  role: "Meditation Practitioner"
                },
                {
                  quote: "The community support here is unlike anything I've experienced.",
                  author: "Michael R.",
                  role: "Spiritual Seeker"
                },
                {
                  quote: "Perfect blend of ancient wisdom and modern technology.",
                  author: "Emma L.",
                  role: "Yoga Teacher"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-all">
                  <p className="text-white/90 italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-white font-bold">{testimonial.author}</p>
                  <p className="text-white/70">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        
      </main>
    </div>
  );
}
