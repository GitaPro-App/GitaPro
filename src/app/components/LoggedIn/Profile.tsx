"use client";

import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import chapterData from "../../../../json-database/chapter-1.json";

interface Verse {
  transliteration: string;
  translation: string;
  verse: number;
}

interface ChapterProgress {
  id: number;
  title: string;
  numberVerses: number;
  userProgress: number;
}

const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

export const chapters = [
  { id: 1, title: "Arjuna's Dilemma", numberVerses: 46, userProgress: 0 },
  { id: 2, title: "Sankhya Yoga", numberVerses: 72, userProgress: 0 },
  { id: 3, title: "Karma Yoga", numberVerses: 43, userProgress: 0 },
  { id: 4, title: "Jnana Yoga", numberVerses: 42, userProgress: 0 },
  { id: 5, title: "Karma Sanyasa Yoga", numberVerses: 29, userProgress: 0 },
  { id: 6, title: "Dhyana Yoga", numberVerses: 47, userProgress: 0 },
  { id: 7, title: "Gyaan Vigyana Yoga", numberVerses: 30, userProgress: 0 },
  { id: 8, title: "Akshara Brahma Yoga", numberVerses: 28, userProgress: 0 },
  { id: 9, title: "Raja Vidya Yoga", numberVerses: 34, userProgress: 0 },
  { id: 10, title: "Vibhuti Yoga", numberVerses: 42, userProgress: 0 },
  {
    id: 11,
    title: "Vishwarupa Darshana Yoga",
    numberVerses: 55,
    userProgress: 0,
  },
  { id: 12, title: "Bhakti Yoga", numberVerses: 20, userProgress: 0 },
  {
    id: 13,
    title: "Ksetra Ksetrajna Vibhaga Yoga",
    numberVerses: 35,
    userProgress: 0,
  },
  {
    id: 14,
    title: "Gunatraya Vibhaga Yoga",
    numberVerses: 27,
    userProgress: 0,
  },
  { id: 15, title: "Purushottama Yoga", numberVerses: 20, userProgress: 0 },
  {
    id: 16,
    title: "Daivasura Sampad Vibhaga Yoga",
    numberVerses: 24,
    userProgress: 0,
  },
];

const UserDashboard = () => {
  const { user, isLoading } = useUser();
  const [totalProgress, setTotalProgress] = useState<number>(0);
  const [verseOfTheDay, setVerseOfTheDay] = useState<Verse | null>(null);
  const [chaptersProgress, setChaptersProgress] = useState<ChapterProgress[]>(
    []
  );

  useEffect(() => {
    if (!user?.sub) return;

    const fetchProgress = async () => {
      try {
        const response = await fetch(`/api/verses?sub=${user.sub}`);
        const data = await response.json();

        setTotalProgress(data.totalVersesRead);

        const updatedChapters = chapters.map((chapter) => ({
          ...chapter,
          userProgress: data.versesRead[chapter.id]?.length || 0,
        }));
        setChaptersProgress(updatedChapters);
      } catch (error) {
        console.error("Error fetching progress:", error);
      }
    };

    fetchProgress();
  }, [user?.sub]);

  useEffect(() => {
    const formattedVerses = Object.entries(chapterData).map(([key, value]) => ({
      verse: parseInt(key),
      transliteration: value.transliteration,
      translation: value.translation,
    }));

    setRandomVerse(formattedVerses);

    const intervalId = setInterval(() => {
      setRandomVerse(formattedVerses);
    }, MILLISECONDS_IN_DAY);

    return () => clearInterval(intervalId);
  }, []);

  const setRandomVerse = (versesArray: Verse[]) => {
    if (versesArray.length > 0) {
      const today = new Date().toDateString();
      const seed = today
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const randomIndex = seed % versesArray.length;
      setVerseOfTheDay(versesArray[randomIndex]);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      <div className="pt-24 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">
          Welcome, {user?.name}!
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            Verse of the Day
          </h2>
          {verseOfTheDay && (
            <div>
              <p className="text-gray-700 italic mb-2">
                {verseOfTheDay.transliteration}
              </p>
              <p className="text-gray-600">{verseOfTheDay.translation}</p>
              <p className="text-sm text-gray-500 mt-2">
                Verse {verseOfTheDay.verse}
              </p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            Overall Progress
          </h2>
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

        <h3 className="text-2xl font-bold text-purple-600 mb-6">
          Chapter Progress:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {chaptersProgress.map((chapter) => (
            <a
              href={`/chapter/${chapter.id}`}
              key={chapter.id}
              className="block"
            >
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
                        strokeDasharray={`${
                          (chapter.userProgress / chapter.numberVerses) * 176
                        } 176`}
                      />
                    </svg>
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium">
                      {chapter.userProgress}/{chapter.numberVerses}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Chapter {chapter.id}
                    </h3>
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
