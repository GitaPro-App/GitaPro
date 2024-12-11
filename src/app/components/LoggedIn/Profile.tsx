// UserDashboard.jsx
'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

const chapters = [
  { id: 1, title: "Arjuna's Dilemma", progress: 75 },
  { id: 2, title: "Sankhya Yoga", progress: 60 },
  { id: 3, title: "Karma Yoga", progress: 45 },
  { id: 4, title: "Jnana Yoga", progress: 30 },
  { id: 5, title: "Karma Sanyasa Yoga", progress: 90 },
  { id: 6, title: "Dhyana Yoga", progress: 20 },
  { id: 7, title: "Gyaan Vigyana Yoga", progress: 0 },
  { id: 8, title: "Aksara Brahma Yoga", progress: 15 },
  { id: 9, title: "Raja Vidya Yoga", progress: 50 },
  { id: 10, title: "Vibhuti Yoga", progress: 40 },
  { id: 11, title: "Visvarupa Darsana Yoga", progress: 25 },
  { id: 12, title: "Bhakti Yoga", progress: 70 },
  { id: 13, title: "Ksetra Ksetrajna Yoga", progress: 85 },
  { id: 14, title: "Gunatraya Vibhaga Yoga", progress: 10 },
  { id: 15, title: "Purusottama Yoga", progress: 5 },
  { id: 16, title: "Daivasura Sampad Vibhaga Yoga", progress: 95 },
  { id: 17, title: "Sraddhatraya Vibhaga Yoga", progress: 55 },
  { id: 18, title: "Moksha Sanyasa Yoga", progress: 65 },
];

const UserDashboard = () => {
  const { user } = useUser();


  return (
    <main className="min-h-screen bg-gray-50 ">
      <div className="pt-24 px-6 max-w-7xl mx-auto ">
        <h1 className="text-4xl font-bold text-purple-600 mb-12">Welcome, {user?.name}!</h1>
        <h3 className="text-2xl font-bold text-purple-600 mb-12">Progress so far:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter) => (
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
                      strokeDasharray={`${chapter.progress * 1.76} 176`}
                    />
                  </svg>
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium">
                    {chapter.progress}%
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Chapter {chapter.id}</h3>
                  <p className="text-gray-600">{chapter.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default UserDashboard;