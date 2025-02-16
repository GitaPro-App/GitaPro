"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Navbar from "../../components/LoggedIn/Navbar";
import Footer from "../../components/Footer";

export default function ChapterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading, error } = useUser();

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {!isLoading && !error && user?.sub && children}
        {!isLoading && !error && !user && (
          <p>Please log in to view this content.</p>
        )}
      </div>
      <Footer />
    </main>
  );
}
