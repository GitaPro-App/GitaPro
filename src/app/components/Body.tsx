"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ThemeChangeEvent extends Event {
  detail?: {
    theme: string;
  };
}

const THEME_STYLES = {
  light: {
    background: 'bg-gradient-to-b from-gray-100 to-white',
    text: 'text-gray-800',
    verse: 'text-gray-600',
    translation: 'text-gray-500',
    card: 'bg-white/80',
    cardText: 'text-gray-700'
  },
  dark: {
    background: 'bg-gradient-to-b from-gray-800 to-black',
    text: 'text-white',
    verse: 'text-gray-300',
    translation: 'text-gray-400',
    card: 'bg-gray-800/50',
    cardText: 'text-gray-300'
  },
  forest: {
    background: 'bg-gradient-to-b from-emerald-900 to-emerald-950',
    text: 'text-emerald-100',
    verse: 'text-emerald-200',
    translation: 'text-emerald-300',
    card: 'bg-emerald-800/50',
    cardText: 'text-emerald-100'
  },
  ocean: {
    background: 'bg-gradient-to-b from-blue-900 to-blue-950',
    text: 'text-blue-100',
    verse: 'text-blue-200',
    translation: 'text-blue-300',
    card: 'bg-blue-800/50',
    cardText: 'text-blue-100'
  }
};

export default function Body() {
  const missionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [animationsInitialized, setAnimationsInitialized] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setCurrentTheme(savedTheme);

    const handleThemeChange = (e: ThemeChangeEvent) => {
      if (e.detail?.theme) {
        setCurrentTheme(e.detail.theme);
      }
    };

    window.addEventListener('themeChange', handleThemeChange as EventListener);
    return () => window.removeEventListener('themeChange', handleThemeChange as EventListener);
  }, []);

  useEffect(() => {
    if (!animationsInitialized) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                const element = entry.target as HTMLElement;
                element.classList.add('opacity-100');
                element.classList.remove('translate-x-full', '-translate-x-full');
                if (idx === entries.length - 1) {
                  setAnimationsInitialized(true);
                }
              }, idx * 200);
            }
          });
        },
        { threshold: 0.1 }
      );

      missionRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => observer.disconnect();
    }
  }, [animationsInitialized]);

  const missions = [
    {
      title: "Ancient Wisdom, Modern Life",
      description: "Making timeless Gita teachings accessible and applicable to contemporary challenges",
      category: "Education"
    },
    {
      title: "Personal Growth",
      description: "Empowering individuals to discover inner peace and purpose through spiritual knowledge",
      category: "Development"
    },
    {
      title: "Community Connection",
      description: "Building a global community of seekers dedicated to self-discovery and mutual growth",
      category: "Community"
    },
    {
      title: "Daily Practice",
      description: "Transforming philosophical concepts into practical daily actions and mindful living",
      category: "Practice"
    }
  ];

  const styles = THEME_STYLES[currentTheme as keyof typeof THEME_STYLES] || THEME_STYLES.dark;

  return (
    <div className={`min-h-screen ${styles.background} transition-colors duration-300`}>
      <section className="container px-6 py-32 mx-auto text-center">
        <h1 className={`text-3xl font-semibold mb-6 ${styles.text}`}>
          Gita Verse of the Day
        </h1>
        <p className={`text-xl mb-4 ${styles.verse}`}>
          कर्मण्येवाधिकारस्ते मा फलेषु कदाचन
        </p>
        <p className={`italic ${styles.translation}`}>
          "Focus on your actions, not on the fruits of your actions."
        </p>
      </section>

      <div className="container px-6 py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missions.map((mission, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                if (el) missionRefs.current[index] = el;
              }}
              className={`
                ${styles.card}
                backdrop-blur-sm p-8 rounded-lg
                transform transition-all duration-300
                ${!animationsInitialized ? 'opacity-0' : 'opacity-100'}
                ${!animationsInitialized && index % 2 === 0 ? 'translate-x-full' : ''}
                ${!animationsInitialized && index % 2 !== 0 ? '-translate-x-full' : ''}
              `}
            >
              <span className={`text-sm font-semibold ${styles.text}`}>
                {mission.category}
              </span>
              <h2 className={`text-2xl font-bold mt-2 mb-4 ${styles.text}`}>
                {mission.title}
              </h2>
              <p className={styles.cardText}>
                {mission.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <a href="/api/auth/logout">Logout</a>
      <a href="/api/auth/login">Login</a>
      <img src="./gitapro.png"></img>
    </div>
  );
}