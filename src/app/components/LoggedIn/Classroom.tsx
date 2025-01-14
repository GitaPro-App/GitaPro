import React, { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link'

interface Classroom {
    code: string;
    id: string;
    name: string;
}
  

const Classroom = () => {
  const [studentClassrooms, setStudentClassrooms] = useState<Classroom[]>([]);
  const [teacherClassrooms, setTeacherClassrooms] = useState<Classroom[]>([]);
  const [newClassroomName, setNewClassroomName] = useState('');
  const [codeToJoin, setCodeToJoin] = useState('');
  const [message, setMessage] = useState('');

  const { user, isLoading } = useUser();

  const fetchClassrooms = async (sub: string) => {
    try {
      const response = await fetch(`/api/classroom/getUserClassrooms?sub=${encodeURIComponent(sub)}`);
      const data = await response.json();
  
      if (!response.ok) {
        setMessage(`Error: ${data.error ?? 'Unknown error'}`);
        return;
      }
  
      // Directly access the properties from the response object
      setStudentClassrooms(data.studentClassrooms || []);
      setTeacherClassrooms(data.ownerClassrooms || []);

      console.log()
  
    } catch (err) {
      console.error('Error fetching classrooms:', err);
      setMessage('Failed to fetch user classrooms');
    }
  };
  
  
  useEffect(() => {
    if (!isLoading && user?.sub) {
      fetchClassrooms(user.sub);
    }
  }, [user, isLoading]);

  const createClassroom = async () => {
    try {
      if (!user?.sub) {
        setMessage('User "sub" is missing');
        return;
      }
      if (!newClassroomName) {
        setMessage('Please enter a name for the classroom.');
        return;
      }

      const response = await fetch('/api/classroom/createClassroom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sub: user.sub, name: newClassroomName }),
      });
      const data = await response.json();

      if (!response.ok) {
        setMessage(`Error creating classroom: ${data.error ?? 'Unknown error'}`);
        return;
      }

      setMessage(`Created classroom "${data.name}" with code: ${data.code}`);
      setNewClassroomName('');
      fetchClassrooms(user.sub);
    } catch (err) {
      console.error('Error creating classroom:', err);
      setMessage('Failed to create classroom');
    }
  };

  const joinClassroom = async () => {
    try {
      if (!user?.sub) {
        setMessage('User "sub" is missing');
        return;
      }
      if (!codeToJoin) {
        setMessage('Please enter a classroom code to join.');
        return;
      }

      const response = await fetch('/api/classroom/joinClassroom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: codeToJoin, sub: user.sub }),
      });
      const data = await response.json();

      if (!response.ok) {
        setMessage(`Error joining classroom: ${data.message ?? data.error ?? 'Unknown error'}`);
        return;
      }

      setMessage('Successfully joined classroom!');
      setCodeToJoin('');
      fetchClassrooms(user.sub);
    } catch (err) {
      console.error('Error joining classroom:', err);
      setMessage('Failed to join classroom');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#3b2d5c] mb-12">Classroom</h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#3b2d5c] mb-4">Create a New Classroom</h3>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Classroom Name"
                value={newClassroomName}
                onChange={(e) => setNewClassroomName(e.target.value)}
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
              />
              <button
                onClick={createClassroom}
                className="px-6 py-2 bg-[#3b2d5c] text-white font-semibold rounded-md hover:bg-opacity-90 transition-colors"
              >
                Create
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#3b2d5c] mb-4">Join Classroom</h3>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Enter classroom code"
                value={codeToJoin}
                onChange={(e) => setCodeToJoin(e.target.value)}
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
              />
              <button
                onClick={joinClassroom}
                className="px-6 py-2 bg-[#FFB703] text-black font-semibold rounded-md hover:bg-opacity-90 transition-colors"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {message && (
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-8" role="alert">
            <p>{message}</p>
          </div>
        )}

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#3b2d5c] mb-4">Your Role: Student</h2>
            {studentClassrooms.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {studentClassrooms.map((classroom: Classroom) => (
                  <li key={classroom.id} className="py-4 flex justify-between items-center">
                    <div>
                      <p className="text-lg font-medium text-gray-900">{classroom.name}</p>
                      <p className="text-sm text-gray-500">Code: {classroom.code}</p>
                    </div>
                    <Link href={`/classroom/${classroom.id}`}>
                        <button className="px-4 py-2 bg-[#3b2d5c] text-white text-sm font-medium rounded-md hover:bg-opacity-90 transition-colors">
                            Enter
                        </button>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">You haven't joined any classrooms yet as a student.</p>
            )}
            <h2 className="text-2xl font-semibold text-[#3b2d5c] mb-4">Your Role: Teacher</h2>
            {teacherClassrooms.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {teacherClassrooms.map((classroom: Classroom) => (
                  <li key={classroom.id} className="py-4 flex justify-between items-center">
                    <div>
                      <p className="text-lg font-medium text-gray-900">{classroom.name}</p>
                      <p className="text-sm text-gray-500">Code: {classroom.code}</p>
                    </div>
                    <Link href={`/classroom/${classroom.id}`}>
                        <button className="px-4 py-2 bg-[#3b2d5c] text-white text-sm font-medium rounded-md hover:bg-opacity-90 transition-colors">
                            Enter
                        </button>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">You haven't joined any classrooms yet as a teacher.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classroom;
