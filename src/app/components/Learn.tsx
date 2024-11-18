"use client";

import React, { useEffect, useState } from 'react';

interface ThemeStyle {
  background: string;
  text: string;
  title: string;
  card: string;
  bar: string;
  selected: string;
  hover: string;
}

interface ThemeStyles {
  [key: string]: ThemeStyle;
}

const THEME_STYLES: ThemeStyles = {
  light: {
    background: 'bg-gradient-to-b from-gray-100 to-white',
    text: 'text-gray-800',
    title: 'text-gray-900',
    card: 'bg-white/80',
    bar: 'bg-gray-200',
    selected: 'bg-blue-500',
    hover: 'hover:bg-gray-300'
  },
  dark: {
    background: 'bg-gradient-to-b from-gray-800 to-black',
    text: 'text-gray-300',
    title: 'text-white',
    card: 'bg-gray-800/50',
    bar: 'bg-gray-700',
    selected: 'bg-blue-600',
    hover: 'hover:bg-gray-600'
  },
  forest: {
    background: 'bg-gradient-to-b from-emerald-900 to-emerald-950',
    text: 'text-emerald-200',
    title: 'text-emerald-100',
    card: 'bg-emerald-800/50',
    bar: 'bg-emerald-700',
    selected: 'bg-emerald-500',
    hover: 'hover:bg-emerald-600'
  },
  ocean: {
    background: 'bg-gradient-to-b from-blue-900 to-blue-950',
    text: 'text-blue-200',
    title: 'text-blue-100',
    card: 'bg-blue-800/50',
    bar: 'bg-blue-700',
    selected: 'bg-blue-500',
    hover: 'hover:bg-blue-600'
  },
};

type StudyDepth = 'quick' | 'medium' | 'well';

interface SelectionBarProps<T> {
  options: T[];
  value: T;
  onChange: (value: T) => void;
  displayValue?: (value: T) => string;
}

const Learn: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('dark');
  const [daysPerWeek, setDaysPerWeek] = useState<number>(0);
  const [minutesPerDay, setMinutesPerDay] = useState<number>(0);
  const [studyDepth, setStudyDepth] = useState<StudyDepth | ''>('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setCurrentTheme(savedTheme);

    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ theme: string }>;
      if (customEvent.detail?.theme) {
        setCurrentTheme(customEvent.detail.theme);
      }
    };

    window.addEventListener('themeChange', handleThemeChange);
    return () => window.removeEventListener('themeChange', handleThemeChange);
  }, []);

  const calculateLearningDuration = (): string | null => {
    if (!daysPerWeek || !minutesPerDay || !studyDepth) return null;
  
    const depthFactor: Record<StudyDepth, number> = {
      'quick': 2,
      'medium': 3,
      'well': 4
    };
  
    const weeklyMinutes = (minutesPerDay / depthFactor[studyDepth]) * daysPerWeek;
    const finalDuration = Math.round((700 / weeklyMinutes) * 7);
    
    return `${finalDuration} days`;
  };

  const styles = THEME_STYLES[currentTheme] || THEME_STYLES.dark;

  function SelectionBar<T extends string | number>({ 
    options, 
    value, 
    onChange, 
    displayValue 
  }: SelectionBarProps<T>): JSX.Element {
    return (
      <div className="flex space-x-2 mt-2 mb-6">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onChange(option)}
            className={`
              flex-1 py-3 rounded-lg transition-all duration-200
              ${value === option ? styles.selected : styles.bar}
              ${styles.hover} ${styles.text}
            `}
          >
            {displayValue ? displayValue(option) : String(option)}
          </button>
        ))}
      </div>
    );
  }

  const getDisplayText = (depth: StudyDepth): string => {
    const displayTexts: Record<StudyDepth, string> = {
      quick: 'Quick',
      medium: 'Balanced',
      well: 'Deep Dive'
    };
    return displayTexts[depth];
  };

  return (
    <div className={`min-h-screen ${styles.background} transition-colors duration-300`}>
      <div className="container px-6 py-32 mx-auto">
        <div className={`${styles.card} backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto`}>
          <h1 className={`text-3xl font-semibold mb-8 ${styles.title} text-center`}>
            Customize Your Learning Journey
          </h1>

          <div className="space-y-8">
            <div>
              <h2 className={`text-xl ${styles.text} mb-4`}>
                How many days per week would you like to learn?
              </h2>
              <SelectionBar<number>
                options={[1, 2, 3, 4, 5, 6, 7]}
                value={daysPerWeek}
                onChange={setDaysPerWeek}
              />
            </div>

            <div>
              <h2 className={`text-xl ${styles.text} mb-4`}>
                How many minutes per day can you dedicate?
              </h2>
              <SelectionBar<number>
                options={[5, 10, 15]}
                value={minutesPerDay}
                onChange={setMinutesPerDay}
                displayValue={(v) => `${v} min`}
              />
            </div>

            <div>
              <h2 className={`text-xl ${styles.text} mb-4`}>
                What level of study depth do you prefer?
              </h2>
              <SelectionBar<StudyDepth>
                options={['quick', 'medium', 'well']}
                value={studyDepth as StudyDepth}
                onChange={setStudyDepth}
                displayValue={getDisplayText}
              />
            </div>

            {daysPerWeek && minutesPerDay && studyDepth && (
              <div className={`mt-8 p-6 ${styles.bar} rounded-lg`}>
                <h3 className={`text-lg font-semibold ${styles.text} mb-2`}>
                  Your Learning Path
                </h3>
                <p className={styles.text}>
                  With your selected preferences:
                  <br />
                  • {daysPerWeek} days per week
                  <br />
                  • {minutesPerDay} minutes per day
                  <br />
                  • {studyDepth === 'quick' ? 'Quick Summary' : 
                      studyDepth === 'medium' ? 'Balanced Approach' : 
                      'Deep Dive'} approach
                </p>
                <p className={`${styles.text} mt-4 text-lg font-semibold`}>
                  Estimated completion time: {calculateLearningDuration()}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;