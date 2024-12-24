"use client";

import React, { useState } from 'react';

type StudyDepth = 'quick' | 'medium' | 'well';

interface SelectionBarProps<T> {
  options: T[];
  value: T;
  onChange: (value: T) => void;
  displayValue?: (value: T) => string;
}

const Learn: React.FC = () => {
  const [daysPerWeek, setDaysPerWeek] = useState<number>(0);
  const [minutesPerDay, setMinutesPerDay] = useState<number>(0);
  const [studyDepth, setStudyDepth] = useState<StudyDepth | ''>('');

  const calculateLearningDuration = (): string | null => {
    if (!daysPerWeek || !minutesPerDay || !studyDepth) return null;
    const depthFactor: Record<StudyDepth, number> = {
      'quick': 2, 'medium': 3, 'well': 4
    };
    const weeklyMinutes = (minutesPerDay / depthFactor[studyDepth]) * daysPerWeek;
    const finalDuration = Math.round((700 / weeklyMinutes) * 7);
    return `${finalDuration} days`;
  };

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
              ${value === option ? 'bg-purple-600' : 'bg-purple-100'}
              ${value === option ? 'text-white' : 'text-purple-600'}
              hover:shadow-lg
            `}
          >
            {displayValue ? displayValue(option) : String(option)}
          </button>
        ))}
      </div>
    );
  }

  const getDisplayText = (depth: StudyDepth): string => ({
    quick: 'Quick',
    medium: 'Balanced',
    well: 'Deep Dive'
  }[depth]);

  return (
    <div className="bg-gradient min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          <div className="feature-card p-8 rounded-xl bg-white shadow-soft hover:shadow-xl transition-shadow duration-300 max-w-2xl w-full">
            <h1 className="text-3xl font-semibold mb-8 text-gray-800">
              Customize Your Learning Journey
            </h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl text-gray-700 mb-4">
                  How many days per week would you like to learn?
                </h2>
                <SelectionBar<number>
                  options={[1, 2, 3, 4, 5, 6, 7]}
                  value={daysPerWeek}
                  onChange={setDaysPerWeek}
                />
              </div>

              <div>
                <h2 className="text-xl text-gray-700 mb-4">
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
                <h2 className="text-xl text-gray-700 mb-4">
                  What level of study depth do you prefer?
                </h2>
                <SelectionBar<StudyDepth>
                  options={['quick', 'medium', 'well']}
                  value={studyDepth as StudyDepth}
                  onChange={setStudyDepth}
                  displayValue={getDisplayText}
                />
              </div>

              {(daysPerWeek && minutesPerDay && studyDepth) ? (
                <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Your Learning Path
                  </h3>
                  <p className="text-gray-600">
                    With your selected preferences:
                    <br />
                    {daysPerWeek} days per week
                    <br />
                    {minutesPerDay} minutes per day
                    <br />
                    {getDisplayText(studyDepth as StudyDepth)} approach
                  </p>
                  <p className="text-purple-600 mt-4 text-lg font-semibold">
                    Estimated completion time: {calculateLearningDuration()}
                  </p>
                </div>
              ) : null }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;