'use client';

import Chapter1Component from '../../components/LoggedIn/ChapterPages/Chapter1';
import Navbar from '../../components/LoggedIn/Navbar';
import Footer from '../../components/Footer';

export default function Chapter1() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        <Chapter1Component />
      </div>
      <Footer />
    </main>
  );
}
