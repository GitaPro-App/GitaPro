'use client';

import { useState, useEffect } from 'react';

interface Verse {
  Translation: string;
  Transliteration: string;
  Verse: number;
}

const Chapter1 = () => {
  const [verses, setVerses] = useState<Verse[]>([]);
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/getVerses/2')
      .then(res => res.json())
      .then(data => {
        setVerses(data.verses);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);


  const handleNext = () => {
    if (currentVerseIndex < verses.length - 1) {
      setCurrentVerseIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentVerseIndex > 0) {
      setCurrentVerseIndex(prev => prev - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!verses.length) {
    return <div>No verses found</div>;
  }

  const currentVerse = verses[currentVerseIndex];



  return (
    <div className=" min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold mb-8">Chapter 2: Sankhya Yoga</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Verse {currentVerse.Verse}</h2>
        <p className="text-gray-700 mb-4">{currentVerse.Transliteration}</p>
        <p className="text-gray-600">{currentVerse.Translation}</p>
      </div>

      <div className="flex justify-between mt-6">
        <button 
          onClick={handlePrevious}
          disabled={currentVerseIndex === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <span className="py-2">
          {currentVerseIndex + 1} of {verses.length}
        </span>
        <button 
          onClick={handleNext}
          disabled={currentVerseIndex === verses.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Chapter1;
