import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white border-b pb-4">Privacy Policy</h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">1. Information We Collect</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">We may collect the following types of information:</p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="inline-flex mr-2 mt-1 h-4 w-4 rounded-full bg-blue-500"></span>
              <span><strong>Personal Information:</strong> Name, email address, and other details provided during account registration.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex mr-2 mt-1 h-4 w-4 rounded-full bg-blue-500"></span>
              <span><strong>Usage Data:</strong> Information about how you interact with the Platform, including pages visited and features used.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex mr-2 mt-1 h-4 w-4 rounded-full bg-blue-500"></span>
              <span><strong>Device Information:</strong> Details about the device and browser you use to access our Platform.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex mr-2 mt-1 h-4 w-4 rounded-full bg-blue-500"></span>
              <span><strong>Cookies and Tracking Technologies:</strong> We may use cookies and similar technologies to enhance user experience.</span>
            </li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">2. How We Use Your Information</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="inline-flex mr-2 mt-1 h-4 w-4 rounded-full bg-blue-500"></span>
              <span>Personalize your experience.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex mr-2 mt-1 h-4 w-4 rounded-full bg-blue-500"></span>
              <span>Send updates, notifications, and relevant communications.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex mr-2 mt-1 h-4 w-4 rounded-full bg-blue-500"></span>
              <span>Provide and improve our Platform.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex mr-2 mt-1 h-4 w-4 rounded-full bg-blue-500"></span>
              <span>Monitor and analyze Platform usage.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex mr-2 mt-1 h-4 w-4 rounded-full bg-blue-500"></span>
              <span>Ensure security and prevent fraudulent activities.</span>
            </li>
          </ul>
        </section>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white border-b pb-4">Terms and Conditions</h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">1. Acceptance of Terms</h2>
          <p className="text-gray-600 dark:text-gray-300">
            By accessing or using GitaPro.com, you confirm that you have read, understood, and agree to be bound by these Terms. 
            If you do not agree to these Terms, please do not use our Platform.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">2. Eligibility</h2>
          <p className="text-gray-600 dark:text-gray-300">
            You must be at least 13 years old to use our Platform. If you are under 13, you must have permission from a parent or guardian.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">3. User Accounts</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="inline-flex mr-2 mt-1 h-4 w-4 rounded-full bg-blue-500"></span>
              <span>You may need to create an account to access certain features.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex mr-2 mt-1 h-4 w-4 rounded-full bg-blue-500"></span>
              <span>You are responsible for maintaining the confidentiality of your account credentials.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex mr-2 mt-1 h-4 w-4 rounded-full bg-blue-500"></span>
              <span>You agree to provide accurate and up-to-date information.</span>
            </li>
          </ul>
        </section>
        
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300">
            For any questions, please contact us at 
            <a href="mailto:gitapro.contact@gmail.com" className="text-blue-500 hover:text-blue-700 ml-1 transition-colors duration-300">
              gitapro.contact@gmail.com
            </a>
          </p>
        </div>
      </div>
      
      <div className="text-center text-gray-500 text-sm mt-8">
        Last updated: March 2025
      </div>
    </div>
  );
}

export default Terms;
