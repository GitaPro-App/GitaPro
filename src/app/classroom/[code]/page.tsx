'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import ClassStream from '@/app/components/LoggedIn/ClassStream';

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
        <ClassStream/>
    );
}
