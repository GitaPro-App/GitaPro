'use client';

import Chapter2Component from '../../components/LoggedIn/ChapterPages/Chapter2';
import Navbar from '../../components/LoggedIn/Navbar';
import Footer from '../../components/Footer';

export default function Chapter1() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        <Chapter2Component />
      </div>
      <Footer />
    </main>
  );
}
