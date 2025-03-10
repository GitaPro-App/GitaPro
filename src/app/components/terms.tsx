import React from 'react';

const terms: React.FC = () => {
    return(
        <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul className="list-disc ml-6">
          <li>Personal Information: Name, email address, and other details provided during account registration.</li>
          <li>Usage Data: Information about how you interact with the Platform, including pages visited and features used.</li>
          <li>Device Information: Details about the device and browser you use to access our Platform.</li>
          <li>Cookies and Tracking Technologies: We may use cookies and similar technologies to enhance user experience.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6">
          <li>Personalize your experience.</li>
          <li>Send updates, notifications, and relevant communications.</li>
          <li>Provide and improve our Platform.</li>
          <li>Monitor and analyze Platform usage.</li>
          <li>Ensure security and prevent fraudulent activities.</li>
        </ul>
      </section>
      
      <h1 className="text-3xl font-bold mt-8 mb-4">Terms and Conditions</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
        <p>By accessing or using GitaPro.com, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Platform.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">2. Eligibility</h2>
        <p>You must be at least 13 years old to use our Platform. If you are under 13, you must have permission from a parent or guardian.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">3. User Accounts</h2>
        <ul className="list-disc ml-6">
          <li>You may need to create an account to access certain features.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li>You agree to provide accurate and up-to-date information.</li>
        </ul>
      </section>
      
      <p className="mt-6">For any questions, please contact us at <a href="mailto:gitapro.contact@gmail.com" className="text-blue-500">gitapro.contact@gmail.com</a>.</p>
    </div>
  );
}
export default terms;