'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';

interface Post {
  classroom_id?: string,
  author?: string;
  postText?: string;
}

const ClassroomComponent = () => {
  const [postText, setPostText] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [classroomId, setClassroomId] = useState<string>('');
  const [stream, setStream] = useState<Post[]>([]);
  const pathname = usePathname();
  const { user } = useUser();

  useEffect(() => {
    const code = pathname?.split('/').pop() || '';
    setClassroomId(code);
  }, [pathname]);

  const fetchStream = async () => {
    try {
      const response = await fetch('/api/classroom/getStream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ classroom_id: classroomId }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      const parsedStream = data.stream.map((item: string) => JSON.parse(item));
      setStream(parsedStream);
    } catch (error) {
      console.error('Error fetching stream:', error);
    }
  };

  useEffect(() => {
    if (classroomId) {
      fetchStream();
    }
  }, [classroomId]);

  const handleSendPost = async () => {
    if (!postText.trim()) {
      alert('Please enter a message before sending.');
      return;
    }

    setIsSubmitting(true);

    try {
      const postData: Post = {
        classroom_id: classroomId,
        author: user?.name || 'Anonymous',
        postText: postText
      };

      const response = await fetch('/api/classroom/createPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      await fetchStream(); // Fetch the updated stream after creating a post
      setPostText('');
    } catch (error) {
      console.error('Error sending post:', error);
      alert('Failed to send post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto px-4 max-w-6xl min-h-screen flex flex-col items-center">
      <div className="relative w-full h-40 bg-blue-600 text-white flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">REPLACE THIS</h1>
        <p className="mt-2 text-sm">
          Class code:{' '}
          <span className="font-mono bg-blue-800 px-2 py-1 rounded">REPLACE THIS</span>
        </p>
      </div>

      <nav className="w-full bg-white shadow-md mt-4 rounded-lg">
        <div className="flex justify-center gap-8 py-3">
          <span className="text-blue-600 border-b-2 border-blue-600 pb-2 cursor-pointer">
            Stream
          </span>
          <span className="text-gray-600 cursor-pointer hover:text-blue-600">People</span>
        </div>
      </nav>

      <div className="w-full max-w-xl mt-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Share something with your class
          </h2>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Type your message here..."
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="flex-grow p-3 border rounded-lg outline-none focus:ring focus:ring-blue-200"
              disabled={isSubmitting}
            />
            <button
              onClick={handleSendPost}
              disabled={isSubmitting}
              className={`p-3 text-white rounded-lg transition ${
                isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </div>

          <div className="mt-8 space-y-4">
          {stream.slice().reverse().map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    {post.author ? post.author.charAt(0).toUpperCase() : 'A'}
                  </div>
                  <div>
                    <div className="font-semibold">{post.author || 'Anonymous'}</div>
                    <div className="text-sm text-gray-500">Posted on {new Date().toLocaleDateString()}</div>
                  </div>
                </div>
              </div>

              
              <div className="mb-4">
                <p className="text-gray-700">{post.postText}</p>
              </div>
            </div>
          ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomComponent;
