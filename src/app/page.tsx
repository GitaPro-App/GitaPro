'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useState, useEffect } from 'react';
import Navbar from "./components/LoggedIn/Navbar";
import Body from "./components/LoggedIn/Profile";
import Navbar1 from "./components/NotLoggedIn/Navbar";
import Body2 from "./components/NotLoggedIn/LandingPage";
import Quiz from "./components/LoggedIn/Quiz";
import Footer from './components/Footer';


export default function Home() {
  const { user, error, isLoading } = useUser();
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);
  const [checkingUser, setCheckingUser] = useState(true);

  useEffect(() => {
    async function checkUserInDatabase() {
      if (user?.sub) {
        try {
          const response = await fetch(
            `/api/firstTimeUser?sub=${user.sub}&email=${user.email}&name=${user.name}`
          );
          const data = await response.json();
          setIsFirstTimeUser(data.isFirstTimeUser);
        } catch (error) {
          console.error('Failed to check user:', error);
        }
        setCheckingUser(false);
      } else {
        setCheckingUser(false);
      }
    }
  
    checkUserInDatabase();
  }, [user]);
  
  

  if (isLoading || checkingUser) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {!user ? (
        <>
          <Navbar1 />
          <Body2 />
          <Footer />
        </>
      ) : isFirstTimeUser ? (
        <>
          
          <Navbar/>
          <Quiz/> 
          <Footer/>
          
        </>
      ) : (
        <>
          <Navbar />
          <Body />
          <Footer />
        </>
      )}
    </>
  );
}
