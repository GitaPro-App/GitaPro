'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const UserDashboard = () => {
  const { user } = useUser();
  const [verseCountOne, setVerseCountOne] = useState<number>(0);
  const [verseCountTwo, setVerseCountTwo] = useState<number>(0);
  const [totalProgress, setTotalProgress] = useState<number>(0);
  const [verseOfTheDay, setVerseOfTheDay] = useState<string>('');

  useEffect(() => {
    fetch('/api/getRows/1')
      .then(res => res.json())
      .then(data => setVerseCountOne(data.columnCount));

    fetch('/api/getRows/2')
      .then(res => res.json())
      .then(data => setVerseCountTwo(data.columnCount));

    // Simulating total progress (replace with actual data)
    setTotalProgress(Math.floor(Math.random() * 701));

    // Fetch verse of the day (replace with actual API call)
    setVerseOfTheDay("This is a placeholder for the verse of the day.");
  }, []);

  const chapters = [
    { id: 1, title: "Arjuna's Dilemma", numberVerses: verseCountOne, userProgress: 5 },
    { id: 2, title: "Sankhya Yoga", numberVerses: verseCountTwo, userProgress: 5 },
    { id: 3, title: "Karma Yoga", numberVerses: 43, userProgress: 0 },
    { id: 4, title: "Jnana Yoga", numberVerses: 42, userProgress: 0 },
    { id: 5, title: "Karma Sanyasa Yoga", numberVerses: 29, userProgress: 0 },
    { id: 6, title: "Dhyana Yoga", numberVerses: 47, userProgress: 0 },
    { id: 7, title: "Gyaan Vigyana Yoga", numberVerses: 30, userProgress: 0 },
    { id: 8, title: "Akshara Brahma Yoga", numberVerses: 28, userProgress: 0 },
    { id: 9, title: "Raja Vidya Yoga", numberVerses: 34, userProgress: 0 },
    { id: 10, title: "Vibhuti Yoga", numberVerses: 42, userProgress: 0 },
    { id: 11, title: "Vishwarupa Darshana Yoga", numberVerses: 55, userProgress: 0 },
    { id: 12, title: "Bhakti Yoga", numberVerses: 20, userProgress: 0 },
    { id: 13, title: "Ksetra Ksetrajna Vibhaga Yoga", numberVerses: 35, userProgress: 0 },
    { id: 14, title: "Gunatraya Vibhaga Yoga", numberVerses: 27, userProgress: 0 },
    { id: 15, title: "Purushottama Yoga", numberVerses: 20, userProgress: 0 },
    { id: 16, title: "Daivasura Sampad Vibhaga Yoga", numberVerses: 24, userProgress: 0 },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      <div className="pt-24 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Welcome, {user?.name}!</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Verse of the Day</h2>
          <p className="text-gray-700 italic">{verseOfTheDay}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Overall Progress</h2>
          <div className="relative pt-1">
            <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-purple-200">
              <div
                style={{ width: `${(totalProgress / 700) * 100}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
              ></div>
            </div>
            <div className="text-right">
              <span className="text-sm font-semibold inline-block text-purple-600">
                {totalProgress} / 700 verses
              </span>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-purple-600 mb-6">Chapter Progress:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {chapters.map((chapter) => (
            <a href={`/chapter/${chapter.id}`} key={chapter.id} className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <svg className="transform -rotate-90 w-16 h-16">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="#f3f4f6"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="#8b5cf6"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${(chapter.userProgress / chapter.numberVerses) * 176} 176`}
                      />
                    </svg>
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium">
                      {chapter.userProgress}/{chapter.numberVerses}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Chapter {chapter.id}</h3>
                    <p className="text-gray-600 text-sm">{chapter.title}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default UserDashboard;
