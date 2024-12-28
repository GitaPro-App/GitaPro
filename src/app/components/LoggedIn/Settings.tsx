"use client";

import React, { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

interface UserPreferences {
  minutesPerDay: number;
  depth: string;
  gitaType: string;
}

interface UserData {
  name: string;
  email: string;
  preferences: UserPreferences;
}

interface GitaOption {
  title: string;
  description: string;
  focus: string[];
}

const gitaOptions: GitaOption[] = [
  {
    title: "Bhagavad Gita As It Is",
    description: "By A.C. Bhaktivedanta Swami Prabhupada",
    focus: ["Bhakti yoga", "Krishna Consciousness"]
  },
  {
    title: "The Bhagavad Gita: A New Translation",
    description: "By Eknath Easwaran",
    focus: ["Practical wisdom", "Modern life application"]
  },
  {
    title: "Bhagavad Gita with Commentary by Adi Shankaracharya",
    description: "Classical Sanskrit interpretation",
    focus: ["Jnana yoga", "Advaita Vedanta"]
  },
  {
    title: "Bhagavad Gita with Commentary by Ramanujacharya",
    description: "Vishishtadvaita perspective",
    focus: ["Balanced devotion-action", "Qualified non-dualism"]
  }
];

const Settings: React.FC = () => {
  const { user } = useUser();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [updatedPreferences, setUpdatedPreferences] = useState<UserPreferences | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.sub) {
        try {
          const response = await fetch(`/api/getUserData?sub=${encodeURIComponent(user.sub)}`, {
            method: 'GET',
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to fetch user data');
          }

          const data = await response.json();
          setUserData(data.user);
          setUpdatedPreferences(data.user.preferences);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setError(error instanceof Error ? error.message : 'An unknown error occurred');
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleUpdatePreferences = async () => {
    if (user?.sub && updatedPreferences) {
      try {
        const response = await fetch('/api/updatePreferences', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sub: user.sub,
            ...updatedPreferences,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to update user preferences');
        }

        setUserData(prevData => prevData ? {...prevData, preferences: updatedPreferences} : null);
        setIsEditing(false);
      } catch (error) {
        console.error('Error updating user preferences:', error);
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      }
    }
  };

  if (error) {
    return <div className="text-center mt-8 text-red-600">Error: {error}</div>;
  }

  if (!userData) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="bg-gradient min-h-screen pt-12">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow-soft rounded-xl p-8">
            <h1 className="text-3xl font-semibold mb-8 text-gray-800">User Settings</h1>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Personal Information</h2>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p><strong>Name:</strong> {userData.name}</p>
                  <p><strong>Email:</strong> {userData.email}</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Learning Preferences</h2>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p><strong>Daily Study Time:</strong> {userData.preferences.minutesPerDay} minutes</p>
                  <p><strong>Study Depth:</strong> {userData.preferences.depth}</p>
                  <p><strong>Recommended Gita:</strong> {userData.preferences.gitaType}</p>
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all"
                >
                  {isEditing ? 'Cancel Editing' : 'Edit Preferences'}
                </button>
              </div>

              {isEditing && (
                <div className="mt-8 space-y-6 bg-purple-50 p-6 rounded-lg">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Daily Study Time</label>
                    <select
                      value={updatedPreferences?.minutesPerDay}
                      onChange={(e) => setUpdatedPreferences(prev => ({...prev!, minutesPerDay: parseInt(e.target.value)}))}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value={5}>5 minutes</option>
                      <option value={10}>10 minutes</option>
                      <option value={15}>15 minutes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Study Depth</label>
                    <select
                      value={updatedPreferences?.depth}
                      onChange={(e) => setUpdatedPreferences(prev => ({...prev!, depth: e.target.value}))}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="quick">Quick</option>
                      <option value="medium">Balanced</option>
                      <option value="well">Deep Dive</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Select Your Gita Version</label>
                    <div className="grid grid-cols-1 gap-4">
                      {gitaOptions.map((gita, index) => (
                        <div
                          key={index}
                          onClick={() => setUpdatedPreferences(prev => ({...prev!, gitaType: gita.title}))}
                          className={`cursor-pointer p-4 rounded-lg transition-all ${
                            updatedPreferences?.gitaType === gita.title
                              ? 'bg-purple-600 text-white'
                              : 'bg-white hover:bg-purple-100'
                          }`}
                        >
                          <h3 className="font-semibold">{gita.title}</h3>
                          <p className="text-sm mt-1">{gita.description}</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {gita.focus.map((focus, i) => (
                              <span
                                key={i}
                                className={`text-xs px-2 py-1 rounded-full ${
                                  updatedPreferences?.gitaType === gita.title
                                    ? 'bg-purple-500 text-white'
                                    : 'bg-purple-200 text-purple-800'
                                }`}
                              >
                                {focus}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleUpdatePreferences}
                    className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
