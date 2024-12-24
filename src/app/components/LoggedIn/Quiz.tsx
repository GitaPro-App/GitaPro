"use client";

import React, { useState } from 'react';

type StudyDepth = 'quick' | 'medium' | 'well';

interface SelectionBarProps<T> {
  options: T[];
  value: T;
  onChange: (value: T) => void;
  displayValue?: (value: T) => string;
}

interface QuizQuestion {
  question: string;
  options: string[];
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "When faced with a tough decision, what do you prioritize the most?",
    options: [
      "A) Following your inner devotion and faith.",
      "B) Seeking practical solutions and advice.",
      "C) Understanding the deeper truth behind the situation.",
      "D) Balancing devotion and purposeful action to serve a higher cause."
    ]
  },
  {
    question: "How do you currently approach your personal growth?",
    options: [
      "A) Through prayer, rituals, or devotional activities.",
      "B) By applying lessons and practices to daily life.",
      "C) By reflecting deeply on the nature of existence and self.",
      "D) By cultivating both spiritual devotion and disciplined action."
    ]
  },
  {
    question: "When performing a task, how do you deal with the outcome?",
    options: [
      "A) Trust that it's part of a divine plan and surrender to God's will.",
      "B) Evaluate and learn from the experience to improve next time.",
      "C) Contemplate the purpose and meaning behind the action.",
      "D) Offer the results as service to God while continuing to act responsibly."
    ]
  },
  {
    question: "How do you view your role in the world?",
    options: [
      "A) As a devotee serving a higher purpose.",
      "B) As someone contributing to society with practical skills.",
      "C) As a seeker aiming to uncover the ultimate truth.",
      "D) As an eternal soul connected to God, expressing that through service and devotion."
    ]
  },
  {
    question: "Which of these activities appeals to you most?",
    options: [
      "A) Chanting or meditating on a divine form or name.",
      "B) Journaling and setting goals for personal improvement.",
      "C) Reading philosophical works and exploring abstract concepts.",
      "D) Engaging in a mix of devotional practices and selfless service."
    ]
  },
  {
    question: "How do you usually respond to emotional challenges?",
    options: [
      "A) Turn to prayer or spiritual faith for guidance.",
      "B) Use logical reasoning and practical steps to address them.",
      "C) Reflect deeply to understand the root cause of the emotions.",
      "D) Maintain devotion and take action while trusting God's guidance."
    ]
  },
  {
    question: "Which statement best aligns with your beliefs?",
    options: [
      "A) Devotion to God is the key to happiness and purpose.",
      "B) Life's challenges are opportunities to grow and learn.",
      "C) The self and the universe are one, and understanding this truth leads to liberation.",
      "D) God is personal yet transcendent, and devotion combined with action leads to fulfillment."
    ]
  },
  {
    question: "How do you engage with spiritual texts?",
    options: [
      "A) Look for passages that strengthen your connection to God.",
      "B) Find relatable lessons you can apply to everyday situations.",
      "C) Seek detailed explanations of philosophical ideas.",
      "D) Explore a combination of devotion, action, and philosophical insights."
    ]
  }
];

const Learn: React.FC = () => {
  const [daysPerWeek, setDaysPerWeek] = useState<number>(0);
  const [minutesPerDay, setMinutesPerDay] = useState<number>(0);
  const [studyDepth, setStudyDepth] = useState<StudyDepth | ''>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [gitaRecommendation, setGitaRecommendation] = useState('');

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

  const handleAnswerSelection = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
      const result = calculateResult(newAnswers);
      setGitaRecommendation(result);
    }
  };

  const calculateResult = (answers: string[]) => {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach(answer => {
      const option = answer.charAt(0);
      counts[option as keyof typeof counts]++;
    });

    const max = Math.max(...Object.values(counts));
    const result = Object.keys(counts).find(key => counts[key as keyof typeof counts] === max);

    switch (result) {
      case 'A':
        return "Bhagavad Gita As It Is by A.C. Bhaktivedanta Swami Prabhupada (Bhakti yoga and Krishna Consciousness)";
      case 'B':
        return "The Bhagavad Gita: A New Translation by Eknath Easwaran (Practical wisdom for modern life)";
      case 'C':
        return "Bhagavad Gita with Commentary by Adi Shankaracharya (Jnana yoga and Advaita Vedanta)";
      case 'D':
        return "Bhagavad Gita with Commentary by Ramanujacharya (Vishishtadvaita and balanced devotion-action)";
      default:
        return "Unable to determine a clear preference. Consider exploring multiple perspectives.";
    }
  };

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

              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Personalization Quiz</h2>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{width: `${((quizCompleted ? quizQuestions.length : currentQuestionIndex) / quizQuestions.length) * 100}%`}}></div>
                </div>
                {!quizCompleted ? (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{quizQuestions[currentQuestionIndex].question}</h3>
                    {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelection(option)}
                        className="block w-full text-left p-2 my-2 bg-purple-100 hover:bg-purple-200 rounded"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Quiz Completed!</h3>
                    <p className="text-purple-600 mt-4 text-lg">
                      Recommended Gita: {gitaRecommendation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
