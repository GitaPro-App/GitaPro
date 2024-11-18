"use client";

import React, { useState, useEffect } from 'react';

type ThemeKey = 'light' | 'dark' | 'forest' | 'ocean';

const THEME_STYLES: Record<ThemeKey, {
  background: string;
  text: string;
  title: string;
  card: string;
  bar: string;
  selected: string;
  hover: string;
}> = {
  light: {
    background: 'bg-gradient-to-b from-gray-100 to-white',
    text: 'text-gray-800',
    title: 'text-gray-900',
    card: 'bg-white/80',
    bar: 'bg-gray-200',
    selected: 'bg-blue-500 text-white',
    hover: 'hover:bg-gray-300'
  },
  dark: {
    background: 'bg-gradient-to-b from-gray-800 to-black',
    text: 'text-white',
    title: 'text-gray-100',
    card: 'bg-gray-800/50',
    bar: 'bg-gray-700',
    selected: 'bg-blue-600 text-white',
    hover: 'hover:bg-gray-600'
  },
  forest: {
    background: 'bg-gradient-to-b from-emerald-900 to-emerald-950',
    text: 'text-emerald-100',
    title: 'text-emerald-50',
    card: 'bg-emerald-800/50',
    bar: 'bg-emerald-700',
    selected: 'bg-emerald-500 text-white',
    hover: 'hover:bg-emerald-600'
  },
  ocean: {
    background: 'bg-gradient-to-b from-blue-900 to-blue-950',
    text: 'text-blue-100',
    title: 'text-blue-50',
    card: 'bg-blue-800/50',
    bar: 'bg-blue-700',
    selected: 'bg-blue-500 text-white',
    hover: 'hover:bg-blue-600'
  }
};

interface ThemeChangeEvent extends Event {
  detail?: {
    theme: ThemeKey;
  };
}

interface SelectionBarProps<T extends { toString(): string }> {
    options: T[];
    value: T;
    onChange: (value: T) => void;
    displayValue?: (value: T) => string;
  }
  

export default function Learn() {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('dark');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as ThemeKey) || 'dark';
    setCurrentTheme(savedTheme);

    const handleThemeChange = (e: ThemeChangeEvent) => {
      if (e.detail?.theme) {
        setCurrentTheme(e.detail.theme);
      }
    };

    window.addEventListener('themeChange', handleThemeChange as EventListener);
    return () => window.removeEventListener('themeChange', handleThemeChange as EventListener);
  }, []);

  const calculateDuration = (studyDepth: string, minutesPerDay: number, daysPerWeek: number) => {
    const depthFactor = {
      'Beginner': 1,
      'Intermediate': 1.5,
      'Advanced': 2
    }[studyDepth] ?? 1;
  
    const weeklyMinutes = (minutesPerDay / depthFactor) * daysPerWeek;
    const finalDuration = Math.round((700 / weeklyMinutes) * 7);
    
    return `${finalDuration} days`;
  };

  const styles = THEME_STYLES[currentTheme];

  function SelectionBar<T extends { toString(): string }>({ options, value, onChange, displayValue }: SelectionBarProps<T>) {
    return (
      <div className="flex space-x-2 mt-2 mb-6">
        {options.map((option) => (
          <button
            key={option.toString()}
            className={`px-4 py-2 rounded-full ${
              value === option ? styles.selected : `${styles.bar} ${styles.hover}`
            }`}
            onClick={() => onChange(option)}
          >
            {displayValue ? displayValue(option) : option.toString()}
          </button>
        ))}
      </div>
    );
  }
  
  

  return (
    <div className={`min-h-screen ${styles.background} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className={`text-4xl font-bold mb-8 ${styles.title}`}>Learn the Bhagavad Gita</h1>
        
        <div className={`${styles.card} backdrop-blur-sm p-8 rounded-lg mb-8`}>
          <h2 className={`text-2xl font-semibold mb-4 ${styles.text}`}>Customize Your Learning Journey</h2>
          
          <div className="mb-6">
            <label className={`block mb-2 ${styles.text}`}>Study Depth</label>
            <SelectionBar<string>
              options={['Beginner', 'Intermediate', 'Advanced']}
              value={'Beginner'}
              onChange={() => {}}
            />
          </div>
          
          <div className="mb-6">
            <label className={`block mb-2 ${styles.text}`}>Minutes per Day</label>
            <SelectionBar<number>
              options={[15, 30, 45, 60]}
              value={30}
              onChange={() => {}}
              displayValue={(value) => `${value} min`}
            />
          </div>
          
          <div className="mb-6">
            <label className={`block mb-2 ${styles.text}`}>Days per Week</label>
            <SelectionBar<number>
              options={[1, 2, 3, 4, 5, 6, 7]}
              value={5}
              onChange={() => {}}
            />
          </div>
          
          <p className={`text-lg ${styles.text}`}>
            Estimated time to complete: {calculateDuration('Beginner', 30, 5)}
          </p>
        </div>
        
        <div className={`${styles.card} backdrop-blur-sm p-8 rounded-lg`}>
          <h2 className={`text-2xl font-semibold mb-4 ${styles.text}`}>Learning Path</h2>
          {/* Add your learning path content here */}
        </div>
      </div>
    </div>
  );
}