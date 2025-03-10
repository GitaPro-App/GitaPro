import React from 'react';
import Image from  'next/image';

const AboutUs: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl pt-8 min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 ">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto ">
            We help folks love, learn, and understand the Bhagavad Gita—so they can be connected to the essence of the Gita.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16 ">
          <div className="flex items-center gap-8 ">
            <div className="flex-1 ">
              <h2 className="text-2xl font-bold mb-4">
                We're here to get as many people
                <span className="text-purple-600"> learning</span> as possible.
              </h2>
              <p className="text-gray-600 mb-4">
                Not just people that are already spiritual, but all people. We offer a more accessible and sustainable alternative to the traditional learning methods.
              </p>
              <p className="text-gray-600">
                We don't think learning scripture should be intimidating at all. We give it a fun twist. Learning is medicine. When done right, it not only enlightens but protects against ignorance.
              </p>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 gap-4">
                <Image 
                  src="/bg3.png" 
                  alt="Community Learning"
                  className="rounded-lg w-full"
                  width={500}
                  height={300}
                />
                <Image 
                  src="/krishna.png" 
                  alt="Learning Together"
                  className="rounded-lg w-full"
                  width={500}
                  height={300}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Letter Section */}
        <div className="max-w-4xl mx-auto bg-[#f3e8ff]  rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-semibold mb-6">A Letter from the GitaPro Team</h2>
          <div className="space-y-4 text-lg">
            <p>
              The Bhagavad Gita, or the "Song of God," is a timeless and eternal philosophical 
              dialogue that has guided millions for centuries. It is a part of the Hindu epic 
              "Mahabharata", set on the great battlefield of Kurukshetra, where the warrior 
              prince Arjuna faces a moral and emotional dilemma.
            </p>
            <p>
              In this moment of crisis, his charioteer and dear friend, Lord Krishna, imparts 
              profound spiritual teachings that address life's deepest questions about duty, 
              purpose, and self-realization. While steeped in ancient Hindu philosophy, the 
              Bhagavad Gita's insights transcend time and geography, offering universal wisdom 
              that is applicable for everyone.
            </p>
            <p>
              At its core, the Bhagavad Gita explores the complexities of human existence through 
              the lens of Arjuna's struggle to address the challenges in front of him. It explores 
              themes such as the understanding of the self, the importance of fulfilling one's 
              responsibilities (dharma), and the pursuit of a balanced, meaningful life.
            </p>
            <p>
              Through 700 poetic verses, Lord Krishna explains paths like devotion (bhakti), 
              disciplined action (karma yoga), and knowledge (jnana yoga), empowering individuals 
              to make enlightened choices in their own lives. The teachings emphasize self-awareness, 
              detachment from the outcomes of actions, and alignment with a higher purpose.
            </p>
            <p>
              Whether you seek guidance for personal challenges or simply a deeper connection to 
              yourself, the Gita provides a roadmap for navigating life's uncertainties. Its 
              messages are as relevant today as they were seven thousand years ago, encouraging 
              you to reflect on your own values, decisions, and aspirations.
            </p>
            <p>
              This app aims to break down the Gita's wisdom into relatable lessons, helping you 
              uncover its profound relevance to your daily life. Approach the Bhagavad Gita with 
              love, reverence, and an open mind.
            </p>
            <p className="italic mt-8">
              With Love,<br />
              The GitaPro Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
