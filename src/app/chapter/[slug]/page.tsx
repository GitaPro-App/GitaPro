"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

import chapters from "../../../app/components/LoggedIn/Profile";

import chapter1 from "../../../../json-database/chapter-1.json";
import chapter2 from "../../../../json-database/chapter-2.json";
import chapter3 from "../../../../json-database/chapter-3.json";
import chapter4 from "../../../../json-database/chapter-4.json";
import chapter5 from "../../../../json-database/chapter-5.json";
import chapter6 from "../../../../json-database/chapter-6.json";
import chapter7 from "../../../../json-database/chapter-7.json";
import chapter8 from "../../../../json-database/chapter-8.json";
import chapter9 from "../../../../json-database/chapter-9.json";
import chapter10 from "../../../../json-database/chapter-10.json";
import chapter11 from "../../../../json-database/chapter-11.json";
import chapter12 from "../../../../json-database/chapter-12.json";
import chapter13 from "../../../../json-database/chapter-13.json";
import chapter14 from "../../../../json-database/chapter-14.json";
import chapter15 from "../../../../json-database/chapter-15.json";
import chapter16 from "../../../../json-database/chapter-16.json";
import chapter17 from "../../../../json-database/chapter-17.json";
import chapter18 from "../../../../json-database/chapter-18.json";

interface Verse {
  transliteration: string;
  translation: string;
  verse: number;
  isRead: boolean;
}

const chapterData: Record<string, any> = {
  "1": chapter1,
  "2": chapter2,
  "3": chapter3,
  "4": chapter4,
  "5": chapter5,
  "6": chapter6,
  "7": chapter7,
  "8": chapter8,
  "9": chapter9,
  "10": chapter10,
  "11": chapter11,
  "12": chapter12,
  "13": chapter13,
  "14": chapter14,
  "15": chapter15,
  "16": chapter16,
};

const chapterInfo: Record<string, string> = {
  "1": "Arjuna's Dilemma",
  "2": "Sankhya Yoga",
  "3": "Karma Yoga",
  "4": "Jnana Yoga",
  "5": "Karma Sanyasa Yoga",
  "6": "Dhyana Yoga",
  "7": "Gyaan Vigyana Yoga",
  "8": "Akshara Brahma Yoga",
  "9": "Raja Vidya Yoga",
  "10": "Vibhuti Yoga",
  "11": "Vishwarupa Darshana Yoga",
  "12": "Bhakti Yoga",
  "13": "Ksetra Ksetrajna Vibhaga Yoga",
  "14": "Gunatraya Vibhaga Yoga",
  "15": "Purushottama Yoga",
  "16": "Daivasura Sampad Vibhaga Yoga",
};

const Chapter = () => {
  const { user, isLoading, error } = useUser();
  const sub = user?.sub;

  const { slug } = useParams();
  const chapterId = slug as string;

  const [verses, setVerses] = useState<Verse[]>([]);
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [showTransliteration, setShowTransliteration] = useState(true);

  useEffect(() => {
    const fetchVerses = async () => {
      const data = await chapterData[chapterId];

      const formattedVerses = Object.entries(data).map(
        ([key, value]: [string, any]) => ({
          verse: parseInt(key),
          transliteration: value.transliteration,
          translation: value.translation,
          isRead: false,
        })
      );
      console.log("SUB", sub);
      const userResponse = await fetch(`/api/verses?sub=${sub}`);
      const userData = await userResponse.json();

      if (userData.versesRead && userData.versesRead[chapterId]) {
        formattedVerses.forEach((verse) => {
          verse.isRead = userData.versesRead[chapterId].includes(verse.verse);
        });
      }

      setVerses(formattedVerses);
      console.log(formattedVerses);
      setLoading(false);
    };

    if (chapterId) {
      fetchVerses();
    }
  }, [chapterId, sub]);

  const handleNext = () => {
    if (currentVerseIndex < verses.length - 1) {
      setCurrentVerseIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentVerseIndex > 0) {
      setCurrentVerseIndex((prev) => prev - 1);
    }
  };

  const handleVerseRead = async (verseNumber: number) => {
    const updatedVerses = verses.map((verse) =>
      verse.verse === verseNumber ? { ...verse, isRead: !verse.isRead } : verse
    );
    setVerses(updatedVerses);

    const readVerses = updatedVerses
      .filter((v) => v.isRead)
      .map((v) => v.verse);

    const response = await fetch("/api/updateVersesRead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sub,
        chapter: parseInt(chapterId),
        verses: readVerses,
      }),
    });

    console.log("RESPONSE", response);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!verses.length) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        No verses found
      </div>
    );
  }

  const currentVerse = verses[currentVerseIndex];
  const chapterTitle =
    `Chapter ${chapterId}: ${chapterInfo[chapterId]}` || `Chapter ${chapterId}`;

  return (
    <div className="min-h-screen flex flex-col px-4 py-8 md:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-800">
        {chapterTitle}
      </h1>
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex space-x-4 mb-6 justify-center">
          <button
            onClick={() => setShowTransliteration(!showTransliteration)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              showTransliteration
                ? "bg-purple-600 text-white"
                : "bg-white text-purple-600 border border-purple-600"
            }`}
          >
            Transliteration
          </button>
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              showTranslation
                ? "bg-purple-600 text-white"
                : "bg-white text-purple-600 border border-purple-600"
            }`}
          >
            Translation
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-purple-800">
              Verse {currentVerse.verse}
            </h2>
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
              <h3 className="text-purple-600 uppercase text-sm mb-2 font-semibold">
                Transliteration
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                {currentVerse.transliteration}
              </p>
            </div>
          )}
          {showTranslation && (
            <div>
              <h3 className="text-purple-600 uppercase text-sm mb-2 font-semibold">
                Translation
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                {currentVerse.translation}
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentVerseIndex === 0}
            className="px-6 py-2 bg-purple-600 text-white rounded-full disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="py-2 text-purple-800 font-medium">
            {currentVerseIndex + 1} of {verses.length}
          </span>
          <button
            onClick={handleNext}
            disabled={currentVerseIndex === verses.length - 1}
            className="px-6 py-2 bg-purple-600 text-white rounded-full disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
