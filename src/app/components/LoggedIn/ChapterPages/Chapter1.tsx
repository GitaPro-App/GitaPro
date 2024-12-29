'use client';

import { useState, useEffect } from 'react';
import chapterData from '../../../../../json-database/chapter-1.json';

interface Verse {
  transliteration: string;
  translation: string;
  verse: number;
  isRead: boolean;
}

const Chapter1 = ({ sub }: { sub: string }) => {
  const [verses, setVerses] = useState<Verse[]>([]);
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [showTransliteration, setShowTransliteration] = useState(true);

  useEffect(() => {
    const fetchVerses = async () => {
      const formattedVerses = Object.entries(chapterData).map(([key, value]) => ({
        verse: parseInt(key),
        transliteration: value.transliteration,
        translation: value.translation,
        isRead: false
      }));

      const response = await fetch(`/api/verses?sub=${sub}`);
      const userData = await response.json();

      if (userData.versesRead && userData.versesRead['1']) {
        formattedVerses.forEach(verse => {
          verse.isRead = userData.versesRead['1'].includes(verse.verse);
        });
      }

      setVerses(formattedVerses);
      setLoading(false);
    };

    fetchVerses();
  }, [sub]);

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

  const handleVerseRead = async (verseNumber: number) => {
    const updatedVerses = verses.map(verse => 
      verse.verse === verseNumber ? { ...verse, isRead: !verse.isRead } : verse
    );
    setVerses(updatedVerses);

    const readVerses = updatedVerses.filter(v => v.isRead).map(v => v.verse);

    await fetch('/api/updateVersesRead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sub, chapter: 1, verses: readVerses })
    });
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-600"></div>
    </div>;
  }

  if (!verses.length) {
    return <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">No verses found</div>;
  }

  const currentVerse = verses[currentVerseIndex];

  return (
    <div className="min-h-screen flex flex-col px-4 py-8 md:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-800">Chapter 1: Arjuna's Dilemma</h1>
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex space-x-4 mb-6 justify-center">
          <button 
            onClick={() => setShowTransliteration(!showTransliteration)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${showTransliteration ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 border border-purple-600'}`}
          >
            Transliteration
          </button>
          <button 
            onClick={() => setShowTranslation(!showTranslation)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${showTranslation ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 border border-purple-600'}`}
          >
            Translation
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-purple-800">Verse {currentVerse.verse}</h2>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={currentVerse.isRead}
                onChange={() => handleVerseRead(currentVerse.verse)}
                className="form-checkbox h-5 w-5 text-purple-600"
              />
              <span className="ml-2 text-gray-700">Mark as read</span>
            </label>
          </div>
          {showTransliteration && (
            <div className="mb-6">
              <h3 className="text-purple-600 uppercase text-sm mb-2 font-semibold">Transliteration</h3>
              <p className="text-lg text-gray-800 leading-relaxed">{currentVerse.transliteration}</p>
            </div>
          )}
          {showTranslation && (
            <div>
              <h3 className="text-purple-600 uppercase text-sm mb-2 font-semibold">Translation</h3>
              <p className="text-lg text-gray-800 leading-relaxed">{currentVerse.translation}</p>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <button 
            onClick={handlePrevious}
            disabled={currentVerseIndex === 0}
            className="px-6 py-2 bg-purple-600 text-white rounded-full disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors hover:bg-purple-700"
          >
            Previous
          </button>
          <span className="py-2 text-purple-800 font-medium">
            {currentVerseIndex + 1} of {verses.length}
          </span>
          <button 
            onClick={handleNext}
            disabled={currentVerseIndex === verses.length - 1}
            className="px-6 py-2 bg-purple-600 text-white rounded-full disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors hover:bg-purple-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chapter1;
