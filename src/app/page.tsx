'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Navbar from "./components/LoggedIn/Navbar";
import Body from "./components/LoggedIn/Profile";
import Navbar1 from "./components/NotLoggedIn/Navbar";
import Body2 from "./components/NotLoggedIn/LandingPage"; 
import Footer from './components/NotLoggedIn/Footer'

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {user ? (
        <>
          <Navbar />
          <Body /> 
          <Footer/>
        </>
      ) : (
        <>
          <Navbar1 />
          <Body2 /> 
          <Footer/>
        </>
      )}
    </div>
  );
}
