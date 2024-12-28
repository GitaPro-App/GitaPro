'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Chapter1Component from '../../components/LoggedIn/ChapterPages/Chapter1';
import Navbar from '../../components/LoggedIn/Navbar'; 
import Footer from '../../components/Footer'; 

import { useUser } from '@auth0/nextjs-auth0/client';


export default function Chapter1() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/api/auth/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return null; // Return null since useEffect will handle the redirect
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        <Chapter1Component />
      </div> 
      <Footer/>
    </main>
  );

}
