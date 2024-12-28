'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SettingsComp from '../components/LoggedIn/Settings';
import Navbar from '../components/LoggedIn/Navbar'; 
import Footer from '../components/Footer';

export default function Settings() {
    const { user, isLoading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/api/auth/login');
        }
    }, [user, isLoading, router]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return null; // This will prevent any flash of content before redirect
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <SettingsComp />
            </main>
            <Footer />
        </div>
    );
}
