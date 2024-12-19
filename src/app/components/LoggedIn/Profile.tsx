// UserDashboard.tsx
'use client';

import { useState, useEffect } from 'react';

import { useUser } from '@auth0/nextjs-auth0/client';

const UserDashboard = () => {
  const { user } = useUser();
  const [verseCountOne, setVerseCountOne] = useState<number>(0);
  const [verseCountTwo, setVerseCountTwo] = useState<number>(0);

  useEffect(() => {
    fetch('/api/getRows/1')
    .then(res => res.json())
    .then(data => setVerseCountOne(data.columnCount));

  fetch('/api/getRows/2')
    .then(res => res.json())
    .then(data => setVerseCountTwo(data.columnCount));

  }, []);


  
const chapters = [
  { id: 1, title: "Arjuna's Dilemma", numberVerses: verseCountOne,  userProgressPercentage: Math.round(500/verseCountOne)},
  { id: 2, title: "Sankhya Yoga", numberVerses: verseCountTwo,  userProgressPercentage: Math.round(500/verseCountTwo) }
];




  return (
    <main className="min-h-screen bg-gray-50 ">
      <div className="pt-24 px-6 max-w-7xl mx-auto ">
        <h1 className="text-4xl font-bold text-purple-600 mb-12">Welcome, {user?.name}!</h1>
        <h3 className="text-2xl font-bold text-purple-600 mb-12">Progress so far:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter) => (
            <a href = {`/chapter/${chapter.id}`} key={chapter.id}>
              <button>
                <div key={chapter.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16">
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
                          strokeDasharray={`${chapter.userProgressPercentage * 1.76} 176`}
                        />
                      </svg>
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium">
                        5/{chapter.numberVerses}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Chapter {chapter.id}</h3>
                      <p className="text-gray-600">{chapter.title}</p>
                    </div>
                  </div>
                </div>
              </button>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default UserDashboard;